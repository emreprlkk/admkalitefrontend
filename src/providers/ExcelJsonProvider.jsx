import React,{ useState,useMemo} from 'react'
import { ExcelJsonData } from 'contexts/ExcelJsonContext'

export const ExcelJsonProvider=({children})=> {

const [ExcelJsonDatax,setExcelJsonDatax]=useState([])

 const updateSetExcelJsonData=(newJsonData)=> {
    setExcelJsonDatax(newJsonData);

    


 }
  // ✅ useMemo ile değer sadece ExcelJsonDatax ya da setExcelJsonDatax değiştiğinde yeniden hesaplanır
 const memoizedValue=useMemo(()=> {

   return {ExcelJsonDatax,updateSetExcelJsonData};
 },[ExcelJsonDatax]
 // setExcelJsonDatax sabit referans olduğu için dependency'e gerek yok


)
 return (
<ExcelJsonData.Provider value={memoizedValue}>
{children}

</ExcelJsonData.Provider>

 );



}