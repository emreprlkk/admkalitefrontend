
import React,{useState,useMemo} from "react";
import { DataContextx } from "contexts/DataContext";
// Veri yapısını oluşturan initial state
const initialState2025 = {
    ///AYLARR
    
    "1": {
        "1": {
            "name": "ACİPAYAM isletme",
            "SAİDİ": 18.9,
            "SAİFİ": 0.85
        },
        "2": {
            "name": "AYDİN MERKEZ isletme",
            "SAİDİ": 52.7,
            "SAİFİ": 1.34
        },
        "3": {
            "name": "BODRUM isletme",
            "SAİDİ": 87.53,
            "SAİFİ": 1.57
        },
        "4": {
            "name": "CİNE isletme",
            "SAİDİ": 14.42,
            "SAİFİ": 0.51
        },
        "5": {
            "name": "CİVRİL isletme",
            "SAİDİ": 9.35,
            "SAİFİ": 0.31
        },
        "6": {
            "name": "DENİZLİ MERKEZ isletme",
            "SAİDİ": 9.53,
            "SAİFİ": 0.25
        },
        "7": {
            "name": "DİDİM isletme",
            "SAİDİ": 119.76,
            "SAİFİ": 1.29
        },
        "8": {
            "name": "FETHİYE isletme",
            "SAİDİ": 74.77,
            "SAİFİ": 2.19
        },
        "9": {
            "name": "KUSADASİ isletme",
            "SAİDİ": 28.74,
            "SAİFİ": 0.5
        },
        "10": {
            "name": "MARMARİS isletme",
            "SAİDİ": 73.68,
            "SAİFİ": 1.55
        },
        "11": {
            "name": "MİLAS isletme",
            "SAİDİ": 97.35,
            "SAİFİ": 1.6
        },
        "12": {
            "name": "MUGLA MERKEZ isletme",
            "SAİDİ": 92.05,
            "SAİFİ": 2.54
        },
        "13": {
            "name": "NAZİLLİ isletme",
            "SAİDİ": 13.33,
            "SAİFİ": 0.38
        },
        "14": {
            "name": "ORTACA isletme",
            "SAİDİ": 26.9,
            "SAİFİ": 0.95
        },
        "15": {
            "name": "SARAYKOY isletme",
            "SAİDİ": 12.85,
            "SAİFİ": 0.4
        },
        "16": {
            "name": "SOKE isletme",
            "SAİDİ": 126.3,
            "SAİFİ": 0.93
        },
        "17": {
            "name": "AYDİN",
            "SAİDİ": 53.15,
            "SAİFİ": 0.89
        },
        "18": {
            "name": "BODRUM",
            "SAİDİ": 87.53,
            "SAİFİ": 1.57
        },
        "19": {
            "name": "DENİZLİ",
            "SAİDİ": 11.51,
            "SAİFİ": 0.38
        },
        "20": {
            "name": "MUGLA",
            "SAİDİ": 69.05,
            "SAİFİ": 1.91
        },
        "21": {
            "name": "ADM",
            "SAİDİ": 48.51,
            "SAİFİ": 1.05
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
            "SAİDİ": 35.92,
            "SAİFİ": 1.08
        },
        "3": {
            "name": "BODRUM isletme",
            "SAİDİ": 95.21,
            "SAİFİ": 1.35
        },
        "4": {
            "name": "CİNE isletme",
            "SAİDİ": 15.88,
            "SAİFİ": 0.54
        },
        "5": {
            "name": "CİVRİL isletme",
            "SAİDİ": 10.02,
            "SAİFİ": 0.69
        },
        "6": {
            "name": "DENİZLİ MERKEZ isletme",
            "SAİDİ": 11.08,
            "SAİFİ": 0.27
        },
        "7": {
            "name": "DİDİM isletme",
            "SAİDİ": 35.11,
            "SAİFİ": 1.15
        },
        "8": {
            "name": "FETHİYE isletme",
            "SAİDİ": 138.01,
            "SAİFİ": 2.72
        },
        "9": {
            "name": "KUSADASİ isletme",
            "SAİDİ": 24.91,
            "SAİFİ": 0.45
        },
        "10": {
            "name": "MARMARİS isletme",
            "SAİDİ": 22.54,
            "SAİFİ": 0.81
        },
        "11": {
            "name": "MİLAS isletme",
            "SAİDİ": 74.36,
            "SAİFİ": 1.3
        },
        "12": {
            "name": "MUGLA MERKEZ isletme",
            "SAİDİ": 50.5,
            "SAİFİ": 1.19
        },
        "13": {
            "name": "NAZİLLİ isletme",
            "SAİDİ": 12.82,
            "SAİFİ": 0.37
        },
        "14": {
            "name": "ORTACA isletme",
            "SAİDİ": 111.11,
            "SAİFİ": 1.64
        },
        "15": {
            "name": "SARAYKOY isletme",
            "SAİDİ": 8.13,
            "SAİFİ": 0.28
        },
        "16": {
            "name": "SOKE isletme",
            "SAİDİ": 30.69,
            "SAİFİ": 0.5
        },
        "17": {
            "name": "AYDİN",
            "SAİDİ": 27.05,
            "SAİFİ": 0.74
        },
        "18": {
            "name": "BODRUM",
            "SAİDİ": 95.21,
            "SAİFİ": 1.35
        },
        "19": {
            "name": "DENİZLİ",
            "SAİDİ": 13.47,
            "SAİFİ": 0.43
        },
        "20": {
            "name": "MUGLA",
            "SAİDİ": 89.04,
            "SAİFİ": 1.75
        },
        "21": {
            "name": "ADM",
            "SAİDİ": 45.17,
            "SAİFİ": 0.95
        }
    },
    "3": {
        "1": {
            "name": "ACİPAYAM isletme",
            "SAİDİ": 33.34,
            "SAİFİ": 1.1
        },
        "2": {
            "name": "AYDİN MERKEZ isletme",
            "SAİDİ": 41.2,
            "SAİFİ": 0.96
        },
        "3": {
            "name": "BODRUM isletme",
            "SAİDİ": 50.44,
            "SAİFİ": 1.09
        },
        "4": {
            "name": "CİNE isletme",
            "SAİDİ": 37.37,
            "SAİFİ": 0.59
        },
        "5": {
            "name": "CİVRİL isletme",
            "SAİDİ": 18.7,
            "SAİFİ": 0.55
        },
        "6": {
            "name": "DENİZLİ MERKEZ isletme",
            "SAİDİ": 11.87,
            "SAİFİ": 0.51
        },
        "7": {
            "name": "DİDİM isletme",
            "SAİDİ": 45.46,
            "SAİFİ": 0.67
        },
        "8": {
            "name": "FETHİYE isletme",
            "SAİDİ": 75.06,
            "SAİFİ": 1.8
        },
        "9": {
            "name": "KUSADASİ isletme",
            "SAİDİ": 12.42,
            "SAİFİ": 0.25
        },
        "10": {
            "name": "MARMARİS isletme",
            "SAİDİ": 21.0,
            "SAİFİ": 0.66
        },
        "11": {
            "name": "MİLAS isletme",
            "SAİDİ": 41.28,
            "SAİFİ": 1.23
        },
        "12": {
            "name": "MUGLA MERKEZ isletme",
            "SAİDİ": 41.52,
            "SAİFİ": 1.24
        },
        "13": {
            "name": "NAZİLLİ isletme",
            "SAİDİ": 20.56,
            "SAİFİ": 0.68
        },
        "14": {
            "name": "ORTACA isletme",
            "SAİDİ": 38.23,
            "SAİFİ": 1.04
        },
        "15": {
            "name": "SARAYKOY isletme",
            "SAİDİ": 25.97,
            "SAİFİ": 1.01
        },
        "16": {
            "name": "SOKE isletme",
            "SAİDİ": 37.99,
            "SAİFİ": 0.97
        },
        "17": {
            "name": "AYDİN",
            "SAİDİ": 31.62,
            "SAİFİ": 0.71
        },
        "18": {
            "name": "BODRUM",
            "SAİDİ": 50.44,
            "SAİFİ": 1.09
        },
        "19": {
            "name": "DENİZLİ",
            "SAİDİ": 17.85,
            "SAİFİ": 0.67
        },
        "20": {
            "name": "MUGLA",
            "SAİDİ": 48.99,
            "SAİFİ": 1.29
        },
        "21": {
            "name": "ADM",
            "SAİDİ": 33.72,
            "SAİFİ": 0.87
        }
    },
    "4": {
        "1": {
            "name": "ACİPAYAM isletme",
            "SAİDİ": 28.07,
            "SAİFİ": 1.09
        },
        "2": {
            "name": "AYDİN MERKEZ isletme",
            "SAİDİ": 48.85,
            "SAİFİ": 1.11
        },
        "3": {
            "name": "BODRUM isletme",
            "SAİDİ": 65.57,
            "SAİFİ": 1.45
        },
        "4": {
            "name": "CİNE isletme",
            "SAİDİ": 63.17,
            "SAİFİ": 1.02
        },
        "5": {
            "name": "CİVRİL isletme",
            "SAİDİ": 33.49,
            "SAİFİ": 1.07
        },
        "6": {
            "name": "DENİZLİ MERKEZ isletme",
            "SAİDİ": 11.14,
            "SAİFİ": 0.21
        },
        "7": {
            "name": "DİDİM isletme",
            "SAİDİ": 20.64,
            "SAİFİ": 0.68
        },
        "8": {
            "name": "FETHİYE isletme",
            "SAİDİ": 116.32,
            "SAİFİ": 2.11
        },
        "9": {
            "name": "KUSADASİ isletme",
            "SAİDİ": 10.69,
            "SAİFİ": 0.22
        },
        "10": {
            "name": "MARMARİS isletme",
            "SAİDİ": 67.28,
            "SAİFİ": 2.54
        },
        "11": {
            "name": "MİLAS isletme",
            "SAİDİ": 108.99,
            "SAİFİ": 2.66
        },
        "12": {
            "name": "MUGLA MERKEZ isletme",
            "SAİDİ": 90.66,
            "SAİFİ": 2.11
        },
        "13": {
            "name": "NAZİLLİ isletme",
            "SAİDİ": 32.98,
            "SAİFİ": 1.02
        },
        "14": {
            "name": "ORTACA isletme",
            "SAİDİ": 62.3,
            "SAİFİ": 1.63
        },
        "15": {
            "name": "SARAYKOY isletme",
            "SAİDİ": 30.23,
            "SAİFİ": 0.65
        },
        "16": {
            "name": "SOKE isletme",
            "SAİDİ": 45.09,
            "SAİFİ": 0.82
        },
        "17": {
            "name": "AYDİN",
            "SAİDİ": 35.07,
            "SAİFİ": 0.84
        },
        "18": {
            "name": "BODRUM",
            "SAİDİ": 65.57,
            "SAİFİ": 1.45
        },
        "19": {
            "name": "DENİZLİ",
            "SAİDİ": 18.63,
            "SAİFİ": 0.52
        },
        "20": {
            "name": "MUGLA",
            "SAİDİ": 89.59,
            "SAİFİ": 2.08
        },
        "21": {
            "name": "ADM",
            "SAİDİ": 46.19,
            "SAİFİ": 1.1
        }
    },
    "5": {
        "1": {
            "name": "ACİPAYAM isletme",
            "SAİDİ": 29.12,
            "SAİFİ": 0.96
        },
        "2": {
            "name": "AYDİN MERKEZ isletme",
            "SAİDİ": 20.08,
            "SAİFİ": 0.95
        },
        "3": {
            "name": "BODRUM isletme",
            "SAİDİ": 64.46,
            "SAİFİ": 1.85
        },
        "4": {
            "name": "CİNE isletme",
            "SAİDİ": 86.13,
            "SAİFİ": 2.67
        },
        "5": {
            "name": "CİVRİL isletme",
            "SAİDİ": 22.6,
            "SAİFİ": 0.83
        },
        "6": {
            "name": "DENİZLİ MERKEZ isletme",
            "SAİDİ": 13.81,
            "SAİFİ": 0.3
        },
        "7": {
            "name": "DİDİM isletme",
            "SAİDİ": 41.1,
            "SAİFİ": 1.23
        },
        "8": {
            "name": "FETHİYE isletme",
            "SAİDİ": 44.49,
            "SAİFİ": 1.54
        },
        "9": {
            "name": "KUSADASİ isletme",
            "SAİDİ": 20.46,
            "SAİFİ": 0.37
        },
        "10": {
            "name": "MARMARİS isletme",
            "SAİDİ": 102.66,
            "SAİFİ": 2.17
        },
        "11": {
            "name": "MİLAS isletme",
            "SAİDİ": 67.32,
            "SAİFİ": 2.03
        },
        "12": {
            "name": "MUGLA MERKEZ isletme",
            "SAİDİ": 59.2,
            "SAİFİ": 1.88
        },
        "13": {
            "name": "NAZİLLİ isletme",
            "SAİDİ": 24.3,
            "SAİFİ": 0.86
        },
        "14": {
            "name": "ORTACA isletme",
            "SAİDİ": 96.15,
            "SAİFİ": 2.0
        },
        "15": {
            "name": "SARAYKOY isletme",
            "SAİDİ": 22.74,
            "SAİFİ": 0.5
        },
        "16": {
            "name": "SOKE isletme",
            "SAİDİ": 49.12,
            "SAİFİ": 0.67
        },
        "17": {
            "name": "AYDİN",
            "SAİDİ": 30.22,
            "SAİFİ": 0.94
        },
        "18": {
            "name": "BODRUM",
            "SAİDİ": 64.46,
            "SAİFİ": 1.85
        },
        "19": {
            "name": "DENİZLİ",
            "SAİDİ": 18.47,
            "SAİFİ": 0.5
        },
        "20": {
            "name": "MUGLA",
            "SAİDİ": 69.46,
            "SAİFİ": 1.84
        },
        "21": {
            "name": "ADM",
            "SAİDİ": 39.7,
            "SAİFİ": 1.12
        }
    },
    "6": {
        "1": {
            "name": "ACİPAYAM isletme",
            "SAİDİ": 20.15,
            "SAİFİ": 0.81
        },
        "2": {
            "name": "AYDİN MERKEZ isletme",
            "SAİDİ": 51.12,
            "SAİFİ": 1.51
        },
        "3": {
            "name": "BODRUM isletme",
            "SAİDİ": 50.74,
            "SAİFİ": 1.57
        },
        "4": {
            "name": "CİNE isletme",
            "SAİDİ": 79.49,
            "SAİFİ": 1.32
        },
        "5": {
            "name": "CİVRİL isletme",
            "SAİDİ": 30.49,
            "SAİFİ": 0.99
        },
        "6": {
            "name": "DENİZLİ MERKEZ isletme",
            "SAİDİ": 14.17,
            "SAİFİ": 0.44
        },
        "7": {
            "name": "DİDİM isletme",
            "SAİDİ": 52.23,
            "SAİFİ": 1.12
        },
        "8": {
            "name": "FETHİYE isletme",
            "SAİDİ": 52.73,
            "SAİFİ": 1.87
        },
        "9": {
            "name": "KUSADASİ isletme",
            "SAİDİ": 32.56,
            "SAİFİ": 0.5
        },
        "10": {
            "name": "MARMARİS isletme",
            "SAİDİ": 31.09,
            "SAİFİ": 0.53
        },
        "11": {
            "name": "MİLAS isletme",
            "SAİDİ": 76.12,
            "SAİFİ": 2.53
        },
        "12": {
            "name": "MUGLA MERKEZ isletme",
            "SAİDİ": 48.79,
            "SAİFİ": 1.72
        },
        "13": {
            "name": "NAZİLLİ isletme",
            "SAİDİ": 21.58,
            "SAİFİ": 1.18
        },
        "14": {
            "name": "ORTACA isletme",
            "SAİDİ": 46.64,
            "SAİFİ": 1.27
        },
        "15": {
            "name": "SARAYKOY isletme",
            "SAİDİ": 30.12,
            "SAİFİ": 1.09
        },
        "16": {
            "name": "SOKE isletme",
            "SAİDİ": 27.62,
            "SAİFİ": 0.47
        },
        "17": {
            "name": "AYDİN",
            "SAİDİ": 40.91,
            "SAİFİ": 1.11
        },
        "18": {
            "name": "BODRUM",
            "SAİDİ": 50.74,
            "SAİFİ": 1.57
        },
        "19": {
            "name": "DENİZLİ",
            "SAİDİ": 18.64,
            "SAİFİ": 0.63
        },
        "20": {
            "name": "MUGLA",
            "SAİDİ": 46.6,
            "SAİFİ": 1.47
        },
        "21": {
            "name": "ADM",
            "SAİDİ": 36.78,
            "SAİFİ": 1.1
        }
    },
    "7": {
        "1": {
            "name": "ACİPAYAM isletme",
            "SAİDİ": 65.36,
            "SAİFİ": 3.53
        },
        "2": {
            "name": "AYDİN MERKEZ isletme",
            "SAİDİ": 85.62,
            "SAİFİ": 2.15
        },
        "3": {
            "name": "BODRUM isletme",
            "SAİDİ": 133.22,
            "SAİFİ": 2.3
        },
        "4": {
            "name": "CİNE isletme",
            "SAİDİ": 58.7,
            "SAİFİ": 1.21
        },
        "5": {
            "name": "CİVRİL isletme",
            "SAİDİ": 91.93,
            "SAİFİ": 1.98
        },
        "6": {
            "name": "DENİZLİ MERKEZ isletme",
            "SAİDİ": 104.27,
            "SAİFİ": 1.76
        },
        "7": {
            "name": "DİDİM isletme",
            "SAİDİ": 91.14,
            "SAİFİ": 1.47
        },
        "8": {
            "name": "FETHİYE isletme",
            "SAİDİ": 182.53,
            "SAİFİ": 2.79
        },
        "9": {
            "name": "KUSADASİ isletme",
            "SAİDİ": 48.99,
            "SAİFİ": 0.94
        },
        "10": {
            "name": "MARMARİS isletme",
            "SAİDİ": 71.76,
            "SAİFİ": 1.71
        },
        "11": {
            "name": "MİLAS isletme",
            "SAİDİ": 153.26,
            "SAİFİ": 3.0
        },
        "12": {
            "name": "MUGLA MERKEZ isletme",
            "SAİDİ": 63.22,
            "SAİFİ": 1.73
        },
        "13": {
            "name": "NAZİLLİ isletme",
            "SAİDİ": 43.17,
            "SAİFİ": 1.74
        },
        "14": {
            "name": "ORTACA isletme",
            "SAİDİ": 121.32,
            "SAİFİ": 2.07
        },
        "15": {
            "name": "SARAYKOY isletme",
            "SAİDİ": 29.86,
            "SAİFİ": 1.04
        },
        "16": {
            "name": "SOKE isletme",
            "SAİDİ": 74.52,
            "SAİFİ": 1.24
        },
        "17": {
            "name": "AYDİN",
            "SAİDİ": 67.92,
            "SAİFİ": 1.62
        },
        "18": {
            "name": "BODRUM",
            "SAİDİ": 133.22,
            "SAİFİ": 2.3
        },
        "19": {
            "name": "DENİZLİ",
            "SAİDİ": 89.3,
            "SAİFİ": 2.05
        },
        "20": {
            "name": "MUGLA",
            "SAİDİ": 118.84,
            "SAİFİ": 2.17
        },
        "21": {
            "name": "ADM",
            "SAİDİ": 93.52,
            "SAİFİ": 1.95
        }
    },
    "8": {
        "1": {
            "name": "ACİPAYAM isletme",
            "SAİDİ": 53.05,
            "SAİFİ": 1.81
        },
        "2": {
            "name": "AYDİN MERKEZ isletme",
            "SAİDİ": 42.3,
            "SAİFİ": 1.07
        },
        "3": {
            "name": "BODRUM isletme",
            "SAİDİ": 105.97,
            "SAİFİ": 1.98
        },
        "4": {
            "name": "CİNE isletme",
            "SAİDİ": 103.07,
            "SAİFİ": 1.62
        },
        "5": {
            "name": "CİVRİL isletme",
            "SAİDİ": 18.72,
            "SAİFİ": 0.85
        },
        "6": {
            "name": "DENİZLİ MERKEZ isletme",
            "SAİDİ": 29.41,
            "SAİFİ": 0.7
        },
        "7": {
            "name": "DİDİM isletme",
            "SAİDİ": 78.57,
            "SAİFİ": 0.85
        },
        "8": {
            "name": "FETHİYE isletme",
            "SAİDİ": 53.8,
            "SAİFİ": 1.33
        },
        "9": {
            "name": "KUSADASİ isletme",
            "SAİDİ": 21.99,
            "SAİFİ": 0.71
        },
        "10": {
            "name": "MARMARİS isletme",
            "SAİDİ": 59.71,
            "SAİFİ": 1.41
        },
        "11": {
            "name": "MİLAS isletme",
            "SAİDİ": 113.46,
            "SAİFİ": 2.6
        },
        "12": {
            "name": "MUGLA MERKEZ isletme",
            "SAİDİ": 58.97,
            "SAİFİ": 1.58
        },
        "13": {
            "name": "NAZİLLİ isletme",
            "SAİDİ": 37.39,
            "SAİFİ": 1.27
        },
        "14": {
            "name": "ORTACA isletme",
            "SAİDİ": 42.48,
            "SAİFİ": 0.99
        },
        "15": {
            "name": "SARAYKOY isletme",
            "SAİDİ": 28.95,
            "SAİFİ": 1.1
        },
        "16": {
            "name": "SOKE isletme",
            "SAİDİ": 57.1,
            "SAİFİ": 0.64
        },
        "17": {
            "name": "AYDİN",
            "SAİDİ": 47.45,
            "SAİFİ": 1.02
        },
        "18": {
            "name": "BODRUM",
            "SAİDİ": 105.97,
            "SAİFİ": 1.98
        },
        "19": {
            "name": "DENİZLİ",
            "SAİDİ": 32.39,
            "SAİFİ": 0.96
        },
        "20": {
            "name": "MUGLA",
            "SAİDİ": 53.82,
            "SAİFİ": 1.34
        },
        "21": {
            "name": "ADM",
            "SAİDİ": 51.36,
            "SAİFİ": 1.19
        }
    },
    "9": {
        "1": {
            "name": "ACİPAYAM isletme",
            "SAİDİ": 27.01,
            "SAİFİ": 0.95
        },
        "2": {
            "name": "AYDİN MERKEZ isletme",
            "SAİDİ": 27.7,
            "SAİFİ": 0.92
        },
        "3": {
            "name": "BODRUM isletme",
            "SAİDİ": 63.58,
            "SAİFİ": 1.59
        },
        "4": {
            "name": "CİNE isletme",
            "SAİDİ": 50.14,
            "SAİFİ": 1.71
        },
        "5": {
            "name": "CİVRİL isletme",
            "SAİDİ": 31.22,
            "SAİFİ": 1.02
        },
        "6": {
            "name": "DENİZLİ MERKEZ isletme",
            "SAİDİ": 15.03,
            "SAİFİ": 0.45
        },
        "7": {
            "name": "DİDİM isletme",
            "SAİDİ": 33.32,
            "SAİFİ": 0.63
        },
        "8": {
            "name": "FETHİYE isletme",
            "SAİDİ": 53.13,
            "SAİFİ": 1.17
        },
        "9": {
            "name": "KUSADASİ isletme",
            "SAİDİ": 20.62,
            "SAİFİ": 0.38
        },
        "10": {
            "name": "MARMARİS isletme",
            "SAİDİ": 119.46,
            "SAİFİ": 2.54
        },
        "11": {
            "name": "MİLAS isletme",
            "SAİDİ": 107.9,
            "SAİFİ": 2.65
        },
        "12": {
            "name": "MUGLA MERKEZ isletme",
            "SAİDİ": 55.85,
            "SAİFİ": 1.29
        },
        "13": {
            "name": "NAZİLLİ isletme",
            "SAİDİ": 19.83,
            "SAİFİ": 0.84
        },
        "14": {
            "name": "ORTACA isletme",
            "SAİDİ": 58.33,
            "SAİFİ": 1.5
        },
        "15": {
            "name": "SARAYKOY isletme",
            "SAİDİ": 53.95,
            "SAİFİ": 1.0
        },
        "16": {
            "name": "SOKE isletme",
            "SAİDİ": 62.08,
            "SAİFİ": 1.44
        },
        "17": {
            "name": "AYDİN",
            "SAİDİ": 29.61,
            "SAİFİ": 0.85
        },
        "18": {
            "name": "BODRUM",
            "SAİDİ": 63.58,
            "SAİFİ": 1.59
        },
        "19": {
            "name": "DENİZLİ",
            "SAİDİ": 22.53,
            "SAİFİ": 0.66
        },
        "20": {
            "name": "MUGLA",
            "SAİDİ": 66.64,
            "SAİFİ": 1.51
        },
        "21": {
            "name": "ADM",
            "SAİDİ": 39.94,
            "SAİFİ": 1.03
        }
    },
    "10": {
        "1": {
            "name": "ACİPAYAM isletme",
            "SAİDİ": 37.76,
            "SAİFİ": 1.69
        },
        "2": {
            "name": "AYDİN MERKEZ isletme",
            "SAİDİ": 20.22,
            "SAİFİ": 0.66
        },
        "3": {
            "name": "BODRUM isletme",
            "SAİDİ": 115.86,
            "SAİFİ": 2.64
        },
        "4": {
            "name": "CİNE isletme",
            "SAİDİ": 53.79,
            "SAİFİ": 1.01
        },
        "5": {
            "name": "CİVRİL isletme",
            "SAİDİ": 22.68,
            "SAİFİ": 0.74
        },
        "6": {
            "name": "DENİZLİ MERKEZ isletme",
            "SAİDİ": 10.0,
            "SAİFİ": 0.33
        },
        "7": {
            "name": "DİDİM isletme",
            "SAİDİ": 35.76,
            "SAİFİ": 0.81
        },
        "8": {
            "name": "FETHİYE isletme",
            "SAİDİ": 112.05,
            "SAİFİ": 2.64
        },
        "9": {
            "name": "KUSADASİ isletme",
            "SAİDİ": 45.22,
            "SAİFİ": 0.95
        },
        "10": {
            "name": "MARMARİS isletme",
            "SAİDİ": 85.11,
            "SAİFİ": 2.2
        },
        "11": {
            "name": "MİLAS isletme",
            "SAİDİ": 196.21,
            "SAİFİ": 4.16
        },
        "12": {
            "name": "MUGLA MERKEZ isletme",
            "SAİDİ": 45.19,
            "SAİFİ": 1.86
        },
        "13": {
            "name": "NAZİLLİ isletme",
            "SAİDİ": 19.24,
            "SAİFİ": 0.91
        },
        "14": {
            "name": "ORTACA isletme",
            "SAİDİ": 161.59,
            "SAİFİ": 2.65
        },
        "15": {
            "name": "SARAYKOY isletme",
            "SAİDİ": 13.99,
            "SAİFİ": 0.3
        },
        "16": {
            "name": "SOKE isletme",
            "SAİDİ": 47.84,
            "SAİFİ": 0.98
        },
        "17": {
            "name": "AYDİN",
            "SAİDİ": 30.72,
            "SAİFİ": 0.83
        },
        "18": {
            "name": "BODRUM",
            "SAİDİ": 115.86,
            "SAİFİ": 2.64
        },
        "19": {
            "name": "DENİZLİ",
            "SAİDİ": 17.01,
            "SAİFİ": 0.63
        },
        "20": {
            "name": "MUGLA",
            "SAİDİ": 100.18,
            "SAİFİ": 2.36
        },
        "21": {
            "name": "ADM",
            "SAİDİ": 52.5,
            "SAİFİ": 1.33
        }
    },
    "11": {
        "1": {
            "name": "ACİPAYAM isletme",
            "SAİDİ": 37.65,
            "SAİFİ": 1.24
        },
        "2": {
            "name": "AYDİN MERKEZ isletme",
            "SAİDİ": 18.75,
            "SAİFİ": 0.49
        },
        "3": {
            "name": "BODRUM isletme",
            "SAİDİ": 76.46,
            "SAİFİ": 1.66
        },
        "4": {
            "name": "CİNE isletme",
            "SAİDİ": 32.72,
            "SAİFİ": 0.99
        },
        "5": {
            "name": "CİVRİL isletme",
            "SAİDİ": 20.51,
            "SAİFİ": 0.82
        },
        "6": {
            "name": "DENİZLİ MERKEZ isletme",
            "SAİDİ": 20.8,
            "SAİFİ": 0.63
        },
        "7": {
            "name": "DİDİM isletme",
            "SAİDİ": 47.66,
            "SAİFİ": 1.85
        },
        "8": {
            "name": "FETHİYE isletme",
            "SAİDİ": 105.42,
            "SAİFİ": 2.22
        },
        "9": {
            "name": "KUSADASİ isletme",
            "SAİDİ": 24.66,
            "SAİFİ": 0.46
        },
        "10": {
            "name": "MARMARİS isletme",
            "SAİDİ": 308.3,
            "SAİFİ": 1.42
        },
        "11": {
            "name": "MİLAS isletme",
            "SAİDİ": 98.75,
            "SAİFİ": 2.15
        },
        "12": {
            "name": "MUGLA MERKEZ isletme",
            "SAİDİ": 49.05,
            "SAİFİ": 2.08
        },
        "13": {
            "name": "NAZİLLİ isletme",
            "SAİDİ": 20.0,
            "SAİFİ": 0.92
        },
        "14": {
            "name": "ORTACA isletme",
            "SAİDİ": 146.76,
            "SAİFİ": 2.19
        },
        "15": {
            "name": "SARAYKOY isletme",
            "SAİDİ": 9.83,
            "SAİFİ": 0.37
        },
        "16": {
            "name": "SOKE isletme",
            "SAİDİ": 59.68,
            "SAİFİ": 1.0
        },
        "17": {
            "name": "AYDİN",
            "SAİDİ": 28.4,
            "SAİFİ": 0.85
        },
        "18": {
            "name": "BODRUM",
            "SAİDİ": 76.46,
            "SAİFİ": 1.66
        },
        "19": {
            "name": "DENİZLİ",
            "SAİDİ": 22.93,
            "SAİFİ": 0.74
        },
        "20": {
            "name": "MUGLA",
            "SAİDİ": 135.11,
            "SAİFİ": 2.04
        },
        "21": {
            "name": "ADM",
            "SAİDİ": 56.69,
            "SAİFİ": 1.18
        }
    },
    "12": {
        "1": {
            "name": "ACİPAYAM isletme",
            "SAİDİ": 0,
            "SAİFİ": 0
        },
        "2": {
            "name": "AYDİN MERKEZ isletme",
            "SAİDİ": 0.15,
            "SAİFİ": 0.0
        },
        "3": {
            "name": "BODRUM isletme",
            "SAİDİ": 0.05,
            "SAİFİ": 0.01
        },
        "4": {
            "name": "CİNE isletme",
            "SAİDİ": 0,
            "SAİFİ": 0
        },
        "5": {
            "name": "CİVRİL isletme",
            "SAİDİ": 0.0,
            "SAİFİ": 0.0
        },
        "6": {
            "name": "DENİZLİ MERKEZ isletme",
            "SAİDİ": 0.01,
            "SAİFİ": 0.0
        },
        "7": {
            "name": "DİDİM isletme",
            "SAİDİ": 0.01,
            "SAİFİ": 0.0
        },
        "8": {
            "name": "FETHİYE isletme",
            "SAİDİ": 0.08,
            "SAİFİ": 0.0
        },
        "9": {
            "name": "KUSADASİ isletme",
            "SAİDİ": 0.0,
            "SAİFİ": 0.0
        },
        "10": {
            "name": "MARMARİS isletme",
            "SAİDİ": 0.18,
            "SAİFİ": 0.01
        },
        "11": {
            "name": "MİLAS isletme",
            "SAİDİ": 0,
            "SAİFİ": 0
        },
        "12": {
            "name": "MUGLA MERKEZ isletme",
            "SAİDİ": 0.02,
            "SAİFİ": 0.0
        },
        "13": {
            "name": "NAZİLLİ isletme",
            "SAİDİ": 0,
            "SAİFİ": 0
        },
        "14": {
            "name": "ORTACA isletme",
            "SAİDİ": 0.91,
            "SAİFİ": 0.01
        },
        "15": {
            "name": "SARAYKOY isletme",
            "SAİDİ": 0,
            "SAİFİ": 0
        },
        "16": {
            "name": "SOKE isletme",
            "SAİDİ": 0,
            "SAİFİ": 0
        },
        "17": {
            "name": "AYDİN",
            "SAİDİ": 0.05,
            "SAİFİ": 0.0
        },
        "18": {
            "name": "BODRUM",
            "SAİDİ": 0.05,
            "SAİFİ": 0.01
        },
        "19": {
            "name": "DENİZLİ",
            "SAİDİ": 0.01,
            "SAİFİ": 0.0
        },
        "20": {
            "name": "MUGLA",
            "SAİDİ": 0.25,
            "SAİFİ": 0.01
        },
        "21": {
            "name": "ADM",
            "SAİDİ": 0.08,
            "SAİFİ": 0.0
        }
    }
  
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