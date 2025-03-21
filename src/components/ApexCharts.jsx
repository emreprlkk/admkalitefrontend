// import React, { useState, useEffect, useMemo ,useContext,useCallback} from 'react';
// import Chart from 'react-apexcharts';
// import ExcelJS from 'exceljs';
// import { saveAs } from 'file-saver';
// import '../App.css';

// import { DataContext } from './DataContext'
// function ApexCharts({isletme,chartId ,width, title,  saidiSaifiScoreData, previousyearsaididata: saidi22,saidi23,saidi24,Y_axis, X_axis,saidi_hedef_24 }) {
//   const dataxx = useContext(DataContext);
//   //console.log(dataxx.data[8][8])
//   //console.log("gelen ilk ",isletme)
//   //const [myState, setMyState] = useState(isletme); // Props'u state'e aktarıyoruz
//   const uploadfileSaidiOrSaifiData = useCallback(
//     (data, isletme) => {
//       const result = UploadFileSaidiAndSaifi(data, isletme);
       
//       return result;
//     },
//     [dataxx.data, isletme]
//   );
 
// const calculatedData = uploadfileSaidiOrSaifiData(dataxx.data, isletme);
 
//   const allData = useMemo(() => {
//     const validData1 = Array.isArray(saidiSaifiScoreData) ? saidiSaifiScoreData :[];
//     const validPrevious22 = Array.isArray(saidi22) ? saidi22 :[];
//     const validPrevious23 = Array.isArray(saidi23) ? saidi23 :[];
//     const validPrevious24 = Array.isArray(saidi24) ? saidi24 :[];
//     const validPreviousuploadfileSaidiOrSaifiData=Array.isArray(calculatedData)?calculatedData:[];
//     return [...validData1, ...validPrevious22,...validPrevious23,...validPrevious24,...validPreviousuploadfileSaidiOrSaifiData];
//   }, [saidiSaifiScoreData, saidi22,saidi23,saidi24, calculatedData]);
//   // `maxValue` sadece `allData` değiştiğinde yeniden hesaplanır
//   const maxValue = useMemo(() => Math.max(...allData) * 1.01, [allData]);
//  //console.log("max all data meto ",Math.max(...allData))
//   //console.log("previousyearsaididata:", saidi22);
//   const [dataLabelsEnabled, setDataLabelsEnabled] = useState(false);
  
//   const [chartOptions, setChartOptions] = useState({
//     chart: {
//       id: chartId ,
//       type: 'line',
//       stacked: false,
//       dropShadow: {
//         enabled: true,
//         color: '#000',
//         top: 18,
//         left: 7,
//         blur: 10,
//         opacity: 1.0
//       },
//       zoom: {
//         type: 'x',
//         enabled: true,
//         autoScaleYaxis: true,
//         onZoom: function (chartContext, { xaxis }) {
//           const visibleData = allData.slice(xaxis.min, xaxis.max);
//           const newMax = Math.max(...visibleData) * 1.1;
//           chartContext.updateOptions({
//             yaxis: {
//               max: newMax
//             }
//           });
//         }
//       },
     
