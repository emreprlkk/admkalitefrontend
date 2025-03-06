import React, { useState, useEffect, useCallback,useContext,createContext } from 'react';
import * as XLSX from 'xlsx';
import { Box, Button, Alert,Snackbar } from '@mui/material';

import alasql from 'alasql';
import ApexCharts from './ApexCharts';
import NavbarBolge from './NavbarBolge'; 
import Navbarİsletme from './NavbarIsletme';
import { useData } from './DataContext';
import ColumnSelector from './ColumnSelector'
import FileUpload from './FileUpload';




// Türkçe karakterleri temizleyen fonksiyon
function removeTurkishCharacters(str) {
  if (!str) return str;
  return str
    .replace(/Ğ/g, 'G')
    .replace(/Ü/g, 'U')
    .replace(/Ş/g, 'S')
    .replace(/İ/g, 'I')
    .replace(/Ö/g, 'O')
    .replace(/Ç/g, 'C')
    .replace(/ğ/g, 'g')
    .replace(/ü/g, 'u')
    .replace(/ş/g, 's')
    .replace(/ı/g, 'i')
    .replace(/ö/g, 'o')
    .replace(/ç/g, 'c');
}
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
export default function ExcelPreview() {
 
  const [excelData, setExcelData] = useState([]);
  const [excelColumns, setExcelColumns] = useState([]);
  const [isletmeName, setIsletmeName] = useState('DENİZLİ MERKEZ İŞLETME');
  const { updateSaidiSaifi } = useData();
  //const [executionCount,SetexecutionCount]=useState(18);
  

  let saidi_verisi=[],saifi_verisi=[],ort_og_ariza_giderme_suresi_verisi=[],
  ort_ag_ariza_giderme_suresi_verisi=[],toplam_uzun_og_ariza_sayisi_verisi=[],
  toplam_uzun_ag_ariza_sayisi_verisi=[],
  toplam__kisa_og_ariza_sayisi_verisi=[]


  // Başlangıçta istediğiniz property'ler:
  const [columnMapping, setColumnMapping] = useState({
    kesintikodu:'',
    il: '',
    ilce: '',
    sure:'',
    kaynak:'',
    sebep: '',
    bildirim:'',
    toplamabonesayisi:'',
    baslamaTarihi: '',
    bitisTarihi: '',
  });
  const [open, setOpen] = useState(false);
  let [allSelectedData, setAllSelectedData] = useState([]);

  // Tarih formatlama fonksiyonu (opsiyonel)
  function parseExcelDate(serialDate) {
    if (!serialDate) return null;
    // Excel tarihleri 25569 değeri üzerinden hesaplanır.
    //console.log("DATE ",new Date((serialDate - 25569) * 86400 * 1000))
    //console.log("date ",serialDate ,new Date((serialDate - 25569) * 86400 * 1000))
    return new Date((serialDate - 25569) * 86400 * 1000);
  }

  // Dosya yükleme
  const handleFileChange = useCallback(async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    try {
      const data = await file.arrayBuffer();
      const workbook = XLSX.read(data);
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      const jsonData = XLSX.utils.sheet_to_json(worksheet, { defval: null });

      // 1) Excel'den gelen kolon isimlerini ("key"lerini) sanitize ediyoruz.
      const sanitizedData = jsonData.map((row) => {
        const newRow = {};
        for (const key in row) {
          const sanitizedKey = removeTurkishCharacters(key);
          newRow[sanitizedKey] = row[key];
        }
        return newRow;
      });

      // 2) Kolon isimleri dizisini de alıp temizliyoruz.
      if (sanitizedData.length > 0) {
        const firstRowKeys = Object.keys(sanitizedData[0]);
        setExcelColumns(firstRowKeys); // Zaten sanitize edilmiş.
      }

      setExcelData(sanitizedData);
    } catch (err) {
      console.error('Excel dosyası okunamadı:', err);
    }
  }, []);

  // Kullanıcının kolon seçimini güncelliyor.
  // Burada seçilen excel kolonunu da sanitize ederek saklıyoruz.
  const handleMappingChange = (mappingKey, excelCol) => {
    setColumnMapping((prev) => ({
      ...prev,
      [mappingKey]: removeTurkishCharacters(excelCol)
    }));
  };

  // SEÇİLEN kolonların TÜM SATIR verisini "allSelectedData"ya kaydediyoruz.
  
