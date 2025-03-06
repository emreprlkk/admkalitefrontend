// src/App.jsx
import React,  { useEffect, useState} from 'react';
import DropzoneArea from './components/DropzoneArea';
import DataTable from './components/DataTable';

import ExcelPreview from './components/ExcelPreview';

import * as XLSX from 'xlsx';
 
import { DataProvider,useData  } from './components/DataContext'
 
function App() {

  
 
  



  return (
    <DataProvider>
    <div className='main-container'>
       
     <h1 style={{color:"tomato"}}> ADM DASHBOARD </h1>
           <h3 style={{color:"tomato" } }> ADM Sistem İşletme Müdürlüğü </h3>
         {/*<div style={{color:"tomato" } }> Developer By Emre PARLAK </div> */}  
      
           <h1 style={{color:"white"}}>SAİDİ VE SAİFİ VERİLERİ</h1>
   
    
      <div >
        

       <ExcelPreview /> 
    

      </div>


    </div>
    </DataProvider>
  );
}

export default App;
