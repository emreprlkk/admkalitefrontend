"use client";
import { useMemo, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// Item ikonları
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import CategoryIcon from "@mui/icons-material/Category";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import TimelineIcon from "@mui/icons-material/Timeline";
import InsightsIcon from "@mui/icons-material/Insights";
import GroupIcon from "@mui/icons-material/Group";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import TuneIcon from "@mui/icons-material/Tune";
import FiberManualRecordRoundedIcon from "@mui/icons-material/FiberManualRecordRounded";

const iconMap = {
  overview: DashboardIcon,
  emre: PersonIcon,
  categories: CategoryIcon,
  sales: ShoppingCartIcon,
  funnels: TimelineIcon,
  retention: InsightsIcon,
  team: GroupIcon,
  billing: CreditCardIcon,
  preferences: TuneIcon,
};

export default function EamSidebar({ onSelect }) {
  // Demo verileri (istersen API'den getir)
  const [groups] = useState([
    {
      title: "AYDIN",
      items: [
        { key: "overview", label: "Sultanhisar" },
        { key: "emre", label: "AYDIN9" },
        { key: "categories", label: "NAZİLLİ" },
      ],
    },
    {
      title: "DENİZLİ",
      items: [
        { key: "sales", label: "ACIPAYAM-30" },
        { key: "funnels", label: "DENİZLİ-40" },
        { key: "retention", label: "SCADA" },
      ],
    },
    {
      title: "MUĞLA",
      items: [
        { key: "team", label: "YATAĞAN-04" },
       
      ],
    },
       {
      title: "BODRUM",
      items: [
        { key: "team", label: "YALIKAVAK-04" },
        { key: "billing", label: "BODRUM-08" },
        
      ],
    },
  ]);

  // Arama
  const [q, setQ] = useState("");
  const filtered = useMemo(() => {
    if (!q.trim()) return groups;
    const s = q.toLowerCase();
    return groups
      .map((g) => ({
        ...g,
        items: g.items.filter((it) => it.label.toLowerCase().includes(s)),
      }))
      .filter((g) => g.items.length > 0);
  }, [q, groups]);

  // UI state
  const [openIndex, setOpenIndex] = useState(0);     // hangi grup açık
  const [activeKey, setActiveKey] = useState(null);  // seçili item

  return (
    <aside className="w-72 h-screen bg-zinc-950 text-zinc-100 border-r border-zinc-800 flex flex-col m-4 border-2 rounded-2xl">
      {/* Üst başlık + arama */}
      <div className="p-4 border-b border-zinc-800">
        <div className="text-xs uppercase tracking-widest text-center text-zinc-400 mb-2">EAM'DEKİ ADM EKİPLERİ</div>

        <div className="relative">
          <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 opacity-70" fontSize="small" />
          <input
            type="search"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Ekip İsmi Arayın..."
            className="w-full pl-10 pr-3 py-2 rounded-lg bg-zinc-900/70 border border-zinc-800 focus:outline-none focus:ring-2 focus:ring-indigo-500/60 focus:border-indigo-500/60 placeholder:text-zinc-500"
          />
        </div>
      </div>

      {/* Gruplar */}
      <div className="flex-1 overflow-y-auto p-2 ">
        {filtered.map((group, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div key={group.title} className="mb-2">
              {/* Grup başlığı */}
              <button
                onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                className="w-full flex items-center justify-between px-3 py-2 rounded-lg hover:bg-zinc-900 transition-colors border border-transparent hover:border-zinc-800"
              >
                <span className="font-semibold text-pink-200">{group.title}</span>
                <span className="flex items-center gap-2">
                  <span className="text-xs text-zinc-500">{group.items.length}</span>
                  <ExpandMoreIcon
                    className={`transition-transform ${isOpen ? "rotate-180" : "rotate-0"} opacity-80`}
                    fontSize="small"
                  />
                </span>
              </button>

              {/* Grup içerik */}
              <div
                className={`overflow-hidden transition-[max-height,opacity] duration-300
                ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
              >
                <ul className="mt-1 space-y-1 px-1">
                  {group.items.map((it) => {
                    const Icon = iconMap[it.key] ?? FiberManualRecordRoundedIcon;
                    const active = activeKey === it.key;

                    return (
                      <li key={it.key}>
                        <button
                          onClick={() => {
                            setActiveKey(it.key);
                            onSelect?.({ group: group.title, key: it.key });
                          }}
                          className={[
                            "w-full flex items-center gap-3 px-3 py-2 rounded-md transition-colors",
                            active
                              ? "bg-indigo-600 text-white"
                              : "hover:bg-zinc-900 text-zinc-300",
                          ].join(" ")}
                        >
                          <Icon fontSize="small" />
                          <span className="flex-1 text-sm">{it.label}</span>

                          {/* örnek badge / aksiyon alanı */}
                          <span
                            className={[
                              "text-[10px] px-2 py-0.5 rounded-full border",
                              active
                                ? "bg-white/10 border-white/20"
                                : "bg-zinc-900 border-zinc-800 text-zinc-200",
                            ].join(" ")}
                          >
                            Tıkla
                          </span>
                        </button>
                      </li>
                    );
                  })}
                  {group.items.length === 0 && (
                    <li className="px-3 py-2 text-xs text-zinc-500">Doğru Yazdığınızdan Emin Olun , Kayıt Bulunamadı</li>
                  )}
                </ul>
              </div>
            </div>
          );
        })}

        {/* Aramada hiç grup kalmazsa */}
        {filtered.length === 0 && (
          <div className="mt-4 text-center text-sm text-zinc-500">Ekip Bulunamadı,Doğru Yazdığınızdan Emin Olun</div>
        )}
      </div>

      {/* Alt kısım (isteğe bağlı) */}
      <div className="p-3 border-t border-zinc-800">
        <div className="text-xs text-zinc-500">v1.0 • PRLK</div>
      </div>
    </aside>
  );
}
