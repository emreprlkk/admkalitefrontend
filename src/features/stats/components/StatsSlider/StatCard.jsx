import React from 'react';
import { getTrendIcon, trendTextColor } from '../../utils/trend';
import { formatStatValue } from '../../utils/number';

export default function StatCard({ stat, onClick }) {
  const title = stat.title || stat.statTitle || 'Stat';
  const value = stat.value ?? stat.statValue ?? '0';
  const desc = stat.desc || stat.statDesc || stat.description;
///KARTLARIN DÜZENLEYECEĞN COMPONENT
  return (
    <div
      onClick={onClick}
      className=" group relative bg-gradient-to-br from-white to-slate-50 rounded-2xl p-6 hover:from-slate-50 hover:to-slate-100 transition-all duration-300 hover:shadow-xl hover:scale-105 cursor-pointer border border-slate-200 hover:border-slate-300"
    >
      
      

      <div  >
        <div className="text-slate-600 text-sm font-medium uppercase tracking-wide">
          {title}
        </div>

        <div className="text-2xl font-bold text-slate-800 group-hover:text-indigo-700 transition-colors">
          {formatStatValue(value)}
        </div>

        {desc && (
          <div className="flex items-center  space-x-2">
            {stat.trend && getTrendIcon(stat.trend)}
            <span className={`text-sm ${trendTextColor(stat.trend)}`}>{desc}</span>
          </div>
        )}

        {stat.change && (
          <div className="text-xs  text-slate-400 mt-2">{stat.change}</div>
        )}
      </div>

      <div className="absolute    opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="bg-indigo-500 text-white text-xs px-2 py-1 rounded">
          Detaylar
        </div>
      </div>

      <div className=" absolute inset-0 bg-gradient-to-br from-indigo-500/0 to-blue-500/0 group-hover:from-indigo-500/5
       group-hover:to-blue-500/5 rounded-2xl transition-all duration-300" />
        {/* (İsteğe bağlı) timeline verisi varsa göster */}
  
    </div>
    
  );
}
