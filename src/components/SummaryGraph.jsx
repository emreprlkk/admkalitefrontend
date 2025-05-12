import React, { useState, useEffect } from 'react';


    import ReactApexChart from 'react-apexcharts';
    
    export const SummaryGraph = ({isletme,navbarisletmecount,directnavbardangelenisletmecount }) => {
const initialStateSummaryData=[
    {
        2025:{
            "1": [
                {
                    "isletmeName": "ACIPAYAM İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 43.74,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 1.66,
                    "OG_UZUN_KESİNTİ_SAYISI": 136,
                    "AG_UZUN_KESİNTİ_SAYISI": 171,
                    "OG_KISA_KESİNTİ_SAYISI": 25
                },
                {
                    "isletmeName": "AYDIN MERKEZ İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 62.17,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.34,
                    "OG_UZUN_KESİNTİ_SAYISI": 118,
                    "AG_UZUN_KESİNTİ_SAYISI": 259,
                    "OG_KISA_KESİNTİ_SAYISI": 5
                },
                {
                    "isletmeName": "BODRUM İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 87.91,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 3.99,
                    "OG_UZUN_KESİNTİ_SAYISI": 117,
                    "AG_UZUN_KESİNTİ_SAYISI": 344,
                    "OG_KISA_KESİNTİ_SAYISI": 3
                },
                {
                    "isletmeName": "ÇİNE İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 67.44,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.25,
                    "OG_UZUN_KESİNTİ_SAYISI": 21,
                    "AG_UZUN_KESİNTİ_SAYISI": 52,
                    "OG_KISA_KESİNTİ_SAYISI": 8
                },
                {
                    "isletmeName": "ÇİVRİL İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 54.32,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 1.38,
                    "OG_UZUN_KESİNTİ_SAYISI": 83,
                    "AG_UZUN_KESİNTİ_SAYISI": 98,
                    "OG_KISA_KESİNTİ_SAYISI": 18
                },
                {
                    "isletmeName": "DENİZLİ MERKEZ İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 54.74,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 1.71,
                    "OG_UZUN_KESİNTİ_SAYISI": 101,
                    "AG_UZUN_KESİNTİ_SAYISI": 292,
                    "OG_KISA_KESİNTİ_SAYISI": 10
                },
                {
                    "isletmeName": "DİDİM İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 121.34,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.44,
                    "OG_UZUN_KESİNTİ_SAYISI": 53,
                    "AG_UZUN_KESİNTİ_SAYISI": 181,
                    "OG_KISA_KESİNTİ_SAYISI": 3
                },
                {
                    "isletmeName": "FETHİYE İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 69.39,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.78,
                    "OG_UZUN_KESİNTİ_SAYISI": 112,
                    "AG_UZUN_KESİNTİ_SAYISI": 299,
                    "OG_KISA_KESİNTİ_SAYISI": 9
                },
                {
                    "isletmeName": "KUŞADASI İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 90.76,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.29,
                    "OG_UZUN_KESİNTİ_SAYISI": 31,
                    "AG_UZUN_KESİNTİ_SAYISI": 222,
                    "OG_KISA_KESİNTİ_SAYISI": 1
                },
                {
                    "isletmeName": "MARMARİS İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 71.33,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.87,
                    "OG_UZUN_KESİNTİ_SAYISI": 85,
                    "AG_UZUN_KESİNTİ_SAYISI": 150,
                    "OG_KISA_KESİNTİ_SAYISI": 8
                },
                {
                    "isletmeName": "MİLAS İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 84.77,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.92,
                    "OG_UZUN_KESİNTİ_SAYISI": 130,
                    "AG_UZUN_KESİNTİ_SAYISI": 306,
                    "OG_KISA_KESİNTİ_SAYISI": 6
                },
                {
                    "isletmeName": "MUĞLA MERKEZ İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 51.73,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.35,
                    "OG_UZUN_KESİNTİ_SAYISI": 172,
                    "AG_UZUN_KESİNTİ_SAYISI": 239,
                    "OG_KISA_KESİNTİ_SAYISI": 14
                },
                {
                    "isletmeName": "NAZİLLİ İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 46.31,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 1.86,
                    "OG_UZUN_KESİNTİ_SAYISI": 64,
                    "AG_UZUN_KESİNTİ_SAYISI": 212,
                    "OG_KISA_KESİNTİ_SAYISI": 21
                },
                {
                    "isletmeName": "ORTACA İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 66.8,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.06,
                    "OG_UZUN_KESİNTİ_SAYISI": 58,
                    "AG_UZUN_KESİNTİ_SAYISI": 128,
                    "OG_KISA_KESİNTİ_SAYISI": 11
                },
                {
                    "isletmeName": "SARAYKÖY İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 49.03,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 1.68,
                    "OG_UZUN_KESİNTİ_SAYISI": 35,
                    "AG_UZUN_KESİNTİ_SAYISI": 58,
                    "OG_KISA_KESİNTİ_SAYISI": 7
                },
                {
                    "isletmeName": "SÖKE İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 92.83,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.56,
                    "OG_UZUN_KESİNTİ_SAYISI": 38,
                    "AG_UZUN_KESİNTİ_SAYISI": 169,
                    "OG_KISA_KESİNTİ_SAYISI": 7
                }
            ],
            "2": [
                {
                    "isletmeName": "ACIPAYAM İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 51.05,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 1.91,
                    "OG_UZUN_KESİNTİ_SAYISI": 98,
                    "AG_UZUN_KESİNTİ_SAYISI": 212,
                    "OG_KISA_KESİNTİ_SAYISI": 26
                },
                {
                    "isletmeName": "AYDIN MERKEZ İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 50.04,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 1.87,
                    "OG_UZUN_KESİNTİ_SAYISI": 116,
                    "AG_UZUN_KESİNTİ_SAYISI": 297,
                    "OG_KISA_KESİNTİ_SAYISI": 8
                },
                {
                    "isletmeName": "BODRUM İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 82.63,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.84,
                    "OG_UZUN_KESİNTİ_SAYISI": 107,
                    "AG_UZUN_KESİNTİ_SAYISI": 556,
                    "OG_KISA_KESİNTİ_SAYISI": 6
                },
                {
                    "isletmeName": "ÇİNE İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 47.65,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.5,
                    "OG_UZUN_KESİNTİ_SAYISI": 18,
                    "AG_UZUN_KESİNTİ_SAYISI": 44,
                    "OG_KISA_KESİNTİ_SAYISI": 9
                },
                {
                    "isletmeName": "ÇİVRİL İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 34.59,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 1.26,
                    "OG_UZUN_KESİNTİ_SAYISI": 67,
                    "AG_UZUN_KESİNTİ_SAYISI": 99,
                    "OG_KISA_KESİNTİ_SAYISI": 19
                },
                {
                    "isletmeName": "DENİZLİ MERKEZ İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 58.93,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 1.81,
                    "OG_UZUN_KESİNTİ_SAYISI": 77,
                    "AG_UZUN_KESİNTİ_SAYISI": 243,
                    "OG_KISA_KESİNTİ_SAYISI": 19
                },
                {
                    "isletmeName": "DİDİM İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 59.5,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.33,
                    "OG_UZUN_KESİNTİ_SAYISI": 39,
                    "AG_UZUN_KESİNTİ_SAYISI": 213,
                    "OG_KISA_KESİNTİ_SAYISI": 9
                },
                {
                    "isletmeName": "FETHİYE İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 94.78,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 3.39,
                    "OG_UZUN_KESİNTİ_SAYISI": 191,
                    "AG_UZUN_KESİNTİ_SAYISI": 657,
                    "OG_KISA_KESİNTİ_SAYISI": 16
                },
                {
                    "isletmeName": "KUŞADASI İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 54.99,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 1.98,
                    "OG_UZUN_KESİNTİ_SAYISI": 24,
                    "AG_UZUN_KESİNTİ_SAYISI": 189,
                    "OG_KISA_KESİNTİ_SAYISI": 1
                },
                {
                    "isletmeName": "MARMARİS İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 58.81,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.36,
                    "OG_UZUN_KESİNTİ_SAYISI": 54,
                    "AG_UZUN_KESİNTİ_SAYISI": 160,
                    "OG_KISA_KESİNTİ_SAYISI": 5
                },
                {
                    "isletmeName": "MİLAS İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 74.95,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.41,
                    "OG_UZUN_KESİNTİ_SAYISI": 123,
                    "AG_UZUN_KESİNTİ_SAYISI": 411,
                    "OG_KISA_KESİNTİ_SAYISI": 4
                },
                {
                    "isletmeName": "MUĞLA MERKEZ İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 53.28,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.67,
                    "OG_UZUN_KESİNTİ_SAYISI": 151,
                    "AG_UZUN_KESİNTİ_SAYISI": 350,
                    "OG_KISA_KESİNTİ_SAYISI": 16
                },
                {
                    "isletmeName": "NAZİLLİ İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 41.14,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.14,
                    "OG_UZUN_KESİNTİ_SAYISI": 89,
                    "AG_UZUN_KESİNTİ_SAYISI": 193,
                    "OG_KISA_KESİNTİ_SAYISI": 20
                },
                {
                    "isletmeName": "ORTACA İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 70.52,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.2,
                    "OG_UZUN_KESİNTİ_SAYISI": 82,
                    "AG_UZUN_KESİNTİ_SAYISI": 274,
                    "OG_KISA_KESİNTİ_SAYISI": 12
                },
                {
                    "isletmeName": "SARAYKÖY İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 28.23,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 1.57,
                    "OG_UZUN_KESİNTİ_SAYISI": 22,
                    "AG_UZUN_KESİNTİ_SAYISI": 66,
                    "OG_KISA_KESİNTİ_SAYISI": 8
                },
                {
                    "isletmeName": "SÖKE İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 79.46,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.24,
                    "OG_UZUN_KESİNTİ_SAYISI": 33,
                    "AG_UZUN_KESİNTİ_SAYISI": 154,
                    "OG_KISA_KESİNTİ_SAYISI": 9
                }
            ],
            "3": [
                {
                    "isletmeName": "ACIPAYAM İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 56.85,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 1.72,
                    "OG_UZUN_KESİNTİ_SAYISI": 148,
                    "AG_UZUN_KESİNTİ_SAYISI": 222,
                    "OG_KISA_KESİNTİ_SAYISI": 42
                },
                {
                    "isletmeName": "AYDIN MERKEZ İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 56.81,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.53,
                    "OG_UZUN_KESİNTİ_SAYISI": 154,
                    "AG_UZUN_KESİNTİ_SAYISI": 263,
                    "OG_KISA_KESİNTİ_SAYISI": 23
                },
                {
                    "isletmeName": "BODRUM İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 62.7,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 3.71,
                    "OG_UZUN_KESİNTİ_SAYISI": 130,
                    "AG_UZUN_KESİNTİ_SAYISI": 346,
                    "OG_KISA_KESİNTİ_SAYISI": 4
                },
                {
                    "isletmeName": "ÇİNE İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 68.63,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.99,
                    "OG_UZUN_KESİNTİ_SAYISI": 31,
                    "AG_UZUN_KESİNTİ_SAYISI": 70,
                    "OG_KISA_KESİNTİ_SAYISI": 17
                },
                {
                    "isletmeName": "ÇİVRİL İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 50.53,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 1.43,
                    "OG_UZUN_KESİNTİ_SAYISI": 103,
                    "AG_UZUN_KESİNTİ_SAYISI": 163,
                    "OG_KISA_KESİNTİ_SAYISI": 33
                },
                {
                    "isletmeName": "DENİZLİ MERKEZ İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 39.54,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 1.74,
                    "OG_UZUN_KESİNTİ_SAYISI": 94,
                    "AG_UZUN_KESİNTİ_SAYISI": 251,
                    "OG_KISA_KESİNTİ_SAYISI": 18
                },
                {
                    "isletmeName": "DİDİM İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 48.78,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.38,
                    "OG_UZUN_KESİNTİ_SAYISI": 47,
                    "AG_UZUN_KESİNTİ_SAYISI": 172,
                    "OG_KISA_KESİNTİ_SAYISI": 20
                },
                {
                    "isletmeName": "FETHİYE İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 80.35,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 3.61,
                    "OG_UZUN_KESİNTİ_SAYISI": 198,
                    "AG_UZUN_KESİNTİ_SAYISI": 435,
                    "OG_KISA_KESİNTİ_SAYISI": 36
                },
                {
                    "isletmeName": "KUŞADASI İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 43.76,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.03,
                    "OG_UZUN_KESİNTİ_SAYISI": 32,
                    "AG_UZUN_KESİNTİ_SAYISI": 131,
                    "OG_KISA_KESİNTİ_SAYISI": 4
                },
                {
                    "isletmeName": "MARMARİS İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 48.78,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.92,
                    "OG_UZUN_KESİNTİ_SAYISI": 52,
                    "AG_UZUN_KESİNTİ_SAYISI": 132,
                    "OG_KISA_KESİNTİ_SAYISI": 8
                },
                {
                    "isletmeName": "MİLAS İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 46.09,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 3.34,
                    "OG_UZUN_KESİNTİ_SAYISI": 140,
                    "AG_UZUN_KESİNTİ_SAYISI": 252,
                    "OG_KISA_KESİNTİ_SAYISI": 26
                },
                {
                    "isletmeName": "MUĞLA MERKEZ İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 54.43,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.57,
                    "OG_UZUN_KESİNTİ_SAYISI": 152,
                    "AG_UZUN_KESİNTİ_SAYISI": 303,
                    "OG_KISA_KESİNTİ_SAYISI": 14
                },
                {
                    "isletmeName": "NAZİLLİ İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 48.21,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 1.99,
                    "OG_UZUN_KESİNTİ_SAYISI": 124,
                    "AG_UZUN_KESİNTİ_SAYISI": 188,
                    "OG_KISA_KESİNTİ_SAYISI": 39
                },
                {
                    "isletmeName": "ORTACA İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 73.18,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.58,
                    "OG_UZUN_KESİNTİ_SAYISI": 68,
                    "AG_UZUN_KESİNTİ_SAYISI": 128,
                    "OG_KISA_KESİNTİ_SAYISI": 26
                },
                {
                    "isletmeName": "SARAYKÖY İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 51.72,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 1.88,
                    "OG_UZUN_KESİNTİ_SAYISI": 44,
                    "AG_UZUN_KESİNTİ_SAYISI": 63,
                    "OG_KISA_KESİNTİ_SAYISI": 9
                },
                {
                    "isletmeName": "SÖKE İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 64.66,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.56,
                    "OG_UZUN_KESİNTİ_SAYISI": 83,
                    "AG_UZUN_KESİNTİ_SAYISI": 102,
                    "OG_KISA_KESİNTİ_SAYISI": 14
                }
            ],
            "4": [
                {
                    "isletmeName": "ACIPAYAM İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 54.03,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 1.92,
                    "OG_UZUN_KESİNTİ_SAYISI": 184,
                    "AG_UZUN_KESİNTİ_SAYISI": 181,
                    "OG_KISA_KESİNTİ_SAYISI": 102
                },
                {
                    "isletmeName": "AYDIN MERKEZ İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 74.66,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 3.44,
                    "OG_UZUN_KESİNTİ_SAYISI": 195,
                    "AG_UZUN_KESİNTİ_SAYISI": 460,
                    "OG_KISA_KESİNTİ_SAYISI": 51
                },
                {
                    "isletmeName": "BODRUM İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 95.38,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 3.97,
                    "OG_UZUN_KESİNTİ_SAYISI": 72,
                    "AG_UZUN_KESİNTİ_SAYISI": 277,
                    "OG_KISA_KESİNTİ_SAYISI": 2
                },
                {
                    "isletmeName": "ÇİNE İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 69.48,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 3.11,
                    "OG_UZUN_KESİNTİ_SAYISI": 60,
                    "AG_UZUN_KESİNTİ_SAYISI": 90,
                    "OG_KISA_KESİNTİ_SAYISI": 24
                },
                {
                    "isletmeName": "ÇİVRİL İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 56.22,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 1.39,
                    "OG_UZUN_KESİNTİ_SAYISI": 137,
                    "AG_UZUN_KESİNTİ_SAYISI": 171,
                    "OG_KISA_KESİNTİ_SAYISI": 43
                },
                {
                    "isletmeName": "DENİZLİ MERKEZ İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 53.11,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 1.93,
                    "OG_UZUN_KESİNTİ_SAYISI": 111,
                    "AG_UZUN_KESİNTİ_SAYISI": 316,
                    "OG_KISA_KESİNTİ_SAYISI": 30
                },
                {
                    "isletmeName": "DİDİM İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 44.09,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.27,
                    "OG_UZUN_KESİNTİ_SAYISI": 52,
                    "AG_UZUN_KESİNTİ_SAYISI": 206,
                    "OG_KISA_KESİNTİ_SAYISI": 28
                },
                {
                    "isletmeName": "FETHİYE İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 94.56,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 3.81,
                    "OG_UZUN_KESİNTİ_SAYISI": 196,
                    "AG_UZUN_KESİNTİ_SAYISI": 477,
                    "OG_KISA_KESİNTİ_SAYISI": 57
                },
                {
                    "isletmeName": "KUŞADASI İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 73.01,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.17,
                    "OG_UZUN_KESİNTİ_SAYISI": 42,
                    "AG_UZUN_KESİNTİ_SAYISI": 178,
                    "OG_KISA_KESİNTİ_SAYISI": 8
                },
                {
                    "isletmeName": "MARMARİS İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 93.9,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 3.51,
                    "OG_UZUN_KESİNTİ_SAYISI": 142,
                    "AG_UZUN_KESİNTİ_SAYISI": 184,
                    "OG_KISA_KESİNTİ_SAYISI": 26
                },
                {
                    "isletmeName": "MİLAS İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 73.19,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 3.62,
                    "OG_UZUN_KESİNTİ_SAYISI": 229,
                    "AG_UZUN_KESİNTİ_SAYISI": 348,
                    "OG_KISA_KESİNTİ_SAYISI": 26
                },
                {
                    "isletmeName": "MUĞLA MERKEZ İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 60.49,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 3.09,
                    "OG_UZUN_KESİNTİ_SAYISI": 235,
                    "AG_UZUN_KESİNTİ_SAYISI": 301,
                    "OG_KISA_KESİNTİ_SAYISI": 67
                },
                {
                    "isletmeName": "NAZİLLİ İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 50.38,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.03,
                    "OG_UZUN_KESİNTİ_SAYISI": 151,
                    "AG_UZUN_KESİNTİ_SAYISI": 265,
                    "OG_KISA_KESİNTİ_SAYISI": 79
                },
                {
                    "isletmeName": "ORTACA İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 55.23,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.91,
                    "OG_UZUN_KESİNTİ_SAYISI": 112,
                    "AG_UZUN_KESİNTİ_SAYISI": 121,
                    "OG_KISA_KESİNTİ_SAYISI": 68
                },
                {
                    "isletmeName": "SARAYKÖY İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 56.93,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 1.95,
                    "OG_UZUN_KESİNTİ_SAYISI": 51,
                    "AG_UZUN_KESİNTİ_SAYISI": 66,
                    "OG_KISA_KESİNTİ_SAYISI": 13
                },
                {
                    "isletmeName": "SÖKE İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 71.01,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 3.16,
                    "OG_UZUN_KESİNTİ_SAYISI": 73,
                    "AG_UZUN_KESİNTİ_SAYISI": 119,
                    "OG_KISA_KESİNTİ_SAYISI": 12
                }
            ]
        },
        2022:{
        "11": [
            {
                "isletmeName": "ACIPAYAM İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 51.27,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 1.85,
                "OG_UZUN_KESİNTİ_SAYISI": 112,
                "AG_UZUN_KESİNTİ_SAYISI": 185,
                "OG_KISA_KESİNTİ_SAYISI": 36
            },
            {
                "isletmeName": "AYDIN MERKEZ İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 57.43,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 1.79,
                "OG_UZUN_KESİNTİ_SAYISI": 86,
                "AG_UZUN_KESİNTİ_SAYISI": 314,
                "OG_KISA_KESİNTİ_SAYISI": 41
            },
            {
                "isletmeName": "BODRUM İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 82.58,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 3.18,
                "OG_UZUN_KESİNTİ_SAYISI": 114,
                "AG_UZUN_KESİNTİ_SAYISI": 357,
                "OG_KISA_KESİNTİ_SAYISI": 14
            },
            {
                "isletmeName": "ÇİNE İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 79.46,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.6,
                "OG_UZUN_KESİNTİ_SAYISI": 36,
                "AG_UZUN_KESİNTİ_SAYISI": 79,
                "OG_KISA_KESİNTİ_SAYISI": 28
            },
            {
                "isletmeName": "ÇİVRİL İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 57.67,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 1.9,
                "OG_UZUN_KESİNTİ_SAYISI": 127,
                "AG_UZUN_KESİNTİ_SAYISI": 120,
                "OG_KISA_KESİNTİ_SAYISI": 46
            },
            {
                "isletmeName": "DENİZLİ MERKEZ İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 69.16,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.09,
                "OG_UZUN_KESİNTİ_SAYISI": 99,
                "AG_UZUN_KESİNTİ_SAYISI": 446,
                "OG_KISA_KESİNTİ_SAYISI": 63
            },
            {
                "isletmeName": "DİDİM İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 76.82,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.26,
                "OG_UZUN_KESİNTİ_SAYISI": 95,
                "AG_UZUN_KESİNTİ_SAYISI": 289,
                "OG_KISA_KESİNTİ_SAYISI": 32
            },
            {
                "isletmeName": "FETHİYE İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 58.47,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.52,
                "OG_UZUN_KESİNTİ_SAYISI": 193,
                "AG_UZUN_KESİNTİ_SAYISI": 342,
                "OG_KISA_KESİNTİ_SAYISI": 81
            },
            {
                "isletmeName": "KUŞADASI İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 90.57,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.01,
                "OG_UZUN_KESİNTİ_SAYISI": 50,
                "AG_UZUN_KESİNTİ_SAYISI": 288,
                "OG_KISA_KESİNTİ_SAYISI": 2
            },
            {
                "isletmeName": "MARMARİS İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 72.94,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 3.24,
                "OG_UZUN_KESİNTİ_SAYISI": 80,
                "AG_UZUN_KESİNTİ_SAYISI": 135,
                "OG_KISA_KESİNTİ_SAYISI": 29
            },
            {
                "isletmeName": "MİLAS İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 88.52,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 3.05,
                "OG_UZUN_KESİNTİ_SAYISI": 185,
                "AG_UZUN_KESİNTİ_SAYISI": 299,
                "OG_KISA_KESİNTİ_SAYISI": 40
            },
            {
                "isletmeName": "MUĞLA MERKEZ İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 72.7,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.38,
                "OG_UZUN_KESİNTİ_SAYISI": 187,
                "AG_UZUN_KESİNTİ_SAYISI": 318,
                "OG_KISA_KESİNTİ_SAYISI": 24
            },
            {
                "isletmeName": "NAZİLLİ İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 61.83,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 1.87,
                "OG_UZUN_KESİNTİ_SAYISI": 79,
                "AG_UZUN_KESİNTİ_SAYISI": 273,
                "OG_KISA_KESİNTİ_SAYISI": 80
            },
            {
                "isletmeName": "ORTACA İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 47.04,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.21,
                "OG_UZUN_KESİNTİ_SAYISI": 117,
                "AG_UZUN_KESİNTİ_SAYISI": 168,
                "OG_KISA_KESİNTİ_SAYISI": 38
            },
            {
                "isletmeName": "SARAYKÖY İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 42.54,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 1.79,
                "OG_UZUN_KESİNTİ_SAYISI": 48,
                "AG_UZUN_KESİNTİ_SAYISI": 111,
                "OG_KISA_KESİNTİ_SAYISI": 21
            },
            {
                "isletmeName": "SÖKE İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 127.99,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.71,
                "OG_UZUN_KESİNTİ_SAYISI": 54,
                "AG_UZUN_KESİNTİ_SAYISI": 129,
                "OG_KISA_KESİNTİ_SAYISI": 21
            }
        ],
        "2": [
            {
                "isletmeName": "ACIPAYAM İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 94.88,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 1.8,
                "OG_UZUN_KESİNTİ_SAYISI": 112,
                "AG_UZUN_KESİNTİ_SAYISI": 283,
                "OG_KISA_KESİNTİ_SAYISI": 42
            },
            {
                "isletmeName": "AYDIN MERKEZ İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 52.03,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 1.69,
                "OG_UZUN_KESİNTİ_SAYISI": 94,
                "AG_UZUN_KESİNTİ_SAYISI": 292,
                "OG_KISA_KESİNTİ_SAYISI": 19
            },
            {
                "isletmeName": "BODRUM İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 95.7,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 3.6,
                "OG_UZUN_KESİNTİ_SAYISI": 119,
                "AG_UZUN_KESİNTİ_SAYISI": 383,
                "OG_KISA_KESİNTİ_SAYISI": 9
            },
            {
                "isletmeName": "ÇİNE İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 66.43,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.26,
                "OG_UZUN_KESİNTİ_SAYISI": 24,
                "AG_UZUN_KESİNTİ_SAYISI": 124,
                "OG_KISA_KESİNTİ_SAYISI": 2
            },
            {
                "isletmeName": "ÇİVRİL İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 60.36,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 1.52,
                "OG_UZUN_KESİNTİ_SAYISI": 92,
                "AG_UZUN_KESİNTİ_SAYISI": 150,
                "OG_KISA_KESİNTİ_SAYISI": 39
            },
            {
                "isletmeName": "DENİZLİ MERKEZ İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 95.97,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.53,
                "OG_UZUN_KESİNTİ_SAYISI": 79,
                "AG_UZUN_KESİNTİ_SAYISI": 559,
                "OG_KISA_KESİNTİ_SAYISI": 32
            },
            {
                "isletmeName": "DİDİM İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 75.89,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 3.48,
                "OG_UZUN_KESİNTİ_SAYISI": 77,
                "AG_UZUN_KESİNTİ_SAYISI": 321,
                "OG_KISA_KESİNTİ_SAYISI": 8
            },
            {
                "isletmeName": "FETHİYE İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 78.07,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 3.55,
                "OG_UZUN_KESİNTİ_SAYISI": 128,
                "AG_UZUN_KESİNTİ_SAYISI": 579,
                "OG_KISA_KESİNTİ_SAYISI": 16
            },
            {
                "isletmeName": "KUŞADASI İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 74.59,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.36,
                "OG_UZUN_KESİNTİ_SAYISI": 35,
                "AG_UZUN_KESİNTİ_SAYISI": 309,
                "OG_KISA_KESİNTİ_SAYISI": 0
            },
            {
                "isletmeName": "MARMARİS İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 78.44,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.85,
                "OG_UZUN_KESİNTİ_SAYISI": 76,
                "AG_UZUN_KESİNTİ_SAYISI": 268,
                "OG_KISA_KESİNTİ_SAYISI": 6
            },
            {
                "isletmeName": "MİLAS İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 92.23,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 3.88,
                "OG_UZUN_KESİNTİ_SAYISI": 122,
                "AG_UZUN_KESİNTİ_SAYISI": 297,
                "OG_KISA_KESİNTİ_SAYISI": 25
            },
            {
                "isletmeName": "MUĞLA MERKEZ İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 79.09,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 3.47,
                "OG_UZUN_KESİNTİ_SAYISI": 180,
                "AG_UZUN_KESİNTİ_SAYISI": 455,
                "OG_KISA_KESİNTİ_SAYISI": 22
            },
            {
                "isletmeName": "NAZİLLİ İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 51.88,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.31,
                "OG_UZUN_KESİNTİ_SAYISI": 75,
                "AG_UZUN_KESİNTİ_SAYISI": 264,
                "OG_KISA_KESİNTİ_SAYISI": 19
            },
            {
                "isletmeName": "ORTACA İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 68.63,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.96,
                "OG_UZUN_KESİNTİ_SAYISI": 93,
                "AG_UZUN_KESİNTİ_SAYISI": 336,
                "OG_KISA_KESİNTİ_SAYISI": 12
            },
            {
                "isletmeName": "SARAYKÖY İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 60.89,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 1.73,
                "OG_UZUN_KESİNTİ_SAYISI": 35,
                "AG_UZUN_KESİNTİ_SAYISI": 75,
                "OG_KISA_KESİNTİ_SAYISI": 6
            },
            {
                "isletmeName": "SÖKE İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 124.3,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.93,
                "OG_UZUN_KESİNTİ_SAYISI": 59,
                "AG_UZUN_KESİNTİ_SAYISI": 163,
                "OG_KISA_KESİNTİ_SAYISI": 6
            }
        ],
        "3": [
            {
                "isletmeName": "ACIPAYAM İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 130.78,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 3.41,
                "OG_UZUN_KESİNTİ_SAYISI": 191,
                "AG_UZUN_KESİNTİ_SAYISI": 465,
                "OG_KISA_KESİNTİ_SAYISI": 41
            },
            {
                "isletmeName": "AYDIN MERKEZ İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 43.54,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 1.59,
                "OG_UZUN_KESİNTİ_SAYISI": 105,
                "AG_UZUN_KESİNTİ_SAYISI": 344,
                "OG_KISA_KESİNTİ_SAYISI": 17
            },
            {
                "isletmeName": "BODRUM İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 93.58,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.74,
                "OG_UZUN_KESİNTİ_SAYISI": 74,
                "AG_UZUN_KESİNTİ_SAYISI": 475,
                "OG_KISA_KESİNTİ_SAYISI": 7
            },
            {
                "isletmeName": "ÇİNE İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 64.63,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.75,
                "OG_UZUN_KESİNTİ_SAYISI": 29,
                "AG_UZUN_KESİNTİ_SAYISI": 128,
                "OG_KISA_KESİNTİ_SAYISI": 12
            },
            {
                "isletmeName": "ÇİVRİL İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 94.02,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 3.76,
                "OG_UZUN_KESİNTİ_SAYISI": 127,
                "AG_UZUN_KESİNTİ_SAYISI": 285,
                "OG_KISA_KESİNTİ_SAYISI": 25
            },
            {
                "isletmeName": "DENİZLİ MERKEZ İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 71.57,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.42,
                "OG_UZUN_KESİNTİ_SAYISI": 147,
                "AG_UZUN_KESİNTİ_SAYISI": 495,
                "OG_KISA_KESİNTİ_SAYISI": 70
            },
            {
                "isletmeName": "DİDİM İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 77.86,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.54,
                "OG_UZUN_KESİNTİ_SAYISI": 47,
                "AG_UZUN_KESİNTİ_SAYISI": 378,
                "OG_KISA_KESİNTİ_SAYISI": 6
            },
            {
                "isletmeName": "FETHİYE İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 72.32,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 3.16,
                "OG_UZUN_KESİNTİ_SAYISI": 186,
                "AG_UZUN_KESİNTİ_SAYISI": 585,
                "OG_KISA_KESİNTİ_SAYISI": 28
            },
            {
                "isletmeName": "KUŞADASI İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 74.02,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.36,
                "OG_UZUN_KESİNTİ_SAYISI": 43,
                "AG_UZUN_KESİNTİ_SAYISI": 322,
                "OG_KISA_KESİNTİ_SAYISI": 1
            },
            {
                "isletmeName": "MARMARİS İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 77.87,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.91,
                "OG_UZUN_KESİNTİ_SAYISI": 116,
                "AG_UZUN_KESİNTİ_SAYISI": 244,
                "OG_KISA_KESİNTİ_SAYISI": 9
            },
            {
                "isletmeName": "MİLAS İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 80.71,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 3.96,
                "OG_UZUN_KESİNTİ_SAYISI": 138,
                "AG_UZUN_KESİNTİ_SAYISI": 354,
                "OG_KISA_KESİNTİ_SAYISI": 15
            },
            {
                "isletmeName": "MUĞLA MERKEZ İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 80.76,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 3.16,
                "OG_UZUN_KESİNTİ_SAYISI": 132,
                "AG_UZUN_KESİNTİ_SAYISI": 473,
                "OG_KISA_KESİNTİ_SAYISI": 18
            },
            {
                "isletmeName": "NAZİLLİ İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 79.39,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.43,
                "OG_UZUN_KESİNTİ_SAYISI": 100,
                "AG_UZUN_KESİNTİ_SAYISI": 389,
                "OG_KISA_KESİNTİ_SAYISI": 29
            },
            {
                "isletmeName": "ORTACA İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 49.38,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.63,
                "OG_UZUN_KESİNTİ_SAYISI": 118,
                "AG_UZUN_KESİNTİ_SAYISI": 300,
                "OG_KISA_KESİNTİ_SAYISI": 16
            },
            {
                "isletmeName": "SARAYKÖY İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 72.19,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 1.95,
                "OG_UZUN_KESİNTİ_SAYISI": 40,
                "AG_UZUN_KESİNTİ_SAYISI": 73,
                "OG_KISA_KESİNTİ_SAYISI": 8
            },
            {
                "isletmeName": "SÖKE İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 70.67,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.1,
                "OG_UZUN_KESİNTİ_SAYISI": 55,
                "AG_UZUN_KESİNTİ_SAYISI": 137,
                "OG_KISA_KESİNTİ_SAYISI": 6
            }
        ],
        "6": [
            {
                "isletmeName": "ACIPAYAM İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 53.1,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 1.64,
                "OG_UZUN_KESİNTİ_SAYISI": 252,
                "AG_UZUN_KESİNTİ_SAYISI": 290,
                "OG_KISA_KESİNTİ_SAYISI": 96
            },
            {
                "isletmeName": "AYDIN MERKEZ İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 62.06,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.43,
                "OG_UZUN_KESİNTİ_SAYISI": 294,
                "AG_UZUN_KESİNTİ_SAYISI": 676,
                "OG_KISA_KESİNTİ_SAYISI": 57
            },
            {
                "isletmeName": "BODRUM İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 58.96,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 3.04,
                "OG_UZUN_KESİNTİ_SAYISI": 90,
                "AG_UZUN_KESİNTİ_SAYISI": 305,
                "OG_KISA_KESİNTİ_SAYISI": 12
            },
            {
                "isletmeName": "ÇİNE İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 58.36,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 3.64,
                "OG_UZUN_KESİNTİ_SAYISI": 140,
                "AG_UZUN_KESİNTİ_SAYISI": 199,
                "OG_KISA_KESİNTİ_SAYISI": 52
            },
            {
                "isletmeName": "ÇİVRİL İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 44.97,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 1.83,
                "OG_UZUN_KESİNTİ_SAYISI": 224,
                "AG_UZUN_KESİNTİ_SAYISI": 267,
                "OG_KISA_KESİNTİ_SAYISI": 93
            },
            {
                "isletmeName": "DENİZLİ MERKEZ İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 57.35,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.13,
                "OG_UZUN_KESİNTİ_SAYISI": 232,
                "AG_UZUN_KESİNTİ_SAYISI": 496,
                "OG_KISA_KESİNTİ_SAYISI": 134
            },
            {
                "isletmeName": "DİDİM İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 48.51,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.56,
                "OG_UZUN_KESİNTİ_SAYISI": 91,
                "AG_UZUN_KESİNTİ_SAYISI": 361,
                "OG_KISA_KESİNTİ_SAYISI": 33
            },
            {
                "isletmeName": "FETHİYE İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 74.73,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 3.05,
                "OG_UZUN_KESİNTİ_SAYISI": 271,
                "AG_UZUN_KESİNTİ_SAYISI": 623,
                "OG_KISA_KESİNTİ_SAYISI": 74
            },
            {
                "isletmeName": "KUŞADASI İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 86.47,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.17,
                "OG_UZUN_KESİNTİ_SAYISI": 53,
                "AG_UZUN_KESİNTİ_SAYISI": 343,
                "OG_KISA_KESİNTİ_SAYISI": 2
            },
            {
                "isletmeName": "MARMARİS İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 60.22,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.4,
                "OG_UZUN_KESİNTİ_SAYISI": 78,
                "AG_UZUN_KESİNTİ_SAYISI": 172,
                "OG_KISA_KESİNTİ_SAYISI": 13
            },
            {
                "isletmeName": "MİLAS İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 68.45,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 3.69,
                "OG_UZUN_KESİNTİ_SAYISI": 190,
                "AG_UZUN_KESİNTİ_SAYISI": 440,
                "OG_KISA_KESİNTİ_SAYISI": 32
            },
            {
                "isletmeName": "MUĞLA MERKEZ İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 77.11,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.87,
                "OG_UZUN_KESİNTİ_SAYISI": 260,
                "AG_UZUN_KESİNTİ_SAYISI": 478,
                "OG_KISA_KESİNTİ_SAYISI": 37
            },
            {
                "isletmeName": "NAZİLLİ İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 77.11,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.83,
                "OG_UZUN_KESİNTİ_SAYISI": 237,
                "AG_UZUN_KESİNTİ_SAYISI": 667,
                "OG_KISA_KESİNTİ_SAYISI": 102
            },
            {
                "isletmeName": "ORTACA İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 55.14,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.32,
                "OG_UZUN_KESİNTİ_SAYISI": 121,
                "AG_UZUN_KESİNTİ_SAYISI": 210,
                "OG_KISA_KESİNTİ_SAYISI": 38
            },
            {
                "isletmeName": "SARAYKÖY İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 47.97,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 1.77,
                "OG_UZUN_KESİNTİ_SAYISI": 103,
                "AG_UZUN_KESİNTİ_SAYISI": 149,
                "OG_KISA_KESİNTİ_SAYISI": 30
            },
            {
                "isletmeName": "SÖKE İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 98.47,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.76,
                "OG_UZUN_KESİNTİ_SAYISI": 91,
                "AG_UZUN_KESİNTİ_SAYISI": 184,
                "OG_KISA_KESİNTİ_SAYISI": 20
            }
        ],
        "9": [
            {
                "isletmeName": "ACIPAYAM İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 43.2,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 1.8,
                "OG_UZUN_KESİNTİ_SAYISI": 113,
                "AG_UZUN_KESİNTİ_SAYISI": 202,
                "OG_KISA_KESİNTİ_SAYISI": 70
            },
            {
                "isletmeName": "AYDIN MERKEZ İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 52.79,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 1.55,
                "OG_UZUN_KESİNTİ_SAYISI": 84,
                "AG_UZUN_KESİNTİ_SAYISI": 193,
                "OG_KISA_KESİNTİ_SAYISI": 45
            },
            {
                "isletmeName": "BODRUM İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 64.77,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.92,
                "OG_UZUN_KESİNTİ_SAYISI": 93,
                "AG_UZUN_KESİNTİ_SAYISI": 189,
                "OG_KISA_KESİNTİ_SAYISI": 10
            },
            {
                "isletmeName": "ÇİNE İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 47.36,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.31,
                "OG_UZUN_KESİNTİ_SAYISI": 16,
                "AG_UZUN_KESİNTİ_SAYISI": 46,
                "OG_KISA_KESİNTİ_SAYISI": 22
            },
            {
                "isletmeName": "ÇİVRİL İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 45.83,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 1.45,
                "OG_UZUN_KESİNTİ_SAYISI": 135,
                "AG_UZUN_KESİNTİ_SAYISI": 104,
                "OG_KISA_KESİNTİ_SAYISI": 67
            },
            {
                "isletmeName": "DENİZLİ MERKEZ İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 51.37,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 1.94,
                "OG_UZUN_KESİNTİ_SAYISI": 82,
                "AG_UZUN_KESİNTİ_SAYISI": 378,
                "OG_KISA_KESİNTİ_SAYISI": 60
            },
            {
                "isletmeName": "DİDİM İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 78.01,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 1.65,
                "OG_UZUN_KESİNTİ_SAYISI": 57,
                "AG_UZUN_KESİNTİ_SAYISI": 197,
                "OG_KISA_KESİNTİ_SAYISI": 12
            },
            {
                "isletmeName": "FETHİYE İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 51.8,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.4,
                "OG_UZUN_KESİNTİ_SAYISI": 121,
                "AG_UZUN_KESİNTİ_SAYISI": 271,
                "OG_KISA_KESİNTİ_SAYISI": 44
            },
            {
                "isletmeName": "KUŞADASI İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 87.23,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.02,
                "OG_UZUN_KESİNTİ_SAYISI": 41,
                "AG_UZUN_KESİNTİ_SAYISI": 181,
                "OG_KISA_KESİNTİ_SAYISI": 5
            },
            {
                "isletmeName": "MARMARİS İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 92.52,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.18,
                "OG_UZUN_KESİNTİ_SAYISI": 60,
                "AG_UZUN_KESİNTİ_SAYISI": 82,
                "OG_KISA_KESİNTİ_SAYISI": 19
            },
            {
                "isletmeName": "MİLAS İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 58.84,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 3.22,
                "OG_UZUN_KESİNTİ_SAYISI": 104,
                "AG_UZUN_KESİNTİ_SAYISI": 186,
                "OG_KISA_KESİNTİ_SAYISI": 22
            },
            {
                "isletmeName": "MUĞLA MERKEZ İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 66.42,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.7,
                "OG_UZUN_KESİNTİ_SAYISI": 114,
                "AG_UZUN_KESİNTİ_SAYISI": 283,
                "OG_KISA_KESİNTİ_SAYISI": 21
            },
            {
                "isletmeName": "NAZİLLİ İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 78.8,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 1.89,
                "OG_UZUN_KESİNTİ_SAYISI": 78,
                "AG_UZUN_KESİNTİ_SAYISI": 146,
                "OG_KISA_KESİNTİ_SAYISI": 86
            },
            {
                "isletmeName": "ORTACA İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 41.32,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.29,
                "OG_UZUN_KESİNTİ_SAYISI": 56,
                "AG_UZUN_KESİNTİ_SAYISI": 120,
                "OG_KISA_KESİNTİ_SAYISI": 15
            },
            {
                "isletmeName": "SARAYKÖY İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 35.62,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 1.63,
                "OG_UZUN_KESİNTİ_SAYISI": 57,
                "AG_UZUN_KESİNTİ_SAYISI": 59,
                "OG_KISA_KESİNTİ_SAYISI": 18
            },
            {
                "isletmeName": "SÖKE İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 68.68,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.04,
                "OG_UZUN_KESİNTİ_SAYISI": 29,
                "AG_UZUN_KESİNTİ_SAYISI": 91,
                "OG_KISA_KESİNTİ_SAYISI": 18
            }
        ],
        "12": [
            {
                "isletmeName": "ACIPAYAM İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 46.54,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 1.83,
                "OG_UZUN_KESİNTİ_SAYISI": 88,
                "AG_UZUN_KESİNTİ_SAYISI": 142,
                "OG_KISA_KESİNTİ_SAYISI": 32
            },
            {
                "isletmeName": "AYDIN MERKEZ İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 58.08,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 1.78,
                "OG_UZUN_KESİNTİ_SAYISI": 97,
                "AG_UZUN_KESİNTİ_SAYISI": 264,
                "OG_KISA_KESİNTİ_SAYISI": 42
            },
            {
                "isletmeName": "BODRUM İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 65.4,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 3.31,
                "OG_UZUN_KESİNTİ_SAYISI": 149,
                "AG_UZUN_KESİNTİ_SAYISI": 311,
                "OG_KISA_KESİNTİ_SAYISI": 23
            },
            {
                "isletmeName": "ÇİNE İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 95.49,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 1.8,
                "OG_UZUN_KESİNTİ_SAYISI": 20,
                "AG_UZUN_KESİNTİ_SAYISI": 49,
                "OG_KISA_KESİNTİ_SAYISI": 24
            },
            {
                "isletmeName": "ÇİVRİL İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 41.49,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 1.71,
                "OG_UZUN_KESİNTİ_SAYISI": 94,
                "AG_UZUN_KESİNTİ_SAYISI": 104,
                "OG_KISA_KESİNTİ_SAYISI": 41
            },
            {
                "isletmeName": "DENİZLİ MERKEZ İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 69.59,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 1.99,
                "OG_UZUN_KESİNTİ_SAYISI": 83,
                "AG_UZUN_KESİNTİ_SAYISI": 382,
                "OG_KISA_KESİNTİ_SAYISI": 45
            },
            {
                "isletmeName": "DİDİM İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 45.24,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.0,
                "OG_UZUN_KESİNTİ_SAYISI": 42,
                "AG_UZUN_KESİNTİ_SAYISI": 321,
                "OG_KISA_KESİNTİ_SAYISI": 10
            },
            {
                "isletmeName": "FETHİYE İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 63.36,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.35,
                "OG_UZUN_KESİNTİ_SAYISI": 139,
                "AG_UZUN_KESİNTİ_SAYISI": 285,
                "OG_KISA_KESİNTİ_SAYISI": 55
            },
            {
                "isletmeName": "KUŞADASI İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 97.01,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.29,
                "OG_UZUN_KESİNTİ_SAYISI": 53,
                "AG_UZUN_KESİNTİ_SAYISI": 380,
                "OG_KISA_KESİNTİ_SAYISI": 2
            },
            {
                "isletmeName": "MARMARİS İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 79.98,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.69,
                "OG_UZUN_KESİNTİ_SAYISI": 64,
                "AG_UZUN_KESİNTİ_SAYISI": 144,
                "OG_KISA_KESİNTİ_SAYISI": 16
            },
            {
                "isletmeName": "MİLAS İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 83.9,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 3.02,
                "OG_UZUN_KESİNTİ_SAYISI": 157,
                "AG_UZUN_KESİNTİ_SAYISI": 214,
                "OG_KISA_KESİNTİ_SAYISI": 37
            },
            {
                "isletmeName": "MUĞLA MERKEZ İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 58.07,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.13,
                "OG_UZUN_KESİNTİ_SAYISI": 154,
                "AG_UZUN_KESİNTİ_SAYISI": 258,
                "OG_KISA_KESİNTİ_SAYISI": 27
            },
            {
                "isletmeName": "NAZİLLİ İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 66.12,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 1.87,
                "OG_UZUN_KESİNTİ_SAYISI": 51,
                "AG_UZUN_KESİNTİ_SAYISI": 251,
                "OG_KISA_KESİNTİ_SAYISI": 55
            },
            {
                "isletmeName": "ORTACA İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 63.69,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.14,
                "OG_UZUN_KESİNTİ_SAYISI": 57,
                "AG_UZUN_KESİNTİ_SAYISI": 145,
                "OG_KISA_KESİNTİ_SAYISI": 27
            },
            {
                "isletmeName": "SARAYKÖY İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 37.27,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 1.82,
                "OG_UZUN_KESİNTİ_SAYISI": 25,
                "AG_UZUN_KESİNTİ_SAYISI": 55,
                "OG_KISA_KESİNTİ_SAYISI": 8
            },
            {
                "isletmeName": "SÖKE İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 50.29,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 1.99,
                "OG_UZUN_KESİNTİ_SAYISI": 47,
                "AG_UZUN_KESİNTİ_SAYISI": 111,
                "OG_KISA_KESİNTİ_SAYISI": 19
            }
        ],
        "8": [
            {
                "isletmeName": "ACIPAYAM İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 57.3,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 1.82,
                "OG_UZUN_KESİNTİ_SAYISI": 172,
                "AG_UZUN_KESİNTİ_SAYISI": 234,
                "OG_KISA_KESİNTİ_SAYISI": 104
            },
            {
                "isletmeName": "AYDIN MERKEZ İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 55.83,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 1.61,
                "OG_UZUN_KESİNTİ_SAYISI": 185,
                "AG_UZUN_KESİNTİ_SAYISI": 323,
                "OG_KISA_KESİNTİ_SAYISI": 76
            },
            {
                "isletmeName": "BODRUM İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 63.99,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 3.07,
                "OG_UZUN_KESİNTİ_SAYISI": 111,
                "AG_UZUN_KESİNTİ_SAYISI": 255,
                "OG_KISA_KESİNTİ_SAYISI": 10
            },
            {
                "isletmeName": "ÇİNE İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 70.86,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.11,
                "OG_UZUN_KESİNTİ_SAYISI": 52,
                "AG_UZUN_KESİNTİ_SAYISI": 141,
                "OG_KISA_KESİNTİ_SAYISI": 28
            },
            {
                "isletmeName": "ÇİVRİL İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 43.76,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 1.75,
                "OG_UZUN_KESİNTİ_SAYISI": 226,
                "AG_UZUN_KESİNTİ_SAYISI": 248,
                "OG_KISA_KESİNTİ_SAYISI": 119
            },
            {
                "isletmeName": "DENİZLİ MERKEZ İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 57.89,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 1.91,
                "OG_UZUN_KESİNTİ_SAYISI": 189,
                "AG_UZUN_KESİNTİ_SAYISI": 402,
                "OG_KISA_KESİNTİ_SAYISI": 123
            },
            {
                "isletmeName": "DİDİM İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 67.9,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 1.8,
                "OG_UZUN_KESİNTİ_SAYISI": 80,
                "AG_UZUN_KESİNTİ_SAYISI": 271,
                "OG_KISA_KESİNTİ_SAYISI": 12
            },
            {
                "isletmeName": "FETHİYE İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 61.92,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.33,
                "OG_UZUN_KESİNTİ_SAYISI": 158,
                "AG_UZUN_KESİNTİ_SAYISI": 482,
                "OG_KISA_KESİNTİ_SAYISI": 68
            },
            {
                "isletmeName": "KUŞADASI İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 65.92,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 1.73,
                "OG_UZUN_KESİNTİ_SAYISI": 33,
                "AG_UZUN_KESİNTİ_SAYISI": 243,
                "OG_KISA_KESİNTİ_SAYISI": 1
            },
            {
                "isletmeName": "MARMARİS İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 84.14,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.32,
                "OG_UZUN_KESİNTİ_SAYISI": 125,
                "AG_UZUN_KESİNTİ_SAYISI": 169,
                "OG_KISA_KESİNTİ_SAYISI": 31
            },
            {
                "isletmeName": "MİLAS İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 86.04,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 3.5,
                "OG_UZUN_KESİNTİ_SAYISI": 225,
                "AG_UZUN_KESİNTİ_SAYISI": 312,
                "OG_KISA_KESİNTİ_SAYISI": 40
            },
            {
                "isletmeName": "MUĞLA MERKEZ İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 76.81,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.78,
                "OG_UZUN_KESİNTİ_SAYISI": 152,
                "AG_UZUN_KESİNTİ_SAYISI": 319,
                "OG_KISA_KESİNTİ_SAYISI": 39
            },
            {
                "isletmeName": "NAZİLLİ İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 57.78,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 1.8,
                "OG_UZUN_KESİNTİ_SAYISI": 114,
                "AG_UZUN_KESİNTİ_SAYISI": 268,
                "OG_KISA_KESİNTİ_SAYISI": 134
            },
            {
                "isletmeName": "ORTACA İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 39.83,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.01,
                "OG_UZUN_KESİNTİ_SAYISI": 79,
                "AG_UZUN_KESİNTİ_SAYISI": 173,
                "OG_KISA_KESİNTİ_SAYISI": 39
            },
            {
                "isletmeName": "SARAYKÖY İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 45.2,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 1.86,
                "OG_UZUN_KESİNTİ_SAYISI": 68,
                "AG_UZUN_KESİNTİ_SAYISI": 146,
                "OG_KISA_KESİNTİ_SAYISI": 32
            },
            {
                "isletmeName": "SÖKE İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 77.87,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.08,
                "OG_UZUN_KESİNTİ_SAYISI": 69,
                "AG_UZUN_KESİNTİ_SAYISI": 130,
                "OG_KISA_KESİNTİ_SAYISI": 34
            }
        ],
        "1": [
            {
                "isletmeName": "ACIPAYAM İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 104.67,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.1,
                "OG_UZUN_KESİNTİ_SAYISI": 138,
                "AG_UZUN_KESİNTİ_SAYISI": 284,
                "OG_KISA_KESİNTİ_SAYISI": 37
            },
            {
                "isletmeName": "AYDIN MERKEZ İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 72.63,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 1.75,
                "OG_UZUN_KESİNTİ_SAYISI": 93,
                "AG_UZUN_KESİNTİ_SAYISI": 414,
                "OG_KISA_KESİNTİ_SAYISI": 16
            },
            {
                "isletmeName": "BODRUM İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 116.59,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 3.66,
                "OG_UZUN_KESİNTİ_SAYISI": 152,
                "AG_UZUN_KESİNTİ_SAYISI": 774,
                "OG_KISA_KESİNTİ_SAYISI": 15
            },
            {
                "isletmeName": "ÇİNE İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 35.38,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.32,
                "OG_UZUN_KESİNTİ_SAYISI": 27,
                "AG_UZUN_KESİNTİ_SAYISI": 90,
                "OG_KISA_KESİNTİ_SAYISI": 9
            },
            {
                "isletmeName": "ÇİVRİL İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 70.27,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 1.77,
                "OG_UZUN_KESİNTİ_SAYISI": 112,
                "AG_UZUN_KESİNTİ_SAYISI": 167,
                "OG_KISA_KESİNTİ_SAYISI": 26
            },
            {
                "isletmeName": "DENİZLİ MERKEZ İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 52.66,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.2,
                "OG_UZUN_KESİNTİ_SAYISI": 116,
                "AG_UZUN_KESİNTİ_SAYISI": 458,
                "OG_KISA_KESİNTİ_SAYISI": 49
            },
            {
                "isletmeName": "DİDİM İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 109.74,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 3.17,
                "OG_UZUN_KESİNTİ_SAYISI": 76,
                "AG_UZUN_KESİNTİ_SAYISI": 522,
                "OG_KISA_KESİNTİ_SAYISI": 5
            },
            {
                "isletmeName": "FETHİYE İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 90.99,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 3.81,
                "OG_UZUN_KESİNTİ_SAYISI": 184,
                "AG_UZUN_KESİNTİ_SAYISI": 699,
                "OG_KISA_KESİNTİ_SAYISI": 20
            },
            {
                "isletmeName": "KUŞADASI İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 89.35,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.5,
                "OG_UZUN_KESİNTİ_SAYISI": 36,
                "AG_UZUN_KESİNTİ_SAYISI": 466,
                "OG_KISA_KESİNTİ_SAYISI": 0
            },
            {
                "isletmeName": "MARMARİS İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 95.16,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 3.71,
                "OG_UZUN_KESİNTİ_SAYISI": 149,
                "AG_UZUN_KESİNTİ_SAYISI": 319,
                "OG_KISA_KESİNTİ_SAYISI": 20
            },
            {
                "isletmeName": "MİLAS İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 106.87,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 3.84,
                "OG_UZUN_KESİNTİ_SAYISI": 108,
                "AG_UZUN_KESİNTİ_SAYISI": 393,
                "OG_KISA_KESİNTİ_SAYISI": 9
            },
            {
                "isletmeName": "MUĞLA MERKEZ İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 86.76,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 3.5,
                "OG_UZUN_KESİNTİ_SAYISI": 225,
                "AG_UZUN_KESİNTİ_SAYISI": 394,
                "OG_KISA_KESİNTİ_SAYISI": 16
            },
            {
                "isletmeName": "NAZİLLİ İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 49.0,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 1.93,
                "OG_UZUN_KESİNTİ_SAYISI": 79,
                "AG_UZUN_KESİNTİ_SAYISI": 312,
                "OG_KISA_KESİNTİ_SAYISI": 30
            },
            {
                "isletmeName": "ORTACA İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 69.02,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.8,
                "OG_UZUN_KESİNTİ_SAYISI": 114,
                "AG_UZUN_KESİNTİ_SAYISI": 408,
                "OG_KISA_KESİNTİ_SAYISI": 31
            },
            {
                "isletmeName": "SARAYKÖY İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 56.15,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 1.84,
                "OG_UZUN_KESİNTİ_SAYISI": 50,
                "AG_UZUN_KESİNTİ_SAYISI": 91,
                "OG_KISA_KESİNTİ_SAYISI": 36
            },
            {
                "isletmeName": "SÖKE İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 73.15,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 1.89,
                "OG_UZUN_KESİNTİ_SAYISI": 61,
                "AG_UZUN_KESİNTİ_SAYISI": 175,
                "OG_KISA_KESİNTİ_SAYISI": 8
            }
        ],
        "7": [
            {
                "isletmeName": "ACIPAYAM İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 44.89,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 1.6,
                "OG_UZUN_KESİNTİ_SAYISI": 216,
                "AG_UZUN_KESİNTİ_SAYISI": 257,
                "OG_KISA_KESİNTİ_SAYISI": 99
            },
            {
                "isletmeName": "AYDIN MERKEZ İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 49.95,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 1.62,
                "OG_UZUN_KESİNTİ_SAYISI": 188,
                "AG_UZUN_KESİNTİ_SAYISI": 406,
                "OG_KISA_KESİNTİ_SAYISI": 90
            },
            {
                "isletmeName": "BODRUM İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 97.02,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.61,
                "OG_UZUN_KESİNTİ_SAYISI": 88,
                "AG_UZUN_KESİNTİ_SAYISI": 295,
                "OG_KISA_KESİNTİ_SAYISI": 11
            },
            {
                "isletmeName": "ÇİNE İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 55.95,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.69,
                "OG_UZUN_KESİNTİ_SAYISI": 69,
                "AG_UZUN_KESİNTİ_SAYISI": 180,
                "OG_KISA_KESİNTİ_SAYISI": 69
            },
            {
                "isletmeName": "ÇİVRİL İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 43.12,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 1.77,
                "OG_UZUN_KESİNTİ_SAYISI": 197,
                "AG_UZUN_KESİNTİ_SAYISI": 270,
                "OG_KISA_KESİNTİ_SAYISI": 93
            },
            {
                "isletmeName": "DENİZLİ MERKEZ İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 46.42,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 1.78,
                "OG_UZUN_KESİNTİ_SAYISI": 106,
                "AG_UZUN_KESİNTİ_SAYISI": 347,
                "OG_KISA_KESİNTİ_SAYISI": 109
            },
            {
                "isletmeName": "DİDİM İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 63.96,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.12,
                "OG_UZUN_KESİNTİ_SAYISI": 86,
                "AG_UZUN_KESİNTİ_SAYISI": 461,
                "OG_KISA_KESİNTİ_SAYISI": 20
            },
            {
                "isletmeName": "FETHİYE İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 65.76,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.57,
                "OG_UZUN_KESİNTİ_SAYISI": 235,
                "AG_UZUN_KESİNTİ_SAYISI": 597,
                "OG_KISA_KESİNTİ_SAYISI": 79
            },
            {
                "isletmeName": "KUŞADASI İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 60.85,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 1.97,
                "OG_UZUN_KESİNTİ_SAYISI": 49,
                "AG_UZUN_KESİNTİ_SAYISI": 384,
                "OG_KISA_KESİNTİ_SAYISI": 4
            },
            {
                "isletmeName": "MARMARİS İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 59.21,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.36,
                "OG_UZUN_KESİNTİ_SAYISI": 59,
                "AG_UZUN_KESİNTİ_SAYISI": 224,
                "OG_KISA_KESİNTİ_SAYISI": 14
            },
            {
                "isletmeName": "MİLAS İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 67.46,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 3.26,
                "OG_UZUN_KESİNTİ_SAYISI": 190,
                "AG_UZUN_KESİNTİ_SAYISI": 328,
                "OG_KISA_KESİNTİ_SAYISI": 25
            },
            {
                "isletmeName": "MUĞLA MERKEZ İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 49.83,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.58,
                "OG_UZUN_KESİNTİ_SAYISI": 158,
                "AG_UZUN_KESİNTİ_SAYISI": 361,
                "OG_KISA_KESİNTİ_SAYISI": 46
            },
            {
                "isletmeName": "NAZİLLİ İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 64.08,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 1.86,
                "OG_UZUN_KESİNTİ_SAYISI": 158,
                "AG_UZUN_KESİNTİ_SAYISI": 391,
                "OG_KISA_KESİNTİ_SAYISI": 151
            },
            {
                "isletmeName": "ORTACA İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 58.29,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.16,
                "OG_UZUN_KESİNTİ_SAYISI": 87,
                "AG_UZUN_KESİNTİ_SAYISI": 218,
                "OG_KISA_KESİNTİ_SAYISI": 27
            },
            {
                "isletmeName": "SARAYKÖY İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 46.55,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 1.59,
                "OG_UZUN_KESİNTİ_SAYISI": 71,
                "AG_UZUN_KESİNTİ_SAYISI": 117,
                "OG_KISA_KESİNTİ_SAYISI": 28
            },
            {
                "isletmeName": "SÖKE İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 68.39,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.05,
                "OG_UZUN_KESİNTİ_SAYISI": 67,
                "AG_UZUN_KESİNTİ_SAYISI": 174,
                "OG_KISA_KESİNTİ_SAYISI": 23
            }
        ],
        "10": [
            {
                "isletmeName": "ACIPAYAM İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 48.48,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 1.78,
                "OG_UZUN_KESİNTİ_SAYISI": 145,
                "AG_UZUN_KESİNTİ_SAYISI": 219,
                "OG_KISA_KESİNTİ_SAYISI": 60
            },
            {
                "isletmeName": "AYDIN MERKEZ İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 55.15,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 1.66,
                "OG_UZUN_KESİNTİ_SAYISI": 76,
                "AG_UZUN_KESİNTİ_SAYISI": 183,
                "OG_KISA_KESİNTİ_SAYISI": 40
            },
            {
                "isletmeName": "BODRUM İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 71.07,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 3.35,
                "OG_UZUN_KESİNTİ_SAYISI": 85,
                "AG_UZUN_KESİNTİ_SAYISI": 231,
                "OG_KISA_KESİNTİ_SAYISI": 9
            },
            {
                "isletmeName": "ÇİNE İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 52.28,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.49,
                "OG_UZUN_KESİNTİ_SAYISI": 36,
                "AG_UZUN_KESİNTİ_SAYISI": 68,
                "OG_KISA_KESİNTİ_SAYISI": 39
            },
            {
                "isletmeName": "ÇİVRİL İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 55.22,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 1.89,
                "OG_UZUN_KESİNTİ_SAYISI": 142,
                "AG_UZUN_KESİNTİ_SAYISI": 169,
                "OG_KISA_KESİNTİ_SAYISI": 55
            },
            {
                "isletmeName": "DENİZLİ MERKEZ İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 45.83,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 1.89,
                "OG_UZUN_KESİNTİ_SAYISI": 78,
                "AG_UZUN_KESİNTİ_SAYISI": 417,
                "OG_KISA_KESİNTİ_SAYISI": 87
            },
            {
                "isletmeName": "DİDİM İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 59.83,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 1.62,
                "OG_UZUN_KESİNTİ_SAYISI": 34,
                "AG_UZUN_KESİNTİ_SAYISI": 145,
                "OG_KISA_KESİNTİ_SAYISI": 5
            },
            {
                "isletmeName": "FETHİYE İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 54.23,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.45,
                "OG_UZUN_KESİNTİ_SAYISI": 169,
                "AG_UZUN_KESİNTİ_SAYISI": 364,
                "OG_KISA_KESİNTİ_SAYISI": 64
            },
            {
                "isletmeName": "KUŞADASI İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 78.96,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 1.84,
                "OG_UZUN_KESİNTİ_SAYISI": 29,
                "AG_UZUN_KESİNTİ_SAYISI": 180,
                "OG_KISA_KESİNTİ_SAYISI": 4
            },
            {
                "isletmeName": "MARMARİS İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 76.86,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.69,
                "OG_UZUN_KESİNTİ_SAYISI": 103,
                "AG_UZUN_KESİNTİ_SAYISI": 129,
                "OG_KISA_KESİNTİ_SAYISI": 15
            },
            {
                "isletmeName": "MİLAS İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 55.71,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.88,
                "OG_UZUN_KESİNTİ_SAYISI": 124,
                "AG_UZUN_KESİNTİ_SAYISI": 207,
                "OG_KISA_KESİNTİ_SAYISI": 21
            },
            {
                "isletmeName": "MUĞLA MERKEZ İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 48.49,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.24,
                "OG_UZUN_KESİNTİ_SAYISI": 89,
                "AG_UZUN_KESİNTİ_SAYISI": 253,
                "OG_KISA_KESİNTİ_SAYISI": 32
            },
            {
                "isletmeName": "NAZİLLİ İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 62.1,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.18,
                "OG_UZUN_KESİNTİ_SAYISI": 68,
                "AG_UZUN_KESİNTİ_SAYISI": 183,
                "OG_KISA_KESİNTİ_SAYISI": 71
            },
            {
                "isletmeName": "ORTACA İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 60.16,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.62,
                "OG_UZUN_KESİNTİ_SAYISI": 83,
                "AG_UZUN_KESİNTİ_SAYISI": 184,
                "OG_KISA_KESİNTİ_SAYISI": 23
            },
            {
                "isletmeName": "SARAYKÖY İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 28.47,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 1.67,
                "OG_UZUN_KESİNTİ_SAYISI": 35,
                "AG_UZUN_KESİNTİ_SAYISI": 77,
                "OG_KISA_KESİNTİ_SAYISI": 15
            },
            {
                "isletmeName": "SÖKE İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 92.07,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.03,
                "OG_UZUN_KESİNTİ_SAYISI": 21,
                "AG_UZUN_KESİNTİ_SAYISI": 86,
                "OG_KISA_KESİNTİ_SAYISI": 10
            }
        ],
        "5": [
            {
                "isletmeName": "ACIPAYAM İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 65.27,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 1.9,
                "OG_UZUN_KESİNTİ_SAYISI": 209,
                "AG_UZUN_KESİNTİ_SAYISI": 288,
                "OG_KISA_KESİNTİ_SAYISI": 72
            },
            {
                "isletmeName": "AYDIN MERKEZ İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 47.18,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 1.86,
                "OG_UZUN_KESİNTİ_SAYISI": 193,
                "AG_UZUN_KESİNTİ_SAYISI": 358,
                "OG_KISA_KESİNTİ_SAYISI": 36
            },
            {
                "isletmeName": "BODRUM İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 62.64,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 3.02,
                "OG_UZUN_KESİNTİ_SAYISI": 63,
                "AG_UZUN_KESİNTİ_SAYISI": 255,
                "OG_KISA_KESİNTİ_SAYISI": 6
            },
            {
                "isletmeName": "ÇİNE İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 57.38,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.81,
                "OG_UZUN_KESİNTİ_SAYISI": 45,
                "AG_UZUN_KESİNTİ_SAYISI": 183,
                "OG_KISA_KESİNTİ_SAYISI": 21
            },
            {
                "isletmeName": "ÇİVRİL İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 44.32,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 1.71,
                "OG_UZUN_KESİNTİ_SAYISI": 202,
                "AG_UZUN_KESİNTİ_SAYISI": 236,
                "OG_KISA_KESİNTİ_SAYISI": 58
            },
            {
                "isletmeName": "DENİZLİ MERKEZ İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 72.32,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.05,
                "OG_UZUN_KESİNTİ_SAYISI": 168,
                "AG_UZUN_KESİNTİ_SAYISI": 369,
                "OG_KISA_KESİNTİ_SAYISI": 97
            },
            {
                "isletmeName": "DİDİM İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 31.85,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.09,
                "OG_UZUN_KESİNTİ_SAYISI": 67,
                "AG_UZUN_KESİNTİ_SAYISI": 266,
                "OG_KISA_KESİNTİ_SAYISI": 4
            },
            {
                "isletmeName": "FETHİYE İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 47.3,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.82,
                "OG_UZUN_KESİNTİ_SAYISI": 152,
                "AG_UZUN_KESİNTİ_SAYISI": 474,
                "OG_KISA_KESİNTİ_SAYISI": 45
            },
            {
                "isletmeName": "KUŞADASI İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 60.79,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.33,
                "OG_UZUN_KESİNTİ_SAYISI": 43,
                "AG_UZUN_KESİNTİ_SAYISI": 303,
                "OG_KISA_KESİNTİ_SAYISI": 2
            },
            {
                "isletmeName": "MARMARİS İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 55.51,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.77,
                "OG_UZUN_KESİNTİ_SAYISI": 38,
                "AG_UZUN_KESİNTİ_SAYISI": 150,
                "OG_KISA_KESİNTİ_SAYISI": 8
            },
            {
                "isletmeName": "MİLAS İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 62.97,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 3.42,
                "OG_UZUN_KESİNTİ_SAYISI": 121,
                "AG_UZUN_KESİNTİ_SAYISI": 324,
                "OG_KISA_KESİNTİ_SAYISI": 25
            },
            {
                "isletmeName": "MUĞLA MERKEZ İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 54.84,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.62,
                "OG_UZUN_KESİNTİ_SAYISI": 143,
                "AG_UZUN_KESİNTİ_SAYISI": 320,
                "OG_KISA_KESİNTİ_SAYISI": 21
            },
            {
                "isletmeName": "NAZİLLİ İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 53.47,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.08,
                "OG_UZUN_KESİNTİ_SAYISI": 112,
                "AG_UZUN_KESİNTİ_SAYISI": 360,
                "OG_KISA_KESİNTİ_SAYISI": 71
            },
            {
                "isletmeName": "ORTACA İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 42.69,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.41,
                "OG_UZUN_KESİNTİ_SAYISI": 97,
                "AG_UZUN_KESİNTİ_SAYISI": 191,
                "OG_KISA_KESİNTİ_SAYISI": 35
            },
            {
                "isletmeName": "SARAYKÖY İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 39.27,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 1.77,
                "OG_UZUN_KESİNTİ_SAYISI": 47,
                "AG_UZUN_KESİNTİ_SAYISI": 89,
                "OG_KISA_KESİNTİ_SAYISI": 9
            },
            {
                "isletmeName": "SÖKE İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 89.47,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.24,
                "OG_UZUN_KESİNTİ_SAYISI": 50,
                "AG_UZUN_KESİNTİ_SAYISI": 135,
                "OG_KISA_KESİNTİ_SAYISI": 14
            }
        ],
        "4": [
            {
                "isletmeName": "ACIPAYAM İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 60.03,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 1.9,
                "OG_UZUN_KESİNTİ_SAYISI": 191,
                "AG_UZUN_KESİNTİ_SAYISI": 317,
                "OG_KISA_KESİNTİ_SAYISI": 51
            },
            {
                "isletmeName": "AYDIN MERKEZ İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 62.69,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 1.89,
                "OG_UZUN_KESİNTİ_SAYISI": 134,
                "AG_UZUN_KESİNTİ_SAYISI": 389,
                "OG_KISA_KESİNTİ_SAYISI": 32
            },
            {
                "isletmeName": "BODRUM İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 88.64,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 3.86,
                "OG_UZUN_KESİNTİ_SAYISI": 130,
                "AG_UZUN_KESİNTİ_SAYISI": 408,
                "OG_KISA_KESİNTİ_SAYISI": 12
            },
            {
                "isletmeName": "ÇİNE İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 54.78,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.53,
                "OG_UZUN_KESİNTİ_SAYISI": 88,
                "AG_UZUN_KESİNTİ_SAYISI": 204,
                "OG_KISA_KESİNTİ_SAYISI": 23
            },
            {
                "isletmeName": "ÇİVRİL İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 44.45,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 1.73,
                "OG_UZUN_KESİNTİ_SAYISI": 129,
                "AG_UZUN_KESİNTİ_SAYISI": 265,
                "OG_KISA_KESİNTİ_SAYISI": 50
            },
            {
                "isletmeName": "DENİZLİ MERKEZ İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 56.2,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 1.92,
                "OG_UZUN_KESİNTİ_SAYISI": 161,
                "AG_UZUN_KESİNTİ_SAYISI": 476,
                "OG_KISA_KESİNTİ_SAYISI": 65
            },
            {
                "isletmeName": "DİDİM İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 75.16,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.38,
                "OG_UZUN_KESİNTİ_SAYISI": 54,
                "AG_UZUN_KESİNTİ_SAYISI": 312,
                "OG_KISA_KESİNTİ_SAYISI": 5
            },
            {
                "isletmeName": "FETHİYE İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 53.25,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.75,
                "OG_UZUN_KESİNTİ_SAYISI": 205,
                "AG_UZUN_KESİNTİ_SAYISI": 424,
                "OG_KISA_KESİNTİ_SAYISI": 37
            },
            {
                "isletmeName": "KUŞADASI İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 96.48,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.25,
                "OG_UZUN_KESİNTİ_SAYISI": 38,
                "AG_UZUN_KESİNTİ_SAYISI": 352,
                "OG_KISA_KESİNTİ_SAYISI": 1
            },
            {
                "isletmeName": "MARMARİS İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 61.37,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.62,
                "OG_UZUN_KESİNTİ_SAYISI": 83,
                "AG_UZUN_KESİNTİ_SAYISI": 196,
                "OG_KISA_KESİNTİ_SAYISI": 13
            },
            {
                "isletmeName": "MİLAS İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 78.45,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 4.17,
                "OG_UZUN_KESİNTİ_SAYISI": 144,
                "AG_UZUN_KESİNTİ_SAYISI": 410,
                "OG_KISA_KESİNTİ_SAYISI": 20
            },
            {
                "isletmeName": "MUĞLA MERKEZ İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 65.17,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.88,
                "OG_UZUN_KESİNTİ_SAYISI": 174,
                "AG_UZUN_KESİNTİ_SAYISI": 479,
                "OG_KISA_KESİNTİ_SAYISI": 13
            },
            {
                "isletmeName": "NAZİLLİ İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 65.04,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.43,
                "OG_UZUN_KESİNTİ_SAYISI": 142,
                "AG_UZUN_KESİNTİ_SAYISI": 329,
                "OG_KISA_KESİNTİ_SAYISI": 52
            },
            {
                "isletmeName": "ORTACA İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 46.45,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.46,
                "OG_UZUN_KESİNTİ_SAYISI": 79,
                "AG_UZUN_KESİNTİ_SAYISI": 208,
                "OG_KISA_KESİNTİ_SAYISI": 23
            },
            {
                "isletmeName": "SARAYKÖY İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 47.08,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 1.65,
                "OG_UZUN_KESİNTİ_SAYISI": 55,
                "AG_UZUN_KESİNTİ_SAYISI": 104,
                "OG_KISA_KESİNTİ_SAYISI": 17
            },
            {
                "isletmeName": "SÖKE İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 96.07,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.74,
                "OG_UZUN_KESİNTİ_SAYISI": 49,
                "AG_UZUN_KESİNTİ_SAYISI": 157,
                "OG_KISA_KESİNTİ_SAYISI": 11
            }
        ]
    },
        2023: {
        "1": [
            {
                "isletmeName": "ACIPAYAM İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 54.13,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 1.72,
                "OG_UZUN_KESİNTİ_SAYISI": 96,
                "AG_UZUN_KESİNTİ_SAYISI": 202,
                "OG_KISA_KESİNTİ_SAYISI": 35
            },
            {
                "isletmeName": "AYDIN MERKEZ İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 77.93,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 1.6,
                "OG_UZUN_KESİNTİ_SAYISI": 101,
                "AG_UZUN_KESİNTİ_SAYISI": 233,
                "OG_KISA_KESİNTİ_SAYISI": 14
            },
            {
                "isletmeName": "BODRUM İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 91.55,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 3.1,
                "OG_UZUN_KESİNTİ_SAYISI": 124,
                "AG_UZUN_KESİNTİ_SAYISI": 417,
                "OG_KISA_KESİNTİ_SAYISI": 12
            },
            {
                "isletmeName": "ÇİNE İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 124.26,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.66,
                "OG_UZUN_KESİNTİ_SAYISI": 19,
                "AG_UZUN_KESİNTİ_SAYISI": 60,
                "OG_KISA_KESİNTİ_SAYISI": 8
            },
            {
                "isletmeName": "ÇİVRİL İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 51.96,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 1.59,
                "OG_UZUN_KESİNTİ_SAYISI": 58,
                "AG_UZUN_KESİNTİ_SAYISI": 87,
                "OG_KISA_KESİNTİ_SAYISI": 33
            },
            {
                "isletmeName": "DENİZLİ MERKEZ İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 60.86,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.0,
                "OG_UZUN_KESİNTİ_SAYISI": 66,
                "AG_UZUN_KESİNTİ_SAYISI": 412,
                "OG_KISA_KESİNTİ_SAYISI": 36
            },
            {
                "isletmeName": "DİDİM İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 82.14,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 1.73,
                "OG_UZUN_KESİNTİ_SAYISI": 67,
                "AG_UZUN_KESİNTİ_SAYISI": 259,
                "OG_KISA_KESİNTİ_SAYISI": 13
            },
            {
                "isletmeName": "FETHİYE İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 74.02,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 3.29,
                "OG_UZUN_KESİNTİ_SAYISI": 142,
                "AG_UZUN_KESİNTİ_SAYISI": 379,
                "OG_KISA_KESİNTİ_SAYISI": 36
            },
            {
                "isletmeName": "KUŞADASI İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 50.11,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 1.71,
                "OG_UZUN_KESİNTİ_SAYISI": 33,
                "AG_UZUN_KESİNTİ_SAYISI": 274,
                "OG_KISA_KESİNTİ_SAYISI": 5
            },
            {
                "isletmeName": "MARMARİS İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 73.83,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 4.89,
                "OG_UZUN_KESİNTİ_SAYISI": 134,
                "AG_UZUN_KESİNTİ_SAYISI": 213,
                "OG_KISA_KESİNTİ_SAYISI": 32
            },
            {
                "isletmeName": "MİLAS İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 88.04,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 3.1,
                "OG_UZUN_KESİNTİ_SAYISI": 120,
                "AG_UZUN_KESİNTİ_SAYISI": 343,
                "OG_KISA_KESİNTİ_SAYISI": 25
            },
            {
                "isletmeName": "MUĞLA MERKEZ İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 65.67,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.54,
                "OG_UZUN_KESİNTİ_SAYISI": 165,
                "AG_UZUN_KESİNTİ_SAYISI": 341,
                "OG_KISA_KESİNTİ_SAYISI": 28
            },
            {
                "isletmeName": "NAZİLLİ İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 73.09,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 1.77,
                "OG_UZUN_KESİNTİ_SAYISI": 62,
                "AG_UZUN_KESİNTİ_SAYISI": 215,
                "OG_KISA_KESİNTİ_SAYISI": 39
            },
            {
                "isletmeName": "ORTACA İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 66.96,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.16,
                "OG_UZUN_KESİNTİ_SAYISI": 119,
                "AG_UZUN_KESİNTİ_SAYISI": 154,
                "OG_KISA_KESİNTİ_SAYISI": 32
            },
            {
                "isletmeName": "SARAYKÖY İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 62.97,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 1.6,
                "OG_UZUN_KESİNTİ_SAYISI": 32,
                "AG_UZUN_KESİNTİ_SAYISI": 48,
                "OG_KISA_KESİNTİ_SAYISI": 16
            },
            {
                "isletmeName": "SÖKE İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 141.41,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.46,
                "OG_UZUN_KESİNTİ_SAYISI": 78,
                "AG_UZUN_KESİNTİ_SAYISI": 78,
                "OG_KISA_KESİNTİ_SAYISI": 24
            }
        ],
        "2": [
            {
                "isletmeName": "ACIPAYAM İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 55.51,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 1.95,
                "OG_UZUN_KESİNTİ_SAYISI": 83,
                "AG_UZUN_KESİNTİ_SAYISI": 123,
                "OG_KISA_KESİNTİ_SAYISI": 39
            },
            {
                "isletmeName": "AYDIN MERKEZ İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 68.96,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 1.78,
                "OG_UZUN_KESİNTİ_SAYISI": 91,
                "AG_UZUN_KESİNTİ_SAYISI": 200,
                "OG_KISA_KESİNTİ_SAYISI": 30
            },
            {
                "isletmeName": "BODRUM İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 92.09,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 3.25,
                "OG_UZUN_KESİNTİ_SAYISI": 100,
                "AG_UZUN_KESİNTİ_SAYISI": 447,
                "OG_KISA_KESİNTİ_SAYISI": 6
            },
            {
                "isletmeName": "ÇİNE İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 67.3,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.82,
                "OG_UZUN_KESİNTİ_SAYISI": 14,
                "AG_UZUN_KESİNTİ_SAYISI": 66,
                "OG_KISA_KESİNTİ_SAYISI": 15
            },
            {
                "isletmeName": "ÇİVRİL İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 53.79,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 1.91,
                "OG_UZUN_KESİNTİ_SAYISI": 56,
                "AG_UZUN_KESİNTİ_SAYISI": 118,
                "OG_KISA_KESİNTİ_SAYISI": 10
            },
            {
                "isletmeName": "DENİZLİ MERKEZ İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 81.94,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.31,
                "OG_UZUN_KESİNTİ_SAYISI": 123,
                "AG_UZUN_KESİNTİ_SAYISI": 399,
                "OG_KISA_KESİNTİ_SAYISI": 42
            },
            {
                "isletmeName": "DİDİM İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 76.41,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 1.74,
                "OG_UZUN_KESİNTİ_SAYISI": 33,
                "AG_UZUN_KESİNTİ_SAYISI": 198,
                "OG_KISA_KESİNTİ_SAYISI": 15
            },
            {
                "isletmeName": "FETHİYE İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 78.8,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.61,
                "OG_UZUN_KESİNTİ_SAYISI": 108,
                "AG_UZUN_KESİNTİ_SAYISI": 483,
                "OG_KISA_KESİNTİ_SAYISI": 32
            },
            {
                "isletmeName": "KUŞADASI İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 125.39,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.25,
                "OG_UZUN_KESİNTİ_SAYISI": 42,
                "AG_UZUN_KESİNTİ_SAYISI": 286,
                "OG_KISA_KESİNTİ_SAYISI": 1
            },
            {
                "isletmeName": "MARMARİS İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 73.43,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.87,
                "OG_UZUN_KESİNTİ_SAYISI": 78,
                "AG_UZUN_KESİNTİ_SAYISI": 140,
                "OG_KISA_KESİNTİ_SAYISI": 20
            },
            {
                "isletmeName": "MİLAS İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 75.61,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 3.13,
                "OG_UZUN_KESİNTİ_SAYISI": 80,
                "AG_UZUN_KESİNTİ_SAYISI": 303,
                "OG_KISA_KESİNTİ_SAYISI": 13
            },
            {
                "isletmeName": "MUĞLA MERKEZ İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 82.61,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.64,
                "OG_UZUN_KESİNTİ_SAYISI": 127,
                "AG_UZUN_KESİNTİ_SAYISI": 315,
                "OG_KISA_KESİNTİ_SAYISI": 24
            },
            {
                "isletmeName": "NAZİLLİ İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 94.92,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.05,
                "OG_UZUN_KESİNTİ_SAYISI": 48,
                "AG_UZUN_KESİNTİ_SAYISI": 226,
                "OG_KISA_KESİNTİ_SAYISI": 36
            },
            {
                "isletmeName": "ORTACA İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 76.64,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.45,
                "OG_UZUN_KESİNTİ_SAYISI": 51,
                "AG_UZUN_KESİNTİ_SAYISI": 193,
                "OG_KISA_KESİNTİ_SAYISI": 15
            },
            {
                "isletmeName": "SARAYKÖY İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 73.65,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 1.54,
                "OG_UZUN_KESİNTİ_SAYISI": 34,
                "AG_UZUN_KESİNTİ_SAYISI": 45,
                "OG_KISA_KESİNTİ_SAYISI": 8
            },
            {
                "isletmeName": "SÖKE İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 115.94,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.89,
                "OG_UZUN_KESİNTİ_SAYISI": 51,
                "AG_UZUN_KESİNTİ_SAYISI": 119,
                "OG_KISA_KESİNTİ_SAYISI": 13
            }
        ],
        "3": [
            {
                "isletmeName": "ACIPAYAM İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 70.5,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 1.81,
                "OG_UZUN_KESİNTİ_SAYISI": 80,
                "AG_UZUN_KESİNTİ_SAYISI": 161,
                "OG_KISA_KESİNTİ_SAYISI": 36
            },
            {
                "isletmeName": "AYDIN MERKEZ İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 81.5,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.05,
                "OG_UZUN_KESİNTİ_SAYISI": 94,
                "AG_UZUN_KESİNTİ_SAYISI": 202,
                "OG_KISA_KESİNTİ_SAYISI": 39
            },
            {
                "isletmeName": "BODRUM İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 87.52,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 3.35,
                "OG_UZUN_KESİNTİ_SAYISI": 100,
                "AG_UZUN_KESİNTİ_SAYISI": 315,
                "OG_KISA_KESİNTİ_SAYISI": 9
            },
            {
                "isletmeName": "ÇİNE İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 79.18,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.25,
                "OG_UZUN_KESİNTİ_SAYISI": 10,
                "AG_UZUN_KESİNTİ_SAYISI": 58,
                "OG_KISA_KESİNTİ_SAYISI": 19
            },
            {
                "isletmeName": "ÇİVRİL İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 63.8,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 1.73,
                "OG_UZUN_KESİNTİ_SAYISI": 92,
                "AG_UZUN_KESİNTİ_SAYISI": 124,
                "OG_KISA_KESİNTİ_SAYISI": 32
            },
            {
                "isletmeName": "DENİZLİ MERKEZ İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 69.72,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 1.96,
                "OG_UZUN_KESİNTİ_SAYISI": 113,
                "AG_UZUN_KESİNTİ_SAYISI": 375,
                "OG_KISA_KESİNTİ_SAYISI": 68
            },
            {
                "isletmeName": "DİDİM İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 107.15,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.24,
                "OG_UZUN_KESİNTİ_SAYISI": 53,
                "AG_UZUN_KESİNTİ_SAYISI": 187,
                "OG_KISA_KESİNTİ_SAYISI": 17
            },
            {
                "isletmeName": "FETHİYE İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 78.35,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.6,
                "OG_UZUN_KESİNTİ_SAYISI": 110,
                "AG_UZUN_KESİNTİ_SAYISI": 274,
                "OG_KISA_KESİNTİ_SAYISI": 63
            },
            {
                "isletmeName": "KUŞADASI İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 74.8,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.19,
                "OG_UZUN_KESİNTİ_SAYISI": 55,
                "AG_UZUN_KESİNTİ_SAYISI": 314,
                "OG_KISA_KESİNTİ_SAYISI": 6
            },
            {
                "isletmeName": "MARMARİS İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 58.27,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.4,
                "OG_UZUN_KESİNTİ_SAYISI": 72,
                "AG_UZUN_KESİNTİ_SAYISI": 133,
                "OG_KISA_KESİNTİ_SAYISI": 19
            },
            {
                "isletmeName": "MİLAS İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 80.83,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.72,
                "OG_UZUN_KESİNTİ_SAYISI": 105,
                "AG_UZUN_KESİNTİ_SAYISI": 271,
                "OG_KISA_KESİNTİ_SAYISI": 23
            },
            {
                "isletmeName": "MUĞLA MERKEZ İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 48.7,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.28,
                "OG_UZUN_KESİNTİ_SAYISI": 139,
                "AG_UZUN_KESİNTİ_SAYISI": 195,
                "OG_KISA_KESİNTİ_SAYISI": 29
            },
            {
                "isletmeName": "NAZİLLİ İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 86.53,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 1.92,
                "OG_UZUN_KESİNTİ_SAYISI": 55,
                "AG_UZUN_KESİNTİ_SAYISI": 246,
                "OG_KISA_KESİNTİ_SAYISI": 47
            },
            {
                "isletmeName": "ORTACA İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 45.4,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.16,
                "OG_UZUN_KESİNTİ_SAYISI": 44,
                "AG_UZUN_KESİNTİ_SAYISI": 77,
                "OG_KISA_KESİNTİ_SAYISI": 23
            },
            {
                "isletmeName": "SARAYKÖY İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 68.21,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.15,
                "OG_UZUN_KESİNTİ_SAYISI": 39,
                "AG_UZUN_KESİNTİ_SAYISI": 72,
                "OG_KISA_KESİNTİ_SAYISI": 16
            },
            {
                "isletmeName": "SÖKE İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 139.81,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.1,
                "OG_UZUN_KESİNTİ_SAYISI": 36,
                "AG_UZUN_KESİNTİ_SAYISI": 98,
                "OG_KISA_KESİNTİ_SAYISI": 13
            }
        ],
        "4": [
            {
                "isletmeName": "ACIPAYAM İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 71.2,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 1.72,
                "OG_UZUN_KESİNTİ_SAYISI": 112,
                "AG_UZUN_KESİNTİ_SAYISI": 135,
                "OG_KISA_KESİNTİ_SAYISI": 43
            },
            {
                "isletmeName": "AYDIN MERKEZ İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 78.57,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.21,
                "OG_UZUN_KESİNTİ_SAYISI": 103,
                "AG_UZUN_KESİNTİ_SAYISI": 246,
                "OG_KISA_KESİNTİ_SAYISI": 63
            },
            {
                "isletmeName": "BODRUM İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 62.2,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 3.08,
                "OG_UZUN_KESİNTİ_SAYISI": 77,
                "AG_UZUN_KESİNTİ_SAYISI": 236,
                "OG_KISA_KESİNTİ_SAYISI": 3
            },
            {
                "isletmeName": "ÇİNE İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 112.22,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.52,
                "OG_UZUN_KESİNTİ_SAYISI": 34,
                "AG_UZUN_KESİNTİ_SAYISI": 59,
                "OG_KISA_KESİNTİ_SAYISI": 40
            },
            {
                "isletmeName": "ÇİVRİL İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 57.96,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 1.83,
                "OG_UZUN_KESİNTİ_SAYISI": 109,
                "AG_UZUN_KESİNTİ_SAYISI": 97,
                "OG_KISA_KESİNTİ_SAYISI": 46
            },
            {
                "isletmeName": "DENİZLİ MERKEZ İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 67.99,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.01,
                "OG_UZUN_KESİNTİ_SAYISI": 98,
                "AG_UZUN_KESİNTİ_SAYISI": 280,
                "OG_KISA_KESİNTİ_SAYISI": 66
            },
            {
                "isletmeName": "DİDİM İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 77.8,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.33,
                "OG_UZUN_KESİNTİ_SAYISI": 61,
                "AG_UZUN_KESİNTİ_SAYISI": 226,
                "OG_KISA_KESİNTİ_SAYISI": 22
            },
            {
                "isletmeName": "FETHİYE İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 68.79,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.55,
                "OG_UZUN_KESİNTİ_SAYISI": 123,
                "AG_UZUN_KESİNTİ_SAYISI": 392,
                "OG_KISA_KESİNTİ_SAYISI": 57
            },
            {
                "isletmeName": "KUŞADASI İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 70.1,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 1.93,
                "OG_UZUN_KESİNTİ_SAYISI": 38,
                "AG_UZUN_KESİNTİ_SAYISI": 227,
                "OG_KISA_KESİNTİ_SAYISI": 3
            },
            {
                "isletmeName": "MARMARİS İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 88.5,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 3.15,
                "OG_UZUN_KESİNTİ_SAYISI": 92,
                "AG_UZUN_KESİNTİ_SAYISI": 142,
                "OG_KISA_KESİNTİ_SAYISI": 29
            },
            {
                "isletmeName": "MİLAS İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 88.67,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 3.12,
                "OG_UZUN_KESİNTİ_SAYISI": 153,
                "AG_UZUN_KESİNTİ_SAYISI": 222,
                "OG_KISA_KESİNTİ_SAYISI": 41
            },
            {
                "isletmeName": "MUĞLA MERKEZ İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 53.91,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.46,
                "OG_UZUN_KESİNTİ_SAYISI": 125,
                "AG_UZUN_KESİNTİ_SAYISI": 211,
                "OG_KISA_KESİNTİ_SAYISI": 54
            },
            {
                "isletmeName": "NAZİLLİ İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 71.11,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 1.99,
                "OG_UZUN_KESİNTİ_SAYISI": 83,
                "AG_UZUN_KESİNTİ_SAYISI": 189,
                "OG_KISA_KESİNTİ_SAYISI": 84
            },
            {
                "isletmeName": "ORTACA İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 69.99,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.34,
                "OG_UZUN_KESİNTİ_SAYISI": 108,
                "AG_UZUN_KESİNTİ_SAYISI": 103,
                "OG_KISA_KESİNTİ_SAYISI": 48
            },
            {
                "isletmeName": "SARAYKÖY İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 76.32,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 1.86,
                "OG_UZUN_KESİNTİ_SAYISI": 25,
                "AG_UZUN_KESİNTİ_SAYISI": 54,
                "OG_KISA_KESİNTİ_SAYISI": 11
            },
            {
                "isletmeName": "SÖKE İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 121.76,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.43,
                "OG_UZUN_KESİNTİ_SAYISI": 51,
                "AG_UZUN_KESİNTİ_SAYISI": 86,
                "OG_KISA_KESİNTİ_SAYISI": 28
            }
        ],
        "5": [
            {
                "isletmeName": "ACIPAYAM İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 74.73,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 1.96,
                "OG_UZUN_KESİNTİ_SAYISI": 170,
                "AG_UZUN_KESİNTİ_SAYISI": 110,
                "OG_KISA_KESİNTİ_SAYISI": 63
            },
            {
                "isletmeName": "AYDIN MERKEZ İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 78.92,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.15,
                "OG_UZUN_KESİNTİ_SAYISI": 111,
                "AG_UZUN_KESİNTİ_SAYISI": 198,
                "OG_KISA_KESİNTİ_SAYISI": 84
            },
            {
                "isletmeName": "BODRUM İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 86.0,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.92,
                "OG_UZUN_KESİNTİ_SAYISI": 96,
                "AG_UZUN_KESİNTİ_SAYISI": 248,
                "OG_KISA_KESİNTİ_SAYISI": 11
            },
            {
                "isletmeName": "ÇİNE İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 91.89,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.64,
                "OG_UZUN_KESİNTİ_SAYISI": 31,
                "AG_UZUN_KESİNTİ_SAYISI": 53,
                "OG_KISA_KESİNTİ_SAYISI": 35
            },
            {
                "isletmeName": "ÇİVRİL İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 60.08,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 1.91,
                "OG_UZUN_KESİNTİ_SAYISI": 139,
                "AG_UZUN_KESİNTİ_SAYISI": 129,
                "OG_KISA_KESİNTİ_SAYISI": 65
            },
            {
                "isletmeName": "DENİZLİ MERKEZ İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 77.38,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.01,
                "OG_UZUN_KESİNTİ_SAYISI": 125,
                "AG_UZUN_KESİNTİ_SAYISI": 291,
                "OG_KISA_KESİNTİ_SAYISI": 60
            },
            {
                "isletmeName": "DİDİM İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 82.11,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.29,
                "OG_UZUN_KESİNTİ_SAYISI": 47,
                "AG_UZUN_KESİNTİ_SAYISI": 229,
                "OG_KISA_KESİNTİ_SAYISI": 11
            },
            {
                "isletmeName": "FETHİYE İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 56.35,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.88,
                "OG_UZUN_KESİNTİ_SAYISI": 114,
                "AG_UZUN_KESİNTİ_SAYISI": 302,
                "OG_KISA_KESİNTİ_SAYISI": 56
            },
            {
                "isletmeName": "KUŞADASI İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 73.11,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.18,
                "OG_UZUN_KESİNTİ_SAYISI": 40,
                "AG_UZUN_KESİNTİ_SAYISI": 224,
                "OG_KISA_KESİNTİ_SAYISI": 10
            },
            {
                "isletmeName": "MARMARİS İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 83.72,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.91,
                "OG_UZUN_KESİNTİ_SAYISI": 59,
                "AG_UZUN_KESİNTİ_SAYISI": 100,
                "OG_KISA_KESİNTİ_SAYISI": 28
            },
            {
                "isletmeName": "MİLAS İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 94.56,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 3.32,
                "OG_UZUN_KESİNTİ_SAYISI": 157,
                "AG_UZUN_KESİNTİ_SAYISI": 198,
                "OG_KISA_KESİNTİ_SAYISI": 46
            },
            {
                "isletmeName": "MUĞLA MERKEZ İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 65.34,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.54,
                "OG_UZUN_KESİNTİ_SAYISI": 179,
                "AG_UZUN_KESİNTİ_SAYISI": 172,
                "OG_KISA_KESİNTİ_SAYISI": 67
            },
            {
                "isletmeName": "NAZİLLİ İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 83.18,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.16,
                "OG_UZUN_KESİNTİ_SAYISI": 121,
                "AG_UZUN_KESİNTİ_SAYISI": 205,
                "OG_KISA_KESİNTİ_SAYISI": 97
            },
            {
                "isletmeName": "ORTACA İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 51.33,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.3,
                "OG_UZUN_KESİNTİ_SAYISI": 91,
                "AG_UZUN_KESİNTİ_SAYISI": 72,
                "OG_KISA_KESİNTİ_SAYISI": 43
            },
            {
                "isletmeName": "SARAYKÖY İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 66.38,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 1.58,
                "OG_UZUN_KESİNTİ_SAYISI": 61,
                "AG_UZUN_KESİNTİ_SAYISI": 53,
                "OG_KISA_KESİNTİ_SAYISI": 28
            },
            {
                "isletmeName": "SÖKE İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 100.64,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.25,
                "OG_UZUN_KESİNTİ_SAYISI": 31,
                "AG_UZUN_KESİNTİ_SAYISI": 101,
                "OG_KISA_KESİNTİ_SAYISI": 30
            }
        ],
        "6": [
            {
                "isletmeName": "ACIPAYAM İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 76.34,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.05,
                "OG_UZUN_KESİNTİ_SAYISI": 289,
                "AG_UZUN_KESİNTİ_SAYISI": 142,
                "OG_KISA_KESİNTİ_SAYISI": 145
            },
            {
                "isletmeName": "AYDIN MERKEZ İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 86.19,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.77,
                "OG_UZUN_KESİNTİ_SAYISI": 249,
                "AG_UZUN_KESİNTİ_SAYISI": 285,
                "OG_KISA_KESİNTİ_SAYISI": 139
            },
            {
                "isletmeName": "BODRUM İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 83.15,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 3.48,
                "OG_UZUN_KESİNTİ_SAYISI": 104,
                "AG_UZUN_KESİNTİ_SAYISI": 239,
                "OG_KISA_KESİNTİ_SAYISI": 9
            },
            {
                "isletmeName": "ÇİNE İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 96.33,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 3.6,
                "OG_UZUN_KESİNTİ_SAYISI": 73,
                "AG_UZUN_KESİNTİ_SAYISI": 61,
                "OG_KISA_KESİNTİ_SAYISI": 70
            },
            {
                "isletmeName": "ÇİVRİL İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 68.41,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 1.98,
                "OG_UZUN_KESİNTİ_SAYISI": 196,
                "AG_UZUN_KESİNTİ_SAYISI": 137,
                "OG_KISA_KESİNTİ_SAYISI": 55
            },
            {
                "isletmeName": "DENİZLİ MERKEZ İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 66.52,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.84,
                "OG_UZUN_KESİNTİ_SAYISI": 202,
                "AG_UZUN_KESİNTİ_SAYISI": 457,
                "OG_KISA_KESİNTİ_SAYISI": 120
            },
            {
                "isletmeName": "DİDİM İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 67.32,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.55,
                "OG_UZUN_KESİNTİ_SAYISI": 75,
                "AG_UZUN_KESİNTİ_SAYISI": 259,
                "OG_KISA_KESİNTİ_SAYISI": 37
            },
            {
                "isletmeName": "FETHİYE İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 63.2,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.42,
                "OG_UZUN_KESİNTİ_SAYISI": 216,
                "AG_UZUN_KESİNTİ_SAYISI": 288,
                "OG_KISA_KESİNTİ_SAYISI": 84
            },
            {
                "isletmeName": "KUŞADASI İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 84.17,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.72,
                "OG_UZUN_KESİNTİ_SAYISI": 57,
                "AG_UZUN_KESİNTİ_SAYISI": 262,
                "OG_KISA_KESİNTİ_SAYISI": 15
            },
            {
                "isletmeName": "MARMARİS İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 83.88,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.86,
                "OG_UZUN_KESİNTİ_SAYISI": 92,
                "AG_UZUN_KESİNTİ_SAYISI": 118,
                "OG_KISA_KESİNTİ_SAYISI": 15
            },
            {
                "isletmeName": "MİLAS İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 82.62,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 3.7,
                "OG_UZUN_KESİNTİ_SAYISI": 209,
                "AG_UZUN_KESİNTİ_SAYISI": 234,
                "OG_KISA_KESİNTİ_SAYISI": 70
            },
            {
                "isletmeName": "MUĞLA MERKEZ İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 56.61,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.38,
                "OG_UZUN_KESİNTİ_SAYISI": 315,
                "AG_UZUN_KESİNTİ_SAYISI": 201,
                "OG_KISA_KESİNTİ_SAYISI": 121
            },
            {
                "isletmeName": "NAZİLLİ İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 67.45,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.25,
                "OG_UZUN_KESİNTİ_SAYISI": 178,
                "AG_UZUN_KESİNTİ_SAYISI": 187,
                "OG_KISA_KESİNTİ_SAYISI": 141
            },
            {
                "isletmeName": "ORTACA İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 51.83,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 1.96,
                "OG_UZUN_KESİNTİ_SAYISI": 139,
                "AG_UZUN_KESİNTİ_SAYISI": 98,
                "OG_KISA_KESİNTİ_SAYISI": 63
            },
            {
                "isletmeName": "SARAYKÖY İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 69.61,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.0,
                "OG_UZUN_KESİNTİ_SAYISI": 94,
                "AG_UZUN_KESİNTİ_SAYISI": 63,
                "OG_KISA_KESİNTİ_SAYISI": 30
            },
            {
                "isletmeName": "SÖKE İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 93.07,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 3.04,
                "OG_UZUN_KESİNTİ_SAYISI": 82,
                "AG_UZUN_KESİNTİ_SAYISI": 87,
                "OG_KISA_KESİNTİ_SAYISI": 49
            }
        ],
        "12": [
            {
                "isletmeName": "ACIPAYAM İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 61.07,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 1.88,
                "OG_UZUN_KESİNTİ_SAYISI": 100,
                "AG_UZUN_KESİNTİ_SAYISI": 194,
                "OG_KISA_KESİNTİ_SAYISI": 19
            },
            {
                "isletmeName": "AYDIN MERKEZ İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 53.66,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.46,
                "OG_UZUN_KESİNTİ_SAYISI": 120,
                "AG_UZUN_KESİNTİ_SAYISI": 376,
                "OG_KISA_KESİNTİ_SAYISI": 24
            },
            {
                "isletmeName": "BODRUM İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 84.19,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 3.61,
                "OG_UZUN_KESİNTİ_SAYISI": 150,
                "AG_UZUN_KESİNTİ_SAYISI": 461,
                "OG_KISA_KESİNTİ_SAYISI": 10
            },
            {
                "isletmeName": "ÇİNE İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 57.7,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 3.03,
                "OG_UZUN_KESİNTİ_SAYISI": 33,
                "AG_UZUN_KESİNTİ_SAYISI": 67,
                "OG_KISA_KESİNTİ_SAYISI": 2
            },
            {
                "isletmeName": "ÇİVRİL İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 51.63,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 1.99,
                "OG_UZUN_KESİNTİ_SAYISI": 128,
                "AG_UZUN_KESİNTİ_SAYISI": 147,
                "OG_KISA_KESİNTİ_SAYISI": 29
            },
            {
                "isletmeName": "DENİZLİ MERKEZ İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 61.28,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 1.98,
                "OG_UZUN_KESİNTİ_SAYISI": 111,
                "AG_UZUN_KESİNTİ_SAYISI": 406,
                "OG_KISA_KESİNTİ_SAYISI": 34
            },
            {
                "isletmeName": "DİDİM İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 91.83,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.57,
                "OG_UZUN_KESİNTİ_SAYISI": 66,
                "AG_UZUN_KESİNTİ_SAYISI": 286,
                "OG_KISA_KESİNTİ_SAYISI": 6
            },
            {
                "isletmeName": "FETHİYE İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 79.27,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 3.04,
                "OG_UZUN_KESİNTİ_SAYISI": 159,
                "AG_UZUN_KESİNTİ_SAYISI": 470,
                "OG_KISA_KESİNTİ_SAYISI": 30
            },
            {
                "isletmeName": "KUŞADASI İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 103.29,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.29,
                "OG_UZUN_KESİNTİ_SAYISI": 52,
                "AG_UZUN_KESİNTİ_SAYISI": 291,
                "OG_KISA_KESİNTİ_SAYISI": 7
            },
            {
                "isletmeName": "MARMARİS İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 98.18,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.86,
                "OG_UZUN_KESİNTİ_SAYISI": 90,
                "AG_UZUN_KESİNTİ_SAYISI": 167,
                "OG_KISA_KESİNTİ_SAYISI": 14
            },
            {
                "isletmeName": "MİLAS İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 90.13,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 3.51,
                "OG_UZUN_KESİNTİ_SAYISI": 149,
                "AG_UZUN_KESİNTİ_SAYISI": 286,
                "OG_KISA_KESİNTİ_SAYISI": 15
            },
            {
                "isletmeName": "MUĞLA MERKEZ İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 59.13,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.34,
                "OG_UZUN_KESİNTİ_SAYISI": 163,
                "AG_UZUN_KESİNTİ_SAYISI": 277,
                "OG_KISA_KESİNTİ_SAYISI": 37
            },
            {
                "isletmeName": "NAZİLLİ İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 47.29,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.51,
                "OG_UZUN_KESİNTİ_SAYISI": 109,
                "AG_UZUN_KESİNTİ_SAYISI": 219,
                "OG_KISA_KESİNTİ_SAYISI": 30
            },
            {
                "isletmeName": "ORTACA İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 69.99,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.36,
                "OG_UZUN_KESİNTİ_SAYISI": 94,
                "AG_UZUN_KESİNTİ_SAYISI": 177,
                "OG_KISA_KESİNTİ_SAYISI": 14
            },
            {
                "isletmeName": "SARAYKÖY İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 33.17,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 1.88,
                "OG_UZUN_KESİNTİ_SAYISI": 41,
                "AG_UZUN_KESİNTİ_SAYISI": 86,
                "OG_KISA_KESİNTİ_SAYISI": 7
            },
            {
                "isletmeName": "SÖKE İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 78.01,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.68,
                "OG_UZUN_KESİNTİ_SAYISI": 68,
                "AG_UZUN_KESİNTİ_SAYISI": 186,
                "OG_KISA_KESİNTİ_SAYISI": 17
            }
        ],
        "7": [
            {
                "isletmeName": "ACIPAYAM İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 69.79,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 1.95,
                "OG_UZUN_KESİNTİ_SAYISI": 264,
                "AG_UZUN_KESİNTİ_SAYISI": 297,
                "OG_KISA_KESİNTİ_SAYISI": 114
            },
            {
                "isletmeName": "AYDIN MERKEZ İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 71.16,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.24,
                "OG_UZUN_KESİNTİ_SAYISI": 221,
                "AG_UZUN_KESİNTİ_SAYISI": 659,
                "OG_KISA_KESİNTİ_SAYISI": 93
            },
            {
                "isletmeName": "BODRUM İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 98.67,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 3.33,
                "OG_UZUN_KESİNTİ_SAYISI": 149,
                "AG_UZUN_KESİNTİ_SAYISI": 554,
                "OG_KISA_KESİNTİ_SAYISI": 16
            },
            {
                "isletmeName": "ÇİNE İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 93.64,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 3.08,
                "OG_UZUN_KESİNTİ_SAYISI": 57,
                "AG_UZUN_KESİNTİ_SAYISI": 130,
                "OG_KISA_KESİNTİ_SAYISI": 64
            },
            {
                "isletmeName": "ÇİVRİL İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 67.32,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 1.94,
                "OG_UZUN_KESİNTİ_SAYISI": 207,
                "AG_UZUN_KESİNTİ_SAYISI": 267,
                "OG_KISA_KESİNTİ_SAYISI": 80
            },
            {
                "isletmeName": "DENİZLİ MERKEZ İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 79.34,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.16,
                "OG_UZUN_KESİNTİ_SAYISI": 140,
                "AG_UZUN_KESİNTİ_SAYISI": 520,
                "OG_KISA_KESİNTİ_SAYISI": 70
            },
            {
                "isletmeName": "DİDİM İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 95.71,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.8,
                "OG_UZUN_KESİNTİ_SAYISI": 96,
                "AG_UZUN_KESİNTİ_SAYISI": 463,
                "OG_KISA_KESİNTİ_SAYISI": 24
            },
            {
                "isletmeName": "FETHİYE İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 91.4,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 3.16,
                "OG_UZUN_KESİNTİ_SAYISI": 298,
                "AG_UZUN_KESİNTİ_SAYISI": 1281,
                "OG_KISA_KESİNTİ_SAYISI": 80
            },
            {
                "isletmeName": "KUŞADASI İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 118.04,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.22,
                "OG_UZUN_KESİNTİ_SAYISI": 90,
                "AG_UZUN_KESİNTİ_SAYISI": 352,
                "OG_KISA_KESİNTİ_SAYISI": 8
            },
            {
                "isletmeName": "MARMARİS İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 119.12,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 3.34,
                "OG_UZUN_KESİNTİ_SAYISI": 120,
                "AG_UZUN_KESİNTİ_SAYISI": 346,
                "OG_KISA_KESİNTİ_SAYISI": 16
            },
            {
                "isletmeName": "MİLAS İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 75.0,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 3.35,
                "OG_UZUN_KESİNTİ_SAYISI": 221,
                "AG_UZUN_KESİNTİ_SAYISI": 414,
                "OG_KISA_KESİNTİ_SAYISI": 46
            },
            {
                "isletmeName": "MUĞLA MERKEZ İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 50.27,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.65,
                "OG_UZUN_KESİNTİ_SAYISI": 226,
                "AG_UZUN_KESİNTİ_SAYISI": 363,
                "OG_KISA_KESİNTİ_SAYISI": 46
            },
            {
                "isletmeName": "NAZİLLİ İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 65.23,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.21,
                "OG_UZUN_KESİNTİ_SAYISI": 212,
                "AG_UZUN_KESİNTİ_SAYISI": 383,
                "OG_KISA_KESİNTİ_SAYISI": 127
            },
            {
                "isletmeName": "ORTACA İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 82.3,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.6,
                "OG_UZUN_KESİNTİ_SAYISI": 134,
                "AG_UZUN_KESİNTİ_SAYISI": 457,
                "OG_KISA_KESİNTİ_SAYISI": 54
            },
            {
                "isletmeName": "SARAYKÖY İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 48.47,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 1.69,
                "OG_UZUN_KESİNTİ_SAYISI": 61,
                "AG_UZUN_KESİNTİ_SAYISI": 100,
                "OG_KISA_KESİNTİ_SAYISI": 15
            },
            {
                "isletmeName": "SÖKE İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 100.91,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.66,
                "OG_UZUN_KESİNTİ_SAYISI": 87,
                "AG_UZUN_KESİNTİ_SAYISI": 182,
                "OG_KISA_KESİNTİ_SAYISI": 38
            }
        ],
        "9": [
            {
                "isletmeName": "ACIPAYAM İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 59.31,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 1.91,
                "OG_UZUN_KESİNTİ_SAYISI": 240,
                "AG_UZUN_KESİNTİ_SAYISI": 191,
                "OG_KISA_KESİNTİ_SAYISI": 66
            },
            {
                "isletmeName": "AYDIN MERKEZ İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 98.22,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.47,
                "OG_UZUN_KESİNTİ_SAYISI": 207,
                "AG_UZUN_KESİNTİ_SAYISI": 259,
                "OG_KISA_KESİNTİ_SAYISI": 47
            },
            {
                "isletmeName": "BODRUM İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 65.91,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 3.01,
                "OG_UZUN_KESİNTİ_SAYISI": 133,
                "AG_UZUN_KESİNTİ_SAYISI": 245,
                "OG_KISA_KESİNTİ_SAYISI": 13
            },
            {
                "isletmeName": "ÇİNE İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 87.29,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.82,
                "OG_UZUN_KESİNTİ_SAYISI": 55,
                "AG_UZUN_KESİNTİ_SAYISI": 66,
                "OG_KISA_KESİNTİ_SAYISI": 33
            },
            {
                "isletmeName": "ÇİVRİL İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 59.62,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.0,
                "OG_UZUN_KESİNTİ_SAYISI": 226,
                "AG_UZUN_KESİNTİ_SAYISI": 203,
                "OG_KISA_KESİNTİ_SAYISI": 70
            },
            {
                "isletmeName": "DENİZLİ MERKEZ İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 53.28,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.01,
                "OG_UZUN_KESİNTİ_SAYISI": 164,
                "AG_UZUN_KESİNTİ_SAYISI": 415,
                "OG_KISA_KESİNTİ_SAYISI": 51
            },
            {
                "isletmeName": "DİDİM İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 61.04,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.21,
                "OG_UZUN_KESİNTİ_SAYISI": 77,
                "AG_UZUN_KESİNTİ_SAYISI": 159,
                "OG_KISA_KESİNTİ_SAYISI": 16
            },
            {
                "isletmeName": "FETHİYE İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 58.54,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.89,
                "OG_UZUN_KESİNTİ_SAYISI": 198,
                "AG_UZUN_KESİNTİ_SAYISI": 328,
                "OG_KISA_KESİNTİ_SAYISI": 38
            },
            {
                "isletmeName": "KUŞADASI İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 64.82,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.41,
                "OG_UZUN_KESİNTİ_SAYISI": 50,
                "AG_UZUN_KESİNTİ_SAYISI": 167,
                "OG_KISA_KESİNTİ_SAYISI": 4
            },
            {
                "isletmeName": "MARMARİS İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 72.97,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 3.18,
                "OG_UZUN_KESİNTİ_SAYISI": 134,
                "AG_UZUN_KESİNTİ_SAYISI": 141,
                "OG_KISA_KESİNTİ_SAYISI": 13
            },
            {
                "isletmeName": "MİLAS İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 87.58,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 3.26,
                "OG_UZUN_KESİNTİ_SAYISI": 221,
                "AG_UZUN_KESİNTİ_SAYISI": 239,
                "OG_KISA_KESİNTİ_SAYISI": 34
            },
            {
                "isletmeName": "MUĞLA MERKEZ İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 53.93,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.37,
                "OG_UZUN_KESİNTİ_SAYISI": 281,
                "AG_UZUN_KESİNTİ_SAYISI": 232,
                "OG_KISA_KESİNTİ_SAYISI": 46
            },
            {
                "isletmeName": "NAZİLLİ İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 77.71,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.43,
                "OG_UZUN_KESİNTİ_SAYISI": 209,
                "AG_UZUN_KESİNTİ_SAYISI": 264,
                "OG_KISA_KESİNTİ_SAYISI": 94
            },
            {
                "isletmeName": "ORTACA İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 56.3,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.75,
                "OG_UZUN_KESİNTİ_SAYISI": 143,
                "AG_UZUN_KESİNTİ_SAYISI": 127,
                "OG_KISA_KESİNTİ_SAYISI": 22
            },
            {
                "isletmeName": "SARAYKÖY İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 61.45,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 1.79,
                "OG_UZUN_KESİNTİ_SAYISI": 79,
                "AG_UZUN_KESİNTİ_SAYISI": 59,
                "OG_KISA_KESİNTİ_SAYISI": 16
            },
            {
                "isletmeName": "SÖKE İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 88.76,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.78,
                "OG_UZUN_KESİNTİ_SAYISI": 65,
                "AG_UZUN_KESİNTİ_SAYISI": 105,
                "OG_KISA_KESİNTİ_SAYISI": 30
            }
        ],
        "10": [
            {
                "isletmeName": "ACIPAYAM İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 51.59,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.01,
                "OG_UZUN_KESİNTİ_SAYISI": 170,
                "AG_UZUN_KESİNTİ_SAYISI": 179,
                "OG_KISA_KESİNTİ_SAYISI": 69
            },
            {
                "isletmeName": "AYDIN MERKEZ İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 60.53,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.38,
                "OG_UZUN_KESİNTİ_SAYISI": 142,
                "AG_UZUN_KESİNTİ_SAYISI": 225,
                "OG_KISA_KESİNTİ_SAYISI": 39
            },
            {
                "isletmeName": "BODRUM İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 92.4,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 3.82,
                "OG_UZUN_KESİNTİ_SAYISI": 123,
                "AG_UZUN_KESİNTİ_SAYISI": 200,
                "OG_KISA_KESİNTİ_SAYISI": 17
            },
            {
                "isletmeName": "ÇİNE İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 74.4,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.54,
                "OG_UZUN_KESİNTİ_SAYISI": 25,
                "AG_UZUN_KESİNTİ_SAYISI": 38,
                "OG_KISA_KESİNTİ_SAYISI": 12
            },
            {
                "isletmeName": "ÇİVRİL İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 64.95,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 1.98,
                "OG_UZUN_KESİNTİ_SAYISI": 211,
                "AG_UZUN_KESİNTİ_SAYISI": 131,
                "OG_KISA_KESİNTİ_SAYISI": 60
            },
            {
                "isletmeName": "DENİZLİ MERKEZ İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 52.05,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.22,
                "OG_UZUN_KESİNTİ_SAYISI": 92,
                "AG_UZUN_KESİNTİ_SAYISI": 335,
                "OG_KISA_KESİNTİ_SAYISI": 47
            },
            {
                "isletmeName": "DİDİM İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 59.34,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.34,
                "OG_UZUN_KESİNTİ_SAYISI": 53,
                "AG_UZUN_KESİNTİ_SAYISI": 144,
                "OG_KISA_KESİNTİ_SAYISI": 24
            },
            {
                "isletmeName": "FETHİYE İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 67.7,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 3.08,
                "OG_UZUN_KESİNTİ_SAYISI": 216,
                "AG_UZUN_KESİNTİ_SAYISI": 297,
                "OG_KISA_KESİNTİ_SAYISI": 59
            },
            {
                "isletmeName": "KUŞADASI İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 109.16,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.49,
                "OG_UZUN_KESİNTİ_SAYISI": 30,
                "AG_UZUN_KESİNTİ_SAYISI": 165,
                "OG_KISA_KESİNTİ_SAYISI": 7
            },
            {
                "isletmeName": "MARMARİS İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 52.1,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.54,
                "OG_UZUN_KESİNTİ_SAYISI": 85,
                "AG_UZUN_KESİNTİ_SAYISI": 60,
                "OG_KISA_KESİNTİ_SAYISI": 16
            },
            {
                "isletmeName": "MİLAS İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 63.43,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 3.66,
                "OG_UZUN_KESİNTİ_SAYISI": 183,
                "AG_UZUN_KESİNTİ_SAYISI": 209,
                "OG_KISA_KESİNTİ_SAYISI": 34
            },
            {
                "isletmeName": "MUĞLA MERKEZ İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 48.79,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.4,
                "OG_UZUN_KESİNTİ_SAYISI": 152,
                "AG_UZUN_KESİNTİ_SAYISI": 176,
                "OG_KISA_KESİNTİ_SAYISI": 38
            },
            {
                "isletmeName": "NAZİLLİ İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 54.47,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.16,
                "OG_UZUN_KESİNTİ_SAYISI": 133,
                "AG_UZUN_KESİNTİ_SAYISI": 171,
                "OG_KISA_KESİNTİ_SAYISI": 72
            },
            {
                "isletmeName": "ORTACA İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 49.95,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.09,
                "OG_UZUN_KESİNTİ_SAYISI": 73,
                "AG_UZUN_KESİNTİ_SAYISI": 102,
                "OG_KISA_KESİNTİ_SAYISI": 24
            },
            {
                "isletmeName": "SARAYKÖY İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 54.41,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.06,
                "OG_UZUN_KESİNTİ_SAYISI": 59,
                "AG_UZUN_KESİNTİ_SAYISI": 34,
                "OG_KISA_KESİNTİ_SAYISI": 17
            },
            {
                "isletmeName": "SÖKE İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 78.76,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.44,
                "OG_UZUN_KESİNTİ_SAYISI": 72,
                "AG_UZUN_KESİNTİ_SAYISI": 98,
                "OG_KISA_KESİNTİ_SAYISI": 27
            }
        ],
        "11": [
            {
                "isletmeName": "ACIPAYAM İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 67.63,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.31,
                "OG_UZUN_KESİNTİ_SAYISI": 211,
                "AG_UZUN_KESİNTİ_SAYISI": 391,
                "OG_KISA_KESİNTİ_SAYISI": 48
            },
            {
                "isletmeName": "AYDIN MERKEZ İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 105.56,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 3.3,
                "OG_UZUN_KESİNTİ_SAYISI": 279,
                "AG_UZUN_KESİNTİ_SAYISI": 529,
                "OG_KISA_KESİNTİ_SAYISI": 25
            },
            {
                "isletmeName": "BODRUM İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 104.16,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 3.99,
                "OG_UZUN_KESİNTİ_SAYISI": 338,
                "AG_UZUN_KESİNTİ_SAYISI": 482,
                "OG_KISA_KESİNTİ_SAYISI": 19
            },
            {
                "isletmeName": "ÇİNE İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 123.91,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 3.41,
                "OG_UZUN_KESİNTİ_SAYISI": 74,
                "AG_UZUN_KESİNTİ_SAYISI": 145,
                "OG_KISA_KESİNTİ_SAYISI": 17
            },
            {
                "isletmeName": "ÇİVRİL İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 79.13,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.22,
                "OG_UZUN_KESİNTİ_SAYISI": 198,
                "AG_UZUN_KESİNTİ_SAYISI": 237,
                "OG_KISA_KESİNTİ_SAYISI": 35
            },
            {
                "isletmeName": "DENİZLİ MERKEZ İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 78.44,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.73,
                "OG_UZUN_KESİNTİ_SAYISI": 145,
                "AG_UZUN_KESİNTİ_SAYISI": 594,
                "OG_KISA_KESİNTİ_SAYISI": 42
            },
            {
                "isletmeName": "DİDİM İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 80.34,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.98,
                "OG_UZUN_KESİNTİ_SAYISI": 98,
                "AG_UZUN_KESİNTİ_SAYISI": 424,
                "OG_KISA_KESİNTİ_SAYISI": 15
            },
            {
                "isletmeName": "FETHİYE İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 95.96,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 4.39,
                "OG_UZUN_KESİNTİ_SAYISI": 289,
                "AG_UZUN_KESİNTİ_SAYISI": 743,
                "OG_KISA_KESİNTİ_SAYISI": 50
            },
            {
                "isletmeName": "KUŞADASI İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 111.05,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.89,
                "OG_UZUN_KESİNTİ_SAYISI": 101,
                "AG_UZUN_KESİNTİ_SAYISI": 382,
                "OG_KISA_KESİNTİ_SAYISI": 6
            },
            {
                "isletmeName": "MARMARİS İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 97.31,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 3.97,
                "OG_UZUN_KESİNTİ_SAYISI": 167,
                "AG_UZUN_KESİNTİ_SAYISI": 197,
                "OG_KISA_KESİNTİ_SAYISI": 24
            },
            {
                "isletmeName": "MİLAS İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 96.31,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 4.08,
                "OG_UZUN_KESİNTİ_SAYISI": 387,
                "AG_UZUN_KESİNTİ_SAYISI": 443,
                "OG_KISA_KESİNTİ_SAYISI": 27
            },
            {
                "isletmeName": "MUĞLA MERKEZ İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 77.5,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 3.55,
                "OG_UZUN_KESİNTİ_SAYISI": 328,
                "AG_UZUN_KESİNTİ_SAYISI": 427,
                "OG_KISA_KESİNTİ_SAYISI": 37
            },
            {
                "isletmeName": "NAZİLLİ İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 80.07,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 3.74,
                "OG_UZUN_KESİNTİ_SAYISI": 295,
                "AG_UZUN_KESİNTİ_SAYISI": 467,
                "OG_KISA_KESİNTİ_SAYISI": 60
            },
            {
                "isletmeName": "ORTACA İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 68.35,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.86,
                "OG_UZUN_KESİNTİ_SAYISI": 194,
                "AG_UZUN_KESİNTİ_SAYISI": 286,
                "OG_KISA_KESİNTİ_SAYISI": 26
            },
            {
                "isletmeName": "SARAYKÖY İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 56.75,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.45,
                "OG_UZUN_KESİNTİ_SAYISI": 118,
                "AG_UZUN_KESİNTİ_SAYISI": 150,
                "OG_KISA_KESİNTİ_SAYISI": 20
            },
            {
                "isletmeName": "SÖKE İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 112.49,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 4.58,
                "OG_UZUN_KESİNTİ_SAYISI": 155,
                "AG_UZUN_KESİNTİ_SAYISI": 307,
                "OG_KISA_KESİNTİ_SAYISI": 41
            }
        ],
        "8": [
            {
                "isletmeName": "ACIPAYAM İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 70.6,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.09,
                "OG_UZUN_KESİNTİ_SAYISI": 217,
                "AG_UZUN_KESİNTİ_SAYISI": 291,
                "OG_KISA_KESİNTİ_SAYISI": 101
            },
            {
                "isletmeName": "AYDIN MERKEZ İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 73.83,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.42,
                "OG_UZUN_KESİNTİ_SAYISI": 148,
                "AG_UZUN_KESİNTİ_SAYISI": 268,
                "OG_KISA_KESİNTİ_SAYISI": 63
            },
            {
                "isletmeName": "BODRUM İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 87.99,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 3.35,
                "OG_UZUN_KESİNTİ_SAYISI": 155,
                "AG_UZUN_KESİNTİ_SAYISI": 297,
                "OG_KISA_KESİNTİ_SAYISI": 9
            },
            {
                "isletmeName": "ÇİNE İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 71.36,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.94,
                "OG_UZUN_KESİNTİ_SAYISI": 39,
                "AG_UZUN_KESİNTİ_SAYISI": 79,
                "OG_KISA_KESİNTİ_SAYISI": 36
            },
            {
                "isletmeName": "ÇİVRİL İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 72.35,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.05,
                "OG_UZUN_KESİNTİ_SAYISI": 198,
                "AG_UZUN_KESİNTİ_SAYISI": 202,
                "OG_KISA_KESİNTİ_SAYISI": 74
            },
            {
                "isletmeName": "DENİZLİ MERKEZ İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 71.59,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 1.99,
                "OG_UZUN_KESİNTİ_SAYISI": 154,
                "AG_UZUN_KESİNTİ_SAYISI": 547,
                "OG_KISA_KESİNTİ_SAYISI": 90
            },
            {
                "isletmeName": "DİDİM İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 78.32,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.63,
                "OG_UZUN_KESİNTİ_SAYISI": 46,
                "AG_UZUN_KESİNTİ_SAYISI": 230,
                "OG_KISA_KESİNTİ_SAYISI": 21
            },
            {
                "isletmeName": "FETHİYE İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 65.04,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.67,
                "OG_UZUN_KESİNTİ_SAYISI": 179,
                "AG_UZUN_KESİNTİ_SAYISI": 416,
                "OG_KISA_KESİNTİ_SAYISI": 37
            },
            {
                "isletmeName": "KUŞADASI İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 69.48,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.16,
                "OG_UZUN_KESİNTİ_SAYISI": 37,
                "AG_UZUN_KESİNTİ_SAYISI": 192,
                "OG_KISA_KESİNTİ_SAYISI": 5
            },
            {
                "isletmeName": "MARMARİS İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 85.9,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.82,
                "OG_UZUN_KESİNTİ_SAYISI": 96,
                "AG_UZUN_KESİNTİ_SAYISI": 132,
                "OG_KISA_KESİNTİ_SAYISI": 11
            },
            {
                "isletmeName": "MİLAS İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 60.89,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 3.18,
                "OG_UZUN_KESİNTİ_SAYISI": 281,
                "AG_UZUN_KESİNTİ_SAYISI": 249,
                "OG_KISA_KESİNTİ_SAYISI": 34
            },
            {
                "isletmeName": "MUĞLA MERKEZ İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 48.0,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.35,
                "OG_UZUN_KESİNTİ_SAYISI": 185,
                "AG_UZUN_KESİNTİ_SAYISI": 235,
                "OG_KISA_KESİNTİ_SAYISI": 23
            },
            {
                "isletmeName": "NAZİLLİ İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 73.32,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.26,
                "OG_UZUN_KESİNTİ_SAYISI": 147,
                "AG_UZUN_KESİNTİ_SAYISI": 271,
                "OG_KISA_KESİNTİ_SAYISI": 118
            },
            {
                "isletmeName": "ORTACA İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 48.25,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.39,
                "OG_UZUN_KESİNTİ_SAYISI": 100,
                "AG_UZUN_KESİNTİ_SAYISI": 116,
                "OG_KISA_KESİNTİ_SAYISI": 29
            },
            {
                "isletmeName": "SARAYKÖY İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 51.85,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 1.89,
                "OG_UZUN_KESİNTİ_SAYISI": 64,
                "AG_UZUN_KESİNTİ_SAYISI": 77,
                "OG_KISA_KESİNTİ_SAYISI": 24
            },
            {
                "isletmeName": "SÖKE İŞLETME",
                "ORT_OG_ARIZA_SÜRESİ_DK": 104.45,
                "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.23,
                "OG_UZUN_KESİNTİ_SAYISI": 51,
                "AG_UZUN_KESİNTİ_SAYISI": 120,
                "OG_KISA_KESİNTİ_SAYISI": 29
            }
        ]
    },
        2024: {
            "1": [
                {
                    "isletmeName": "ACIPAYAM İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 57.04,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 1.91,
                    "OG_UZUN_KESİNTİ_SAYISI": 86,
                    "AG_UZUN_KESİNTİ_SAYISI": 221,
                    "OG_KISA_KESİNTİ_SAYISI": 33
                },
                {
                    "isletmeName": "AYDIN MERKEZ İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 93.51,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.45,
                    "OG_UZUN_KESİNTİ_SAYISI": 149,
                    "AG_UZUN_KESİNTİ_SAYISI": 484,
                    "OG_KISA_KESİNTİ_SAYISI": 23
                },
                {
                    "isletmeName": "BODRUM İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 82.84,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 3.14,
                    "OG_UZUN_KESİNTİ_SAYISI": 119,
                    "AG_UZUN_KESİNTİ_SAYISI": 552,
                    "OG_KISA_KESİNTİ_SAYISI": 18
                },
                {
                    "isletmeName": "ÇİNE İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 102.32,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 3.37,
                    "OG_UZUN_KESİNTİ_SAYISI": 32,
                    "AG_UZUN_KESİNTİ_SAYISI": 111,
                    "OG_KISA_KESİNTİ_SAYISI": 11
                },
                {
                    "isletmeName": "ÇİVRİL İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 67.89,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 1.75,
                    "OG_UZUN_KESİNTİ_SAYISI": 88,
                    "AG_UZUN_KESİNTİ_SAYISI": 193,
                    "OG_KISA_KESİNTİ_SAYISI": 25
                },
                {
                    "isletmeName": "DENİZLİ MERKEZ İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 66.81,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.14,
                    "OG_UZUN_KESİNTİ_SAYISI": 84,
                    "AG_UZUN_KESİNTİ_SAYISI": 442,
                    "OG_KISA_KESİNTİ_SAYISI": 16
                },
                {
                    "isletmeName": "DİDİM İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 72.56,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.38,
                    "OG_UZUN_KESİNTİ_SAYISI": 49,
                    "AG_UZUN_KESİNTİ_SAYISI": 263,
                    "OG_KISA_KESİNTİ_SAYISI": 13
                },
                {
                    "isletmeName": "FETHİYE İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 83.0,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.76,
                    "OG_UZUN_KESİNTİ_SAYISI": 146,
                    "AG_UZUN_KESİNTİ_SAYISI": 528,
                    "OG_KISA_KESİNTİ_SAYISI": 17
                },
                {
                    "isletmeName": "KUŞADASI İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 96.63,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.42,
                    "OG_UZUN_KESİNTİ_SAYISI": 52,
                    "AG_UZUN_KESİNTİ_SAYISI": 342,
                    "OG_KISA_KESİNTİ_SAYISI": 4
                },
                {
                    "isletmeName": "MARMARİS İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 71.51,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 3.29,
                    "OG_UZUN_KESİNTİ_SAYISI": 85,
                    "AG_UZUN_KESİNTİ_SAYISI": 172,
                    "OG_KISA_KESİNTİ_SAYISI": 18
                },
                {
                    "isletmeName": "MİLAS İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 95.77,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 3.46,
                    "OG_UZUN_KESİNTİ_SAYISI": 179,
                    "AG_UZUN_KESİNTİ_SAYISI": 467,
                    "OG_KISA_KESİNTİ_SAYISI": 24
                },
                {
                    "isletmeName": "MUĞLA MERKEZ İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 64.73,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.46,
                    "OG_UZUN_KESİNTİ_SAYISI": 142,
                    "AG_UZUN_KESİNTİ_SAYISI": 325,
                    "OG_KISA_KESİNTİ_SAYISI": 22
                },
                {
                    "isletmeName": "NAZİLLİ İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 80.05,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.48,
                    "OG_UZUN_KESİNTİ_SAYISI": 92,
                    "AG_UZUN_KESİNTİ_SAYISI": 346,
                    "OG_KISA_KESİNTİ_SAYISI": 35
                },
                {
                    "isletmeName": "ORTACA İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 57.53,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.51,
                    "OG_UZUN_KESİNTİ_SAYISI": 67,
                    "AG_UZUN_KESİNTİ_SAYISI": 259,
                    "OG_KISA_KESİNTİ_SAYISI": 17
                },
                {
                    "isletmeName": "SARAYKÖY İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 59.48,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.08,
                    "OG_UZUN_KESİNTİ_SAYISI": 22,
                    "AG_UZUN_KESİNTİ_SAYISI": 80,
                    "OG_KISA_KESİNTİ_SAYISI": 9
                },
                {
                    "isletmeName": "SÖKE İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 105.04,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.94,
                    "OG_UZUN_KESİNTİ_SAYISI": 49,
                    "AG_UZUN_KESİNTİ_SAYISI": 232,
                    "OG_KISA_KESİNTİ_SAYISI": 17
                }
            ],
            "2": [
                {
                    "isletmeName": "ACIPAYAM İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 69.03,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 1.86,
                    "OG_UZUN_KESİNTİ_SAYISI": 87,
                    "AG_UZUN_KESİNTİ_SAYISI": 145,
                    "OG_KISA_KESİNTİ_SAYISI": 24
                },
                {
                    "isletmeName": "AYDIN MERKEZ İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 84.12,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.51,
                    "OG_UZUN_KESİNTİ_SAYISI": 98,
                    "AG_UZUN_KESİNTİ_SAYISI": 291,
                    "OG_KISA_KESİNTİ_SAYISI": 12
                },
                {
                    "isletmeName": "BODRUM İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 97.34,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 3.48,
                    "OG_UZUN_KESİNTİ_SAYISI": 123,
                    "AG_UZUN_KESİNTİ_SAYISI": 337,
                    "OG_KISA_KESİNTİ_SAYISI": 8
                },
                {
                    "isletmeName": "ÇİNE İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 75.94,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.78,
                    "OG_UZUN_KESİNTİ_SAYISI": 24,
                    "AG_UZUN_KESİNTİ_SAYISI": 78,
                    "OG_KISA_KESİNTİ_SAYISI": 10
                },
                {
                    "isletmeName": "ÇİVRİL İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 63.57,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 1.66,
                    "OG_UZUN_KESİNTİ_SAYISI": 81,
                    "AG_UZUN_KESİNTİ_SAYISI": 102,
                    "OG_KISA_KESİNTİ_SAYISI": 20
                },
                {
                    "isletmeName": "DENİZLİ MERKEZ İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 56.1,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 1.9,
                    "OG_UZUN_KESİNTİ_SAYISI": 80,
                    "AG_UZUN_KESİNTİ_SAYISI": 368,
                    "OG_KISA_KESİNTİ_SAYISI": 12
                },
                {
                    "isletmeName": "DİDİM İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 79.61,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.74,
                    "OG_UZUN_KESİNTİ_SAYISI": 32,
                    "AG_UZUN_KESİNTİ_SAYISI": 201,
                    "OG_KISA_KESİNTİ_SAYISI": 8
                },
                {
                    "isletmeName": "FETHİYE İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 92.91,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 3.0,
                    "OG_UZUN_KESİNTİ_SAYISI": 131,
                    "AG_UZUN_KESİNTİ_SAYISI": 330,
                    "OG_KISA_KESİNTİ_SAYISI": 12
                },
                {
                    "isletmeName": "KUŞADASI İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 89.56,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.14,
                    "OG_UZUN_KESİNTİ_SAYISI": 34,
                    "AG_UZUN_KESİNTİ_SAYISI": 237,
                    "OG_KISA_KESİNTİ_SAYISI": 3
                },
                {
                    "isletmeName": "MARMARİS İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 103.49,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 3.85,
                    "OG_UZUN_KESİNTİ_SAYISI": 110,
                    "AG_UZUN_KESİNTİ_SAYISI": 192,
                    "OG_KISA_KESİNTİ_SAYISI": 8
                },
                {
                    "isletmeName": "MİLAS İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 120.32,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 3.54,
                    "OG_UZUN_KESİNTİ_SAYISI": 140,
                    "AG_UZUN_KESİNTİ_SAYISI": 302,
                    "OG_KISA_KESİNTİ_SAYISI": 18
                },
                {
                    "isletmeName": "MUĞLA MERKEZ İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 64.47,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.02,
                    "OG_UZUN_KESİNTİ_SAYISI": 114,
                    "AG_UZUN_KESİNTİ_SAYISI": 249,
                    "OG_KISA_KESİNTİ_SAYISI": 20
                },
                {
                    "isletmeName": "NAZİLLİ İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 60.05,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.26,
                    "OG_UZUN_KESİNTİ_SAYISI": 104,
                    "AG_UZUN_KESİNTİ_SAYISI": 198,
                    "OG_KISA_KESİNTİ_SAYISI": 29
                },
                {
                    "isletmeName": "ORTACA İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 92.58,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.24,
                    "OG_UZUN_KESİNTİ_SAYISI": 60,
                    "AG_UZUN_KESİNTİ_SAYISI": 160,
                    "OG_KISA_KESİNTİ_SAYISI": 22
                },
                {
                    "isletmeName": "SARAYKÖY İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 42.77,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.12,
                    "OG_UZUN_KESİNTİ_SAYISI": 29,
                    "AG_UZUN_KESİNTİ_SAYISI": 52,
                    "OG_KISA_KESİNTİ_SAYISI": 4
                },
                {
                    "isletmeName": "SÖKE İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 91.04,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.66,
                    "OG_UZUN_KESİNTİ_SAYISI": 36,
                    "AG_UZUN_KESİNTİ_SAYISI": 122,
                    "OG_KISA_KESİNTİ_SAYISI": 8
                }
            ],
            "3": [
                {
                    "isletmeName": "ACIPAYAM İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 60.85,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 1.82,
                    "OG_UZUN_KESİNTİ_SAYISI": 113,
                    "AG_UZUN_KESİNTİ_SAYISI": 162,
                    "OG_KISA_KESİNTİ_SAYISI": 50
                },
                {
                    "isletmeName": "AYDIN MERKEZ İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 77.62,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.35,
                    "OG_UZUN_KESİNTİ_SAYISI": 143,
                    "AG_UZUN_KESİNTİ_SAYISI": 291,
                    "OG_KISA_KESİNTİ_SAYISI": 27
                },
                {
                    "isletmeName": "BODRUM İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 95.24,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 3.46,
                    "OG_UZUN_KESİNTİ_SAYISI": 107,
                    "AG_UZUN_KESİNTİ_SAYISI": 334,
                    "OG_KISA_KESİNTİ_SAYISI": 4
                },
                {
                    "isletmeName": "ÇİNE İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 82.41,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.56,
                    "OG_UZUN_KESİNTİ_SAYISI": 14,
                    "AG_UZUN_KESİNTİ_SAYISI": 57,
                    "OG_KISA_KESİNTİ_SAYISI": 9
                },
                {
                    "isletmeName": "ÇİVRİL İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 56.14,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 1.68,
                    "OG_UZUN_KESİNTİ_SAYISI": 93,
                    "AG_UZUN_KESİNTİ_SAYISI": 134,
                    "OG_KISA_KESİNTİ_SAYISI": 20
                },
                {
                    "isletmeName": "DENİZLİ MERKEZ İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 53.64,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 1.71,
                    "OG_UZUN_KESİNTİ_SAYISI": 93,
                    "AG_UZUN_KESİNTİ_SAYISI": 289,
                    "OG_KISA_KESİNTİ_SAYISI": 22
                },
                {
                    "isletmeName": "DİDİM İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 79.96,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.62,
                    "OG_UZUN_KESİNTİ_SAYISI": 42,
                    "AG_UZUN_KESİNTİ_SAYISI": 166,
                    "OG_KISA_KESİNTİ_SAYISI": 9
                },
                {
                    "isletmeName": "FETHİYE İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 95.07,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 3.04,
                    "OG_UZUN_KESİNTİ_SAYISI": 144,
                    "AG_UZUN_KESİNTİ_SAYISI": 369,
                    "OG_KISA_KESİNTİ_SAYISI": 45
                },
                {
                    "isletmeName": "KUŞADASI İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 56.81,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.06,
                    "OG_UZUN_KESİNTİ_SAYISI": 18,
                    "AG_UZUN_KESİNTİ_SAYISI": 177,
                    "OG_KISA_KESİNTİ_SAYISI": 3
                },
                {
                    "isletmeName": "MARMARİS İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 136.27,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 3.87,
                    "OG_UZUN_KESİNTİ_SAYISI": 104,
                    "AG_UZUN_KESİNTİ_SAYISI": 145,
                    "OG_KISA_KESİNTİ_SAYISI": 10
                },
                {
                    "isletmeName": "MİLAS İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 87.36,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 3.13,
                    "OG_UZUN_KESİNTİ_SAYISI": 139,
                    "AG_UZUN_KESİNTİ_SAYISI": 266,
                    "OG_KISA_KESİNTİ_SAYISI": 20
                },
                {
                    "isletmeName": "MUĞLA MERKEZ İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 49.62,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.31,
                    "OG_UZUN_KESİNTİ_SAYISI": 136,
                    "AG_UZUN_KESİNTİ_SAYISI": 227,
                    "OG_KISA_KESİNTİ_SAYISI": 34
                },
                {
                    "isletmeName": "NAZİLLİ İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 50.51,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.13,
                    "OG_UZUN_KESİNTİ_SAYISI": 104,
                    "AG_UZUN_KESİNTİ_SAYISI": 175,
                    "OG_KISA_KESİNTİ_SAYISI": 53
                },
                {
                    "isletmeName": "ORTACA İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 74.93,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.68,
                    "OG_UZUN_KESİNTİ_SAYISI": 80,
                    "AG_UZUN_KESİNTİ_SAYISI": 144,
                    "OG_KISA_KESİNTİ_SAYISI": 14
                },
                {
                    "isletmeName": "SARAYKÖY İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 63.55,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 1.72,
                    "OG_UZUN_KESİNTİ_SAYISI": 33,
                    "AG_UZUN_KESİNTİ_SAYISI": 60,
                    "OG_KISA_KESİNTİ_SAYISI": 9
                },
                {
                    "isletmeName": "SÖKE İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 83.15,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 3.16,
                    "OG_UZUN_KESİNTİ_SAYISI": 32,
                    "AG_UZUN_KESİNTİ_SAYISI": 85,
                    "OG_KISA_KESİNTİ_SAYISI": 8
                }
            ],
            "4": [
                {
                    "isletmeName": "ACIPAYAM İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 125.24,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 3.29,
                    "OG_UZUN_KESİNTİ_SAYISI": 193,
                    "AG_UZUN_KESİNTİ_SAYISI": 391,
                    "OG_KISA_KESİNTİ_SAYISI": 35
                },
                {
                    "isletmeName": "AYDIN MERKEZ İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 95.21,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.84,
                    "OG_UZUN_KESİNTİ_SAYISI": 137,
                    "AG_UZUN_KESİNTİ_SAYISI": 344,
                    "OG_KISA_KESİNTİ_SAYISI": 23
                },
                {
                    "isletmeName": "BODRUM İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 98.46,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 3.28,
                    "OG_UZUN_KESİNTİ_SAYISI": 81,
                    "AG_UZUN_KESİNTİ_SAYISI": 318,
                    "OG_KISA_KESİNTİ_SAYISI": 3
                },
                {
                    "isletmeName": "ÇİNE İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 135.67,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 4.24,
                    "OG_UZUN_KESİNTİ_SAYISI": 48,
                    "AG_UZUN_KESİNTİ_SAYISI": 137,
                    "OG_KISA_KESİNTİ_SAYISI": 5
                },
                {
                    "isletmeName": "ÇİVRİL İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 85.28,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 1.99,
                    "OG_UZUN_KESİNTİ_SAYISI": 123,
                    "AG_UZUN_KESİNTİ_SAYISI": 165,
                    "OG_KISA_KESİNTİ_SAYISI": 17
                },
                {
                    "isletmeName": "DENİZLİ MERKEZ İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 64.78,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.04,
                    "OG_UZUN_KESİNTİ_SAYISI": 145,
                    "AG_UZUN_KESİNTİ_SAYISI": 343,
                    "OG_KISA_KESİNTİ_SAYISI": 24
                },
                {
                    "isletmeName": "DİDİM İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 76.07,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.76,
                    "OG_UZUN_KESİNTİ_SAYISI": 35,
                    "AG_UZUN_KESİNTİ_SAYISI": 233,
                    "OG_KISA_KESİNTİ_SAYISI": 10
                },
                {
                    "isletmeName": "FETHİYE İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 96.84,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 3.57,
                    "OG_UZUN_KESİNTİ_SAYISI": 195,
                    "AG_UZUN_KESİNTİ_SAYISI": 544,
                    "OG_KISA_KESİNTİ_SAYISI": 29
                },
                {
                    "isletmeName": "KUŞADASI İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 98.11,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.48,
                    "OG_UZUN_KESİNTİ_SAYISI": 42,
                    "AG_UZUN_KESİNTİ_SAYISI": 201,
                    "OG_KISA_KESİNTİ_SAYISI": 1
                },
                {
                    "isletmeName": "MARMARİS İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 95.27,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 3.8,
                    "OG_UZUN_KESİNTİ_SAYISI": 78,
                    "AG_UZUN_KESİNTİ_SAYISI": 174,
                    "OG_KISA_KESİNTİ_SAYISI": 12
                },
                {
                    "isletmeName": "MİLAS İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 105.03,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 3.56,
                    "OG_UZUN_KESİNTİ_SAYISI": 172,
                    "AG_UZUN_KESİNTİ_SAYISI": 343,
                    "OG_KISA_KESİNTİ_SAYISI": 20
                },
                {
                    "isletmeName": "MUĞLA MERKEZ İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 79.07,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 3.38,
                    "OG_UZUN_KESİNTİ_SAYISI": 182,
                    "AG_UZUN_KESİNTİ_SAYISI": 453,
                    "OG_KISA_KESİNTİ_SAYISI": 20
                },
                {
                    "isletmeName": "NAZİLLİ İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 99.47,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 3.49,
                    "OG_UZUN_KESİNTİ_SAYISI": 152,
                    "AG_UZUN_KESİNTİ_SAYISI": 355,
                    "OG_KISA_KESİNTİ_SAYISI": 38
                },
                {
                    "isletmeName": "ORTACA İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 106.21,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 3.9,
                    "OG_UZUN_KESİNTİ_SAYISI": 79,
                    "AG_UZUN_KESİNTİ_SAYISI": 211,
                    "OG_KISA_KESİNTİ_SAYISI": 13
                },
                {
                    "isletmeName": "SARAYKÖY İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 67.9,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.06,
                    "OG_UZUN_KESİNTİ_SAYISI": 34,
                    "AG_UZUN_KESİNTİ_SAYISI": 57,
                    "OG_KISA_KESİNTİ_SAYISI": 5
                },
                {
                    "isletmeName": "SÖKE İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 119.37,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.78,
                    "OG_UZUN_KESİNTİ_SAYISI": 43,
                    "AG_UZUN_KESİNTİ_SAYISI": 108,
                    "OG_KISA_KESİNTİ_SAYISI": 17
                }
            ],
            "5": [
                {
                    "isletmeName": "ACIPAYAM İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 49.88,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 1.99,
                    "OG_UZUN_KESİNTİ_SAYISI": 241,
                    "AG_UZUN_KESİNTİ_SAYISI": 190,
                    "OG_KISA_KESİNTİ_SAYISI": 94
                },
                {
                    "isletmeName": "AYDIN MERKEZ İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 58.58,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.39,
                    "OG_UZUN_KESİNTİ_SAYISI": 159,
                    "AG_UZUN_KESİNTİ_SAYISI": 333,
                    "OG_KISA_KESİNTİ_SAYISI": 57
                },
                {
                    "isletmeName": "BODRUM İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 75.15,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 3.45,
                    "OG_UZUN_KESİNTİ_SAYISI": 128,
                    "AG_UZUN_KESİNTİ_SAYISI": 247,
                    "OG_KISA_KESİNTİ_SAYISI": 10
                },
                {
                    "isletmeName": "ÇİNE İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 73.01,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 3.56,
                    "OG_UZUN_KESİNTİ_SAYISI": 44,
                    "AG_UZUN_KESİNTİ_SAYISI": 79,
                    "OG_KISA_KESİNTİ_SAYISI": 36
                },
                {
                    "isletmeName": "ÇİVRİL İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 51.67,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 1.8,
                    "OG_UZUN_KESİNTİ_SAYISI": 130,
                    "AG_UZUN_KESİNTİ_SAYISI": 204,
                    "OG_KISA_KESİNTİ_SAYISI": 37
                },
                {
                    "isletmeName": "DENİZLİ MERKEZ İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 46.77,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 1.78,
                    "OG_UZUN_KESİNTİ_SAYISI": 141,
                    "AG_UZUN_KESİNTİ_SAYISI": 353,
                    "OG_KISA_KESİNTİ_SAYISI": 70
                },
                {
                    "isletmeName": "DİDİM İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 80.74,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.73,
                    "OG_UZUN_KESİNTİ_SAYISI": 40,
                    "AG_UZUN_KESİNTİ_SAYISI": 195,
                    "OG_KISA_KESİNTİ_SAYISI": 24
                },
                {
                    "isletmeName": "FETHİYE İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 54.38,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 3.09,
                    "OG_UZUN_KESİNTİ_SAYISI": 152,
                    "AG_UZUN_KESİNTİ_SAYISI": 423,
                    "OG_KISA_KESİNTİ_SAYISI": 52
                },
                {
                    "isletmeName": "KUŞADASI İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 54.34,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.31,
                    "OG_UZUN_KESİNTİ_SAYISI": 28,
                    "AG_UZUN_KESİNTİ_SAYISI": 207,
                    "OG_KISA_KESİNTİ_SAYISI": 1
                },
                {
                    "isletmeName": "MARMARİS İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 84.1,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 3.49,
                    "OG_UZUN_KESİNTİ_SAYISI": 67,
                    "AG_UZUN_KESİNTİ_SAYISI": 104,
                    "OG_KISA_KESİNTİ_SAYISI": 16
                },
                {
                    "isletmeName": "MİLAS İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 80.11,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 3.59,
                    "OG_UZUN_KESİNTİ_SAYISI": 194,
                    "AG_UZUN_KESİNTİ_SAYISI": 219,
                    "OG_KISA_KESİNTİ_SAYISI": 35
                },
                {
                    "isletmeName": "MUĞLA MERKEZ İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 50.71,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.36,
                    "OG_UZUN_KESİNTİ_SAYISI": 151,
                    "AG_UZUN_KESİNTİ_SAYISI": 276,
                    "OG_KISA_KESİNTİ_SAYISI": 46
                },
                {
                    "isletmeName": "NAZİLLİ İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 45.03,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.16,
                    "OG_UZUN_KESİNTİ_SAYISI": 157,
                    "AG_UZUN_KESİNTİ_SAYISI": 269,
                    "OG_KISA_KESİNTİ_SAYISI": 91
                },
                {
                    "isletmeName": "ORTACA İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 63.59,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.33,
                    "OG_UZUN_KESİNTİ_SAYISI": 97,
                    "AG_UZUN_KESİNTİ_SAYISI": 120,
                    "OG_KISA_KESİNTİ_SAYISI": 33
                },
                {
                    "isletmeName": "SARAYKÖY İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 51.24,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.11,
                    "OG_UZUN_KESİNTİ_SAYISI": 72,
                    "AG_UZUN_KESİNTİ_SAYISI": 75,
                    "OG_KISA_KESİNTİ_SAYISI": 17
                },
                {
                    "isletmeName": "SÖKE İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 75.92,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.61,
                    "OG_UZUN_KESİNTİ_SAYISI": 47,
                    "AG_UZUN_KESİNTİ_SAYISI": 136,
                    "OG_KISA_KESİNTİ_SAYISI": 26
                }
            ],
            "7": [
                {
                    "isletmeName": "ACIPAYAM İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 55.07,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.18,
                    "OG_UZUN_KESİNTİ_SAYISI": 505,
                    "AG_UZUN_KESİNTİ_SAYISI": 376,
                    "OG_KISA_KESİNTİ_SAYISI": 102
                },
                {
                    "isletmeName": "AYDIN MERKEZ İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 69.09,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.07,
                    "OG_UZUN_KESİNTİ_SAYISI": 286,
                    "AG_UZUN_KESİNTİ_SAYISI": 1121,
                    "OG_KISA_KESİNTİ_SAYISI": 45
                },
                {
                    "isletmeName": "BODRUM İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 123.16,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 3.23,
                    "OG_UZUN_KESİNTİ_SAYISI": 205,
                    "AG_UZUN_KESİNTİ_SAYISI": 571,
                    "OG_KISA_KESİNTİ_SAYISI": 8
                },
                {
                    "isletmeName": "ÇİNE İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 65.62,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.89,
                    "OG_UZUN_KESİNTİ_SAYISI": 90,
                    "AG_UZUN_KESİNTİ_SAYISI": 201,
                    "OG_KISA_KESİNTİ_SAYISI": 36
                },
                {
                    "isletmeName": "ÇİVRİL İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 47.88,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 1.75,
                    "OG_UZUN_KESİNTİ_SAYISI": 422,
                    "AG_UZUN_KESİNTİ_SAYISI": 309,
                    "OG_KISA_KESİNTİ_SAYISI": 90
                },
                {
                    "isletmeName": "DENİZLİ MERKEZ İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 82.58,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.27,
                    "OG_UZUN_KESİNTİ_SAYISI": 237,
                    "AG_UZUN_KESİNTİ_SAYISI": 877,
                    "OG_KISA_KESİNTİ_SAYISI": 45
                },
                {
                    "isletmeName": "DİDİM İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 85.74,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.45,
                    "OG_UZUN_KESİNTİ_SAYISI": 85,
                    "AG_UZUN_KESİNTİ_SAYISI": 427,
                    "OG_KISA_KESİNTİ_SAYISI": 18
                },
                {
                    "isletmeName": "FETHİYE İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 77.57,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.8,
                    "OG_UZUN_KESİNTİ_SAYISI": 293,
                    "AG_UZUN_KESİNTİ_SAYISI": 1129,
                    "OG_KISA_KESİNTİ_SAYISI": 33
                },
                {
                    "isletmeName": "KUŞADASI İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 94.41,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.27,
                    "OG_UZUN_KESİNTİ_SAYISI": 90,
                    "AG_UZUN_KESİNTİ_SAYISI": 433,
                    "OG_KISA_KESİNTİ_SAYISI": 7
                },
                {
                    "isletmeName": "MARMARİS İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 89.13,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.91,
                    "OG_UZUN_KESİNTİ_SAYISI": 132,
                    "AG_UZUN_KESİNTİ_SAYISI": 288,
                    "OG_KISA_KESİNTİ_SAYISI": 4
                },
                {
                    "isletmeName": "MİLAS İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 78.85,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 3.12,
                    "OG_UZUN_KESİNTİ_SAYISI": 249,
                    "AG_UZUN_KESİNTİ_SAYISI": 532,
                    "OG_KISA_KESİNTİ_SAYISI": 25
                },
                {
                    "isletmeName": "MUĞLA MERKEZ İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 85.63,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.71,
                    "OG_UZUN_KESİNTİ_SAYISI": 327,
                    "AG_UZUN_KESİNTİ_SAYISI": 447,
                    "OG_KISA_KESİNTİ_SAYISI": 18
                },
                {
                    "isletmeName": "NAZİLLİ İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 50.79,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 1.94,
                    "OG_UZUN_KESİNTİ_SAYISI": 354,
                    "AG_UZUN_KESİNTİ_SAYISI": 740,
                    "OG_KISA_KESİNTİ_SAYISI": 68
                },
                {
                    "isletmeName": "ORTACA İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 65.75,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.29,
                    "OG_UZUN_KESİNTİ_SAYISI": 146,
                    "AG_UZUN_KESİNTİ_SAYISI": 438,
                    "OG_KISA_KESİNTİ_SAYISI": 12
                },
                {
                    "isletmeName": "SARAYKÖY İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 67.25,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 1.84,
                    "OG_UZUN_KESİNTİ_SAYISI": 98,
                    "AG_UZUN_KESİNTİ_SAYISI": 163,
                    "OG_KISA_KESİNTİ_SAYISI": 20
                },
                {
                    "isletmeName": "SÖKE İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 63.87,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.64,
                    "OG_UZUN_KESİNTİ_SAYISI": 82,
                    "AG_UZUN_KESİNTİ_SAYISI": 218,
                    "OG_KISA_KESİNTİ_SAYISI": 32
                }
            ],
            "9": [
                {
                    "isletmeName": "ACIPAYAM İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 62.42,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.22,
                    "OG_UZUN_KESİNTİ_SAYISI": 275,
                    "AG_UZUN_KESİNTİ_SAYISI": 178,
                    "OG_KISA_KESİNTİ_SAYISI": 123
                },
                {
                    "isletmeName": "AYDIN MERKEZ İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 86.45,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.55,
                    "OG_UZUN_KESİNTİ_SAYISI": 172,
                    "AG_UZUN_KESİNTİ_SAYISI": 289,
                    "OG_KISA_KESİNTİ_SAYISI": 40
                },
                {
                    "isletmeName": "BODRUM İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 82.79,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 3.02,
                    "OG_UZUN_KESİNTİ_SAYISI": 70,
                    "AG_UZUN_KESİNTİ_SAYISI": 189,
                    "OG_KISA_KESİNTİ_SAYISI": 2
                },
                {
                    "isletmeName": "ÇİNE İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 95.67,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 3.95,
                    "OG_UZUN_KESİNTİ_SAYISI": 47,
                    "AG_UZUN_KESİNTİ_SAYISI": 71,
                    "OG_KISA_KESİNTİ_SAYISI": 28
                },
                {
                    "isletmeName": "ÇİVRİL İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 46.76,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 1.6,
                    "OG_UZUN_KESİNTİ_SAYISI": 167,
                    "AG_UZUN_KESİNTİ_SAYISI": 107,
                    "OG_KISA_KESİNTİ_SAYISI": 111
                },
                {
                    "isletmeName": "DENİZLİ MERKEZ İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 44.5,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.13,
                    "OG_UZUN_KESİNTİ_SAYISI": 110,
                    "AG_UZUN_KESİNTİ_SAYISI": 273,
                    "OG_KISA_KESİNTİ_SAYISI": 37
                },
                {
                    "isletmeName": "DİDİM İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 65.88,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.3,
                    "OG_UZUN_KESİNTİ_SAYISI": 57,
                    "AG_UZUN_KESİNTİ_SAYISI": 140,
                    "OG_KISA_KESİNTİ_SAYISI": 19
                },
                {
                    "isletmeName": "FETHİYE İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 56.54,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 3.21,
                    "OG_UZUN_KESİNTİ_SAYISI": 151,
                    "AG_UZUN_KESİNTİ_SAYISI": 312,
                    "OG_KISA_KESİNTİ_SAYISI": 51
                },
                {
                    "isletmeName": "KUŞADASI İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 89.81,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.21,
                    "OG_UZUN_KESİNTİ_SAYISI": 49,
                    "AG_UZUN_KESİNTİ_SAYISI": 191,
                    "OG_KISA_KESİNTİ_SAYISI": 7
                },
                {
                    "isletmeName": "MARMARİS İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 73.65,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.43,
                    "OG_UZUN_KESİNTİ_SAYISI": 99,
                    "AG_UZUN_KESİNTİ_SAYISI": 97,
                    "OG_KISA_KESİNTİ_SAYISI": 11
                },
                {
                    "isletmeName": "MİLAS İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 47.98,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 3.27,
                    "OG_UZUN_KESİNTİ_SAYISI": 151,
                    "AG_UZUN_KESİNTİ_SAYISI": 225,
                    "OG_KISA_KESİNTİ_SAYISI": 39
                },
                {
                    "isletmeName": "MUĞLA MERKEZ İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 81.43,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.72,
                    "OG_UZUN_KESİNTİ_SAYISI": 236,
                    "AG_UZUN_KESİNTİ_SAYISI": 217,
                    "OG_KISA_KESİNTİ_SAYISI": 37
                },
                {
                    "isletmeName": "NAZİLLİ İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 45.96,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.36,
                    "OG_UZUN_KESİNTİ_SAYISI": 165,
                    "AG_UZUN_KESİNTİ_SAYISI": 274,
                    "OG_KISA_KESİNTİ_SAYISI": 75
                },
                {
                    "isletmeName": "ORTACA İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 61.31,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.76,
                    "OG_UZUN_KESİNTİ_SAYISI": 122,
                    "AG_UZUN_KESİNTİ_SAYISI": 149,
                    "OG_KISA_KESİNTİ_SAYISI": 38
                },
                {
                    "isletmeName": "SARAYKÖY İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 47.15,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 1.76,
                    "OG_UZUN_KESİNTİ_SAYISI": 57,
                    "AG_UZUN_KESİNTİ_SAYISI": 85,
                    "OG_KISA_KESİNTİ_SAYISI": 18
                },
                {
                    "isletmeName": "SÖKE İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 95.27,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.6,
                    "OG_UZUN_KESİNTİ_SAYISI": 78,
                    "AG_UZUN_KESİNTİ_SAYISI": 106,
                    "OG_KISA_KESİNTİ_SAYISI": 33
                }
            ],
            "10": [
                {
                    "isletmeName": "ACIPAYAM İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 47.73,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 1.87,
                    "OG_UZUN_KESİNTİ_SAYISI": 217,
                    "AG_UZUN_KESİNTİ_SAYISI": 137,
                    "OG_KISA_KESİNTİ_SAYISI": 75
                },
                {
                    "isletmeName": "AYDIN MERKEZ İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 68.74,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.39,
                    "OG_UZUN_KESİNTİ_SAYISI": 132,
                    "AG_UZUN_KESİNTİ_SAYISI": 213,
                    "OG_KISA_KESİNTİ_SAYISI": 20
                },
                {
                    "isletmeName": "BODRUM İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 61.48,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 3.22,
                    "OG_UZUN_KESİNTİ_SAYISI": 74,
                    "AG_UZUN_KESİNTİ_SAYISI": 157,
                    "OG_KISA_KESİNTİ_SAYISI": 1
                },
                {
                    "isletmeName": "ÇİNE İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 67.17,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 3.03,
                    "OG_UZUN_KESİNTİ_SAYISI": 23,
                    "AG_UZUN_KESİNTİ_SAYISI": 49,
                    "OG_KISA_KESİNTİ_SAYISI": 13
                },
                {
                    "isletmeName": "ÇİVRİL İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 47.28,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 1.59,
                    "OG_UZUN_KESİNTİ_SAYISI": 160,
                    "AG_UZUN_KESİNTİ_SAYISI": 112,
                    "OG_KISA_KESİNTİ_SAYISI": 88
                },
                {
                    "isletmeName": "DENİZLİ MERKEZ İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 45.91,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 1.8,
                    "OG_UZUN_KESİNTİ_SAYISI": 110,
                    "AG_UZUN_KESİNTİ_SAYISI": 210,
                    "OG_KISA_KESİNTİ_SAYISI": 32
                },
                {
                    "isletmeName": "DİDİM İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 60.92,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.38,
                    "OG_UZUN_KESİNTİ_SAYISI": 42,
                    "AG_UZUN_KESİNTİ_SAYISI": 123,
                    "OG_KISA_KESİNTİ_SAYISI": 17
                },
                {
                    "isletmeName": "FETHİYE İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 53.52,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.96,
                    "OG_UZUN_KESİNTİ_SAYISI": 162,
                    "AG_UZUN_KESİNTİ_SAYISI": 233,
                    "OG_KISA_KESİNTİ_SAYISI": 29
                },
                {
                    "isletmeName": "KUŞADASI İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 101.0,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.52,
                    "OG_UZUN_KESİNTİ_SAYISI": 28,
                    "AG_UZUN_KESİNTİ_SAYISI": 122,
                    "OG_KISA_KESİNTİ_SAYISI": 3
                },
                {
                    "isletmeName": "MARMARİS İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 61.1,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.6,
                    "OG_UZUN_KESİNTİ_SAYISI": 90,
                    "AG_UZUN_KESİNTİ_SAYISI": 69,
                    "OG_KISA_KESİNTİ_SAYISI": 15
                },
                {
                    "isletmeName": "MİLAS İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 55.44,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 3.44,
                    "OG_UZUN_KESİNTİ_SAYISI": 151,
                    "AG_UZUN_KESİNTİ_SAYISI": 151,
                    "OG_KISA_KESİNTİ_SAYISI": 14
                },
                {
                    "isletmeName": "MUĞLA MERKEZ İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 50.38,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.18,
                    "OG_UZUN_KESİNTİ_SAYISI": 120,
                    "AG_UZUN_KESİNTİ_SAYISI": 187,
                    "OG_KISA_KESİNTİ_SAYISI": 19
                },
                {
                    "isletmeName": "NAZİLLİ İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 42.92,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.12,
                    "OG_UZUN_KESİNTİ_SAYISI": 115,
                    "AG_UZUN_KESİNTİ_SAYISI": 154,
                    "OG_KISA_KESİNTİ_SAYISI": 42
                },
                {
                    "isletmeName": "ORTACA İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 56.7,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.38,
                    "OG_UZUN_KESİNTİ_SAYISI": 95,
                    "AG_UZUN_KESİNTİ_SAYISI": 106,
                    "OG_KISA_KESİNTİ_SAYISI": 18
                },
                {
                    "isletmeName": "SARAYKÖY İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 66.74,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 1.92,
                    "OG_UZUN_KESİNTİ_SAYISI": 43,
                    "AG_UZUN_KESİNTİ_SAYISI": 55,
                    "OG_KISA_KESİNTİ_SAYISI": 7
                },
                {
                    "isletmeName": "SÖKE İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 130.33,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.68,
                    "OG_UZUN_KESİNTİ_SAYISI": 52,
                    "AG_UZUN_KESİNTİ_SAYISI": 87,
                    "OG_KISA_KESİNTİ_SAYISI": 8
                }
            ],
            "11": [
                {
                    "isletmeName": "ACIPAYAM İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 49.46,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.4,
                    "OG_UZUN_KESİNTİ_SAYISI": 252,
                    "AG_UZUN_KESİNTİ_SAYISI": 330,
                    "OG_KISA_KESİNTİ_SAYISI": 20
                },
                {
                    "isletmeName": "AYDIN MERKEZ İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 88.45,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.6,
                    "OG_UZUN_KESİNTİ_SAYISI": 206,
                    "AG_UZUN_KESİNTİ_SAYISI": 438,
                    "OG_KISA_KESİNTİ_SAYISI": 12
                },
                {
                    "isletmeName": "BODRUM İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 118.14,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 4.0,
                    "OG_UZUN_KESİNTİ_SAYISI": 149,
                    "AG_UZUN_KESİNTİ_SAYISI": 398,
                    "OG_KISA_KESİNTİ_SAYISI": 4
                },
                {
                    "isletmeName": "ÇİNE İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 75.89,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 3.23,
                    "OG_UZUN_KESİNTİ_SAYISI": 36,
                    "AG_UZUN_KESİNTİ_SAYISI": 81,
                    "OG_KISA_KESİNTİ_SAYISI": 6
                },
                {
                    "isletmeName": "ÇİVRİL İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 51.57,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 1.75,
                    "OG_UZUN_KESİNTİ_SAYISI": 120,
                    "AG_UZUN_KESİNTİ_SAYISI": 222,
                    "OG_KISA_KESİNTİ_SAYISI": 29
                },
                {
                    "isletmeName": "DENİZLİ MERKEZ İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 57.13,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.17,
                    "OG_UZUN_KESİNTİ_SAYISI": 126,
                    "AG_UZUN_KESİNTİ_SAYISI": 465,
                    "OG_KISA_KESİNTİ_SAYISI": 15
                },
                {
                    "isletmeName": "DİDİM İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 69.14,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.55,
                    "OG_UZUN_KESİNTİ_SAYISI": 87,
                    "AG_UZUN_KESİNTİ_SAYISI": 271,
                    "OG_KISA_KESİNTİ_SAYISI": 11
                },
                {
                    "isletmeName": "FETHİYE İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 92.78,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 4.08,
                    "OG_UZUN_KESİNTİ_SAYISI": 241,
                    "AG_UZUN_KESİNTİ_SAYISI": 654,
                    "OG_KISA_KESİNTİ_SAYISI": 31
                },
                {
                    "isletmeName": "KUŞADASI İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 89.64,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.38,
                    "OG_UZUN_KESİNTİ_SAYISI": 45,
                    "AG_UZUN_KESİNTİ_SAYISI": 256,
                    "OG_KISA_KESİNTİ_SAYISI": 1
                },
                {
                    "isletmeName": "MARMARİS İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 79.12,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 3.2,
                    "OG_UZUN_KESİNTİ_SAYISI": 114,
                    "AG_UZUN_KESİNTİ_SAYISI": 144,
                    "OG_KISA_KESİNTİ_SAYISI": 6
                },
                {
                    "isletmeName": "MİLAS İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 78.76,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 3.46,
                    "OG_UZUN_KESİNTİ_SAYISI": 223,
                    "AG_UZUN_KESİNTİ_SAYISI": 384,
                    "OG_KISA_KESİNTİ_SAYISI": 9
                },
                {
                    "isletmeName": "MUĞLA MERKEZ İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 88.8,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 3.15,
                    "OG_UZUN_KESİNTİ_SAYISI": 222,
                    "AG_UZUN_KESİNTİ_SAYISI": 495,
                    "OG_KISA_KESİNTİ_SAYISI": 9
                },
                {
                    "isletmeName": "NAZİLLİ İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 49.39,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.56,
                    "OG_UZUN_KESİNTİ_SAYISI": 154,
                    "AG_UZUN_KESİNTİ_SAYISI": 380,
                    "OG_KISA_KESİNTİ_SAYISI": 16
                },
                {
                    "isletmeName": "ORTACA İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 65.53,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.91,
                    "OG_UZUN_KESİNTİ_SAYISI": 177,
                    "AG_UZUN_KESİNTİ_SAYISI": 242,
                    "OG_KISA_KESİNTİ_SAYISI": 27
                },
                {
                    "isletmeName": "SARAYKÖY İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 71.49,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.35,
                    "OG_UZUN_KESİNTİ_SAYISI": 40,
                    "AG_UZUN_KESİNTİ_SAYISI": 141,
                    "OG_KISA_KESİNTİ_SAYISI": 6
                },
                {
                    "isletmeName": "SÖKE İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 148.03,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.86,
                    "OG_UZUN_KESİNTİ_SAYISI": 67,
                    "AG_UZUN_KESİNTİ_SAYISI": 195,
                    "OG_KISA_KESİNTİ_SAYISI": 11
                }
            ],
            "12": [
                {
                    "isletmeName": "ACIPAYAM İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 71.28,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 1.77,
                    "OG_UZUN_KESİNTİ_SAYISI": 155,
                    "AG_UZUN_KESİNTİ_SAYISI": 237,
                    "OG_KISA_KESİNTİ_SAYISI": 24
                },
                {
                    "isletmeName": "AYDIN MERKEZ İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 103.27,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.34,
                    "OG_UZUN_KESİNTİ_SAYISI": 113,
                    "AG_UZUN_KESİNTİ_SAYISI": 420,
                    "OG_KISA_KESİNTİ_SAYISI": 5
                },
                {
                    "isletmeName": "BODRUM İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 113.25,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 3.82,
                    "OG_UZUN_KESİNTİ_SAYISI": 166,
                    "AG_UZUN_KESİNTİ_SAYISI": 527,
                    "OG_KISA_KESİNTİ_SAYISI": 3
                },
                {
                    "isletmeName": "ÇİNE İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 147.49,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.58,
                    "OG_UZUN_KESİNTİ_SAYISI": 19,
                    "AG_UZUN_KESİNTİ_SAYISI": 50,
                    "OG_KISA_KESİNTİ_SAYISI": 1
                },
                {
                    "isletmeName": "ÇİVRİL İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 70.1,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 1.39,
                    "OG_UZUN_KESİNTİ_SAYISI": 83,
                    "AG_UZUN_KESİNTİ_SAYISI": 163,
                    "OG_KISA_KESİNTİ_SAYISI": 13
                },
                {
                    "isletmeName": "DENİZLİ MERKEZ İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 67.0,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 1.86,
                    "OG_UZUN_KESİNTİ_SAYISI": 84,
                    "AG_UZUN_KESİNTİ_SAYISI": 426,
                    "OG_KISA_KESİNTİ_SAYISI": 4
                },
                {
                    "isletmeName": "DİDİM İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 82.68,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.59,
                    "OG_UZUN_KESİNTİ_SAYISI": 53,
                    "AG_UZUN_KESİNTİ_SAYISI": 278,
                    "OG_KISA_KESİNTİ_SAYISI": 6
                },
                {
                    "isletmeName": "FETHİYE İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 120.54,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 3.0,
                    "OG_UZUN_KESİNTİ_SAYISI": 170,
                    "AG_UZUN_KESİNTİ_SAYISI": 643,
                    "OG_KISA_KESİNTİ_SAYISI": 12
                },
                {
                    "isletmeName": "KUŞADASI İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 94.76,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.18,
                    "OG_UZUN_KESİNTİ_SAYISI": 37,
                    "AG_UZUN_KESİNTİ_SAYISI": 288,
                    "OG_KISA_KESİNTİ_SAYISI": 1
                },
                {
                    "isletmeName": "MARMARİS İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 111.71,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 3.02,
                    "OG_UZUN_KESİNTİ_SAYISI": 108,
                    "AG_UZUN_KESİNTİ_SAYISI": 257,
                    "OG_KISA_KESİNTİ_SAYISI": 2
                },
                {
                    "isletmeName": "MİLAS İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 117.13,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 3.35,
                    "OG_UZUN_KESİNTİ_SAYISI": 138,
                    "AG_UZUN_KESİNTİ_SAYISI": 460,
                    "OG_KISA_KESİNTİ_SAYISI": 5
                },
                {
                    "isletmeName": "MUĞLA MERKEZ İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 104.53,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.88,
                    "OG_UZUN_KESİNTİ_SAYISI": 157,
                    "AG_UZUN_KESİNTİ_SAYISI": 424,
                    "OG_KISA_KESİNTİ_SAYISI": 5
                },
                {
                    "isletmeName": "NAZİLLİ İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 71.06,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.21,
                    "OG_UZUN_KESİNTİ_SAYISI": 98,
                    "AG_UZUN_KESİNTİ_SAYISI": 305,
                    "OG_KISA_KESİNTİ_SAYISI": 12
                },
                {
                    "isletmeName": "ORTACA İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 110.06,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.72,
                    "OG_UZUN_KESİNTİ_SAYISI": 138,
                    "AG_UZUN_KESİNTİ_SAYISI": 276,
                    "OG_KISA_KESİNTİ_SAYISI": 7
                },
                {
                    "isletmeName": "SARAYKÖY İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 107.59,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 1.94,
                    "OG_UZUN_KESİNTİ_SAYISI": 31,
                    "AG_UZUN_KESİNTİ_SAYISI": 98,
                    "OG_KISA_KESİNTİ_SAYISI": 3
                },
                {
                    "isletmeName": "SÖKE İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 118.0,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.16,
                    "OG_UZUN_KESİNTİ_SAYISI": 50,
                    "AG_UZUN_KESİNTİ_SAYISI": 181,
                    "OG_KISA_KESİNTİ_SAYISI": 6
                }
            ],
            "6": [
                {
                    "isletmeName": "ACIPAYAM İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 57.92,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 1.98,
                    "OG_UZUN_KESİNTİ_SAYISI": 390,
                    "AG_UZUN_KESİNTİ_SAYISI": 357,
                    "OG_KISA_KESİNTİ_SAYISI": 83
                },
                {
                    "isletmeName": "AYDIN MERKEZ İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 65.6,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.25,
                    "OG_UZUN_KESİNTİ_SAYISI": 277,
                    "AG_UZUN_KESİNTİ_SAYISI": 869,
                    "OG_KISA_KESİNTİ_SAYISI": 64
                },
                {
                    "isletmeName": "BODRUM İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 82.54,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 3.21,
                    "OG_UZUN_KESİNTİ_SAYISI": 112,
                    "AG_UZUN_KESİNTİ_SAYISI": 297,
                    "OG_KISA_KESİNTİ_SAYISI": 7
                },
                {
                    "isletmeName": "ÇİNE İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 37.9,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.9,
                    "OG_UZUN_KESİNTİ_SAYISI": 72,
                    "AG_UZUN_KESİNTİ_SAYISI": 219,
                    "OG_KISA_KESİNTİ_SAYISI": 49
                },
                {
                    "isletmeName": "ÇİVRİL İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 57.36,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 1.71,
                    "OG_UZUN_KESİNTİ_SAYISI": 295,
                    "AG_UZUN_KESİNTİ_SAYISI": 336,
                    "OG_KISA_KESİNTİ_SAYISI": 93
                },
                {
                    "isletmeName": "DENİZLİ MERKEZ İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 70.31,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 1.78,
                    "OG_UZUN_KESİNTİ_SAYISI": 183,
                    "AG_UZUN_KESİNTİ_SAYISI": 702,
                    "OG_KISA_KESİNTİ_SAYISI": 51
                },
                {
                    "isletmeName": "DİDİM İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 75.89,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.5,
                    "OG_UZUN_KESİNTİ_SAYISI": 118,
                    "AG_UZUN_KESİNTİ_SAYISI": 323,
                    "OG_KISA_KESİNTİ_SAYISI": 55
                },
                {
                    "isletmeName": "FETHİYE İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 70.7,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.97,
                    "OG_UZUN_KESİNTİ_SAYISI": 268,
                    "AG_UZUN_KESİNTİ_SAYISI": 565,
                    "OG_KISA_KESİNTİ_SAYISI": 38
                },
                {
                    "isletmeName": "KUŞADASI İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 81.09,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.36,
                    "OG_UZUN_KESİNTİ_SAYISI": 59,
                    "AG_UZUN_KESİNTİ_SAYISI": 298,
                    "OG_KISA_KESİNTİ_SAYISI": 8
                },
                {
                    "isletmeName": "MARMARİS İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 73.95,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 3.24,
                    "OG_UZUN_KESİNTİ_SAYISI": 112,
                    "AG_UZUN_KESİNTİ_SAYISI": 177,
                    "OG_KISA_KESİNTİ_SAYISI": 5
                },
                {
                    "isletmeName": "MİLAS İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 70.88,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 3.18,
                    "OG_UZUN_KESİNTİ_SAYISI": 198,
                    "AG_UZUN_KESİNTİ_SAYISI": 334,
                    "OG_KISA_KESİNTİ_SAYISI": 21
                },
                {
                    "isletmeName": "MUĞLA MERKEZ İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 52.91,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.56,
                    "OG_UZUN_KESİNTİ_SAYISI": 232,
                    "AG_UZUN_KESİNTİ_SAYISI": 326,
                    "OG_KISA_KESİNTİ_SAYISI": 30
                },
                {
                    "isletmeName": "NAZİLLİ İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 50.25,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.0,
                    "OG_UZUN_KESİNTİ_SAYISI": 245,
                    "AG_UZUN_KESİNTİ_SAYISI": 673,
                    "OG_KISA_KESİNTİ_SAYISI": 121
                },
                {
                    "isletmeName": "ORTACA İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 64.09,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.33,
                    "OG_UZUN_KESİNTİ_SAYISI": 172,
                    "AG_UZUN_KESİNTİ_SAYISI": 280,
                    "OG_KISA_KESİNTİ_SAYISI": 26
                },
                {
                    "isletmeName": "SARAYKÖY İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 56.68,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 1.97,
                    "OG_UZUN_KESİNTİ_SAYISI": 82,
                    "AG_UZUN_KESİNTİ_SAYISI": 144,
                    "OG_KISA_KESİNTİ_SAYISI": 16
                },
                {
                    "isletmeName": "SÖKE İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 77.47,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.97,
                    "OG_UZUN_KESİNTİ_SAYISI": 103,
                    "AG_UZUN_KESİNTİ_SAYISI": 153,
                    "OG_KISA_KESİNTİ_SAYISI": 30
                }
            ],
            "8": [
                {
                    "isletmeName": "ACIPAYAM İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 58.21,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 1.91,
                    "OG_UZUN_KESİNTİ_SAYISI": 328,
                    "AG_UZUN_KESİNTİ_SAYISI": 249,
                    "OG_KISA_KESİNTİ_SAYISI": 92
                },
                {
                    "isletmeName": "AYDIN MERKEZ İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 68.58,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.23,
                    "OG_UZUN_KESİNTİ_SAYISI": 186,
                    "AG_UZUN_KESİNTİ_SAYISI": 415,
                    "OG_KISA_KESİNTİ_SAYISI": 47
                },
                {
                    "isletmeName": "BODRUM İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 82.07,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.83,
                    "OG_UZUN_KESİNTİ_SAYISI": 123,
                    "AG_UZUN_KESİNTİ_SAYISI": 267,
                    "OG_KISA_KESİNTİ_SAYISI": 8
                },
                {
                    "isletmeName": "ÇİNE İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 89.62,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 3.04,
                    "OG_UZUN_KESİNTİ_SAYISI": 45,
                    "AG_UZUN_KESİNTİ_SAYISI": 113,
                    "OG_KISA_KESİNTİ_SAYISI": 23
                },
                {
                    "isletmeName": "ÇİVRİL İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 47.77,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 1.56,
                    "OG_UZUN_KESİNTİ_SAYISI": 289,
                    "AG_UZUN_KESİNTİ_SAYISI": 198,
                    "OG_KISA_KESİNTİ_SAYISI": 136
                },
                {
                    "isletmeName": "DENİZLİ MERKEZ İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 54.05,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 1.74,
                    "OG_UZUN_KESİNTİ_SAYISI": 133,
                    "AG_UZUN_KESİNTİ_SAYISI": 401,
                    "OG_KISA_KESİNTİ_SAYISI": 46
                },
                {
                    "isletmeName": "DİDİM İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 102.99,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.25,
                    "OG_UZUN_KESİNTİ_SAYISI": 56,
                    "AG_UZUN_KESİNTİ_SAYISI": 235,
                    "OG_KISA_KESİNTİ_SAYISI": 8
                },
                {
                    "isletmeName": "FETHİYE İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 58.43,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.74,
                    "OG_UZUN_KESİNTİ_SAYISI": 221,
                    "AG_UZUN_KESİNTİ_SAYISI": 538,
                    "OG_KISA_KESİNTİ_SAYISI": 36
                },
                {
                    "isletmeName": "KUŞADASI İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 75.48,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.16,
                    "OG_UZUN_KESİNTİ_SAYISI": 60,
                    "AG_UZUN_KESİNTİ_SAYISI": 225,
                    "OG_KISA_KESİNTİ_SAYISI": 4
                },
                {
                    "isletmeName": "MARMARİS İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 63.39,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.55,
                    "OG_UZUN_KESİNTİ_SAYISI": 67,
                    "AG_UZUN_KESİNTİ_SAYISI": 174,
                    "OG_KISA_KESİNTİ_SAYISI": 9
                },
                {
                    "isletmeName": "MİLAS İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 71.62,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 3.32,
                    "OG_UZUN_KESİNTİ_SAYISI": 206,
                    "AG_UZUN_KESİNTİ_SAYISI": 318,
                    "OG_KISA_KESİNTİ_SAYISI": 54
                },
                {
                    "isletmeName": "MUĞLA MERKEZ İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 55.68,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.55,
                    "OG_UZUN_KESİNTİ_SAYISI": 208,
                    "AG_UZUN_KESİNTİ_SAYISI": 226,
                    "OG_KISA_KESİNTİ_SAYISI": 34
                },
                {
                    "isletmeName": "NAZİLLİ İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 63.69,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 1.99,
                    "OG_UZUN_KESİNTİ_SAYISI": 273,
                    "AG_UZUN_KESİNTİ_SAYISI": 360,
                    "OG_KISA_KESİNTİ_SAYISI": 107
                },
                {
                    "isletmeName": "ORTACA İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 59.96,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.16,
                    "OG_UZUN_KESİNTİ_SAYISI": 97,
                    "AG_UZUN_KESİNTİ_SAYISI": 179,
                    "OG_KISA_KESİNTİ_SAYISI": 23
                },
                {
                    "isletmeName": "SARAYKÖY İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 57.96,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 1.85,
                    "OG_UZUN_KESİNTİ_SAYISI": 83,
                    "AG_UZUN_KESİNTİ_SAYISI": 110,
                    "OG_KISA_KESİNTİ_SAYISI": 20
                },
                {
                    "isletmeName": "SÖKE İŞLETME",
                    "ORT_OG_ARIZA_SÜRESİ_DK": 76.36,
                    "ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT": 2.54,
                    "OG_UZUN_KESİNTİ_SAYISI": 54,
                    "AG_UZUN_KESİNTİ_SAYISI": 121,
                    "OG_KISA_KESİNTİ_SAYISI": 28
                }
            ]
        },
        
    }
   
 
];
 

        const categories_Aylik = [
            'Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran',
            'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'
          ];
          let ORT_OG_ARIZA_SÜRESİ_DK_SERİES =  [];
          let ORT_AG_ARIZA_SÜRESİ_SAAT_SERİES = []; 
          let OG_UZUN_KESİNTİ_SAYISI_SERİES = [];
          let AG_UZUN_KESİNTİ_SAYISI_SERİES = [];
          let OG_KISA_KESİNTİ_SAYISI_SERİES = [];
 
// 1-12 arası her ay için sırayla oku
 console.log( initialStateSummaryData[0][2025].length)
const series2025 = Array.from({ length: Object.keys(initialStateSummaryData[0][2025]).length  /* BURASI ÇOK ÖNEMLİ LENGH İ MEVCUT AY SAYISI YAP YOKSA PATLARSIN */ }, (_, i) => {
    const ay = (i + 1).toString(); // "1", "2", ..., "12"
     ORT_OG_ARIZA_SÜRESİ_DK_SERİES = initialStateSummaryData[0][2025][ay][directnavbardangelenisletmecount-1].ORT_OG_ARIZA_SÜRESİ_DK
      ORT_AG_ARIZA_SÜRESİ_SAAT_SERİES = initialStateSummaryData[0][2025][ay][directnavbardangelenisletmecount-1].ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT
      OG_UZUN_KESİNTİ_SAYISI_SERİES = initialStateSummaryData[0][2025][ay][directnavbardangelenisletmecount-1].OG_UZUN_KESİNTİ_SAYISI
      AG_UZUN_KESİNTİ_SAYISI_SERİES = initialStateSummaryData[0][2025][ay][directnavbardangelenisletmecount-1].AG_UZUN_KESİNTİ_SAYISI
      OG_KISA_KESİNTİ_SAYISI_SERİES = initialStateSummaryData[0][2025][ay][directnavbardangelenisletmecount-1].OG_KISA_KESİNTİ_SAYISI
  
    if (!ORT_OG_ARIZA_SÜRESİ_DK_SERİES) return null;
  
    /*const isletmeVerisi = initialStateSummaryData[0][ay]?.find(
      item => item.isletmeName.trim() === isletme
    )?.ORT_OG_ARIZA_SÜRESİ_DK;*/
  
    return ORT_OG_ARIZA_SÜRESİ_DK_SERİES ? {
      ORT_OG_ARIZA_SÜRESİ_DK_SERİES: ORT_OG_ARIZA_SÜRESİ_DK_SERİES,
       ORT_AG_ARIZA_SÜRESİ_SAAT_SERİES:ORT_AG_ARIZA_SÜRESİ_SAAT_SERİES,
       OG_UZUN_KESİNTİ_SAYISI_SERİES:OG_UZUN_KESİNTİ_SAYISI_SERİES,
       AG_UZUN_KESİNTİ_SAYISI_SERİES:AG_UZUN_KESİNTİ_SAYISI_SERİES,
       OG_KISA_KESİNTİ_SAYISI_SERİES:OG_KISA_KESİNTİ_SAYISI_SERİES
      
      
      } : null;
  });
const series2024 = Array.from({ length: 12 }, (_, i) => {
  const ay = (i + 1).toString(); // "1", "2", ..., "12"
   ORT_OG_ARIZA_SÜRESİ_DK_SERİES = initialStateSummaryData[0][2024][ay][directnavbardangelenisletmecount-1].ORT_OG_ARIZA_SÜRESİ_DK
    ORT_AG_ARIZA_SÜRESİ_SAAT_SERİES = initialStateSummaryData[0][2024][ay][directnavbardangelenisletmecount-1].ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT
    OG_UZUN_KESİNTİ_SAYISI_SERİES = initialStateSummaryData[0][2024][ay][directnavbardangelenisletmecount-1].OG_UZUN_KESİNTİ_SAYISI
    AG_UZUN_KESİNTİ_SAYISI_SERİES = initialStateSummaryData[0][2024][ay][directnavbardangelenisletmecount-1].AG_UZUN_KESİNTİ_SAYISI
    OG_KISA_KESİNTİ_SAYISI_SERİES = initialStateSummaryData[0][2024][ay][directnavbardangelenisletmecount-1].OG_KISA_KESİNTİ_SAYISI

  if (!ORT_OG_ARIZA_SÜRESİ_DK_SERİES) return null;

  /*const isletmeVerisi = initialStateSummaryData[0][ay]?.find(
    item => item.isletmeName.trim() === isletme
  )?.ORT_OG_ARIZA_SÜRESİ_DK;*/

  return ORT_OG_ARIZA_SÜRESİ_DK_SERİES ? {
    ORT_OG_ARIZA_SÜRESİ_DK_SERİES: ORT_OG_ARIZA_SÜRESİ_DK_SERİES,
     ORT_AG_ARIZA_SÜRESİ_SAAT_SERİES:ORT_AG_ARIZA_SÜRESİ_SAAT_SERİES,
     OG_UZUN_KESİNTİ_SAYISI_SERİES:OG_UZUN_KESİNTİ_SAYISI_SERİES,
     AG_UZUN_KESİNTİ_SAYISI_SERİES:AG_UZUN_KESİNTİ_SAYISI_SERİES,
     OG_KISA_KESİNTİ_SAYISI_SERİES:OG_KISA_KESİNTİ_SAYISI_SERİES
    
    
    } : null;
});
const series2023 = Array.from({ length: 12 }, (_, i) => {
    const ay = (i + 1).toString(); // "1", "2", ..., "12"
     ORT_OG_ARIZA_SÜRESİ_DK_SERİES = initialStateSummaryData[0][2023][ay][directnavbardangelenisletmecount-1].ORT_OG_ARIZA_SÜRESİ_DK
      ORT_AG_ARIZA_SÜRESİ_SAAT_SERİES = initialStateSummaryData[0][2023][ay][directnavbardangelenisletmecount-1].ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT
      OG_UZUN_KESİNTİ_SAYISI_SERİES = initialStateSummaryData[0][2023][ay][directnavbardangelenisletmecount-1].OG_UZUN_KESİNTİ_SAYISI
      AG_UZUN_KESİNTİ_SAYISI_SERİES = initialStateSummaryData[0][2023][ay][directnavbardangelenisletmecount-1].AG_UZUN_KESİNTİ_SAYISI
      OG_KISA_KESİNTİ_SAYISI_SERİES = initialStateSummaryData[0][2023][ay][directnavbardangelenisletmecount-1].OG_KISA_KESİNTİ_SAYISI
  
    if (!ORT_OG_ARIZA_SÜRESİ_DK_SERİES) return null;
  
    /*const isletmeVerisi = initialStateSummaryData[0][ay]?.find(
      item => item.isletmeName.trim() === isletme
    )?.ORT_OG_ARIZA_SÜRESİ_DK;*/
  
    return ORT_OG_ARIZA_SÜRESİ_DK_SERİES ? {
      ORT_OG_ARIZA_SÜRESİ_DK_SERİES: ORT_OG_ARIZA_SÜRESİ_DK_SERİES,
       ORT_AG_ARIZA_SÜRESİ_SAAT_SERİES:ORT_AG_ARIZA_SÜRESİ_SAAT_SERİES,
       OG_UZUN_KESİNTİ_SAYISI_SERİES:OG_UZUN_KESİNTİ_SAYISI_SERİES,
       AG_UZUN_KESİNTİ_SAYISI_SERİES:AG_UZUN_KESİNTİ_SAYISI_SERİES,
       OG_KISA_KESİNTİ_SAYISI_SERİES:OG_KISA_KESİNTİ_SAYISI_SERİES
      
      
      } : null;
  });
  const series2022 = Array.from({ length: 12 }, (_, i) => {
    const ay = (i + 1).toString(); // "1", "2", ..., "12"
     ORT_OG_ARIZA_SÜRESİ_DK_SERİES = initialStateSummaryData[0][2022][ay][directnavbardangelenisletmecount-1].ORT_OG_ARIZA_SÜRESİ_DK
      ORT_AG_ARIZA_SÜRESİ_SAAT_SERİES = initialStateSummaryData[0][2022][ay][directnavbardangelenisletmecount-1].ORT_AG_UZUN_ARIZA_SÜRESİ_SAAT
      OG_UZUN_KESİNTİ_SAYISI_SERİES = initialStateSummaryData[0][2022][ay][directnavbardangelenisletmecount-1].OG_UZUN_KESİNTİ_SAYISI
      AG_UZUN_KESİNTİ_SAYISI_SERİES = initialStateSummaryData[0][2022][ay][directnavbardangelenisletmecount-1].AG_UZUN_KESİNTİ_SAYISI
      OG_KISA_KESİNTİ_SAYISI_SERİES = initialStateSummaryData[0][2022][ay][directnavbardangelenisletmecount-1].OG_KISA_KESİNTİ_SAYISI
  
    if (!ORT_OG_ARIZA_SÜRESİ_DK_SERİES) return null;
  
    /*const isletmeVerisi = initialStateSummaryData[0][ay]?.find(
      item => item.isletmeName.trim() === isletme
    )?.ORT_OG_ARIZA_SÜRESİ_DK;*/
  
    return ORT_OG_ARIZA_SÜRESİ_DK_SERİES ? {
      ORT_OG_ARIZA_SÜRESİ_DK_SERİES: ORT_OG_ARIZA_SÜRESİ_DK_SERİES,
       ORT_AG_ARIZA_SÜRESİ_SAAT_SERİES:ORT_AG_ARIZA_SÜRESİ_SAAT_SERİES,
       OG_UZUN_KESİNTİ_SAYISI_SERİES:OG_UZUN_KESİNTİ_SAYISI_SERİES,
       AG_UZUN_KESİNTİ_SAYISI_SERİES:AG_UZUN_KESİNTİ_SAYISI_SERİES,
       OG_KISA_KESİNTİ_SAYISI_SERİES:OG_KISA_KESİNTİ_SAYISI_SERİES
      
      
      } : null;
  });

 
          const ort_og_arıza_giderme_suresi_dk = [

             { name: '2022', data:series2022.map(x=>x.ORT_OG_ARIZA_SÜRESİ_DK_SERİES) },
            { name: '2023', data: series2023.map(x=>x.ORT_OG_ARIZA_SÜRESİ_DK_SERİES) },
            { name: '2024', data: series2024.map(x=>x.ORT_OG_ARIZA_SÜRESİ_DK_SERİES) },
            { name: '2025', data: series2025.map(x=>x.ORT_OG_ARIZA_SÜRESİ_DK_SERİES) },
             
          ];
        
          const ort_ag_arıza_giderme_suresi_saat = [
            { name: '2022', data: series2022.map(x=>x.ORT_AG_ARIZA_SÜRESİ_SAAT_SERİES) },
            { name: '2023', data:series2023.map(x=>x.ORT_AG_ARIZA_SÜRESİ_SAAT_SERİES) },
            { name: '2024', data: series2024.map(x=>x.ORT_AG_ARIZA_SÜRESİ_SAAT_SERİES) },
            { name: '2025', data:  series2025.map(x=>x.ORT_AG_ARIZA_SÜRESİ_SAAT_SERİES) },
             
          ];
        
          const og_uzun_kesint_sayısı = [
            { name: '2022', data:  series2022.map(x=>x.OG_UZUN_KESİNTİ_SAYISI_SERİES)    },
            { name: '2023', data:  series2023.map(x=>x.OG_UZUN_KESİNTİ_SAYISI_SERİES)    },
            { name: '2024', data:  series2024.map(x=>x.OG_UZUN_KESİNTİ_SAYISI_SERİES)    },
            { name: '2025', data: series2025.map(x=>x.OG_UZUN_KESİNTİ_SAYISI_SERİES)    },
           
          ];

          const ag_uzun_kesint_sayısı = [
            { name: '2022', data: series2022.map(x=>x.AG_UZUN_KESİNTİ_SAYISI_SERİES)  },
            { name: '2023', data: series2023.map(x=>x.AG_UZUN_KESİNTİ_SAYISI_SERİES)  },
            { name: '2024', data: series2024.map(x=>x.AG_UZUN_KESİNTİ_SAYISI_SERİES)  },
            { name: '2025', data: series2025.map(x=>x.AG_UZUN_KESİNTİ_SAYISI_SERİES)  },
           
          ];

          const OG_KISA_KESİNTİ_SAYISI  = [
            { name: '2022', data:  series2022.map(x=>x.OG_KISA_KESİNTİ_SAYISI_SERİES)  },
            { name: '2023', data: series2023.map(x=>x.OG_KISA_KESİNTİ_SAYISI_SERİES)  },
            { name: '2024', data: series2024.map(x=>x.OG_KISA_KESİNTİ_SAYISI_SERİES)  },
            { name: '2025', data:series2025.map(x=>x.OG_KISA_KESİNTİ_SAYISI_SERİES)  },
           
          ];
        
          const chartConfigs = [
            {
                title: `${isletme} ORT OG ARIZA GİDERME SÜRESİ DAKİKA`,
                series: ort_og_arıza_giderme_suresi_dk
            },
            {
              title: `${isletme} ORT AG ARIZA GİDERME SÜRESİ SAAT`,
              series: ort_ag_arıza_giderme_suresi_saat
            },
            {
                title: `${isletme}TOPLAM UZUN OG ARIZA SAYISI`,  
              series: og_uzun_kesint_sayısı
            },
            {
              title: 'TOPLAM UZUN AG ARIZA SAYISI',
              series: ag_uzun_kesint_sayısı
            },
            {
              title: 'TOPLAM KISA OG ARIZA SAYISI',
              series: OG_KISA_KESİNTİ_SAYISI
            }
          ];
        
          return (
            <div className="dashboard-container">
              {chartConfigs.map((config, index) => {
                const options = {
                  chart: {
                    type: 'line',
                    height: 0
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
                      height={250}
                      width={700}
                    />
                  </div>
                );
              })}
            </div>
          );
        };
    
    export default SummaryGraph;
    