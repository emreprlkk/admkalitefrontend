import { useContext } from 'react';
import { ExcelJsonData } from "contexts/ExcelJsonContext";

export const useExcelJsonData = () => {
    const contextExcelJsonData=useContext(ExcelJsonData);
    const {ExcelJsonDatax,updateSetExcelJsonData}=contextExcelJsonData
    if (!contextExcelJsonData) {
        throw new Error("useExcelData must be used within an ExcelDataProvider");
      }
      return {ExcelJsonDatax,updateSetExcelJsonData};

};