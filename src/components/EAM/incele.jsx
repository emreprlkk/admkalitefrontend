import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, TrendingUp, TrendingDown, Minus, X, MapPin } from 'lucide-react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Webpack/Vite ikon yolu düzeltmesi:
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});
const StatsSlider = ({ stats = [] }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedStat, setSelectedStat] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [mapInitialized, setMapInitialized] = useState(false);
  
  // Stats'ları 4'lü gruplara böl
  const groupedStats = [];
  for (let i = 0; i < stats.length; i += 4) {
    groupedStats.push(stats.slice(i, i + 4));
  }
  
  const totalSlides = groupedStats.length;
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };
  
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const openModal = (stat) => {
    setSelectedStat(stat);
    setModalOpen(true);
    setMapInitialized(false);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedStat(null);
    setMapInitialized(false);
  };

  // Leaflet haritası için
  useEffect(() => {
    if (modalOpen && selectedStat && !mapInitialized) {
      const timer = setTimeout(() => {
        initializeMap();
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [modalOpen, selectedStat, mapInitialized]);

  const initializeMap = () => {
    if (typeof window !== 'undefined' && window.L && !mapInitialized) {
      const mapContainer = document.getElementById('leaflet-map');
      if (mapContainer && mapContainer._leaflet_id) {
        mapContainer._leaflet_id = null;
        mapContainer.innerHTML = '';
      }

      const map = window.L.map('leaflet-map').setView([41.0082, 28.9784], 10); // İstanbul koordinatları

      window.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
      }).addTo(map);

      // Fake lokasyon verileri
      const locations = [
        { lat: 41.0082, lng: 28.9784, name: 'Merkez Lokasyon' },
        { lat: 41.0352, lng: 28.9869, name: 'Şube 1' },
        { lat: 40.9923, lng: 29.0243, name: 'Şube 2' },
        { lat: 41.0201, lng: 28.9447, name: 'Şube 3' }
      ];

      locations.forEach(location => {
        window.L.marker([location.lat, location.lng])
          .addTo(map)
          .bindPopup(`<b>${location.name}</b><br>${selectedStat.title} verisi`);
      });

      setMapInitialized(true);
    }
  };

  // Trend ikonunu belirle
  const getTrendIcon = (trend) => {
    switch (trend) {
      case 'up':
      case 'increase':
      case 'positive':
        return <TrendingUp className="w-4 h-4 text-green-500" />;
      case 'down':
      case 'decrease':
      case 'negative':
        return <TrendingDown className="w-4 h-4 text-red-500" />;
      default:
        return <Minus className="w-4 h-4 text-gray-400" />;
    }
  };

  // Stat değerini formatla
  const formatStatValue = (value) => {
    if (typeof value === 'number') {
      if (value >= 1000000) {
        return `${(value / 1000000).toFixed(1)}M`;
      } else if (value >= 1000) {
        return `${(value / 1000).toFixed(1)}K`;
      }
      return value.toLocaleString('tr-TR');
    }
    return value;
  };

  // Fake tablo verisi
  const generateTableData = (statTitle) => {
    const baseData = [
      { id: 1, location: 'İstanbul Merkez', value: Math.floor(Math.random() * 1000) + 500, percentage: (Math.random() * 50 + 50).toFixed(1), status: 'Aktif' },
      { id: 2, location: 'Ankara Şube', value: Math.floor(Math.random() * 800) + 300, percentage: (Math.random() * 40 + 30).toFixed(1), status: 'Aktif' },
      { id: 3, location: 'İzmir Şube', value: Math.floor(Math.random() * 600) + 200, percentage: (Math.random() * 35 + 25).toFixed(1), status: 'Beklemede' },
      { id: 4, location: 'Bursa Şube', value: Math.floor(Math.random() * 400) + 150, percentage: (Math.random() * 30 + 20).toFixed(1), status: 'Aktif' },
      { id: 5, location: 'Antalya Şube', value: Math.floor(Math.random() * 300) + 100, percentage: (Math.random() * 25 + 15).toFixed(1), status: 'Pasif' }
    ];
    return baseData;
  };

  if (stats.length === 0) {
    return (
      <div className="flex items-center justify-center h-64 bg-gradient-to-br from-slate-50 to-slate-100 rounded-3xl border border-slate-200">
        <p className="text-slate-500 text-lg">Henüz istatistik bulunmuyor</p>
      </div>
    );
  }

  return (
    <>
      {/* Leaflet CSS */}
      

      <div className="relative w-full max-w-7xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100">
        {/* Header */}
        <div className="bg-gradient-to-r from-slate-50 to-slate-100 p-6 border-b border-slate-200">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-bold text-slate-800">İstatistikler</h2>
            <div className="flex items-center space-x-3">
              <span className="text-sm text-slate-500 bg-white px-3 py-1 rounded-full">
                {currentSlide + 1} / {totalSlides}
              </span>
            </div>
          </div>
        </div>

        {/* Slider Container */}
        <div className="relative">
          {/* Main Slider */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {groupedStats.map((group, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0 p-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {group.map((stat, statIndex) => (
                      <div 
                        key={statIndex}
                        onClick={() => openModal(stat)}
                        className="group relative bg-gradient-to-br from-white to-slate-50 rounded-2xl p-6 hover:from-slate-50 hover:to-slate-100 transition-all duration-300 hover:shadow-xl hover:scale-105 cursor-pointer border border-slate-200 hover:border-slate-300"
                      >
                        {/* Stat Figure/Icon */}
                        {stat.figure && (
                          <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl flex items-center justify-center group-hover:from-blue-200 group-hover:to-indigo-200 transition-all duration-300">
                            {typeof stat.figure === 'string' ? (
                              <span className="text-2xl">{stat.figure}</span>
                            ) : (
                              stat.figure
                            )}
                          </div>
                        )}
                        
                        {/* Stat Content */}
                        <div className="space-y-3">
                          {/* Stat Title */}
                          <div className="text-slate-600 text-sm font-medium uppercase tracking-wide">
                            {stat.title || stat.statTitle || `Stat ${slideIndex * 4 + statIndex + 1}`}
                          </div>
                          
                          {/* Stat Value */}
                          <div className="text-3xl font-bold text-slate-800 group-hover:text-indigo-700 transition-colors">
                            {formatStatValue(stat.value || stat.statValue || '0')}
                          </div>
                          
                          {/* Stat Description */}
                          {(stat.desc || stat.statDesc || stat.description) && (
                            <div className="flex items-center space-x-2">
                              {stat.trend && getTrendIcon(stat.trend)}
                              <span className={`text-sm ${
                                stat.trend === 'up' || stat.trend === 'increase' || stat.trend === 'positive' ? 'text-green-600' :
                                stat.trend === 'down' || stat.trend === 'decrease' || stat.trend === 'negative' ? 'text-red-600' :
                                'text-slate-500'
                              }`}>
                                {stat.desc || stat.statDesc || stat.description}
                              </span>
                            </div>
                          )}
                          
                          {/* Additional Info */}
                          {stat.change && (
                            <div className="text-xs text-slate-400 mt-2">
                              {stat.change}
                            </div>
                          )}
                        </div>
                        
                        {/* Click indicator */}
                        <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <div className="bg-indigo-500 text-white text-xs px-2 py-1 rounded">
                            Detaylar için tıkla
                          </div>
                        </div>
                        
                        {/* Hover Effect Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/0 to-blue-500/0 group-hover:from-indigo-500/5 group-hover:to-blue-500/5 rounded-2xl transition-all duration-300"></div>
                      </div>
                    ))}
                    
                    {/* Empty slots için placeholder'lar */}
                    {group.length < 4 && Array.from({ length: 4 - group.length }).map((_, emptyIndex) => (
                      <div 
                        key={`empty-${emptyIndex}`}
                        className="bg-slate-50/50 rounded-2xl p-6 border-2 border-dashed border-slate-200 opacity-40"
                      >
                        <div className="space-y-3">
                          <div className="h-4 bg-slate-200 rounded w-2/3"></div>
                          <div className="h-8 bg-slate-200 rounded w-1/2"></div>
                          <div className="h-3 bg-slate-200 rounded w-3/4"></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          {totalSlides > 1 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute  top-1/2 -translate-y-1/2 w-14 h-14 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-slate-50 transition-all duration-200 hover:shadow-xl z-10 group border border-slate-200"
                disabled={currentSlide === 0}
              >
                <ChevronLeft className="w-6 h-6 text-slate-600 group-hover:text-indigo-600" />
              </button>
              
              <button
                onClick={nextSlide}
                className="absolute right-1 top-1/2 -translate-y-1/2 w-14 h-14 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-slate-50 transition-all duration-200 hover:shadow-xl z-10 group border border-slate-200"
                disabled={currentSlide === totalSlides - 1}
              >
                <ChevronRight className="w-6 h-6 text-slate-600 group-hover:text-indigo-600" />
              </button>
            </>
          )}
        </div>

        {/* Dots Indicator */}
        {totalSlides > 1 && (
          <div className="flex justify-center space-x-3 p-6 bg-gradient-to-t from-slate-50">
            {groupedStats.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index
                    ? 'bg-indigo-600 scale-125 shadow-md'
                    : 'bg-slate-300 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Modal */}
      {modalOpen && selectedStat && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl shadow-2xl max-w-7xl w-full max-h-[90vh] overflow-hidden">
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-indigo-500 to-blue-600 text-white p-6 flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-xl flex items-center justify-center">
                  <span className="text-2xl">{selectedStat.figure}</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold">{selectedStat.title || selectedStat.statTitle}</h3>
                  <p className="text-indigo-100">Detaylı Görünüm</p>
                </div>
              </div>
              <button
                onClick={closeModal}
                className="w-10 h-10 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full flex items-center justify-center transition-all"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="flex flex-col lg:flex-row h-[70vh]">
              {/* Table Section */}
              <div className="lg:w-1/2 p-6 overflow-auto">
                <div className="flex items-center space-x-2 mb-4">
                  <MapPin className="w-5 h-5 text-indigo-600" />
                  <h4 className="text-xl font-bold text-slate-800">Lokasyon Bazlı Veriler</h4>
                </div>
                
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
                      {generateTableData(selectedStat.title || selectedStat.statTitle).map((row) => (
                        <tr key={row.id}>
                          <td className="font-medium">{row.location}</td>
                          <td className="text-indigo-600 font-bold">{formatStatValue(row.value)}</td>
                          <td>
                            <div className="flex items-center space-x-2">
                              <span>{row.percentage}%</span>
                              <div className="w-16 bg-gray-200 rounded-full h-2">
                                <div 
                                  className="bg-indigo-600 h-2 rounded-full" 
                                  style={{ width: `${row.percentage}%` }}
                                ></div>
                              </div>
                            </div>
                          </td>
                          <td>
                            <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                              row.status === 'Aktif' ? 'bg-green-100 text-green-800' :
                              row.status === 'Beklemede' ? 'bg-yellow-100 text-yellow-800' :
                              'bg-red-100 text-red-800'
                            }`}>
                              {row.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Map Section */}
              <div className="lg:w-1/2 bg-slate-50 relative">
                <div className="p-6 border-l border-slate-200 h-full">
                  <div className="flex items-center space-x-2 mb-4">
                    <MapPin className="w-5 h-5 text-indigo-600" />
                    <h4 className="text-xl font-bold text-slate-800">Harita Görünümü</h4>
                  </div>
                  <div 
                    id="leaflet-map" 
                    className="w-full h-[calc(100%-4rem)] rounded-xl border border-slate-300"
                    style={{ minHeight: '300px' }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

// Demo stat verisi
const demoStats = [
  {
    title: "Toplam Satış",
    value: 89400,
    desc: "21% artış",
    trend: "up",
    figure: "💰"
  },
  {
    statTitle: "Aktif Kullanıcı",
    statValue: 2560,
    statDesc: "12% artış",
    trend: "up",
    figure: "👥"
  },
  {
    title: "Aylık Gelir",
    value: 125000,
    desc: "5% düşüş",
    trend: "down",
    figure: "📈"
  },
  {
    title: "Yeni Üyeler",
    value: 340,
    desc: "Bu ay",
    trend: "up",
    figure: "🎯"
  },
  {
    title: "Sipariş Sayısı",
    value: 1240,
    desc: "Bu hafta",
    change: "Geçen haftaya göre +15%",
    figure: "🛒"
  },
  {
    title: "Görüntülenme",
    value: 45600,
    desc: "Sayfalar",
    trend: "up",
    figure: "👁️"
  },
  {
    title: "İndirme",
    value: 3200,
    desc: "Dosyalar",
    figure: "⬇️"
  },
  {
    title: "Puanlama",
    value: "4.8",
    desc: "5 üzerinden",
    figure: "⭐"
  },
  {
    title: "Stok",
    value: 890,
    desc: "Ürün adedi",
    figure: "📦"
  }
];

// Ana komponent
export default function Dene() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-blue-50 p-4">
      <div className="container mx-auto py-8">
        <StatsSlider stats={demoStats} />
        
        {/* Kullanım bilgisi */}
        <div className="mt-8 bg-white rounded-2xl p-6 shadow-lg border border-slate-200">
          <h3 className="text-lg font-bold text-slate-800 mb-2">💡 İpucu</h3>
          <p className="text-slate-600">
            Herhangi bir stat kartına tıklayarak detaylı görünümü açabilirsiniz. 
            Modal'da lokasyon bazlı veri tablosu ve interaktif harita bulunur.
          </p>
        </div>
      </div>
    </div>
  );
}