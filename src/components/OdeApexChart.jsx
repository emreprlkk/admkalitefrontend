
import React, { useState,  useEffect, useMemo, useCallback } from 'react';
import Chart from 'react-apexcharts';
import ExcelJS from 'exceljs';
import { saveAs } from 'file-saver';
import '../App.css';
 import ode_data_2025 from "./ode_data_2025.json"
const DEFAULT_X_AXIS = ["Ocak","Şubat","Mart","Nisan","Mayıs","Haziran",
                        "Temmuz","Ağustos","Eylül","Ekim","Kasım","Aralık"];
const OdeApexCharts = ({
  
 
    
  width = "100%",
  title = "ODE Grafik",
   directisletmecount,
 
  Y_axis = "ODE KWh",
    X_axis = DEFAULT_X_AXIS,  // referans sabit
 
   
}) => {
 

 




  const allData = useMemo(() => {
    console.log("allData yeniden hesaplandı");
    console.log(directisletmecount)
       const  result2025 =[];
       const  result2024 =[];
    for(let i=1 ; i <=12 ; i++){
      const xy25=ode_data_2025["2025"][i][directisletmecount].isletme_ode
        const xy24=ode_data_2025["2024"][i][directisletmecount].isletme_ode
      result2025.push(xy25)
      result2024.push(xy24)
     }

console.log( result2025) 
console.log( result2024) 
   
   return {
  result2025: result2025,
  result2024: result2024
};
  }, [directisletmecount]);

  const maxValue = useMemo(() => {
    if (allData.result2025.length === 0) return 100;
    return Math.max(...allData.result2024) * 1.01;
  }, [allData]);

  const [dataLabelsEnabled, setDataLabelsEnabled] = useState(false);
  const [chartOptions, setChartOptions] = useState({});
  const [chartSeries, setChartSeries] = useState([]);
 
 
 
 

 
  
  useEffect(() => {
    setChartOptions({
      chart: {
       
      
        type: 'line',
        
        stacked: false,
        dropShadow: { enabled: true, color: '#000', top: 18, left: 7, blur: 10, opacity: 1.0 },
        zoom: {
          type: 'x',
          enabled: true,
          autoScaleYaxis: true,
          onZoom: (chartContext, { xaxis }) => {
            const visibleData = allData.slice(xaxis.min, xaxis.max);
            const newMax = Math.max(...visibleData) * 1.1;
            chartContext.updateOptions({ yaxis: { max: newMax } });
          }
        },
        toolbar: { autoSelected: 'zoom' },
      },
       
      dataLabels: {
        enabled: dataLabelsEnabled,
        style: { fontSize: '12px', colors: ['#304758'] },
        dropShadow: { enabled: true, top: 1, left: 1, blur: 1, opacity: 0.45 },
        formatter: (val) => (typeof val === 'number' ? val.toFixed(2) : '0.00')
      },
      stroke: { curve: 'smooth', width: 3, dashArray: [5, 0] },
      markers: { colors: ['#FF4560'], size: 4 },
      grid: { borderColor: '#e7e7e7', row: { colors: ['#f3f3f3', 'transparent'], opacity: 0.5 }},
      title: { text: title, align: 'center', margin: 60, style: { fontSize: '14px', fontWeight: 'bold', color: 'black' }},
      yaxis: {
        title: { text:"ODE  DEGERİ (KWh)"},
        labels: {
          style: { fontWeight: 'bold', fontSize: '14px' },
          formatter: (value) => (typeof value === 'number' ? value.toFixed(3) : '0.000')
        },
        tickAmount: 10,
        min: 0,
        max: maxValue
      },
      xaxis: {
        categories: X_axis,
        tickAmount: 12,
        title: { text: 'AYLAR' },
        labels: { style: { fontWeight: 'bold' } }
      },
      tooltip: {
        theme: 'dark',
        style: { fontSize: '12px' },
        shared: true,
        x: { show: true }
      },
      legend: { show: true, onItemClick: { toggleDataSeries: true } }
    });
  }, [  maxValue, dataLabelsEnabled]);
  
  useEffect(() => {
    setChartSeries([
     // { name: '2025 HEDEFLER', data: saidiSaifiScoreData },
    //  { name: '2022 YILI', data: previousData[type === "saidi" ? "saidi22" : "saifi22"],hidden: true },
     // { name: '2023 YILI', data: previousData[type === "saidi" ? "saidi23" : "saifi23"] ,hidden: true},
    //  { name: '2024 YILI', data: previousData[type === "saidi" ? "saidi24" : "saifi24"],hidden: true },
         { name: '2024 YILI', data: allData.result2024 },
      { name: '2025 YILI', data: allData.result2025 }
  
    ]);
   // console.log(" d1 ",previousData[type === "saidi" ? "saidi22" : "saifi22"])
  }, [ allData]);

  const toggleDataLabels = useCallback(() => {
    setDataLabelsEnabled(prev => !prev);
  }, []);

  const exportToExcel = useCallback(async () => {
    if (!chartSeries.length) return;

    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Chart Data');
    
    worksheet.columns = [
      { header: 'Aylar', key: 'month' },
   //   { header: '2025 HEDEFLER', key: 'target2025' },
     // { header: '2022 YILI', key: 'year2022' },
     // { header: '2023 YILI', key: 'year2023' },
    //  { header: '2024 YILI', key: 'year2024' },
      { header: '2025 YILI', key: 'year2025' }
    ];

    chartSeries[0]?.data.forEach((_, index) => {
      worksheet.addRow({
        month: X_axis[index],
      //  target2025: chartSeries[0]?.data[index],
     //   year2022: chartSeries[1]?.data[index],
      //  year2023: chartSeries[2]?.data[index],
     //   year2024: chartSeries[3]?.data[index],
        year2025: chartSeries[4]?.data[index]
      });
    });

    const buffer = await workbook.xlsx.writeBuffer();
    const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    saveAs(blob, 'chart_data.xlsx');
  }, [chartSeries, X_axis]);

  return (
    <div className="chart" style={{ position: 'relative' }}>
      <button
        onClick={toggleDataLabels}
        style={{
          position: 'absolute',
          bottom: '1px',
          right: '6px',
          padding: '1px 11px',
          backgroundColor: '#ff4560',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          zIndex: 10,
          pointerEvents: 'auto'
        }}>
        Veri Göster/Gizle
      </button>
      <button
        onClick={exportToExcel}
        style={{
          position: 'absolute',
          top: '50px',
          right: '10px',
          padding: '1px 1px',
          backgroundColor: '#28a745',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          zIndex: 10,
          pointerEvents: 'auto'
        }}>
        Verileri Excel'e Aktar
      </button>
     {/* <div style={{
        position: 'absolute',
        top: '50px',
        left: '10px',
        padding: '5px 10px',
        backgroundColor: 'BLACK',
        color: 'red',
        border: 'none',
        borderRadius: '5px',
        fontWeight: "bold",
        fontSize: "10px",
        zIndex: 10,
        pointerEvents: 'auto'
      }}>
        2025 HEDEFİ {saidi_hedef_24}
      </div>*/}
      <Chart
        
        options={chartOptions}
        series={chartSeries}
        type="line"
        width={width}
        height="500px"
      />
    </div>
  );
};

export default React.memo(OdeApexCharts);























/*      const  result =[];
    for(let i=1 ; i <=12 ; i++){
      const xy=ode_data_2025["2025"][i][navbarisletmecount].isletme_ode
      result.push(xy)
     }

console.log( result) */