//       toolbar: {
//         autoSelected: 'zoom'
//       },
//     },
//     dataLabels: {
//       enabled: dataLabelsEnabled,
//       style: {
//         fontSize: '12px',
//         colors: ['#304758']
//       },
//       dropShadow: {
//         enabled: true,
//         top: 1,
//         left: 1,
//         blur: 1,
//         opacity: 0.45
//       },
//       formatter: function (val) {
//         return val.toFixed(2);
//       }
//     },
//     stroke: {
//       curve: 'smooth',
//       width: 3,
//       dashArray: [5, 0], // İlk seri düz çizgi, ikinci seri kesikli çizgi (dashArray değeri)
//     },
//     markers: {
//       colors: ['#FF4560'],
//       size: 4,
//     },
//     grid: {
//       borderColor: '#e7e7e7',
//       row: {
//         colors: ['#f3f3f3', 'transparent'],
//         opacity: 0.5
//       },
//     },
//     title: {
//       text: title,
//       align: 'center',
//       margin: 60,
//       offsetX: 0,
//       offsetY: 0,
//       floating: false,
//       style: {
//         fontSize: '14px',
//         fontWeight: 'bold',
//         color: 'black'
//       }
//     },
//     yaxis: {
//       title: {
//         text: Y_axis
//       },
//       labels: {
//         style: {
//           fontWeight: 'bold',
//           fontSize: '14px',
//         },
//         formatter: function (value) {
//          // Sayısal değilse veya val null/undefined ise varsayılan değer döndür
//   return (typeof value === "number" && !isNaN(value)) ? value.toFixed(3) : "0.000";
//         }
//       },
//       tickAmount: 10,
//       min: 0,
//       max: maxValue  // Optimized max value calculation
//     },
//     xaxis: {
//       categories: X_axis,
//       tickAmount: 12,
//       type: 'AYLAR',
//       title: {
//         text: 'AYLAR'
//       },
//       labels: {
//         style: {
//           fontWeight: 'bold'
//         },
//         formatter: function (val) {
//           return val;
//         }
//       },
//     },
//     tooltip: {
//       theme: 'dark',
//       style: {
//         fontSize: '12px',
//         fontFamily: undefined
//       },
//       shared: true,
//       x: {
//         show: true
//       }
//     }
//   });


//   //console.log("upload fonk sonucu ",uploadfileSaidiOrSaifiData)
//   //console.log("isletme propsu",myState)
//   const [chartSeries, setChartSeries] = useState([
//     {
//       name: '2025 HEDEFLER ',
//       data: saidiSaifiScoreData
//     },
//     {
//       name: '2022 YILI',
//       data: (saidi22)
//     },
//     {
//       name: '2023 YILI',
//       data: (saidi23)
//     },
//     {
//       name: '2024 YILI',
//       data: (saidi24)
//     },
//     {
//       name:"2025 Yılı",
//       data:(calculatedData)
//     },
  
//   ]);

//   useEffect(() => {
//     setChartOptions(prevOptions => {
//       const newOptions = {
//         ...prevOptions,
//         title: {
//           ...prevOptions.title,
//           text: title
//         },
//         yaxis: {
//           ...prevOptions.yaxis,
//           max: maxValue  // Use memoized max value
//         }
//       };

//       if (JSON.stringify(prevOptions) !== JSON.stringify(newOptions)) {
//         return newOptions;
//       }
//       return prevOptions;
//     });

//     const newSeries = [
//       {
//         name: '2025 HEDEFLER ',
//         data: saidiSaifiScoreData
//       },
//       {
//         name: '2022 YILI',
//         data: saidi22
//       },
      
//     {
//       name: '2023 YILI',
//       data: (saidi23)
//     },
//     {
//       name: '2024 YILI',
//       data: (saidi24)
//     },
//     {name:"2025 Yılı",
//       data:(calculatedData)
//     },
//     ];

//     setChartSeries(prevSeries => {
//       if (JSON.stringify(prevSeries) !== JSON.stringify(newSeries)) {
//         return newSeries;
//       }
//       return prevSeries;
//     });
//   }, [title, saidiSaifiScoreData, saidi22 || [], maxValue]);

//   const toggleDataLabels = () => {
//     setDataLabelsEnabled(prevState => {
//       const newState = !prevState;
//       setChartOptions(prevOptions => ({
//         ...prevOptions,
//         dataLabels: {
//           ...prevOptions.dataLabels,
//           enabled: newState,
//         }
//       }));

//       return newState;
//     });
//   };

//   const exportToExcel = async () => {


//     console.log("dddddddddddddddddddd",state)
//     const workbook = new ExcelJS.Workbook();
//     const worksheet = workbook.addWorksheet('Chart Data');

