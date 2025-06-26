
 
// import React,{ useState,useCallback } from "react";
// import ReactApexChart from "react-apexcharts";
 
// import { Box, IconButton, Modal, Typography, useTheme, useMediaQuery, FormControl, InputLabel, Select, MenuItem ,Button, Alert,Snackbar} from "@mui/material";
// import { ChevronLeft, ChevronRight } from "@mui/icons-material";
// import { DataGrid } from "@mui/x-data-grid";
// import { useExcelJsonData } from "hooks/UseExceLjsonData";

// import data24 from "./data24.json"; // Veri dosyası
//  const  MuiSelect=({onSelectChange })=> {
//  const [selectedvalue,setselectedvalue]=useState(2025);
// // `
// const handleChange = (e) => {
//   const chartId = e.target.value;
//   setselectedvalue(chartId);
//   onSelectChange(chartId); // Parent'a sadece chartId'yi gönder
// };

//   return (
//     <Box sx={{ minWidth: 60, marginInline:130 }}>
//       <FormControl color='secondary'  sx={{ m: 1, minWidth: 120 }} size="small">
//         <InputLabel id="demo-simple-select-label">YIL</InputLabel>
//         <Select
//           labelId="demo-simple-select-label"
//           id="demo-simple-select"
//           value={selectedvalue} // value prop'u eklendi
//           label="YIL"
//           onChange={handleChange}
//         >
//           {/*<MenuItem value={2022}>2022</MenuItem> */}
//           <MenuItem value={2023}>2023</MenuItem>
//           <MenuItem value={2024}>2024</MenuItem>
//           <MenuItem value={2025}>2025</MenuItem>
    
//         </Select>
//       </FormControl>
//     </Box>
//   );
// }

// const Heatmap = () => {
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
   
//   // Ay eşleme
  
//   const monthMap = {
//     0: { key: "1", name: "Ocak" },
//     1: { key: "2", name: "Şubat" },
//     2: { key: "3", name: "Mart" },
//     3: { key: "4", name: "Nisan" },
//     4: { key: "5", name: "Mayıs" },
//     5: { key: "6", name: "Haziran" },
//     6: { key: "7", name: "Temmuz" },
//     7: { key: "8", name: "Ağustos" },
//     8: { key: "9", name: "Eylül" },
//     9: { key: "10", name: "Ekim" },
//     10: { key: "11", name: "Kasım" },
//     11: { key: "12", name: "Aralık" }
//   };

//   // State yönetimi
//   const [currentHeatmapIndex, setCurrentHeatmapIndex] = React.useState(0);
//   const [selectedOutages, setSelectedOutages] = React.useState([]);
//   const [isModalOpen, setIsModalOpen] = React.useState(false);
//   const[selectData,setSelectData]=useState(2025)
//   const {ExcelJsonDatax}=useExcelJsonData();
//   const [open, setOpen] = useState(false);


//   console.log("heatmap e geçen state ",ExcelJsonDatax)
  

//     // Alert kapanma fonksiyonu
//     const handleClose = (event, reason) => {
//       if (reason === "clickaway") return;
//       setOpen(false);
//     };
//  //SELECT CHİLD COMPONETTEN USECALLBACK İLE VERİ ALIYOR 
//  const handleChildToParent = useCallback((chartId) => {
//   console.log(chartId)
//   setSelectData(chartId); // burada chartId: "chart1" gibi string bir değer olacak
// }, []);

//   // Heatmap verilerini üret (saidi_gunluk_isletme kullanıldı)
//   const generateHeatmapData = React.useCallback((heatmapIndex) => {
//     const monthKey = monthMap[heatmapIndex].key;
//     const monthData = data24[selectData][monthKey] || {};

//     return Object.entries(monthData).map(([isletme, daysData]) => ({
//       name: isletme.trim(),
//       data: Array.from({ length: 30 }, (_, dayIndex) => {
//         const day = dayIndex + 1;
//         const dayStr = String(day);
//         const outages = daysData[dayStr] || [];
        
//         // İlk kaydın saidi_gunluk_isletme değerini al
//         const firstOutage = outages[0] || {};
//         const saidiValue = parseFloat(firstOutage.saidi_gunluk_isletme) || 0;

//         return {
//           x: `${day}. gün (${monthMap[heatmapIndex].name})`,
//           y: saidiValue, // Tek değer kullanılıyor
//           meta: {
//             isletme: isletme.trim(),
//             day: day,
//             outages: outages // Tüm kayıtlar modal için saklanıyor
//           }
//         };
//       })
//     }));
//   }, [selectData]);
   

