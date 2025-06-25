// src/App.jsx
import React from 'react';
//import DropzoneArea from './components/DropzoneArea';
//import DataTable from './components/DataTable';

import ExcelPreview from './components/ExcelPreview';
import ApexDonutChart  from './components/ApexDonutChart';
 import DonutSlider from 'components/DonutSlider';


import { MergeProvider } from './providers/MergeProvider';
function App() {
  const donutData = [
    {title:"2025 Mayıs SAİDİ ADM-BÖLGELER",
      labels:['AYDIN', 'DENİZLİ','MUĞLA','BODRUM'],
      series:[11.19, 5.46,16.25,7.79],
      colors:['#F564A9', '#690B22','#7F55B1','#F3C623']}  ,
    {   title:"2025 Mayıs SAİFİ ADM-BÖLGELER",
      labels:['AYDIN', 'DENİZLİ','MUĞLA','BODRUM'],
      series:[11.19, 5.46,16.25,7.79],
      colors:['#F564A9', '#690B22','#7F55B1','#F3C623'] },
    { title:"2025 Mayıs SAİDİ ADM-İŞLETMELER",
      labels:['ACIPAYAM', 'AYDIN MERKEZ','BODRUM','ÇİNE','ÇİVRİL',
        'DENİZLİ MERKEZ','DİDİM','FETHİYE','KUŞADASI','MARMARİS',
        'MİLAS','MUĞLA MERKEZ','NAZİLLİ','ORTACA','SARAYKÖY','SÖKE'],
      series:[1.58, 2.29, 4.51, 1.72, 0.83, 2.49, 2.41, 3.56, 1.29, 4.22, 3.28, 3.88, 2.01, 4.58, 0.57, 1.48],
      colors:[
        "#EF476F",  //# canlı pembe
        "#118AB2", //// # serin mavi
        "#FFD166", // # sıcak sarı
        "#06D6A0",  //# nane yeşili
        "#073B4C",  //# gece laciverti
        "#982B1C",  //# fuşya
        "#3A0CA3", // # mor
        "#80ED99",  //# yumuşak yeşil
        "#FF5E5B",  //# kor kırmızısı
        "#33658A", // # koyu mavi
        "#F6AE2D", // # amber
        "#2EC4B6", // # turkuaz
        "#6A4C93", // # erguvani mor
        "#708871",  //# pastel pembe
        "#0B3954", // # koyu mavi-yeşil
        "#C77DFF"  // # pastel mor
    ]} ,
    {   title:"2025 Mayıs SAİFİ ADM-İŞLETMELER",
      labels:['ACIPAYAM', 'AYDIN MERKEZ','BODRUM','ÇİNE','ÇİVRİL','DENİZLİ MERKEZ','DİDİM','FETHİYE','KUŞADASI',
        'MARMARİS','MİLAS','MUĞLA MERKEZ','NAZİLLİ','ORTACA','SARAYKÖY','SÖKE'],
      series:[1.58, 2.29, 4.51, 1.72, 0.83, 2.49, 2.41, 3.56, 1.29, 4.22, 3.28, 3.88, 2.01, 4.58, 0.57, 1.48],
      colors:[
        "#EF476F",  //# canlı pembe
        "#118AB2", //// # serin mavi
        "#FFD166", // # sıcak sarı
        "#06D6A0",  //# nane yeşili
        "#073B4C",  //# gece laciverti
        "#F72585",  //# fuşya
        "#3A0CA3", // # mor
        "#80ED99",  //# yumuşak yeşil
        "#FF5E5B",  //# kor kırmızısı
        "#33658A", // # koyu mavi
        "#F6AE2D", // # amber
        "#2EC4B6", // # turkuaz
        "#6A4C93", // # erguvani mor
        "#FFB5A7",  //# pastel pembe
        "#0B3954", // # koyu mavi-yeşil
        "#C77DFF"  // # pastel mor
    ]  },
  ];
  
  document.title = " ADM DASHBOARD"; // Tarayıcı sekmesinde görünmesini istediğiniz başlığı burada ayarlayın.
 // const { datax } = useData();

//console.log("dataxappjs ",datax)
  return (
    <MergeProvider>
    <div className='main-container'>
    <div className='donut-slider-container '> <DonutSlider dataList={donutData} perPage={2} /> </div>
    
    <div className='header-row'>
 

     <div  className="titles"> 
      
     <h1>ADM DASHBOARD</h1>
     <h2>Sistem İşletme Müdürlüğü</h2>
       </div >
          

   

    



     
    

      </div>
      <div className="content"> 

<ExcelPreview /> 
</div>

    </div>
    </MergeProvider>
  );
}

export default App;


// X=>excel XX=>tab xx=>saidisaifigraph xxxy=>apechart