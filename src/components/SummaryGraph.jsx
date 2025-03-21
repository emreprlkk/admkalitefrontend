import React, { useState, useEffect } from 'react';
import * as XLSX from 'xlsx';


//import alasql from 'alasql';
import ApexCharts from './ApexCharts';
//import NavbarBolge from './NavbarBolge'; 
//import Navbarİsletme from './NavbarIsletme';
//import { useData } from './DataContext';






export const SummaryGraph=()=>{
    const [isletmeName, setIsletmeName] = useState('DENİZLİ MERKEZ İŞLETME');
    const data1_2023_silerisn=[1,2,3,4,5,6,7,8,9,10,11,12];
    const categories_Aylik= [
        'Ocak',
        'Şubat',
        'Mart',
        'Nisan',
        'Mayıs',
        'Haziran',
        'Temmuz',
        'Ağustos',
        'Eylül',
        'Ekim',
        'Kasım',
        'Aralık',
          ]
       //   console.log(selectedNumber)

    const  veridekiİsletmeName=isletmeName
/*
    const handleIsletmeChange = (newIsletmeName) => {
      setIsletmeName(newIsletmeName); // isletmeName'i güncelliyoruz
     // console.log("ChangeİsletmeName çalışıyor" ,isletmeName)
    };
    // isletmeName değiştiği anda güncellenmiş değeri yakala
    useEffect(() => {
      console.log("Güncellenmiş İşletme Adı:", isletmeName);
      // Burada API çağrıları veya sorgularını tetikleyebilirsin.
    }, [isletmeName]); // isletmeName değiştiğinde tetiklenecek.
    */

return(
    
    <div  className='main-container'>  <h1 style={{color:"white"}}>ÖZET GRAFİKLER</h1> 
        <h2 style={{color:"white"}}>...YAPIM AŞAMASINDA.... </h2>
    <div  className="dashboard-container">

    <div className="chart">
    
    <ApexCharts key={veridekiİsletmeName} width={500} data1_2023={data1_2023_silerisn}  
    /*  data1_2024={data2_2024_AG_KESİNTİ_SAYISI}*/ title={`${veridekiİsletmeName} ORT OG ARIZA GİDERME SÜRESİ DAKİKA`}
    X_axis={categories_Aylik} isletmeName_props={veridekiİsletmeName}/>
    </div>
    <div className="chart">
    
    <ApexCharts key={veridekiİsletmeName} width={500} data1_2023={data1_2023_silerisn}  
    /*  data1_2024={data2_2024_AG_KESİNTİ_SAYISI}*/ title={`${veridekiİsletmeName} ORT AG  ARIZA GİDERME SÜRESİ DAKİKA`}
    X_axis={categories_Aylik} isletmeName_props={veridekiİsletmeName}/>
    </div>
    <div className="chart">
    
    <ApexCharts key={veridekiİsletmeName} width={500} data1_2023={data1_2023_silerisn}  
    /*  data1_2024={data2_2024_AG_KESİNTİ_SAYISI}*/ title={`${veridekiİsletmeName} TOPLAM UZUN OG ARIZA SAYISI`}
    X_axis={categories_Aylik} isletmeName_props={veridekiİsletmeName}/>
    </div>
    <div className="chart">
    
    <ApexCharts key={veridekiİsletmeName} width={500} data1_2023={data1_2023_silerisn}  
    /*  data1_2024={data2_2024_AG_KESİNTİ_SAYISI}*/ title={`${veridekiİsletmeName} TOPLAM UZUN AG ARIZA SAYISI`}
    X_axis={categories_Aylik} isletmeName_props={veridekiİsletmeName}/>
    </div>
    
    <div className="chart">
    
    <ApexCharts key={veridekiİsletmeName} width={500} data1_2023={data1_2023_silerisn}  
    /*  data1_2024={data2_2024_AG_KESİNTİ_SAYISI}*/ title={`${veridekiİsletmeName} TOPLAM KISA AG ARIZA SAYISI`}
    X_axis={categories_Aylik} isletmeName_props={veridekiİsletmeName}/>
    </div>
    </div>  
    </div>) 

}










