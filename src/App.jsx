// src/App.jsx
import React,  { useEffect, useState} from 'react';
//import DropzoneArea from './components/DropzoneArea';
//import DataTable from './components/DataTable';

import ExcelPreview from './components/ExcelPreview';

import * as XLSX from 'xlsx';

 
import { DataProvider/*,useData */ } from './components/DataContext'
function App() {
 // const { datax } = useData();

//console.log("dataxappjs ",datax)
  return (
    <DataProvider>
    <div className='main-container'>
       
     <h1 style={{color:"tomato"}}> ADM DASHBOARD </h1>
           <h3 style={{color:"tomato" } }> ADM Sistem İşletme Müdürlüğü </h3>
         {/*<div style={{color:"tomato" } }> Developer By Emre PARLAK </div> */}  
   

    
      <div >
        

       <ExcelPreview /> 
    

      </div>


    </div>
    </DataProvider>
  );
}

export default App;


// X=>excel XX=>tab xx=>saidisaifigraph xxxy=>apechart