//   // Heatmap yapılandırması
//   const heatmaps = React.useMemo(() => {
//     return Object.keys(monthMap).map(index => ({
//       title: `GÜNLÜK SAIDI DEĞERLERİ - ${selectData} Yılı ${monthMap[index].name} Ayı`,
//       series: generateHeatmapData(index)
//     }));
//   }, [generateHeatmapData]);




//   // Heatmap ayarları
//   const chartOptions = React.useMemo(() => ({
//     chart: {
//       type: "heatmap",
//       height: isMobile ? 300 : 500,
//       events: {
//         dataPointSelection: (event, chart, { seriesIndex, dataPointIndex }) => 
//           handleDataPointClick(seriesIndex, dataPointIndex)
//       }
//     },
//     plotOptions: {
//       heatmap: {
//         radius: 20,
//         enableShades: false,
//         colorScale: {
//           ranges: [
//             { from: 0, to: 0.5, color: "#fffafa" },
//             { from: 0.5, to: 3, color: "#00ff7f" },
//             { from: 3, to: 5, color: "#ffc0cb" },
//             { from: 5, to: 8, color: "#db7093" },
//             { from: 8, to: 10, color: "#dc143c" },
//             { from: 10, to: 50, color: "#ff0000" }
//           ]
//         }
//       }
//     },
//     dataLabels: { 
//       enabled: true,
//       formatter: (val) => val.toFixed(2),
//       style: { colors: ["black"] }
//     },
//     xaxis: {
//       categories: heatmaps[currentHeatmapIndex]?.series[0]?.data.map(d => d.x) || [],
//       title: { text: "Günler", style: { fontSize: "14px" } }
//     },
//  // Heatmap ayarları bölümünde yaxis.formatter kısmını şu şekilde değiştirin:
//  yaxis: {
//   labels: { 
//     style: { 
//       fontSize: "12px",
//       colors: [theme.palette.text.primary] // Yazı rengi düzeltildi
//     },
//     formatter: (value) => {
//       // Sayısal değerler için formattırmayı kaldır
//       return value;
//     }
//   }
// },
//     title: {
//       text: heatmaps[currentHeatmapIndex]?.title || "",
//       align: "center",
//       style: { fontSize: "18px" }
//     }
//   }), [currentHeatmapIndex, heatmaps, isMobile]);

//   // Tıklama event'i
//   const handleDataPointClick = (seriesIndex, dataPointIndex) => {
//     const dataPoint = heatmaps[currentHeatmapIndex].series[seriesIndex]?.data[dataPointIndex];
//     if (dataPoint?.meta?.outages) {
//       setSelectedOutages(dataPoint.meta.outages);
//       setIsModalOpen(true);
//     }
//   };

//   // Slider butonları
//   const handlePrev = () => {
//     setCurrentHeatmapIndex(prev => (prev === 0 ? 11 : prev - 1));
//   };

//   const handleNext = () => {
//     setCurrentHeatmapIndex(prev => (prev === 11 ? 0 : prev + 1));
//   };

//   // DataGrid sütunları
//   const columns = React.useMemo(() => [
//     { 
//       field: "OUTAGE_CODE", 
//       headerName: "Kesinti Kodu", 
//       flex: 1,
//       renderCell: (params) => (
//         <a 
//           href={`https://kys.admelektrik.com.tr/app/outage/${params.value}`} 
//           target="_blank" 
//           rel="noopener noreferrer"
//           style={{
//             color: theme.palette.primary.main,
//             textDecoration: 'underline',
//             fontWeight: 500
//           }}
//         >
//           {params.value}
//         </a>
//       )
//     },
//     // Diğer sütunlar aynı kalıyor...
//     { field: "SEBEKE_UNSURU", headerName: "Şebeke Unsuru", flex: 1 },
//     { field: "OUTAGE_START", headerName: "Başlangıç", flex: 1 },
//     { field: "OUTAGE_END", headerName: "Bitiş", flex: 1 },
//     { field: "OUTAGE_DİFF_HOUR", headerName: "Süre (Saat)", flex: 1 },
//     { field: "saidi_kesinti_isletme", headerName: "Kesinti SAIDI", flex: 1 },
//     { field: "saidi_gunluk_isletme", headerName: "Günlük SAIDI", flex: 1 },
//     { field: "RW", headerName: "RW", flex: 1 }
//   ], [theme]);

//   return (
//     <Box sx={{ position: "relative", p: 2 }}>
    
