import React, { useMemo, useState, useCallback } from 'react';
import { chunk } from '../../utils/chunk';
import StatsHeader from './StatsHeader';
import Slides from './Slides';
import Dots from './Dots';
import DetailsModal from './DetailsModal/DetailsModal';
import Timeline from 'components/EAM/timeline';
import MonthlyColumnChart from 'components/EAM/eamchart';

import {useDataStore,useSelectedNavbar} from '../../../../zustand/store.js';

export default function StatsSlider({ stats = [] }) {
 //const data = useDataStore((state) => state.data);
 
 //const {/*SelectedNavbarBolge,SelectedNavbarIsletme,SelectedNavbarDirectIsletme,*/}=useSelectedNavbar()
//console.log("consumer component " ,ekipAdlariBySelected)

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

  return (
    <div className="relative w-full   border-2  border-xl border-black max-w-5xl mx-auto bg-slate-200 rounded-3xl shadow-2xl  overflow-hidden  ">
      <StatsHeader current={current} total={total} />
      <Slides
        groups={groups}
        current={current}
        onPrev={onPrev}
        onNext={onNext}
        onCardClick={setSelected}
      />
      {total > 1 && <Dots total={total} current={current} onGo={onGo} />}
    <Timeline/>
    <MonthlyColumnChart/>
      {selected && (
        <DetailsModal stat={selected} onClose={() => setSelected(null)} />
      )}
    </div>
  );
}