//     worksheet.columns = [
//       { header: 'Aylar', key: X_axis },
//       { header: 'AYLIK HEDEFLER', key: 'data1_2023' },
//       { header: '2022 Yılı', key: 'previousyearsaididata' },
//     ];

//     saidiSaifiScoreData.forEach((value, index) => {
//       worksheet.addRow({
//         month: chartOptions.xaxis.categories[index],
//         data1_2023: value,
//        previousyearsaididata: saidi22.saidi22[index]
//       });
//     });

//     const buffer = await workbook.xlsx.writeBuffer();
//     const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
//     saveAs(blob, 'chart_data.xlsx');
//   };

//   return (
//     <div className="chart" style={{ position: 'relative' }}>
      
//       <button
//         onClick={toggleDataLabels}
//         style={{
//           position: 'absolute',
//           bottom: '1px',
//           right: '6px',
//           padding: '1px 11px',
//           backgroundColor: '#ff4560',
//           color: 'white',
//           border: 'none',
//           borderRadius: '5px',
//           cursor: 'pointer',
//           zIndex: 10,
//           pointerEvents: 'auto'
//         }}>
//         Veri Göster/Gizle
//       </button>
//       <button
//         onClick={exportToExcel}
//         style={{
//           position: 'absolute',
//           top: '50px',
//           right: '10px',
//           padding: '1px 1px',
//           backgroundColor: '#28a745',
//           color: 'white',
//           border: 'none',
//           borderRadius: '5px',
//           cursor: 'pointer',
//           zIndex: 10,
//           pointerEvents: 'auto'
//         }}>
//         Verileri Excel'e Aktar
//       </button>
//     { /* <div style={{
//         position: 'absolute',
//         bottom: '20px',
//         left: '10px',
//         padding: '5px 10px',
//         backgroundColor: 'yellow',
//         color: 'red',
//         border: 'none',
//         borderRadius: '5px',
//         fontWeight: "bold",
//         fontSize: "10px",
//         zIndex: 10,
//         pointerEvents: 'auto'
//       }}>
//       </div>*/ }
//       <div style={{
//         position: 'absolute',
//         top: '50px',
//         left: '10px',
//         padding: '5px 10px',
//         backgroundColor: 'BLACK',
//         color: 'red',
//         border: 'none',
//         borderRadius: '5px',
//         fontWeight: "bold",
//         fontSize: "10px",
//         zIndex: 10,
//         pointerEvents: 'auto'
//       }}>
//         2025 HEDEFİ {saidi_hedef_24}
//       </div>
     
//       <Chart
//         options={chartOptions}
//         series={chartSeries}
//         type="line"
//         width={width}
//         height="500px"
//       />
      
//     </div>
//   );
// }