//       {/* Slider Butonları */}
//       <Box sx={{ 
//         position: "relative", 
//         p: 2,
//         maxWidth: "1400px", 
//         mx: "auto", 
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "space-between"
//       }}>
//         {/* Sol Buton */}
//         <IconButton
//           sx={{
//             bgcolor: "rgba(255,255,255,0.1)",
//             backdropFilter: "blur(10px)",
//             borderRadius: "50%",
//             width: 50,
//             height: 50,
//             boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
//             transition: "all 0.3s",
//             "&:hover": {
//               bgcolor: "rgba(255,255,255,0.2)",
//               transform: "scale(1.1)"
//             }
//           }}
//           onClick={handlePrev}
//           disabled={currentHeatmapIndex === 0}
//         >
//           <ChevronLeft sx={{ fontSize: 32, color: "white" }} />
//         </IconButton>

//         {/* Heatmap Container */}
      
//         <Box 
        
//         sx={{ 
//           position: "relative",
//           width: "1200px",
//           height: isMobile ? 300 : 700,
//           border: `2px solid ${theme.palette.primary.main}`,
//           borderRadius: 3,
//           overflow: "hidden",
//           boxShadow: "0 8px 24px rgba(0,0,0,0.1)"
//         }}>
       
//             <MuiSelect onSelectChange={handleChildToParent} />
//           <ReactApexChart
//             key={currentHeatmapIndex}
//             options={chartOptions}
//             series={heatmaps[currentHeatmapIndex]?.series || []}
//             type="heatmap"
//             height={isMobile ? 300 : 550}
//           />
//         </Box>

//         {/* Sağ Buton */}
//         <IconButton
//           sx={{
//             bgcolor: "rgba(255,255,255,0.1)",
//             backdropFilter: "blur(10px)",
//             borderRadius: "50%",
//             width: 50,
//             height: 50,
//             boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
//             transition: "all 0.3s",
//             "&:hover": {
//               bgcolor: "rgba(255,255,255,0.2)",
//               transform: "scale(1.1)"
//             }
//           }}
//           onClick={handleNext}
//           disabled={currentHeatmapIndex === 11}
//         >
//           <ChevronRight sx={{ fontSize: 32, color: "white" }} />
//         </IconButton>
//       </Box>

//       {/* Modal */}
//       <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
//         <Box sx={{ 
//           bgcolor: "white", 
//           p: 3, 
//           maxWidth: 1500, 
//           width: "100%",
//           position: 'absolute',
//           top: '50%',
//           left: '50%',
//           transform: 'translate(-50%, -50%)',
//           maxHeight: '80vh',
//           overflowY: 'auto'
//         }}>
//           <Typography variant="h6" gutterBottom>
//             {selectedOutages.length > 0 
//               ? `Seçilen Gündeki SAİDİ etkisi En Büyük 5 Kesinti`
//               : "Detay Yok"}
//           </Typography>
//           <DataGrid
//   rows={selectedOutages}
//   columns={columns}
//   pageSize={5}
//   rowsPerPageOptions={[5]}
//   autoHeight
//   disableSelectionOnClick
//   hideFooterSelectedRowCount
//   getRowId={(row) => row.OUTAGE_CODE} // Benzersiz ID belirtildi
// />
//         </Box>
//       </Modal>
//     </Box>
//   );
// };

// export default Heatmap;


// Heatmap.jsx

// Heatmap.jsx
// Heatmap.jsx



// import React, { useState, useMemo } from "react";
// import {
//   Box,
//   IconButton,
//   FormControl,
//   InputLabel,
//   Select,
//   MenuItem,
//   FormControlLabel,
//   Switch,
//   Modal,
//   Snackbar,
//   Alert,
//   useMediaQuery,
//   useTheme
// } from "@mui/material";
// import { DataGrid } from "@mui/x-data-grid";
// import ReactApexChart from "react-apexcharts";
// import { ChevronLeft, ChevronRight } from "@mui/icons-material";
// import _ from "lodash";

// // Hook: Excel verisini sağlayan hook
// import { useExcelJsonData } from "hooks/UseExceLjsonData";
// // Normal mod için örnek veri
// import data24 from "./data24.json";