// Burada property isimleri sabit kalsın (il, ilce...), değerleri "excelCol" dan gelsin.
 useEffect(() => {
  console.log("excelData.length ",excelData.length)
   if (excelData.length === 0) { setAllSelectedData([]); return; } 
 // "columnMapping" gibi: { il: 'IL', ilce: 'ilce', ... } (sadece örnek) 
 const entireSelectedData = excelData.map((row) => { const selectedRow = {}; 
 // Tüm mapping key'lerini ("il", "ilce" vs.) gez 
 for (let mappingKey in columnMapping) { const excelColName = columnMapping[mappingKey];
   if (excelColName) { selectedRow[mappingKey] = row[excelColName]; } 
   else { selectedRow[mappingKey] = null; } }
    // Opsiyonel: Tarih kolonlarını formatla 
    if (selectedRow.baslamaTarihi) { 
     // console.log("basbt",selectedRow.baslamaTarihi) 
      selectedRow.baslamaTarihi = parseExcelDate(selectedRow.baslamaTarihi);
      //console.log("bbt",selectedRow.baslamaTarihi) 
     }
       if (selectedRow.bitisTarihi) 
        { 
          selectedRow.bitisTarihi = parseExcelDate(selectedRow.bitisTarihi);
         }
        return selectedRow;
      
      }); 
     //   console.log("entireSelectedData ",entireSelectedData)
        setAllSelectedData(entireSelectedData); },
         [columnMapping, excelData]);



 
      // Örnek eşleştirme tablosu (Excel'den alınan verileri içeren dizi)
