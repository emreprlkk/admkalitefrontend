import React, { useMemo } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import StatCard from './StatCard';
import { chunk } from '../../../stats/utils/chunk';
export default function Slides({ groups, current, onPrev, onNext, onCardClick }) {
  
  const xxx=useMemo(()=>{
    return chunk(groups,4)
  }
  ,[groups])
  const total = xxx.length;
console.log("slides props ",xxx)
return (
    <div className="relative">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {xxx.map((page, pageIdx) => (
            // her page bir slayt
            <div key={pageIdx} className="w-full flex-shrink-0 p-4 bg-amber-800">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {page.map((item, i) => (
                  <StatCard
                    key={`${pageIdx}-${i}`}
                    stat={item}                 // ✅ tek obje gönder
                    onClick={() => onCardClick(item)}
                  />
                ))}

                {/* 4'ü tamamlamak (opsiyonel) */}
                {page.length < 4 &&
                  Array.from({ length: 4 - page.length }).map((_, k) => (
                    <div
                      key={`empty-${pageIdx}-${k}`}
                      className="bg-slate-50/50 rounded-2xl p-6 border-2 border-dashed border-slate-200 opacity-40"
                    />
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {total > 1 && (
        <>
          <button
            onClick={onPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-slate-50 transition-all duration-200 hover:shadow-xl z-10 group border border-slate-200"
            disabled={current === 0}
          >
            <ChevronLeft className="  text-slate-600 group-hover:text-indigo-600" />
          </button>

          <button
            onClick={onNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-slate-50 transition-all duration-200 hover:shadow-xl z-10 group border border-slate-200"
            disabled={current === total - 1}
          >
            <ChevronRight className="  text-slate-600 group-hover:text-indigo-600" />
          </button>
        </>
      )}
    </div>
  );
}
