
import React,{useState,useMemo} from "react";
import { DataContextx } from "contexts/DataContext";
// Veri yapısını oluşturan initial state
const initialState2025 = {
    ///AYLARR
    
    "1": {
        "1": {
            "name": "ACİPAYAM isletme",
            "SAİDİ": 18.99,
            "SAİFİ": 0.85
        },
        "2": {
            "name": "AYDİN MERKEZ isletme",
            "SAİDİ": 52.56,
            "SAİFİ": 1.34
        },
        "3": {
            "name": "BODRUM isletme",
            "SAİDİ": 80.61,
            "SAİFİ": 1.54
        },
        "4": {
            "name": "CİNE isletme",
            "SAİDİ": 14.43,
            "SAİFİ": 0.51
        },
        "5": {
            "name": "CİVRİL isletme",
            "SAİDİ": 9.39,
            "SAİFİ": 0.31
        },
        "6": {
            "name": "DENİZLİ MERKEZ isletme",
            "SAİDİ": 9.56,
            "SAİFİ": 0.25
        },
        "7": {
            "name": "DİDİM isletme",
            "SAİDİ": 119.93,
            "SAİFİ": 1.29
        },
        "8": {
            "name": "FETHİYE isletme",
            "SAİDİ": 75.13,
            "SAİFİ": 2.19
        },
        "9": {
            "name": "KUSADASİ isletme",
            "SAİDİ": 28.77,
            "SAİFİ": 0.5
        },
        "10": {
            "name": "MARMARİS isletme",
            "SAİDİ": 73.97,
            "SAİFİ": 1.55
        },
        "11": {
            "name": "MİLAS isletme",
            "SAİDİ": 97.27,
            "SAİFİ": 1.6
        },
        "12": {
            "name": "MUGLA MERKEZ isletme",
            "SAİDİ": 91.93,
            "SAİFİ": 2.54
        },
        "13": {
            "name": "NAZİLLİ isletme",
            "SAİDİ": 13.35,
            "SAİFİ": 0.38
        },
        "14": {
            "name": "ORTACA isletme",
            "SAİDİ": 27.01,
            "SAİFİ": 0.95
        },
        "15": {
            "name": "SARAYKOY isletme",
            "SAİDİ": 12.83,
            "SAİFİ": 0.4
        },
        "16": {
            "name": "SOKE isletme",
            "SAİDİ": 126.23,
            "SAİFİ": 0.93
        }
    },
    "2": {
        "1": {
            "name": "ACİPAYAM isletme",
            "SAİDİ": 26.18,
            "SAİFİ": 0.84
        },
        "2": {
            "name": "AYDİN MERKEZ isletme",
            "SAİDİ": 35.95,
            "SAİFİ": 1.08
        },
        "3": {
            "name": "BODRUM isletme",
            "SAİDİ": 109.81,
            "SAİFİ": 1.38
        },
        "4": {
            "name": "CİNE isletme",
            "SAİDİ": 16.09,
            "SAİFİ": 0.54
        },
        "5": {
            "name": "CİVRİL isletme",
            "SAİDİ": 9.85,
            "SAİFİ": 0.69
        },
        "6": {
            "name": "DENİZLİ MERKEZ isletme",
            "SAİDİ": 11.08,
            "SAİFİ": 0.27
        },
        "7": {
            "name": "DİDİM isletme",
            "SAİDİ": 34.96,
            "SAİFİ": 1.15
        },
        "8": {
            "name": "FETHİYE isletme",
            "SAİDİ": 138.5,
            "SAİFİ": 2.72
        },
        "9": {
            "name": "KUSADASİ isletme",
            "SAİDİ": 24.9,
            "SAİFİ": 0.45
        },
        "10": {
            "name": "MARMARİS isletme",
            "SAİDİ": 22.51,
            "SAİFİ": 0.81
        },
        "11": {
            "name": "MİLAS isletme",
            "SAİDİ": 74.44,
            "SAİFİ": 1.3
        },
        "12": {
            "name": "MUGLA MERKEZ isletme",
            "SAİDİ": 50.39,
            "SAİFİ": 1.19
        },
        "13": {
            "name": "NAZİLLİ isletme",
            "SAİDİ": 12.82,
            "SAİFİ": 0.37
        },
        "14": {
            "name": "ORTACA isletme",
            "SAİDİ": 111.4,
            "SAİFİ": 1.64
        },
        "15": {
            "name": "SARAYKOY isletme",
            "SAİDİ": 8.12,
            "SAİFİ": 0.28
        },
        "16": {
            "name": "SOKE isletme",
            "SAİDİ": 30.64,
            "SAİFİ": 0.5
        }
    },
    "3": {
        "1": {
            "name": "ACİPAYAM isletme",
            "SAİDİ": 33.01,
            "SAİFİ": 1.1
        },
        "2": {
            "name": "AYDİN MERKEZ isletme",
            "SAİDİ": 41.28,
            "SAİFİ": 0.96
        },
        "3": {
            "name": "BODRUM isletme",
            "SAİDİ": 65.62,
            "SAİFİ": 1.26
        },
        "4": {
            "name": "CİNE isletme",
            "SAİDİ": 37.48,
            "SAİFİ": 0.59
        },
        "5": {
            "name": "CİVRİL isletme",
            "SAİDİ": 18.88,
            "SAİFİ": 0.55
        },
        "6": {
            "name": "DENİZLİ MERKEZ isletme",
            "SAİDİ": 11.96,
            "SAİFİ": 0.51
        },
        "7": {
            "name": "DİDİM isletme",
            "SAİDİ": 45.53,
            "SAİFİ": 0.67
        },
        "8": {
            "name": "FETHİYE isletme",
            "SAİDİ": 75.54,
            "SAİFİ": 1.8
        },
        "9": {
            "name": "KUSADASİ isletme",
            "SAİDİ": 12.38,
            "SAİFİ": 0.25
        },
        "10": {
            "name": "MARMARİS isletme",
            "SAİDİ": 28.43,
            "SAİFİ": 0.77
        },
        "11": {
            "name": "MİLAS isletme",
            "SAİDİ": 44.34,
            "SAİFİ": 1.31
        },
        "12": {
            "name": "MUGLA MERKEZ isletme",
            "SAİDİ": 44.52,
            "SAİFİ": 1.23
        },
        "13": {
            "name": "NAZİLLİ isletme",
            "SAİDİ": 20.03,
            "SAİFİ": 0.68
        },
        "14": {
            "name": "ORTACA isletme",
            "SAİDİ": 38.08,
            "SAİFİ": 1.04
        },
        "15": {
            "name": "SARAYKOY isletme",
            "SAİDİ": 40.91,
            "SAİFİ": 1.03
        },
        "16": {
            "name": "SOKE isletme",
            "SAİDİ": 38.1,
            "SAİFİ": 0.97
        }
    },
    "4": {
        "1": {
            "name": "ACİPAYAM isletme",
            "SAİDİ": 28.12,
            "SAİFİ": 1.09
        },
        "2": {
            "name": "AYDİN MERKEZ isletme",
            "SAİDİ": 49.04,
            "SAİFİ": 1.11
        },
        "3": {
            "name": "BODRUM isletme",
            "SAİDİ": 34.32,
            "SAİFİ": 0.59
        },
        "4": {
            "name": "CİNE isletme",
            "SAİDİ": 63.09,
            "SAİFİ": 1.02
        },
        "5": {
            "name": "CİVRİL isletme",
            "SAİDİ": 33.97,
            "SAİFİ": 1.07
        },
        "6": {
            "name": "DENİZLİ MERKEZ isletme",
            "SAİDİ": 11.2,
            "SAİFİ": 0.21
        },
        "7": {
            "name": "DİDİM isletme",
            "SAİDİ": 25.7,
            "SAİFİ": 0.86
        },
        "8": {
            "name": "FETHİYE isletme",
            "SAİDİ": 123.63,
            "SAİFİ": 2.11
        },
        "9": {
            "name": "KUSADASİ isletme",
            "SAİDİ": 10.58,
            "SAİFİ": 0.22
        },
        "10": {
            "name": "MARMARİS isletme",
            "SAİDİ": 92.38,
            "SAİFİ": 2.78
        },
        "11": {
            "name": "MİLAS isletme",
            "SAİDİ": 118.53,
            "SAİFİ": 2.74
        },
        "12": {
            "name": "MUGLA MERKEZ isletme",
            "SAİDİ": 111.02,
            "SAİFİ": 2.38
        },
        "13": {
            "name": "NAZİLLİ isletme",
            "SAİDİ": 33.04,
            "SAİFİ": 1.02
        },
        "14": {
            "name": "ORTACA isletme",
            "SAİDİ": 62.35,
            "SAİFİ": 1.63
        },
        "15": {
            "name": "SARAYKOY isletme",
            "SAİDİ": 30.55,
            "SAİFİ": 0.65
        },
        "16": {
            "name": "SOKE isletme",
            "SAİDİ": 45.08,
            "SAİFİ": 0.82
        }
    },
     "5": {
        "1": {
            "name": "ACİPAYAM isletme",
            "SAİDİ": 29.04,
            "SAİFİ": 0.96
        },
        "2": {
            "name": "AYDİN MERKEZ isletme",
            "SAİDİ": 20.27,
            "SAİFİ": 0.98
        },
        "3": {
            "name": "BODRUM isletme",
            "SAİDİ": 67.43,
            "SAİFİ": 1.74
        },
        "4": {
            "name": "CİNE isletme",
            "SAİDİ": 81.81,
            "SAİFİ": 2.68
        },
        "5": {
            "name": "CİVRİL isletme",
            "SAİDİ": 22.54,
            "SAİFİ": 0.83
        },
        "6": {
            "name": "DENİZLİ MERKEZ isletme",
            "SAİDİ": 13.86,
            "SAİFİ": 0.3
        },
        "7": {
            "name": "DİDİM isletme",
            "SAİDİ": 47.17,
            "SAİFİ": 1.42
        },
        "8": {
            "name": "FETHİYE isletme",
            "SAİDİ": 44.72,
            "SAİFİ": 1.54
        },
        "9": {
            "name": "KUSADASİ isletme",
            "SAİDİ": 20.75,
            "SAİFİ": 0.37
        },
        "10": {
            "name": "MARMARİS isletme",
            "SAİDİ": 105.46,
            "SAİFİ": 2.18
        },
        "11": {
            "name": "MİLAS isletme",
            "SAİDİ": 67.53,
            "SAİFİ": 2.03
        },
        "12": {
            "name": "MUGLA MERKEZ isletme",
            "SAİDİ": 66.64,
            "SAİFİ": 1.96
        },
        "13": {
            "name": "NAZİLLİ isletme",
            "SAİDİ": 24.39,
            "SAİFİ": 0.86
        },
        "14": {
            "name": "ORTACA isletme",
            "SAİDİ": 137.27,
            "SAİFİ": 2.24
        },
        "15": {
            "name": "SARAYKOY isletme",
            "SAİDİ": 22.77,
            "SAİFİ": 0.5
        },
        "16": {
            "name": "SOKE isletme",
            "SAİDİ": 49.11,
            "SAİFİ": 0.67
        }
    },
      6: {
       1:  {name:"ACİPAYAM isletme" ,SAİDİ:0, SAİFİ: 0 },
       2 : {name: "AYDİN MERKEZ isletme", SAİDİ:0, SAİFİ: 0 },
       3:  {name:"BODRUM isletme",SAİDİ:0, SAİFİ: 0 },
       4: {name: "CİNE isletme",SAİDİ:0, SAİFİ: 0 },
       5: {name:"CİVRİL isletme", SAİDİ:0, SAİFİ: 0 },
       6: {name:"DENİZLİ MERKEZ isletme", SAİDİ:0, SAİFİ: 0 },
       7:{ name: "DİDİM isletme", SAİDİ:0, SAİFİ: 0 },
       8:{name:"FETHİYE isletme", SAİDİ:0, SAİFİ: 0 },  
       9:{ name: "KUSADASİ isletme", SAİDİ:0, SAİFİ: 0 },
      10:{ name:"MARMARİS isletme", SAİDİ:0, SAİFİ: 0 },
      11:{  name:"MİLAS isletme", SAİDİ:0, SAİFİ: 0 },
      12:{ name:"MUGLA MERKEZ isletme", SAİDİ:0, SAİFİ: 0 },
      13:{ name :"NAZİLLİ isletme", SAİDİ:0, SAİFİ: 0 },
      14:{ name: "ORTACA isletme",SAİDİ:0, SAİFİ: 0 },
      15:{ name:"SARAYKOY isletme", SAİDİ:0, SAİFİ: 0 },
      16:{ name:"SOKE isletme", SAİDİ:0, SAİFİ: 0 },
      },
      7: {
       1:  {name:"ACİPAYAM isletme" ,SAİDİ:0, SAİFİ: 0 },
       2 : {name: "AYDİN MERKEZ isletme", SAİDİ:0, SAİFİ: 0 },
       3:  {name:"BODRUM isletme",SAİDİ:0, SAİFİ: 0 },
       4: {name: "CİNE isletme",SAİDİ:0, SAİFİ: 0 },
       5: {name:"CİVRİL isletme", SAİDİ:0, SAİFİ: 0 },
       6: {name:"DENİZLİ MERKEZ isletme", SAİDİ:0, SAİFİ: 0 },
       7:{ name: "DİDİM isletme", SAİDİ:0, SAİFİ: 0 },
       8:{name:"FETHİYE isletme", SAİDİ:0, SAİFİ: 0 },  
       9:{ name: "KUSADASİ isletme", SAİDİ:0, SAİFİ: 0 },
      10:{ name:"MARMARİS isletme", SAİDİ:0, SAİFİ: 0 },
      11:{  name:"MİLAS isletme", SAİDİ:0, SAİFİ: 0 },
      12:{ name:"MUGLA MERKEZ isletme", SAİDİ:0, SAİFİ: 0 },
      13:{ name :"NAZİLLİ isletme", SAİDİ:0, SAİFİ: 0 },
      14:{ name: "ORTACA isletme",SAİDİ:0, SAİFİ: 0 },
      15:{ name:"SARAYKOY isletme", SAİDİ:0, SAİFİ: 0 },
      16:{ name:"SOKE isletme", SAİDİ:0, SAİFİ: 0 },
      },
      8: {
       1:  {name:"ACİPAYAM isletme" ,SAİDİ:0, SAİFİ: 0 },
       2 : {name: "AYDİN MERKEZ isletme", SAİDİ:0, SAİFİ: 0 },
       3:  {name:"BODRUM isletme",SAİDİ:0, SAİFİ: 0 },
       4: {name: "CİNE isletme",SAİDİ:0, SAİFİ: 0 },
       5: {name:"CİVRİL isletme", SAİDİ:0, SAİFİ: 0 },
       6: {name:"DENİZLİ MERKEZ isletme", SAİDİ:0, SAİFİ: 0 },
       7:{ name: "DİDİM isletme", SAİDİ:0, SAİFİ: 0 },
       8:{name:"FETHİYE isletme", SAİDİ:0, SAİFİ: 0 },  
       9:{ name: "KUSADASİ isletme", SAİDİ:0, SAİFİ: 0 },
      10:{ name:"MARMARİS isletme", SAİDİ:0, SAİFİ: 0 },
      11:{  name:"MİLAS isletme", SAİDİ:0, SAİFİ: 0 },
      12:{ name:"MUGLA MERKEZ isletme", SAİDİ:0, SAİFİ: 0 },
      13:{ name :"NAZİLLİ isletme", SAİDİ:0, SAİFİ: 0 },
      14:{ name: "ORTACA isletme",SAİDİ:0, SAİFİ: 0 },
      15:{ name:"SARAYKOY isletme", SAİDİ:0, SAİFİ: 0 },
      16:{ name:"SOKE isletme", SAİDİ:0, SAİFİ: 0 },
      },
      9: {
       1:  {name:"ACİPAYAM isletme" ,SAİDİ:0, SAİFİ: 0 },
       2 : {name: "AYDİN MERKEZ isletme", SAİDİ:0, SAİFİ: 0 },
       3:  {name:"BODRUM isletme",SAİDİ:0, SAİFİ: 0 },
       4: {name: "CİNE isletme",SAİDİ:0, SAİFİ: 0 },
       5: {name:"CİVRİL isletme", SAİDİ:0, SAİFİ: 0 },
       6: {name:"DENİZLİ MERKEZ isletme", SAİDİ:0, SAİFİ: 0 },
       7:{ name: "DİDİM isletme", SAİDİ:0, SAİFİ: 0 },
       8:{name:"FETHİYE isletme", SAİDİ:0, SAİFİ: 0 },  
       9:{ name: "KUSADASİ isletme", SAİDİ:0, SAİFİ: 0 },
      10:{ name:"MARMARİS isletme", SAİDİ:0, SAİFİ: 0 },
      11:{  name:"MİLAS isletme", SAİDİ:0, SAİFİ: 0 },
      12:{ name:"MUGLA MERKEZ isletme", SAİDİ:0, SAİFİ: 0 },
      13:{ name :"NAZİLLİ isletme", SAİDİ:0, SAİFİ: 0 },
      14:{ name: "ORTACA isletme",SAİDİ:0, SAİFİ: 0 },
      15:{ name:"SARAYKOY isletme", SAİDİ:0, SAİFİ: 0 },
      16:{ name:"SOKE isletme", SAİDİ:0, SAİFİ: 0 },
      },
      10: {
       1:  {name:"ACİPAYAM isletme" ,SAİDİ:0, SAİFİ: 0 },
       2 : {name: "AYDİN MERKEZ isletme", SAİDİ:0, SAİFİ: 0 },
       3:  {name:"BODRUM isletme",SAİDİ:0, SAİFİ: 0 },
       4: {name: "CİNE isletme",SAİDİ:0, SAİFİ: 0 },
       5: {name:"CİVRİL isletme", SAİDİ:0, SAİFİ: 0 },
       6: {name:"DENİZLİ MERKEZ isletme", SAİDİ:0, SAİFİ: 0 },
       7:{ name: "DİDİM isletme", SAİDİ:0, SAİFİ: 0 },
       8:{name:"FETHİYE isletme", SAİDİ:0, SAİFİ: 0 },  
       9:{ name: "KUSADASİ isletme", SAİDİ:0, SAİFİ: 0 },
      10:{ name:"MARMARİS isletme", SAİDİ:0, SAİFİ: 0 },
      11:{  name:"MİLAS isletme", SAİDİ:0, SAİFİ: 0 },
      12:{ name:"MUGLA MERKEZ isletme", SAİDİ:0, SAİFİ: 0 },
      13:{ name :"NAZİLLİ isletme", SAİDİ:0, SAİFİ: 0 },
      14:{ name: "ORTACA isletme",SAİDİ:0, SAİFİ: 0 },
      15:{ name:"SARAYKOY isletme", SAİDİ:0, SAİFİ: 0 },
      16:{ name:"SOKE isletme", SAİDİ:0, SAİFİ: 0 },
      },
      11: {
       1:  {name:"ACİPAYAM isletme" ,SAİDİ:0, SAİFİ: 0 },
       2 : {name: "AYDİN MERKEZ isletme", SAİDİ:0, SAİFİ: 0 },
       3:  {name:"BODRUM isletme",SAİDİ:0, SAİFİ: 0 },
       4: {name: "CİNE isletme",SAİDİ:0, SAİFİ: 0 },
       5: {name:"CİVRİL isletme", SAİDİ:0, SAİFİ: 0 },
       6: {name:"DENİZLİ MERKEZ isletme", SAİDİ:0, SAİFİ: 0 },
       7:{ name: "DİDİM isletme", SAİDİ:0, SAİFİ: 0 },
       8:{name:"FETHİYE isletme", SAİDİ:0, SAİFİ: 0 },  
       9:{ name: "KUSADASİ isletme", SAİDİ:0, SAİFİ: 0 },
      10:{ name:"MARMARİS isletme", SAİDİ:0, SAİFİ: 0 },
      11:{  name:"MİLAS isletme", SAİDİ:0, SAİFİ: 0 },
      12:{ name:"MUGLA MERKEZ isletme", SAİDİ:0, SAİFİ: 0 },
      13:{ name :"NAZİLLİ isletme", SAİDİ:0, SAİFİ: 0 },
      14:{ name: "ORTACA isletme",SAİDİ:0, SAİFİ: 0 },
      15:{ name:"SARAYKOY isletme", SAİDİ:0, SAİFİ: 0 },
      16:{ name:"SOKE isletme", SAİDİ:0, SAİFİ: 0 },
      },
      12: {
       1:  {name:"ACİPAYAM isletme" ,SAİDİ:0, SAİFİ: 0 },
       2 : {name: "AYDİN MERKEZ isletme", SAİDİ:0, SAİFİ: 0 },
       3:  {name:"BODRUM isletme",SAİDİ:0, SAİFİ: 0 },
       4: {name: "CİNE isletme",SAİDİ:0, SAİFİ: 0 },
       5: {name:"CİVRİL isletme", SAİDİ:0, SAİFİ: 0 },
       6: {name:"DENİZLİ MERKEZ isletme", SAİDİ:0, SAİFİ: 0 },
       7:{ name: "DİDİM isletme", SAİDİ:0, SAİFİ: 0 },
       8:{name:"FETHİYE isletme", SAİDİ:0, SAİFİ: 0 },  
       9:{ name: "KUSADASİ isletme", SAİDİ:0, SAİFİ: 0 },
      10:{ name:"MARMARİS isletme", SAİDİ:0, SAİFİ: 0 },
      11:{  name:"MİLAS isletme", SAİDİ:0, SAİFİ: 0 },
      12:{ name:"MUGLA MERKEZ isletme", SAİDİ:0, SAİFİ: 0 },
      13:{ name :"NAZİLLİ isletme", SAİDİ:0, SAİFİ: 0 },
      14:{ name: "ORTACA isletme",SAİDİ:0, SAİFİ: 0 },
      15:{ name:"SARAYKOY isletme", SAİDİ:0, SAİFİ: 0 },
      16:{ name:"SOKE isletme", SAİDİ:0, SAİFİ: 0 },
      },
  
  };
export const DataProvier =({children})=> {
    const [Datax,setDatax]=useState(initialState2025)

    const updateDatax=(newData)=> {
            setDatax(newData);

    };

    // ✅ useMemo ile değer sadece Datax ya da updateDatax değiştiğinde yeniden hesaplanır
  const memoizedValue = useMemo(() => {
    return { Datax, updateDatax };
  }, [Datax]); // updateDatax sabit referans olduğu için dependency'e gerek yok

    return( 
        <DataContextx.Provider value={memoizedValue}>
             {children}
        </DataContextx.Provider>
    )


}

