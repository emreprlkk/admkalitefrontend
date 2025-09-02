
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
    const dayCount =
      pos === 1 ? (isLeap(year) ? 29 : 28) : DAYS_IN_MONTH[pos];

    const { key: mKey, name } = MONTHS[pos];
    const src = top5Mode
      ? ExcelJsonDatax?.[mKey] || {}
      : data24?.[year]?.[mKey] || {};

    const series = Object.entries(src).map(([plant, days]) => {
      const points = [...Array(dayCount)].map((_, d) => ({
        x: `${d + 1}`,
        y: getDailySaidi(days[String(d + 1)]),
        meta: { outages: days[String(d + 1)] || [], isTotal: false }
      }));
      const total = points.reduce((s, p) => s + p.y, 0);
      // Toplam sütununa sentinel değer (999999) veriyoruz ki renk beyaz olsun
      points.push({
        x: "Toplam",
        y: 999999,
        meta: { outages: [], isTotal: true, totalValue: total }
      });
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
          const pt = current?.series[seriesIndex]?.data[dataPointIndex];
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
            // Beyaz renk: sentinel değer 999999
            { from: 999999, to: 999999, color: "#FFFFFF" },
            { from: 0, to: 0.5, color: "#f8f8ff" },
            { from: 0.5, to: 3, color: "#00ff7f" },
            { from: 3, to: 5, color: "#ffc0cb" },
            { from: 5, to: 8, color: "#db7093" },
            { from: 8, to: 10, color: "#EA7300" },
            { from: 10, to: 50, color: "#F7374F" },
            { from: 50, to: 100, color: "#AF2655" }
          ]
        }
      }
    },
    dataLabels: {
      enabled: true,
      formatter: (v, { seriesIndex, dataPointIndex }) => {
        const pt = current?.series[seriesIndex]?.data[dataPointIndex];
        if (pt?.meta.isTotal) {
          // Sentinel yerine gerçek toplamı göster
          return pt.meta.totalValue.toFixed(2);
        }
        return v.toFixed(2);
      },
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
