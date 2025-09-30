import React from 'react';

export default function Dots({ total, current, onGo }) {
  return (
    <div className="flex justify-center  space-x-3 p-6 bg-gradient-to-t from-slate-50">
      {Array.from({ length: total }).map((_, index) => (
        <button
          key={index}
          onClick={() => onGo(index)}
          className={`w-3 h-3 rounded-full transition-all duration-300 ${
            current === index ? 'bg-black scale-125 shadow-md' : 'bg-slate-300 hover:bg-slate-400'
          }`}
        />
      ))}
    </div>
  );
}
