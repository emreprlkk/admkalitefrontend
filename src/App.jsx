// src/App.jsx
import React,  { useEffect, useState} from 'react';
//import DropzoneArea from './components/DropzoneArea';
//import DataTable from './components/DataTable';

import ExcelPreview from './components/ExcelPreview';



import { MergeProvider } from './providers/MergeProvider';
function App() {
  document.title = "DASHBOARD"; // Tarayıcı sekmesinde görünmesini istediğiniz başlığı burada ayarlayın.
 // const { datax } = useData();

//console.log("dataxappjs ",datax)
  return (
    <MergeProvider>
    <div className='main-container'>
       
     <h1 style={{color:"tomato"}}> DEMO DASHBOARD </h1>
           <h2 style={{color:"tomato" } }>  Sistem İşletme Müdürlüğü </h2>
         {/*<div style={{color:"tomato" } }> Developer By Emre PARLAK </div> */}  
   

    
      <div >
        

       <ExcelPreview /> 
    

      </div>


    </div>
    </MergeProvider>
  );
}

export default App;


// X=>excel XX=>tab xx=>saidisaifigraph xxxy=>apechart