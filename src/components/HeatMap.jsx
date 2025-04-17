
 
import React,{ useState,useCallback } from "react";
import ReactApexChart from "react-apexcharts";
import { Box, IconButton, Modal, Typography, useTheme, useMediaQuery, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { DataGrid } from "@mui/x-data-grid";
import data24 from "./data24.json"; // Veri dosyası
 const  MuiSelect=({onSelectChange })=> {
 const [selectedvalue,setselectedvalue]=useState(2025);
// `
const handleChange = (e) => {
  const chartId = e.target.value;
  setselectedvalue(chartId);
  onSelectChange(chartId); // Parent'a sadece chartId'yi gönder
};

  return (
    <Box sx={{ minWidth: 60, marginInline:130 }}>
      <FormControl color='secondary'  sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel id="demo-simple-select-label">YIL</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectedvalue} // value prop'u eklendi
          label="YIL"
          onChange={handleChange}
        >
          {/*<MenuItem value={2022}>2022</MenuItem> */}
          <MenuItem value={2023}>2023</MenuItem>
          <MenuItem value={2024}>2024</MenuItem>
          <MenuItem value={2025}>2025</MenuItem>
    
        </Select>
      </FormControl>
    </Box>
  );
}

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
  const[selectData,setSelectData]=useState(2025)

 //SELECT CHİLD COMPONETTEN USECALLBACK İLE VERİ ALIYOR 
 const handleChildToParent = useCallback((chartId) => {
  console.log(chartId)
  setSelectData(chartId); // burada chartId: "chart1" gibi string bir değer olacak
}, []);

  // Heatmap verilerini üret (saidi_gunluk_isletme kullanıldı)
  const generateHeatmapData = React.useCallback((heatmapIndex) => {
    const monthKey = monthMap[heatmapIndex].key;
    const monthData = data24[selectData][monthKey] || {};

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
  }, [selectData]);
   

  // Heatmap yapılandırması
  const heatmaps = React.useMemo(() => {
    return Object.keys(monthMap).map(index => ({
      title: `GÜNLÜK SAIDI DEĞERLERİ - ${selectData} Yılı ${monthMap[index].name} Ayı`,
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
      
        <Box 
        
        sx={{ 
          position: "relative",
          width: "1200px",
          height: isMobile ? 300 : 570,
          border: `2px solid ${theme.palette.primary.main}`,
          borderRadius: 3,
          overflow: "hidden",
          boxShadow: "0 8px 24px rgba(0,0,0,0.1)"
        }}>
            <MuiSelect onSelectChange={handleChildToParent} />
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
              ? `Seçilen Gündeki SAİDİ etkisi En Büyük 5 Kesinti`
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