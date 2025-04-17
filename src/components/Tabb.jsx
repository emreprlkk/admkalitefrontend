import React, { useState, useCallback, memo } from "react";
import { Tabs, Tab, Box, Typography } from "@mui/material";
import { SummaryGraph } from "./SummaryGraph.jsx";
import HeatMap from "./HeatMap.jsx";
import { SaidiSaifiGraph } from "./SaidiSaifiGraph.jsx";
import DrillDownChart from "./DrillDownChart.jsx";

// 🔹 Tab 1: Saidi + Summary
const Tab1Component = memo(({ isletme, navbarbolgecount, navbarisletmecount }) => (
  <Typography variant="body1">
    <SaidiSaifiGraph isletme={isletme} navbarbolgecount={navbarbolgecount} navbarisletmecount={navbarisletmecount} />
    <SummaryGraph isletme={isletme} navbarbolgecount={navbarbolgecount} navbarisletmecount={navbarisletmecount} />
  </Typography>
));

// 🔹 Tab 2: Sadece özet grafik
const Tab2Component = ({ isletme, navbarbolgecount, navbarisletmecount }) => (
  <Typography variant="body1">
    <SummaryGraph isletme={isletme} navbarbolgecount={navbarbolgecount} navbarisletmecount={navbarisletmecount} />
  </Typography>
);

// 🔹 Tab 3: Isı haritası
const Tab3Component = () => (
  <Typography variant="body1">
    <HeatMap />
  </Typography>
);

// 🔹 Tab 4: DrillDownChart (2 kez render ediliyor örnek olarak)
const Tab4Component = () => (
  <Typography variant="body1">
    <DrillDownChart />
    <DrillDownChart />
  </Typography>
);

// 🔹 Ana Tab bileşeni
const Tabb = ({ isletme, navbarbolgecount, navbarisletmecount }) => {
  const [value, setValue] = useState(0);

  const handleChange = useCallback((event, newValue) => {
    setValue(newValue);
  }, []);

  const tabContent = [
    <Tab1Component key="tab1" isletme={isletme} navbarbolgecount={navbarbolgecount} navbarisletmecount={navbarisletmecount} />,
    <Tab2Component key="tab2" isletme={isletme} navbarbolgecount={navbarbolgecount} navbarisletmecount={navbarisletmecount} />,
    <Tab3Component key="tab3" />,
    <Tab4Component key="tab4" />,
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
