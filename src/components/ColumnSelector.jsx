import React from "react";
import {
  Box,
  Card,
  CardContent,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Typography,
  Alert 
} from "@mui/material";


const ColumnSelector = ({ columnMapping, excelColumns, handleMappingChange }) => {
  return (
    <Card sx={{ maxWidth: 600, mx: "auto", my: 3, boxShadow: 3 }}>
      <CardContent>
        {/* Başlık */}
        <Typography variant="h6" gutterBottom sx={{ textAlign: "center", fontWeight: "bold" }}>
          Yüklenen Excel Dosyasındaki Kolonlardan Seçim Yapın
        </Typography>

        {/* Seçim Alanları */}
        <Stack
          direction="row"
          flexWrap="wrap"
          gap={2}
          justifyContent="center"
          sx={{ mt: 2 }}
        >
          {Object.keys(columnMapping).map((key) => (
            <FormControl key={key} size="small" sx={{ minWidth: 120 }}>
              <InputLabel>{key.replace(/([A-Z])/g, " $1").trim()}</InputLabel>
              <Select
                value={columnMapping[key]}
                onChange={(e) => handleMappingChange(key, e.target.value)}
              >
                {excelColumns.map((col) => (
                  <MenuItem key={col} value={col}>
                    {col}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          ))}
        </Stack>
      </CardContent>
    </Card>
  );
};

export default ColumnSelector;
