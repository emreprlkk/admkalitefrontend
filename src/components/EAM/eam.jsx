 
//import MonthlyColumnChart from "./eamchart";
 
//import Timeline from "./timeline";
 
import { useState,useEffect } from "react";
import StatsSlider from "../../features/stats/components/StatsSlider/StatsSlider";
 import { useDataStore,useSelectedNavbar } from "../../zustand/store";

const demoStats = [
  {
    title: "Kİ",
    value: 89400,
    desc: "21% artış",
    trend: "up",
 
    timeline: [
      { asama: "Oluşturuldu", position: "start" },
      { asama: "Atandı", position: "end", duration: "14 sn" },
      { asama: "Üstlendi", position: "start", duration: "3 s" },
      { asama: "Yola Çıkıldı", position: "end", duration: "6 s" },
      { asama: "Ulaşıldı", position: "start", duration: "8 dk" },
      { asama: "Başlandı", position: "start", duration: "8 s" },
      { asama: "Tamamlandı", position: "end", duration: "8 s" },
    ],
  },
    {
    title: "Aydınlatma",
    value: 89400,
    desc: "21% artış",
    trend: "up",
 
    timeline: [
      { asama: "Oluşturuldu", position: "start" },
      { asama: "Atandı", position: "end", duration: "14 sn" },
      { asama: "Üstlendi", position: "start", duration: "3 s" },
      { asama: "Yola Çıkıldı", position: "end", duration: "6 s" },
      { asama: "Ulaşıldı", position: "start", duration: "8 dk" },
      { asama: "Başlandı", position: "start", duration: "8 s" },
      { asama: "Tamamlandı", position: "end", duration: "8 s" },
    ],
  },
    {
    title: "İhbar İE",
    value: 89400,
    desc: "21% artış",
    trend: "up",
 
    timeline: [
      { asama: "Oluşturuldu", position: "start" },
      { asama: "Atandı", position: "end", duration: "14 sn" },
      { asama: "Üstlendi", position: "start", duration: "3 s" },
      { asama: "Yola Çıkıldı", position: "end", duration: "6 s" },
      { asama: "Ulaşıldı", position: "start", duration: "8 dk" },
      { asama: "Başlandı", position: "start", duration: "8 s" },
      { asama: "Tamamlandı", position: "end", duration: "8 s" },
    ],
  },
    {
    title: "İhbar İE",
    value: 89400,
    desc: "21% artış",
    trend: "up",
 
    timeline: [
      { asama: "Oluşturuldu", position: "start" },
      { asama: "Atandı", position: "end", duration: "14 sn" },
      { asama: "Üstlendi", position: "start", duration: "3 s" },
      { asama: "Yola Çıkıldı", position: "end", duration: "6 s" },
      { asama: "Ulaşıldı", position: "start", duration: "8 dk" },
      { asama: "Başlandı", position: "start", duration: "8 s" },
      { asama: "Tamamlandı", position: "end", duration: "8 s" },
    ],
  },
    {
    title: "İhbar İE",
    value: 89400,
    desc: "21% artış",
    trend: "up",
 
    timeline: [
      { asama: "Oluşturuldu", position: "start" },
      { asama: "Atandı", position: "end", duration: "14 sn" },
      { asama: "Üstlendi", position: "start", duration: "3 s" },
      { asama: "Yola Çıkıldı", position: "end", duration: "6 s" },
      { asama: "Ulaşıldı", position: "start", duration: "8 dk" },
      { asama: "Başlandı", position: "start", duration: "8 s" },
      { asama: "Tamamlandı", position: "end", duration: "8 s" },
    ],
  },
    {
    title: "İhbar İE",
    value: 89400,
    desc: "21% artış",
    trend: "up",
   
    timeline: [
      { asama: "Oluşturuldu", position: "start" },
      { asama: "Atandı", position: "end", duration: "14 sn" },
      { asama: "Üstlendi", position: "start", duration: "3 s" },
      { asama: "Yola Çıkıldı", position: "end", duration: "6 s" },
      { asama: "Ulaşıldı", position: "start", duration: "8 dk" },
      { asama: "Başlandı", position: "start", duration: "8 s" },
      { asama: "Tamamlandı", position: "end", duration: "8 s" },
    ],
  },
  // diğer statlar...
];

 

export default function EAM() {
 // const [selected, setSelected] = useState({ group: "Products", key: "overview" });
 const dataEamJson=useDataStore((state)=>state.data )
 const SelectedNavbarDirectIsletme=useSelectedNavbar((state)=>state.SelectedNavbarDirectIsletme)

 const [selectedEkip,setSelectedEkip]=useState([]);

  const EamIsletmeData=dataEamJson[SelectedNavbarDirectIsletme+1] 

 console.log("EamIsletmeData ",EamIsletmeData)
 
// Doğru şekilde tanımlanmış fonksiyon
  const handleChangeEkip = (ekipAdi) => {
    // Eğer ekip zaten seçiliyse, listeden çıkar
    if (selectedEkip.includes(ekipAdi)) {
      setSelectedEkip(selectedEkip.filter((ekip) => ekip !== ekipAdi));
    } 
    // Eğer ekip seçili değilse ve 4'ten az seçim varsa, listeye ekle
    else if (selectedEkip.length < 4) {
      setSelectedEkip([...selectedEkip, ekipAdi]);
    }

    //console.log("as",selectedEkip)
  };

const EamDataEkip=EamIsletmeData?.ekipler.filter((xx)=> (
selectedEkip.includes(xx.Ekip)

)?? [ ])
console.log("EamDataEkip " ,EamDataEkip)
console.log("selectedEkip ",selectedEkip)
 return (
    <div className="min-h-screen  bg-gradient-to-br from-slate-100 to-blue-50   p-4" >
      <div className="relative  h-30 flex items-center justify-center p-4   ">
      
<label className="input mr-6">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <circle cx="11" cy="11" r="8"></circle>
      <path d="m21 21-4.3-4.3"></path>
    </g>
  </svg>
  <input  type="search" className="grow " placeholder="Ekip Arayın" />
  
</label>
 
      
 <form className="overflow-x-auto  ">
  <input className="btn btn-square" type="reset" value="×"/>
  {EamIsletmeData.ekipler.map((ekip,index)=> (
    <input key={index} className="btn" onChange={()=>handleChangeEkip(ekip.Ekip)}
    // Checkbox'ın seçili olup olmadığını state'e göre ayarla
      checked={selectedEkip.includes(ekip.Ekip)}
    type="checkbox" name="frameworks"
     aria-label={ekip.Ekip}/>


  ) ) }
</form>
 
      </div>
   
      <div className="flex flex-row  container mx-auto py-8">
          {selectedEkip.slice(0,2).map((xx, index) => {
      // Her ekip için ilgili veriyi filtrele
      const gidecekprops=EamDataEkip.filter(item=>item.Ekip===xx)
      
      return (
        <StatsSlider 
          key={index} 
          stats={gidecekprops}
        />
      );
    })}

       
         
          </div>
       
      </div>

  );
}