// // Ay eşleme
// const monthMap = {
//   0: { key: "1", name: "Ocak" },
//   1: { key: "2", name: "Şubat" },
//   2: { key: "3", name: "Mart" },
//   3: { key: "4", name: "Nisan" },
//   4: { key: "5", name: "Mayıs" },
//   5: { key: "6", name: "Haziran" },
//   6: { key: "7", name: "Temmuz" },
//   7: { key: "8", name: "Ağustos" },
//   8: { key: "9", name: "Eylül" },
//   9: { key: "10", name: "Ekim" },
//   10: { key: "11", name: "Kasım" },
//   11: { key: "12", name: "Aralık" }
// };

// // Yıl seçici bileşeni
// const YearSelect = ({ onChange }) => {
//   const [val, setVal] = useState(2025);
//   return (
//     <FormControl size="small">
//       <InputLabel>YIL</InputLabel>
//       <Select
//         value={val}
//         label="YIL"
//         onChange={(e) => {
//           setVal(e.target.value);
//           onChange(e.target.value);
//         }}
//       >
//         <MenuItem value={2023}>2023</MenuItem>
//         <MenuItem value={2024}>2024</MenuItem>
//         <MenuItem value={2025}>2025</MenuItem>
//       </Select>
//     </FormControl>
//   );
// };

// /*
//   getDailySaidi: Her durumda (top5 veya normal modda)
//   ilgili gün objesi varsa, sadece ilk kayıttaki 'saidi_gunluk_isletme'
//   değerini döndürür.
// */
// const getDailySaidi = (dayObjOrArr) => {
//   if (!dayObjOrArr) return 0;
//   if (Array.isArray(dayObjOrArr)) {
//     return parseFloat(dayObjOrArr[0]?.saidi_gunluk_isletme) || 0;
//   }
//   const firstKey = Object.keys(dayObjOrArr)[0];
//   const arr = dayObjOrArr[firstKey] || [];
//   return parseFloat(arr[0]?.saidi_gunluk_isletme) || 0;
// };

// const Heatmap = () => {
//   const { ExcelJsonDatax } = useExcelJsonData();
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

//   // Component state'leri
//   const [year, setYear] = useState(2025);
//   const [top5Mode, setTop5Mode] = useState(false);
//   const [alert, setAlert] = useState(false);
//   const [monthPos, setMonthPos] = useState(0);
//   const [gridRows, setGridRows] = useState([]);
//   const [openModal, setOpenModal] = useState(false);

//   // Top5 modu aç/kapatma fonksiyonu
//   const toggleTop5 = (e) => {
//     if (e.target.checked) {
//       if (!ExcelJsonDatax || !Object.keys(ExcelJsonDatax).length) {
//         setAlert(true);
//         return;
//       }
//       setTop5Mode(true);
//     } else {
//       setTop5Mode(false);
//     }
//     setMonthPos(0);
//   };

//   // Ay indeksleri: Top5 modunda ExcelJsonDatax'teki key'lerden, normalde ise sabit 0-11
//   const monthIdxList = useMemo(() => {
//     if (top5Mode)
//       return Object.keys(ExcelJsonDatax)
//         .map((k) => Number(k) - 1)
//         .filter((i) => i >= 0 && i <= 11)
//         .sort((a, b) => a - b);
//     return Array.from({ length: 12 }, (_, i) => i);
//   }, [top5Mode, ExcelJsonDatax]);

//   // Heatmap serileri oluşturuluyor
//   const seriesPerMonth = useMemo(() => {
//     return monthIdxList.map((idx) => {
//       const key = monthMap[idx].key;
//       const src = top5Mode
//         ? ExcelJsonDatax[key] || {}
//         : data24[year]?.[key] || {};

//       const series = Object.entries(src).map(([isletme, days]) => {
//         let dataPoints;
//         if (top5Mode) {
//           // Top5 modunda: var olan gün anahtarlarını kullanıyoruz, aggregation yerine
//           // her gün için ilgili objenin ilk örneğindeki değeri alıyoruz.
//           dataPoints = Object.entries(days).map(([dayKey, outages]) => {
//             const dailyVal = getDailySaidi(outages);
//             return {
//               x: `${dayKey}. gün`,
//               y: dailyVal,
//               meta: { outages }
//             };
//           });
//           dataPoints.sort(
//             (a, b) => Number(a.x.split(".")[0]) - Number(b.x.split(".")[0])
//           );
//         } else {
//           // Normal modunda: sabit 30 gün üzerinden hesaplama
//           dataPoints = Array.from({ length: 30 }, (_, d) => {
//             const dayStr = String(d + 1);
//             const dailyVal = getDailySaidi(days[dayStr]);
//             return {
//               x: `${d + 1}. gün`,
//               y: dailyVal,
//               meta: { outages: days[dayStr] || [] }
//             };
//           });
//         }
//         return {
//           name: isletme,
//           data: dataPoints
//         };
//       });