const districtMapping = [
  { ilce: "ACIPAYAM", isletme: "ACİPAYAM isletme", bolge: "DENİZLİ", isletmeabonecount: 125222,ilceabonecount:40683 },
  { ilce: "BABADAĞ", isletme: "SARAYKOY isletme", bolge: "DENİZLİ", isletmeabonecount: 57570,ilceabonecount:6761 },
  { ilce: "BAKLAN", isletme: "CİVRİL isletme", bolge: "DENİZLİ", isletmeabonecount: 85023,ilceabonecount:4392 },
  { ilce: "BEKİLLİ", isletme: "CİVRİL isletme", bolge: "DENİZLİ", isletmeabonecount: 85023,ilceabonecount:7000 },
  { ilce: "BEYAĞAÇ", isletme: "ACİPAYAM isletme", bolge: "DENİZLİ", isletmeabonecount: 125222,ilceabonecount:4241 },
  { ilce: "BODRUM", isletme: "BODRUM isletme", bolge: "BODRUM", isletmeabonecount: 156966,ilceabonecount:156966 },
  { ilce: "BOZDOĞAN", isletme: "NAZİLLİ isletme", bolge: "AYDIN", isletmeabonecount: 190208,ilceabonecount:21489 },
  { ilce: "BOZKURT", isletme: "CİVRİL isletme", bolge: "DENİZLİ", isletmeabonecount: 85023,ilceabonecount:8235 },
  { ilce: "BUHARKENT", isletme: "NAZİLLİ isletme", bolge: "AYDIN", isletmeabonecount: 190208,ilceabonecount:9203 },
  { ilce: "BULDAN", isletme: "SARAYKOY isletme", bolge: "DENİZLİ", isletmeabonecount: 57570,ilceabonecount:21723 },
  { ilce: "ÇAL", isletme: "CİVRİL isletme", bolge: "DENİZLİ", isletmeabonecount: 85023,ilceabonecount:16216 },
  { ilce: "ÇAMELİ", isletme: "ACİPAYAM isletme", bolge: "DENİZLİ", isletmeabonecount: 125222,ilceabonecount:15022 },
  { ilce: "ÇARDAK", isletme: "CİVRİL isletme", bolge: "DENİZLİ", isletmeabonecount: 85023,ilceabonecount:5945 },
  { ilce: "ÇİNE", isletme: "CİNE isletme", bolge: "AYDIN", isletmeabonecount: 45846,ilceabonecount: 37132 },
  { ilce: "ÇİVRİL", isletme: "CİVRİL isletme", bolge: "DENİZLİ", isletmeabonecount: 85023,ilceabonecount: 43235 },
  { ilce: "DALAMAN", isletme: "ORTACA isletme", bolge: "MUGLA", isletmeabonecount: 107041,ilceabonecount: 36973 },
  { ilce: "DATÇA", isletme: "MARMARİS isletme", bolge: "MUGLA", isletmeabonecount: 92259,ilceabonecount: 28407 },
  { ilce: "DİDİM", isletme: "DİDİM isletme", bolge: "AYDIN", isletmeabonecount: 117707,ilceabonecount: 117707 },
  { ilce: "EFELER", isletme: "AYDİN MERKEZ isletme", bolge: "AYDIN", isletmeabonecount: 261330,ilceabonecount: 172358 },
  { ilce: "FETHİYE", isletme: "FETHİYE isletme", bolge: "MUGLA", isletmeabonecount: 179271,ilceabonecount: 129712 },
  { ilce: "GERMENCİK", isletme: "AYDİN MERKEZ isletme", bolge: "AYDIN", isletmeabonecount: 261330,ilceabonecount: 26616 },
  { ilce: "GÜNEY", isletme: "SARAYKÖY isletme", bolge: "DENİZLİ", isletmeabonecount: 57570,ilceabonecount: 7814 },
  { ilce: "HONAZ", isletme: "DENİZLİ MERKEZ isletme", bolge: "DENİZLİ", isletmeabonecount: 413120,ilceabonecount: 17137 },
  { ilce: "İNCİRLİOVA", isletme: "AYDİN MERKEZ isletme", bolge: "AYDIN", isletmeabonecount: 261330,ilceabonecount: 30861 },
  { ilce: "KALE", isletme: "ACİPAYAM isletme", bolge: "DENİZLİ", isletmeabonecount: 125222,ilceabonecount: 12980 },
  { ilce: "KARACASU", isletme: "NAZİLLİ isletme", bolge: "AYDIN", isletmeabonecount: 190208,ilceabonecount: 12182 },
  { ilce: "KARPUZLU", isletme: "CİNE isletme", bolge: "AYDIN", isletmeabonecount: 45846,ilceabonecount: 8714 },
  { ilce: "KAVAKLIDERE", isletme: "MUGLA MERKEZ isletme", bolge: "MUGLA", isletmeabonecount: 136636,ilceabonecount: 7865 },
  { ilce: "KOÇARLI", isletme: "AYDİN MERKEZ isletme", bolge: "AYDIN", isletmeabonecount: 261330,ilceabonecount: 15162 },
  { ilce: "KÖŞK", isletme: "AYDİN MERKEZ isletme", bolge: "AYDIN", isletmeabonecount: 261330,ilceabonecount: 16333 },
  { ilce: "KÖYCEĞİZ", isletme: "ORTACA isletme", bolge: "MUGLA", isletmeabonecount: 107041,ilceabonecount: 27871 },
  { ilce: "KUŞADASI", isletme: "KUSADASİ isletme", bolge: "AYDIN", isletmeabonecount: 142390,ilceabonecount: 142390 },
  { ilce: "KUYUCAK", isletme: "NAZİLLİ isletme", bolge: "AYDIN", isletmeabonecount: 190208,ilceabonecount: 19310 },
  { ilce: "MARMARİS", isletme: "MARMARİS isletme", bolge: "MUGLA", isletmeabonecount: 92259,ilceabonecount: 63852 },
  { ilce: "MENTEŞE", isletme: "MUGLA MERKEZ isletme", bolge: "MUGLA", isletmeabonecount: 136636,ilceabonecount: 76036 },
  { ilce: "MERKEZEFENDİ", isletme: "DENİZLİ MERKEZ isletme", bolge: "DENİZLİ", isletmeabonecount: 413120,ilceabonecount: 194090 },
  { ilce: "MİLAS", isletme: "MİLAS isletme", bolge: "BODRUM", isletmeabonecount: 109492,ilceabonecount: 109492 },
  { ilce: "NAZİLLİ", isletme: "NAZİLLİ isletme", bolge: "BODRUM", isletmeabonecount: 190208,ilceabonecount: 103383 },
  { ilce: "ORTACA", isletme: "ORTACA isletme", bolge: "MUGLA", isletmeabonecount: 107041,ilceabonecount: 42197 },
  { ilce: "PAMUKKALE", isletme: "DENİZLİ MERKEZ isletme", bolge: "DENİZLİ", isletmeabonecount: 413120,ilceabonecount: 201893 },
  { ilce: "SARAYKÖY", isletme: "SARAYKÖY isletme", bolge: "DENİZLİ", isletmeabonecount: 57570,ilceabonecount: 21272 },
  { ilce: "SERİNHİSAR", isletme: "ACİPAYAM isletme", bolge: "DENİZLİ", isletmeabonecount: 125222,ilceabonecount: 10902 },
  { ilce: "SEYDİKEMER", isletme: "FETHİYE isletme", bolge: "MUGLA", isletmeabonecount: 179271,ilceabonecount: 49559 },
  { ilce: "SÖKE", isletme: "SOKE isletme", bolge: "AYDIN", isletmeabonecount: 68144,ilceabonecount: 68144 },
  { ilce: "SULTANHİSAR", isletme: "NAZİLLİ isletme", bolge: "AYDIN", isletmeabonecount: 190208,ilceabonecount: 14751 },
  { ilce: "TAVAS", isletme: "ACİPAYAM isletme", bolge: "DENİZLİ", isletmeabonecount: 125222,ilceabonecount: 41394 },
  { ilce: "ULA", isletme: "MUGLA MERKEZ isletme", bolge: "MUGLA", isletmeabonecount: 136636,ilceabonecount: 22988 },
  { ilce: "YATAĞAN", isletme: "MUGLA MERKEZ isletme", bolge: "MUGLA", isletmeabonecount: 136636,ilceabonecount: 29747 },
  { ilce: "YENİPAZAR", isletme: "NAZİLLİ isletme", bolge: "AYDIN", isletmeabonecount: 190208,ilceabonecount: 9890 },
];



