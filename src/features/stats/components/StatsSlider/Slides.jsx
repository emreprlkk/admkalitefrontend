import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import StatCard from './StatCard';

export default function Slides({ groups, current, onPrev, onNext, onCardClick }) {
  const total = groups.length;

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {groups.map((group, idx) => (
            <div key={idx} className="w-full flex-shrink-0 p-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {group.map((stat, i) => (
                  <StatCard key={i} stat={stat} onClick={() => onCardClick(stat)} />
                ))}
                {group.length < 3 &&
                  Array.from({ length: 3 - group.length }).map((_, k) => (
                    <div
                      key={`empty-${k}`}
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