//       return {
//         title: `${top5Mode ? "Top5" : year} ${monthMap[idx].name}`,
//         series
//       };
//     });
//   }, [monthIdxList, top5Mode, year, ExcelJsonDatax]);

//   // Apex chart seçenekleri (heatmap range without shades türü kullanılıyor)
//   const chartOpts = useMemo(
//     () => ({
//       chart: {
//         type: "heatmap",
//         height: isMobile ? 300 : 500,
//         events: {
//           dataPointSelection: (_, __, { seriesIndex, dataPointIndex }) => {
//             const pt =
//               seriesPerMonth[monthPos]?.series[seriesIndex]?.data[dataPointIndex];
//             setGridRows(pt?.meta.outages || []);
//             setOpenModal(true);
//           }
//         }
//       },
//       dataLabels: { enabled: true, formatter: (v) => v.toFixed(2) },
//       plotOptions: {
//         heatmap: {
//           enableShades: false, // Shades devre dışı, range without shades kullanılır
//           colorScale: {
//             ranges: [
//               {
//                 from: 0,
//                 to: 10,
//                 name: "Low",
//                 color: "#00A100"
//               },
//               {
//                 from: 11,
//                 to: 20,
//                 name: "Medium",
//                 color: "#128FD9"
//               },
//               {
//                 from: 21,
//                 to: 30,
//                 name: "High",
//                 color: "#FFB200"
//               },
//               {
//                 from: 31,
//                 to: 40,
//                 name: "Very High",
//                 color: "#FF0000"
//               }
//             ]
//           }
//         }
//       },
//       xaxis: {
//         categories:
//           seriesPerMonth[monthPos]?.series[0]?.data.map((d) => d.x) || []
//       },
//       title: {
//         text: seriesPerMonth[monthPos]?.title || "",
//         align: "center"
//       }
//     }),
//     [seriesPerMonth, monthPos, isMobile]
//   );

//   // Slider butonları
//   const prev = () =>
//     setMonthPos((p) => (p === 0 ? monthIdxList.length - 1 : p - 1));
//   const next = () =>
//     setMonthPos((p) => (p === monthIdxList.length - 1 ? 0 : p + 1));

//   // DataGrid kolonları
//   const columns = useMemo(
//     () => [
//       { field: "OUTAGE_CODE", headerName: "Kesinti Kodu", flex: 1 },
//       { field: "SEBEKE_UNSURU", headerName: "Şebeke Unsuru", flex: 1 },
//       { field: "OUTAGE_START", headerName: "Başlangıç", flex: 1 },
//       { field: "OUTAGE_END", headerName: "Bitiş", flex: 1 },
//       { field: "saidi_kesinti_isletme", headerName: "Kesinti SAIDI", flex: 1 },
//       { field: "saidi_gunluk_isletme", headerName: "Günlük SAIDI", flex: 1 },
//       { field: "RW", headerName: "RW", flex: 0.5 }
//     ],
//     []
//   );

//   return (
//     <Box sx={{ p: 2 }}>
//       {/* Üst bar: Yıl seçici ve Top5 toggler */}
//       <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
//         <YearSelect onChange={setYear} />
//         <FormControlLabel
//           control={<Switch checked={top5Mode} onChange={toggleTop5} />}
//           label="Top5 Verisi"
//         />
//       </Box>

//       {/* Heatmap ve slider */}
//       <Box sx={{ display: "flex", alignItems: "center" }}>
//         <IconButton onClick={prev}>
//           <ChevronLeft />
//         </IconButton>

//         <Box sx={{ flex: 1 }}>
//           <ReactApexChart
//             options={chartOpts}
//             series={seriesPerMonth[monthPos]?.series || []}
//             type="heatmap"
//             height={isMobile ? 300 : 500}
//           />
//         </Box>

//         <IconButton onClick={next}>
//           <ChevronRight />
//         </IconButton>
//       </Box>

//       {/* Modal: DataGrid detayları */}
//       <Modal open={openModal} onClose={() => setOpenModal(false)}>
//         <Box
//           sx={{
//             bgcolor: "white",
//             p: 3,
//             width: "80%",
//             mx: "auto",
//             mt: "5vh"
//           }}
//         >
//           <DataGrid
//             rows={gridRows}
//             columns={columns}
//             pageSize={5}
//             autoHeight
//             getRowId={(r) => r.OUTAGE_CODE + r.RW}
//           />
//         </Box>
//       </Modal>

