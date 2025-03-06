import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Button, Typography } from '@mui/material';

/** Excel serial date => JS Date çevirimi (1900 epoch).
 *  Tarih + saat Excel'de sayısal (örneğin 44625.5) olabilir.
 */
function convertExcelDateNumber(excelSerial) {
  const startDate = new Date(Date.UTC(1899, 11, 30));
  const result = new Date(startDate.getTime() + excelSerial * 86400000);

  let gun = result.getDate();
  let ay = result.getMonth() + 1;
  let yil = result.getFullYear();
  let saat = result.getHours();
  let dakika = result.getMinutes();

  if (gun < 10) gun = '0' + gun;
  if (ay < 10) ay = '0' + ay;
  if (saat < 10) saat = '0' + saat;
  if (dakika < 10) dakika = '0' + dakika;

  return `${gun}/${ay}/${yil} ${saat}:${dakika}`;
}

function convertExcelDateString(dateStr) {
  const parsed = Date.parse(dateStr);
  if (!isNaN(parsed)) {
    const result = new Date(parsed);
    let gun = result.getDate();
    let ay = result.getMonth() + 1;
    let yil = result.getFullYear();
    let saat = result.getHours();
    let dakika = result.getMinutes();

    if (gun < 10) gun = '0' + gun;
    if (ay < 10) ay = '0' + ay;
    if (saat < 10) saat = '0' + saat;
    if (dakika < 10) dakika = '0' + dakika;

    return `${gun}/${ay}/${yil} ${saat}:${dakika}`;
  }
  return dateStr;
}

const DataTable = ({
  data = [],
  columns = [],
  selectedColumns = [],
  dateColumns = [],
  İşletmeName = "",
  HangiTablo = "",
  handleExport = () => {},
  Height_Props = 600
}) => {
  if (!data || data.length === 0) {
    return <Typography variant="subtitle1">EMREE Henüz veri yok.</Typography>;
  }

  const rows = data.map((row, index) => ({ id: index, ...row }));

  const allColumns = columns.map((col) => {
    const isDateCol = dateColumns.includes(col);

    return {
      field: col,
      headerName: col,
      flex: 1,
      headerClassName: 'small-header',
      renderCell: (params) => {
        const cellValue = params.value;
        if (isDateCol && cellValue !== undefined && cellValue !== null) {
          if (typeof cellValue === 'number') {
            return convertExcelDateNumber(cellValue);
          } else if (typeof cellValue === 'string' && cellValue.trim() !== '') {
            return convertExcelDateString(cellValue);
          }
        }
        return <span style={{ fontSize: '12px' }}>{cellValue}</span>;
      }
    };
  });

  const displayedColumns = 
    selectedColumns.length > 0
      ? allColumns.filter((colDef) => selectedColumns.includes(colDef.field))
      : allColumns;

  const [selectedRowIds, setSelectedRowIds] = useState([]);

  return (
    <div
      style={{
        height: Height_Props,
        width: '100%',
        background: 'white',
        borderRadius: '20px',
        marginBottom: '50px'
      }}
    >
      <div style={{ color: 'black', textAlign: 'center', fontWeight: 'bold', fontSize: '14px' }}>
        {İşletmeName} {HangiTablo}
      </div>

      <div style={{ textAlign: 'center' }}>
        <Button variant="contained" color="primary" onClick={handleExport} style={{ fontSize: '12px' }}>
          Tabloyu Excel'e Aktar
        </Button>
      </div>

      <DataGrid
        rows={rows}
        columns={displayedColumns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        onRowSelectionModelChange={(newSelection) => {
          setSelectedRowIds(newSelection);
        }}
        sx={{
          boxShadow: 2,
          border: 2,
          '& .MuiTablePagination-root': {
            backgroundColor: 'white',
          },
          '& .MuiDataGrid-cell': {
            fontSize: '12px',
            '&.MuiDataGrid-cell--textCenter': {
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            },
          },
          '& .MuiDataGrid-columnHeaders': {
            fontSize: '12px',
          },
        }}
      />
    </div>
  );
};

export default DataTable;
