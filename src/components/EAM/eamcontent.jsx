// Content.jsx
import { useEffect, useState } from "react";

export default function EAMContent({ selected }) {
  const [loading, setLoading] = useState(false);
  const [payload, setPayload] = useState(null);

  useEffect(() => {
    let ignore = false;
    setLoading(true);
    setPayload(null);

    // Burada gerçek API'yi çağır
    // fetch(`/api/${selected.group}/${selected.key}`)
    //   .then(r=>r.json())
    //   .then(d=>{ if(!ignore){ setPayload(d); setLoading(false); } });

    // demo: sahte veri
    const t = setTimeout(() => {
      if (!ignore) {
        setPayload(mockData(selected));
        setLoading(false);
      }
    }, 500);

    return () => { ignore = true; clearTimeout(t); };
  }, [selected]);

  if (loading) {
    return (
      <div className="grid gap-4 md:grid-cols-2">
        <div className="card bg-base-100"><div className="card-body">
          <div className="skeleton h-6 w-40 mb-2"></div>
          <div className="skeleton h-24 w-full"></div>
        </div></div>
        <div className="card bg-base-100"><div className="card-body">
          <div className="skeleton h-6 w-40 mb-2"></div>
          <div className="skeleton h-24 w-full"></div>
        </div></div>
      </div>
    );
  }

  if (!payload) return null;

  return (
    <div className="grid gap-4 lg:grid-cols-3">
      {/* üstte özet */}
      <div className="stats shadow col-span-3 lg:col-span-3">
        {payload.stats.map((s)=>(
          <div key={s.title} className="stat">
            <div className="stat-title">{s.title}</div>
            <div className="stat-value">{s.value}</div>
            {s.desc && <div className="stat-desc">{s.desc}</div>}
          </div>
        ))}
      </div>

      {/* ana tablo/kart */}
      <div className="col-span-3">
        <div className="card bg-base-100">
          <div className="card-body">
            <div className="card-title">{payload.title}</div>
            <div className="overflow-x-auto">
              <table className="table">
                <thead>
                  <tr>{payload.columns.map(c=><th key={c}>{c}</th>)}</tr>
                </thead>
                <tbody>
                  {payload.rows.map((r,i)=>(
                    <tr key={i}>{r.map((cell,ci)=><td key={ci}>{cell}</td>)}</tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Export</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// demo veri üretici
function mockData(sel) {
  const base = `${sel.group} / ${sel.key}`;
  return {
    title: base + " — Details",
    stats: [
      { title: "Items", value: Math.floor(Math.random()*900+100) },
      { title: "Conversion", value: (Math.random()*5+1).toFixed(2)+"%" , desc:"last 7 days"},
      { title: "Revenue", value: "$"+(Math.random()*50+10).toFixed(1)+"k" },
    ],
    columns: ["Name", "Status", "Updated"],
    rows: Array.from({length:5}).map((_,i)=>[
      `${base} #${i+1}`,
      ["Active","Draft","Archived"][i%3],
      new Date().toLocaleDateString(),
    ]),
  };
}
