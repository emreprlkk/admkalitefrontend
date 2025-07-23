import React, { useState, useCallback, memo } from "react";
import { Tabs, Tab, Box, Typography } from "@mui/material";
import { SummaryGraph } from "./SummaryGraph.jsx";
import HeatMap from "./HeatMap.jsx";
import { SaidiSaifiGraph } from "./SaidiSaifiGraph.jsx";
import { SaidiSaifiGraphEdas } from "./SaidiSaifiGraphEdas.jsx";
import DrillDownChart from "./DrillDownChart.jsx";
import  OdeApexCharts  from "./OdeApexChart.jsx";
// 🔹 Tab 1: Saidi + Summary
const Tab1Component = memo(({ isletme, navbarbolgecount, navbarisletmecount }) => (
  <Typography variant="body1">
    <SaidiSaifiGraph isletme={isletme} navbarbolgecount={navbarbolgecount} navbarisletmecount={navbarisletmecount} />
    <SaidiSaifiGraphEdas   />
  </Typography>
));

// 🔹 Tab 2: Saidi + Summary
const Tab2Component = memo(({ isletme, navbarbolgecount, directnavbardangelenisletmecount }) => (
  <Typography variant="body1">
    <OdeApexCharts  
     directisletmecount={directnavbardangelenisletmecount} />
 
  </Typography>
));


// 🔹 Tab 3: Sadece özet grafik
const Tab3Component = ({ isletme, navbarbolgecount, navbarisletmecount ,directnavbardangelenisletmecount}) => (
  <Typography variant="body1">
    <SummaryGraph isletme={isletme}  navbarisletmecount={navbarisletmecount} directnavbardangelenisletmecount={directnavbardangelenisletmecount} />
  </Typography>
);

// 🔹 Tab 4: Isı haritası
const Tab4Component = () => (
  <Typography variant="body1">
    <HeatMap />
  </Typography>
);

// 🔹 Tab 5: DrillDownChart (2 kez render ediliyor örnek olarak)
const Tab5Component = () => (
  <Typography variant="body1">
    <DrillDownChart />
    <DrillDownChart />
  </Typography>
);

// 🔹 Ana Tab bileşeni
const Tabb = ({ isletme, navbarbolgecount, navbarisletmecount,directnavbardangelenisletmecount   }) => {
  const [value, setValue] = useState(0);
console.log("tabb a geçen " ,directnavbardangelenisletmecount)
  const handleChange = useCallback((event, newValue) => {
    setValue(newValue);
  }, []);

  const tabContent = [
    <Tab1Component key="tab1" isletme={isletme} navbarbolgecount={navbarbolgecount} navbarisletmecount={navbarisletmecount} />,
     <Tab2Component key="tab2"   navbarbolgecount={navbarbolgecount} directnavbardangelenisletmecount={directnavbardangelenisletmecount} />,
    <Tab3Component key="tab3" isletme={isletme} navbarbolgecount={navbarbolgecount} navbarisletmecount={navbarisletmecount} directnavbardangelenisletmecount={directnavbardangelenisletmecount}  />,
    <Tab4Component key="tab4" />,
    <Tab5Component key="tab5" />,
  ];

  return (
    <Box sx={{ width: "100%" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        centered
        textColor="secondary"
        indicatorColor="primary"
      >
        <Tab label="SAİDİ & SAİFİ VERİLERİ" />
        <Tab label="ORTALAMA DAĞITILAMAYAN ENERJİ VERİLERİ" />
        <Tab label="ÖZET GRAFİKLER" />
        <Tab label="GÜNLÜK KIRILIMLAR" />
        <Tab label="Bütünden > Özele Grafikler" />
      </Tabs>

      <Box sx={{ p: 3 }}>
        {tabContent[value]}
      </Box>
    </Box>
  );
};

export default Tabb;
