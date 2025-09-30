import React, { useMemo, useState, useCallback } from 'react';
import { chunk } from '../../utils/chunk';
import StatsHeader from './StatsHeader';
import Slides from './Slides';
import Dots from './Dots';
import DetailsModal from './DetailsModal/DetailsModal';
import Timeline from 'components/EAM/timeline';
import MonthlyColumnChart from 'components/EAM/eamchart';

//import {useDataStore,useSelectedNavbar} from '../../../../zustand/store.js';

export default function StatsSlider({ stats = [] }) {
 
  console.log("statsSlider stats propsu ",stats)

  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(1);

 // const groups = useMemo(() => chunk(stats, 4), [stats]);
 const groups=useMemo(()=>stats[0].kirilimli_is_emri_toplam_sayisi,[stats] )
  const total = groups.length/2;

  const onPrev = useCallback(() => setCurrent((p) => Math.max(0, p - 1)), []);
  const onNext = useCallback(() => setCurrent((p) => Math.min(total - 1, p + 1)), [total]);
  const onGo = useCallback((i) => setCurrent(i), []);
  if (stats.length === 0) {
    return (
      <div className="flex items-center justify-center h-64 bg-gradient-to-br from-slate-50 to-slate-100 rounded-3xl border border-slate-200">
        <p className="text-slate-500 text-lg">Henüz istatistik bulunmuyor</p>
      </div>
    );
  }
  const statsheader=stats[0]?.Ekip
  const props_statugecisi=stats[0]?.statu_gecisleri_kırılımlı
 
  return (
    <div className="relative w-full   border-2  border-xl border-black max-w-5xl mx-auto bg-slate-200 rounded-3xl shadow-2xl  overflow-hidden  ">
     {
      <StatsHeader  ekipname={statsheader}  />

     } 
    {  <Slides
        groups={groups}
        current={current}
        onPrev={onPrev}
        onNext={onNext}
        onCardClick={setSelected}
      />
    }
     
      {total > 1 && <Dots total={total} current={current} onGo={onGo} />}
    <Timeline statugecisi={props_statugecisi}/>
  {  <MonthlyColumnChart propsarraychart={stats[0].DAILY_cHARTSD}/>
     
      }
       {selected && (
        <DetailsModal stat={selected} onClose={() => setSelected(null)} />
      )} 
    </div>
  );
}
/*
import React, { useMemo, useState, useCallback } from 'react';
import { chunk } from '../../utils/chunk';
import StatsHeader from './StatsHeader';
import Slides from './Slides';
import Dots from './Dots';
import DetailsModal from './DetailsModal/DetailsModal';
import Timeline from 'components/EAM/timeline';
import MonthlyColumnChart from 'components/EAM/eamchart';

export default function StatsSlider({ stats = [] }) {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  
  const groups = useMemo(() => chunk(stats, 4), [stats]);
  const total = groups.length;
  
  const onPrev = useCallback(() => setCurrent((p) => Math.max(0, p - 1)), []);
  const onNext = useCallback(() => setCurrent((p) => Math.min(total - 1, p + 1)), [total]);
  const onGo = useCallback((i) => setCurrent(i), []);
  
  if (stats.length === 0) {
    return (
      <div className="flex items-center justify-center h-64 bg-gradient-to-br from-slate-50 to-slate-100 rounded-3xl border border-slate-200">
        <p className="text-slate-500 text-lg">Henüz istatistik bulunmuyor</p>
      </div>
    );
  }

  console.log("StatsSlider stats:", stats);
  
  // İlk elemanın ekip adını al (çünkü aynı ekipten filtrelenmiş veriler gelecek)
  const ekipAdi = stats[0]?.Ekip || "Bilinmeyen Ekip";
  
  return (
    <div className="relative w-full border-2 border-xl border-black max-w-5xl mx-auto bg-slate-200 rounded-3xl shadow-2xl overflow-hidden">
        
      <StatsHeader 
        ekipname={ekipAdi} 
        current={current} 
        total={total} 
      />
      
      
      <div className="p-4">
        <h3 className="text-xl font-bold mb-4">{ekipAdi} Ekibinin Verileri</h3>
        
      
        <div className="grid grid-cols-2 gap-4">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow">
              <h4 className="font-semibold">{stat.title || `Veri ${index + 1}`}</h4>
              <p className="text-gray-600">{stat.desc || "Açıklama yok"}</p>
              {/* Diğer stat özelliklerini burada gösterebilirsiniz * 
            </div>
          ))}
        </div>
      </div>
      
      {/* Navigasyon (eğer birden fazla grup varsa)  
      {total > 1 && (
        <div className="flex justify-between items-center p-4">
          <button 
            onClick={onPrev} 
            disabled={current === 0}
            className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300"
          >
            Önceki
          </button>
          
          <span className="text-lg font-semibold">
            {current + 1} / {total}
          </span>
          
          <button 
            onClick={onNext} 
            disabled={current === total - 1}
            className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300"
          >
            Sonraki
          </button>
        </div>
      )}
    </div>
  );
}
*/