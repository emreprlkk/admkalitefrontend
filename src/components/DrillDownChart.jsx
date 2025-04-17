import React, { useState, useEffect, useRef } from 'react';
import ReactApexChart from 'react-apexcharts';
import { 
  Modal, 
  Box, 
  Typography, 
  Button, 
  Grid, 
  Paper 
} from '@mui/material';
  import ButundenOzele23 from './ButundenOzele23.json'
import { CleanHands } from '@mui/icons-material';
// Örnek veri yapısı
const generateMockData = () => {
  // Yıllık veriler
  const years = [2020, 2021, 2022, 2023, 2024];
  const yearlyData = years.map(year => ({
    year,
    value: Math.floor(Math.random() * 1000) + 500,
    months: []
  }));

  // Her yıl için aylar
  const months = [
    'Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 
    'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'
  ];
  
  yearlyData.forEach(yearData => {
    // Her ay için 3 kategori verisi
    months.forEach((month, monthIndex) => {
      const categories = ['AYDIN', 'DENİZLİ', 'MUĞLA'];
      const categoryData = categories.map(category => ({
        name: category,
        value: Math.floor(Math.random() * 200) + 50,
        detailedData: []
      }));
      
      // Her kategori için 10 adet detaylı veri
      categoryData.forEach(category => {
        for (let i = 1; i <= 10; i++) {
          category.detailedData.push({
            id: i,
            value: Math.floor(Math.random() * 50) + 10,
            // Modal için detaylı veriler
            detailChartData: {
              radar: {
                series: [
                  {
                    name: 'Seri 1',
                    data: [Math.random() * 80 + 20, Math.random() * 80 + 20, Math.random() * 80 + 20, 
                           Math.random() * 80 + 20, Math.random() * 80 + 20, Math.random() * 80 + 20]
                  },
                  {
                    name: 'Seri 2',
                    data: [Math.random() * 80 + 20, Math.random() * 80 + 20, Math.random() * 80 + 20, 
                           Math.random() * 80 + 20, Math.random() * 80 + 20, Math.random() * 80 + 20]
                  }
                ]
              },
              bar: {
                series: [
                  {
                    name: 'Gelir',
                    data: [Math.random() * 1000 + 500, Math.random() * 1000 + 500, Math.random() * 1000 + 500, 
                           Math.random() * 1000 + 500, Math.random() * 1000 + 500]
                  },
                  {
                    name: 'Gider',
                    data: [Math.random() * 800 + 200, Math.random() * 800 + 200, Math.random() * 800 + 200, 
                           Math.random() * 800 + 200, Math.random() * 800 + 200]
                  }
                ]
              },
              line1: {
                series: [
                  {
                    name: 'Trend 1',
                    data: Array.from({ length: 12 }, () => Math.floor(Math.random() * 100) + 50)
                  }
                ]
              },
              line2: {
                series: [
                  {
                    name: 'Trend A',
                    data: Array.from({ length: 8 }, () => Math.floor(Math.random() * 100) + 20)
                  },
                  {
                    name: 'Trend B',
                    data: Array.from({ length: 8 }, () => Math.floor(Math.random() * 100) + 20)
                  }
                ]
              }
            }
          });
        }
      });
      
      yearData.months.push({
        name: month,
        index: monthIndex,
        categories: categoryData
      });
    });
  });
  
  
  return yearlyData;
};

const DrillDownChart = () => {
  const [data, setData] = useState([]);
  const [dataYearsSaidi,SetdataYearsSaidi]=useState([])
  const [loading, setLoading] = useState(true);
  const [currentView, setCurrentView] = useState('years');
  const [selectedYear, setSelectedYear] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedDetail, setSelectedDetail] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [chartType, setChartType] = useState('bar');
  const [showPercentageChange, setShowPercentageChange] = useState(false);


  
  // Sayfa konumunu takip etmek için ref oluşturuyoruz
  const containerRef = useRef(null);
  // Scroll pozisyonunu kaydetmek için state
  const [scrollPositions, setScrollPositions] = useState({
    years: 0,
    months: 0,
    details: 0
  });
  
  useEffect(() => {
    // Gerçek uygulamada burada API çağrısı yapacaktınız
   //const mockData = generateMockData();
    //setData(mockData);
    SetdataYearsSaidi(ButundenOzele23)
    setLoading(false);
  }, []);
  
  // View değiştiğinde scroll pozisyonunu korumak için
  useEffect(() => {
    // Mevcut scroll pozisyonunu kaydet
    if (containerRef.current) {
      const currentPosition = window.scrollY;
      
      // Önceki görünümün scroll pozisyonunu güncelle
      setScrollPositions(prev => ({
        ...prev,
        [currentView]: currentPosition
      }));
    }
  }, [currentView]);
  
