// import React, { useEffect } from 'react';
// import {
//   Table, TableHead, TableBody, TableRow, TableCell,
//   TableContainer, Paper, Typography
// } from '@mui/material';

// const DataTable = ({ data, columns, selectedColumns }) => {
//   if (!data || data.length === 0) {
//     return ;
//   }

//   // Sadece ilk 20 satırı göstermek için
//   const previewData = data.slice(0, 20);

//   // Kullanıcının seçtiği kolonlardaki verileri console'a yazdır
//   useEffect(() => {
//     if (selectedColumns && selectedColumns.length > 0) {
//       const selectedData = previewData.map(row => {
//         let selectedRow = {};
//         selectedColumns.forEach(col => {
//           selectedRow[col] = row[col];
//         });
//         return selectedRow;
//       });
//     //  console.log("Seçilen Veriler:", selectedData);
//     }
//   }, [selectedColumns, previewData]);

//   return (
//     <TableContainer
//       component={Paper}
//       sx={{
//         maxHeight: 400,
//         maxWidth: '50%',
//         overflow: 'auto'
//       }}
//     >
//       <Table stickyHeader aria-label="excel data table">
//         <TableHead>
//           <TableRow>
//             {columns.map((col) => (
//               <TableCell key={col}>{col}</TableCell>
//             ))}
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {previewData.map((row, rowIndex) => (
//             <TableRow key={rowIndex}>
//               {columns.map((col) => (
//                 <TableCell key={col}>
//                   {row[col]}
//                 </TableCell>
//               ))}
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// };

// export default DataTable;
