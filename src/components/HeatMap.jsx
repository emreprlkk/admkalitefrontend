// import React from "react";
// import ReactApexChart from "react-apexcharts";
// import { Box, IconButton, Modal, Typography, useTheme, useMediaQuery, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
// import { ChevronLeft, ChevronRight } from "@mui/icons-material";
// import { DataGrid } from "@mui/x-data-grid";
// import alasql from "alasql";

// const Heatmap = () => {
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

//   // Ay bilgileri
//   const months = [
//     "Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran",
//     "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"
//   ];

//   // Tüm aylar için AYNI metricCategories'i kullan
//   const metricCategories = Array.from({ length: 10 }, () => [
//     "ACIPAYAM", "AYDIN MERKEZ", "BODRUM", "ÇİNE", "ÇİVRİL", 
//     "DENİZLİ MERKEZ", "DİDİM", "FETHİYE", "KUŞADASI", "MARMARİS",
//     "MİLAS", "MUĞLA MERKEZ", "NAZİLLİ", "ORTACA", "SARAYKÖY", "SÖKE"
//   ]);

//   // State yönetimi
//   const [currentHeatmapIndex, setCurrentHeatmapIndex] = React.useState(0);
//   const [selectedData, setSelectedData] = React.useState(null);
//   const [isModalOpen, setIsModalOpen] = React.useState(false);
//   const [durationFilter, setDurationFilter] = React.useState("all");
//   const [reasonFilter, setReasonFilter] = React.useState("all");
//   const [sourceFilter, setSourceFilter] = React.useState("all");

//   // Veri seti (örnek)
//   const rawData = React.useMemo(() => {
//     return Array.from({ length: 10 }, (_, heatmapIndex) =>
//       Array.from({ length: 16 }, (_, metricIndex) =>
//         Array.from({ length: 30 }, (_, day) => ({
//           id: `${heatmapIndex}-${metricIndex}-${day}`,
//           metric: metricCategories[heatmapIndex][metricIndex],
//           day: day + 1,
//           month: months[heatmapIndex],
//           duration: Math.floor(Math.random() * 100),
//           reason: ["A", "B", "C"][Math.floor(Math.random() * 3)],
//           source: ["XX", "YY"][Math.floor(Math.random() * 2)],
//         }))
//       ).flat()
//     ).flat();
//   }, [metricCategories, months]);

//   // Filtrelenmiş veriyi al
//   const filteredData = React.useMemo(() => {
//     let query = "SELECT * FROM ? WHERE 1=1";

//     if (durationFilter === "short") query += " AND duration < 50";
//     if (durationFilter === "long") query += " AND duration >= 50";
//     if (reasonFilter !== "all") query += ` AND reason = '${reasonFilter}'`;
//     if (sourceFilter !== "all") query += ` AND source = '${sourceFilter}'`;

//     return alasql(query, [rawData]);
//   }, [rawData, durationFilter, reasonFilter, sourceFilter]);

//   // Heatmap verilerini üret
//   const generateHeatmapData = React.useCallback((heatmapIndex, metricsCount, days, data) => {
//     return Array.from({ length: metricsCount }, (_, metricIndex) => ({
//       name: `${metricCategories[heatmapIndex][metricIndex]}`,
//       data: Array.from({ length: days }, (_, day) => {
//         const point = data.find(
//           (item) =>
//             item.metric === metricCategories[heatmapIndex][metricIndex] &&
//             item.day === day + 1 &&
//             item.month === months[heatmapIndex]
//         );
//         return {
//           x: `${day + 1}. gün (${months[heatmapIndex]})`,
//           y: point ? point.duration : 0,
//           id: point?.id || `${heatmapIndex}-${metricIndex}-${day}-empty`,
//         };
//       }),
//     }));
//   }, [metricCategories, months]);