// **İLÇE'YE GÖRE EŞLEŞTİRME YAPAN kesintikodu**
allSelectedData = allSelectedData.map(item => {
  const match = districtMapping.find(district => district.ilce === item.ilce);
  return {
    ...item,
    isletme: match ? match.isletme : null,
    bolge: match ? match.bolge : null,
    isletmeabonecount: match ? match.isletmeabonecount : null,
    ilceabonecount:match ? match.ilceabonecount:null,
  };
});

// Sonucu Konsolda Göster
//console.log(allSelectedData);

  // Örnek sorgu
  const resutlAlaSQL = alasql(
    `
    SELECT  isletme,COUNT(*) AS sayi FROM ?
    GROUP BY isletme
    ORDER By isletme ASC
    `,
    [allSelectedData]
  );
  //console.log(allSelectedData);




  const executeAlasqlQuery = (excelData) => {
  //  console.log("finksiyona girdi!",executionCount);
    

    //SetexecutionCount(-3); // Çalışma sayısını artır.
    //console.log( executionCount)
   // console.log("excel data ", excelData)
    if (!excelData || excelData.length === 0) {
      console.log("Excel verisi boş!");
      return [];
    }
  
    // **AlaSQL işlemleri**
    const baseData = alasql(`
      SELECT 
         isletme,
        kesintikodu AS kod,
        ROUND(timestampdiff(second, baslamaTarihi, bitisTarihi) / 60,2) AS kesinti_suresi_dakika,
        toplamabonesayisi,
        isletmeabonecount,
        kaynak,
        sure,
        sebep,
        bildirim,
        baslamaTarihi,
        bitisTarihi,
        MONTH(baslamaTarihi) AS ay
      FROM ?
     WHERE baslamaTarihi >= new Date('2024-01-01 00:00:00') and bitisTarihi <= new Date('2026-01-01 00:00:00') 
      GROUP BY  MONTH(baslamaTarihi),isletme, kesintikodu, kaynak, sure, sebep, bildirim, baslamaTarihi, bitisTarihi, ay,toplamabonesayisi,isletmeabonecount
      ORDER BY MONTH(baslamaTarihi) ASC
    `, [excelData]);
  
    //  console.log("baseData ",baseData)
    let saidiData = alasql(`
    SELECT 
      ay, isletme,
      ROUND(
        sum(case when kaynak in ('Dağıtım-OG', 'Dağıtım-AG') 
            and sure = 'Uzun'
            and sebep in ('Şebeke işletmecisi','Dışsal')
            and bildirim = 'Bildirimsiz'
          then (toplamabonesayisi*kesinti_suresi_dakika)/isletmeabonecount
          else 0 end), 2) as saidi_isletme,
  
      ROUND(
        sum(case when kaynak in ('Dağıtım-OG', 'Dağıtım-AG') 
            and sure = 'Uzun'
            and sebep in ('Şebeke işletmecisi')
            and bildirim = 'Bildirimsiz'
          then (toplamabonesayisi/isletmeabonecount)
          else 0 end), 2) as saifi_isletme,
           ROUND(
        avg(case when kaynak in ('Dağıtım-OG' ) 
            and sure = 'Uzun'
            and sebep in ('Şebeke işletmecisi','Dışsal')
            and bildirim = 'Bildirimsiz'
          then kesinti_suresi_dakika
          else 0 end), 2) as ort_og_ariza_giderme_suresi,
            ROUND(
        avg(case when kaynak in ('Dağıtım-AG' ) 
            and sure = 'Uzun'
            and sebep in ('Şebeke işletmecisi','Dışsal')
            and bildirim = 'Bildirimsiz'
          then kesinti_suresi_dakika
          else 0 end), 2) as ort_ag_ariza_giderme_suresi,
          ROUND(
        sum(case when kaynak in ('Dağıtım-OG' ) 
            and sure = 'Uzun'
            and sebep in ('Şebeke işletmecisi','Dışsal')
            and bildirim = 'Bildirimsiz'
          then 1
          else 0 end), 2) as toplam_uzun_og_ariza_sayisi,
            ROUND(
        sum(case when kaynak in ('Dağıtım-AG' ) 
            and sure = 'Uzun'
            and sebep in ('Şebeke işletmecisi','Dışsal')
            and bildirim = 'Bildirimsiz'
          then 1
          else 0 end), 2) as toplam_uzun_ag_ariza_sayisi,
          ROUND(
        sum(case when kaynak in ('Dağıtım-OG' ) 
            and sure = 'Kısa'
            and sebep in ('Şebeke işletmecisi','Dışsal')
            and bildirim = 'Bildirimsiz'
          then 1
          else 0 end), 2) as toplam__kisa_og_ariza_sayisi
    FROM ?
    GROUP BY ay, isletme
    ORDER BY isletme ASC
  `, [baseData]);
  
    if (saidiData.length > 0 ) {
      const filteredAndSortedData = saidiData
        .filter(row => row.isletme === isletmeName)
        .sort((a, b) => a.ay - b.ay);
  
      saidi_verisi = filteredAndSortedData.map(row => row.saidi_isletme);
      saifi_verisi = filteredAndSortedData.map(row => row.saifi_isletme);
      ort_og_ariza_giderme_suresi_verisi=filteredAndSortedData.map(row => row.ort_og_ariza_giderme_suresi);
      ort_ag_ariza_giderme_suresi_verisi=filteredAndSortedData.map(row => row.ort_ag_ariza_giderme_suresi);
      toplam_uzun_og_ariza_sayisi_verisi=filteredAndSortedData.map(row => row.toplam_uzun_og_ariza_sayisi);
      toplam_uzun_ag_ariza_sayisi_verisi=filteredAndSortedData.map(row => row.toplam_uzun_ag_ariza_sayisi);
      toplam__kisa_og_ariza_sayisi_verisi=filteredAndSortedData.map(row => row.toplam__kisa_og_ariza_sayisi);
      
    }
  
    console.log(saidiData);
  
    return saidiData;
  };
  
  // **Kullanım Örneği**
  const queryResults = executeAlasqlQuery(allSelectedData);
  
  // Verileri state'e set et
  const dd = () => {
    updateSaidiSaifi(queryResults);
    console.log("güncellendi stateler");
       // Alert'i aç
       setOpen(true);
  };
  
    // Alert kapanma fonksiyonu
  const handleClose = (event, reason) => {
    if (reason === "clickaway") return;
    setOpen(false);
  };

 
