import React, { useState  } from 'react';
import ApexChartEdas from './ApexChartEdas';

 
import { Button } from '@mui/material'


export  const SaidiSaifiGraphEdas=()=> {
 
   
 
   
 
 
 
    const categories_Aylik= [
        'Ocak',
        'Şubat',
        'Mart',
        'Nisan',
        'Mayıs',
        'Haziran',
        'Temmuz',
        'Ağustos',
        'Eylül',
        'Ekim',
        'Kasım',
        'Aralık',
       // 'Toplam'
          ]
 
          const electricityDataSaidi2025 = {
            "ADM EDAŞ": {
              "Ocak": 48.55,
              "Şubat": 45.21,
              "Mart": 34.31,
              "Nisan": 0.00,
              "Mayıs": 0.00,
              "Haziran": 0.00,
              "Temmuz": 0.00,
              "Ağustos": 0.00,
              "Eylül": 0.00,
              "Ekim": 0.00,
              "Kasım": 0.00,
              "Aralık": 0.00,
              "Toplam": 128.07
            },
            "GDZ EDAŞ": {
              "Ocak": 55.42,
              "Şubat": 54.13,
              "Mart": 42.62,
              "Nisan": 38.76,
              "Mayıs": 0.00,
              "Haziran": 0.00,
              "Temmuz": 0.00,
              "Ağustos": 0.00,
              "Eylül": 0.00,
              "Ekim": 0.00,
              "Kasım": 0.00,
              "Aralık": 0.00,
              "Toplam": 190.92
            },
            "Akdeniz EDAŞ": {
              "Ocak": 0.00,
              "Şubat": 0.00,
              "Mart": 0.00,
              "Nisan": 0.00,
              "Mayıs": 0.00,
              "Haziran": 0.00,
              "Temmuz": 0.00,
              "Ağustos": 0.00,
              "Eylül": 0.00,
              "Ekim": 0.00,
              "Kasım": 0.00,
              "Aralık": 0.00,
              "Toplam": 0.00
            },
            "Akedaş": {
              "Ocak": 76.45,
              "Şubat": 76.75,
              "Mart": 129.43,
              "Nisan": 123.15,
              "Mayıs": 0.00,
              "Haziran": 0.00,
              "Temmuz": 0.00,
              "Ağustos": 0.00,
              "Eylül": 0.00,
              "Ekim": 0.00,
              "Kasım": 0.00,
              "Aralık": 0.00,
              "Toplam": 405.78
            },
            "Aras EDAŞ": {
              "Ocak": 47.72,
              "Şubat": 55.37,
              "Mart": 79.08,
              "Nisan": 0.00,
              "Mayıs": 0.00,
              "Haziran": 0.00,
              "Temmuz": 0.00,
              "Ağustos": 0.00,
              "Eylül": 0.00,
              "Ekim": 0.00,
              "Kasım": 0.00,
              "Aralık": 0.00,
              "Toplam": 182.17
            },
            // Diğer şirketler aynı şekilde devam ediyor...
            "Çoruh EDAŞ": {
              "Ocak": 51.33,
              "Şubat": 157.43,
              "Mart": 128.55,
              "Nisan": 87.28,
              "Mayıs": 0.00,
              "Haziran": 0.00,
              "Temmuz": 0.00,
              "Ağustos": 0.00,
              "Eylül": 0.00,
              "Ekim": 0.00,
              "Kasım": 0.00,
              "Aralık": 0.00,
              "Toplam": 424.58
            },
            "Fırat EDAŞ": {
              "Ocak": 34.69,
              "Şubat": 65.97,
              "Mart": 64.04,
              "Nisan": 63.48,
              "Mayıs": 0.00,
              "Haziran": 0.00,
              "Temmuz": 0.00,
              "Ağustos": 0.00,
              "Eylül": 0.00,
              "Ekim": 0.00,
              "Kasım": 0.00,
              "Aralık": 0.00,
              "Toplam": 228.18
            },
          
            "Meram EDAŞ": {
              "Ocak": 19.09,
              "Şubat": 25.89,
              "Mart": 39.38,
              "Nisan": 43.84,
              "Mayıs": 0.00,
              "Haziran": 0.00,
              "Temmuz": 0.00,
              "Ağustos": 0.00,
              "Eylül": 0.00,
              "Ekim": 0.00,
              "Kasım": 0.00,
              "Aralık": 0.00,
              "Toplam": 128.20
            },
            "Osmangazi EDAŞ": {
              "Ocak": 61.13,
              "Şubat": 45.56,
              "Mart": 82.99,
              "Nisan": 0.00,
              "Mayıs": 0.00,
              "Haziran": 0.00,
              "Temmuz": 0.00,
              "Ağustos": 0.00,
              "Eylül": 0.00,
              "Ekim": 0.00,
              "Kasım": 0.00,
              "Aralık": 0.00,
              "Toplam": 189.68
            },
            // Tüm değerleri 0 olan şirketler için kısa gösterim
            "Ayedaş": createZeroData(),
            "Başkent EDAŞ": createZeroData(),
            "Boğaziçi EDAŞ": createZeroData(),
            "Çamlıbel EDAŞ": createZeroData(),
            "Dicle EDAŞ": createZeroData(),
            "Kayseri ve Civarı EDAŞ": createZeroData(),
            "Sakarya EDAŞ": createZeroData(),
            "Toroslar EDAŞ": createZeroData(),
            "Tredaş": createZeroData(),
            "Uludağ EDAŞ": createZeroData(),
            "Vangölü EDAŞ": createZeroData(),
            "Yeşilırmak EDAŞ": createZeroData()
          };
          const electricityDataSaifi2025 = {
            "ADM EDAŞ": {
              "Ocak": 1.05,
              "Şubat": 0.95,
              "Mart": 0.89,
              "Nisan": 0.00,
              "Mayıs": 0.00,
              "Haziran": 0.00,
              "Temmuz": 0.00,
              "Ağustos": 0.00,
              "Eylül": 0.00,
              "Ekim": 0.00,
              "Kasım": 0.00,
              "Aralık": 0.00,
              "Toplam": 2.89
            },
            "GDZ EDAŞ": {
              "Ocak": 0.85,
              "Şubat": 0.74,
              "Mart": 0.74,
              "Nisan": 0.70,
              "Mayıs": 0.00,
              "Haziran": 0.00,
              "Temmuz": 0.00,
              "Ağustos": 0.00,
              "Eylül": 0.00,
              "Ekim": 0.00,
              "Kasım": 0.00,
              "Aralık": 0.00,
              "Toplam": 3.03
            },
            "Akdeniz EDAŞ": createZeroData(),
            "Akedaş": {
              "Ocak": 1.87,
              "Şubat": 1.71,
              "Mart": 3.22,
              "Nisan": 2.97,
              "Mayıs": 0.00,
              "Haziran": 0.00,
              "Temmuz": 0.00,
              "Ağustos": 0.00,
              "Eylül": 0.00,
              "Ekim": 0.00,
              "Kasım": 0.00,
              "Aralık": 0.00,
              "Toplam": 9.77
            },
            "Aras EDAŞ": {
              "Ocak": 0.73,
              "Şubat": 0.77,
              "Mart": 1.01,
              "Nisan": 0.00,
              "Mayıs": 0.00,
              "Haziran": 0.00,
              "Temmuz": 0.00,
              "Ağustos": 0.00,
              "Eylül": 0.00,
              "Ekim": 0.00,
              "Kasım": 0.00,
              "Aralık": 0.00,
              "Toplam": 2.50
            },
            "Ayedaş": createZeroData(),
            "Başkent EDAŞ": createZeroData(),
            "Boğaziçi EDAŞ": createZeroData(),
            "Çamlıbel EDAŞ": createZeroData(),
            "Çoruh EDAŞ": {
              "Ocak": 0.97,
              "Şubat": 2.07,
              "Mart": 1.85,
              "Nisan": 1.47,
              "Mayıs": 0.00,
              "Haziran": 0.00,
              "Temmuz": 0.00,
              "Ağustos": 0.00,
              "Eylül": 0.00,
              "Ekim": 0.00,
              "Kasım": 0.00,
              "Aralık": 0.00,
              "Toplam": 6.36
            },
            "Dicle EDAŞ": createZeroData(),
            "Fırat EDAŞ": {
              "Ocak": 0.84,
              "Şubat": 1.01,
              "Mart": 1.43,
              "Nisan": 1.36,
              "Mayıs": 0.00,
              "Haziran": 0.00,
              "Temmuz": 0.00,
              "Ağustos": 0.00,
              "Eylül": 0.00,
              "Ekim": 0.00,
              "Kasım": 0.00,
              "Aralık": 0.00,
              "Toplam": 4.64
            },
        
            "Kayseri ve Civarı EDAŞ": createZeroData(),
            "Meram EDAŞ": {
              "Ocak": 0.37,
              "Şubat": 0.43,
              "Mart": 0.68,
              "Nisan": 0.76,
              "Mayıs": 0.00,
              "Haziran": 0.00,
              "Temmuz": 0.00,
              "Ağustos": 0.00,
              "Eylül": 0.00,
              "Ekim": 0.00,
              "Kasım": 0.00,
              "Aralık": 0.00,
              "Toplam": 2.25
            },
            "Osmangazi EDAŞ": {
              "Ocak": 1.53,
              "Şubat": 1.10,
              "Mart": 2.17,
              "Nisan": 0.00,
              "Mayıs": 0.00,
              "Haziran": 0.00,
              "Temmuz": 0.00,
              "Ağustos": 0.00,
              "Eylül": 0.00,
              "Ekim": 0.00,
              "Kasım": 0.00,
              "Aralık": 0.00,
              "Toplam": 4.79
            },
            "Sakarya EDAŞ": createZeroData(),
            "Toroslar EDAŞ": createZeroData(),
            "Tredaş": createZeroData(),
            "Uludağ EDAŞ": createZeroData(),
            "Vangölü EDAŞ": createZeroData(),
            "Yeşilırmak EDAŞ": createZeroData()
          };
          
          // Helper function for companies with all zero values
          function createZeroData() {
            return {
              "Ocak": 0.00,
              "Şubat": 0.00,
              "Mart": 0.00,
              "Nisan": 0.00,
              "Mayıs": 0.00,
              "Haziran": 0.00,
              "Temmuz": 0.00,
              "Ağustos": 0.00,
              "Eylül": 0.00,
              "Ekim": 0.00,
              "Kasım": 0.00,
              "Aralık": 0.00,
              "Toplam": 0.00
            };
          }
       
           const electricityDataSaidi24 = {
            "ADM EDAŞ": {
              "1": 58.83,
              "2": 54.60,
              "3": 44.17,
              "4": 80.76,
              "5": 46.34,
              "6": 85.08,
              "7": 133.45,
              "8": 69.37,
              "9": 51.49,
              "10": 41.82,
              "11": 88.59,
              "12": 83.74,
              "13": 838.24
            },
            "GDZ EDAŞ": {
              "1": 56.29,
              "2": 40.87,
              "3": 44.64,
              "4": 38.05,
              "5": 41.01,
              "6": 82.79,
              "7": 151.51,
              "8": 74.36,
              "9": 75.71,
              "10": 46.74,
              "11": 80.19,
              "12": 88.99,
              "13": 821.30
            },
            "Dicle EDAŞ": {
              "1": 232.82,
              "2": 220.67,
              "3": 198.68,
              "4": 260.74,
              "5": 378.94,
              "6": 370.00,
              "7": 264.18,
              "8": 269.41,
              "9": 299.33,
              "10": 276.77,
              "11": 326.50,
              "12": 378.61,
              "13": 3476.64
            },
            "Toroslar EDAŞ": {
              "1": 170.06,
              "2": 134.03,
              "3": 114.68,
              "4": 101.25,
              "5": 125.88,
              "6": 171.61,
              "7": 241.01,
              "8": 197.50,
              "9": 153.92,
              "10": 106.12,
              "11": 178.01,
              "12": 160.80,
              "13": 1854.88
            },
            "Akedaş": {
              "1": 54.69,
              "2": 56.73,
              "3": 66.19,
              "4": 103.20,
              "5": 95.32,
              "6": 162.59,
              "7": 168.16,
              "8": 107.55,
              "9": 125.94,
              "10": 87.70,
              "11": 292.55,
              "12": 114.67,
              "13": 1435.29
            },
            "Aras EDAŞ": {
              "1": 72.13,
              "2": 73.99,
              "3": 94.67,
              "4": 64.29,
              "5": 98.01,
              "6": 166.95,
              "7": 222.52,
              "8": 140.72,
              "9": 129.96,
              "10": 90.52,
              "11": 140.74,
              "12": 107.08,
              "13": 1401.58
            },
            "Çoruh EDAŞ": {
              "1": 124.98,
              "2": 113.90,
              "3": 60.74,
              "4": 60.05,
              "5": 90.97,
              "6": 108.12,
              "7": 155.75,
              "8": 103.44,
              "9": 90.55,
              "10": 133.33,
              "11": 225.67,
              "12": 129.40,
              "Toplam": 1396.90
            },
            "Sakarya EDAŞ": {
              "1": 70.76,
              "2": 44.54,
              "3": 70.86,
              "4": 83.56,
              "5": 86.35,
              "6": 130.47,
              "7": 162.45,
              "8": 95.94,
              "9": 111.82,
              "10": 103.86,
              "11": 187.11,
              "12": 88.96,
              "13": 1236.68
            },
            "Akdeniz EDAŞ": {
              "1": 62.11,
              "2": 70.35,
              "3": 57.58,
              "4": 55.78,
              "5": 58.05,
              "6": 102.59,
              "7": 130.55,
              "8": 63.41,
              "9": 70.23,
              "10": 47.77,
              "11": 147.22,
              "12": 120.05,
              "13": 985.69
            },
            "Başkent EDAŞ": {
              "1": 67.83,
              "2": 51.30,
              "3": 49.64,
              "4": 71.23,
              "5": 57.79,
              "6": 95.16,
              "7": 77.07,
              "8": 129.43,
              "9": 118.01,
              "10": 61.82,
              "11": 82.73,
              "12": 67.75,
              "13": 929.75
            },
            "Yeşilırmak EDAŞ": {
              "1": 0.00,
              "2": 0.00,
              "3": 0.00,
              "4": 0.00,
              "5": 0.00,
              "6": 0.00,
              "7": 0.00,
              "8": 0.00,
              "9": 0.00,
              "10": 0.00,
              "11": 0.00,
              "12": 0.00,
              "13": 919.12
            },
            "Fırat EDAŞ": {
              "1": 49.36,
              "2": 41.46,
              "3": 70.21,
              "4": 59.65,
              "5": 86.65,
              "6": 106.71,
              "7": 95.88,
              "8": 70.30,
              "9": 59.69,
              "10": 51.14,
              "11": 106.92,
              "12": 68.44,
              "13": 866.39
            },
           
            "Çamlıbel EDAŞ": {
              "1": 25.69,
              "2": 18.16,
              "3": 26.01,
              "4": 52.61,
              "5": 53.43,
              "6": 97.45,
              "7": 107.20,
              "8": 67.40,
              "9": 57.45,
              "10": 52.84,
              "11": 162.58,
              "12": 107.95,
              "13": 828.78
            },
            
            "Boğaziçi EDAŞ": {
              "1": 53.95,
              "2": 39.50,
              "3": 38.75,
              "4": 39.22,
              "5": 41.54,
              "6": 54.26,
              "7": 77.39,
              "8": 60.51,
              "9": 82.02,
              "10": 98.49,
              "11": 100.57,
              "12": 69.33,
              "13": 755.53
            },
            "Uludağ EDAŞ": {
              "1": 0.00,
              "2": 0.00,
              "3": 0.00,
              "4": 0.00,
              "5": 0.00,
              "6": 0.00,
              "7": 0.00,
              "8": 0.00,
              "9": 0.00,
              "10": 0.00,
              "11": 0.00,
              "12": 0.00,
              "13": 518.14
            },
            "Tredaş": {
              "1": 48.37,
              "2": 34.21,
              "3": 25.83,
              "4": 35.65,
              "5": 34.19,
              "6": 42.24,
              "7": 50.40,
              "8": 73.97,
              "9": 41.34,
              "10": 32.96,
              "11": 45.44,
              "12": 49.19,
              "13": 513.81
            },
            "Meram EDAŞ": {
              "1": 27.92,
              "2": 17.34,
              "3": 26.66,
              "4": 57.06,
              "5": 40.28,
              "6": 0.00,
              "7": 64.30,
              "8": 40.85,
              "9": 32.43,
              "10": 22.62,
              "11": 64.92,
              "12": 32.59,
              "13": 426.95
            },
            "Ayedaş": {
              "1": 24.47,
              "2": 24.58,
              "3": 20.06,
              "4": 23.29,
              "5": 18.72,
              "6": 30.27,
              "7": 23.00,
              "8": 40.08,
              "9": 30.96,
              "10": 23.12,
              "11": 27.14,
              "12": 27.14,
              "13": 312.82
            },
            "Kayseri ve Civarı EDAŞ": {
              "1": 13.24,
              "2": 10.40,
              "3": 27.47,
              "4": 33.15,
              "5": 27.51,
              "6": 43.43,
              "7": 38.97,
              "8": 24.87,
              "9": 19.12,
              "10": 0.00,
              "11": 0.00,
              "12": 0.00,
              "13": 238.16
            },
            "Osmangazi EDAŞ": {
              "1": 0.00,
              "2": 0.00,
              "3": 0.00,
              "4": 0.00,
              "5": 0.00,
              "6": 0.00,
              "7": 0.00,
              "8": 0.00,
              "9": 0.00,
              "10": 0.00,
              "11": 0.00,
              "12": 0.00,
              "13": 0.00
            },
            "Vangölü EDAŞ": {
              "1": 0.00,
              "2": 0.00,
              "3": 0.00,
              "4": 0.00,
              "5": 0.00,
              "6": 0.00,
              "7": 0.00,
              "8": 0.00,
              "9": 0.00,
              "10": 0.00,
              "11": 0.00,
              "12": 0.00,
              "13": 0.00
            }
          };
        const electricityDataSaifi24 = {
          "ADM EDAŞ": {
            "1": 1.02,
            "2": 1.00,
            "3": 1.07,
            "4": 1.22,
            "5": 1.21,
            "6": 1.66,
            "7": 2.16,
            "8": 1.46,
            "9": 1.20,
            "10": 1.07,
            "11": 1.64,
            "12": 1.24,
            "13": 15.95
          },
          "GDZ EDAŞ": {
            "1": 0.91,
            "2": 0.55,
            "3": 0.75,
            "4": 0.61,
            "5": 0.68,
            "6": 1.15,
            "7": 1.72,
            "8": 1.01,
            "9": 0.98,
            "10": 0.72,
            "11": 1.06,
            "12": 1.16,
            "13": 11.30
          },
            "Dicle EDAŞ": {
              "1": 3.63,
              "2": 3.30,
              "3": 3.37,
              "4": 3.80,
              "5": 5.05,
              "6": 4.76,
              "7": 4.15,
              "8": 4.65,
              "9": 4.78,
              "10": 4.35,
              "11": 4.91,
              "12": 5.21,
              "13": 51.94
            },
            "Akedaş": {
              "1": 1.26,
              "2": 1.54,
              "3": 2.20,
              "4": 2.61,
              "5": 2.89,
              "6": 4.43,
              "7": 4.10,
              "8": 3.44,
              "9": 3.03,
              "10": 2.41,
              "11": 4.52,
              "12": 2.77,
              "13": 35.20
            },
            "Sakarya EDAŞ": {
              "1": 1.44,
              "2": 1.08,
              "3": 1.89,
              "4": 2.08,
              "5": 2.04,
              "6": 3.28,
              "7": 3.62,
              "8": 2.29,
              "9": 2.47,
              "10": 2.35,
              "11": 2.53,
              "12": 2.02,
              "13": 27.09
            },
            "Toroslar EDAŞ": {
              "1": 2.12,
              "2": 1.55,
              "3": 1.27,
              "4": 1.57,
              "5": 1.37,
              "6": 1.32,
              "7": 1.60,
              "8": 1.54,
              "9": 1.34,
              "10": 1.41,
              "11": 2.16,
              "12": 2.40,
              "13": 19.66
            },
            "Çoruh EDAŞ": {
              "1": 1.81,
              "2": 1.14,
              "3": 1.15,
              "4": 1.30,
              "5": 1.70,
              "6": 2.14,
              "7": 2.89,
              "8": 1.68,
              "9": 1.50,
              "10": 1.37,
              "11": 1.34,
              "12": 1.49,
              "13": 19.51
            },
            "Fırat EDAŞ": {
              "1": 1.00,
              "2": 1.02,
              "3": 1.48,
              "4": 1.48,
              "5": 1.71,
              "6": 2.42,
              "7": 2.51,
              "8": 1.72,
              "9": 1.25,
              "10": 1.15,
              "11": 1.40,
              "12": 1.04,
              "13": 18.17
            },
            "Tredaş": {
              "1": 1.12,
              "2": 0.66,
              "3": 0.65,
              "4": 0.90,
              "5": 0.83,
              "6": 1.06,
              "7": 1.26,
              "8": 1.24,
              "9": 0.95,
              "10": 0.79,
              "11": 0.99,
              "12": 1.06,
              "13": 11.51
            }
          ,
            "Başkent EDAŞ": {
              "1": 1.45,
              "2": 1.11,
              "3": 1.10,
              "4": 1.14,
              "5": 1.01,
              "6": 1.09,
              "7": 1.17,
              "8": 1.13,
              "9": 1.08,
              "10": 1.40,
              "11": 1.28,
              "12": 1.45,
              "13": 14.41
            },
            "Aras EDAŞ": {
              "1": 0.97,
              "2": 0.72,
              "3": 0.89,
              "4": 0.81,
              "5": 1.06,
              "6": 1.64,
              "7": 2.11,
              "8": 1.43,
              "9": 1.21,
              "10": 1.13,
              "11": 0.99,
              "12": 1.29,
              "13": 14.24
            },
            "Akdeniz EDAŞ": {
              "1": 0.94,
              "2": 0.98,
              "3": 0.82,
              "4": 0.79,
              "5": 0.84,
              "6": 1.28,
              "7": 1.27,
              "8": 0.80,
              "9": 0.92,
              "10": 0.61,
              "11": 1.57,
              "12": 1.42,
              "13": 12.24
            },
           
           
            "Yeşilırmak EDAŞ": {
              "1": 0.00,
              "2": 0.00,
              "3": 0.00,
              "4": 0.00,
              "5": 0.00,
              "6": 0.00,
              "7": 0.00,
              "8": 0.00,
              "9": 0.00,
              "10": 0.00,
              "11": 0.00,
              "12": 0.00,
              "13": 11.45
            },
           
            "Çamlıbel EDAŞ": {
              "1": 0.38,
              "2": 0.34,
              "3": 0.41,
              "4": 0.79,
              "5": 0.77,
              "6": 1.04,
              "7": 1.24,
              "8": 0.75,
              "9": 0.77,
              "10": 0.64,
              "11": 1.27,
              "12": 1.81,
              "13": 10.20
            },
            "Uludağ EDAŞ": {
              "1": 0.00,
              "2": 0.00,
              "3": 0.00,
              "4": 0.00,
              "5": 0.00,
              "6": 0.00,
              "7": 0.00,
              "8": 0.00,
              "9": 0.00,
              "10": 0.00,
              "11": 0.00,
              "12": 0.00,
              "13": 9.55
            },
            "Meram EDAŞ": {
              "1": 0.59,
              "2": 0.30,
              "3": 0.71,
              "4": 0.80,
              "5": 0.80,
              "6": 0.00,
              "7": 1.10,
              "8": 0.79,
              "9": 0.61,
              "10": 0.48,
              "11": 0.81,
              "12": 0.56,
              "13": 7.54
            },
            "Ayedaş": {
              "1": 0.54,
              "2": 0.50,
              "3": 0.41,
              "4": 0.48,
              "5": 0.58,
              "6": 0.64,
              "7": 0.49,
              "8": 0.47,
              "9": 0.45,
              "10": 0.56,
              "11": 0.57,
              "12": 0.57,
              "13": 6.25
            },
            "Boğaziçi EDAŞ": {
              "1": 0.31,
              "2": 0.25,
              "3": 0.24,
              "4": 0.22,
              "5": 0.27,
              "6": 0.36,
              "7": 0.48,
              "8": 0.63,
              "9": 0.78,
              "10": 0.98,
              "11": 0.90,
              "12": 0.67,
              "13": 6.08
            },
            "Kayseri ve Civarı EDAŞ": {
              "1": 0.34,
              "2": 0.20,
              "3": 0.61,
              "4": 0.76,
              "5": 0.71,
              "6": 1.07,
              "7": 0.71,
              "8": 0.52,
              "9": 0.38,
              "10": 0.00,
              "11": 0.00,
              "12": 0.00,
              "13": 5.30
            },
            "Osmangazi EDAŞ": {
              "1": 0.00,
              "2": 0.00,
              "3": 0.00,
              "4": 0.00,
              "5": 0.00,
              "6": 0.00,
              "7": 0.00,
              "8": 0.00,
              "9": 0.00,
              "10": 0.00,
              "11": 0.00,
              "12": 0.00,
              "13": 0.00
            },
            "Vangölü EDAŞ": {
              "1": 0.00,
              "2": 0.00,
              "3": 0.00,
              "4": 0.00,
              "5": 0.00,
              "6": 0.00,
              "7": 0.00,
              "8": 0.00,
              "9": 0.00,
              "10": 0.00,
              "11": 0.00,
              "12": 0.00,
              "13": 0.00
            }
          };
          //console.log("isletme",navbarisletmecount)
        //  console.log("bolge",navbarbolgecount)
       
        //  const [PreviusSaidiData22,SetSPreviusSaidiData22]=useState([0,0,0,0,0,0,0,0,0,0,0,0]);
          //console.log("tab from data",fromtabdata)
// n'den n + 11'e kadar değerleri okuyup diziye ekleyen kod
 
const [currentYear, setCurrentYear] = useState(2025);
const [currentDataSaidi, setCurrentDataSaidi] = useState(electricityDataSaidi2025);
const [currentDataSaifi, setCurrentDataSaifi] = useState(electricityDataSaifi2025);

 // Butona tıklanınca yapılacak işlem
 const handleToggleData = () => {
  if (currentYear === 2024) {
    setCurrentYear(2025);
    setCurrentDataSaidi(electricityDataSaidi2025);
    setCurrentDataSaifi(electricityDataSaifi2025)
  } else {
    setCurrentYear(2024);
    setCurrentDataSaidi(electricityDataSaidi24);
    setCurrentDataSaifi(electricityDataSaifi24)
  }
};

 

 
    
    
 
      
            
   
    return (
    
        <div className='manin-container'>
         
           
          
            <div >
     
            </div>
          
    
    <div className="grid-containerEDAS">
               {/*   */}       
               <div className="chart">
               
     
   <div  style={{ 
          display: 'flex', 
          justifyContent: 'flex-end', 
          alignItems: 'center', 
          height: '50px', // örnek sabit yükseklik
          marginBottom: '10px' 
        }}>
        <Button variant="contained" onClick={handleToggleData}>
          {currentYear === 2024 ? "2025 Verisini Göster" : "2024 Verisini Göster"}
        </Button>
      </div>
      <ApexChartEdas  
   
        chartId={1}
       width={1400} 
       edaslarSaidiOrSaifi={currentDataSaidi}  
        type="saidi"  
        title={`${currentYear} YILI EDAŞ SAİDİ VERİLERİ`}
       X_axis={categories_Aylik}  />
   
      { /* <div style={{marginBottom:'15px'}}>
     <ApaxChartSelect chartId={1} onSendMessage={handleMessage1} />
     </div> */}
   </div> 
 
    <div className="chart">
   

    <div  style={{ 
          display: 'flex', 
          justifyContent: 'flex-end', 
          alignItems: 'center', 
          height: '50px', // örnek sabit yükseklik
          marginBottom: '10px' 
        }}>
        <Button variant="contained" onClick={handleToggleData}>
          {currentYear === 2024 ? "2025 Verisini Göster" : "2024 Verisini Göster"}
        </Button>
      </div>
      <ApexChartEdas  
   
        chartId={1}
       width={1400} 
       edaslarSaidiOrSaifi={currentDataSaifi}  
        type="saifi"  
        title={`${currentYear} YILI EDAŞ SAİFİ VERİLERİ`}
       X_axis={categories_Aylik}  />
   
 
{ /* <div style={{marginBottom:'15px'}}>
<ApaxChartSelect chartId={1} onSendMessage={handleMessage2} />
</div> */}
    </div>
         
          </div> 
        
        
          
    
      
          
        </div>
    
    
    
    
    
    
      );



}