// ApexDonutChartLeft.jsx
import React from "react";
import Chart from "react-apexcharts";

const ApexDonutChartLeft = () => {
    const options = {
        labels: ['A', 'B'],
        title: {
          text: '2025 Mayıs ADM -İŞLETMELER',
          align: 'center',
          style: {
            fontSize: '18px'
          }
        }
      };
      
  const series = [60, 40];

  return (
    <Chart options={options} series={series} type="donut" width="300" height="300" />
  );
};

export default ApexDonutChartLeft;
