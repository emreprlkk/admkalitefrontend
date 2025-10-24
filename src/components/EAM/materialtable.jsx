import React, { useEffect, useMemo, useState } from "react";
import { MaterialReactTable } from "material-react-table";
import { MRT_Localization_TR } from "material-react-table/locales/tr";
import {
  Box,
  MenuItem,
  TextField,
  Typography,
  Button,
  Stack,
  CircularProgress,
  Paper,
} from "@mui/material";
import { MapContainer, TileLayer, Marker, Popup, Polyline, Tooltip, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { divIcon } from "leaflet";
import * as XLSX from "xlsx";

// Leaflet marker icon fix
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

// Özel marker icon'ları oluştur
const createCustomIcon = (label, color) => {
  return divIcon({
    className: 'custom-marker',
    html: `
      <div style="position: relative;">
        <div style="
          background-color: ${color};
          width: 30px;
          height: 30px;
          border-radius: 50% 50% 50% 0;
          transform: rotate(-45deg);
          border: 2px solid white;
          box-shadow: 0 2px 5px rgba(0,0,0,0.3);
        "></div>
        <div style="
          position: absolute;
          top: -25px;
          left: 35px;
          background-color: white;
          padding: 2px 8px;
          border-radius: 3px;
          font-size: 12px;
          font-weight: bold;
          white-space: nowrap;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
          border: 1px solid ${color};
          color: ${color};
        ">${label}</div>
      </div>
    `,
    iconSize: [30, 30],
    iconAnchor: [15, 30],
  });
};

// --- CSV export helper ---
// CSV dosyası oluşturup indiren yardımcı fonksiyon
function downloadCsv(rows, columns, fileName = "export.csv") {
  if (!rows?.length) return;
  // Başlıkları hazırla
  const headers = columns
    .map((c) => `"${(c.header ?? c.accessorKey).replace(/"/g, '""')}"`)
    .join(",");
  // Satırları hazırla
  const lines = rows.map((r) =>
    columns
      .map((c) => {
        const v = r[c.accessorKey];
        const s = v === null || v === undefined ? "" : String(v);
        return `"${s.replace(/"/g, '""')}"`;
      })
      .join(",")
  );
  // CSV'yi oluştur ve indir
  const csv = [headers, ...lines].join("\r\n");
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = fileName;
  a.click();
  URL.revokeObjectURL(url);
}

// --- İki koordinat arasındaki kuş uçuşu mesafeyi hesapla (km cinsinden) ---
// Haversine formülü kullanarak iki GPS koordinatı arasındaki mesafeyi hesaplar
function calculateDistance(lat1, lon1, lat2, lon2) {
  const R = 6371; // Dünya'nın yarıçapı (km)
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a = 
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c;
  return distance.toFixed(2); // 2 ondalık basamak
}

// Haritayı seçilen konuma taşıyan component
function MapUpdater({ center, zoom }) {
  const map = useMap();
  useEffect(() => {
    if (center) {
      map.setView(center, zoom);
    }
  }, [center, zoom, map]);
  return null;
}

export default function App() {
  // State tanımlamaları
  const [indexData, setIndexData] = useState({}); // JSON'dan yüklenen tüm veri
  const [selectedGroup, setSelectedGroup] = useState(""); // Seçili işletme grubu
  const [tableData, setTableData] = useState([]); // Tabloda gösterilecek veri
  const [loading, setLoading] = useState(true); // Yükleme durumu
  const [selectedLocation, setSelectedLocation] = useState(null); // Haritada gösterilecek konumlar
  const [mapCenter, setMapCenter] = useState([39.9334, 32.8597]); // Harita merkez koordinatı (Ankara default)
  const [mapZoom, setMapZoom] = useState(6); // Harita zoom seviyesi
  const [selectedRowId, setSelectedRowId] = useState(null); // Seçili satır ID'si

  // JSON dosyasını yükle
  useEffect(() => {
    fetch("/maptable.json")
      .then((res) => res.json())
      .then((json) => {
        setIndexData(json ?? {});
      })
      .catch((err) => console.error("maptable.json yüklenemedi:", err))
      .finally(() => setLoading(false));
  }, []);

  // İlk grubu otomatik seç
  useEffect(() => {
    const groups = Object.keys(indexData ?? {});
    if (groups.length && !selectedGroup) {
      setSelectedGroup(groups[0]);
    }
  }, [indexData, selectedGroup]);

  // Seçilen gruba ait veriyi tabloya yükle
  useEffect(() => {
    if (!selectedGroup) {
      setTableData([]);
      return;
    }
    const arr = indexData[selectedGroup];
    setTableData(Array.isArray(arr) ? arr : []);
  }, [selectedGroup, indexData]);

  // Satır tıklama handler - İki noktayı da haritada göster
  const handleRowClick = (row) => {
    const data = row.original;
    setSelectedRowId(row.id); // Seçili satırı işaretle
    
    const locations = [];
    
    // İlk koordinat çiftini al (Koordinat X, Koordinat Y)
    let lat1 = data["Koordinat Y"];
    let lng1 = data["Koordinat X"];
    if (typeof lat1 === "string") lat1 = parseFloat(lat1);
    if (typeof lng1 === "string") lng1 = parseFloat(lng1);
    if (lat1 && lng1 && !isNaN(lat1) && !isNaN(lng1)) {
      locations.push({ lat: lat1, lng: lng1, label: "Ekip", data });
    }
    
    // İkinci koordinat çiftini al (X_KOORDINAT, Y_KOORDINAT)
    let lat2 = data["Y_KOORDINAT"];
    let lng2 = data["X_KOORDINAT"];
    if (typeof lat2 === "string") lat2 = parseFloat(lat2);
    if (typeof lng2 === "string") lng2 = parseFloat(lng2);
    if (lat2 && lng2 && !isNaN(lat2) && !isNaN(lng2)) {
      locations.push({ lat: lat2, lng: lng2, label: "Trafo", data });
    }
    
    // Geçerli koordinat varsa haritayı güncelle
    if (locations.length > 0) {
      setSelectedLocation(locations);
      
      // Her iki noktayı da gösterecek şekilde haritayı merkeze al
      if (locations.length === 2) {
        const centerLat = (locations[0].lat + locations[1].lat) / 2;
        const centerLng = (locations[0].lng + locations[1].lng) / 2;
        setMapCenter([centerLat, centerLng]);
        setMapZoom(14);
      } else {
        // Tek nokta varsa o noktaya zoom yap
        setMapCenter([locations[0].lat, locations[0].lng]);
        setMapZoom(15);
      }
    }
  };

  // Tablo kolonlarını dinamik olarak oluştur
 
const columns = useMemo(() => {
  if (!tableData?.length) return [];

  const keys = Object.keys(tableData[0]);

  return keys.map((k) => {
    // Kolondaki tekrarsız değerleri bul
    const uniqueValues = Array.from(
      new Set(tableData.map((row) => row[k]).filter(Boolean))
    );

 // Az sayıda benzersiz değer varsa çoklu seçim filtresi
    if (uniqueValues.length > 0 && uniqueValues.length <= 20) {
      return {
        accessorKey: k,
        header: k,
       
         filterVariant: 'multi-select',          // 👈 çoklu seçim
        filterSelectOptions: uniqueValues.sort(), // 👈 tekrarsız değerler
      };
    }

    // Diğer kolonlar text filtresi ile gelsin
    return {
      accessorKey: k,
      header: k,
      filterVariant: "text",
    };
  });
}, [tableData]);


  // --- Varsayılan gizlenecek kolonlar (koordinat alanları) ---
  const hiddenColumns = [
    "Koordinat X",
    "Koordinat Y",
    "X_KOORDINAT",
    "Y_KOORDINAT",
    "RW",
  ];

  // Kolon görünürlük durumunu oluştur
  const defaultColumnVisibility = useMemo(() => {
    const obj = {};
    columns.forEach((col) => {
      obj[col.accessorKey] = !hiddenColumns.includes(col.accessorKey);
    });
    return obj;
  }, [columns]);

  const groupNames = Object.keys(indexData ?? {}); // Tüm işletme grup isimleri

  // İki koordinat arasındaki mesafeyi hesapla
  const distance = useMemo(() => {
    if (selectedLocation && selectedLocation.length === 2) {
      return calculateDistance(
        selectedLocation[0].lat,
        selectedLocation[0].lng,
        selectedLocation[1].lat,
        selectedLocation[1].lng
      );
    }
    return null;
  }, [selectedLocation]);

  return (
    <Box sx={{ p: 2 }}>
      <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 2 }}>
        <Typography variant="h6">Ekip İş Emri Kapama Lokasyonu-Trafo Mesafesi</Typography>
        <TextField
          select
          label="İşletme Seç"
          size="small"
          value={selectedGroup}
          onChange={(e) => setSelectedGroup(e.target.value)}
          sx={{ minWidth: 320 }}
        >
          {groupNames.map((name) => (
            <MenuItem key={name} value={name}>
              {name}
            </MenuItem>
          ))}
        </TextField>
      </Stack>

      {loading && (
        <Box sx={{ textAlign: "center", mt: 4 }}>
          <CircularProgress />
          <Typography variant="body2" sx={{ mt: 1 }}>
            Veri yükleniyor...
          </Typography>
        </Box>
      )}

      {!loading && tableData.length > 0 && (
        <Stack direction="row" spacing={2} sx={{ height: "calc(100vh - 150px)" }}>
          {/* Tablo */}
          <Box sx={{ flex: 1, overflow: "hidden" }}>
            <MaterialReactTable
              columns={columns}
              data={tableData}
              localization={MRT_Localization_TR}
              enableColumnFilters
              enableGlobalFilter
              enableSorting
              enableColumnOrdering
              enableColumnResizing
              enableRowVirtualization
              enableHiding
              enableDensityToggle
              enablePagination
              enableStickyHeader
              muiTableContainerProps={{ sx: { maxHeight: "calc(100vh - 250px)" } }}
              muiTableBodyRowProps={({ row }) => ({
                onClick: () => handleRowClick(row),
                sx: {
                  cursor: "pointer",
                  backgroundColor: selectedRowId === row.id ? "rgba(25, 118, 210, 0.12)" : "transparent",
                  "&:hover": {
                    backgroundColor: selectedRowId === row.id ? "rgba(25, 118, 210, 0.2)" : "rgba(0, 0, 0, 0.04)",
                  },
                },
              })}
              initialState={{
                density: "compact",
                pagination: { pageIndex: 0, pageSize: 50 },
                showColumnFilters: true,
                columnVisibility: defaultColumnVisibility,
              }}
              renderTopToolbarCustomActions={({ table }) => {
                const rows = table
                  .getPrePaginationRowModel()
                  .rows.map((r) => r.original);
                const visibleCols = table
                  .getAllLeafColumns()
                  .filter((c) => c.getIsVisible())
                  .map((c) => ({
                    accessorKey: c.id,
                    header: c.columnDef.header ?? c.id,
                  }));
                const allCols = table.getAllLeafColumns().map((c) => ({
                  accessorKey: c.id,
                  header: c.columnDef.header ?? c.id,
                }));
                return (
                  <Stack direction="row" spacing={1}>
                    <Button
                      variant="outlined"
                      size="small"
                      onClick={() =>
                        downloadCsv(
                          rows,
                          visibleCols,
                          `${selectedGroup || "export"}-gorunen.csv`
                        )
                      }
                    >
                      CSV (Görünen Kolonlar)
                    </Button>
                    <Button
                      variant="outlined"
                      size="small"
                      onClick={() =>
                        downloadCsv(
                          rows,
                          allCols,
                          `${selectedGroup || "export"}-tum.csv`
                        )
                      }
                    >
                      CSV (Tüm Kolonlar)
                    </Button>
                  </Stack>
                );
              }}
            />
          </Box>

          {/* Harita */}
          <Paper sx={{ flex: 1, overflow: "hidden", marginleft:15 }}>
            <MapContainer
              center={mapCenter}
              zoom={mapZoom}
              style={{ height: "100%", width: "100%" }}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <MapUpdater center={mapCenter} zoom={mapZoom} />
              
              {/* İki nokta arasındaki çizgiyi göster */}
              {selectedLocation && selectedLocation.length === 2 && (
                <Polyline
                  positions={[
                    [selectedLocation[0].lat, selectedLocation[0].lng],
                    [selectedLocation[1].lat, selectedLocation[1].lng]
                  ]}
                  color="#ff6b6b"
                  weight={3}
                  dashArray="10, 10"
                  opacity={0.8}
                >
                  {/* Çizgi üzerinde mesafe bilgisini göster */}
                  <Tooltip permanent direction="center" className="distance-tooltip">
                    <span style={{ 
                      backgroundColor: 'white', 
                      padding: '4px 8px', 
                      borderRadius: '4px',
                      fontWeight: 'bold',
                      color: '#ff6b6b',
                      boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
                    }}>
                      ↔ {distance} km
                    </span>
                  </Tooltip>
                </Polyline>
              )}
              
              {/* Marker'ları göster */}
              {selectedLocation && Array.isArray(selectedLocation) && selectedLocation.map((loc, index) => (
                <Marker 
                  key={index} 
                  position={[loc.lat, loc.lng]}
                  icon={createCustomIcon(loc.label, index === 0 ? "#1976d2" : "#d32f2f")}
                >
                  <Popup>
                    <Box sx={{ minWidth: 200 }}>
                      <Typography variant="subtitle2" sx={{ fontWeight: "bold", mb: 1, color: index === 0 ? "#1976d2" : "#d32f2f" }}>
                        {loc.label}
                      </Typography>
                      {Object.entries(loc.data).map(([key, value]) => {
                        if (!hiddenColumns.includes(key)) {
                          return (
                            <Typography key={key} variant="body2" sx={{ fontSize: 12 }}>
                              <strong>{key}:</strong> {value}
                            </Typography>
                          );
                        }
                        return null;
                      })}
                      <Typography variant="caption" sx={{ mt: 1, display: "block" }}>
                        Koordinat: {loc.lat.toFixed(6)}, {loc.lng.toFixed(6)}
                      </Typography>
                    </Box>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </Paper>
        </Stack>
      )}

      {!loading && !tableData.length && (
        <Typography variant="body2" sx={{ mt: 2 }}>
          Gösterilecek veri bulunamadı.
        </Typography>
      )}
    </Box>
  );
}

 

 
 /*
export function StatusTable() {
  const [tableData, setTableData] = React.useState([]);
  const [selectedRowId, setSelectedRowId] = React.useState(null); // Track selected row

  // Define selectedGroup for CSV filenames
  const selectedGroup = "status_table";

  // Define default column visibility (all columns visible by default)
  const defaultColumnVisibility = {};

  // Handle row click
  const handleRowClick = (row) => {
    setSelectedRowId(row.id); // Update selected row ID
    console.log("Clicked row:", row.original); // Log row data (customize as needed)
  };

  // CSV export function
  const downloadCsv = (rows, columns, filename) => {
    const csvRows = [
      columns.map((col) => `"${col.header}"`).join(","),
      ...rows.map((row) =>
        columns.map((col) => `"${row[col.accessorKey] || ''}"`).join(",")
      ),
    ];
    const csvContent = csvRows.join("\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    link.click();
  };

  // Fetch data from statugecis.json
  React.useEffect(() => {
    fetch("/statugecis.json")
      .then((res) => res.json())
      .then((data) => setTableData(Array.isArray(data) ? data : []))
      .catch((err) => console.error("Veri yüklenemedi:", err));
  }, []);

  // Dynamically create columns
  const columns = React.useMemo(() => {
    if (!tableData?.length) return [];

    const keys = Object.keys(tableData[0]);

    return keys.map((k, index) => {
      // Find unique values (excluding null/undefined/empty strings)
      const uniqueValues = Array.from(
        new Set(
          tableData
            .map((row) => row[k])
            .filter((v) => v !== null && v !== undefined && v !== "")
        )
      ).sort((a, b) => String(a).localeCompare(String(b), "tr"));

      // Log unique values for the first and second columns to debug
      if (index === 0 || index === 1) {
        console.log(`Unique values for column ${k}:`, uniqueValues);
      }

      // Force multi-select for the first and second columns with custom filter function
      if (index === 0 || index === 1) {
        return {
          accessorKey: k,
          header: k,
          filterVariant: "multi-select",
          filterSelectOptions: uniqueValues,
          filterFn: (row, id, filterValue) => {
            // If no filter values selected, show all rows
            if (!filterValue || filterValue.length === 0) return true;
            const cellValue = String(row.getValue(id) || "").toLowerCase();
            // OR logic: return true if cell value matches any selected filter value
            return filterValue.some((val) => String(val).toLowerCase() === cellValue);
          },
        };
      }

      // For other columns, use multi-select if unique values are between 1 and 50
      if (uniqueValues.length > 0 && uniqueValues.length <= 50) {
        return {
          accessorKey: k,
          header: k,
          filterVariant: "multi-select",
          filterSelectOptions: uniqueValues,
        };
      }

      // Use text filter for other columns
      return {
        accessorKey: k,
        header: k,
        filterVariant: "text",
      };
    });
  }, [tableData]);

  return (
    <div style={{ padding: "1rem" }}>
      <h3>Ortalama Statü Geçiş Süreleri</h3>
      <MaterialReactTable
        columns={columns}
        data={tableData}
        localization={MRT_Localization_TR} // Turkish localization
        enableColumnFilters
        enableGlobalFilter
        enableSorting
        enableColumnOrdering
        enableColumnResizing
        enableRowVirtualization
        enableHiding
        enableDensityToggle
        enablePagination
        enableStickyHeader
        muiTableContainerProps={{ sx: { maxHeight: "calc(100vh - 250px)" } }}
        muiTableBodyRowProps={({ row }) => ({
          onClick: () => handleRowClick(row),
          sx: {
            cursor: "pointer",
            backgroundColor: selectedRowId === row.id ? "rgba(25, 118, 210, 0.12)" : "transparent",
            "&:hover": {
              backgroundColor: selectedRowId === row.id ? "rgba(25, 118, 210, 0.2)" : "rgba(0, 0, 0, 0.04)",
            },
          },
        })}
        initialState={{
          density: "compact",
          pagination: { pageIndex: 0, pageSize: 50 },
          showColumnFilters: true,
          columnVisibility: defaultColumnVisibility,
        }}
        renderTopToolbarCustomActions={({ table }) => {
          const rows = table
            .getPrePaginationRowModel()
            .rows.map((r) => r.original);
          const visibleCols = table
            .getAllLeafColumns()
            .filter((c) => c.getIsVisible())
            .map((c) => ({
              accessorKey: c.id,
              header: c.columnDef.header ?? c.id,
            }));
          const allCols = table.getAllLeafColumns().map((c) => ({
            accessorKey: c.id,
            header: c.columnDef.header ?? c.id,
          }));
          return (
            <Stack direction="row" spacing={1}>
              <Button
                variant="outlined"
                size="small"
                onClick={() =>
                  downloadCsv(
                    rows,
                    visibleCols,
                    `${selectedGroup}-gorunen.csv`
                  )
                }
              >
                CSV (Görünen Kolonlar)
              </Button>
              <Button
                variant="outlined"
                size="small"
                onClick={() =>
                  downloadCsv(
                    rows,
                    allCols,
                    `${selectedGroup}-tum.csv`
                  )
                }
              >
                CSV (Tüm Kolonlar)
              </Button>
            </Stack>
          );
        }}
      />
    </div>
  );
}*/



export   function ExcelIndirButton() {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    fetch("/statugecis.json")
      .then((r) => r.json())
      .then((data) => setRows(data))
      .catch((err) => console.error("Veri alınamadı:", err));
  }, []);

  const handleDownload = () => {
    if (!rows.length) return;

    const HEADERS = [
      "İSLETME",
      "İş Emri Tipi",
      "OLUSMA_ATAMA",
      "ATAMA_USTLENME",
      "USTLENME_YOLACIKMA",
      "USTLENME_ULASMA",
      "ULASMA_BASLAMA",
      "BASLAMA_TAMAMLAMA",
      "T. İŞ EMRİ"
    ];

    // Header sırası garantili AOA yapısı
    const aoa = [HEADERS, ...rows.map((r) => HEADERS.map((h) => r[h]))];

    const ws = XLSX.utils.aoa_to_sheet(aoa);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Statü Geçiş");

    XLSX.writeFile(wb, "statu_gecis.xlsx");
  };

  return (
    <button
      onClick={handleDownload}
      style={{
        padding: "10px 16px",
        borderRadius: 8,
        border: "1px solid #ccc",
        cursor: "pointer"
      }}
    >
      Bölge/Ekip/İşletme Statü Geçişlerini İndir
    </button>
  );
}