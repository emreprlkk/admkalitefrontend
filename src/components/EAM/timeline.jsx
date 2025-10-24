import React, { useState } from 'react';
import { Clock, CheckCircle2, AlertCircle, Circle } from 'lucide-react';

const Timeline = () => {
  // YENİ VERİ YAPISI - Backend'den gelen süre verileri
  const [durationData] = useState({
    "İş Emri Tipi": "İhbar İE",
    "OLUSMA_ATAMA": "3.68 s",
    "ATAMA_USTLENME": "42.26 dk",
    "USTLENME_YOLACIKMA": "0.13 dk",
    "USTLENME_ULASMA": "0.24 dk",
    "ULASMA_BASLAMA": "1.54 dk",
    "BASLAMA_TAMAMLAMA": "5.07 dk"
  });

  // Timeline aşamaları - duration artık durationData'dan alınacak
  const [timelineData] = useState([
    {
      id: 1,
      asama: "Oluşturuldu",
      durum: "completed",
      aciklama: "İş emri sisteme girildi",
      durationKey: null // İlk aşamanın duration'ı yok
    },
    {
      id: 2,
      asama: "Atandı",
      durum: "completed",
      aciklama: "Sorumlu ekip belirlendi",
      durationKey: "OLUSMA_ATAMA" // Bu aşamaya geçiş süresi
    },
    {
      id: 3,
      asama: "Üstlendi",
      durum: "active",
      aciklama: "Ekip işi üstlendi",
      durationKey: "ATAMA_USTLENME"
    },
    {
      id: 4,
      asama: "Yola Çıkıldı",
      durum: "pending",
      aciklama: "Ekip sahaya gidiyor",
      durationKey: "USTLENME_YOLACIKMA"
    },
    {
      id: 5,
      asama: "Ulaşıldı",
      durum: "pending",
      aciklama: "Ekip sahaya ulaştı",
      durationKey: "USTLENME_ULASMA"
    },
    {
      id: 6,
      asama: "Başlandı",
      durum: "pending",
      aciklama: "İş başladı",
      durationKey: "ULASMA_BASLAMA"
    },
    {
      id: 7,
      asama: "Tamamlandı",
      durum: "pending",
      aciklama: "İş tamamlandı",
      durationKey: "BASLAMA_TAMAMLAMA"
    }
  ]);

  const [selectedItem, setSelectedItem] = useState(null);
  const [viewMode, setViewMode] = useState('horizontal');

  // Duration'ı durationData'dan al
  const getDuration = (durationKey) => {
    if (!durationKey) return null;
    return durationData[durationKey] || "-";
  };

  const getStatusColor = (durum) => {
    switch(durum) {
      case 'completed': return 'bg-green-500';
      case 'active': return 'bg-blue-500';
      case 'error': return 'bg-red-500';
      default: return 'bg-gray-300';
    }
  };

  const getStatusIcon = (durum) => {
    switch(durum) {
      case 'completed': return <CheckCircle2 className="w-4 h-4" />;
      case 'active': return <Clock className="w-4 h-4 animate-pulse" />;
      case 'error': return <AlertCircle className="w-4 h-4" />;
      default: return <Circle className="w-4 h-4" />;
    }
  };

  const getStatusText = (durum) => {
    switch(durum) {
      case 'completed': return 'Tamamlandı';
      case 'active': return 'Devam Ediyor';
      case 'error': return 'Hatalı';
      default: return 'Bekliyor';
    }
  };

  return (
    <div className="min-h-[50vh] bg-gradient-to-br from-slate-50 to-slate-100 p-8">
      <div className="max-w-[95vw] mx-auto">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <div className="flex justify-between items-center">
            <div>
              <div className="text-xl font-bold text-gray-800 mb-2">
                EAM İŞ EMRİ STATÜ GEÇİŞLERİ
              </div>
              <p className="text-gray-600">
                {durationData["İş Emri Tipi"]} - Ekibin Ortalama Statü Geçiş Süreleri
              </p>
            </div>
            
            {/* View Mode Toggle */}
            <div className="flex gap-2">
              <button
                onClick={() => setViewMode('horizontal')}
                className={`px-4 py-2 rounded-lg transition-all ${
                  viewMode === 'horizontal' 
                    ? 'bg-blue-500 text-white shadow-md' 
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                Yatay Görünüm
              </button>
              <button
                onClick={() => setViewMode('vertical')}
                className={`px-4 py-2 rounded-lg transition-all ${
                  viewMode === 'vertical' 
                    ? 'bg-blue-500 text-white shadow-md' 
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                Dikey Görünüm
              </button>
            </div>
          </div>
        </div>

        {/* Timeline Container */}
        <div className="bg-white rounded-2xl shadow-lg p-8 overflow-x-auto">
          {viewMode === 'horizontal' ? (
            // YATAY TIMELINE
            <div className="flex items-start min-w-max">
              {timelineData.map((item, index) => (
                <div key={item.id} className="flex items-start">
                  {/* Timeline Item */}
                  <div className="flex flex-col items-center w-48">
                    {/* Ana Kutu */}
                    <div 
                      onClick={() => setSelectedItem(item)}
                      className={`w-36 p-3 rounded-xl shadow-md cursor-pointer transform transition-all hover:scale-105 hover:shadow-xl ${
                        selectedItem?.id === item.id ? 'ring-4 ring-blue-400' : ''
                      } ${
                        item.durum === 'completed' ? 'bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-300' :
                        item.durum === 'active' ? 'bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-300' :
                        item.durum === 'error' ? 'bg-gradient-to-br from-red-50 to-red-100 border-2 border-red-300' :
                        'bg-gradient-to-br from-gray-50 to-gray-100 border-2 border-gray-300'
                      }`}
                    >
                      <h3 className="font-bold text-gray-800 text-sm mb-2 text-center">{item.asama}</h3>
                      <p className="text-xs text-gray-600 text-center">{item.aciklama}</p>
                    </div>

                    {/* Timeline Noktası */}
                    <div className={`w-6 h-6 rounded-full mt-4 shadow-lg ${getStatusColor(item.durum)} flex items-center justify-center text-white`}>
                      {getStatusIcon(item.durum)}
                    </div>
                  </div>

                  {/* Bağlantı Çizgisi ve Süreler */}
                  {index < timelineData.length - 1 && (
                    <div className="flex flex-col items-center justify-center pt-8 px-2">
                      {/* Süre Bilgisi - Bir sonraki aşamanın süresi */}
                      {timelineData[index + 1].durationKey && (
                        <div className="bg-amber-50 border-2 border-amber-300 px-4 py-2 rounded-lg text-xs font-semibold text-amber-800 mb-2 shadow-sm min-w-[120px]">
                          <div className="text-center mb-1 text-amber-600 font-bold">
                            Geçiş Süresi
                          </div>
                          <div className="text-center text-lg font-bold text-amber-900">
                            ⏱️ {getDuration(timelineData[index + 1].durationKey)}
                          </div>
                          <div className="text-center text-[10px] text-amber-600 mt-1">
                            {item.asama} → {timelineData[index + 1].asama}
                          </div>
                        </div>
                      )}
                      
                      {/* Çizgi */}
                      <div className={`h-1 w-32 rounded-full ${
                        timelineData[index + 1].durum === 'completed' ? 'bg-gradient-to-r from-green-400 to-green-300' :
                        timelineData[index + 1].durum === 'active' ? 'bg-gradient-to-r from-blue-400 to-blue-300' :
                        'bg-gray-300'
                      }`}></div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            // DİKEY TIMELINE
            <div className="space-y-4">
              {timelineData.map((item, index) => (
                <div key={item.id}>
                  <div className="flex gap-4">
                    {/* Sol Taraf - Süre Bilgisi */}
                    <div className="flex flex-col items-end w-32">
                      {item.durationKey && (
                        <div className="bg-amber-100 border border-amber-300 px-3 py-2 rounded-lg text-right">
                          <div className="text-xs text-amber-600 mb-1">Geçiş Süresi</div>
                          <div className="text-sm font-bold text-amber-800">
                            {getDuration(item.durationKey)}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Orta - Timeline Çizgisi */}
                    <div className="flex flex-col items-center">
                      <div className={`w-8 h-8 rounded-full shadow-lg ${getStatusColor(item.durum)} flex items-center justify-center text-white`}>
                        {getStatusIcon(item.durum)}
                      </div>
                      {index < timelineData.length - 1 && (
                        <div className={`w-1 h-24 ${
                          item.durum === 'completed' ? 'bg-green-400' :
                          item.durum === 'active' ? 'bg-blue-400' :
                          'bg-gray-300'
                        }`}></div>
                      )}
                    </div>

                    {/* Sağ Taraf - İçerik */}
                    <div 
                      onClick={() => setSelectedItem(item)}
                      className={`flex-1 p-4 rounded-xl shadow-md cursor-pointer transition-all hover:shadow-xl ${
                        selectedItem?.id === item.id ? 'ring-4 ring-blue-400' : ''
                      } ${
                        item.durum === 'completed' ? 'bg-gradient-to-br from-green-50 to-green-100 border-l-4 border-green-500' :
                        item.durum === 'active' ? 'bg-gradient-to-br from-blue-50 to-blue-100 border-l-4 border-blue-500' :
                        item.durum === 'error' ? 'bg-gradient-to-br from-red-50 to-red-100 border-l-4 border-red-500' :
                        'bg-gradient-to-br from-gray-50 to-gray-100 border-l-4 border-gray-400'
                      }`}
                    >
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-bold text-gray-800 text-lg">{item.asama}</h3>
                        <span className={`text-xs px-3 py-1 rounded-full text-white font-semibold ${getStatusColor(item.durum)}`}>
                          {getStatusText(item.durum)}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">{item.aciklama}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Detay Paneli */}
        {selectedItem && (
          <div className="mt-6 bg-white rounded-2xl shadow-lg p-6">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-2xl font-bold text-gray-800">Detaylı Bilgiler - {selectedItem.asama}</h2>
              <button 
                onClick={() => setSelectedItem(null)}
                className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
              >
                ×
              </button>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="text-xs text-gray-600 mb-1">Durum</div>
                <div className="font-semibold text-gray-800">{getStatusText(selectedItem.durum)}</div>
              </div>
              
              <div className="bg-amber-50 p-4 rounded-lg">
                <div className="text-xs text-gray-600 mb-1">Geçiş Süresi</div>
                <div className="font-semibold text-gray-800">
                  {selectedItem.durationKey ? getDuration(selectedItem.durationKey) : 'İlk Aşama'}
                </div>
              </div>
              
              <div className="bg-purple-50 p-4 rounded-lg">
                <div className="text-xs text-gray-600 mb-1">Açıklama</div>
                <div className="font-semibold text-gray-800">{selectedItem.aciklama}</div>
              </div>
            </div>

            {selectedItem.durationKey && (
              <div className="mt-4 bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-3">Süre Detayları</h3>
                <div className="text-sm text-gray-700">
                  <p>Bu aşamaya geçiş için ortalama <span className="font-bold text-amber-700">{getDuration(selectedItem.durationKey)}</span> süre geçmiştir.</p>
                  <p className="mt-2 text-xs text-gray-500">Veri Anahtarı: {selectedItem.durationKey}</p>
                </div>
              </div>
            )}
          </div>
        )}

        {/* İstatistikler */}
        <div className="mt-6 grid grid-cols-4 gap-4">
          <div className="bg-green-500 text-white rounded-xl p-4 shadow-lg">
            <div className="text-3xl font-bold">{timelineData.filter(i => i.durum === 'completed').length}</div>
            <div className="text-sm opacity-90">Tamamlanan</div>
          </div>
          
          <div className="bg-blue-500 text-white rounded-xl p-4 shadow-lg">
            <div className="text-3xl font-bold">{timelineData.filter(i => i.durum === 'active').length}</div>
            <div className="text-sm opacity-90">Aktif</div>
          </div>
          
          <div className="bg-gray-400 text-white rounded-xl p-4 shadow-lg">
            <div className="text-3xl font-bold">{timelineData.filter(i => i.durum === 'pending').length}</div>
            <div className="text-sm opacity-90">Bekleyen</div>
          </div>
          
          <div className="bg-purple-500 text-white rounded-xl p-4 shadow-lg">
            <div className="text-3xl font-bold">{timelineData.length}</div>
            <div className="text-sm opacity-90">Toplam Aşama</div>
          </div>
        </div>

        {/* Tüm Süreler Özet Tablosu */}
        <div className="mt-6 bg-white rounded-2xl shadow-lg p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Tüm Geçiş Süreleri Özeti</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {Object.entries(durationData).map(([key, value]) => {
              if (key === "İş Emri Tipi") return null;
              return (
                <div key={key} className="bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200 p-3 rounded-lg">
                  <div className="text-xs text-gray-600 mb-1">{key}</div>
                  <div className="text-lg font-bold text-amber-800">⏱️ {value}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;