//   // 10 farklı heatmap
//   const heatmaps = React.useMemo(() => {
//     return Array.from({ length: 10 }, (_, heatmapIndex) => ({
//       title: `TOPLAM KESİNTİ SAYILARI ${heatmapIndex + 1} (${months[heatmapIndex]})`,
//       series: generateHeatmapData(heatmapIndex, 16, 30, filteredData),
//     }));
//   }, [filteredData, generateHeatmapData, months]);

//   // Slider butonları
//   const handlePrev = () => {
//     setCurrentHeatmapIndex((prev) => (prev === 0 ? 9 : prev - 1));
//   };

//   const handleNext = () => {
//     setCurrentHeatmapIndex((prev) => (prev === 9 ? 0 : prev + 1));
//   };

//   // Heatmap tıklama event'i
//   const handleDataPointClick = React.useCallback((metricIndex, dayIndex) => {
//     const dataPoint = heatmaps[currentHeatmapIndex].series[metricIndex].data[dayIndex];
//     setSelectedData({
//       id: dataPoint.id,
//       kesintiNo: heatmaps[currentHeatmapIndex].series[metricIndex].name,
//       saidietkisi: dataPoint.x,
//       süre: dataPoint.y,
//     });
//     setIsModalOpen(true);
//   }, [currentHeatmapIndex, heatmaps]);

//   // Heatmap ayarları
//   const chartOptions = React.useMemo(() => ({
//     chart: {
//       type: "heatmap",
//       height: isMobile ? 300 : 500,
//       events: {
//         dataPointSelection: (event, _, { seriesIndex, dataPointIndex }) =>
//           handleDataPointClick(seriesIndex, dataPointIndex),
//       },
//     },
//     plotOptions: {
//       heatmap: {
//         radius: 20,
//         enableShades: false,
//         colorScale: {
//           ranges: [
//             { from: 0, to: 33, color: "#FF6B6B" },
//             { from: 34, to: 66, color: "#4ECDC4" },
//             { from: 67, to: 100, color: "#45B7D1" },
//           ],
//         },
//       },
//     },
//     dataLabels: { enabled: true, style: { colors: ["#fff"] } },
//     xaxis: {
//       categories: heatmaps[currentHeatmapIndex]?.series[0]?.data.map((item) => item.x),
//       title: { text: "Günler", style: { fontSize: "14px" } },
//     },
//     yaxis: {
//       labels: {
//         style: { fontSize: "12px" },
//       },
//     },
//     title: {
//       text: heatmaps[currentHeatmapIndex]?.title || "",
//       align: "center",
//       style: { fontSize: "18px" },
//     },
//   }), [currentHeatmapIndex, handleDataPointClick, heatmaps, isMobile]);

//   // MUI DataGrid ayarları
//   const columns = React.useMemo(() => [
//     { field: "kesintiNo", headerName: "KesintiNo", flex: 1 },
//     { field: "saidietkisi", headerName: "SadiEtkisi", flex: 1 },
//     { field: "süre", headerName: "Süresi", flex: 1 },
//   ], []);

//   return (
//     <Box sx={{ position: "relative", p: 2 }}>
//       {/* Dropdown Menüleri */}
//       <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
//         <FormControl fullWidth>
//           <InputLabel>Süre</InputLabel>
//           <Select
//             value={durationFilter}
//             label="Süre"
//             onChange={(e) => setDurationFilter(e.target.value)}
//           >
//             <MenuItem value="all">Hepsi</MenuItem>
//             <MenuItem value="short">Kısa (≥ 20)</MenuItem>
//             <MenuItem value="long">Uzun (≥ 50)</MenuItem>
//           </Select>
//         </FormControl>

//         <FormControl fullWidth>
//           <InputLabel>Sebep</InputLabel>
//           <Select
//             value={reasonFilter}
//             label="Sebep"
//             onChange={(e) => setReasonFilter(e.target.value)}
//           >
//             <MenuItem value="all">Hepsi</MenuItem>
//             <MenuItem value="A">A</MenuItem>
//             <MenuItem value="B">B</MenuItem>
//             <MenuItem value="C">C</MenuItem>
//           </Select>
//         </FormControl>