//type değerini butonla değiştirecek handler:
  const toggleChartType = () => {
    setChartType(prevType => prevType === 'bar' ? 'line' : 'bar');
  };
  
  const handleYearClick = (year) => {
    // Mevcut scroll pozisyonunu kaydet
    const currentPosition = window.scrollY;
    setScrollPositions(prev => ({
      ...prev,
      years: currentPosition
    }));
    
    setSelectedYear(year);
    setCurrentView('months');
    console.log("geçti")
    // Sayfanın yukarı kaymasını engellemek için setTimeout kullanarak
    // DOM güncellemesi tamamlandıktan sonra scroll pozisyonunu ayarlıyoruz
    setTimeout(() => {
      window.scrollTo({
        top: scrollPositions.months || currentPosition,
        behavior: 'auto' // 'smooth' yerine 'auto' kullanarak anlık geçiş yapıyoruz
      });
    }, 0);
  };
  
  const handleMonthCategoryClick = (month, category) => {
    // Mevcut scroll pozisyonunu kaydet
    const currentPosition = window.scrollY;
    setScrollPositions(prev => ({
      ...prev,
      months: currentPosition
    }));
    
    setSelectedMonth(month);
    setSelectedCategory(category);
    setCurrentView('details');
    
    setTimeout(() => {
      window.scrollTo({
        top: scrollPositions.details || currentPosition,
        behavior: 'auto'
      });
    }, 0);
  };
  
  const handleDetailClick = (detailData) => {
    setSelectedDetail(detailData);
    setModalOpen(true);
  };
  
  const handleBackToYears = (e) => {
    e.preventDefault(); // Varsayılan davranışı engelle
    
    // Mevcut scroll pozisyonunu kaydet
    const currentPosition = window.scrollY;
    setScrollPositions(prev => ({
      ...prev,
      [currentView]: currentPosition
    }));
    
    setSelectedYear(null);
    setSelectedMonth(null);
    setSelectedCategory(null);
    setCurrentView('years');
    
    setTimeout(() => {
      window.scrollTo({
        top: scrollPositions.years,
        behavior: 'auto'
      });
    }, 0);
  };
  
  const handleBackToMonths = (e) => {
    e.preventDefault(); // Varsayılan davranışı engelle
    
    // Mevcut scroll pozisyonunu kaydet
    const currentPosition = window.scrollY;
    setScrollPositions(prev => ({
      ...prev,
      details: currentPosition
    }));
    
    setSelectedMonth(null);
    setSelectedCategory(null);
    setCurrentView('months');
    
    setTimeout(() => {
      window.scrollTo({
        top: scrollPositions.months,
        behavior: 'auto'
      });
    }, 0);
  };
  
  const handleCloseModal = () => {
    setModalOpen(false);
  };
  
  // Yıllık veri grafiği
  const renderYearlyChart = () => {
    const options = {
      chart: {
        type: 'bar',
        height: 50,
        events: {
          dataPointSelection: (event, chartContext, config) => {
            const yearIndex = config.dataPointIndex;
            const year = dataYearsSaidi[yearIndex].year;
            handleYearClick(year);
          }
        }
      },
      plotOptions: {
        bar: {
          borderRadius: 4,
          horizontal: false,
            columnWidth: '20%'
        }
      },
      dataLabels: {
        enabled: true
      },
      title: {
        text: 'ADM EDAŞ - Yıllara Göre SAİDİ Verileri',
        align: 'center'
      },
      xaxis: {
        categories: dataYearsSaidi.map(item => item.year.toString()),
        title: {
          text: 'YIL'
        }
      },
      yaxis: {
        title: {
          text: 'SAİDİ DEĞERLERİ DAKİKA '
        }
      },
      tooltip: {
        y: {
          formatter: (val) => `${val} DAKİKA`
        }
      }
    };
    
    const series = [{
      name: 'Yıllık Değer',
      data: dataYearsSaidi.map(item => item.value)
    }];
    
    return (
      <div className="chart-container">
        <ReactApexChart 
          options={options} 
          series={series} 
          type="bar" 
          height={450} 
        />
        <div className="chart-instructions text-center mt-4">
          <p>Aylık detaylı verileri görmek için bir yıla tıklayın</p>
        </div>
      </div>
    );
  };
  
  // Aylık kategori grafiği (Her ay için 4 kategori)
  const renderMonthlyChart = () => {
    if (!selectedYear) return null;
    
    const yearData = dataYearsSaidi.find(item => item.year === selectedYear);
    if (!yearData) return null;
    
    // Aylar ve kategoriler için veriyi hazırla
    const categories = [...new Set(yearData.monts.map(cat => cat.mont))]; //map fonksiyonundaki month geçici bir değişken adıdır burada. xx bile yazabilrisn.
    
    // 3 kategori için seriler oluştur
    const series = [];
    let categoryNames=[];
    // Her ay için kategorileri bul ve seri oluştur
    if (yearData.monts.length > 0 && yearData.monts[0].bolge_name) {
       // Benzersiz kategori isimlerini çıkar
   categoryNames = [...new Set(yearData.monts.map(cat => cat.bolge_name))];
      console.log(categoryNames)
     

      // Benzersiz ay isimlerini sırayla çıkar (grafikte x ekseni)
const monthNames = [...new Set(yearData.monts.map(item => item.mont))];
//console.log("Aylar:", monthNames);


categoryNames.forEach((catName) => {
  const catData = monthNames.map((month) => {
    const found = yearData.monts.find(
      item => item.mont === month && item.bolge_name === catName
    );
    return found ? found.bolge_saidi : 0;
  });

  series.push({
    name: catName,
    data: catData
  });
  });
}
const percentageChangeMap = {};

series.forEach(serie => {
  percentageChangeMap[serie.name] = serie.data.map((val, idx) => {
    if (idx === 0) return null;
    const prev = serie.data[idx - 1];
    if (prev === 0) return null;
    const change = ((val - prev) / prev) * 100;
    return `${change >= 0 ? '+' : ''}${change.toFixed(1)}%`;
  });
});

//console.log(series);
const options = {
  chart: {
    type: chartType,
    height: 250,
   
    stacked: false,
    events: {
      dataPointSelection: (event, chartContext, config) => {
        const monthIndex = config.dataPointIndex;
        const categoryIndex = config.seriesIndex;
        console.log(monthIndex)
        console.log(categoryIndex)
        const month = yearData.monts?.[monthIndex];
     console.log("month prlk ",month)
        const category = yearData.monts?.find(
          item => item.mont === month?.mont && item.bolge_name === categoryNames?.[categoryIndex]
        );
          console.log("category" , category)
        if (month && category) {
          handleMonthCategoryClick(month, category);
        }
      }
    }
  },

  // Sadece 'line' tipi için stroke ayarı yap
  stroke: chartType === 'line' ? {
    curve: 'smooth',
    width: 3
  } : {
    width: 0
  },

  // Line için markerlar, bar için görünmesin
  markers: chartType === 'line'
    ? {
        size: 5,
        colors: ['#fff'],
        strokeColors: '#000',
        strokeWidth: 2,
        hover: {
          size: 7
        }
      }
    : {
        size: 0
      },

  // plotOptions bar tipi içindi, line varsa hataya düşmemesi için koşula aldık
  plotOptions: chartType === 'bar' ? {
    bar: {
      horizontal: false,
      columnWidth: '50%'
    }
  } : {},

  dataLabels: {
    enabled: true,
    position: 'top', // Barın tepesinde göster
    offsetY: -12,    // Yukarı taşı (eksi: yukarı, artı: aşağı)
    style: {
      fontSize: '10px',
      fontWeight: 'bold',
      colors: ['#000']
    },
    formatter: function (val, opts) {
      const seriesName = opts.w.globals.seriesNames[opts.seriesIndex];
      const dataIndex = opts.dataPointIndex;
  
      if (!showPercentageChange) return val.toFixed(1);
  
      const percent = percentageChangeMap[seriesName]?.[dataIndex];
      if (!percent) return val.toFixed(1);
  
      const numeric = parseFloat(percent.replace('%', ''));
      const icon = numeric > 0 ? '⬆️' : numeric < 0 ? '⬇️' : '➡️';
  
      return `${val.toFixed(1)}\n${icon}\n${percent}`;
    }
  },
  
  
  

  title: {
    text: `${selectedYear} Yılı Bölgelere Göre - Aylık SAİDİ Verileri`,
    align: 'center'
  },

  xaxis: {
  
    categories,
    title: {
      text: 'Ay'
    }
  },

  yaxis: {
    title: {
      text: 'SAİDİ DEĞERİ (DAKİKA)'
    }
  },
  tooltip: {
    shared: true,
    intersect: false,
    y: {
      formatter: (val) => `${val} SAİDİ (DK)`
    }
  },
  

  legend: {
    position: 'top'
  },

  colors: ['orange', 'green', 'blue', 'pink', 'red']
};


    
    return (
      <div className="chart-container">
        <div className="navigation-controls mb-4">
          <button 
            className="btn btn-sm btn-outline-secondary" 
            onClick={handleBackToYears}
          >
            <div className="mb-3 text-center">
 
</div>
 
            &larr; Yıllara Geri Dön
          </button>
          <button 
    className="btn btn-sm btn-primary"
    onClick={toggleChartType}
  >
    {chartType === 'bar' ? 'Bar' : 'Line'} ➡️{chartType === 'bar' ? 'Line' : 'Bar'} Convert
  </button>
        </div>

        <button
  className="btn btn-sm btn-warning ms-2"
  onClick={() => setShowPercentageChange(prev => !prev)}
>
  {showPercentageChange ? "Değeri Gizle" : "Önceki Aya Göre % Değişim"}
</button>


        <ReactApexChart 
          options={options} 
          series={series} 
          
          height={450} 
          type={chartType} 
        />



        <div className="chart-instructions text-center mt-4">
          <p>Detaylı kategori verilerini görmek için bir ay ve bölge seçin</p>
        </div>
      </div>
    );
  };
  
  // Detaylı veri grafiği (10 değer)
