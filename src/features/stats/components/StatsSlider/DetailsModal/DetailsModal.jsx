import React from 'react';
import { X, MapPin } from 'lucide-react';
import LocationTable from './LocationTable';
import MapView from './MapView.client';

export default function DetailsModal({ stat, onClose }) {
  const title = stat.title || stat.statTitle || 'EHEHEH';

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4" role="dialog" aria-modal="true">
      <div className="bg-white rounded-3xl shadow-2xl max-w-7xl w-full max-h-[90vh] overflow-hidden">
        <div className="bg-gradient-to-r from-indigo-500 to-blue-600 text-white p-6 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
              <span className="text-2xl">{stat.figure}</span>
            </div>
            <div>
              <h3 className="text-2xl font-bold">{title}</h3>
              <p className="text-indigo-100">Detaylı Görünüm</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all"
            aria-label="Kapat"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex flex-col lg:flex-row h-[70vh]">
          <div className="lg:w-1/2 p-6 overflow-auto">
            <div className="flex items-center space-x-2 mb-4">
              <MapPin className="w-5 h-5 text-indigo-600" />
              <h4 className="text-xl font-bold text-slate-800">Lokasyon Bazlı Veriler</h4>
            </div>
            <LocationTable stat={stat} />
          </div>

          <div className="lg:w-1/2 bg-slate-50 relative">
            <div className="p-6 border-l border-slate-200 h-full">
              <div className="flex items-center space-x-2 mb-4">
                <MapPin className="w-5 h-5 text-indigo-600" />
                <h4 className="text-xl font-bold text-slate-800">Harita Görünümü</h4>
              </div>
              <MapView stat={stat} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