//console.log(queryResults)


  // İlk 20 satırı önizleme
  //const previewData = excelData.slice(0, 20);
  const  veridekiİsletmeName=isletmeName

  const handleIsletmeChange = (newIsletmeName) => {
    setIsletmeName(newIsletmeName); // isletmeName'i güncelliyoruz
   // console.log("ChangeİsletmeName çalışıyor" ,isletmeName)
  };
  // isletmeName değiştiği anda güncellenmiş değeri yakala
  useEffect(() => {
    console.log("Güncellenmiş İşletme Adı:", isletmeName);
    // Burada API çağrıları veya sorgularını tetikleyebilirsin.
  }, [isletmeName]); // isletmeName değiştiğinde tetiklenecek.
//console.log(allSelectedData)
//console.log(resutlAlaSQL)
/*
// Tarih farkı hesaplama fonksiyonu (JavaScript ile)
const calculateDurationMinutes = (start, end) => {
  const startDate = new Date(start);
  const endDate = new Date(end);
  return (endDate - startDate) / 1000 / 60; // Dakika cinsinden fark
};

// **İlk alt sorguyu çalıştırarak HX adlı tabloyu oluşturuyoruz**
const HX = alasql(`
  SELECT 
    [isletme] AS isletme,
    SUM(12 / 24) AS SAIFI
  FROM ?
  WHERE 
    [KESİNTİ BAŞLAMA TARİHİ VE ZAMANI (6)] >= '2024-01-01 00:00:00' 
    AND [KESİNTİ SONA ERME TARİHİ VE ZAMANI (7)] <= '2024-08-01 00:00:00'
    AND [KAYNAĞA GÖRE (5A)] != 'İletim'  
    AND [SÜREYE GÖRE (5B)] != 'Kısa'  
    AND [SEBEBE GÖRE (5C)] != 'Güvenlik'  
    AND [SEBEBE GÖRE (5C)] != 'Dışsal'
    AND [BİLDİRİME GÖRE (5D)] != 'Bildirimli'
  GROUP BY [isletme]
`, [allSelectedData]);

// **Ana SQL Sorgusu**
const result = alasql(`
  SELECT 
    db1.[isletme] AS isletme,
    SUM(
      DATEDIFF('SECOND', db1.[KESİNTİ BAŞLAMA TARİHİ VE ZAMANI (6)], db1.[KESİNTİ SONA ERME TARİHİ VE ZAMANI (7)])
      / 60.0 *12 / 24
    ) AS SAIDI,
    HX.SAIFI
  FROM ? AS db1
  INNER JOIN ? AS HX 
    ON db1.[isletme] = HX.isletme
  WHERE 
    db1.[KESİNTİ BAŞLAMA TARİHİ VE ZAMANI (6)] >= '2024-01-01 00:00:00' 
    AND db1.[KESİNTİ SONA ERME TARİHİ VE ZAMANI (7)] <= '2024-08-01 00:00:00'
    AND db1.[KAYNAĞA GÖRE (5A)] != 'İletim'  
    AND db1.[SÜREYE GÖRE (5B)] != 'Kısa'  
    AND db1.[SEBEBE GÖRE (5C)] != 'Güvenlik'  
    AND db1.[BİLDİRİME GÖRE (5D)] != 'Bildirimli'
  GROUP BY db1.[isletme], HX.SAIFI
  ORDER BY db1.[isletme]
`, [allSelectedData, HX]);

// Sonuçları göster
console.log(result);*/


  return (
    
    <div className='manin-container'>
      <NavbarBolge  onIsletmeChange={handleIsletmeChange} /> 
       
       {/* Kullanıcının tüm kolon seçimini tamamladığını varsayarak tetiklenecek buton */}
   {/* <button onClick={handleMappingSubmit}>Mapping İşlemini Uygula</button>*/}
       <Navbarİsletme onIsletmeChange={handleIsletmeChange} /> {/* handleIsletmeChange fonksiyonunu prop olarak geçiyoruz */} {/* Navbar'ı burada render ediyoruz */}
     

       <FileUpload handleFileChange={handleFileChange}/>

      {excelData.length > 0 && (
        <div >
 

         <ColumnSelector columnMapping={columnMapping} excelColumns={excelColumns} handleMappingChange={handleMappingChange}/>
         <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "2vh", // Sayfanın tamamını kaplasın
      }}
    >
      <Button variant="contained" color="primary" onClick={dd}>
        Yüklenen Verileri Grafikleyin 
      </Button>

      {/* Modern Snackbar Alert */}
      <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}
       anchorOrigin={{ vertical: "top", horizontal: "top" }}  >
        <Alert onClose={handleClose} severity="success" variant="filled">
         Üst Menüden Verisini Görüntülemek İstediğiniz İşletmeyi Seçiniz!
        </Alert>
      </Snackbar>
    </Box>
        </div>
      )}

