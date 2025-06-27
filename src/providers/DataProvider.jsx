
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
        },

        "17": {
            "name": "AYDIN BOLGE",
            "SAİDİ": 53.13,
            "SAİFİ": 0.89
        },

        "18": {
            "name": "DENIZLI BOLGE",
            "SAİDİ": 11.55 ,
            "SAİFİ": 0.38
        },
        "19": {
            "name": "MUGLA BOLGE",
            "SAİDİ": 69.22 ,
            "SAİFİ": 1.91
        },
        "20": {
            "name": "BODRUM BOLGE",
            "SAİDİ": 87.5 ,
            "SAİFİ": 1.57
        },
        "21": {
            "name": "ADM",
            "SAİDİ": 48.55,
            "SAİFİ":1.05
        }, 
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
        },
        
        "17": {
            "name": "AYDIN BOLGE",
            "SAİDİ": 27.05,
            "SAİFİ": 0.74
        },

        "18": {
            "name": "DENIZLI BOLGE",
            "SAİDİ": 13.45 ,
            "SAİFİ": 0.43
        },
        "19": {
            "name": "MUGLA BOLGE",
            "SAİDİ": 89.24 ,
            "SAİFİ": 1.75
        },
        "20": {
            "name": "BODRUM BOLGE",
            "SAİDİ": 95.2 ,
            "SAİFİ": 1.35
        },
        "21": {
            "name": "ADM",
            "SAİDİ": 45.2,
            "SAİFİ":0.95
        }, 
    },
    "3": {
        "1": {
            "name": "ACİPAYAM isletme",
            "SAİDİ": 33.37,
            "SAİFİ": 1.1
        },
        "2": {
            "name": "AYDİN MERKEZ isletme",
            "SAİDİ": 41.28,
            "SAİFİ": 0.96
        },
        "3": {
            "name": "BODRUM isletme",
            "SAİDİ": 59.8,
            "SAİFİ": 1.08
        },
        "4": {
            "name": "CİNE isletme",
            "SAİDİ": 37.4,
            "SAİFİ": 0.59
        },
        "5": {
            "name": "CİVRİL isletme",
            "SAİDİ": 18.8,
            "SAİFİ": 0.55
        },
        "6": {
            "name": "DENİZLİ MERKEZ isletme",
            "SAİDİ": 11.95,
            "SAİFİ": 0.51
        },
        "7": {
            "name": "DİDİM isletme",
            "SAİDİ": 45.53,
            "SAİFİ": 0.67
        },
        "8": {
            "name": "FETHİYE isletme",
            "SAİDİ": 75.62,
            "SAİFİ": 1.81
        },
        "9": {
            "name": "KUSADASİ isletme",
            "SAİDİ": 12.38,
            "SAİFİ": 0.25
        },
        "10": {
            "name": "MARMARİS isletme",
            "SAİDİ": 28.5,
            "SAİFİ": 0.77
        },
        "11": {
            "name": "MİLAS isletme",
            "SAİDİ": 41.23,
            "SAİFİ": 1.23
        },
        "12": {
            "name": "MUGLA MERKEZ isletme",
            "SAİDİ": 41.49,
            "SAİFİ": 1.24
        },
        "13": {
            "name": "NAZİLLİ isletme",
            "SAİDİ": 20.65,
            "SAİFİ": 0.68
        },
        "14": {
            "name": "ORTACA isletme",
            "SAİDİ": 38.41,
            "SAİFİ": 1.06
        },
        "15": {
            "name": "SARAYKOY isletme",
            "SAİDİ": 26.28,
            "SAİFİ": 1.01
        },
        "16": {
            "name": "SOKE isletme",
            "SAİDİ": 38.1,
            "SAİFİ": 0.97
        },

           
        "17": {
            "name": "AYDIN BOLGE",
            "SAİDİ": 31.68,
            "SAİFİ": 0.71
        },

        "18": {
            "name": "DENIZLI BOLGE",
            "SAİDİ": 17.94 ,
            "SAİFİ":0.67
        },
        "19": {
            "name": "MUGLA BOLGE",
            "SAİDİ": 50.54 ,
            "SAİFİ": 1.32
        },
        "20": {
            "name": "BODRUM BOLGE",
            "SAİDİ": 52.13 ,
            "SAİFİ": 1.14
        },
        "21": {
            "name": "ADM",
            "SAİDİ": 34.32,
            "SAİFİ":0.89
        }, 
    },
    "4": {
        "1": {
            "name": "ACİPAYAM isletme",
            "SAİDİ": 28.12,
            "SAİFİ": 1.09
        },
        "2": {
            "name": "AYDİN MERKEZ isletme",
            "SAİDİ": 48.93,
            "SAİFİ": 1.11
        },
        "3": {
            "name": "BODRUM isletme",
            "SAİDİ": 35.05,
            "SAİFİ": 0.61
        },
        "4": {
            "name": "CİNE isletme",
            "SAİDİ": 63.09,
            "SAİFİ": 1.02
        },
        "5": {
            "name": "CİVRİL isletme",
            "SAİDİ": 33.98,
            "SAİFİ": 1.07
        },
        "6": {
            "name": "DENİZLİ MERKEZ isletme",
            "SAİDİ": 11.15,
            "SAİFİ": 0.21
        },
        "7": {
            "name": "DİDİM isletme",
            "SAİDİ": 20.81,
            "SAİFİ": 0.68
        },
        "8": {
            "name": "FETHİYE isletme",
            "SAİDİ": 117.25,
            "SAİFİ": 2.11
        },
        "9": {
            "name": "KUSADASİ isletme",
            "SAİDİ": 10.7,
            "SAİFİ": 0.22
        },
        "10": {
            "name": "MARMARİS isletme",
            "SAİDİ": 90.98,
            "SAİFİ": 2.78
        },
        "11": {
            "name": "MİLAS isletme",
            "SAİDİ": 109.12,
            "SAİFİ": 2.66
        },
        "12": {
            "name": "MUGLA MERKEZ isletme",
            "SAİDİ": 90.87,
            "SAİFİ": 2.11
        },
        "13": {
            "name": "NAZİLLİ isletme",
            "SAİDİ": 33.05,
            "SAİFİ": 1.02
        },
        "14": {
            "name": "ORTACA isletme",
            "SAİDİ": 62.5,
            "SAİFİ": 1.63
        },
        "15": {
            "name": "SARAYKOY isletme",
            "SAİDİ": 30.23,
            "SAİFİ": 0.65
        },
        "16": {
            "name": "SOKE isletme",
            "SAİDİ": 45.08,
            "SAİFİ": 0.82
        },


        "17": {
            "name": "AYDIN BOLGE",
            "SAİDİ": 35.13,
            "SAİFİ":0.84
        },

        "18": {
            "name": "DENIZLI BOLGE",
            "SAİDİ": 18.71,
            "SAİFİ":0.52
        },
        "19": {
            "name": "MUGLA BOLGE",
            "SAİDİ": 94.19 ,
            "SAİFİ": 2.13
        },
        "20": {
            "name": "BODRUM BOLGE",
            "SAİDİ": 65.65 ,
            "SAİFİ": 1.45
        },
        "21": {
            "name": "ADM",
            "SAİDİ": 47.29,
            "SAİFİ":1.11
        }, 
    },
    "5": {
        "1": {
            "name": "ACİPAYAM isletme",
            "SAİDİ": 29.04,
            "SAİFİ": 0.96
        },
        "2": {
            "name": "AYDİN MERKEZ isletme",
            "SAİDİ": 20.16,
            "SAİFİ": 0.95
        },
        "3": {
            "name": "BODRUM isletme",
            "SAİDİ": 65.05,
            "SAİFİ": 1.74
        },
        "4": {
            "name": "CİNE isletme",
            "SAİDİ": 85.91,
            "SAİFİ": 2.67
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
            "SAİDİ": 44.69,
            "SAİFİ": 1.54
        },
        "9": {
            "name": "KUSADASİ isletme",
            "SAİDİ": 20.75,
            "SAİFİ": 0.37
        },
        "10": {
            "name": "MARMARİS isletme",
            "SAİDİ": 105.33,
            "SAİFİ": 2.18
        },
        "11": {
            "name": "MİLAS isletme",
            "SAİDİ": 67.23,
            "SAİFİ": 2.03
        },
        "12": {
            "name": "MUGLA MERKEZ isletme",
            "SAİDİ": 65.21,
            "SAİFİ": 1.9
        },
        "13": {
            "name": "NAZİLLİ isletme",
            "SAİDİ": 24.39,
            "SAİFİ": 0.86
        },
        "14": {
            "name": "ORTACA isletme",
            "SAİDİ": 96.07,
            "SAİFİ": 2.0
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
        },
        
        "17": {
            "name": "AYDIN BOLGE",
            "SAİDİ": 31.17,
            "SAİFİ":0.97
        },

        "18": {
            "name": "DENIZLI BOLGE",
            "SAİDİ": 18.48,
            "SAİFİ":0.5
        },
        "19": {
            "name": "MUGLA BOLGE",
            "SAİDİ": 71.57 ,
            "SAİFİ": 1.84
        },
        "20": {
            "name": "BODRUM BOLGE",
            "SAİDİ": 65.95 ,
            "SAİFİ": 1.86
        },
        "21": {
            "name": "ADM",
            "SAİDİ": 40.7,
            "SAİFİ":1.14
        }, 
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

/* "18": {
            "name": "DENIZLI BOLGE",
            "SAİDİ": 18.48 ,
            "SAİFİ": 0.5
        },
        "19": {
            "name": "MUGLA BOLGE",
            "SAİDİ": 71.57 ,
            "SAİFİ": 1.84
        },
        "20": {
            "name": "BODRUM BOLGE",
            "SAİDİ": 65.95 ,
            "SAİFİ": 1.86
        },
        "21": {
            "name": "ADM",
            "SAİDİ": 40.7,
            "SAİFİ":1.14
        }, */