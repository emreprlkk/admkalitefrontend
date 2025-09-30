import React from "react";
import ReactApexChart from "react-apexcharts";

const MonthlyColumnChart = ({propsarraychart=[]}) => {
  // 1..31 gün
  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  // Fake değerler (10–100 arası)
  const data = days.map(() => Math.floor(Math.random() * 91) + 10);

  const options = {
    chart: {
      type: "bar",
      toolbar: { show: false },
      animations: { enabled: true, easing: "easeinout", speed: 600 },
      fontFamily:
        "Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial",
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "50%",
        borderRadius: 8,
        borderRadiusApplication: "end",
        dataLabels: { position: "top" },
      },
    },
    dataLabels: {
      enabled: true,
      formatter: (val) => Math.round(val),
      offsetY: -12,
      style: { fontSize: "11px", fontWeight: 600 },
    },
    stroke: { show: true, width: 2 },
    xaxis: {
      categories: days,
      axisTicks: { show: false },
      axisBorder: { show: false },
      labels: { style: { fontSize: "12px" } },
      title: { text: "Gün" },
    },
    yaxis: {
      labels: {
        formatter: (val) => Math.round(val),
      },
      title: { text: "Değer" },
    },
    grid: {
      strokeDashArray: 4,
    },
    tooltip: {
      theme: "dark",
      y: { formatter: (val) => Math.round(val) },
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "light",
        type: "vertical",
        shadeIntensity: 0.3,
        opacityFrom: 0.95,
        opacityTo: 0.75,
        stops: [0, 90, 100],
      },
    },
    colors: ["#6366F1"], // istersen kaldır; Apex varsayılan rengi kullanır
    legend: { show: false },
  };

  const series = [
    {
      name: "Değer",
      data:propsarraychart,
    },
  ];

  return (
    <div className="mt-6 rounded-2xl border-amber-200 border-4 ml-2 w-170 bg-red-500">   <ReactApexChart
      options={options}
      series={series}
      type="bar"
      height={200}
    /> </div>
 
  );
};

export default MonthlyColumnChart;
