import React, { useState } from "react";
import ApexDonutChart from "./ApexDonutChart";
import { Stack, IconButton, Grid } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const DonutSlider = ({ dataList, perPage = 2 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const maxIndex = Math.max(dataList.length - perPage, 0);

  const next = () => {
    setCurrentIndex((prev) =>
      prev + perPage > maxIndex ? 0 : prev + perPage
    );
  };

  const prev = () => {
    setCurrentIndex((prev) =>
      prev - perPage < 0 ? maxIndex : prev - perPage
    );
  };

  const visibleData = dataList.slice(currentIndex, currentIndex + perPage);

  return (
    <Stack  sx={{ maxWidth: "1400px", width: "100%", margin: "0 auto" }} direction="row" alignItems="center" spacing={2} justifyContent="center">
      <IconButton onClick={prev} color="primary" size="large">
        <ArrowBackIosIcon />
      </IconButton>

      <Grid container spacing={2} justifyContent="center">
        {visibleData.map((data, idx) => (
          <Grid item key={idx}>
            <ApexDonutChart {...data} />
          </Grid>
        ))}
      </Grid>

      <IconButton onClick={next} color="primary" size="large">
        <ArrowForwardIosIcon />
      </IconButton>
    </Stack>
  );
};

export default DonutSlider;
