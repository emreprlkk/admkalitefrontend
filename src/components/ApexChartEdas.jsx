import React, { useState, useEffect, useCallback, useMemo } from 'react';
import Chart from 'react-apexcharts';
import '../App.css';

const ApexChartsEdas = ({
  edaslarSaidiOrSaifi,
  chartId,
  width = '100%',
  title = 'Grafik',
  Y_axis = 'SAİDİ DEĞERİ (DAKİKA)',
  X_axis = [
    'Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran',
    'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'
  ],
  type          // 'saidi' | 'saifi'
}) => {

  /** ───────────── 1.  TOPLAM’ı gösterip göstermeme anahtarı ───────────── */
  const [showTotals, setShowTotals] = useState(false);
  
  const toggleTotals = useCallback(() => setShowTotals(prev => !prev), []);
  

  /** ───────────── 2.  Dinamik kategoriler ───────────── */
  const categories = useMemo(
    () => (showTotals ? [...X_axis, 'TOPLAM'] : X_axis),
    [showTotals, X_axis]
  );

  const colors21 = [
    '#ff7f0e','#ffc93c',
    '#1f77b4', '#393b79', '#2ca02c', '#d62728', '#9467bd',
    '#8c564b', '#e377c2', '#7f7f7f', '#bcbd22', '#17becf',
     '#637939',  '#843c39', '#7b4173',
    '#3182bd', '#31a354', '#756bb1', '#636363', '#e6550d',
    '#969696'
  ];
  
  /* 3. SERIES DİZİSİ – aynı ama renkler otomatik atanacağı için ek kod gerekmez */
  const seriesData = useMemo(
    () =>
      Object.entries(edaslarSaidiOrSaifi).map(([company, values], idx) => ({
        name: company,
        data: showTotals
          ? Object.values(values)                  // 13 eleman
          : Object.values(values).slice(0, 12),   // 12 eleman
        group: '2025',                            // grouped-stacked
        color: colors21[idx]                      // her seriye benzersiz renk
      })),

      
    [edaslarSaidiOrSaifi, showTotals]
  );
  
  /* 4. CHART OPTIONS */
  const chartOptions = useMemo(() => ({
    chart: {
      id: chartId,
      type: 'bar',
      stacked: true,
      stackType: 'normal',
      height: 600,            // bar’ların “daha uzun” görünmesi için
      toolbar: { show: true },
      /* Renk paletini global tanımlamak isterseniz: */
      // foreColor: '#000',
    },
    title: { text: title, align: "center" },
    colors: colors21,          // 21’lik özel palet
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '70%',     // %60 → %70 : bar kalınlaştı
        endingShape: 'rounded'
      }
    },
    legend: {
      position: 'bottom',
      horizontalAlign: 'center',
      itemMargin: { horizontal: 8 },
      scrollbarHeight: 40       // çok uzun legend listesine scroll ekler
    },
    xaxis: {
      categories,
      title: { text: 'AYLAR' },
      labels: { style: { fontWeight: 'bold' } }
    },
    yaxis: {
      title: { text: type === 'saidi' ? Y_axis : 'SAİFİ DEĞERİ' },
      labels: {
        style: { fontWeight: 'bold', fontSize: '14px' },
        formatter: v => v.toFixed(3)
      }
    },
    tooltip: { shared: false, intersect: true },
  }), [categories, chartId, type]);

  /** ───────────── 5.  Bileşen çıktısı ───────────── */
  return (
    <div className="chart" style={{ position: 'relative' }}>
      <button
        onClick={toggleTotals}
        style={{
          position: 'absolute',
          top: '4px',
          right: '4px',
          background: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          padding: '4px 8px',
          cursor: 'pointer',
          zIndex: 10
        }}
      >
        {showTotals ? 'TOPLAM Gizle' : 'TOPLAM Göster'}
      </button>

     

      <Chart
        options={chartOptions}
        series={seriesData}
        type="bar"
        width={width}
        height="900px"
      />
    </div>
  );
};

export default React.memo(ApexChartsEdas);