// function UploadFileSaidiAndSaifi(nestedObject, text) {
//   const vtValues = [];
//  // const newtext=text.toLowerCase();
//  // console.log("newtext ",text)
//   let targetIndex = null;
// //console.log("function içindeki text " ,text)
//   // Metne göre hedef nesneyi belirle
//   // if (text === "ACİPAYAM isletme") {
//   //   targetIndex = 1; // 5. nesne
//   // } else if (text === "DENİZLİ MERKEZ isletme") {
//   //   targetIndex = 6; // 6. nesne
//   // }
//   // else if (text === "AYDİN MERKEZ isletme") {
//   //   targetIndex = 2; // 6. nesne
//   // }
//   // else if (text === "BODRUM isletme") {
//   //   targetIndex = 3; // 6. nesne
//   // }
//   // else if (text === "CİNE isletme") {
//   //   targetIndex = 4; // 6. nesne
//   // }
//   // else if (text === "CİVRİL isletme") {
//   //   targetIndex = 5; // 6. nesne
//   // }
//   // else if (text === "DİDİM isletme") {
//   //   targetIndex = 7; // 6. nesne
//   // }
//   // else if (text === "FETHİYE isletme") {
//   //   targetIndex = 8; // 6. nesne
//   // }
//   // else if (text === "KUSADASİ isletme") {
//   //   targetIndex = 9; // 6. nesne
//   // }
//   // else if (text === "MARMARİS isletme") {
//   //   targetIndex = 10; // 6. nesne
//   // } 
//   //   else if (text === "MİLAS isletme") {
//   //     targetIndex = 11; // 6. nesne
//   //   }
//   //   else if (text === "MUGLA MERKEZ isletme") {
//   //     targetIndex = 12; // 6. nesne
//   //   }
//   //   else if (text === "NAZİLLİ isletme") {
//   //     targetIndex = 13; // 6. nesne
//   //   }
//   //   else if (text === "ORTACA isletme") {
//   //     targetIndex = 14; // 6. nesne
//   //   }
//   //   else if (text === "SARAYKOY isletme") {
//   //     targetIndex = 15; // 6. nesne
//   //   }
//   //   else if (text === "SOKE isletme") {
//   //     targetIndex = 16; // 6. nesne
//   //   }
//   //   else {
//   //   console.log("Geçersiz metin: 'xx' veya 'xy' olmalıdır.",text);
//   // }
//   const textToIndexMap = new Map([
//     ["ACİPAYAM isletme", 1],
//     ["DENİZLİ MERKEZ isletme", 6],
//     ["AYDİN MERKEZ isletme", 2],
//     ["BODRUM isletme", 3],
//     ["CİNE isletme", 4],
//     ["CİVRİL isletme", 5],
//     ["DİDİM isletme", 7],
//     ["FETHİYE isletme", 8],
//     ["KUSADASİ isletme", 9],
//     ["MARMARİS isletme", 10],
//     ["MİLAS isletme", 11],
//     ["MUGLA MERKEZ isletme", 12],
//     ["NAZİLLİ isletme", 13],
//     ["ORTACA isletme", 14],
//     ["SARAYKOY isletme", 15],
//     ["SOKE isletme", 16]
//   ]);
  
//   // targetIndex'i bulma
//    targetIndex = textToIndexMap.get(text);
  

//   // 12 ay için döngü
//   for (let month = 1; month <= 12; month++) {
//     const monthData = nestedObject[month];
//     //console.log(monthData[targetIndex])
//    // console.log(monthData[targetIndex].SAİDİ)
//     if (monthData && monthData[targetIndex] ) {
//       // Hedef nesnenin VT değerini diziye ekle
//       vtValues.push(monthData[targetIndex].SAİDİ);
//     } else {
//       console.log(`Ay ${month} içinde ${targetIndex}. nesne veya VT değeri bulunamadı.`);
//     }
//   }
// //console.log(vtValues)
//   return vtValues;
// }
// export default ApexCharts;













// import React, { useState, useEffect, useMemo, useCallback, useContext } from 'react';
// import Chart from 'react-apexcharts';
// import ExcelJS from 'exceljs';
// import { saveAs } from 'file-saver';
// import '../App.css';
// import { DataContext } from './DataContext';

// const MemoizedChart = React.memo(({ options, series, width }) => (
//   <Chart 
//     options={options} 
//     series={series} 
//     type="line" 
//     width={width} 
//     height="500px" 
//   />
// ));

// const ApexCharts = ({
//   isletme,
//   chartId,
//   width = "100%",
//   title = "Grafik",
//   saidiSaifiScoreData = [],
//   previousyearsaididata = { saidi22: [], saidi23: [], saidi24: [] }, // Doğru destructuring
//   Y_axis = "Y Ekseni",
//   X_axis = ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", 
//            "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"],
//   saidi_hedef_24 = "0.000"
// }) => {
//   const { data: nestedObject } = useContext(DataContext);

//   // ChartOptions state'i ve set fonksiyonu
//   const [chartOptions, setChartOptions] = useState({});
//   const [chartSeries, setChartSeries] = useState([]);
//   const [dataLabelsEnabled, setDataLabelsEnabled] = useState(false);

