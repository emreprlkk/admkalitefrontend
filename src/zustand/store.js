import { create } from "zustand";
import dataJson from "../components/eamdata.json"; // JSON dosyasını direkt import edebilirsin

const useDataStore = create(() => ({
  data: dataJson.data, // JSON içindeki "data" alanını store'a yaz
    
  //setData: (newData) => set({ data: newData }), // Gerekirse update edebilirsin
}));

 





const useSelectedNavbar=create( (set,get)=> ({
SelectedNavbarBolge:920481,
SelectedNavbarIsletme:1,
SelectedNavbarDirectIsletme:6,
setSelectedNavbarBolge:(x)=> set({SelectedNavbarBolge:x}),
setSelectedNavbarIsletme:(x)=> set({SelectedNavbarIsletme:x}),
setSelectedNavbarDirectIsletme:(x)=> set({SelectedNavbarDirectIsletme:x}),

 // Derived: seçili işletmenin ekip adları
  ekipAdlariBySelected: () => {
    const { dataJson, selectedIsletme } = get();
    const isl = dataJson?.[0]?.ISLETMELER?.find(i => i.isletme_adi === selectedIsletme);
    return isl?.ekipler?.map(e => e.Ekip) ?? [];
  },
}) );


export  {useSelectedNavbar,useDataStore};