//         <FormControl fullWidth>
//           <InputLabel>Kaynak</InputLabel>
//           <Select
//             value={sourceFilter}
//             label="Kaynak"
//             onChange={(e) => setSourceFilter(e.target.value)}
//           >
//             <MenuItem value="all">Hepsi</MenuItem>
//             <MenuItem value="XX">XX</MenuItem>
//             <MenuItem value="YY">YY</MenuItem>
//           </Select>
//         </FormControl>
//       </Box>

//       {/* Slider Butonları */}
//       <Box sx={{ 
//   position: "relative", 
//   p: 2,
//   maxWidth: "1400px", 
//   mx: "auto", 
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "space-between"
// }}>
//   {/* Sol Buton */}
//   <IconButton
//     sx={{
//       bgcolor: "rgba(255,255,255,0.1)",
//       backdropFilter: "blur(10px)",
//       borderRadius: "50%",
//       width: 50,
//       height: 50,
//       boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
//       transition: "all 0.3s",
//       "&:hover": {
//         bgcolor: "rgba(255,255,255,0.2)",
//         transform: "scale(1.1)"
//       }
//     }}
//     onClick={handlePrev}
//     disabled={currentHeatmapIndex === 0}
//   >
//     <ChevronLeft sx={{ fontSize: 32, color: "white" }} />
//   </IconButton>

//   {/* Heatmap Container */}
//   <Box sx={{ 
//     position: "relative",
//     width: "1200px",
//     height: isMobile ? 300 : 500,
//     border: `2px solid ${theme.palette.primary.main}`,
//     borderRadius: 3,
//     overflow: "hidden",
//     boxShadow: "0 8px 24px rgba(0,0,0,0.1)"
//   }}>
//     <ReactApexChart
//       key={currentHeatmapIndex}
//       options={chartOptions}
//       series={heatmaps[currentHeatmapIndex]?.series || []}
//       type="heatmap"
//       height={isMobile ? 300 : 500}
//     />
//   </Box>

//   {/* Sağ Buton */}
//   <IconButton
//     sx={{
//       bgcolor: "rgba(255,255,255,0.1)",
//       backdropFilter: "blur(10px)",
//       borderRadius: "50%",
//       width: 50,
//       height: 50,
//       boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
//       transition: "all 0.3s",
//       "&:hover": {
//         bgcolor: "rgba(255,255,255,0.2)",
//         transform: "scale(1.1)"
//       }
//     }}
//     onClick={handleNext}
//     disabled={currentHeatmapIndex === 9}
//   >
//     <ChevronRight sx={{ fontSize: 32, color: "white" }} />
//   </IconButton>
// </Box>

//       {/* Modal */}
//       <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
//         <Box sx={{ bgcolor: "white", p: 3, maxWidth: 600, width: "100%" }}>
//           <Typography variant="h6" gutterBottom>
//             Detaylı Veri
//           </Typography>
//           <DataGrid
//             rows={selectedData ? [selectedData] : []}
//             columns={columns}
//             getRowId={(row) => row.id}
//             hideFooter
//             disableSelectionOnClick
//             autoHeight
//           />
//         </Box>
//       </Modal>
//     </Box>
//   );
// };