//   // Upload fonksiyonu
//   const UploadFileSaidiAndSaifi = useCallback((text) => {
//     const textToIndexMap = new Map([
//       ["ACİPAYAM isletme", 1],
//       ["DENİZLİ MERKEZ isletme", 6],
//       ["AYDİN MERKEZ isletme", 2],
//       ["BODRUM isletme", 3],
//       ["CİNE isletme", 4],
//       ["CİVRİL isletme", 5],
//       ["DİDİM isletme", 7],
//       ["FETHİYE isletme", 8],
//       ["KUSADASİ isletme", 9],
//       ["MARMARİS isletme", 10],
//       ["MİLAS isletme", 11],
//       ["MUGLA MERKEZ isletme", 12],
//       ["NAZİLLİ isletme", 13],
//       ["ORTACA isletme", 14],
//       ["SARAYKOY isletme", 15],
//       ["SOKE isletme", 16]
//     ]);

//     const targetIndex = textToIndexMap.get(text) || null;
//     const vtValues = [];

//     if (targetIndex) {
//       for (let month = 1; month <= 12; month++) {
//         const value = nestedObject?.[month]?.[targetIndex]?.SAİDİ || 0;
//         vtValues.push(value);
//       }
//     }

//     return vtValues;
//   }, [nestedObject]);

//   // CalculatedData
//   const calculatedData = useMemo(() => 
//     UploadFileSaidiAndSaifi(isletme)
//   , [UploadFileSaidiAndSaifi, isletme]);

//   // Tüm verileri birleştir
//   const allData = useMemo(() => {
//     return [
//       ...saidiSaifiScoreData,
//       ...previousyearsaididata.saidi22,
//       ...previousyearsaididata.saidi23,
//       ...previousyearsaididata.saidi24,
//       ...calculatedData
//     ].filter(item => typeof item === 'number' && !isNaN(item));
//   }, [saidiSaifiScoreData, previousyearsaididata, calculatedData]);

//   // Max değeri hesapla
//   const maxValue = useMemo(() => {
//     if (allData.length === 0) return 100;
//     return Math.max(...allData) * 1.01;
//   }, [allData]);

//   // ChartOptions'u oluştur
//   useEffect(() => {
//     setChartOptions({
//       chart: {
//         id: chartId,
//         type: 'line',
//         stacked: false,
//         dropShadow: { enabled: true, color: '#000', top: 18, left: 7, blur: 10, opacity: 1.0 },
//         zoom: {
//           type: 'x',
//           enabled: true,
//           autoScaleYaxis: true,
//           onZoom: (chartContext, { xaxis }) => {
//             const visibleData = allData.slice(xaxis.min, xaxis.max);
//             const newMax = Math.max(...visibleData) * 1.1;
//             chartContext.updateOptions({ yaxis: { max: newMax } });
//           }
//         },
//         toolbar: { autoSelected: 'zoom' },
//       },
//       dataLabels: {
//         enabled: dataLabelsEnabled,
//         style: { fontSize: '12px', colors: ['#304758'] },
//         dropShadow: { enabled: true, top: 1, left: 1, blur: 1, opacity: 0.45 },
//         formatter: (val) => (typeof val === 'number' ? val.toFixed(2) : '0.00')
//       },
//       stroke: { curve: 'smooth', width: 3, dashArray: [5, 0] },
//       markers: { colors: ['#FF4560'], size: 4 },
//       grid: { borderColor: '#e7e7e7', row: { colors: ['#f3f3f3', 'transparent'], opacity: 0.5 }},
//       title: { text: title, align: 'center', margin: 60, style: { fontSize: '14px', fontWeight: 'bold', color: 'black' }},
//       yaxis: {
//         title: { text: Y_axis },
//         labels: {
//           style: { fontWeight: 'bold', fontSize: '14px' },
//           formatter: (value) => (typeof value === 'number' ? value.toFixed(3) : '0.000')
//         },
//         tickAmount: 10,
//         min: 0,
//         max: maxValue
//       },
//       xaxis: {
//         categories: X_axis,
//         tickAmount: 12,
//         title: { text: 'AYLAR' },
//         labels: { style: { fontWeight: 'bold' } }
//       },
//       tooltip: {
//         theme: 'dark',
//         style: { fontSize: '12px' },
//         shared: true,
//         x: { show: true }
//       }
//     });
//   }, [title, Y_axis, X_axis, maxValue, dataLabelsEnabled]);

