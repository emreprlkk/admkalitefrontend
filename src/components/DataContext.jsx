/*import { useContext, useState } from 'react';
import {ExcelJsonData} from 'contexts/ExcelJsonContext'
import { DataContext } from 'contexts/DataContext';



export const useData = () => useContext(DataContext);
export  const useExelJsonData=()=>useContext(ExcelJsonData);
export const DataProvider = ({ children }) => {
    const [data, setData] = useState(initialState);
    const[excelToJsonDataConverted,setexcelToJsonDataConverted]=useState({})
  
    const updateSaidiSaifi = (updateArray) => {
      const newData = { ...data };
  
      updateArray.forEach(item => {
        // Gelen sorgu sonucundaki "ay" değeri doğrudan state içindeki anahtar ile eşleşiyor
        const monthKey = item.ay; 
      //  console.log("Updating month:", monthKey);
        
        // Eğer belirtilen ay state içerisinde varsa
        if(newData[monthKey]) {
          //  console.log("girdi monteky ne data")
          // İlgili ay içindeki ilçeler arasında, "isletme" adı eşleşen girdiyi bul
          const districtEntry = Object.entries(newData[monthKey]).find(
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
      setData(newData);
    };
  
    return (
      <ExcelJsonData.Provider value={{excelToJsonDataConverted,setexcelToJsonDataConverted}}> 
      <DataContext.Provider value={{ data, updateSaidiSaifi }}>
        {children}
      </DataContext.Provider>
      </ExcelJsonData.Provider>
    );
  };
  */
  

/*
  import React, { createContext, useContext, useState } from 'react';

  const RawDataContext = createContext();
  const SettingsContext = createContext();
  
  export const useRawData = () => useContext(RawDataContext);
  export const useSettings = () => useContext(SettingsContext);
  
  export const DataProvider = ({ children }) => {
    const [rawData, setRawData] = useState({});         // Ham excel verisi
    const [settings, setSettings] = useState({});       // Ayarlar veya filtreler
  
    return (
      <RawDataContext.Provider value={{ rawData, setRawData }}>
        <SettingsContext.Provider value={{ settings, setSettings }}>
          {children}
        </SettingsContext.Provider>
      </RawDataContext.Provider>
    );
  };*/
  



  