// export default React.memo(Heatmap);
import React from "react";
import ReactApexChart from "react-apexcharts";
import { Box, IconButton, Modal, Typography, useTheme, useMediaQuery, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { DataGrid } from "@mui/x-data-grid";
import data24 from "./data24.json"; // Veri dosyası

const Heatmap = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // Ay eşleme
  const monthMap = {
    0: { key: "1", name: "Ocak" },
    1: { key: "2", name: "Şubat" },
    2: { key: "3", name: "Mart" },
    3: { key: "4", name: "Nisan" },
    4: { key: "5", name: "Mayıs" },
    5: { key: "6", name: "Haziran" },
    6: { key: "7", name: "Temmuz" },
    7: { key: "8", name: "Ağustos" },
    8: { key: "9", name: "Eylül" },
    9: { key: "10", name: "Ekim" },
    10: { key: "11", name: "Kasım" },
    11: { key: "12", name: "Aralık" }
  };

  // State yönetimi
  const [currentHeatmapIndex, setCurrentHeatmapIndex] = React.useState(0);
  const [selectedOutages, setSelectedOutages] = React.useState([]);
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  // Heatmap verilerini üret (saidi_gunluk_isletme kullanıldı)
  const generateHeatmapData = React.useCallback((heatmapIndex) => {
    const monthKey = monthMap[heatmapIndex].key;
    const monthData = data24[monthKey] || {};

    return Object.entries(monthData).map(([isletme, daysData]) => ({
      name: isletme.trim(),
      data: Array.from({ length: 30 }, (_, dayIndex) => {
        const day = dayIndex + 1;
        const dayStr = String(day);
        const outages = daysData[dayStr] || [];
        
        // İlk kaydın saidi_gunluk_isletme değerini al
        const firstOutage = outages[0] || {};
        const saidiValue = parseFloat(firstOutage.saidi_gunluk_isletme) || 0;

        return {
          x: `${day}. gün (${monthMap[heatmapIndex].name})`,
          y: saidiValue, // Tek değer kullanılıyor
          meta: {
            isletme: isletme.trim(),
            day: day,
            outages: outages // Tüm kayıtlar modal için saklanıyor
          }
        };
      })
    }));
  }, []);

  // Heatmap yapılandırması
  const heatmaps = React.useMemo(() => {
    return Object.keys(monthMap).map(index => ({
      title: `GÜNLÜK SAIDI DEĞERLERİ - ${monthMap[index].name}`,
      series: generateHeatmapData(index)
    }));
  }, [generateHeatmapData]);

  // Heatmap ayarları
  const chartOptions = React.useMemo(() => ({
    chart: {
      type: "heatmap",
      height: isMobile ? 300 : 500,
      events: {
        dataPointSelection: (event, chart, { seriesIndex, dataPointIndex }) => 
          handleDataPointClick(seriesIndex, dataPointIndex)
      }
    },
    plotOptions: {
      heatmap: {
        radius: 20,
        enableShades: false,
        colorScale: {
          ranges: [
            { from: 0, to: 0.5, color: "#fffafa" },
            { from: 0.5, to: 3, color: "#00ff7f" },
            { from: 3, to: 5, color: "#ffc0cb" },
            { from: 5, to: 8, color: "#db7093" },
            { from: 8, to: 10, color: "#dc143c" },
            { from: 10, to: 50, color: "#ff0000" }
          ]
        }
      }
    },
    dataLabels: { 
      enabled: true,
      formatter: (val) => val.toFixed(2),
      style: { colors: ["black"] }
    },
    xaxis: {
      categories: heatmaps[currentHeatmapIndex]?.series[0]?.data.map(d => d.x) || [],
      title: { text: "Günler", style: { fontSize: "14px" } }
    },
 // Heatmap ayarları bölümünde yaxis.formatter kısmını şu şekilde değiştirin:
 yaxis: {
  labels: { 
    style: { 
      fontSize: "12px",
      colors: [theme.palette.text.primary] // Yazı rengi düzeltildi
    },
    formatter: (value) => {
      // Sayısal değerler için formattırmayı kaldır
      return value;
    }
  }
},
    title: {
      text: heatmaps[currentHeatmapIndex]?.title || "",
      align: "center",
      style: { fontSize: "18px" }
    }
  }), [currentHeatmapIndex, heatmaps, isMobile]);

  // Tıklama event'i
  const handleDataPointClick = (seriesIndex, dataPointIndex) => {
    const dataPoint = heatmaps[currentHeatmapIndex].series[seriesIndex]?.data[dataPointIndex];
    if (dataPoint?.meta?.outages) {
      setSelectedOutages(dataPoint.meta.outages);
      setIsModalOpen(true);
    }
  };

  // Slider butonları
  const handlePrev = () => {
    setCurrentHeatmapIndex(prev => (prev === 0 ? 11 : prev - 1));
  };

  const handleNext = () => {
    setCurrentHeatmapIndex(prev => (prev === 11 ? 0 : prev + 1));
  };

  // DataGrid sütunları
  const columns = React.useMemo(() => [
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
            textDecoration: 'underline',
            fontWeight: 500
          }}
        >
          {params.value}
        </a>
      )
    },
    // Diğer sütunlar aynı kalıyor...
    { field: "SEBEKE_UNSURU", headerName: "Şebeke Unsuru", flex: 1 },
    { field: "OUTAGE_START", headerName: "Başlangıç", flex: 1 },
    { field: "OUTAGE_END", headerName: "Bitiş", flex: 1 },
    { field: "OUTAGE_DİFF_HOUR", headerName: "Süre (Saat)", flex: 1 },
    { field: "saidi_kesinti_isletme", headerName: "Kesinti SAIDI", flex: 1 },
    { field: "saidi_gunluk_isletme", headerName: "Günlük SAIDI", flex: 1 },
    { field: "RW", headerName: "RW", flex: 1 }
  ], [theme]);

  return (
    <Box sx={{ position: "relative", p: 2 }}>
      {/* Slider Butonları */}
      <Box sx={{ 
        position: "relative", 
        p: 2,
        maxWidth: "1400px", 
        mx: "auto", 
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
      }}>
        {/* Sol Buton */}
        <IconButton
          sx={{
            bgcolor: "rgba(255,255,255,0.1)",
            backdropFilter: "blur(10px)",
            borderRadius: "50%",
            width: 50,
            height: 50,
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            transition: "all 0.3s",
            "&:hover": {
              bgcolor: "rgba(255,255,255,0.2)",
              transform: "scale(1.1)"
            }
          }}
          onClick={handlePrev}
          disabled={currentHeatmapIndex === 0}
        >
          <ChevronLeft sx={{ fontSize: 32, color: "white" }} />
        </IconButton>

        {/* Heatmap Container */}
        <Box sx={{ 
          position: "relative",
          width: "1200px",
          height: isMobile ? 300 : 500,
          border: `2px solid ${theme.palette.primary.main}`,
          borderRadius: 3,
          overflow: "hidden",
          boxShadow: "0 8px 24px rgba(0,0,0,0.1)"
        }}>
          <ReactApexChart
            key={currentHeatmapIndex}
            options={chartOptions}
            series={heatmaps[currentHeatmapIndex]?.series || []}
            type="heatmap"
            height={isMobile ? 300 : 500}
          />
        </Box>

        {/* Sağ Buton */}
        <IconButton
          sx={{
            bgcolor: "rgba(255,255,255,0.1)",
            backdropFilter: "blur(10px)",
            borderRadius: "50%",
            width: 50,
            height: 50,
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            transition: "all 0.3s",
            "&:hover": {
              bgcolor: "rgba(255,255,255,0.2)",
              transform: "scale(1.1)"
            }
          }}
          onClick={handleNext}
          disabled={currentHeatmapIndex === 11}
        >
          <ChevronRight sx={{ fontSize: 32, color: "white" }} />
        </IconButton>
      </Box>

      {/* Modal */}
      <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <Box sx={{ 
          bgcolor: "white", 
          p: 3, 
          maxWidth: 1500, 
          width: "100%",
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          maxHeight: '80vh',
          overflowY: 'auto'
        }}>
          <Typography variant="h6" gutterBottom>
            {selectedOutages.length > 0 
              ? `${selectedOutages[0].isletme} - ${selectedOutages[0].day}. Gün Detayları`
              : "Detay Yok"}
          </Typography>
          <DataGrid
  rows={selectedOutages}
  columns={columns}
  pageSize={5}
  rowsPerPageOptions={[5]}
  autoHeight
  disableSelectionOnClick
  hideFooterSelectedRowCount
  getRowId={(row) => row.OUTAGE_CODE} // Benzersiz ID belirtildi
/>
        </Box>
      </Modal>
    </Box>
  );
};

export default Heatmap;