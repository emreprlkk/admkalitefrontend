import React from "react";
import ReactApexChart from "react-apexcharts";
import { Box, IconButton, Modal, Typography, useTheme, useMediaQuery } from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { DataGrid } from "@mui/x-data-grid";

const HeatmapSlider = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // Ay bilgileri
  const months = [
    "Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran",
    "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"
  ];

  // Farklı kategoriler için rastgele metrik isimleri
  const metricCategories = [
    ["ACIPAYAM", "AYDIN MERKEZ", "BODRUM", "ÇİNE", "ÇİVRİL", "DENİZLİ MERKEZ", "DİDİM", "FETHİYE", "KUŞADASI", "MARMARİS","MİLAS","MUĞLA MERKEZ","NAZİLLİ","ORTACA","SARAYKÖY","SÖKE"],
    ["ACIPAYAM", "AYDIN MERKEZ", "BODRUM", "ÇİNE", "ÇİVRİL", "DENİZLİ MERKEZ", "DİDİM", "FETHİYE", "KUŞADASI", "MARMARİS","MİLAS","MUĞLA MERKEZ","NAZİLLİ","ORTACA","SARAYKÖY","SÖKE"],
    ["ACIPAYAM", "AYDIN MERKEZ", "BODRUM", "ÇİNE", "ÇİVRİL", "DENİZLİ MERKEZ", "DİDİM", "FETHİYE", "KUŞADASI", "MARMARİS","MİLAS","MUĞLA MERKEZ","NAZİLLİ","ORTACA","SARAYKÖY","SÖKE"],
    ["ACIPAYAM", "AYDIN MERKEZ", "BODRUM", "ÇİNE", "ÇİVRİL", "DENİZLİ MERKEZ", "DİDİM", "FETHİYE", "KUŞADASI", "MARMARİS","MİLAS","MUĞLA MERKEZ","NAZİLLİ","ORTACA","SARAYKÖY","SÖKE"],
    ["ACIPAYAM", "AYDIN MERKEZ", "BODRUM", "ÇİNE", "ÇİVRİL", "DENİZLİ MERKEZ", "DİDİM", "FETHİYE", "KUŞADASI", "MARMARİS","MİLAS","MUĞLA MERKEZ","NAZİLLİ","ORTACA","SARAYKÖY","SÖKE"],
    ["ACIPAYAM", "AYDIN MERKEZ", "BODRUM", "ÇİNE", "ÇİVRİL", "DENİZLİ MERKEZ", "DİDİM", "FETHİYE", "KUŞADASI", "MARMARİS","MİLAS","MUĞLA MERKEZ","NAZİLLİ","ORTACA","SARAYKÖY","SÖKE"],
    ["ACIPAYAM", "AYDIN MERKEZ", "BODRUM", "ÇİNE", "ÇİVRİL", "DENİZLİ MERKEZ", "DİDİM", "FETHİYE", "KUŞADASI", "MARMARİS","MİLAS","MUĞLA MERKEZ","NAZİLLİ","ORTACA","SARAYKÖY","SÖKE"],
    ["ACIPAYAM", "AYDIN MERKEZ", "BODRUM", "ÇİNE", "ÇİVRİL", "DENİZLİ MERKEZ", "DİDİM", "FETHİYE", "KUŞADASI", "MARMARİS","MİLAS","MUĞLA MERKEZ","NAZİLLİ","ORTACA","SARAYKÖY","SÖKE"],
    ["ACIPAYAM", "AYDIN MERKEZ", "BODRUM", "ÇİNE", "ÇİVRİL", "DENİZLİ MERKEZ", "DİDİM", "FETHİYE", "KUŞADASI", "MARMARİS","MİLAS","MUĞLA MERKEZ","NAZİLLİ","ORTACA","SARAYKÖY","SÖKE"],
    ["ACIPAYAM", "AYDIN MERKEZ", "BODRUM", "ÇİNE", "ÇİVRİL", "DENİZLİ MERKEZ", "DİDİM", "FETHİYE", "KUŞADASI", "MARMARİS","MİLAS","MUĞLA MERKEZ","NAZİLLİ","ORTACA","SARAYKÖY","SÖKE"],
  ];

  // Heatmap verilerini üret
  const generateHeatmapData = React.useCallback((heatmapIndex, metricsCount, days, min, max) => {
    return Array.from({ length: metricsCount }, (_, metricIndex) => ({
      name: `${metricCategories[heatmapIndex][metricIndex]}`,
      data: Array.from({ length: days }, (_, day) => ({
        x: `${day + 1}. gün (${months[heatmapIndex]})`, // Gün + Ay bilgisi
        y: Math.floor(Math.random() * (max - min + 1)) + min,
        id: `${heatmapIndex}-${metricIndex}-${day}-${Math.random()}`,
      })),
    }));
  }, [metricCategories, months]);

  // 10 farklı heatmap
  const heatmaps = React.useMemo(() => {
    return Array.from({ length: 10 }, (_, heatmapIndex) => ({
      title: `TOPLAM KESİNTİ SAYILARI ${heatmapIndex + 1} (${months[heatmapIndex]})`, // Başlıkta da ay bilgisi
      series: generateHeatmapData(heatmapIndex, 12, 30, 0, 100),
    }));
  }, [generateHeatmapData, months]);

  // State yönetimi
  const [currentHeatmapIndex, setCurrentHeatmapIndex] = React.useState(0);
  const [selectedData, setSelectedData] = React.useState(null);
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  // Heatmap tıklama event'i
  const handleDataPointClick = React.useCallback((metricIndex, dayIndex) => {
    const dataPoint = heatmaps[currentHeatmapIndex].series[metricIndex].data[dayIndex];
    setSelectedData({
      id: dataPoint.id,
      kesintiNo: heatmaps[currentHeatmapIndex].series[metricIndex].name,
      saidietkisi: dataPoint.x,
      süre: dataPoint.y,
    });
    setIsModalOpen(true);
  }, [currentHeatmapIndex, heatmaps]);

  // Slider butonları
  const handlePrev = () => {
    setCurrentHeatmapIndex((prev) =>
      prev === 0 ? heatmaps.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentHeatmapIndex((prev) =>
      prev === heatmaps.length - 1 ? 0 : prev + 1
    );
  };

  // Heatmap ayarları
  const chartOptions = React.useMemo(() => ({
    chart: {
      type: "heatmap",
      height: isMobile ? 300 : 500,
      events: {
        dataPointSelection: (event, _, { seriesIndex, dataPointIndex }) =>
          handleDataPointClick(seriesIndex, dataPointIndex),
      },
    },
    plotOptions: {
      heatmap: {
        radius: 20,
        enableShades: false,
        colorScale: {
          ranges: [
            { from: 0, to: 33, color: "#FF6B6B" },
            { from: 34, to: 66, color: "#4ECDC4" },
            { from: 67, to: 100, color: "#45B7D1" },
          ],
        },
      },
    },
    dataLabels: { enabled: true, style: { colors: ["#fff"] } },
    xaxis: {
      categories: heatmaps[currentHeatmapIndex]?.series[0]?.data.map((item) => item.x), // Gün + Ay bilgisi
      title: { text: "Günler", style: { fontSize: "14px" } },
    },
    yaxis: {
      labels: {
        style: { fontSize: "12px" },
      //  formatter: (value) => value?.slice(0, 15) || "", // Güvenli slice
      },
    },
    title: {
      text: heatmaps[currentHeatmapIndex]?.title || "",
      align: "center",
      style: { fontSize: "18px" },
    },
  }), [currentHeatmapIndex, handleDataPointClick, heatmaps, isMobile]);

  // MUI DataGrid ayarları
  const columns = React.useMemo(() => [
    { field: "kesintiNo", headerName: "KesintiNo", flex: 1 },
    { field: "saidietkisi", headerName: "SadiEtkisi", flex: 1 },
    { field: "süre", headerName: "Süresi", flex: 1 },
  ], []);

  return (
    <Box sx={{ position: "relative", p: 2 }}>
      {/* Slider Butonları */}
      <h2 style={{color:"white"}}>...YAPIM AŞAMASINDA.... </h2>
      <IconButton
        sx={{
          position: "absolute",
          left: 0,
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 1,
          bgcolor: "background.paper",
          "&:hover": { bgcolor: "action.hover" },
        }}
        onClick={handlePrev}
        disabled={currentHeatmapIndex === 0}
      >
        <ChevronLeft />
      </IconButton>

      <IconButton
        sx={{
          position: "absolute",
          right: 0,
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 1,
          bgcolor: "background.paper",
          "&:hover": { bgcolor: "action.hover" },
        }}
        onClick={handleNext}
        disabled={currentHeatmapIndex === heatmaps.length - 1}
      >
        <ChevronRight />
      </IconButton>

      {/* Heatmap */}
      <Box sx={{ maxWidth: "1200px", mx: "auto" }}>
        <ReactApexChart
          key={currentHeatmapIndex} // Performans için key
          options={chartOptions}
          series={heatmaps[currentHeatmapIndex]?.series || []}
          type="heatmap"
          height={isMobile ? 300 : 500}
        />
      </Box>

      {/* Modal */}
      <Modal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            bgcolor: "white",
            boxShadow: 24,
            borderRadius: 2,
            p: 3,
            maxWidth: 600,
            width: "100%",
            maxHeight: "80vh",
            overflow: "hidden",
          }}
        >
          <Typography variant="h6" gutterBottom>
            Detaylı Veri
          </Typography>
          <DataGrid
            rows={selectedData ? [selectedData] : []}
            columns={columns}
            getRowId={(row) => row.id}
            hideFooter
            disableSelectionOnClick
            autoHeight={false}
            sx={{
              height: 400,
              "& .MuiDataGrid-cell": { border: "none" },
              "& .MuiDataGrid-columnHeader": { bgcolor: "#f5f5f5" },
              "& .MuiDataGrid-virtualScroller": {
                overflowY: "auto !important",
              },
            }}
          />
        </Box>
      </Modal>
    </Box>
  );
};

export default React.memo(HeatmapSlider);