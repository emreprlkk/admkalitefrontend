import React, { useState, useEffect } from 'react';
import * as XLSX from 'xlsx';


//import alasql from 'alasql';
import ApexCharts from './ApexCharts';
//import NavbarBolge from './NavbarBolge'; 
//import Navbarİsletme from './NavbarIsletme';
//import { useData } from './DataContext';



     
    import ReactApexChart from 'react-apexcharts';
    
    export const SummaryGraph = ({isletme,navbarbolgecount,navbarisletmecount}) => {
const initialStateSummaryData=[
    {
        "1": [
            {
                "isletmeName": "CİNE isletme",
                "ORT_OG_ARIZA_SÜRESİ_DK": 102.32,
                "OG_KESİNTİ_SAYISI": 32,
                "ORT_AG_ARIZA_SÜRESİ_SAAT": 3.37,
                "AG_KESİNTİ_SAYISI": 111,
                "OG_KISA_KESİNTİ_SAYISI": 11,
                "OG_UZUN_KESİNTİ_SAYISI": 32
            },
            {
                "isletmeName": "AYDİN MERKEZ isletme",
                "ORT_OG_ARIZA_SÜRESİ_DK": 93.51,
                "OG_KESİNTİ_SAYISI": 149,
                "ORT_AG_ARIZA_SÜRESİ_SAAT": 2.45,
                "AG_KESİNTİ_SAYISI": 484,
                "OG_KISA_KESİNTİ_SAYISI": 23,
                "OG_UZUN_KESİNTİ_SAYISI": 149
            },
            {
                "isletmeName": "KUŞADASI isletme",
                "ORT_OG_ARIZA_SÜRESİ_DK": 96.63,
                "OG_KESİNTİ_SAYISI": 52,
                "ORT_AG_ARIZA_SÜRESİ_SAAT": 2.42,
                "AG_KESİNTİ_SAYISI": 342,
                "OG_KISA_KESİNTİ_SAYISI": 4,
                "OG_UZUN_KESİNTİ_SAYISI": 52
            },
            {
                "isletmeName": "NAZİLLİ isletme",
                "ORT_OG_ARIZA_SÜRESİ_DK": 80.05,
                "OG_KESİNTİ_SAYISI": 92,
                "ORT_AG_ARIZA_SÜRESİ_SAAT": 2.48,
                "AG_KESİNTİ_SAYISI": 346,
                "OG_KISA_KESİNTİ_SAYISI": 35,
                "OG_UZUN_KESİNTİ_SAYISI": 92
            },
            {
                "isletmeName": "BODRUM isletme",
                "ORT_OG_ARIZA_SÜRESİ_DK": 82.84,
                "OG_KESİNTİ_SAYISI": 119,
                "ORT_AG_ARIZA_SÜRESİ_SAAT": 3.14,
                "AG_KESİNTİ_SAYISI": 552,
                "OG_KISA_KESİNTİ_SAYISI": 18,
                "OG_UZUN_KESİNTİ_SAYISI": 119
            },
            {
                "isletmeName": "SARAYKÖY isletme",
                "ORT_OG_ARIZA_SÜRESİ_DK": 59.48,
                "OG_KESİNTİ_SAYISI": 22,
                "ORT_AG_ARIZA_SÜRESİ_SAAT": 2.08,
                "AG_KESİNTİ_SAYISI": 80,
                "OG_KISA_KESİNTİ_SAYISI": 9,
                "OG_UZUN_KESİNTİ_SAYISI": 22
            },
            {
                "isletmeName": "FETHİYE isletme",
                "ORT_OG_ARIZA_SÜRESİ_DK": 83.0,
                "OG_KESİNTİ_SAYISI": 146,
                "ORT_AG_ARIZA_SÜRESİ_SAAT": 2.76,
                "AG_KESİNTİ_SAYISI": 528,
                "OG_KISA_KESİNTİ_SAYISI": 17,
                "OG_UZUN_KESİNTİ_SAYISI": 146
            },
            {
                "isletmeName": "SÖKE isletme",
                "ORT_OG_ARIZA_SÜRESİ_DK": 105.04,
                "OG_KESİNTİ_SAYISI": 49,
                "ORT_AG_ARIZA_SÜRESİ_SAAT": 2.94,
                "AG_KESİNTİ_SAYISI": 232,
                "OG_KISA_KESİNTİ_SAYISI": 17,
                "OG_UZUN_KESİNTİ_SAYISI": 49
            },
            {
                "isletmeName": "DENİZLİ MERKEZ isletme",
                "ORT_OG_ARIZA_SÜRESİ_DK": 66.81,
                "OG_KESİNTİ_SAYISI": 84,
                "ORT_AG_ARIZA_SÜRESİ_SAAT": 2.14,
                "AG_KESİNTİ_SAYISI": 442,
                "OG_KISA_KESİNTİ_SAYISI": 16,
                "OG_UZUN_KESİNTİ_SAYISI": 84
            },
            {
                "isletmeName": "MUĞLA MERKEZ isletme",
                "ORT_OG_ARIZA_SÜRESİ_DK": 64.73,
                "OG_KESİNTİ_SAYISI": 142,
                "ORT_AG_ARIZA_SÜRESİ_SAAT": 2.46,
                "AG_KESİNTİ_SAYISI": 325,
                "OG_KISA_KESİNTİ_SAYISI": 22,
                "OG_UZUN_KESİNTİ_SAYISI": 142
            },
            {
                "isletmeName": "MİLAS isletme",
                "ORT_OG_ARIZA_SÜRESİ_DK": 95.77,
                "OG_KESİNTİ_SAYISI": 179,
                "ORT_AG_ARIZA_SÜRESİ_SAAT": 3.46,
                "AG_KESİNTİ_SAYISI": 467,
                "OG_KISA_KESİNTİ_SAYISI": 24,
                "OG_UZUN_KESİNTİ_SAYISI": 179
            },
            {
                "isletmeName": "ORTACA isletme ",
                "ORT_OG_ARIZA_SÜRESİ_DK": 57.53,
                "OG_KESİNTİ_SAYISI": 67,
                "ORT_AG_ARIZA_SÜRESİ_SAAT": 2.51,
                "AG_KESİNTİ_SAYISI": 259,
                "OG_KISA_KESİNTİ_SAYISI": 17,
                "OG_UZUN_KESİNTİ_SAYISI": 67
            },
            {
                "isletmeName": "ACIPAYAM isletme ",
                "ORT_OG_ARIZA_SÜRESİ_DK": 57.04,
                "OG_KESİNTİ_SAYISI": 86,
                "ORT_AG_ARIZA_SÜRESİ_SAAT": 1.91,
                "AG_KESİNTİ_SAYISI": 221,
                "OG_KISA_KESİNTİ_SAYISI": 33,
                "OG_UZUN_KESİNTİ_SAYISI": 86
            },
            {
                "isletmeName": "MARMARİS isletme",
                "ORT_OG_ARIZA_SÜRESİ_DK": 71.51,
                "OG_KESİNTİ_SAYISI": 85,
                "ORT_AG_ARIZA_SÜRESİ_SAAT": 3.29,
                "AG_KESİNTİ_SAYISI": 172,
                "OG_KISA_KESİNTİ_SAYISI": 18,
                "OG_UZUN_KESİNTİ_SAYISI": 85
            },
            {
                "isletmeName": "DİDİM isletme",
                "ORT_OG_ARIZA_SÜRESİ_DK": 72.56,
                "OG_KESİNTİ_SAYISI": 49,
                "ORT_AG_ARIZA_SÜRESİ_SAAT": 2.38,
                "AG_KESİNTİ_SAYISI": 263,
                "OG_KISA_KESİNTİ_SAYISI": 13,
                "OG_UZUN_KESİNTİ_SAYISI": 49
            },
            {
                "isletmeName": "CİVRİL isletme",
                "ORT_OG_ARIZA_SÜRESİ_DK": 67.89,
                "OG_KESİNTİ_SAYISI": 88,
                "ORT_AG_ARIZA_SÜRESİ_SAAT": 1.75,
                "AG_KESİNTİ_SAYISI": 193,
                "OG_KISA_KESİNTİ_SAYISI": 25,
                "OG_UZUN_KESİNTİ_SAYISI": 88
            }
        ],
        "2": [
            {
                "isletmeName": "KUŞADASI isletme",
                "ORT_OG_ARIZA_SÜRESİ_DK": 89.56,
                "OG_KESİNTİ_SAYISI": 34,
                "ORT_AG_ARIZA_SÜRESİ_SAAT": 2.14,
                "AG_KESİNTİ_SAYISI": 237,
                "OG_KISA_KESİNTİ_SAYISI": 3,
                "OG_UZUN_KESİNTİ_SAYISI": 34
            },
            {
                "isletmeName": "SÖKE isletme",
                "ORT_OG_ARIZA_SÜRESİ_DK": 91.04,
                "OG_KESİNTİ_SAYISI": 36,
                "ORT_AG_ARIZA_SÜRESİ_SAAT": 2.66,
                "AG_KESİNTİ_SAYISI": 122,
                "OG_KISA_KESİNTİ_SAYISI": 8,
                "OG_UZUN_KESİNTİ_SAYISI": 36
            },
            {
                "isletmeName": "MUĞLA MERKEZ isletme",
                "ORT_OG_ARIZA_SÜRESİ_DK": 64.47,
                "OG_KESİNTİ_SAYISI": 114,
                "ORT_AG_ARIZA_SÜRESİ_SAAT": 2.02,
                "AG_KESİNTİ_SAYISI": 249,
                "OG_KISA_KESİNTİ_SAYISI": 20,
                "OG_UZUN_KESİNTİ_SAYISI": 114
            },
            {
                "isletmeName": "AYDİN MERKEZ isletme",
                "ORT_OG_ARIZA_SÜRESİ_DK": 84.12,
                "OG_KESİNTİ_SAYISI": 98,
                "ORT_AG_ARIZA_SÜRESİ_SAAT": 2.51,
                "AG_KESİNTİ_SAYISI": 291,
                "OG_KISA_KESİNTİ_SAYISI": 12,
                "OG_UZUN_KESİNTİ_SAYISI": 98
            },
            {
                "isletmeName": "NAZİLLİ isletme",
                "ORT_OG_ARIZA_SÜRESİ_DK": 60.05,
                "OG_KESİNTİ_SAYISI": 104,
                "ORT_AG_ARIZA_SÜRESİ_SAAT": 2.26,
                "AG_KESİNTİ_SAYISI": 198,
                "OG_KISA_KESİNTİ_SAYISI": 29,
                "OG_UZUN_KESİNTİ_SAYISI": 104
            },
            {
                "isletmeName": "DENİZLİ MERKEZ isletme",
                "ORT_OG_ARIZA_SÜRESİ_DK": 56.1,
                "OG_KESİNTİ_SAYISI": 80,
                "ORT_AG_ARIZA_SÜRESİ_SAAT": 1.9,
                "AG_KESİNTİ_SAYISI": 368,
                "OG_KISA_KESİNTİ_SAYISI": 12,
                "OG_UZUN_KESİNTİ_SAYISI": 80
            },
            {
                "isletmeName": "SARAYKÖY isletme",
                "ORT_OG_ARIZA_SÜRESİ_DK": 42.77,
                "OG_KESİNTİ_SAYISI": 29,
                "ORT_AG_ARIZA_SÜRESİ_SAAT": 2.12,
                "AG_KESİNTİ_SAYISI": 52,
                "OG_KISA_KESİNTİ_SAYISI": 4,
                "OG_UZUN_KESİNTİ_SAYISI": 29
            },
            {
                "isletmeName": "FETHİYE isletme",
                "ORT_OG_ARIZA_SÜRESİ_DK": 92.91,
                "OG_KESİNTİ_SAYISI": 131,
                "ORT_AG_ARIZA_SÜRESİ_SAAT": 3.0,
                "AG_KESİNTİ_SAYISI": 330,
                "OG_KISA_KESİNTİ_SAYISI": 12,
                "OG_UZUN_KESİNTİ_SAYISI": 131
            },
            {
                "isletmeName": "ORTACA isletme ",
                "ORT_OG_ARIZA_SÜRESİ_DK": 92.58,
                "OG_KESİNTİ_SAYISI": 60,
                "ORT_AG_ARIZA_SÜRESİ_SAAT": 2.24,
                "AG_KESİNTİ_SAYISI": 160,
                "OG_KISA_KESİNTİ_SAYISI": 22,
                "OG_UZUN_KESİNTİ_SAYISI": 60
            },
            {
                "isletmeName": "ACIPAYAM isletme ",
                "ORT_OG_ARIZA_SÜRESİ_DK": 69.03,
                "OG_KESİNTİ_SAYISI": 87,
                "ORT_AG_ARIZA_SÜRESİ_SAAT": 1.86,
                "AG_KESİNTİ_SAYISI": 145,
                "OG_KISA_KESİNTİ_SAYISI": 24,
                "OG_UZUN_KESİNTİ_SAYISI": 87
            },
            {
                "isletmeName": "MARMARİS isletme",
                "ORT_OG_ARIZA_SÜRESİ_DK": 103.49,
                "OG_KESİNTİ_SAYISI": 110,
                "ORT_AG_ARIZA_SÜRESİ_SAAT": 3.85,
                "AG_KESİNTİ_SAYISI": 192,
                "OG_KISA_KESİNTİ_SAYISI": 8,
                "OG_UZUN_KESİNTİ_SAYISI": 110
            },
            {
                "isletmeName": "DİDİM isletme",
                "ORT_OG_ARIZA_SÜRESİ_DK": 79.61,
                "OG_KESİNTİ_SAYISI": 32,
                "ORT_AG_ARIZA_SÜRESİ_SAAT": 2.74,
                "AG_KESİNTİ_SAYISI": 201,
                "OG_KISA_KESİNTİ_SAYISI": 8,
                "OG_UZUN_KESİNTİ_SAYISI": 32
            },
            {
                "isletmeName": "BODRUM isletme",
                "ORT_OG_ARIZA_SÜRESİ_DK": 97.34,
                "OG_KESİNTİ_SAYISI": 123,
                "ORT_AG_ARIZA_SÜRESİ_SAAT": 3.48,
                "AG_KESİNTİ_SAYISI": 337,
                "OG_KISA_KESİNTİ_SAYISI": 8,
                "OG_UZUN_KESİNTİ_SAYISI": 123
            },
            {
                "isletmeName": "MİLAS isletme",
                "ORT_OG_ARIZA_SÜRESİ_DK": 120.32,
                "OG_KESİNTİ_SAYISI": 140,
                "ORT_AG_ARIZA_SÜRESİ_SAAT": 3.54,
                "AG_KESİNTİ_SAYISI": 302,
                "OG_KISA_KESİNTİ_SAYISI": 18,
                "OG_UZUN_KESİNTİ_SAYISI": 140
            },
            {
                "isletmeName": "CİVRİL isletme",
                "ORT_OG_ARIZA_SÜRESİ_DK": 63.57,
                "OG_KESİNTİ_SAYISI": 81,
                "ORT_AG_ARIZA_SÜRESİ_SAAT": 1.66,
                "AG_KESİNTİ_SAYISI": 102,
                "OG_KISA_KESİNTİ_SAYISI": 20,
                "OG_UZUN_KESİNTİ_SAYISI": 81
            },
            {
                "isletmeName": "CİNE isletme",
                "ORT_OG_ARIZA_SÜRESİ_DK": 75.94,
                "OG_KESİNTİ_SAYISI": 24,
                "ORT_AG_ARIZA_SÜRESİ_SAAT": 2.78,
                "AG_KESİNTİ_SAYISI": 78,
                "OG_KISA_KESİNTİ_SAYISI": 10,
                "OG_UZUN_KESİNTİ_SAYISI": 24
            }
        ],
        "3": [
            {
                "isletmeName": "ACIPAYAM isletme ",
                "ORT_OG_ARIZA_SÜRESİ_DK": 60.85,
                "OG_KESİNTİ_SAYISI": 113,
                "ORT_AG_ARIZA_SÜRESİ_SAAT": 1.82,
                "AG_KESİNTİ_SAYISI": 162,
                "OG_KISA_KESİNTİ_SAYISI": 50,
                "OG_UZUN_KESİNTİ_SAYISI": 113
            },
            {
                "isletmeName": "SÖKE isletme",
                "ORT_OG_ARIZA_SÜRESİ_DK": 83.15,
                "OG_KESİNTİ_SAYISI": 32,
                "ORT_AG_ARIZA_SÜRESİ_SAAT": 3.16,
                "AG_KESİNTİ_SAYISI": 85,
                "OG_KISA_KESİNTİ_SAYISI": 8,
                "OG_UZUN_KESİNTİ_SAYISI": 32
            },
            {
                "isletmeName": "DENİZLİ MERKEZ isletme",
                "ORT_OG_ARIZA_SÜRESİ_DK": 53.64,
                "OG_KESİNTİ_SAYISI": 93,
                "ORT_AG_ARIZA_SÜRESİ_SAAT": 1.71,
                "AG_KESİNTİ_SAYISI": 289,
                "OG_KISA_KESİNTİ_SAYISI": 22,
                "OG_UZUN_KESİNTİ_SAYISI": 93
            },
            {
                "isletmeName": "MARMARİS isletme",
                "ORT_OG_ARIZA_SÜRESİ_DK": 136.27,
                "OG_KESİNTİ_SAYISI": 104,
                "ORT_AG_ARIZA_SÜRESİ_SAAT": 3.87,
                "AG_KESİNTİ_SAYISI": 145,
                "OG_KISA_KESİNTİ_SAYISI": 10,
                "OG_UZUN_KESİNTİ_SAYISI": 104
            },
            {
                "isletmeName": "MUĞLA MERKEZ isletme",
                "ORT_OG_ARIZA_SÜRESİ_DK": 49.62,
                "OG_KESİNTİ_SAYISI": 136,
                "ORT_AG_ARIZA_SÜRESİ_SAAT": 2.31,
                "AG_KESİNTİ_SAYISI": 227,
                "OG_KISA_KESİNTİ_SAYISI": 34,
                "OG_UZUN_KESİNTİ_SAYISI": 136
            },
            {
                "isletmeName": "ORTACA isletme ",
                "ORT_OG_ARIZA_SÜRESİ_DK": 74.93,
                "OG_KESİNTİ_SAYISI": 80,
                "ORT_AG_ARIZA_SÜRESİ_SAAT": 2.68,
                "AG_KESİNTİ_SAYISI": 144,
                "OG_KISA_KESİNTİ_SAYISI": 14,
                "OG_UZUN_KESİNTİ_SAYISI": 80
            },
            {
                "isletmeName": "AYDİN MERKEZ isletme",
                "ORT_OG_ARIZA_SÜRESİ_DK": 77.62,
                "OG_KESİNTİ_SAYISI": 143,
                "ORT_AG_ARIZA_SÜRESİ_SAAT": 2.35,
                "AG_KESİNTİ_SAYISI": 291,
                "OG_KISA_KESİNTİ_SAYISI": 27,
                "OG_UZUN_KESİNTİ_SAYISI": 143
            },
            {
                "isletmeName": "KUŞADASI isletme",
                "ORT_OG_ARIZA_SÜRESİ_DK": 56.81,
                "OG_KESİNTİ_SAYISI": 18,
                "ORT_AG_ARIZA_SÜRESİ_SAAT": 2.06,
                "AG_KESİNTİ_SAYISI": 177,
                "OG_KISA_KESİNTİ_SAYISI": 3,
                "OG_UZUN_KESİNTİ_SAYISI": 18
            },
            {
                "isletmeName": "FETHİYE isletme",
                "ORT_OG_ARIZA_SÜRESİ_DK": 95.07,
                "OG_KESİNTİ_SAYISI": 144,
                "ORT_AG_ARIZA_SÜRESİ_SAAT": 3.04,
                "AG_KESİNTİ_SAYISI": 369,
                "OG_KISA_KESİNTİ_SAYISI": 45,
                "OG_UZUN_KESİNTİ_SAYISI": 144
            },
            {
                "isletmeName": "NAZİLLİ isletme",
                "ORT_OG_ARIZA_SÜRESİ_DK": 50.51,
                "OG_KESİNTİ_SAYISI": 104,
                "ORT_AG_ARIZA_SÜRESİ_SAAT": 2.13,
                "AG_KESİNTİ_SAYISI": 175,
                "OG_KISA_KESİNTİ_SAYISI": 53,
                "OG_UZUN_KESİNTİ_SAYISI": 104
            },
            {
                "isletmeName": "BODRUM isletme",
                "ORT_OG_ARIZA_SÜRESİ_DK": 95.24,
                "OG_KESİNTİ_SAYISI": 107,
                "ORT_AG_ARIZA_SÜRESİ_SAAT": 3.46,
                "AG_KESİNTİ_SAYISI": 334,
                "OG_KISA_KESİNTİ_SAYISI": 4,
                "OG_UZUN_KESİNTİ_SAYISI": 107
            },
            {
                "isletmeName": "MİLAS isletme",
                "ORT_OG_ARIZA_SÜRESİ_DK": 87.36,
                "OG_KESİNTİ_SAYISI": 139,
                "ORT_AG_ARIZA_SÜRESİ_SAAT": 3.13,
                "AG_KESİNTİ_SAYISI": 266,
                "OG_KISA_KESİNTİ_SAYISI": 20,
                "OG_UZUN_KESİNTİ_SAYISI": 139
            },
            {
                "isletmeName": "CİNE isletme",
                "ORT_OG_ARIZA_SÜRESİ_DK": 82.41,
                "OG_KESİNTİ_SAYISI": 14,
                "ORT_AG_ARIZA_SÜRESİ_SAAT": 2.56,
                "AG_KESİNTİ_SAYISI": 57,
                "OG_KISA_KESİNTİ_SAYISI": 9,
                "OG_UZUN_KESİNTİ_SAYISI": 14
            },
            {
                "isletmeName": "DİDİM isletme",
                "ORT_OG_ARIZA_SÜRESİ_DK": 79.96,
                "OG_KESİNTİ_SAYISI": 42,
                "ORT_AG_ARIZA_SÜRESİ_SAAT": 2.62,
                "AG_KESİNTİ_SAYISI": 166,
                "OG_KISA_KESİNTİ_SAYISI": 9,
                "OG_UZUN_KESİNTİ_SAYISI": 42
            },
            {
                "isletmeName": "CİVRİL isletme",
                "ORT_OG_ARIZA_SÜRESİ_DK": 56.14,
                "OG_KESİNTİ_SAYISI": 93,
                "ORT_AG_ARIZA_SÜRESİ_SAAT": 1.68,
                "AG_KESİNTİ_SAYISI": 134,
                "OG_KISA_KESİNTİ_SAYISI": 20,
                "OG_UZUN_KESİNTİ_SAYISI": 93
            },
            {
                "isletmeName": "SARAYKÖY isletme",
                "ORT_OG_ARIZA_SÜRESİ_DK": 63.55,
                "OG_KESİNTİ_SAYISI": 33,
                "ORT_AG_ARIZA_SÜRESİ_SAAT": 1.72,
                "AG_KESİNTİ_SAYISI": 60,
                "OG_KISA_KESİNTİ_SAYISI": 9,
                "OG_UZUN_KESİNTİ_SAYISI": 33
            }
        ],
        "4": [
            {
                "isletmeName": "NAZİLLİ isletme",
                "ORT_OG_ARIZA_SÜRESİ_DK": 99.47,
                "OG_KESİNTİ_SAYISI": 152,
                "ORT_AG_ARIZA_SÜRESİ_SAAT": 3.49,
                "AG_KESİNTİ_SAYISI": 355,
                "OG_KISA_KESİNTİ_SAYISI": 38,
                "OG_UZUN_KESİNTİ_SAYISI": 152
            },
            {
                "isletmeName": "BODRUM isletme",
                "ORT_OG_ARIZA_SÜRESİ_DK": 98.46,
                "OG_KESİNTİ_SAYISI": 81,
                "ORT_AG_ARIZA_SÜRESİ_SAAT": 3.28,
                "AG_KESİNTİ_SAYISI": 318,
                "OG_KISA_KESİNTİ_SAYISI": 3,
                "OG_UZUN_KESİNTİ_SAYISI": 81
            },
            {
                "isletmeName": "CİVRİL isletme",
                "ORT_OG_ARIZA_SÜRESİ_DK": 85.28,
                "OG_KESİNTİ_SAYISI": 123,
                "ORT_AG_ARIZA_SÜRESİ_SAAT": 1.99,
                "AG_KESİNTİ_SAYISI": 165,
                "OG_KISA_KESİNTİ_SAYISI": 17,
                "OG_UZUN_KESİNTİ_SAYISI": 123
            },
            {
                "isletmeName": "SARAYKÖY isletme",
                "ORT_OG_ARIZA_SÜRESİ_DK": 67.9,
                "OG_KESİNTİ_SAYISI": 34,
                "ORT_AG_ARIZA_SÜRESİ_SAAT": 2.06,
                "AG_KESİNTİ_SAYISI": 57,
                "OG_KISA_KESİNTİ_SAYISI": 5,
                "OG_UZUN_KESİNTİ_SAYISI": 34
            },
            {
                "isletmeName": "AYDİN MERKEZ isletme",
                "ORT_OG_ARIZA_SÜRESİ_DK": 95.21,
                "OG_KESİNTİ_SAYISI": 137,
                "ORT_AG_ARIZA_SÜRESİ_SAAT": 2.84,
                "AG_KESİNTİ_SAYISI": 344,
                "OG_KISA_KESİNTİ_SAYISI": 23,
                "OG_UZUN_KESİNTİ_SAYISI": 137
            },
            {
                "isletmeName": "MİLAS isletme",
                "ORT_OG_ARIZA_SÜRESİ_DK": 105.03,
                "OG_KESİNTİ_SAYISI": 172,
                "ORT_AG_ARIZA_SÜRESİ_SAAT": 3.56,
                "AG_KESİNTİ_SAYISI": 343,
                "OG_KISA_KESİNTİ_SAYISI": 20,
                "OG_UZUN_KESİNTİ_SAYISI": 172
            },
            {
                "isletmeName": "DENİZLİ MERKEZ isletme",
                "ORT_OG_ARIZA_SÜRESİ_DK": 64.78,
                "OG_KESİNTİ_SAYISI": 145,
                "ORT_AG_ARIZA_SÜRESİ_SAAT": 2.04,
                "AG_KESİNTİ_SAYISI": 343,
                "OG_KISA_KESİNTİ_SAYISI": 24,
                "OG_UZUN_KESİNTİ_SAYISI": 145
            },
            {
                "isletmeName": "FETHİYE isletme",
                "ORT_OG_ARIZA_SÜRESİ_DK": 96.84,
                "OG_KESİNTİ_SAYISI": 195,
                "ORT_AG_ARIZA_SÜRESİ_SAAT": 3.57,
                "AG_KESİNTİ_SAYISI": 544,
                "OG_KISA_KESİNTİ_SAYISI": 29,
                "OG_UZUN_KESİNTİ_SAYISI": 195
            },
            {
                "isletmeName": "ORTACA isletme ",
                "ORT_OG_ARIZA_SÜRESİ_DK": 106.21,
                "OG_KESİNTİ_SAYISI": 79,
                "ORT_AG_ARIZA_SÜRESİ_SAAT": 3.9,
                "AG_KESİNTİ_SAYISI": 211,
                "OG_KISA_KESİNTİ_SAYISI": 13,
                "OG_UZUN_KESİNTİ_SAYISI": 79
            },
            {
                "isletmeName": "SÖKE isletme",
                "ORT_OG_ARIZA_SÜRESİ_DK": 119.37,
                "OG_KESİNTİ_SAYISI": 43,
                "ORT_AG_ARIZA_SÜRESİ_SAAT": 2.78,
                "AG_KESİNTİ_SAYISI": 108,
                "OG_KISA_KESİNTİ_SAYISI": 17,
                "OG_UZUN_KESİNTİ_SAYISI": 43
            },
            {
                "isletmeName": "MARMARİS isletme",
                "ORT_OG_ARIZA_SÜRESİ_DK": 95.27,
                "OG_KESİNTİ_SAYISI": 78,
                "ORT_AG_ARIZA_SÜRESİ_SAAT": 3.8,
                "AG_KESİNTİ_SAYISI": 174,
                "OG_KISA_KESİNTİ_SAYISI": 12,
                "OG_UZUN_KESİNTİ_SAYISI": 78
            },
            {
                "isletmeName": "KUŞADASI isletme",
                "ORT_OG_ARIZA_SÜRESİ_DK": 98.11,
                "OG_KESİNTİ_SAYISI": 42,
                "ORT_AG_ARIZA_SÜRESİ_SAAT": 2.48,
                "AG_KESİNTİ_SAYISI": 201,
                "OG_KISA_KESİNTİ_SAYISI": 1,
                "OG_UZUN_KESİNTİ_SAYISI": 42
            },
            {
                "isletmeName": "DİDİM isletme",
                "ORT_OG_ARIZA_SÜRESİ_DK": 76.07,
                "OG_KESİNTİ_SAYISI": 35,
                "ORT_AG_ARIZA_SÜRESİ_SAAT": 2.76,
                "AG_KESİNTİ_SAYISI": 233,
                "OG_KISA_KESİNTİ_SAYISI": 10,
                "OG_UZUN_KESİNTİ_SAYISI": 35
            },
            {
                "isletmeName": "ACIPAYAM isletme ",
                "ORT_OG_ARIZA_SÜRESİ_DK": 125.24,
                "OG_KESİNTİ_SAYISI": 193,
                "ORT_AG_ARIZA_SÜRESİ_SAAT": 3.29,
                "AG_KESİNTİ_SAYISI": 391,
                "OG_KISA_KESİNTİ_SAYISI": 35,
                "OG_UZUN_KESİNTİ_SAYISI": 193
            },
            {
                "isletmeName": "MUĞLA MERKEZ isletme",
                "ORT_OG_ARIZA_SÜRESİ_DK": 79.07,
                "OG_KESİNTİ_SAYISI": 182,
                "ORT_AG_ARIZA_SÜRESİ_SAAT": 3.38,
                "AG_KESİNTİ_SAYISI": 453,
                "OG_KISA_KESİNTİ_SAYISI": 20,
                "OG_UZUN_KESİNTİ_SAYISI": 182
            },
            {
                "isletmeName": "CİNE isletme",
                "ORT_OG_ARIZA_SÜRESİ_DK": 135.67,
                "OG_KESİNTİ_SAYISI": 48,
                "ORT_AG_ARIZA_SÜRESİ_SAAT": 4.24,
                "AG_KESİNTİ_SAYISI": 137,
                "OG_KISA_KESİNTİ_SAYISI": 5,
                "OG_UZUN_KESİNTİ_SAYISI": 48
            }
        ],
        "5": [
            {
                "isletmeName": "KUŞADASI isletme",
                "ORT_OG_ARIZA_SÜRESİ_DK": 54.34,
                "OG_KESİNTİ_SAYISI": 28,
                "ORT_AG_ARIZA_SÜRESİ_SAAT": 2.31,
                "AG_KESİNTİ_SAYISI": 207,
                "OG_KISA_KESİNTİ_SAYISI": 1,
                "OG_UZUN_KESİNTİ_SAYISI": 28
            },
            {
                "isletmeName": "DİDİM isletme",
                "ORT_OG_ARIZA_SÜRESİ_DK": 80.74,
                "OG_KESİNTİ_SAYISI": 40,
                "ORT_AG_ARIZA_SÜRESİ_SAAT": 2.73,
                "AG_KESİNTİ_SAYISI": 195,
                "OG_KISA_KESİNTİ_SAYISI": 24,
                "OG_UZUN_KESİNTİ_SAYISI": 40
            },
            {
                "isletmeName": "ACIPAYAM isletme ",
                "ORT_OG_ARIZA_SÜRESİ_DK": 49.88,
                "OG_KESİNTİ_SAYISI": 241,
                "ORT_AG_ARIZA_SÜRESİ_SAAT": 1.99,
                "AG_KESİNTİ_SAYISI": 190,
                "OG_KISA_KESİNTİ_SAYISI": 94,
                "OG_UZUN_KESİNTİ_SAYISI": 241
            },
            {
                "isletmeName": "CİVRİL isletme",
                "ORT_OG_ARIZA_SÜRESİ_DK": 51.67,
                "OG_KESİNTİ_SAYISI": 130,
                "ORT_AG_ARIZA_SÜRESİ_SAAT": 1.8,
                "AG_KESİNTİ_SAYISI": 204,
                "OG_KISA_KESİNTİ_SAYISI": 37,
                "OG_UZUN_KESİNTİ_SAYISI": 130
            },
            {
                "isletmeName": "FETHİYE isletme",
                "ORT_OG_ARIZA_SÜRESİ_DK": 54.38,
                "OG_KESİNTİ_SAYISI": 152,
                "ORT_AG_ARIZA_SÜRESİ_SAAT": 3.09,
                "AG_KESİNTİ_SAYISI": 423,
                "OG_KISA_KESİNTİ_SAYISI": 52,
                "OG_UZUN_KESİNTİ_SAYISI": 152
            },
            {
                "isletmeName": "MİLAS isletme",
                "ORT_OG_ARIZA_SÜRESİ_DK": 80.11,
                "OG_KESİNTİ_SAYISI": 194,
                "ORT_AG_ARIZA_SÜRESİ_SAAT": 3.59,
                "AG_KESİNTİ_SAYISI": 219,
                "OG_KISA_KESİNTİ_SAYISI": 35,
                "OG_UZUN_KESİNTİ_SAYISI": 194
            },
            {
                "isletmeName": "MARMARİS isletme",
                "ORT_OG_ARIZA_SÜRESİ_DK": 84.1,
                "OG_KESİNTİ_SAYISI": 67,
                "ORT_AG_ARIZA_SÜRESİ_SAAT": 3.49,
                "AG_KESİNTİ_SAYISI": 104,
                "OG_KISA_KESİNTİ_SAYISI": 16,
                "OG_UZUN_KESİNTİ_SAYISI": 67
            },
            {
                "isletmeName": "ORTACA isletme ",
                "ORT_OG_ARIZA_SÜRESİ_DK": 63.59,
                "OG_KESİNTİ_SAYISI": 97,
                "ORT_AG_ARIZA_SÜRESİ_SAAT": 2.33,
                "AG_KESİNTİ_SAYISI": 120,
                "OG_KISA_KESİNTİ_SAYISI": 33,
                "OG_UZUN_KESİNTİ_SAYISI": 97
            },
            {
                "isletmeName": "AYDİN MERKEZ isletme",
                "ORT_OG_ARIZA_SÜRESİ_DK": 58.58,
                "OG_KESİNTİ_SAYISI": 159,
                "ORT_AG_ARIZA_SÜRESİ_SAAT": 2.39,
                "AG_KESİNTİ_SAYISI": 333,
                "OG_KISA_KESİNTİ_SAYISI": 57,
                "OG_UZUN_KESİNTİ_SAYISI": 159
            },
            {
                "isletmeName": "NAZİLLİ isletme",
                "ORT_OG_ARIZA_SÜRESİ_DK": 45.03,
                "OG_KESİNTİ_SAYISI": 157,
                "ORT_AG_ARIZA_SÜRESİ_SAAT": 2.16,
                "AG_KESİNTİ_SAYISI": 269,
                "OG_KISA_KESİNTİ_SAYISI": 91,
                "OG_UZUN_KESİNTİ_SAYISI": 157
            },
            {
                "isletmeName": "SÖKE isletme",
                "ORT_OG_ARIZA_SÜRESİ_DK": 75.92,
                "OG_KESİNTİ_SAYISI": 47,
                "ORT_AG_ARIZA_SÜRESİ_SAAT": 2.61,
                "AG_KESİNTİ_SAYISI": 136,
                "OG_KISA_KESİNTİ_SAYISI": 26,
                "OG_UZUN_KESİNTİ_SAYISI": 47
            },
            {
                "isletmeName": "BODRUM isletme",
                "ORT_OG_ARIZA_SÜRESİ_DK": 75.15,
                "OG_KESİNTİ_SAYISI": 128,
                "ORT_AG_ARIZA_SÜRESİ_SAAT": 3.45,
                "AG_KESİNTİ_SAYISI": 247,
                "OG_KISA_KESİNTİ_SAYISI": 10,
                "OG_UZUN_KESİNTİ_SAYISI": 128
            },
            {
                "isletmeName": "CİNE isletme",
                "ORT_OG_ARIZA_SÜRESİ_DK": 73.01,
                "OG_KESİNTİ_SAYISI": 44,
                "ORT_AG_ARIZA_SÜRESİ_SAAT": 3.56,
                "AG_KESİNTİ_SAYISI": 79,
                "OG_KISA_KESİNTİ_SAYISI": 36,
                "OG_UZUN_KESİNTİ_SAYISI": 44
            },
            {
                "isletmeName": "DENİZLİ MERKEZ isletme",
                "ORT_OG_ARIZA_SÜRESİ_DK": 46.77,
                "OG_KESİNTİ_SAYISI": 141,
                "ORT_AG_ARIZA_SÜRESİ_SAAT": 1.78,
                "AG_KESİNTİ_SAYISI": 353,
                "OG_KISA_KESİNTİ_SAYISI": 70,
                "OG_UZUN_KESİNTİ_SAYISI": 141
            },
            {
                "isletmeName": "SARAYKÖY isletme",
                "ORT_OG_ARIZA_SÜRESİ_DK": 51.24,
                "OG_KESİNTİ_SAYISI": 72,
                "ORT_AG_ARIZA_SÜRESİ_SAAT": 2.11,
                "AG_KESİNTİ_SAYISI": 75,
                "OG_KISA_KESİNTİ_SAYISI": 17,
                "OG_UZUN_KESİNTİ_SAYISI": 72
            },
            {
                "isletmeName": "MUĞLA MERKEZ isletme",
                "ORT_OG_ARIZA_SÜRESİ_DK": 50.71,
                "OG_KESİNTİ_SAYISI": 151,
                "ORT_AG_ARIZA_SÜRESİ_SAAT": 2.36,
                "AG_KESİNTİ_SAYISI": 276,
                "OG_KISA_KESİNTİ_SAYISI": 46,
                "OG_UZUN_KESİNTİ_SAYISI": 151
            }
        ],
        "6": [
            {
                "isletmeName": "SÖKE isletme",
                "ORT_OG_ARIZA_SÜRESİ_DK": 77.47,
                "OG_KESİNTİ_SAYISI": 103,
                "ORT_AG_ARIZA_SÜRESİ_SAAT": 2.97,
                "AG_KESİNTİ_SAYISI": 153,
                "OG_KISA_KESİNTİ_SAYISI": 30,
                "OG_UZUN_KESİNTİ_SAYISI": 103
            },
            {
                "isletmeName": "MUĞLA MERKEZ isletme",
                "ORT_OG_ARIZA_SÜRESİ_DK": 52.91,
                "OG_KESİNTİ_SAYISI": 232,
                "ORT_AG_ARIZA_SÜRESİ_SAAT": 2.56,
                "AG_KESİNTİ_SAYISI": 326,
                "OG_KISA_KESİNTİ_SAYISI": 30,
                "OG_UZUN_KESİNTİ_SAYISI": 232
            },
            {
                "isletmeName": "CİNE isletme",
                "ORT_OG_ARIZA_SÜRESİ_DK": 37.9,
                "OG_KESİNTİ_SAYISI": 72,
                "ORT_AG_ARIZA_SÜRESİ_SAAT": 2.9,
                "AG_KESİNTİ_SAYISI": 219,
                "OG_KISA_KESİNTİ_SAYISI": 49,
                "OG_UZUN_KESİNTİ_SAYISI": 72
            },
            {
                "isletmeName": "BODRUM isletme",
                "ORT_OG_ARIZA_SÜRESİ_DK": 82.54,
                "OG_KESİNTİ_SAYISI": 112,
                "ORT_AG_ARIZA_SÜRESİ_SAAT": 3.21,
                "AG_KESİNTİ_SAYISI": 297,
                "OG_KISA_KESİNTİ_SAYISI": 7,
                "OG_UZUN_KESİNTİ_SAYISI": 112
            },
            {
                "isletmeName": "MARMARİS isletme",
                "ORT_OG_ARIZA_SÜRESİ_DK": 73.95,
                "OG_KESİNTİ_SAYISI": 112,
                "ORT_AG_ARIZA_SÜRESİ_SAAT": 3.24,
                "AG_KESİNTİ_SAYISI": 177,
                "OG_KISA_KESİNTİ_SAYISI": 5,
                "OG_UZUN_KESİNTİ_SAYISI": 112
            },
            {
                "isletmeName": "MİLAS isletme",
                "ORT_OG_ARIZA_SÜRESİ_DK": 70.88,
                "OG_KESİNTİ_SAYISI": 198,
                "ORT_AG_ARIZA_SÜRESİ_SAAT": 3.18,
                "AG_KESİNTİ_SAYISI": 334,
                "OG_KISA_KESİNTİ_SAYISI": 21,
                "OG_UZUN_KESİNTİ_SAYISI": 198
            },
            {
                "isletmeName": "ORTACA isletme ",
                "ORT_OG_ARIZA_SÜRESİ_DK": 64.09,
                "OG_KESİNTİ_SAYISI": 172,
                "ORT_AG_ARIZA_SÜRESİ_SAAT": 2.33,
                "AG_KESİNTİ_SAYISI": 280,
                "OG_KISA_KESİNTİ_SAYISI": 26,
                "OG_UZUN_KESİNTİ_SAYISI": 172
            },
            {
                "isletmeName": "KUŞADASI isletme",
                "ORT_OG_ARIZA_SÜRESİ_DK": 81.09,
                "OG_KESİNTİ_SAYISI": 59,
                "ORT_AG_ARIZA_SÜRESİ_SAAT": 2.36,
                "AG_KESİNTİ_SAYISI": 298,
                "OG_KISA_KESİNTİ_SAYISI": 8,
                "OG_UZUN_KESİNTİ_SAYISI": 59
            },
            {
                "isletmeName": "DENİZLİ MERKEZ isletme",
                "ORT_OG_ARIZA_SÜRESİ_DK": 70.31,
                "OG_KESİNTİ_SAYISI": 183,
                "ORT_AG_ARIZA_SÜRESİ_SAAT": 1.78,
                "AG_KESİNTİ_SAYISI": 702,
                "OG_KISA_KESİNTİ_SAYISI": 51,
                "OG_UZUN_KESİNTİ_SAYISI": 183
            },
            {
                "isletmeName": "DİDİM isletme",
                "ORT_OG_ARIZA_SÜRESİ_DK": 75.89,
                "OG_KESİNTİ_SAYISI": 118,
                "ORT_AG_ARIZA_SÜRESİ_SAAT": 2.5,
                "AG_KESİNTİ_SAYISI": 323,
                "OG_KISA_KESİNTİ_SAYISI": 55,
                "OG_UZUN_KESİNTİ_SAYISI": 118
            },
            {
                "isletmeName": "ACIPAYAM isletme ",
                "ORT_OG_ARIZA_SÜRESİ_DK": 57.92,
                "OG_KESİNTİ_SAYISI": 390,
                "ORT_AG_ARIZA_SÜRESİ_SAAT": 1.98,
                "AG_KESİNTİ_SAYISI": 357,
                "OG_KISA_KESİNTİ_SAYISI": 83,
                "OG_UZUN_KESİNTİ_SAYISI": 390
            },
            {
                "isletmeName": "CİVRİL isletme",
                "ORT_OG_ARIZA_SÜRESİ_DK": 57.36,
                "OG_KESİNTİ_SAYISI": 295,
                "ORT_AG_ARIZA_SÜRESİ_SAAT": 1.71,
                "AG_KESİNTİ_SAYISI": 336,
                "OG_KISA_KESİNTİ_SAYISI": 93,
                "OG_UZUN_KESİNTİ_SAYISI": 295
            },
            {
                "isletmeName": "AYDİN MERKEZ isletme",
                "ORT_OG_ARIZA_SÜRESİ_DK": 65.6,
                "OG_KESİNTİ_SAYISI": 277,
                "ORT_AG_ARIZA_SÜRESİ_SAAT": 2.25,
                "AG_KESİNTİ_SAYISI": 869,
                "OG_KISA_KESİNTİ_SAYISI": 64,
                "OG_UZUN_KESİNTİ_SAYISI": 277
            },
            {
                "isletmeName": "NAZİLLİ isletme",
                "ORT_OG_ARIZA_SÜRESİ_DK": 50.25,
                "OG_KESİNTİ_SAYISI": 245,
                "ORT_AG_ARIZA_SÜRESİ_SAAT": 2.0,
                "AG_KESİNTİ_SAYISI": 673,
                "OG_KISA_KESİNTİ_SAYISI": 121,
                "OG_UZUN_KESİNTİ_SAYISI": 245
            },
            {
                "isletmeName": "SARAYKÖY isletme",
                "ORT_OG_ARIZA_SÜRESİ_DK": 56.68,
                "OG_KESİNTİ_SAYISI": 82,
                "ORT_AG_ARIZA_SÜRESİ_SAAT": 1.97,
                "AG_KESİNTİ_SAYISI": 144,
                "OG_KISA_KESİNTİ_SAYISI": 16,
                "OG_UZUN_KESİNTİ_SAYISI": 82
            },
            {
                "isletmeName": "FETHİYE isletme",
                "ORT_OG_ARIZA_SÜRESİ_DK": 70.7,
                "OG_KESİNTİ_SAYISI": 268,
                "ORT_AG_ARIZA_SÜRESİ_SAAT": 2.97,
                "AG_KESİNTİ_SAYISI": 565,
                "OG_KISA_KESİNTİ_SAYISI": 38,
                "OG_UZUN_KESİNTİ_SAYISI": 268
            }
        ],
        "7": [
            {
                "isletmeName": "DENİZLİ MERKEZ isletme",
                "ORT_OG_ARIZA_SÜRESİ_DK": 82.58,
                "OG_KESİNTİ_SAYISI": 237,
                "ORT_AG_ARIZA_SÜRESİ_SAAT": 2.27,
                "AG_KESİNTİ_SAYISI": 877,
                "OG_KISA_KESİNTİ_SAYISI": 45,
                "OG_UZUN_KESİNTİ_SAYISI": 237
            },
            {
                "isletmeName": "ORTACA isletme ",
                "ORT_OG_ARIZA_SÜRESİ_DK": 65.75,
                "OG_KESİNTİ_SAYISI": 146,
                "ORT_AG_ARIZA_SÜRESİ_SAAT": 2.29,
                "AG_KESİNTİ_SAYISI": 438,
                "OG_KISA_KESİNTİ_SAYISI": 12,
                "OG_UZUN_KESİNTİ_SAYISI": 146
            },
            {
                "isletmeName": "DİDİM isletme",
                "ORT_OG_ARIZA_SÜRESİ_DK": 85.74,
                "OG_KESİNTİ_SAYISI": 85,
                "ORT_AG_ARIZA_SÜRESİ_SAAT": 2.45,
                "AG_KESİNTİ_SAYISI": 427,
                "OG_KISA_KESİNTİ_SAYISI": 18,
                "OG_UZUN_KESİNTİ_SAYISI": 85
            },
            {
                "isletmeName": "ACIPAYAM isletme ",
                "ORT_OG_ARIZA_SÜRESİ_DK": 55.07,
                "OG_KESİNTİ_SAYISI": 505,
                "ORT_AG_ARIZA_SÜRESİ_SAAT": 2.18,
                "AG_KESİNTİ_SAYISI": 376,
                "OG_KISA_KESİNTİ_SAYISI": 102,
                "OG_UZUN_KESİNTİ_SAYISI": 505
            },
            {
                "isletmeName": "CİVRİL isletme",
                "ORT_OG_ARIZA_SÜRESİ_DK": 47.88,
                "OG_KESİNTİ_SAYISI": 422,
                "ORT_AG_ARIZA_SÜRESİ_SAAT": 1.75,
                "AG_KESİNTİ_SAYISI": 309,
                "OG_KISA_KESİNTİ_SAYISI": 90,
                "OG_UZUN_KESİNTİ_SAYISI": 422
            },
            {
                "isletmeName": "SARAYKÖY isletme",
                "ORT_OG_ARIZA_SÜRESİ_DK": 67.25,
                "OG_KESİNTİ_SAYISI": 98,
                "ORT_AG_ARIZA_SÜRESİ_SAAT": 1.84,
                "AG_KESİNTİ_SAYISI": 163,
                "OG_KISA_KESİNTİ_SAYISI": 20,
                "OG_UZUN_KESİNTİ_SAYISI": 98
            },
            {
                "isletmeName": "MİLAS isletme",
                "ORT_OG_ARIZA_SÜRESİ_DK": 78.85,
                "OG_KESİNTİ_SAYISI": 249,
                "ORT_AG_ARIZA_SÜRESİ_SAAT": 3.12,
                "AG_KESİNTİ_SAYISI": 532,
                "OG_KISA_KESİNTİ_SAYISI": 25,
                "OG_UZUN_KESİNTİ_SAYISI": 249
            },
            {
                "isletmeName": "AYDİN MERKEZ isletme",
                "ORT_OG_ARIZA_SÜRESİ_DK": 69.09,
                "OG_KESİNTİ_SAYISI": 286,
                "ORT_AG_ARIZA_SÜRESİ_SAAT": 2.07,
                "AG_KESİNTİ_SAYISI": 1121,
                "OG_KISA_KESİNTİ_SAYISI": 45,
                "OG_UZUN_KESİNTİ_SAYISI": 286
            },
            {
                "isletmeName": "SÖKE isletme",
                "ORT_OG_ARIZA_SÜRESİ_DK": 63.87,
                "OG_KESİNTİ_SAYISI": 82,
                "ORT_AG_ARIZA_SÜRESİ_SAAT": 2.64,
                "AG_KESİNTİ_SAYISI": 218,
                "OG_KISA_KESİNTİ_SAYISI": 32,
                "OG_UZUN_KESİNTİ_SAYISI": 82
            },
            {
                "isletmeName": "MARMARİS isletme",
                "ORT_OG_ARIZA_SÜRESİ_DK": 89.13,
                "OG_KESİNTİ_SAYISI": 132,
                "ORT_AG_ARIZA_SÜRESİ_SAAT": 2.91,
                "AG_KESİNTİ_SAYISI": 288,
                "OG_KISA_KESİNTİ_SAYISI": 4,
                "OG_UZUN_KESİNTİ_SAYISI": 132
            },
            {
                "isletmeName": "CİNE isletme",
                "ORT_OG_ARIZA_SÜRESİ_DK": 65.62,
                "OG_KESİNTİ_SAYISI": 90,
                "ORT_AG_ARIZA_SÜRESİ_SAAT": 2.89,
                "AG_KESİNTİ_SAYISI": 201,
                "OG_KISA_KESİNTİ_SAYISI": 36,
                "OG_UZUN_KESİNTİ_SAYISI": 90
            },
            {
                "isletmeName": "NAZİLLİ isletme",
                "ORT_OG_ARIZA_SÜRESİ_DK": 50.79,
                "OG_KESİNTİ_SAYISI": 354,
                "ORT_AG_ARIZA_SÜRESİ_SAAT": 1.94,
                "AG_KESİNTİ_SAYISI": 740,
                "OG_KISA_KESİNTİ_SAYISI": 68,
                "OG_UZUN_KESİNTİ_SAYISI": 354
            },
            {
                "isletmeName": "BODRUM isletme",
                "ORT_OG_ARIZA_SÜRESİ_DK": 123.16,
                "OG_KESİNTİ_SAYISI": 205,
                "ORT_AG_ARIZA_SÜRESİ_SAAT": 3.23,
                "AG_KESİNTİ_SAYISI": 571,
                "OG_KISA_KESİNTİ_SAYISI": 8,
                "OG_UZUN_KESİNTİ_SAYISI": 205
            },
            {
                "isletmeName": "KUŞADASI isletme",
                "ORT_OG_ARIZA_SÜRESİ_DK": 94.41,
                "OG_KESİNTİ_SAYISI": 90,
                "ORT_AG_ARIZA_SÜRESİ_SAAT": 2.27,
                "AG_KESİNTİ_SAYISI": 433,
                "OG_KISA_KESİNTİ_SAYISI": 7,
                "OG_UZUN_KESİNTİ_SAYISI": 90
            },
            {
                "isletmeName": "FETHİYE isletme",
                "ORT_OG_ARIZA_SÜRESİ_DK": 77.57,
                "OG_KESİNTİ_SAYISI": 293,
                "ORT_AG_ARIZA_SÜRESİ_SAAT": 2.8,
                "AG_KESİNTİ_SAYISI": 1129,
                "OG_KISA_KESİNTİ_SAYISI": 33,
                "OG_UZUN_KESİNTİ_SAYISI": 293
            },
            {
                "isletmeName": "MUĞLA MERKEZ isletme",
                "ORT_OG_ARIZA_SÜRESİ_DK": 85.63,
                "OG_KESİNTİ_SAYISI": 327,
                "ORT_AG_ARIZA_SÜRESİ_SAAT": 2.71,
                "AG_KESİNTİ_SAYISI": 447,
                "OG_KISA_KESİNTİ_SAYISI": 18,
                "OG_UZUN_KESİNTİ_SAYISI": 327
            }
        ],
        "8": [
            {
                "isletmeName": "AYDİN MERKEZ isletme",
                "ORT_OG_ARIZA_SÜRESİ_DK": 68.58,
                "OG_KESİNTİ_SAYISI": 186,
                "ORT_AG_ARIZA_SÜRESİ_SAAT": 2.23,
                "AG_KESİNTİ_SAYISI": 415,
                "OG_KISA_KESİNTİ_SAYISI": 47,
                "OG_UZUN_KESİNTİ_SAYISI": 186
            },
            {
                "isletmeName": "FETHİYE isletme",
                "ORT_OG_ARIZA_SÜRESİ_DK": 58.43,
                "OG_KESİNTİ_SAYISI": 221,
                "ORT_AG_ARIZA_SÜRESİ_SAAT": 2.74,
                "AG_KESİNTİ_SAYISI": 538,
                "OG_KISA_KESİNTİ_SAYISI": 36,
                "OG_UZUN_KESİNTİ_SAYISI": 221
            },
            {
                "isletmeName": "CİNE isletme",
                "ORT_OG_ARIZA_SÜRESİ_DK": 89.62,
                "OG_KESİNTİ_SAYISI": 45,
                "ORT_AG_ARIZA_SÜRESİ_SAAT": 3.04,
                "AG_KESİNTİ_SAYISI": 113,
                "OG_KISA_KESİNTİ_SAYISI": 23,
                "OG_UZUN_KESİNTİ_SAYISI": 45
            },
            {
                "isletmeName": "NAZİLLİ isletme",
                "ORT_OG_ARIZA_SÜRESİ_DK": 63.69,
                "OG_KESİNTİ_SAYISI": 273,
                "ORT_AG_ARIZA_SÜRESİ_SAAT": 1.99,
                "AG_KESİNTİ_SAYISI": 360,
                "OG_KISA_KESİNTİ_SAYISI": 107,
                "OG_UZUN_KESİNTİ_SAYISI": 273
            },
            {
                "isletmeName": "BODRUM isletme",
                "ORT_OG_ARIZA_SÜRESİ_DK": 82.07,
                "OG_KESİNTİ_SAYISI": 123,
                "ORT_AG_ARIZA_SÜRESİ_SAAT": 2.83,
                "AG_KESİNTİ_SAYISI": 267,
                "OG_KISA_KESİNTİ_SAYISI": 8,
                "OG_UZUN_KESİNTİ_SAYISI": 123
            },
            {
                "isletmeName": "DİDİM isletme",
                "ORT_OG_ARIZA_SÜRESİ_DK": 102.99,
                "OG_KESİNTİ_SAYISI": 56,
                "ORT_AG_ARIZA_SÜRESİ_SAAT": 2.25,
                "AG_KESİNTİ_SAYISI": 235,
                "OG_KISA_KESİNTİ_SAYISI": 8,
                "OG_UZUN_KESİNTİ_SAYISI": 56
            },
            {
                "isletmeName": "MİLAS isletme",
                "ORT_OG_ARIZA_SÜRESİ_DK": 71.62,
                "OG_KESİNTİ_SAYISI": 206,
                "ORT_AG_ARIZA_SÜRESİ_SAAT": 3.32,
                "AG_KESİNTİ_SAYISI": 318,
                "OG_KISA_KESİNTİ_SAYISI": 54,
                "OG_UZUN_KESİNTİ_SAYISI": 206
            },
            {
                "isletmeName": "DENİZLİ MERKEZ isletme",
                "ORT_OG_ARIZA_SÜRESİ_DK": 54.05,
                "OG_KESİNTİ_SAYISI": 133,
                "ORT_AG_ARIZA_SÜRESİ_SAAT": 1.74,
                "AG_KESİNTİ_SAYISI": 401,
                "OG_KISA_KESİNTİ_SAYISI": 46,
                "OG_UZUN_KESİNTİ_SAYISI": 133
            },
            {
                "isletmeName": "ORTACA isletme ",
                "ORT_OG_ARIZA_SÜRESİ_DK": 59.96,
                "OG_KESİNTİ_SAYISI": 97,
                "ORT_AG_ARIZA_SÜRESİ_SAAT": 2.16,
                "AG_KESİNTİ_SAYISI": 179,
                "OG_KISA_KESİNTİ_SAYISI": 23,
                "OG_UZUN_KESİNTİ_SAYISI": 97
            },
            {
                "isletmeName": "KUŞADASI isletme",
                "ORT_OG_ARIZA_SÜRESİ_DK": 75.48,
                "OG_KESİNTİ_SAYISI": 60,
                "ORT_AG_ARIZA_SÜRESİ_SAAT": 2.16,
                "AG_KESİNTİ_SAYISI": 225,
                "OG_KISA_KESİNTİ_SAYISI": 4,
                "OG_UZUN_KESİNTİ_SAYISI": 60
            },
            {
                "isletmeName": "ACIPAYAM isletme ",
                "ORT_OG_ARIZA_SÜRESİ_DK": 58.21,
                "OG_KESİNTİ_SAYISI": 328,
                "ORT_AG_ARIZA_SÜRESİ_SAAT": 1.91,
                "AG_KESİNTİ_SAYISI": 249,
                "OG_KISA_KESİNTİ_SAYISI": 92,
                "OG_UZUN_KESİNTİ_SAYISI": 328
            },
            {
                "isletmeName": "CİVRİL isletme",
                "ORT_OG_ARIZA_SÜRESİ_DK": 47.77,
                "OG_KESİNTİ_SAYISI": 289,
                "ORT_AG_ARIZA_SÜRESİ_SAAT": 1.56,
                "AG_KESİNTİ_SAYISI": 198,
                "OG_KISA_KESİNTİ_SAYISI": 136,
                "OG_UZUN_KESİNTİ_SAYISI": 289
            },
            {
                "isletmeName": "SARAYKÖY isletme",
                "ORT_OG_ARIZA_SÜRESİ_DK": 57.96,
                "OG_KESİNTİ_SAYISI": 83,
                "ORT_AG_ARIZA_SÜRESİ_SAAT": 1.85,
                "AG_KESİNTİ_SAYISI": 110,
                "OG_KISA_KESİNTİ_SAYISI": 20,
                "OG_UZUN_KESİNTİ_SAYISI": 83
            },
            {
                "isletmeName": "MUĞLA MERKEZ isletme",
                "ORT_OG_ARIZA_SÜRESİ_DK": 55.68,
                "OG_KESİNTİ_SAYISI": 208,
                "ORT_AG_ARIZA_SÜRESİ_SAAT": 2.55,
                "AG_KESİNTİ_SAYISI": 226,
                "OG_KISA_KESİNTİ_SAYISI": 34,
                "OG_UZUN_KESİNTİ_SAYISI": 208
            },
            {
                "isletmeName": "SÖKE isletme",
                "ORT_OG_ARIZA_SÜRESİ_DK": 76.36,
                "OG_KESİNTİ_SAYISI": 54,
                "ORT_AG_ARIZA_SÜRESİ_SAAT": 2.54,
                "AG_KESİNTİ_SAYISI": 121,
                "OG_KISA_KESİNTİ_SAYISI": 28,
                "OG_UZUN_KESİNTİ_SAYISI": 54
            },
            {
                "isletmeName": "MARMARİS isletme",
                "ORT_OG_ARIZA_SÜRESİ_DK": 63.39,
                "OG_KESİNTİ_SAYISI": 67,
                "ORT_AG_ARIZA_SÜRESİ_SAAT": 2.55,
                "AG_KESİNTİ_SAYISI": 174,
                "OG_KISA_KESİNTİ_SAYISI": 9,
                "OG_UZUN_KESİNTİ_SAYISI": 67
            }
        ],
        "9": [
            {
                "isletmeName": "KUŞADASI isletme",
                "ORT_OG_ARIZA_SÜRESİ_DK": 89.81,
                "OG_KESİNTİ_SAYISI": 49,
                "ORT_AG_ARIZA_SÜRESİ_SAAT": 2.21,
                "AG_KESİNTİ_SAYISI": 191,
                "OG_KISA_KESİNTİ_SAYISI": 7,
                "OG_UZUN_KESİNTİ_SAYISI": 49
            },
            {
                "isletmeName": "SARAYKÖY isletme",
                "ORT_OG_ARIZA_SÜRESİ_DK": 47.15,
                "OG_KESİNTİ_SAYISI": 57,
                "ORT_AG_ARIZA_SÜRESİ_SAAT": 1.76,
                "AG_KESİNTİ_SAYISI": 85,
                "OG_KISA_KESİNTİ_SAYISI": 18,
                "OG_UZUN_KESİNTİ_SAYISI": 57
            },
            {
                "isletmeName": "MUĞLA MERKEZ isletme",
                "ORT_OG_ARIZA_SÜRESİ_DK": 81.43,
                "OG_KESİNTİ_SAYISI": 236,
                "ORT_AG_ARIZA_SÜRESİ_SAAT": 2.72,
                "AG_KESİNTİ_SAYISI": 217,
                "OG_KISA_KESİNTİ_SAYISI": 37,
                "OG_UZUN_KESİNTİ_SAYISI": 236
            },
            {
                "isletmeName": "CİNE isletme",
                "ORT_OG_ARIZA_SÜRESİ_DK": 95.67,
                "OG_KESİNTİ_SAYISI": 47,
                "ORT_AG_ARIZA_SÜRESİ_SAAT": 3.95,
                "AG_KESİNTİ_SAYISI": 71,
                "OG_KISA_KESİNTİ_SAYISI": 28,
                "OG_UZUN_KESİNTİ_SAYISI": 47
            },
            {
                "isletmeName": "MARMARİS isletme",
                "ORT_OG_ARIZA_SÜRESİ_DK": 73.65,
                "OG_KESİNTİ_SAYISI": 99,
                "ORT_AG_ARIZA_SÜRESİ_SAAT": 2.43,
                "AG_KESİNTİ_SAYISI": 97,
                "OG_KISA_KESİNTİ_SAYISI": 11,
                "OG_UZUN_KESİNTİ_SAYISI": 99
            },
            {
                "isletmeName": "AYDİN MERKEZ isletme",
                "ORT_OG_ARIZA_SÜRESİ_DK": 86.45,
                "OG_KESİNTİ_SAYISI": 172,
                "ORT_AG_ARIZA_SÜRESİ_SAAT": 2.55,
                "AG_KESİNTİ_SAYISI": 289,
                "OG_KISA_KESİNTİ_SAYISI": 40,
                "OG_UZUN_KESİNTİ_SAYISI": 172
            },
            {
                "isletmeName": "NAZİLLİ isletme",
                "ORT_OG_ARIZA_SÜRESİ_DK": 45.96,
                "OG_KESİNTİ_SAYISI": 165,
                "ORT_AG_ARIZA_SÜRESİ_SAAT": 2.36,
                "AG_KESİNTİ_SAYISI": 274,
                "OG_KISA_KESİNTİ_SAYISI": 75,
                "OG_UZUN_KESİNTİ_SAYISI": 165
            },
            {
                "isletmeName": "SÖKE isletme",
                "ORT_OG_ARIZA_SÜRESİ_DK": 95.27,
                "OG_KESİNTİ_SAYISI": 78,
                "ORT_AG_ARIZA_SÜRESİ_SAAT": 2.6,
                "AG_KESİNTİ_SAYISI": 106,
                "OG_KISA_KESİNTİ_SAYISI": 33,
                "OG_UZUN_KESİNTİ_SAYISI": 78
            },
            {
                "isletmeName": "BODRUM isletme",
                "ORT_OG_ARIZA_SÜRESİ_DK": 82.79,
                "OG_KESİNTİ_SAYISI": 70,
                "ORT_AG_ARIZA_SÜRESİ_SAAT": 3.02,
                "AG_KESİNTİ_SAYISI": 189,
                "OG_KISA_KESİNTİ_SAYISI": 2,
                "OG_UZUN_KESİNTİ_SAYISI": 70
            },
            {
                "isletmeName": "DİDİM isletme",
                "ORT_OG_ARIZA_SÜRESİ_DK": 65.88,
                "OG_KESİNTİ_SAYISI": 57,
                "ORT_AG_ARIZA_SÜRESİ_SAAT": 2.3,
                "AG_KESİNTİ_SAYISI": 140,
                "OG_KISA_KESİNTİ_SAYISI": 19,
                "OG_UZUN_KESİNTİ_SAYISI": 57
            },
            {
                "isletmeName": "MİLAS isletme",
                "ORT_OG_ARIZA_SÜRESİ_DK": 47.98,
                "OG_KESİNTİ_SAYISI": 151,
                "ORT_AG_ARIZA_SÜRESİ_SAAT": 3.27,
                "AG_KESİNTİ_SAYISI": 225,
                "OG_KISA_KESİNTİ_SAYISI": 39,
                "OG_UZUN_KESİNTİ_SAYISI": 151
            },
            {
                "isletmeName": "CİVRİL isletme",
                "ORT_OG_ARIZA_SÜRESİ_DK": 46.76,
                "OG_KESİNTİ_SAYISI": 167,
                "ORT_AG_ARIZA_SÜRESİ_SAAT": 1.6,
                "AG_KESİNTİ_SAYISI": 107,
                "OG_KISA_KESİNTİ_SAYISI": 111,
                "OG_UZUN_KESİNTİ_SAYISI": 167
            },
            {
                "isletmeName": "DENİZLİ MERKEZ isletme",
                "ORT_OG_ARIZA_SÜRESİ_DK": 44.5,
                "OG_KESİNTİ_SAYISI": 110,
                "ORT_AG_ARIZA_SÜRESİ_SAAT": 2.13,
                "AG_KESİNTİ_SAYISI": 273,
                "OG_KISA_KESİNTİ_SAYISI": 37,
                "OG_UZUN_KESİNTİ_SAYISI": 110
            },
            {
                "isletmeName": "ORTACA isletme ",
                "ORT_OG_ARIZA_SÜRESİ_DK": 61.31,
                "OG_KESİNTİ_SAYISI": 122,
                "ORT_AG_ARIZA_SÜRESİ_SAAT": 2.76,
                "AG_KESİNTİ_SAYISI": 149,
                "OG_KISA_KESİNTİ_SAYISI": 38,
                "OG_UZUN_KESİNTİ_SAYISI": 122
            },
            {
                "isletmeName": "ACIPAYAM isletme ",
                "ORT_OG_ARIZA_SÜRESİ_DK": 62.42,
                "OG_KESİNTİ_SAYISI": 275,
                "ORT_AG_ARIZA_SÜRESİ_SAAT": 2.22,
                "AG_KESİNTİ_SAYISI": 178,
                "OG_KISA_KESİNTİ_SAYISI": 123,
                "OG_UZUN_KESİNTİ_SAYISI": 275
            },
            {
                "isletmeName": "FETHİYE isletme",
                "ORT_OG_ARIZA_SÜRESİ_DK": 56.54,
                "OG_KESİNTİ_SAYISI": 151,
                "ORT_AG_ARIZA_SÜRESİ_SAAT": 3.21,
                "AG_KESİNTİ_SAYISI": 312,
                "OG_KISA_KESİNTİ_SAYISI": 51,
                "OG_UZUN_KESİNTİ_SAYISI": 151
            }
        ],
        "10": [
            {
                "isletmeName": "ACIPAYAM isletme ",
                "ORT_OG_ARIZA_SÜRESİ_DK": 47.73,
                "OG_KESİNTİ_SAYISI": 217,
                "ORT_AG_ARIZA_SÜRESİ_SAAT": 1.87,
                "AG_KESİNTİ_SAYISI": 137,
                "OG_KISA_KESİNTİ_SAYISI": 75,
                "OG_UZUN_KESİNTİ_SAYISI": 217
            },
            {
                "isletmeName": "MARMARİS isletme",
                "ORT_OG_ARIZA_SÜRESİ_DK": 61.1,
                "OG_KESİNTİ_SAYISI": 90,
                "ORT_AG_ARIZA_SÜRESİ_SAAT": 2.6,
                "AG_KESİNTİ_SAYISI": 69,
                "OG_KISA_KESİNTİ_SAYISI": 15,
                "OG_UZUN_KESİNTİ_SAYISI": 90
            },
            {
                "isletmeName": "AYDİN MERKEZ isletme",
                "ORT_OG_ARIZA_SÜRESİ_DK": 68.74,
                "OG_KESİNTİ_SAYISI": 132,
                "ORT_AG_ARIZA_SÜRESİ_SAAT": 2.39,
                "AG_KESİNTİ_SAYISI": 213,
                "OG_KISA_KESİNTİ_SAYISI": 20,
                "OG_UZUN_KESİNTİ_SAYISI": 132
            },
            {
                "isletmeName": "NAZİLLİ isletme",
                "ORT_OG_ARIZA_SÜRESİ_DK": 42.92,
                "OG_KESİNTİ_SAYISI": 115,
                "ORT_AG_ARIZA_SÜRESİ_SAAT": 2.12,
                "AG_KESİNTİ_SAYISI": 154,
                "OG_KISA_KESİNTİ_SAYISI": 42,
                "OG_UZUN_KESİNTİ_SAYISI": 115
            },
            {
                "isletmeName": "SÖKE isletme",
                "ORT_OG_ARIZA_SÜRESİ_DK": 130.33,
                "OG_KESİNTİ_SAYISI": 52,
                "ORT_AG_ARIZA_SÜRESİ_SAAT": 2.68,
                "AG_KESİNTİ_SAYISI": 87,
                "OG_KISA_KESİNTİ_SAYISI": 8,
                "OG_UZUN_KESİNTİ_SAYISI": 52
            },
            {
                "isletmeName": "DİDİM isletme",
                "ORT_OG_ARIZA_SÜRESİ_DK": 60.92,
                "OG_KESİNTİ_SAYISI": 42,
                "ORT_AG_ARIZA_SÜRESİ_SAAT": 2.38,
                "AG_KESİNTİ_SAYISI": 123,
                "OG_KISA_KESİNTİ_SAYISI": 17,
                "OG_UZUN_KESİNTİ_SAYISI": 42
            },
            {
                "isletmeName": "MİLAS isletme",
                "ORT_OG_ARIZA_SÜRESİ_DK": 55.44,
                "OG_KESİNTİ_SAYISI": 151,
                "ORT_AG_ARIZA_SÜRESİ_SAAT": 3.44,
                "AG_KESİNTİ_SAYISI": 151,
                "OG_KISA_KESİNTİ_SAYISI": 14,
                "OG_UZUN_KESİNTİ_SAYISI": 151
            },
            {
                "isletmeName": "CİVRİL isletme",
                "ORT_OG_ARIZA_SÜRESİ_DK": 47.28,
                "OG_KESİNTİ_SAYISI": 160,
                "ORT_AG_ARIZA_SÜRESİ_SAAT": 1.59,
                "AG_KESİNTİ_SAYISI": 112,
                "OG_KISA_KESİNTİ_SAYISI": 88,
                "OG_UZUN_KESİNTİ_SAYISI": 160
            },
            {
                "isletmeName": "ORTACA isletme ",
                "ORT_OG_ARIZA_SÜRESİ_DK": 56.7,
                "OG_KESİNTİ_SAYISI": 95,
                "ORT_AG_ARIZA_SÜRESİ_SAAT": 2.38,
                "AG_KESİNTİ_SAYISI": 106,
                "OG_KISA_KESİNTİ_SAYISI": 18,
                "OG_UZUN_KESİNTİ_SAYISI": 95
            },
            {
                "isletmeName": "KUŞADASI isletme",
                "ORT_OG_ARIZA_SÜRESİ_DK": 101.0,
                "OG_KESİNTİ_SAYISI": 28,
                "ORT_AG_ARIZA_SÜRESİ_SAAT": 2.52,
                "AG_KESİNTİ_SAYISI": 122,
                "OG_KISA_KESİNTİ_SAYISI": 3,
                "OG_UZUN_KESİNTİ_SAYISI": 28
            },
            {
                "isletmeName": "DENİZLİ MERKEZ isletme",
                "ORT_OG_ARIZA_SÜRESİ_DK": 45.91,
                "OG_KESİNTİ_SAYISI": 110,
                "ORT_AG_ARIZA_SÜRESİ_SAAT": 1.8,
                "AG_KESİNTİ_SAYISI": 210,
                "OG_KISA_KESİNTİ_SAYISI": 32,
                "OG_UZUN_KESİNTİ_SAYISI": 110
            },
            {
                "isletmeName": "SARAYKÖY isletme",
                "ORT_OG_ARIZA_SÜRESİ_DK": 66.74,
                "OG_KESİNTİ_SAYISI": 43,
                "ORT_AG_ARIZA_SÜRESİ_SAAT": 1.92,
                "AG_KESİNTİ_SAYISI": 55,
                "OG_KISA_KESİNTİ_SAYISI": 7,
                "OG_UZUN_KESİNTİ_SAYISI": 43
            },
            {
                "isletmeName": "FETHİYE isletme",
                "ORT_OG_ARIZA_SÜRESİ_DK": 53.52,
                "OG_KESİNTİ_SAYISI": 162,
                "ORT_AG_ARIZA_SÜRESİ_SAAT": 2.96,
                "AG_KESİNTİ_SAYISI": 233,
                "OG_KISA_KESİNTİ_SAYISI": 29,
                "OG_UZUN_KESİNTİ_SAYISI": 162
            },
            {
                "isletmeName": "MUĞLA MERKEZ isletme",
                "ORT_OG_ARIZA_SÜRESİ_DK": 50.38,
                "OG_KESİNTİ_SAYISI": 120,
                "ORT_AG_ARIZA_SÜRESİ_SAAT": 2.18,
                "AG_KESİNTİ_SAYISI": 187,
                "OG_KISA_KESİNTİ_SAYISI": 19,
                "OG_UZUN_KESİNTİ_SAYISI": 120
            },
            {
                "isletmeName": "CİNE isletme",
                "ORT_OG_ARIZA_SÜRESİ_DK": 67.17,
                "OG_KESİNTİ_SAYISI": 23,
                "ORT_AG_ARIZA_SÜRESİ_SAAT": 3.03,
                "AG_KESİNTİ_SAYISI": 49,
                "OG_KISA_KESİNTİ_SAYISI": 13,
                "OG_UZUN_KESİNTİ_SAYISI": 23
            },
            {
                "isletmeName": "BODRUM isletme",
                "ORT_OG_ARIZA_SÜRESİ_DK": 61.48,
                "OG_KESİNTİ_SAYISI": 74,
                "ORT_AG_ARIZA_SÜRESİ_SAAT": 3.22,
                "AG_KESİNTİ_SAYISI": 157,
                "OG_KISA_KESİNTİ_SAYISI": 1,
                "OG_UZUN_KESİNTİ_SAYISI": 74
            }
        ],
        "11": [
            {
                "isletmeName": "DİDİM isletme",
                "ORT_OG_ARIZA_SÜRESİ_DK": 69.14,
                "OG_KESİNTİ_SAYISI": 87,
                "ORT_AG_ARIZA_SÜRESİ_SAAT": 2.55,
                "AG_KESİNTİ_SAYISI": 271,
                "OG_KISA_KESİNTİ_SAYISI": 11,
                "OG_UZUN_KESİNTİ_SAYISI": 87
            },
            {
                "isletmeName": "NAZİLLİ isletme",
                "ORT_OG_ARIZA_SÜRESİ_DK": 49.39,
                "OG_KESİNTİ_SAYISI": 154,
                "ORT_AG_ARIZA_SÜRESİ_SAAT": 2.56,
                "AG_KESİNTİ_SAYISI": 380,
                "OG_KISA_KESİNTİ_SAYISI": 16,
                "OG_UZUN_KESİNTİ_SAYISI": 154
            },
            {
                "isletmeName": "BODRUM isletme",
                "ORT_OG_ARIZA_SÜRESİ_DK": 118.14,
                "OG_KESİNTİ_SAYISI": 149,
                "ORT_AG_ARIZA_SÜRESİ_SAAT": 4.0,
                "AG_KESİNTİ_SAYISI": 398,
                "OG_KISA_KESİNTİ_SAYISI": 4,
                "OG_UZUN_KESİNTİ_SAYISI": 149
            },
            {
                "isletmeName": "MİLAS isletme",
                "ORT_OG_ARIZA_SÜRESİ_DK": 78.76,
                "OG_KESİNTİ_SAYISI": 223,
                "ORT_AG_ARIZA_SÜRESİ_SAAT": 3.46,
                "AG_KESİNTİ_SAYISI": 384,
                "OG_KISA_KESİNTİ_SAYISI": 9,
                "OG_UZUN_KESİNTİ_SAYISI": 223
            },
            {
                "isletmeName": "CİVRİL isletme",
                "ORT_OG_ARIZA_SÜRESİ_DK": 51.57,
                "OG_KESİNTİ_SAYISI": 120,
                "ORT_AG_ARIZA_SÜRESİ_SAAT": 1.75,
                "AG_KESİNTİ_SAYISI": 222,
                "OG_KISA_KESİNTİ_SAYISI": 29,
                "OG_UZUN_KESİNTİ_SAYISI": 120
            },
            {
                "isletmeName": "SARAYKÖY isletme",
                "ORT_OG_ARIZA_SÜRESİ_DK": 71.49,
                "OG_KESİNTİ_SAYISI": 40,
                "ORT_AG_ARIZA_SÜRESİ_SAAT": 2.35,
                "AG_KESİNTİ_SAYISI": 141,
                "OG_KISA_KESİNTİ_SAYISI": 6,
                "OG_UZUN_KESİNTİ_SAYISI": 40
            },
            {
                "isletmeName": "KUŞADASI isletme",
                "ORT_OG_ARIZA_SÜRESİ_DK": 89.64,
                "OG_KESİNTİ_SAYISI": 45,
                "ORT_AG_ARIZA_SÜRESİ_SAAT": 2.38,
                "AG_KESİNTİ_SAYISI": 256,
                "OG_KISA_KESİNTİ_SAYISI": 1,
                "OG_UZUN_KESİNTİ_SAYISI": 45
            },
            {
                "isletmeName": "DENİZLİ MERKEZ isletme",
                "ORT_OG_ARIZA_SÜRESİ_DK": 57.13,
                "OG_KESİNTİ_SAYISI": 126,
                "ORT_AG_ARIZA_SÜRESİ_SAAT": 2.17,
                "AG_KESİNTİ_SAYISI": 465,
                "OG_KISA_KESİNTİ_SAYISI": 15,
                "OG_UZUN_KESİNTİ_SAYISI": 126
            },
            {
                "isletmeName": "FETHİYE isletme",
                "ORT_OG_ARIZA_SÜRESİ_DK": 92.78,
                "OG_KESİNTİ_SAYISI": 241,
                "ORT_AG_ARIZA_SÜRESİ_SAAT": 4.08,
                "AG_KESİNTİ_SAYISI": 654,
                "OG_KISA_KESİNTİ_SAYISI": 31,
                "OG_UZUN_KESİNTİ_SAYISI": 241
            },
            {
                "isletmeName": "MUĞLA MERKEZ isletme",
                "ORT_OG_ARIZA_SÜRESİ_DK": 88.8,
                "OG_KESİNTİ_SAYISI": 222,
                "ORT_AG_ARIZA_SÜRESİ_SAAT": 3.15,
                "AG_KESİNTİ_SAYISI": 495,
                "OG_KISA_KESİNTİ_SAYISI": 9,
                "OG_UZUN_KESİNTİ_SAYISI": 222
            },
            {
                "isletmeName": "ORTACA isletme ",
                "ORT_OG_ARIZA_SÜRESİ_DK": 65.53,
                "OG_KESİNTİ_SAYISI": 177,
                "ORT_AG_ARIZA_SÜRESİ_SAAT": 2.91,
                "AG_KESİNTİ_SAYISI": 242,
                "OG_KISA_KESİNTİ_SAYISI": 27,
                "OG_UZUN_KESİNTİ_SAYISI": 177
            },
            {
                "isletmeName": "CİNE isletme",
                "ORT_OG_ARIZA_SÜRESİ_DK": 75.89,
                "OG_KESİNTİ_SAYISI": 36,
                "ORT_AG_ARIZA_SÜRESİ_SAAT": 3.23,
                "AG_KESİNTİ_SAYISI": 81,
                "OG_KISA_KESİNTİ_SAYISI": 6,
                "OG_UZUN_KESİNTİ_SAYISI": 36
            },
            {
                "isletmeName": "AYDİN MERKEZ isletme",
                "ORT_OG_ARIZA_SÜRESİ_DK": 88.45,
                "OG_KESİNTİ_SAYISI": 206,
                "ORT_AG_ARIZA_SÜRESİ_SAAT": 2.6,
                "AG_KESİNTİ_SAYISI": 438,
                "OG_KISA_KESİNTİ_SAYISI": 12,
                "OG_UZUN_KESİNTİ_SAYISI": 206
            },
            {
                "isletmeName": "SÖKE isletme",
                "ORT_OG_ARIZA_SÜRESİ_DK": 148.03,
                "OG_KESİNTİ_SAYISI": 67,
                "ORT_AG_ARIZA_SÜRESİ_SAAT": 2.86,
                "AG_KESİNTİ_SAYISI": 195,
                "OG_KISA_KESİNTİ_SAYISI": 11,
                "OG_UZUN_KESİNTİ_SAYISI": 67
            },
            {
                "isletmeName": "MARMARİS isletme",
                "ORT_OG_ARIZA_SÜRESİ_DK": 79.12,
                "OG_KESİNTİ_SAYISI": 114,
                "ORT_AG_ARIZA_SÜRESİ_SAAT": 3.2,
                "AG_KESİNTİ_SAYISI": 144,
                "OG_KISA_KESİNTİ_SAYISI": 6,
                "OG_UZUN_KESİNTİ_SAYISI": 114
            },
            {
                "isletmeName": "ACIPAYAM isletme ",
                "ORT_OG_ARIZA_SÜRESİ_DK": 49.46,
                "OG_KESİNTİ_SAYISI": 252,
                "ORT_AG_ARIZA_SÜRESİ_SAAT": 2.4,
                "AG_KESİNTİ_SAYISI": 330,
                "OG_KISA_KESİNTİ_SAYISI": 20,
                "OG_UZUN_KESİNTİ_SAYISI": 252
            }
        ],
        "12": [
            {
                "isletmeName": "CİNE isletme",
                "ORT_OG_ARIZA_SÜRESİ_DK": 147.49,
                "OG_KESİNTİ_SAYISI": 19,
                "ORT_AG_ARIZA_SÜRESİ_SAAT": 2.58,
                "AG_KESİNTİ_SAYISI": 50,
                "OG_KISA_KESİNTİ_SAYISI": 1,
                "OG_UZUN_KESİNTİ_SAYISI": 19
            },
            {
                "isletmeName": "KUŞADASI isletme",
                "ORT_OG_ARIZA_SÜRESİ_DK": 94.76,
                "OG_KESİNTİ_SAYISI": 37,
                "ORT_AG_ARIZA_SÜRESİ_SAAT": 2.18,
                "AG_KESİNTİ_SAYISI": 288,
                "OG_KISA_KESİNTİ_SAYISI": 1,
                "OG_UZUN_KESİNTİ_SAYISI": 37
            },
            {
                "isletmeName": "AYDİN MERKEZ isletme",
                "ORT_OG_ARIZA_SÜRESİ_DK": 103.27,
                "OG_KESİNTİ_SAYISI": 113,
                "ORT_AG_ARIZA_SÜRESİ_SAAT": 2.34,
                "AG_KESİNTİ_SAYISI": 420,
                "OG_KISA_KESİNTİ_SAYISI": 5,
                "OG_UZUN_KESİNTİ_SAYISI": 113
            },
            {
                "isletmeName": "SÖKE isletme",
                "ORT_OG_ARIZA_SÜRESİ_DK": 118.0,
                "OG_KESİNTİ_SAYISI": 50,
                "ORT_AG_ARIZA_SÜRESİ_SAAT": 2.16,
                "AG_KESİNTİ_SAYISI": 181,
                "OG_KISA_KESİNTİ_SAYISI": 6,
                "OG_UZUN_KESİNTİ_SAYISI": 50
            },
            {
                "isletmeName": "MARMARİS isletme",
                "ORT_OG_ARIZA_SÜRESİ_DK": 111.71,
                "OG_KESİNTİ_SAYISI": 108,
                "ORT_AG_ARIZA_SÜRESİ_SAAT": 3.02,
                "AG_KESİNTİ_SAYISI": 257,
                "OG_KISA_KESİNTİ_SAYISI": 2,
                "OG_UZUN_KESİNTİ_SAYISI": 108
            },
            {
                "isletmeName": "DİDİM isletme",
                "ORT_OG_ARIZA_SÜRESİ_DK": 82.68,
                "OG_KESİNTİ_SAYISI": 53,
                "ORT_AG_ARIZA_SÜRESİ_SAAT": 2.59,
                "AG_KESİNTİ_SAYISI": 278,
                "OG_KISA_KESİNTİ_SAYISI": 6,
                "OG_UZUN_KESİNTİ_SAYISI": 53
            },
            {
                "isletmeName": "MİLAS isletme",
                "ORT_OG_ARIZA_SÜRESİ_DK": 117.13,
                "OG_KESİNTİ_SAYISI": 138,
                "ORT_AG_ARIZA_SÜRESİ_SAAT": 3.35,
                "AG_KESİNTİ_SAYISI": 460,
                "OG_KISA_KESİNTİ_SAYISI": 5,
                "OG_UZUN_KESİNTİ_SAYISI": 138
            },
            {
                "isletmeName": "CİVRİL isletme",
                "ORT_OG_ARIZA_SÜRESİ_DK": 70.1,
                "OG_KESİNTİ_SAYISI": 83,
                "ORT_AG_ARIZA_SÜRESİ_SAAT": 1.39,
                "AG_KESİNTİ_SAYISI": 163,
                "OG_KISA_KESİNTİ_SAYISI": 13,
                "OG_UZUN_KESİNTİ_SAYISI": 83
            },
            {
                "isletmeName": "SARAYKÖY isletme",
                "ORT_OG_ARIZA_SÜRESİ_DK": 107.59,
                "OG_KESİNTİ_SAYISI": 31,
                "ORT_AG_ARIZA_SÜRESİ_SAAT": 1.94,
                "AG_KESİNTİ_SAYISI": 98,
                "OG_KISA_KESİNTİ_SAYISI": 3,
                "OG_UZUN_KESİNTİ_SAYISI": 31
            },
            {
                "isletmeName": "DENİZLİ MERKEZ isletme",
                "ORT_OG_ARIZA_SÜRESİ_DK": 67.0,
                "OG_KESİNTİ_SAYISI": 84,
                "ORT_AG_ARIZA_SÜRESİ_SAAT": 1.86,
                "AG_KESİNTİ_SAYISI": 426,
                "OG_KISA_KESİNTİ_SAYISI": 4,
                "OG_UZUN_KESİNTİ_SAYISI": 84
            },
            {
                "isletmeName": "FETHİYE isletme",
                "ORT_OG_ARIZA_SÜRESİ_DK": 120.54,
                "OG_KESİNTİ_SAYISI": 170,
                "ORT_AG_ARIZA_SÜRESİ_SAAT": 3.0,
                "AG_KESİNTİ_SAYISI": 643,
                "OG_KISA_KESİNTİ_SAYISI": 12,
                "OG_UZUN_KESİNTİ_SAYISI": 170
            },
            {
                "isletmeName": "MUĞLA MERKEZ isletme",
                "ORT_OG_ARIZA_SÜRESİ_DK": 104.53,
                "OG_KESİNTİ_SAYISI": 157,
                "ORT_AG_ARIZA_SÜRESİ_SAAT": 2.88,
                "AG_KESİNTİ_SAYISI": 424,
                "OG_KISA_KESİNTİ_SAYISI": 5,
                "OG_UZUN_KESİNTİ_SAYISI": 157
            },
            {
                "isletmeName": "ORTACA isletme ",
                "ORT_OG_ARIZA_SÜRESİ_DK": 110.06,
                "OG_KESİNTİ_SAYISI": 138,
                "ORT_AG_ARIZA_SÜRESİ_SAAT": 2.72,
                "AG_KESİNTİ_SAYISI": 276,
                "OG_KISA_KESİNTİ_SAYISI": 7,
                "OG_UZUN_KESİNTİ_SAYISI": 138
            },
            {
                "isletmeName": "ACIPAYAM isletme ",
                "ORT_OG_ARIZA_SÜRESİ_DK": 71.28,
                "OG_KESİNTİ_SAYISI": 155,
                "ORT_AG_ARIZA_SÜRESİ_SAAT": 1.77,
                "AG_KESİNTİ_SAYISI": 237,
                "OG_KISA_KESİNTİ_SAYISI": 24,
                "OG_UZUN_KESİNTİ_SAYISI": 155
            },
            {
                "isletmeName": "NAZİLLİ isletme",
                "ORT_OG_ARIZA_SÜRESİ_DK": 71.06,
                "OG_KESİNTİ_SAYISI": 98,
                "ORT_AG_ARIZA_SÜRESİ_SAAT": 2.21,
                "AG_KESİNTİ_SAYISI": 305,
                "OG_KISA_KESİNTİ_SAYISI": 12,
                "OG_UZUN_KESİNTİ_SAYISI": 98
            },
            {
                "isletmeName": "BODRUM isletme",
                "ORT_OG_ARIZA_SÜRESİ_DK": 113.25,
                "OG_KESİNTİ_SAYISI": 166,
                "ORT_AG_ARIZA_SÜRESİ_SAAT": 3.82,
                "AG_KESİNTİ_SAYISI": 527,
                "OG_KISA_KESİNTİ_SAYISI": 3,
                "OG_UZUN_KESİNTİ_SAYISI": 166
            }
        ]
    }
 
];
const[SummaryGraphData,setSummaryGraphData]=useState(initialStateSummaryData)

        const categories_Aylik = [
            'Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran',
            'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'
          ];

          const isletmeAdi = isletme;
        
          

// 1-12 arası her ay için sırayla oku
const ortOgSureDizisi = Array.from({ length: 12 }, (_, i) => {
  const ay = (i + 1).toString(); // "1", "2", ..., "12"
  const ayVerisi = initialStateSummaryData[0][ay];

  if (!ayVerisi) return null;

  const isletmeVerisi = initialStateSummaryData[0][ay]?.find(
    item => item.isletmeName.trim() === isletme
  )?.ORT_OG_ARIZA_SÜRESİ_DK;

  return isletmeVerisi ? isletmeVerisi : null;
});

//console.log(ortOgSureDizisi);

          const ort_og_arıza_giderme_suresi_dk = [


            
            { name: '2022', data:ortOgSureDizisi },
            { name: '2023', data: [45, 44, 47, 46, 48, 50, 49, 51, 50, 48, 47, 45] },
            { name: '2024', data: [42, 41, 43, 44, 40, 39, 38, 37, 39, 41, 40, 39] },
            { name: '2025', data: [35, 38, 36, 37, 39, 40, 41, 42, 43, 44, 42, 40] },
             
          ];
        
          const series_og_suresi = [
            { name: '2022', data: [50, 52, 55, 48, 60, 63, 59, 58, 56, 57, 54, 52] },
            { name: '2023', data: [45, 44, 47, 46, 48, 50, 49, 51, 50, 48, 47, 45] },
            { name: '2024', data: [42, 41, 43, 44, 40, 39, 38, 37, 39, 41, 40, 39] },
            { name: '2025', data: [35, 38, 36, 37, 39, 40, 41, 42, 43, 44, 42, 40] },
             
          ];
        
          const series_ag_suresi = [
            { name: '2022', data: [25, 28, 30, 27, 26, 25, 24, 23, 24, 26, 27, 25] },
            { name: '2023', data: [20, 21, 22, 23, 22, 21, 22, 23, 24, 25, 24, 23] },
            { name: '2024', data: [18, 19, 17, 16, 18, 17, 18, 19, 20, 21, 20, 19] },
            { name: '2025', data: [15, 16, 15, 14, 13, 14, 15, 16, 17, 18, 17, 16] },
           
          ];
        
          const chartConfigs = [
            {
                title: `${isletme} ORT OG ARIZA GİDERME SÜRESİ DAKİKA`,
                series: ort_og_arıza_giderme_suresi_dk
            },
            {
              title: `${isletme} ORT AG ARIZA GİDERME SÜRESİ DAKİKA`,
              series: series_ag_suresi
            },
            {
                title: `${isletme}TOPLAM UZUN OG ARIZA SAYISI`,  
              series: series_og_suresi
            },
            {
              title: 'TOPLAM UZUN AG ARIZA SAYISI',
              series: series_ag_suresi
            },
            {
              title: 'TOPLAM KISA AG ARIZA SAYISI',
              series: series_ag_suresi
            }
          ];
        
          return (
            <div className="dashboard-container">
              {chartConfigs.map((config, index) => {
                const options = {
                  chart: {
                    type: 'line',
                    height: 350
                  },
                  title: {
                    text: config.title,
                    align: 'center'
                  },
                  xaxis: {
                    categories: categories_Aylik
                  },
                  stroke: {
                    curve: 'smooth'
                  },
                  dataLabels: {
                    enabled: false
                  },
                  tooltip: {
                    shared: true
                  },
                  legend: {
                    position: 'top'
                  }
                };
        
                return (
                  <div className="chart" key={`chart-${index}`}>
                    <ReactApexChart
                      options={options}
                      series={config.series}
                      type="line"
                      height={350}
                      width={700}
                    />
                  </div>
                );
              })}
            </div>
          );
        };
    
    export default SummaryGraph;
    