//       {/* Uyarı Snackbar */}
//       <Snackbar
//         open={alert}
//         autoHideDuration={3500}
//         onClose={() => setAlert(false)}
//         anchorOrigin={{ vertical: "top", horizontal: "center" }}
//       >
//         <Alert severity="warning" onClose={() => setAlert(false)}>
//           Veriyi yüklediğinizden emin olun!
//         </Alert>
//       </Snackbar>
//     </Box>
//   );
// };

// export default Heatmap;

/*****************************************************************
  Heatmap.jsx  – Optimum render & URL’li DataGrid
  ---------------------------------------------------------------
  •  Gün başına tek SAIDI değeri
  •  Toggle → Top‑5 / tam veri
  •  Slider (aylar)
  •  Heatmap “range without shades” config
  •  DataGrid’de “Kesinti Kodu” kolonu tıklanabilir link
*****************************************************************/

import React, { useState, useMemo } from "react";
import ReactApexChart from "react-apexcharts";
import {
  Paper,
  Box,
  IconButton,
  Modal,
  Typography,
  useTheme,
  useMediaQuery,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Switch,
  FormControlLabel,
  Alert,
  Snackbar
} from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { DataGrid } from "@mui/x-data-grid";
import { useExcelJsonData } from "hooks/UseExceLjsonData";

import data24 from "./data24.json";

/* ---------- Yardımcı Sabitler ---------- */
const MONTHS = [
  { key: "1", name: "Ocak" },
  { key: "2", name: "Şubat" },
  { key: "3", name: "Mart" },
  { key: "4", name: "Nisan" },
  { key: "5", name: "Mayıs" },
  { key: "6", name: "Haziran" },
  { key: "7", name: "Temmuz" },
  { key: "8", name: "Ağustos" },
  { key: "9", name: "Eylül" },
  { key: "10", name: "Ekim" },
  { key: "11", name: "Kasım" },
  { key: "12", name: "Aralık" }
];
// 0-tabanlı ay → gün sayısı (Şubat sabit 28, ama artık yıl kontrolüyle 29’a çıkacak)
const DAYS_IN_MONTH = {
  0: 31, 1: 28, 2: 31, 3: 30, 4: 31, 5: 30,
  6: 31, 7: 31, 8: 30, 9: 31, 10: 30, 11: 31
};
const isLeap = (y) =>
  (y % 4 === 0 && y % 100 !== 0) || y % 400 === 0;

/* Tek SAIDI değeri seçici  ----------------------------------- */
const getDailySaidi = (dayBlock) => {
  if (!dayBlock) return 0;
  if (Array.isArray(dayBlock))
    return parseFloat(dayBlock[0]?.saidi_gunluk_isletme) || 0;
  const firstRw = Object.keys(dayBlock)[0];
  return parseFloat(dayBlock[firstRw]?.[0]?.saidi_gunluk_isletme) || 0;
};

/* Yıl dropdown’u --------------------------------------------- */
const YearSelect = React.memo(({ value, onChange }) => (
  <FormControl size="small">
    <InputLabel>YIL</InputLabel>
    <Select
      value={value}
      label="YIL"
      onChange={(e) => onChange(e.target.value)}
    >
      {[2023, 2024, 2025].map((y) => (
        <MenuItem key={y} value={y}>
          {y}
        </MenuItem>
      ))}
    </Select>
  </FormControl>
));

