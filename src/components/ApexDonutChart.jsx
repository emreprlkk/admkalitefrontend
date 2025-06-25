// ApexDonutChart.jsx
import React from "react";
import Chart from "react-apexcharts";


const ApexDonutChart = ({ title, labels, series, colors }) => {
  
  const options = {
    chart: {
      type: 'donut',
    },
    labels: labels,
    title: {
      text: title,
      align: 'center',
      style: {
        fontSize: '20px',
        fontWeight: 'bold',
        color: '#000',
      },
      offsetY: -5, // 👈 Title’ı aşağı kaydırır
      offsetX: -55, // 👈 Title’ı aşağı kaydırır
    },
    
    legend: {
      position: 'right',
      fontSize: '12px',
      
    },
    
    plotOptions: {
      pie: {
        donut: {
          size: '70%',
          labels: {
            show: true,
            name: {
              show: true,
              fontSize: '16px',
            },
            value: {
              show: true,
              fontSize: '14px',
              color: '#000', // Value text black
            },
            total: {
              show: true,
              label: 'Toplam SAİDİ',
              fontSize: '16px',
              color: '#000', // Total label black
            },
            
          }
        }
      }
    },
    colors: colors || ['#FF4560', '#00E396', '#008FFB', '#FEB019'],
    dataLabels: {
      enabled: true,
      style: {
        fontSize: '10px',
        colors: ['white'], // <-- Burada dilim üzerindeki rakamların rengi belirlenir
      },
    },
    
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: 'bottom'
          }
        }
      }
    ]
  };

  return (
    <div style={{ maxWidth: "520px", margin: "0 auto" }}>
      <Chart options={options} series={series} type="donut" width="100%" />
    </div>
  );
};

export default ApexDonutChart;
