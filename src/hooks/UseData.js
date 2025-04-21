import { useContext } from "react";
import { DataContextx } from "contexts/DataContext";


export const use2025SaidiSaifiData=()=>
{
const contextData=useContext (DataContextx) 
const {Datax,updateDatax}=contextData
if (!contextData) {
    throw new Error("useExcelData must be used within an ExcelDataProvider");
  }

  const DataHandle=(updateArray)=> {
console.log("çalışıyor")

    const newData = { ...Datax };
  
    updateArray.forEach(item => {
      // Gelen sorgu sonucundaki "ay" değeri doğrudan state içindeki anahtar ile eşleşiyor
      const monthKey = item.ay; 
    //  console.log("Updating month:", monthKey);
      
      // Eğer belirtilen ay state içerisinde varsa
      if(newData[monthKey]) {
        //  console.log("girdi monteky ne data")
        // İlgili ay içindeki ilçeler arasında, "isletme" adı eşleşen girdiyi bul
        const districtEntry = Object.entries(newData[monthKey]).
        find(
          ([, districtData]) => districtData.name === item.isletme
        );
        
        if (districtEntry) {
          //console.log("girdi distric")
          const [districtId, districtData] = districtEntry;
          newData[monthKey][districtId] = {
            ...districtData,
            SAİDİ: item.saidi_isletme,
            SAİFİ: item.saifi_isletme,
           
          };
        } else {
          console.warn(`No matching district found for isletme "${item.isletme}" in month ${monthKey}`);
        }
      } else {
        console.warn(`Month ${monthKey} is not found in data`);
      }
    });
    //console.log("datancontexteki herhangi bir veri ",data[1][1])
   
    updateDatax(newData);



      

}
return {Datax,DataHandle};
}


