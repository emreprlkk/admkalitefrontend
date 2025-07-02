import React, { useState, useEffect, useCallback,useMemo} from 'react';
import * as XLSX from 'xlsx';
import { Box, Button, Alert,Snackbar } from '@mui/material';
import { formatKesintiVerisi } from './Loadash';
import alasql from 'alasql';
 
//import NavbarBolge from './NavbarBolge'; 
import Navbarİsletme from './NavbarIsletme';
import {use2025SaidiSaifiData} from 'hooks/UseData'
import { useExcelJsonData } from 'hooks/UseExceLjsonData';
import ColumnSelector from './ColumnSelector'
import FileUpload from './FileUpload';
import Tabb from './Tabb.jsx'



// Türkçe karakterleri temizleyen fonksiyon
function removeTurkishCharacters(str) {
  if (!str) return str;

  const charMap = {
    'Ğ': 'G', 'Ü': 'U', 'Ş': 'S', 'İ': 'I', 'Ö': 'O', 'Ç': 'C',
    'ğ': 'g', 'ü': 'u', 'ş': 's', 'ı': 'i', 'ö': 'o', 'ç': 'c'
  };

  return str.replace(/[ĞÜŞİÖÇğüşıöç]/g, (char) => charMap[char] || char);
}

export default function ExcelPreview() {
 
  const [excelData, setExcelData] = useState([]);
  const [excelColumns, setExcelColumns] = useState([]); // UPLOAD EDİLEN EXCEL=>JSON A ÇEVRİLİR OBJECTKEYSLER TÜRKÇE KARAKTERDEN ARINDIRILIR VE ARINDIRILAN İLK SATIRIN OBJECTKEYLERİ BU STATE TE TUTULUR
  const [isletmeName, setIsletmeName] = useState('ADM');
  const [navbardangelenbolgecount,setnavbardangelenbolgecount]=useState(920481);
  const [navbardangelenisletmecount,setnavbardangelenisletmecount]=useState(1);
  const [directnavbardangelenisletmecount,setdirectnavbardangelenisletmecount]=useState(1);
  const { DataHandle } = use2025SaidiSaifiData();
  const {updateSetExcelJsonData}=useExcelJsonData();
  //const [executionCount,SetexecutionCount]=useState(18);
  
 


  // Başlangıçta istediğiniz property'ler:
  const [ExcelColumnToObjectName, setExcelColumnToObjectName] = useState({
    kesintikodu:'',
    sebekeunsuru:'',
    il: '',
    ilce: '',
    sureyegore:'',
    kaynagagore:'',
    sebebegore: '',
    bildirimegore:'',
    toplamabonesayisi:'',
    baslamaTarihi: '',
    bitisTarihi: '',
  });
  const [open, setOpen] = useState(false);
  let [allSelectedData, setAllSelectedData] = useState([]);

  // Tarih formatlama fonksiyonu (opsiyonel)
  function parseExcelDate(serialDate ) {
    if (!serialDate) return null;
    // Excel 1904 sistemine göre dönüşüm
    const ms = (serialDate - 24107) * 86400 * 1000;
    return new Date(ms);
  }
  ///excel verisi json a dönüştükten sonra işleneceği fonksiyon kodu
  const CloumNameReplaceJsonData = (jsonData) => {
    if (!jsonData || jsonData.length === 0) return [];
     // İlk satırdaki key'leri al, Türkçe karakterlerden arındır
  const originalKeys = Object.keys(jsonData[0]);
  const sanitizedKeys = originalKeys.map(removeTurkishCharacters);

  // Her bir satır için sadece sanitized key'lere göre yeni nesne oluştur
  return jsonData.map((row) =>
    Object.fromEntries(
      sanitizedKeys.map((sanitizedKey, index) => [
        sanitizedKey,
        row[originalKeys[index]]
      ])
    )
  );
};
  
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
      //console.log("json data ",jsonData)
      // 1) Excel'den gelen kolon isimlerini ("key"lerini) sanitize ediyoruz.
      const sanitizedData = CloumNameReplaceJsonData(jsonData);
      //console.log(sanitizedData)

      // 2) Kolon isimleri dizisini de alıp temizliyoruz.
      if (sanitizedData.length > 0) {
        const firstRowKeys = Object.keys(sanitizedData[0]); //TÜRKÇE KARAKTERLERDEN KURTULMIU KOLON İSİMLERİNİ ALIR
        setExcelColumns(firstRowKeys); 
      }

      setExcelData(sanitizedData);
    } catch (err) {
      console.error('Excel dosyası okunamadı:', err);
    }
  }, []);
  //console.log("excel to json data " ,excelData)

  // Kullanıcının kolon seçimini güncelliyor.
  // Burada seçilen excel kolonunu da sanitize ederek saklıyoruz.
  const handleMappingChange = (mappingKey, excelCol) => {
    setExcelColumnToObjectName((prev) => ({
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
 const entireSelectedData = excelData.map((row) => {
   const selectedRow = {}; 
 // Tüm mapping key'lerini ("il", "ilce" vs.) gez 
 for (let mappingKey in ExcelColumnToObjectName) { const excelColName = ExcelColumnToObjectName[mappingKey];
   if (excelColName) { 
    selectedRow[mappingKey] = row[excelColName]; } 
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
        //console.log("entireSelectedData ",entireSelectedData)
        setAllSelectedData(entireSelectedData); },
         [ExcelColumnToObjectName, excelData]);



 
      // Örnek eşleştirme tablosu (Excel'den alınan verileri içeren dizi)
const districtMapping = [
  { ilce: "ACIPAYAM", isletme: "ACİPAYAM isletme", bolge: "DENİZLİ", isletmeabonecount: 128044,ilceabonecount:40683 },
  { ilce: "BABADAĞ", isletme: "SARAYKOY isletme", bolge: "DENİZLİ", isletmeabonecount: 58951,ilceabonecount:6761 },
  { ilce: "BAKLAN", isletme: "CİVRİL isletme", bolge: "DENİZLİ", isletmeabonecount: 86329,ilceabonecount:4392 },
  { ilce: "BEKİLLİ", isletme: "CİVRİL isletme", bolge: "DENİZLİ", isletmeabonecount: 86329,ilceabonecount:7000 },
  { ilce: "BEYAĞAÇ", isletme: "ACİPAYAM isletme", bolge: "DENİZLİ", isletmeabonecount: 128044,ilceabonecount:4241 },
  { ilce: "BODRUM", isletme: "BODRUM isletme", bolge: "BODRUM", isletmeabonecount: 163470,ilceabonecount:156966 },
  { ilce: "BOZDOĞAN", isletme: "NAZİLLİ isletme", bolge: "AYDIN", isletmeabonecount: 193851,ilceabonecount:21489 },
  { ilce: "BOZKURT", isletme: "CİVRİL isletme", bolge: "DENİZLİ", isletmeabonecount: 86329,ilceabonecount:8235 },
  { ilce: "BUHARKENT", isletme: "NAZİLLİ isletme", bolge: "AYDIN", isletmeabonecount: 193851,ilceabonecount:9203 },
  { ilce: "BULDAN", isletme: "SARAYKOY isletme", bolge: "DENİZLİ", isletmeabonecount: 58951,ilceabonecount:21723 },
  { ilce: "ÇAL", isletme: "CİVRİL isletme", bolge: "DENİZLİ", isletmeabonecount: 86329,ilceabonecount:16216 },
  { ilce: "ÇAMELİ", isletme: "ACİPAYAM isletme", bolge: "DENİZLİ", isletmeabonecount: 128044,ilceabonecount:15022 },
  { ilce: "ÇARDAK", isletme: "CİVRİL isletme", bolge: "DENİZLİ", isletmeabonecount: 86329,ilceabonecount:5945 },
  { ilce: "ÇİNE", isletme: "CİNE isletme", bolge: "AYDIN", isletmeabonecount: 47052,ilceabonecount: 37132 },
  { ilce: "ÇİVRİL", isletme: "CİVRİL isletme", bolge: "DENİZLİ", isletmeabonecount: 86329,ilceabonecount: 43235 },
  { ilce: "DALAMAN", isletme: "ORTACA isletme", bolge: "MUGLA", isletmeabonecount: 112452,ilceabonecount: 36973 },
  { ilce: "DATÇA", isletme: "MARMARİS isletme", bolge: "MUGLA", isletmeabonecount: 94384,ilceabonecount: 28407 },
  { ilce: "DİDİM", isletme: "DİDİM isletme", bolge: "AYDIN", isletmeabonecount: 120647,ilceabonecount: 120647 },
  { ilce: "EFELER", isletme: "AYDİN MERKEZ isletme", bolge: "AYDIN", isletmeabonecount: 267285,ilceabonecount: 172358 },
  { ilce: "FETHİYE", isletme: "FETHİYE isletme", bolge: "MUGLA", isletmeabonecount: 187945,ilceabonecount: 129712 },
  { ilce: "GERMENCİK", isletme: "AYDİN MERKEZ isletme", bolge: "AYDIN", isletmeabonecount: 267285,ilceabonecount: 26616 },
  { ilce: "GÜNEY", isletme: "SARAYKOY isletme", bolge: "DENİZLİ", isletmeabonecount: 58951,ilceabonecount: 7814 },
  { ilce: "HONAZ", isletme: "DENİZLİ MERKEZ isletme", bolge: "DENİZLİ", isletmeabonecount: 423591,ilceabonecount: 17137 },
  { ilce: "İNCİRLİOVA", isletme: "AYDİN MERKEZ isletme", bolge: "AYDIN", isletmeabonecount: 267285,ilceabonecount: 30861 },
  { ilce: "KALE", isletme: "ACİPAYAM isletme", bolge: "DENİZLİ", isletmeabonecount: 128044,ilceabonecount: 12980 },
  { ilce: "KARACASU", isletme: "NAZİLLİ isletme", bolge: "AYDIN", isletmeabonecount: 193851,ilceabonecount: 12182 },
  { ilce: "KARPUZLU", isletme: "CİNE isletme", bolge: "AYDIN", isletmeabonecount: 47052,ilceabonecount: 8714 },
  { ilce: "KAVAKLIDERE", isletme: "MUGLA MERKEZ isletme", bolge: "MUGLA", isletmeabonecount: 140309,ilceabonecount: 7865 },
  { ilce: "KOÇARLI", isletme: "AYDİN MERKEZ isletme", bolge: "AYDIN", isletmeabonecount: 267285,ilceabonecount: 15162 },
  { ilce: "KÖŞK", isletme: "AYDİN MERKEZ isletme", bolge: "AYDIN", isletmeabonecount: 267285,ilceabonecount: 16333 },
  { ilce: "KÖYCEĞİZ", isletme: "ORTACA isletme", bolge: "MUGLA", isletmeabonecount: 112452,ilceabonecount: 27871 },
  { ilce: "KUŞADASI", isletme: "KUSADASİ isletme", bolge: "AYDIN", isletmeabonecount: 146423,ilceabonecount: 146423 },
  { ilce: "KUYUCAK", isletme: "NAZİLLİ isletme", bolge: "AYDIN", isletmeabonecount: 193851,ilceabonecount: 19310 },
  { ilce: "MARMARİS", isletme: "MARMARİS isletme", bolge: "MUGLA", isletmeabonecount: 94384,ilceabonecount: 63852 },
  { ilce: "MENTEŞE", isletme: "MUGLA MERKEZ isletme", bolge: "MUGLA", isletmeabonecount: 140309,ilceabonecount: 76036 },
  { ilce: "MERKEZEFENDİ", isletme: "DENİZLİ MERKEZ isletme", bolge: "DENİZLİ", isletmeabonecount: 423591,ilceabonecount: 194090 },
  { ilce: "MİLAS", isletme: "MİLAS isletme", bolge: "BODRUM", isletmeabonecount: 115053,ilceabonecount: 115053 },
  { ilce: "NAZİLLİ", isletme: "NAZİLLİ isletme", bolge: "BODRUM", isletmeabonecount: 193851,ilceabonecount: 103383 },
  { ilce: "ORTACA", isletme: "ORTACA isletme", bolge: "MUGLA", isletmeabonecount: 112452,ilceabonecount: 42197 },
  { ilce: "PAMUKKALE", isletme: "DENİZLİ MERKEZ isletme", bolge: "DENİZLİ", isletmeabonecount: 423591,ilceabonecount: 201893 },
  { ilce: "SARAYKÖY", isletme: "SARAYKOY isletme", bolge: "DENİZLİ", isletmeabonecount: 58951,ilceabonecount: 21272 },
  { ilce: "SERİNHİSAR", isletme: "ACİPAYAM isletme", bolge: "DENİZLİ", isletmeabonecount: 128044,ilceabonecount: 10902 },
  { ilce: "SEYDİKEMER", isletme: "FETHİYE isletme", bolge: "MUGLA", isletmeabonecount: 187945,ilceabonecount: 49559 },
  { ilce: "SÖKE", isletme: "SOKE isletme", bolge: "AYDIN", isletmeabonecount: 71076,ilceabonecount: 71076 },
  { ilce: "SULTANHİSAR", isletme: "NAZİLLİ isletme", bolge: "AYDIN", isletmeabonecount: 193851,ilceabonecount: 14751 },
  { ilce: "TAVAS", isletme: "ACİPAYAM isletme", bolge: "DENİZLİ", isletmeabonecount: 128044,ilceabonecount: 41394 },
  { ilce: "ULA", isletme: "MUGLA MERKEZ isletme", bolge: "MUGLA", isletmeabonecount: 140309,ilceabonecount: 22988 },
  { ilce: "YATAĞAN", isletme: "MUGLA MERKEZ isletme", bolge: "MUGLA", isletmeabonecount: 140309,ilceabonecount: 29747 },
  { ilce: "YENİPAZAR", isletme: "NAZİLLİ isletme", bolge: "AYDIN", isletmeabonecount: 193851,ilceabonecount: 9890 },
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





  const executeAlasqlSadiSaifiQuery = (excelData) => {
  
    if (!excelData || excelData.length === 0) {
      console.log("Excel verisi boş!");
      return [];
    }
  
    // **AlaSQL işlemleri**


   /* il: '',
    ilce: '',
    sureyegore:'',
    kaynagagore:'',
    sebebegore: '',
    bildirimegore:'',*/
 //   console.log(excelData)
    const baseData = alasql(`
      SELECT 
         isletme,
        kesintikodu AS kod,
        ROUND(timestampdiff(second, baslamaTarihi, bitisTarihi) / 60,2) AS kesinti_suresi_dakika,
        toplamabonesayisi,
        isletmeabonecount,
        kaynagagore,
        sureyegore,
        sebebegore,
        bildirimegore,
        baslamaTarihi,
        bitisTarihi,
        MONTH(baslamaTarihi) AS ay
      FROM ?
     WHERE baslamaTarihi >= new Date('2025-02-01 00:00:00') and bitisTarihi <= new Date('2030-01-01 00:00:00') 
      GROUP BY  MONTH(baslamaTarihi),isletme, kesintikodu, kaynagagore, sureyegore, sebebegore, bildirimegore, baslamaTarihi, bitisTarihi, ay,toplamabonesayisi,isletmeabonecount
      ORDER BY MONTH(baslamaTarihi) ASC
    `, [excelData]);
  
    //console.log("baseData ",baseData)
    let saidiData = alasql(`
    SELECT 
      ay, isletme,
      ROUND(
        sum(case when kaynagagore in ('Dağıtım-OG', 'Dağıtım-AG') 
            and sureyegore = 'Uzun'
            and sebebegore in ('Şebeke işletmecisi','Dışsal')
            and bildirimegore = 'Bildirimsiz'
          then (toplamabonesayisi*kesinti_suresi_dakika)/isletmeabonecount
          else 0 end), 2) as saidi_isletme,
  
      ROUND(
        sum(case when kaynagagore in ('Dağıtım-OG', 'Dağıtım-AG') 
            and sureyegore = 'Uzun'
            and sebebegore in ('Şebeke işletmecisi')
            and bildirimegore = 'Bildirimsiz'
          then (toplamabonesayisi/isletmeabonecount)
          else 0 end), 2) as saifi_isletme,
           ROUND(
        avg(case when kaynagagore in ('Dağıtım-OG' ) 
            and sureyegore = 'Uzun'
            and sebebegore in ('Şebeke işletmecisi','Dışsal')
            and bildirimegore = 'Bildirimsiz'
          then kesinti_suresi_dakika
          else 0 end), 2) as ort_og_ariza_giderme_sureyegoresi,
            ROUND(
        avg(case when kaynagagore in ('Dağıtım-AG' ) 
            and sureyegore = 'Uzun'
            and sebebegore in ('Şebeke işletmecisi','Dışsal')
            and bildirimegore = 'Bildirimsiz'
          then kesinti_suresi_dakika
          else 0 end), 2) as ort_ag_ariza_giderme_sureyegoresi,
          ROUND(
        sum(case when kaynagagore in ('Dağıtım-OG' ) 
            and sureyegore = 'Uzun'
            and sebebegore in ('Şebeke işletmecisi','Dışsal')
            and bildirimegore = 'Bildirimsiz'
          then 1
          else 0 end), 2) as toplam_uzun_og_ariza_sayisi,
            ROUND(
        sum(case when kaynagagore in ('Dağıtım-AG' ) 
            and sureyegore = 'Uzun'
            and sebebegore in ('Şebeke işletmecisi','Dışsal')
            and bildirimegore = 'Bildirimsiz'
          then 1
          else 0 end), 2) as toplam_uzun_ag_ariza_sayisi,
          ROUND(
        sum(case when kaynagagore in ('Dağıtım-OG' ) 
            and sureyegore = 'Kısa'
            and sebebegore in ('Şebeke işletmecisi','Dışsal')
            and bildirimegore = 'Bildirimsiz'
          then 1
          else 0 end), 2) as toplam__kisa_og_ariza_sayisi
    FROM ?
    GROUP BY ay, isletme
    ORDER BY isletme ASC
  `, [baseData]);
      console.log("saidi data lenght ",saidiData.length)
    if (saidiData.length > 0 ) {
      // const filteredAndSortedData = saidiData
      //   .filter(row => row.isletme === isletmeName)
      //   .sort((a, b) => a.ay - b.ay);
  
      // saidi_verisi = filteredAndSortedData.map(row => row.saidi_isletme);
      // saifi_verisi = filteredAndSortedData.map(row => row.saifi_isletme);
      // ort_og_ariza_giderme_suresi_verisi=filteredAndSortedData.map(row => row.ort_og_ariza_giderme_suresi);
      // ort_ag_ariza_giderme_suresi_verisi=filteredAndSortedData.map(row => row.ort_ag_ariza_giderme_suresi);
      // toplam_uzun_og_ariza_sayisi_verisi=filteredAndSortedData.map(row => row.toplam_uzun_og_ariza_sayisi);
      // toplam_uzun_ag_ariza_sayisi_verisi=filteredAndSortedData.map(row => row.toplam_uzun_ag_ariza_sayisi);
      // toplam__kisa_og_ariza_sayisi_verisi=filteredAndSortedData.map(row => row.toplam__kisa_og_ariza_sayisi);
      
    }
  
 console.log("saidi data ",saidiData);
    
    return saidiData;
  };



   /* il: '',
    ilce: '',
    sureyegore:'',
    kaynagagore:'',
    sebebegore: '',
    bildirimegore:'',*/
 //   console.log(excelData)
  // useMemo ile hesaplama sadece data değişince yapılır

 
  // **Kullanım Örneği**
  const queryResultsSaidiSaifi = executeAlasqlSadiSaifiQuery(allSelectedData);
  console.log(queryResultsSaidiSaifi)
  console.log("allSelectedData ",allSelectedData)
  const grupluVeri = useMemo(() => formatKesintiVerisi(allSelectedData), [allSelectedData]);
  console.log("grupluVeri ",grupluVeri)
  // **AlaSQL işlemleri**
 // const queryResultsDailyHeatmap = executeAlaSQLDailyHeatMapQuery(allSelectedData);
  //console.log("queryResultsSaidiSaifi ",queryResultsSaidiSaifi)
//console.log("queryResultsDailyHeatmap ",queryResultsDailyHeatmap)
  // Verileri state'e set et
  const dd = () => {
    DataHandle(queryResultsSaidiSaifi);
    updateSetExcelJsonData(grupluVeri);
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
  
  const handleIsletmeChange = (newIsletmeName,bolgecount,İsletmecount,directİsletmecount) => {
    setIsletmeName(newIsletmeName); // isletmeName'i güncelliyoruz
    setnavbardangelenbolgecount(bolgecount);
    setnavbardangelenisletmecount( İsletmecount)
    
    setdirectnavbardangelenisletmecount(directİsletmecount)
   
  };
  // isletmeName değiştiği anda güncellenmiş değeri yakala
  useEffect(() => {
    console.log("Güncellenmiş İşletme Adı:", isletmeName);
    
  }, [isletmeName]); // isletmeName değiştiğinde tetiklenecek.
 

  return (
    
    <div className='manin-container'>
    
    {/*  <NavbarBolge  onIsletmeChange={handleIsletmeChange} /> */}
       <Navbarİsletme onIsletmeChange={handleIsletmeChange} /> {/* handleIsletmeChange fonksiyonunu prop olarak geçiyoruz */} {/* Navbar'ı burada render ediyoruz */}
     

      { <FileUpload handleFileChange={handleFileChange}/>}
      
      {excelData.length > 0 && (
        <div >
 

         <ColumnSelector columnMapping={ExcelColumnToObjectName}
          excelColumns={excelColumns} 
          handleMappingChange={handleMappingChange}/>
         <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "2vh", // Sayfanın tamamını kaplasın
      }}
    >
      <Button  sx={{ marginBottom: 3 }} // margin-bottom: 16px (MUI spacing factor * 8)
       variant="contained" color="primary" onClick={dd}>
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
      <div> 
        {< Tabb  isletme={isletmeName}
         navbarbolgecount={navbardangelenbolgecount}
          navbarisletmecount={navbardangelenisletmecount} 
          directnavbardangelenisletmecount={directnavbardangelenisletmecount}/> 
          }</div>


    
    
      

  
      
    </div>






  );
}
