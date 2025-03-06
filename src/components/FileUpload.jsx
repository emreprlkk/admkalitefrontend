import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

const FileUpload = ({ handleFileChange }) => {
  const [fileName, setFileName] = useState("");

  const onFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name); // Seçilen dosyanın adını göster
      handleFileChange(event); // Ana bileşene bildir
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 2,
        border: "2px dashed #1976d2",
        padding: "20px",
        borderRadius: "12px",
        backgroundColor: "#f5f5f5",
        textAlign: "center",
        maxWidth: "400px",
        margin: "auto",
      }}
    >
      <input
        type="file"
        accept=".xlsx, .xls"
        onChange={onFileChange}
        
        id="file-upload"
        style={{ display: "none" }} // Input'u gizliyoruz
      />
      <label htmlFor="file-upload">
        <Button
          variant="contained"
          component="span"
          startIcon={<CloudUploadIcon />}
          sx={{ textTransform: "none" }}
        >
          Dosya Yükle
        </Button>
      </label>

      {fileName ? (
        <Typography variant="body2" color="textSecondary">
          Seçilen Dosya: <strong>{fileName}</strong>
        </Typography>
      ) : (
        <Typography variant="body2" color="textSecondary">
          Lütfen bir Excel dosyası seçin (.xlsx, .xls)
        </Typography>
      )}
    </Box>
  );
};

export default FileUpload;
