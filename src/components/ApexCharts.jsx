
import React, { useState,  useEffect, useMemo, useCallback } from 'react';
import Chart from 'react-apexcharts';
import ExcelJS from 'exceljs';
import { saveAs } from 'file-saver';
import '../App.css';
import { use2025SaidiSaifiData } from 'hooks/UseData';

const ApexCharts = ({
  onTotalSaidi,
  isletme,
  chartId,
  width = "100%",
  title = "Grafik",
  saidiSaifiScoreData = [],
  previousyearsaididata = { saidi22: [], saidi23: [], saidi24: [] },
  previoussaifidata = { saifi22: [], saifi23: [], saifi24: [] },
  Y_axis = "SAİDİ DEĞERİ (DAKİKA)",
  X_axis = ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", 
           "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"],
  //saidi_hedef_24 = "0.000",
  type //= "saidi" // "saidi" veya "saifi" seçimi
}) => {
//console.log("geçen poprs ",type)
  const {Datax } = use2025SaidiSaifiData();
//console.log("apexcharta gelen Datax",Datax)
// Veri tipine göre önceki yılların verilerini seç
const previousData = type === "saidi" ? previousyearsaididata : previoussaifidata;

 /// SERİ İÇİN GRAPHA DİZİ DÖNER 
  const UploadFileSaidiAndSaifi = useCallback((nestedObject, text,type) => {
    const textToIndexMap = new Map([
      ["ACİPAYAM isletme", 1],
      ["DENİZLİ MERKEZ isletme", 6],
      ["AYDİN MERKEZ isletme", 2],
      ["BODRUM isletme", 3],
      ["CİNE isletme", 4],
      ["CİVRİL isletme", 5],
      ["DİDİM isletme", 7],
      ["FETHİYE isletme", 8],
      ["KUSADASİ isletme", 9],
      ["MARMARİS isletme", 10],
      ["MİLAS isletme", 11],
      ["MUGLA MERKEZ isletme", 12],
      ["NAZİLLİ isletme", 13],
      ["ORTACA isletme", 14],
      ["SARAYKOY isletme", 15],
      ["SOKE isletme", 16],
      ["AYDIN BOLGE", 17],
      ["DENIZLI BOLGE", 19],
      ["MUGLA BOLGE", 20],
      ["BODRUM BOLGE", 18],
       ["ADM", 21],
    ]);

    const targetIndex = textToIndexMap.get(text);
     
    const vtValues = [];
    
    if (typeof targetIndex === 'number') {
     
   // 12 ay için döngü
  for (let month = 1; month <= 12; month++) {
    const monthData = nestedObject[month];
 
    if (monthData && monthData[targetIndex]) {
   let value;

if (type === "saidi") {
    value = monthData[targetIndex].SAİDİ || 0;
} else if (type === "saifi") {
    value = monthData[targetIndex].SAİFİ || 0;
} else if (type === "ode") {
    value = monthData[targetIndex].ODE || 0;
} else {
    value = 0;  // Beklenmeyen bir durum için güvenlik önlemi
}

vtValues.push(value);

      
    } 
   
    else {
      
vtValues.push(0);
    }
    
  }
    }
     
    return vtValues;
  }, []
);

 
  const calculatedData = useMemo(() => 
    UploadFileSaidiAndSaifi(Datax, isletme,type)
  , [Datax, isletme,UploadFileSaidiAndSaifi]);
  
  /* 🔹 2025 toplamını hesapla */
  const totalSaidi2025 = useMemo(
    () => calculatedData.reduce((s, v) => s + v, 0),
    [calculatedData]
  );

  /* 🔹 Parent’a bildir */
  useEffect(() => {
    if (onTotalSaidi) onTotalSaidi(totalSaidi2025);
  }, [totalSaidi2025, onTotalSaidi]);

  const allData = useMemo(() => {
    const validData1 = Array.isArray(saidiSaifiScoreData) ? saidiSaifiScoreData : [];
    const validPrevious22 = Array.isArray(previousData[type === "saidi" ? "saidi22" : "saifi22"]) ? previousData[type === "saidi" ? "saidi22" : "saifi22"] : [];
    const validPrevious23 = Array.isArray(previousData[type === "saidi" ? "saidi23" : "saifi23"]) ? previousData[type === "saidi" ? "saidi23" : "saifi23"] : [];
    const validPrevious24 = Array.isArray(previousData[type === "saidi" ? "saidi24" : "saifi24"]) ?
     previousData[type === "saidi" ? "saidi24" : "saifi24"] : [];
    const validCalculated = Array.isArray(calculatedData) ? calculatedData : [];
   
    return [
      ...validData1,
      ...validPrevious22,
      ...validPrevious23,
      ...validPrevious24,
      ...validCalculated
    ].filter(item => typeof item === 'number' && !isNaN(item));
  }, [saidiSaifiScoreData, previousData, calculatedData, type]);

  const maxValue = useMemo(() => {
    if (allData.length === 0) return 100;
    return Math.max(...allData) * 1.01;
  }, [allData]);

  const [dataLabelsEnabled, setDataLabelsEnabled] = useState(false);
  const [chartOptions, setChartOptions] = useState({});
  const [chartSeries, setChartSeries] = useState([]);
 
 
/* 1 ▸ modern rozet stilleri */
const redBadge  = {
  background : "#e53935",
  color      : "#fff",
  fontSize   : "11px",
  fontWeight : 600,
  borderRadius : 6,
  padding    : { left: 6, right: 6, top: 2, bottom: 2 },
  shadow     : "0 1px 3px rgba(0,0,0,.3)"
};

const greenBadge = {
  ...redBadge,
  background : "#43a047"               // yeşil
};

/* 2 ▸ nokta anotasyonları */
const crossAnnotations = useMemo(() =>
  X_axis.map((cat, idx) => {
    const target = Number(saidiSaifiScoreData[idx]);  // 2025 HEDEFLER
    const actual = Number(calculatedData[idx]);       // 2025 YILI
   
    // 🔸 EN ÖNEMLİ KISIM → 0 veya NaN ise atla
    if (
      !isFinite(target) || !isFinite(actual) ||        // sayı değilse
      target === 0      || actual === 0                // değer 0’sa
    ) return null;

    const base = {
      x: cat,        // kategorik eksen
      y: actual,     // nokta üzerine bindir
      marker: { size: 0 }
    };

    return actual > target
      ? {             // ★ hedefi karşıladı / geçti   → kırmızı çarpı
          ...base,
          label: {
            text : "✖",
            offsetY: -12,
            style  : redBadge
          }
        }
      : {             // ★ hedefin altında kaldı       → yeşil tik
          ...base,
          label: {
            text : "✓",
            offsetY: -12,
            style  : greenBadge
          }
        };
  }).filter(Boolean),
[ X_axis, saidiSaifiScoreData, calculatedData ]);
  
  useEffect(() => {
    setChartOptions({
      chart: {
        id: chartId,
      
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
      annotations: {
        points: crossAnnotations             // 👈 yeni ek
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
        title: { text:    type==="saidi" ? Y_axis :"SAİFİ DEGERİ"},
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
  }, [title, Y_axis, X_axis, maxValue, dataLabelsEnabled, crossAnnotations]);
  
  useEffect(() => {
    setChartSeries([
      { name: '2025 HEDEFLER', data: saidiSaifiScoreData },
      { name: '2022 YILI', data: previousData[type === "saidi" ? "saidi22" : "saifi22"],hidden: true },
      { name: '2023 YILI', data: previousData[type === "saidi" ? "saidi23" : "saifi23"] ,hidden: true},
      { name: '2024 YILI', data: previousData[type === "saidi" ? "saidi24" : "saifi24"],hidden: true },
      { name: '2025 YILI', data: calculatedData }
  
    ]);
   // console.log(" d1 ",previousData[type === "saidi" ? "saidi22" : "saifi22"])
  }, [saidiSaifiScoreData, previousData, calculatedData, type]);

  const toggleDataLabels = useCallback(() => {
    setDataLabelsEnabled(prev => !prev);
  }, []);

  const exportToExcel = useCallback(async () => {
    if (!chartSeries.length) return;

    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Chart Data');
    
    worksheet.columns = [
      { header: 'Aylar', key: 'month' },
      { header: '2025 HEDEFLER', key: 'target2025' },
      { header: '2022 YILI', key: 'year2022' },
      { header: '2023 YILI', key: 'year2023' },
      { header: '2024 YILI', key: 'year2024' },
      { header: '2025 YILI', key: 'year2025' }
    ];

    chartSeries[0]?.data.forEach((_, index) => {
      worksheet.addRow({
        month: X_axis[index],
        target2025: chartSeries[0]?.data[index],
        year2022: chartSeries[1]?.data[index],
        year2023: chartSeries[2]?.data[index],
        year2024: chartSeries[3]?.data[index],
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

export default React.memo(ApexCharts);