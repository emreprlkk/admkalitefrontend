 
//import MonthlyColumnChart from "./eamchart";
 
//import Timeline from "./timeline";
 
//import { useState,useEffect } from "react";
//import StatsSlider from "../../features/stats/components/StatsSlider/StatsSlider";
// import { useDataStore,useSelectedNavbar } from "../../zustand/store";
import App ,{ExcelIndirButton}from "./materialtable";
 

 

export default function EAM() {
 // const [selected, setSelected] = useState({ group: "Products", key: "overview" });
// const dataEamJson=useDataStore((state)=>state.data )
 
 
 return (
    <div className="min-h-screen  bg-gradient-to-br from-slate-100 to-blue-50   p-4" >
      <div className="relative  h-30 flex items-center justify-center p-4   ">
 
      </div>
   
      <div className="flex flex-col  container  mx-auto   ">
        
     
   
    

  <App/>
    
   <ExcelIndirButton/>

     
         
          </div>
       
      </div>

  );
}
