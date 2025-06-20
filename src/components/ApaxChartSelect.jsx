import React, { useState } from "react";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export const  ApaxChartSelect=({chartId,onSendMessage})=> {
 const [selectedvalue,setselectedvalue]=useState(3);
// `
  const handleChange =(e)=> {
     const newValue = e.target.value;
    
    setselectedvalue(newValue)
    onSendMessage(chartId,newValue); // State güncellendikten sonra callback çağrıldı
  }

  return (
    <Box sx={{ minWidth: 60 }}>
      <FormControl color='secondary'  sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel id="demo-simple-select-label">PUAN</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectedvalue} // value prop'u eklendi
          label="PUAN"
          onChange={handleChange}
        >
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={5}>5</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
