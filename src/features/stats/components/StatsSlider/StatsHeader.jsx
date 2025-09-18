import React from 'react';

export default function StatsHeader({ current, total }) {
  return (
    <div className="bg-gradient-to-r from-slate-50 to-slate-100 p-6 border-b border-slate-200">
      <div className="relative flex items-center justify-center bg-blue-700">
  <h2 className="text-3xl font-bold bg-amber-300 text-slate-800 text-center">
    İŞ EMRİ TİPLERİ
  </h2>
  <span className="absolute right-0 text-sm text-slate-500 bg-white px-3 py-1 rounded-full">
    {current + 1} / {total}
  </span>
</div>
    </div>
  );
}