// Detaylı veri grafiği (10 değer)
const renderDetailedChart = () => {
  if (!selectedYear || !selectedMonth || !selectedCategory) return null;

  const yearData = dataYearsSaidi.find(item => item.year === selectedYear);
  if (!yearData) return null;
console.log("selectedCategory ",selectedCategory)
console.log("selectedMonth ",selectedMonth)
  // Ay + Bölge eşleştirmesi
  const monthData = yearData.monts.find(
    m =>
      m.mont === selectedMonth.mont &&
      m.bolge_name === selectedCategory.bolge_name
  );
  if (!monthData || !monthData.isletmeler) return null;

  // İşletmelerden bar chart verisi üret
  const series = [{
    name: 'Saidi',
    data: monthData.isletmeler.map(item => item.isletme_Saidi)
  }];

  const options = {
    chart: { type: 'bar', height: 350 },
    title: {
      text: `${selectedYear} ${selectedMonth.mont} - ${selectedCategory.bolge_name} İşletme Saidi`,
      align: 'center'
    },
    xaxis: {
      categories: monthData.isletmeler.map(item => item.isletme),
      title: { text: 'İşletme' }
    },
    yaxis: {
      title: { text: 'Saidi (Dakika)' }
    },
    plotOptions: {
      bar: { borderRadius: 4, horizontal: true, distributed: true }
    },
    dataLabels: { enabled: true }
  };

  return (
    <div className="chart-container">
      <div className="navigation-controls mb-4">
        <button className="btn btn-sm btn-outline-secondary me-2" onClick={handleBackToYears}>
          &larr; Yıllara Geri Dön
        </button>
        <button className="btn btn-sm btn-outline-secondary" onClick={handleBackToMonths}>
          &larr; Aylara Geri Dön
        </button>
      </div>
      <ReactApexChart options={options} series={series} type="bar" height={350} />
    </div>
  );
};


  
  // Modal içerisindeki grafikler
  const renderDetailModal = () => {
    if (!selectedDetail) return null;
    
    const { detailChartData } = selectedDetail;
    
    // Radar Grafik
    const radarOptions = {
      chart: {
        height: 250,
        type: 'radar',
      },
      title: {
        text: 'KAYNAĞA GÖRE SAİDİ Analizi',
        align: 'center',
        style: {
          fontSize: '16px'
        }
      },
      xaxis: {
        categories: ['Kategori A', 'Kategori B', 'Kategori C', 'Kategori D', 'Kategori E', 'Kategori F']
      },
      fill: {
        opacity: 0.7
      },
      stroke: {
        width: 2
      }
    };
    
    // Bar Grafik
    const barOptions = {
      chart: {
        type: 'bar',
        height: 250,
        stacked: false
      },
      title: {
        text: 'İLÇELERE GÖRE SAİDİ Analizi',
        align: 'center',
        style: {
          fontSize: '16px'
        }
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '55%',
        },
      },
      xaxis: {
        categories: ['Grup 1', 'Grup 2', 'Grup 3', 'Grup 4', 'Grup 5'],
      },
      fill: {
        opacity: 1
      },
      legend: {
        position: 'top',
        horizontalAlign: 'left',
      }
    };
    
    // Line Grafik 1
    const line1Options = {
      chart: {
        height: 250,
        type: 'line',
        zoom: {
          enabled: false
        }
      },
      title: {
        text: 'İlçenin Mahallalerinin Saidi Analizi',
        align: 'center',
        style: {
          fontSize: '16px'
        }
      },
      stroke: {
        curve: 'smooth',
        width: 3
      },
      markers: {
        size: 4
      },
      xaxis: {
        categories: ['Oca', 'Şub', 'Mar', 'Nis', 'May', 'Haz', 'Tem', 'Ağu', 'Eyl', 'Eki', 'Kas', 'Ara'],
      }
    };
    
    // Line Grafik 2
    const line2Options = {
      chart: {
        height: 250,
        type: 'line',
        zoom: {
          enabled: false
        }
      },
      title: {
        text: 'Geçen Ay Mahalle Saidi Analiz',
        align: 'center',
        style: {
          fontSize: '16px'
        }
      },
      stroke: {
        curve: 'straight',
        width: [3, 3]
      },
      markers: {
        size: 4
      },
      xaxis: {
        categories: ['Hafta 1', 'Hafta 2', 'Hafta 3', 'Hafta 4', 'Hafta 5', 'Hafta 6', 'Hafta 7', 'Hafta 8'],
      },
      colors: ['#008FFB', '#FF4560']
    };
    
    return (
      <Modal
        open={modalOpen}
        onClose={handleCloseModal}
        aria-labelledby="detail-modal-title"
        aria-describedby="detail-modal-description"
      >
        <Box sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '90%',
          maxWidth: 2000,
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
          maxHeight: '90vh',
          overflow: 'auto'
        }}>
          <Typography id="detail-modal-title" variant="h9" component="h2" gutterBottom>
           İşletme İçin Detaylı Analiz
          </Typography>
          
          <Grid container spacing={2}>
            {/* Radar Grafik */}
            <Grid item xs={12} md={6}>
              <Paper elevation={3} sx={{ p: 2 }}>
                <ReactApexChart
                  options={radarOptions}
                  series={detailChartData.radar.series}
                  type="radar"
                  height={350}
                />
              </Paper>
            </Grid>
            
            {/* Bar Grafik */}
            <Grid item xs={12} md={6}>
              <Paper elevation={3} sx={{ p: 2 }}>
                <ReactApexChart
                  options={barOptions}
                  series={detailChartData.bar.series}
                  type="bar"
                  height={350}
                />
              </Paper>
            </Grid>
            
            {/* Line Grafik 1 */}
            <Grid item xs={12} md={6}>
              <Paper elevation={3} sx={{ p: 2 }}>
                <ReactApexChart
                  options={line1Options}
                  series={detailChartData.line1.series}
                  type="bar"
                  height={450}
                />
              </Paper>
            </Grid>
            
            {/* Line Grafik 2 */}
            <Grid item xs={12} md={6}>
              <Paper elevation={3} sx={{ p: 2 }}>
                <ReactApexChart
                  options={line2Options}
                  series={detailChartData.line2.series}
                  type="bar"
                  height={450}
                />
              </Paper>
            </Grid>
          </Grid>
          
          <Box sx={{ mt: 3, textAlign: 'right' }}>
            <Button onClick={handleCloseModal} variant="contained">
              Kapat
            </Button>
          </Box>
        </Box>
      </Modal>
    );
  };
  
  if (loading) {
    return <div>Veriler yükleniyor...</div>;
  }
  
  return (
    <div className="nested-charts-container p-4" ref={containerRef}>
      {currentView === 'years' && renderYearlyChart()}
      {currentView === 'months' && renderMonthlyChart()}
      {currentView === 'details' && renderDetailedChart()}
      {renderDetailModal()}
    </div>
  );
};

export default DrillDownChart; 