//   // ChartSeries'i oluştur
//   useEffect(() => {
//     setChartSeries([
//       { name: '2025 HEDEFLER', data: saidiSaifiScoreData },
//       { name: '2022 YILI', data: previousyearsaididata.saidi22 },
//       { name: '2023 YILI', data: previousyearsaididata.saidi23 },
//       { name: '2024 YILI', data: previousyearsaididata.saidi24 },
//       { name: '2025 YILI', data: calculatedData }
//     ]);
//   }, [saidiSaifiScoreData, previousyearsaididata, calculatedData]);

//   // DataLabels toggle
//   const toggleDataLabels = useCallback(() => {
//     setDataLabelsEnabled(prev => !prev);
//   }, []);

//   // Excel export
//   const exportToExcel = useCallback(async () => {
//     if (!chartSeries?.[0]?.data?.length) return;

//     const workbook = new ExcelJS.Workbook();
//     const worksheet = workbook.addWorksheet('Chart Data');
    
//     worksheet.columns = [
//       { header: 'Aylar', key: 'month' },
//       { header: '2025 HEDEFLER', key: 'target2025' },
//       { header: '2022 YILI', key: 'year2022' },
//       { header: '2023 YILI', key: 'year2023' },
//       { header: '2024 YILI', key: 'year2024' }
//     ];

//     chartSeries[0].data.forEach((value, index) => {
//       worksheet.addRow({
//         month: X_axis[index],
//         target2025: value,
//         year2022: previousyearsaididata.saidi22[index],
//         year2023: previousyearsaididata.saidi23[index],
//         year2024: previousyearsaididata.saidi24[index]
//       });
//     });

//     const buffer = await workbook.xlsx.writeBuffer();
//     const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
//     saveAs(blob, 'chart_data.xlsx');
//   }, [chartSeries, X_axis, previousyearsaididata]);

//   return (
//     <div className="chart" style={{ position: 'relative' }}>
//       <button
//         onClick={toggleDataLabels}
//         style={{
//           position: 'absolute',
//           bottom: '1px',
//           right: '6px',
//           padding: '1px 11px',
//           backgroundColor: '#ff4560',
//           color: 'white',
//           border: 'none',
//           borderRadius: '5px',
//           cursor: 'pointer',
//           zIndex: 10,
//           pointerEvents: 'auto'
//         }}>
//         Veri Göster/Gizle
//       </button>
//       <button
//         onClick={exportToExcel}
//         style={{
//           position: 'absolute',
//           top: '50px',
//           right: '10px',
//           padding: '1px 1px',
//           backgroundColor: '#28a745',
//           color: 'white',
//           border: 'none',
//           borderRadius: '5px',
//           cursor: 'pointer',
//           zIndex: 10,
//           pointerEvents: 'auto'
//         }}>
//         Verileri Excel'e Aktar
//       </button>
//       <div style={{
//         position: 'absolute',
//         top: '50px',
//         left: '10px',
//         padding: '5px 10px',
//         backgroundColor: 'BLACK',
//         color: 'red',
//         border: 'none',
//         borderRadius: '5px',
//         fontWeight: "bold",
//         fontSize: "10px",
//         zIndex: 10,
//         pointerEvents: 'auto'
//       }}>
//         2025 HEDEFİ {saidi_hedef_24}
//       </div>
//       <MemoizedChart 
//         options={chartOptions} 
//         series={chartSeries} 
//         width={width} 
//       />
//     </div>
//   );
// };

