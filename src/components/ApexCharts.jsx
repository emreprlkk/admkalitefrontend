import React, { useState, useEffect, useMemo } from 'react';
import Chart from 'react-apexcharts';
import ExcelJS from 'exceljs';
import { saveAs } from 'file-saver';
import '../App.css';

function ApexCharts({ width, title, data1_2023/*, data1_2024,*/,Y_axis, X_axis,saidi_hedef_24 }) {

  // `allData` dizisi her render sırasında yeniden oluşturulmaz
  const allData = useMemo(() => [...data1_2023/*, data1_2024,*/], [data1_2023/*, data1_2024,*/]);

  // `maxValue` sadece `allData` değiştiğinde yeniden hesaplanır
  const maxValue = useMemo(() => Math.max(...allData) * 1.1, [allData]);

  const [dataLabelsEnabled, setDataLabelsEnabled] = useState(false);

  const [chartOptions, setChartOptions] = useState({
    chart: {
      type: 'line',
      stacked: false,
      dropShadow: {
        enabled: true,
        color: '#000',
        top: 18,
        left: 7,
        blur: 10,
        opacity: 0.2
      },
      zoom: {
        type: 'x',
        enabled: true,
        autoScaleYaxis: true,
        onZoom: function (chartContext, { xaxis }) {
          const visibleData = allData.slice(xaxis.min, xaxis.max);
          const newMax = Math.max(...visibleData) * 1.1;
          chartContext.updateOptions({
            yaxis: {
              max: newMax
            }
          });
        }
      },
      toolbar: {
        autoSelected: 'zoom'
      },
    },
    dataLabels: {
      enabled: dataLabelsEnabled,
      style: {
        fontSize: '12px',
        colors: ['#304758']
      },
      dropShadow: {
        enabled: true,
        top: 1,
        left: 1,
        blur: 1,
        opacity: 0.45
      },
      formatter: function (val) {
        return val.toFixed(2);
      }
    },
    stroke: {
      curve: 'smooth',
      width: 3
    },
    markers: {
      colors: ['#FF4560'],
      size: 0.1,
    },
    grid: {
      borderColor: '#e7e7e7',
      row: {
        colors: ['#f3f3f3', 'transparent'],
        opacity: 0.5
      },
    },
    title: {
      text: title,
      align: 'center',
      margin: 60,
      offsetX: 0,
      offsetY: 0,
      floating: false,
      style: {
        fontSize: '14px',
        fontWeight: 'bold',
        color: 'black'
      }
    },
    yaxis: {
      title: {
        text: Y_axis
      },
      labels: {
        style: {
          fontWeight: 'bold',
          fontSize: '14px',
        },
        formatter: function (value) {
         // Sayısal değilse veya val null/undefined ise varsayılan değer döndür
  return (typeof value === "number" && !isNaN(value)) ? value.toFixed(3) : "0.000";
        }
      },
      tickAmount: 10,
      min: 0,
      max: maxValue  // Optimized max value calculation
    },
    xaxis: {
      categories: X_axis,
      tickAmount: 12,
      type: 'AYLAR',
      title: {
        text: 'AYLAR'
      },
      labels: {
        style: {
          fontWeight: 'bold'
        },
        formatter: function (val) {
          return val;
        }
      },
    },
    tooltip: {
      theme: 'dark',
      style: {
        fontSize: '12px',
        fontFamily: undefined
      },
      shared: true,
      x: {
        show: true
      }
    }
  });

  const [chartSeries, setChartSeries] = useState([
    {
      name: '2023 YILI',
      data: data1_2023
    }/*,
    {
      name: '2024 YILI',
      data: data1_2024
    }*/
  ]);

  useEffect(() => {
    setChartOptions(prevOptions => {
      const newOptions = {
        ...prevOptions,
        title: {
          ...prevOptions.title,
          text: title
        },
        yaxis: {
          ...prevOptions.yaxis,
          max: maxValue  // Use memoized max value
        }
      };

      if (JSON.stringify(prevOptions) !== JSON.stringify(newOptions)) {
        return newOptions;
      }
      return prevOptions;
    });

    const newSeries = [
      {
        name: '2023 YILI',
        data: data1_2023
      }/*,
      {
        name: '2024 YILI',
        data: data1_2024
      }*/
    ];

    setChartSeries(prevSeries => {
      if (JSON.stringify(prevSeries) !== JSON.stringify(newSeries)) {
        return newSeries;
      }
      return prevSeries;
    });
  }, [title, data1_2023, /*data1_2024,*/ maxValue]);

  const toggleDataLabels = () => {
    setDataLabelsEnabled(prevState => {
      const newState = !prevState;
      setChartOptions(prevOptions => ({
        ...prevOptions,
        dataLabels: {
          ...prevOptions.dataLabels,
          enabled: newState,
        }
      }));

      return newState;
    });
  };

  const exportToExcel = async () => {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Chart Data');

    worksheet.columns = [
      { header: 'Aylar', key: X_axis },
      { header: '2023 Yılı', key: 'data1_2023' }
      //{ header: '2024 Yılı', key: 'data1_2024' },
    ];

    data1_2023.forEach((value, index) => {
      worksheet.addRow({
        month: chartOptions.xaxis.categories[index],
        data1_2023: value,
       // data1_2024: data1_2024[index]
      });
    });

    const buffer = await workbook.xlsx.writeBuffer();
    const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    saveAs(blob, 'chart_data.xlsx');
  };

  return (
    <div className="chart" style={{ position: 'relative' }}>
      <button
        onClick={toggleDataLabels}
        style={{
          position: 'absolute',
          bottom: '20px',
          right: '10px',
          padding: '5px 10px',
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
          padding: '5px 10px',
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
      <div style={{
        position: 'absolute',
        bottom: '20px',
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
      </div>
      <div style={{
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
      </div>
      <Chart
        options={chartOptions}
        series={chartSeries}
        type="line"
        width={width}
        height="500px"
      />
    </div>
  );
}

export default ApexCharts;
