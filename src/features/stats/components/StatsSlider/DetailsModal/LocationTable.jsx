import React, { useMemo } from 'react';
import { formatStatValue } from '../../../utils/number';

function generateTableData(statTitle) {
  return [
    { id: 1, location: 'İstanbul Merkez', value: Math.floor(Math.random() * 1000) + 500, percentage: (Math.random() * 50 + 50).toFixed(1), status: 'Aktif' },
    { id: 2, location: 'Ankara Şube',   value: Math.floor(Math.random() * 800) + 300, percentage: (Math.random() * 40 + 30).toFixed(1), status: 'Aktif' },
    { id: 3, location: 'İzmir Şube',    value: Math.floor(Math.random() * 600) + 200, percentage: (Math.random() * 35 + 25).toFixed(1), status: 'Beklemede' },
    { id: 4, location: 'Bursa Şube',    value: Math.floor(Math.random() * 400) + 150, percentage: (Math.random() * 30 + 20).toFixed(1), status: 'Aktif' },
    { id: 5, location: 'Antalya Şube',  value: Math.floor(Math.random() * 300) + 100, percentage: (Math.random() * 25 + 15).toFixed(1), status: 'Pasif' }
  ];
}

export default function LocationTable({ stat }) {
  const rows = useMemo(() => generateTableData(stat.title || stat.statTitle), [stat]);

  return (
    <div className="overflow-x-auto">
      <table className="table table-zebra w-full">
        <thead>
          <tr>
            <th>Lokasyon</th>
            <th>Değer</th>
            <th>Yüzde</th>
            <th>Durum</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.id}>
              <td className="font-medium">{row.location}</td>
              <td className="text-indigo-600 font-bold">{formatStatValue(row.value)}</td>
              <td>
                <div className="flex items-center space-x-2">
                  <span>{row.percentage}%</span>
                  <div className="w-16 bg-gray-200 rounded-full h-2">
                    <div className="bg-indigo-600 h-2 rounded-full" style={{ width: `${row.percentage}%` }} />
                  </div>
                </div>
              </td>
              <td>
                <span
                  className={`px-3 py-1 text-xs font-medium rounded-full ${
                    row.status === 'Aktif'
                      ? 'bg-green-100 text-green-800'
                      : row.status === 'Beklemede'
                      ? 'bg-yellow-100 text-yellow-800'
                      : 'bg-red-100 text-red-800'
                  }`}
                >
                  {row.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