// export default React.memo(ApexCharts);
import React, { useState, useEffect, useMemo, useCallback, useContext } from 'react';
import Chart from 'react-apexcharts';
import ExcelJS from 'exceljs';
import { saveAs } from 'file-saver';
import '../App.css';
import { DataContext } from './DataContext';

const ApexCharts = ({
  isletme,
  chartId,
  width = "100%",
  title = "Grafik",
  saidiSaifiScoreData = [],
  previousyearsaididata = { saidi22: [], saidi23: [], saidi24: [] },
  previoussaifidata = { saifi22: [], saifi23: [], saifi24: [] },
  Y_axis = "Y Ekseni",
  X_axis = ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", 
           "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"],
  saidi_hedef_24 = "0.000",
  type //= "saidi" // "saidi" veya "saifi" seçimi
}) => {
//console.log("geçen poprs ",type)
  const dataxx = useContext(DataContext);
// Veri tipine göre önceki yılların verilerini seç
const previousData = type === "saidi" ? previousyearsaididata : previoussaifidata;

//console.log("previousData ",previousData)
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
      ["SOKE isletme", 16]
    ]);

    const targetIndex = textToIndexMap.get(text);
    const vtValues = [];
    
    if (typeof targetIndex === 'number') {
   // 12 ay için döngü
  for (let month = 1; month <= 12; month++) {
    const monthData = nestedObject[month];
    if (monthData && monthData[targetIndex]) {
      // `type` parametresine göre SAİDİ veya SAİFİ değerini oku
     // console.log("fonksiyon içerisinteki type ",type)
      const value = type ==="saidi"

      //console.log("tipi ",value)
      ? monthData[targetIndex].SAİDİ || 0
      : monthData[targetIndex].SAİFİ || 0;
      vtValues.push(value);
    } else {
      console.log(`Ay ${month} içinde ${targetIndex}. nesne veya VT değeri bulunamadı.`);
      vtValues.push(0); // Eğer veri yoksa varsayılan olarak 0 ekle
    }
  }
    }
    //console.log("emree buraya bi bak ",vtValues)
    return vtValues;
  }, []);

  const calculatedData = useMemo(() => 
    UploadFileSaidiAndSaifi(dataxx.data, isletme,type)
  , [dataxx.data, isletme,UploadFileSaidiAndSaifi]);

  const allData = useMemo(() => {
    const validData1 = Array.isArray(saidiSaifiScoreData) ? saidiSaifiScoreData : [];
    const validPrevious22 = Array.isArray(previousData[type === "saidi" ? "saidi22" : "saifi22"]) ? previousData[type === "saidi" ? "saidi22" : "saifi22"] : [];
    const validPrevious23 = Array.isArray(previousData[type === "saidi" ? "saidi23" : "saifi23"]) ? previousData[type === "saidi" ? "saidi23" : "saifi23"] : [];
    const validPrevious24 = Array.isArray(previousData[type === "saidi" ? "saidi24" : "saifi24"]) ? previousData[type === "saidi" ? "saidi24" : "saifi24"] : [];
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
        title: { text: Y_axis },
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
  }, [title, Y_axis, X_axis, maxValue, dataLabelsEnabled]);

  useEffect(() => {
    setChartSeries([
      { name: '2025 HEDEFLER', data: saidiSaifiScoreData },
      { name: '2022 YILI', data: previousData[type === "saidi" ? "saidi22" : "saifi22"] },
      { name: '2023 YILI', data: previousData[type === "saidi" ? "saidi23" : "saifi23"] },
      { name: '2024 YILI', data: previousData[type === "saidi" ? "saidi24" : "saifi24"] },
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
      { header: '2024 YILI', key: 'year2024' }
    ];

    chartSeries[0]?.data.forEach((_, index) => {
      worksheet.addRow({
        month: X_axis[index],
        target2025: chartSeries[0]?.data[index],
        year2022: chartSeries[1]?.data[index],
        year2023: chartSeries[2]?.data[index],
        year2024: chartSeries[3]?.data[index]
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
};

export default React.memo(ApexCharts);