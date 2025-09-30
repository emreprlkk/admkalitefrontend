import React from 'react';

const Timeline= ({statugecisi=[]}) => {
  
  
  const timelineData = [
    {
      
      asama: "Oluşt.",
      position: "start"
    },
    {
       
      asama: "Atandı",
      position: "end",
      duration: "14 sn"
    },
    {
      
      asama: "Üstlendi",
      position: "start",
      duration: "3 s"
    },
    {
    
      asama: "Yola Ç.",
      position: "end",
      duration: "6 s"
    },
    {
   
      asama: "Ulaşıldı",
      position: "start",
      duration: "8 dk"
    }
    ,
    {
   
      asama: "Başlandı",
      position: "start",
      duration: "8 s"
    }
    ,
    {
   
      asama: "Tamaml.",
      position: "start",
      duration: "8 s"
    }
  ];

  function renameProppety (arr){

      return arr.map(obj => {
    const entries = Object.entries(obj);
    const [firstKey, firstValue] = entries[0];

    const newObj = { [firstKey]: firstValue };

    for (let i = 1; i < entries.length; i++) {
      const [, value] = entries[i];
      newObj["duration"] = value; // overwrite olacağı için sadece sonuncu kalır
    }

    return newObj;
  });
  }

  const xy =renameProppety(statugecisi)
  const kesintili_arıza_is_emri_Statu=statugecisi?.filter((item)=>item["İş Emri Tipi"]==="Kesintili Arıza İE")
  console.log("asdasdas" ,kesintili_arıza_is_emri_Statu)
  return (
    <div className="mb-2 mr-2 ml-2 bg-secondary-content border-4 mt-0.5 rounded-2xl   overflow-x-auto">
   
      <h2 className="text-2xl text-black font-bold mb-8 text-center">EAM İŞ EMRİ STATÜ GEÇİŞLERİ</h2>
      
      <div className="flex  items-center  ">
        {xy.map((item, index) => (
          <div key={index} className="flex items-center">
            {/* Timeline Item */}
            <div className="w-16 flex-none items-center">
              {/* Product Box */}
              <div className=" w-16 h-8 py-2 bg-black text-primary-content    rounded-lg shadow-md mb-4   text-center   ">
                <div className="h-4 font-semibold text-xs/2 py-0.5">{item.asama}</div>
                
              </div>
              
              {/* Timeline Point */}
              <div className="w-4 h-4 bg-cyan-600 rounded-full border-4 border-white shadow-md ml-4 "></div>
            </div>
            
            {/* Connection Line with Duration */}
            {index < xy.length - 1 && (
              <div className="flex flex-col items-center ">
                {/* Duration Label */}
                {xy[index + 1].duration && (
                  <div className="text-xs font-serif text-secondary  rounded-l border border-primary/30 mb-4 whitespace-nowrap">
                    {xy[index + 1].duration}
                  </div>
                )}
                
                {/* Connecting Line */}
                <div className="w-12 h-0.5 bg-primary/30"></div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline