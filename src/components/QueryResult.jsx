import React, { useEffect, useState } from 'react';
import alasql from 'alasql';

const QueryResult = ({ excelData, groupByColumn }) => {
  const [queryResult, setQueryResult] = useState([]);

  useEffect(() => {
    if (!excelData || excelData.length === 0 || !groupByColumn) {
      return;
    }

    try {
      // AlaSQL ile GROUP BY işlemi
      const query = `
        SELECT [${groupByColumn}], COUNT(*) as adet
        FROM ?
        GROUP BY [${groupByColumn}]
      `;
      const result = alasql(query, [excelData]);
      setQueryResult(result);

      console.log('Gruplanmış Sonuç:', result);
    } catch (error) {
      console.error('AlaSQL Sorgu Hatası:', error);
    }
  }, [excelData, groupByColumn]);

  if (!queryResult || queryResult.length === 0) {
    return <div>Henüz sorgu sonucu yok.</div>;
  }

  // Sütun başlıklarını belirleme
  const columns = Object.keys(queryResult[0]);

  return (
    <div style={{ marginTop: '1rem' }}>
      <h3>Sorgu Sonuçları (Group By {groupByColumn})</h3>
      <table style={{ borderCollapse: 'collapse', width: '100%' }}>
        <thead>
          <tr>
            {columns.map((col) => (
              <th key={col} style={{ border: '1px solid #ccc', padding: '8px' }}>
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {queryResult.map((row, idx) => (
            <tr key={idx}>
              {columns.map((col) => (
                <td key={col} style={{ border: '1px solid #ccc', padding: '8px' }}>
                  {row[col]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default QueryResult;