<div className="grid-container">
       
<div className="chart">
  
  <ApexCharts key={veridekiİsletmeName} width={700} data1_2023={saidi_verisi}  
/*  data1_2024={data2_2024_AG_KESİNTİ_SAYISI}*/ title={`${veridekiİsletmeName} SAİDİ`}
   X_axis={categories_Aylik} isletmeName_props={veridekiİsletmeName}/>
</div>
<div className="chart">
  
  <ApexCharts key={veridekiİsletmeName} width={700} data1_2023={saifi_verisi}  
/*  data1_2024={data2_2024_AG_KESİNTİ_SAYISI}*/ title={`${veridekiİsletmeName} SAİFİ`}
   X_axis={categories_Aylik} isletmeName_props={veridekiİsletmeName}/>
</div>
      {/* <DataTable  Saidi_Table_Array={data_saidi_table} İşletmeName={isletmeName} HangiTablo={"SAİDİ ŞEBEKE UNSURU TABLOSU"} Height_Props={400} />
      <DataTable Saidi_Table_Array={data_saifi_table} İşletmeName={isletmeName} HangiTablo={"SAİFİ ŞEBEKE UNSURU TABLOSU"} Height_Props={400}/>  */}
      </div> 
      <div  className='main-container'>  <h1 style={{color:"white"}}>ÖZET GRAFİKLER</h1> 
      <div  className="dashboard-container">

