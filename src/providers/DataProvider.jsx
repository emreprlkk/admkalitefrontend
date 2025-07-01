
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
            "name": "AYDİN BÖLGE",
            "SAİDİ": 53.13,
            "SAİFİ": 0.89
        },
        "18": {
            "name": "BODRUM BÖLGE",
            "SAİDİ": 87.5,
            "SAİFİ": 1.57
        },
        "19": {
            "name": "DENİZLİ BÖLGE",
            "SAİDİ": 11.55,
            "SAİFİ": 0.38
        },
        "20": {
            "name": "MUGLA BÖLGE",
            "SAİDİ": 69.22,
            "SAİFİ": 1.91
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
            "name": "AYDİN BÖLGE",
            "SAİDİ": 27.05,
            "SAİFİ": 0.74
        },
        "18": {
            "name": "BODRUM BÖLGE",
            "SAİDİ": 95.2,
            "SAİFİ": 1.35
        },
        "19": {
            "name": "DENİZLİ BÖLGE",
            "SAİDİ": 13.45,
            "SAİFİ": 0.43
        },
        "20": {
            "name": "MUGLA BÖLGE",
            "SAİDİ": 89.24,
            "SAİFİ": 1.75
        },
        "21": {
            "name": "ADM",
            "SAİDİ": 45.2,
            "SAİFİ": 0.95
        }
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
            "SAİDİ": 75.53,
            "SAİFİ": 1.8
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
            "name": "AYDİN BÖLGE",
            "SAİDİ": 31.68,
            "SAİFİ": 0.71
        },
        "18": {
            "name": "BODRUM BÖLGE",
            "SAİDİ": 52.13,
            "SAİFİ": 1.14
        },
        "19": {
            "name": "DENİZLİ BÖLGE",
            "SAİDİ": 17.94,
            "SAİFİ": 0.67
        },
        "20": {
            "name": "MUGLA BÖLGE",
            "SAİDİ": 50.51,
            "SAİFİ": 1.32
        },
        "21": {
            "name": "ADM",
            "SAİDİ": 34.31,
            "SAİFİ": 0.89
        }
    },
    "4": {
        "1": {
            "name": "ACİPAYAM isletme",
            "SAİDİ": 27.31,
            "SAİFİ": 1.03
        },
        "2": {
            "name": "AYDİN MERKEZ isletme",
            "SAİDİ": 48.46,
            "SAİFİ": 1.06
        },
        "3": {
            "name": "BODRUM isletme",
            "SAİDİ": 34.41,
            "SAİFİ": 0.59
        },
        "4": {
            "name": "CİNE isletme",
            "SAİDİ": 62.89,
            "SAİFİ": 0.99
        },
        "5": {
            "name": "CİVRİL isletme",
            "SAİDİ": 32.53,
            "SAİFİ": 1.01
        },
        "6": {
            "name": "DENİZLİ MERKEZ isletme",
            "SAİDİ": 10.87,
            "SAİFİ": 0.21
        },
        "7": {
            "name": "DİDİM isletme",
            "SAİDİ": 20.12,
            "SAİFİ": 0.67
        },
        "8": {
            "name": "FETHİYE isletme",
            "SAİDİ": 116.08,
            "SAİFİ": 2.02
        },
        "9": {
            "name": "KUSADASİ isletme",
            "SAİDİ": 10.33,
            "SAİFİ": 0.21
        },
        "10": {
            "name": "MARMARİS isletme",
            "SAİDİ": 78.92,
            "SAİFİ": 2.38
        },
        "11": {
            "name": "MİLAS isletme",
            "SAİDİ": 108.17,
            "SAİFİ": 2.56
        },
        "12": {
            "name": "MUGLA MERKEZ isletme",
            "SAİDİ": 89.87,
            "SAİFİ": 2.1
        },
        "13": {
            "name": "NAZİLLİ isletme",
            "SAİDİ": 31.89,
            "SAİFİ": 0.98
        },
        "14": {
            "name": "ORTACA isletme",
            "SAİDİ": 61.7,
            "SAİFİ": 1.6
        },
        "15": {
            "name": "SARAYKOY isletme",
            "SAİDİ": 30.22,
            "SAİFİ": 0.65
        },
        "16": {
            "name": "SOKE isletme",
            "SAİDİ": 38.71,
            "SAİFİ": 0.7
        },

        "17": {
            "name": "AYDİN BÖLGE",
            "SAİDİ": 34.01,
            "SAİFİ": 0.81
        },
        "18": {
            "name": "BODRUM BÖLGE",
            "SAİDİ": 64.88,
            "SAİFİ": 1.41
        },
        "19": {
            "name": "DENİZLİ BÖLGE",
            "SAİDİ": 18.21,
            "SAİFİ": 0.5
        },
        "20": {
            "name": "MUGLA BÖLGE",
            "SAİDİ": 91.22,
            "SAİFİ": 2.02
        },
        "21": {
            "name": "ADM",
            "SAİDİ": 45.98,
            "SAİFİ": 1.06
        }

    },
    "5": {
        "1": {
            "name": "ACİPAYAM isletme",
            "SAİDİ": 26.82,
            "SAİFİ": 0.87
        },
        "2": {
            "name": "AYDİN MERKEZ isletme",
            "SAİDİ": 18.9,
            "SAİFİ": 0.8
        },
        "3": {
            "name": "BODRUM isletme",
            "SAİDİ": 56.06,
            "SAİFİ": 1.58
        },
        "4": {
            "name": "CİNE isletme",
            "SAİDİ": 85.9,
            "SAİFİ": 2.67
        },
        "5": {
            "name": "CİVRİL isletme",
            "SAİDİ": 19.7,
            "SAİFİ": 0.7
        },
        "6": {
            "name": "DENİZLİ MERKEZ isletme",
            "SAİDİ": 13.0,
            "SAİFİ": 0.28
        },
        "7": {
            "name": "DİDİM isletme",
            "SAİDİ": 46.8,
            "SAİFİ": 1.41
        },
        "8": {
            "name": "FETHİYE isletme",
            "SAİDİ": 36.16,
            "SAİFİ": 1.25
        },
        "9": {
            "name": "KUSADASİ isletme",
            "SAİDİ": 20.46,
            "SAİFİ": 0.36
        },
        "10": {
            "name": "MARMARİS isletme",
            "SAİDİ": 100.41,
            "SAİFİ": 2.14
        },
        "11": {
            "name": "MİLAS isletme",
            "SAİDİ": 60.35,
            "SAİFİ": 1.78
        },
        "12": {
            "name": "MUGLA MERKEZ isletme",
            "SAİDİ": 58.73,
            "SAİFİ": 1.71
        },
        "13": {
            "name": "NAZİLLİ isletme",
            "SAİDİ": 23.83,
            "SAİFİ": 0.84
        },
        "14": {
            "name": "ORTACA isletme",
            "SAİDİ": 54.23,
            "SAİFİ": 1.6
        },
        "15": {
            "name": "SARAYKOY isletme",
            "SAİDİ": 22.75,
            "SAİFİ": 0.5
        },
        "16": {
            "name": "SOKE isletme",
            "SAİDİ": 48.42,
            "SAİFİ": 0.67
        },

        "17": {
            "name": "AYDİN BÖLGE",
            "SAİDİ": 30.48,
            "SAİFİ": 0.91
        },
        "18": {
            "name": "BODRUM BÖLGE",
            "SAİDİ": 57.83,
            "SAİFİ": 1.66
        },
        "19": {
            "name": "DENİZLİ BÖLGE",
            "SAİDİ": 17.19,
            "SAİFİ": 0.46
        },
        "20": {
            "name": "MUGLA BÖLGE",
            "SAİDİ": 57.21,
            "SAİFİ": 1.6
        },
        "21": {
            "name": "ADM",
            "SAİDİ": 35.85,
            "SAİFİ": 1.02
        }
    },
    "6": {
        "1": {
            "name": "ACİPAYAM isletme",
            "SAİDİ": 20.74,
            "SAİFİ": 0.88
        },
        "2": {
            "name": "AYDİN MERKEZ isletme",
            "SAİDİ": 55.64,
            "SAİFİ": 1.52
        },
        "3": {
            "name": "BODRUM isletme",
            "SAİDİ": 47.57,
            "SAİFİ": 1.05
        },
        "4": {
            "name": "CİNE isletme",
            "SAİDİ": 81.38,
            "SAİFİ": 1.85
        },
        "5": {
            "name": "CİVRİL isletme",
            "SAİDİ": 30.57,
            "SAİFİ": 0.99
        },
        "6": {
            "name": "DENİZLİ MERKEZ isletme",
            "SAİDİ": 17.02,
            "SAİFİ": 0.64
        },
        "7": {
            "name": "DİDİM isletme",
            "SAİDİ": 74.12,
            "SAİFİ": 1.47
        },
        "8": {
            "name": "FETHİYE isletme",
            "SAİDİ": 55.75,
            "SAİFİ": 1.9
        },
        "9": {
            "name": "KUSADASİ isletme",
            "SAİDİ": 47.99,
            "SAİFİ": 0.44
        },
        "10": {
            "name": "MARMARİS isletme",
            "SAİDİ": 31.28,
            "SAİFİ": 0.54
        },
        "11": {
            "name": "MİLAS isletme",
            "SAİDİ": 107.34,
            "SAİFİ": 2.96
        },
        "12": {
            "name": "MUGLA MERKEZ isletme",
            "SAİDİ": 68.61,
            "SAİFİ": 2.12
        },
        "13": {
            "name": "NAZİLLİ isletme",
            "SAİDİ": 21.96,
            "SAİFİ": 1.18
        },
        "14": {
            "name": "ORTACA isletme",
            "SAİDİ": 46.84,
            "SAİFİ": 1.27
        },
        "15": {
            "name": "SARAYKOY isletme",
            "SAİDİ": 30.22,
            "SAİFİ": 1.09
        },
        "16": {
            "name": "SOKE isletme",
            "SAİDİ": 28.2,
            "SAİFİ": 0.64
        },


        "17": {
            "name": "AYDİN BÖLGE",
            "SAİDİ": 48.37,
            "SAİFİ": 1.19
        },
        "18": {
            "name": "BODRUM BÖLGE",
            "SAİDİ": 72.26,
            "SAİFİ": 1.84
        },
        "19": {
            "name": "DENİZLİ BÖLGE",
            "SAİDİ": 20.5,
            "SAİFİ": 0.76
        },
        "20": {
            "name": "MUGLA BÖLGE",
            "SAİDİ": 52.94,
            "SAİFİ": 1.58
        },
        "21": {
            "name": "ADM",
            "SAİDİ": 43.99,
            "SAİFİ": 1.23
        }
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

/*  "17": {
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
        },  */