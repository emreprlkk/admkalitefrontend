import React, { useState,useCallback, memo } from "react";
import { Tabs, Tab, Box, Typography } from "@mui/material";
import { SummaryGraph } from "./SummaryGraph.jsx";
import  HeatMap  from "./HeatMap.jsx";
import { SaidiSaifiGraph } from "./SaidiSaifiGraph.jsx";
const Tabb = ({ isletme,navbarbolgecount,navbarisletmecount }) => {
  const [value, setValue] = useState(0);

  // useCallback ile handleChange'i memoize et
  const handleChange = useCallback((event, newValue) => {
    setValue(newValue);
  }, []);

  // React.memo ile Tab1Component'i sarmalla
  const MemoizedTab1Component = memo(({ isletme,navbarbolgecount,navbarisletmecount }) => (
    <Typography variant="body1">
      <SaidiSaifiGraph isletme={isletme} navbarbolgecount={navbarbolgecount} navbarisletmecount={navbarisletmecount} />
    </Typography>
  ));

  return (
    <Box sx={{ width: "100%" }}>
      {/* Tabs bileşeni */}
      <Tabs
        value={value}
        onChange={handleChange}
        centered
        textColor="secondary"
      
        indicatorColor="primary"
      >
        <Tab color="white" label="SAİDİ & SAİFİ VERİLERİ " />
        <Tab label="ÖZET GRAFİKLER" />
        <Tab label="GÜNLÜK KIRILIMLAR" />
      </Tabs>

      {/* Tab içerikleri */}
      <Box sx={{ p: 3 }}>
        {value === 0 && <MemoizedTab1Component isletme={isletme} navbarbolgecount={navbarbolgecount} navbarisletmecount={navbarisletmecount} />}
        {value === 1 && <Tab2Component />}
        {value === 2 && <Tab3Component />}
      </Box>
    </Box>
  );
};

// Diğer tab bileşenleri
const Tab2Component = () => (
  <Typography variant="body1">
    <SummaryGraph />
  </Typography>
);

const Tab3Component = () => (
  <Typography variant="body1">
    <HeatMap />
  </Typography>
);

export default Tabb;