<div className="chart">
  
  <ApexCharts key={veridekiİsletmeName} width={500} data1_2023={ort_og_ariza_giderme_suresi_verisi}  
/*  data1_2024={data2_2024_AG_KESİNTİ_SAYISI}*/ title={`${veridekiİsletmeName} ORT OG ARIZA GİDERME SÜRESİ DAKİKA`}
   X_axis={categories_Aylik} isletmeName_props={veridekiİsletmeName}/>
</div>
<div className="chart">
  
  <ApexCharts key={veridekiİsletmeName} width={500} data1_2023={ort_ag_ariza_giderme_suresi_verisi}  
/*  data1_2024={data2_2024_AG_KESİNTİ_SAYISI}*/ title={`${veridekiİsletmeName} ORT AG  ARIZA GİDERME SÜRESİ DAKİKA`}
   X_axis={categories_Aylik} isletmeName_props={veridekiİsletmeName}/>
</div>
<div className="chart">
  
  <ApexCharts key={veridekiİsletmeName} width={500} data1_2023={toplam_uzun_og_ariza_sayisi_verisi}  
/*  data1_2024={data2_2024_AG_KESİNTİ_SAYISI}*/ title={`${veridekiİsletmeName} TOPLAM UZUN OG ARIZA SAYISI`}
   X_axis={categories_Aylik} isletmeName_props={veridekiİsletmeName}/>
</div>
<div className="chart">
  
  <ApexCharts key={veridekiİsletmeName} width={500} data1_2023={toplam_uzun_ag_ariza_sayisi_verisi}  
/*  data1_2024={data2_2024_AG_KESİNTİ_SAYISI}*/ title={`${veridekiİsletmeName} TOPLAM UZUN AG ARIZA SAYISI`}
   X_axis={categories_Aylik} isletmeName_props={veridekiİsletmeName}/>
</div>

<div className="chart">
  
  <ApexCharts key={veridekiİsletmeName} width={500} data1_2023={toplam__kisa_og_ariza_sayisi_verisi}  
/*  data1_2024={data2_2024_AG_KESİNTİ_SAYISI}*/ title={`${veridekiİsletmeName} TOPLAM KISA AG ARIZA SAYISI`}
   X_axis={categories_Aylik} isletmeName_props={veridekiİsletmeName}/>
</div>
</div>  </div>
    
      

    { /* {excelData.length > 0 && (
        <div style={{ marginTop: 20 }}>
          <Typography variant="h6">Excel Verisi Önizleme (İlk 20 Satır)</Typography>
          <DataTable
            data={previewData}
            columns={excelColumns}
            selectedColumns={Object.values(columnMapping).filter(Boolean)}
            dateColumns={[
              columnMapping.baslamaTarihi,
              columnMapping.bitisTarihi
            ]}
          />
        </div>
      )}  */}
      
    </div>






  );
}