/* ========== Ana Bileşen ===================================== */
const Heatmap = () => {
  const { ExcelJsonDatax } = useExcelJsonData();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  /* ---------- State ---------- */
  const [year, setYear] = useState(2025);
  const [top5Mode, setTop5Mode] = useState(false);
  const [alert, setAlert] = useState(false);
  const [heatmapIdx, setHeatmapIdx] = useState(0);
  const [gridRows, setGridRows] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  /* ---------- Ay pozisyon listesi (useMemo) ---------- */
 /* Ay indeks listesi */
 const monthList = useMemo(() => {
  if (top5Mode) {
    return Object.keys(ExcelJsonDatax || {})
      .map((k) => Number(k) - 1)
      .filter((i) => i >= 0 && i < 12)
      .sort((a, b) => a - b);
  }
  return [...Array(12).keys()];
}, [top5Mode, ExcelJsonDatax]);

  /* ---------- Heatmap dizisi ---------- */
/* Heatmap verisi */
const heatmaps = useMemo(() => {
  return monthList.map((pos) => {
    // ← **SADECE BURASI DEĞİŞTİ**: 30 sabiti yerine ayın gerçek gün sayısı
    const dayCount =
      pos === 1 ? (isLeap(year) ? 29 : 28) : DAYS_IN_MONTH[pos];

    const { key: mKey, name } = MONTHS[pos];
    const src = top5Mode
      ? ExcelJsonDatax?.[mKey] || {}
      : data24?.[year]?.[mKey] || {};

      const series   = Object.entries(src).map(([plant, days]) => {
        // önce günlük hücreleri üret
        const points = [...Array(dayCount)].map((_, d) => ({
          x: `${d+1}`,
          y: getDailySaidi(days[String(d+1)]),
          meta: { outages: days[String(d+1)] || [] }
        }));
        // toplamı hesapla
        const total = points.reduce((s, p) => s + p.y, 0);
        // "Toplam" sütunu olarak ekle
        points.push({ x: "Toplam", y: total, meta: { outages: [] } });
        return { name: plant.trim(), data: points };
      });

    return {
      title: `GÜNLÜK SAIDI DEĞERLERİ - ${
        top5Mode ? "Yüklenen Verideki" : year
      } ${name} Ayı`,
      series
    };
  });
}, [monthList, top5Mode, year, ExcelJsonDatax]);

  /* ---------- Apex options (useMemo) ---------- */
  const chartOptions = useMemo(() => {
    const current = heatmaps[heatmapIdx];
    return {
      chart: {
        type: "heatmap",
        height: isMobile ? 300 : 500,
        events: {
          dataPointSelection: (_, __, { seriesIndex, dataPointIndex }) => {
            const pt =
              current?.series[seriesIndex]?.data[dataPointIndex];
            setGridRows(pt?.meta.outages || []);
            setOpenModal(true);
          }
        }
      },
      plotOptions: {
        heatmap: {
          radius: 20,
          enableShades: false,
          colorScale: {
            ranges: [
              { from: 0, to: 0.5, color: "#f8f8ff" }, //ghostwhite
              { from: 0.5, to: 3, color: "#00ff7f" },
              { from: 3, to: 5, color: "#ffc0cb" },
              { from: 5, to: 8, color: "#db7093" },
              { from: 8, to: 10, color: "#EA7300" },
              { from: 10, to: 50, color: "#F7374F" },
              {from:50 , to:100, color:'#AF2655'}
            ]      //AF2655
          }
        }
      },
      dataLabels: {
        enabled: true,
        formatter: (v) => v.toFixed(2),
        style: { colors: ["black"] }
      },
      xaxis: {
        categories: current?.series[0]?.data.map((d) => d.x) || [],
        title: { text: "Günler", style: { fontSize: "14px" } }
      },
      yaxis: {
        labels: {
          style: {
            fontSize: "12px",
            colors: [theme.palette.text.primary]
          },
          formatter: (v) => v
        }
      },
      title: {
        text: current?.title || "",
        align: "center",
        style: { fontSize: "18px" }
      }
    };
  }, [heatmaps, heatmapIdx, isMobile, theme.palette.text.primary]);

  /* ---------- DataGrid kolonları (useMemo) ---------- */
  const columns = useMemo(() => {
    const baseCols = [
      {
        field: "OUTAGE_CODE",
        headerName: "Kesinti Kodu",
        flex: 1,
        renderCell: (params) => (
          <a
            href={`https://kys.admelektrik.com.tr/app/outage/${params.value}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: theme.palette.primary.main,
              textDecoration: "underline",
              fontWeight: 500
            }}
          >
            {params.value}
          </a>
        )
      },
      { field: "SEBEKE_UNSURU", headerName: "Şebeke Unsuru", flex: 1 },
      { field: "OUTAGE_START", headerName: "Başlangıç", flex: 1 },
      { field: "OUTAGE_END", headerName: "Bitiş", flex: 1 },
      top5Mode
        ? {
            field: "kesintisüresidk",
            headerName: "Kesinti Süresi (DK)",
            flex: 1
          }
        : {
            field: "OUTAGE_DİFF_HOUR",
            headerName: "Kesinti Süresi (SAAT)",
            flex: 1
          },
      {
        field: "saidi_kesinti_isletme",
        headerName: "Kesinti SAIDI",
        flex: 1
      },
      {
        field: "saidi_gunluk_isletme",
        headerName: "Günlük SAIDI",
        flex: 1
      },
      { field: "RW", headerName: "RW", flex: 0.5 }
    ];
  
    return baseCols;
  }, [theme.palette.primary.main, top5Mode]);
  

  /* ---------- Yardımcı kollar ---------- */
  const prev = () =>
    setHeatmapIdx((i) => (i === 0 ? heatmaps.length - 1 : i - 1));
  const next = () =>
    setHeatmapIdx((i) => (i === heatmaps.length - 1 ? 0 : i + 1));

  /* ================================================= */
  return (
    <Box sx={{ p: 2 }}>
      {/* Üst bar */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2
        }}
      >
        <YearSelect
          value={year}
          onChange={(y) => {
            setYear(y);
            setTop5Mode(false);
            setHeatmapIdx(0);
          }}
        />
        <FormControlLabel
          control={
            <Switch
              checked={top5Mode}
              onChange={(e) => {
                if (
                  e.target.checked &&
                  (!ExcelJsonDatax || !Object.keys(ExcelJsonDatax).length)
                ) {
                  setAlert(true);
                  return;
                }
                setTop5Mode(e.target.checked);
                setHeatmapIdx(0);
              }}
              color="secondary"
            />
          }
          label="Yüklenen Veriyi Görüntüle"
        />
      </Box>
  
      {/* Heatmap + Slider içinde Paper */}
      <Box
        component="section"
        sx={{
          bgcolor: "#fafafa",
          border: `2px solid ${theme.palette.divider}`,
          borderRadius: 3,
          boxShadow: 3,
          p: 2,
          mb: 3
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between"
          }}
        >
          {/* Sol Buton */}
          <IconButton
            onClick={prev}
            disabled={heatmaps.length <= 1}
            sx={{
              bgcolor: "white",
              border: "1px solid #ddd",
              "&:hover": {
                bgcolor: theme.palette.primary.light,
                color: "white"
              }
            }}
          >
            <ChevronLeft />
          </IconButton>
  
          {/* Heatmap Chart */}
          <Box
            sx={{
              flex: 1,
              mx: 2,
              border: `1px solid ${theme.palette.divider}`,
              borderRadius: 2,
              p: 1,
              backgroundColor: "white"
            }}
          >
            <ReactApexChart
              options={chartOptions}
              series={heatmaps[heatmapIdx]?.series || []}
              type="heatmap"
              height={isMobile ? 300 : 500}
            />
          </Box>
  
          {/* Sağ Buton */}
          <IconButton
            onClick={next}
            disabled={heatmaps.length <= 1}
            sx={{
              bgcolor: "white",
              border: "1px solid #ddd",
              "&:hover": {
                bgcolor: theme.palette.primary.light,
                color: "white"
              }
            }}
          >
            <ChevronRight />
          </IconButton>
        </Box>
      </Box>
  
      {/* Modal + DataGrid */}
      <Modal open={openModal} onClose={() => setOpenModal(false)}>
  <Box
    onClick={() => setOpenModal(false)} // Modal dışına tıklama
    sx={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      bgcolor: "rgba(0,0,0,0.3)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 1300
    }}
  >
    <Paper
      onClick={(e) => e.stopPropagation()} // İçeriğe tıklamayı durdur
      elevation={4}
      sx={{
        bgcolor: "#fdfdfd",
        p: 3,
        borderRadius: 3,
        maxWidth: 1300,
        width: "90%",
        boxShadow: "0 6px 24px rgba(0,0,0,0.15)"
      }}
    >
      <Typography
        variant="h6"
        fontWeight="bold"
        gutterBottom
        sx={{ mb: 2, color: theme.palette.text.primary }}
      >
        Seçilen Gündeki Kesinti Detayları
      </Typography>

      <DataGrid
        rows={gridRows}
        columns={columns}
        pageSize={5}
        autoHeight
        disableSelectionOnClick
        getRowId={(row) => row.OUTAGE_CODE + row.RW}
        sx={{
          border: "1px solid #ddd",
          borderRadius: 2,
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: "#f1f1f1",
            fontWeight: "bold"
          },
          "& .MuiDataGrid-cell": {
            fontSize: "0.95rem"
          },
          "& .MuiDataGrid-row:hover": {
            backgroundColor: "#f9f9f9"
          }
        }}
      />
    </Paper>
  </Box>
</Modal>

  
      {/* Uyarı */}
      <Snackbar
        open={alert}
        autoHideDuration={3500}
        onClose={() => setAlert(false)}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert severity="warning" onClose={() => setAlert(false)}>
          Veriyi yüklediğinizden emin olun!
        </Alert>
      </Snackbar>
    </Box>
  );
  
};

export default Heatmap;
