import React, { createContext, useContext, useState } from 'react';


// Veri yapısını oluşturan initial state
const initialState = {
  ///AYLARR
  
    1: {
     1: {name:"ACİPAYAM isletme" ,SAİDİ:18.99, SAİFİ: 0.85,Ort_OG_Ariza_GidermeSuresi:0,Ort_AG_Ariza_GidermeSuresi:0,toplam_uzun_og_ariza_sayisi:0,toplam_uzun_ag_ariza_sayisi:0,toplam__kisa_og_ariza_sayisi:0 },
     2: {name: "AYDİN MERKEZ isletme",SAİDİ:52.56, SAİFİ:1.34,Ort_OG_Ariza_GidermeSuresi:0,Ort_AG_Ariza_GidermeSuresi:0,toplam_uzun_og_ariza_sayisi:0,toplam_uzun_ag_ariza_sayisi:0,toplam__kisa_og_ariza_sayisi:0 },
     3: {name:"BODRUM isletme",SAİDİ: 80.61, SAİFİ: 1.54,Ort_OG_Ariza_GidermeSuresi:0,Ort_AG_Ariza_GidermeSuresi:0,toplam_uzun_og_ariza_sayisi:0,toplam_uzun_ag_ariza_sayisi:0,toplam__kisa_og_ariza_sayisi:0 },
     4: {name: "CİNE isletme",SAİDİ:14.42, SAİFİ: 0.51,Ort_OG_Ariza_GidermeSuresi:0,Ort_AG_Ariza_GidermeSuresi:0,toplam_uzun_og_ariza_sayisi:0,toplam_uzun_ag_ariza_sayisi:0,toplam__kisa_og_ariza_sayisi:0 },
     5: {name:"CİVRİL isletme", SAİDİ: 9.29, SAİFİ: 0.31,Ort_OG_Ariza_GidermeSuresi:0,Ort_AG_Ariza_GidermeSuresi:0,toplam_uzun_og_ariza_sayisi:0,toplam_uzun_ag_ariza_sayisi:0,toplam__kisa_og_ariza_sayisi:0 },
     6: {name:"DENİZLİ MERKEZ isletme", SAİDİ:8.61, SAİFİ: 0.24,Ort_OG_Ariza_GidermeSuresi:0,Ort_AG_Ariza_GidermeSuresi:0,toplam_uzun_og_ariza_sayisi:0,toplam_uzun_ag_ariza_sayisi:0,toplam__kisa_og_ariza_sayisi:0 },
     7: { name: "DİDİM isletme", SAİDİ:119.92, SAİFİ: 1.29,Ort_OG_Ariza_GidermeSuresi:0,Ort_AG_Ariza_GidermeSuresi:0,toplam_uzun_og_ariza_sayisi:0,toplam_uzun_ag_ariza_sayisi:0,toplam__kisa_og_ariza_sayisi:0 },
     8: {name:"FETHİYE isletme", SAİDİ:74.98, SAİFİ: 2.17,Ort_OG_Ariza_GidermeSuresi:0,Ort_AG_Ariza_GidermeSuresi:0,toplam_uzun_og_ariza_sayisi:0,toplam_uzun_ag_ariza_sayisi:0,toplam__kisa_og_ariza_sayisi:0 },  
     9:{ name: "KUSADASİ isletme", SAİDİ:28.77, SAİFİ: 0.5,Ort_OG_Ariza_GidermeSuresi:0,Ort_AG_Ariza_GidermeSuresi:0,toplam_uzun_og_ariza_sayisi:0,toplam_uzun_ag_ariza_sayisi:0,toplam__kisa_og_ariza_sayisi:0 },
    10:{ name:"MARMARİS isletme", SAİDİ:73.96, SAİFİ: 1.55,Ort_OG_Ariza_GidermeSuresi:0,Ort_AG_Ariza_GidermeSuresi:0,toplam_uzun_og_ariza_sayisi:0,toplam_uzun_ag_ariza_sayisi:0,toplam__kisa_og_ariza_sayisi:0 },
    11:{  name:"MİLAS isletme", SAİDİ:0, SAİFİ: 0,Ort_OG_Ariza_GidermeSuresi:0,Ort_AG_Ariza_GidermeSuresi:0,toplam_uzun_og_ariza_sayisi:0,toplam_uzun_ag_ariza_sayisi:0,toplam__kisa_og_ariza_sayisi:0 },
    12:{ name:"MUGLA MERKEZ isletme", SAİDİ:91.93, SAİFİ: 2.54,Ort_OG_Ariza_GidermeSuresi:0,Ort_AG_Ariza_GidermeSuresi:0,toplam_uzun_og_ariza_sayisi:0,toplam_uzun_ag_ariza_sayisi:0,toplam__kisa_og_ariza_sayisi:0 },
    13:{ name :"NAZİLLİ isletme", SAİDİ:13.35, SAİFİ:  0.38,Ort_OG_Ariza_GidermeSuresi:0,Ort_AG_Ariza_GidermeSuresi:0,toplam_uzun_og_ariza_sayisi:0,toplam_uzun_ag_ariza_sayisi:0,toplam__kisa_og_ariza_sayisi:0 },
    14:{ name: "ORTACA isletme",SAİDİ:27.01, SAİFİ: 0.95,Ort_OG_Ariza_GidermeSuresi:0,Ort_AG_Ariza_GidermeSuresi:0,toplam_uzun_og_ariza_sayisi:0,toplam_uzun_ag_ariza_sayisi:0,toplam__kisa_og_ariza_sayisi:0 },
    15:{ name:"SARAYKOY isletme", SAİDİ:12.83, SAİFİ: 0.4,Ort_OG_Ariza_GidermeSuresi:0,Ort_AG_Ariza_GidermeSuresi:0,toplam_uzun_og_ariza_sayisi:0,toplam_uzun_ag_ariza_sayisi:0,toplam__kisa_og_ariza_sayisi:0 },
    16:{ name:"SOKE isletme", SAİDİ:126.22, SAİFİ: 0.93,Ort_OG_Ariza_GidermeSuresi:0,Ort_AG_Ariza_GidermeSuresi:0,toplam_uzun_og_ariza_sayisi:0,toplam_uzun_ag_ariza_sayisi:0,toplam__kisa_og_ariza_sayisi:0 },
    },
    2: {
     1: {name:"ACİPAYAM isletme" ,SAİDİ:0, SAİFİ: 0,Ort_OG_Ariza_GidermeSuresi:0,Ort_AG_Ariza_GidermeSuresi:0,toplam_uzun_og_ariza_sayisi:0,toplam_uzun_ag_ariza_sayisi:0,toplam__kisa_og_ariza_sayisi:0 },
     2:{name: "AYDİN MERKEZ isletme", SAİDİ:0, SAİFİ: 0,Ort_OG_Ariza_GidermeSuresi:0,Ort_AG_Ariza_GidermeSuresi:0,toplam_uzun_og_ariza_sayisi:0,toplam_uzun_ag_ariza_sayisi:0,toplam__kisa_og_ariza_sayisi:0 },
     3:{name:"BODRUM isletme",SAİDİ:0, SAİFİ: 0,Ort_OG_Ariza_GidermeSuresi:0,Ort_AG_Ariza_GidermeSuresi:0,toplam_uzun_og_ariza_sayisi:0,toplam_uzun_ag_ariza_sayisi:0,toplam__kisa_og_ariza_sayisi:0 },
     4:{name: "CİNE isletme",SAİDİ:0, SAİFİ: 0,Ort_OG_Ariza_GidermeSuresi:0,Ort_AG_Ariza_GidermeSuresi:0,toplam_uzun_og_ariza_sayisi:0,toplam_uzun_ag_ariza_sayisi:0,toplam__kisa_og_ariza_sayisi:0 },
     5: {name:"CİVRİL isletme", SAİDİ:0, SAİFİ: 0,Ort_OG_Ariza_GidermeSuresi:0,Ort_AG_Ariza_GidermeSuresi:0,toplam_uzun_og_ariza_sayisi:0,toplam_uzun_ag_ariza_sayisi:0,toplam__kisa_og_ariza_sayisi:0 },
     6: {name:"DENİZLİ MERKEZ isletme", SAİDİ:0, SAİFİ: 0,Ort_OG_Ariza_GidermeSuresi:0,Ort_AG_Ariza_GidermeSuresi:0,toplam_uzun_og_ariza_sayisi:0,toplam_uzun_ag_ariza_sayisi:0,toplam__kisa_og_ariza_sayisi:0 },
     7:{ name: "DİDİM isletme", SAİDİ:0, SAİFİ: 0,Ort_OG_Ariza_GidermeSuresi:0,Ort_AG_Ariza_GidermeSuresi:0,toplam_uzun_og_ariza_sayisi:0,toplam_uzun_ag_ariza_sayisi:0,toplam__kisa_og_ariza_sayisi:0 },
     8:{name:"FETHİYE isletme", SAİDİ:0, SAİFİ: 0,Ort_OG_Ariza_GidermeSuresi:0,Ort_AG_Ariza_GidermeSuresi:0,toplam_uzun_og_ariza_sayisi:0,toplam_uzun_ag_ariza_sayisi:0,toplam__kisa_og_ariza_sayisi:0 },  
     9:{ name: "KUSADASİ isletme", SAİDİ:0, SAİFİ: 0,Ort_OG_Ariza_GidermeSuresi:0,Ort_AG_Ariza_GidermeSuresi:0,toplam_uzun_og_ariza_sayisi:0,toplam_uzun_ag_ariza_sayisi:0,toplam__kisa_og_ariza_sayisi:0 },
    10:{ name:"MARMARİS isletme", SAİDİ:0, SAİFİ: 0,Ort_OG_Ariza_GidermeSuresi:0,Ort_AG_Ariza_GidermeSuresi:0,toplam_uzun_og_ariza_sayisi:0,toplam_uzun_ag_ariza_sayisi:0,toplam__kisa_og_ariza_sayisi:0 },
    11:{  name:"MİLAS isletme", SAİDİ:0, SAİFİ: 0,Ort_OG_Ariza_GidermeSuresi:0,Ort_AG_Ariza_GidermeSuresi:0,toplam_uzun_og_ariza_sayisi:0,toplam_uzun_ag_ariza_sayisi:0,toplam__kisa_og_ariza_sayisi:0 },
    12:{ name:"MUGLA MERKEZ isletme", SAİDİ:0, SAİFİ: 0,Ort_OG_Ariza_GidermeSuresi:0,Ort_AG_Ariza_GidermeSuresi:0,toplam_uzun_og_ariza_sayisi:0,toplam_uzun_ag_ariza_sayisi:0,toplam__kisa_og_ariza_sayisi:0 },
    13:{ name :"NAZİLLİ isletme", SAİDİ:0, SAİFİ: 0,Ort_OG_Ariza_GidermeSuresi:0,Ort_AG_Ariza_GidermeSuresi:0,toplam_uzun_og_ariza_sayisi:0,toplam_uzun_ag_ariza_sayisi:0,toplam__kisa_og_ariza_sayisi:0 },
    14:{ name: "ORTACA isletme",SAİDİ:0, SAİFİ: 0,Ort_OG_Ariza_GidermeSuresi:0,Ort_AG_Ariza_GidermeSuresi:0,toplam_uzun_og_ariza_sayisi:0,toplam_uzun_ag_ariza_sayisi:0,toplam__kisa_og_ariza_sayisi:0 },
    15:{ name:"SARAYKOY isletme", SAİDİ:0, SAİFİ: 0,Ort_OG_Ariza_GidermeSuresi:0,Ort_AG_Ariza_GidermeSuresi:0,toplam_uzun_og_ariza_sayisi:0,toplam_uzun_ag_ariza_sayisi:0,toplam__kisa_og_ariza_sayisi:0 },
    16:{ name:"SOKE isletme", SAİDİ:0, SAİFİ: 0,Ort_OG_Ariza_GidermeSuresi:0,Ort_AG_Ariza_GidermeSuresi:0,toplam_uzun_og_ariza_sayisi:0,toplam_uzun_ag_ariza_sayisi:0,toplam__kisa_og_ariza_sayisi:0 },
    },
    3: {
     1:  {name:"ACİPAYAM isletme" ,SAİDİ:0, SAİFİ: 0,Ort_OG_Ariza_GidermeSuresi:0,Ort_AG_Ariza_GidermeSuresi:0,toplam_uzun_og_ariza_sayisi:0,toplam_uzun_ag_ariza_sayisi:0,toplam__kisa_og_ariza_sayisi:0 },
     2 : {name: "AYDİN MERKEZ isletme", SAİDİ:0, SAİFİ: 0,Ort_OG_Ariza_GidermeSuresi:0,Ort_AG_Ariza_GidermeSuresi:0,toplam_uzun_og_ariza_sayisi:0,toplam_uzun_ag_ariza_sayisi:0,toplam__kisa_og_ariza_sayisi:0 },
     3:  {name:"BODRUM isletme",SAİDİ:0, SAİFİ: 0,Ort_OG_Ariza_GidermeSuresi:0,Ort_AG_Ariza_GidermeSuresi:0,toplam_uzun_og_ariza_sayisi:0,toplam_uzun_ag_ariza_sayisi:0,toplam__kisa_og_ariza_sayisi:0 },
     4: {name: "CİNE isletme",SAİDİ:0, SAİFİ: 0,Ort_OG_Ariza_GidermeSuresi:0,Ort_AG_Ariza_GidermeSuresi:0,toplam_uzun_og_ariza_sayisi:0,toplam_uzun_ag_ariza_sayisi:0,toplam__kisa_og_ariza_sayisi:0 },
     5: {name:"CİVRİL isletme", SAİDİ:0, SAİFİ: 0,Ort_OG_Ariza_GidermeSuresi:0,Ort_AG_Ariza_GidermeSuresi:0,toplam_uzun_og_ariza_sayisi:0,toplam_uzun_ag_ariza_sayisi:0,toplam__kisa_og_ariza_sayisi:0 },
     6: {name:"DENİZLİ MERKEZ isletme", SAİDİ:0, SAİFİ: 0,Ort_OG_Ariza_GidermeSuresi:0,Ort_AG_Ariza_GidermeSuresi:0,toplam_uzun_og_ariza_sayisi:0,toplam_uzun_ag_ariza_sayisi:0,toplam__kisa_og_ariza_sayisi:0 },
     7:{ name: "DİDİM isletme", SAİDİ:0, SAİFİ: 0,Ort_OG_Ariza_GidermeSuresi:0,Ort_AG_Ariza_GidermeSuresi:0,toplam_uzun_og_ariza_sayisi:0,toplam_uzun_ag_ariza_sayisi:0,toplam__kisa_og_ariza_sayisi:0 },
     8:{name:"FETHİYE isletme", SAİDİ:0, SAİFİ: 0,Ort_OG_Ariza_GidermeSuresi:0,Ort_AG_Ariza_GidermeSuresi:0,toplam_uzun_og_ariza_sayisi:0,toplam_uzun_ag_ariza_sayisi:0,toplam__kisa_og_ariza_sayisi:0 },  
     9:{ name: "KUSADASİ isletme", SAİDİ:0, SAİFİ: 0,Ort_OG_Ariza_GidermeSuresi:0,Ort_AG_Ariza_GidermeSuresi:0,toplam_uzun_og_ariza_sayisi:0,toplam_uzun_ag_ariza_sayisi:0,toplam__kisa_og_ariza_sayisi:0 },
    10:{ name:"MARMARİS isletme", SAİDİ:0, SAİFİ: 0,Ort_OG_Ariza_GidermeSuresi:0,Ort_AG_Ariza_GidermeSuresi:0,toplam_uzun_og_ariza_sayisi:0,toplam_uzun_ag_ariza_sayisi:0,toplam__kisa_og_ariza_sayisi:0 },
    11:{  name:"MİLAS isletme", SAİDİ:0, SAİFİ: 0,Ort_OG_Ariza_GidermeSuresi:0,Ort_AG_Ariza_GidermeSuresi:0,toplam_uzun_og_ariza_sayisi:0,toplam_uzun_ag_ariza_sayisi:0,toplam__kisa_og_ariza_sayisi:0 },
    12:{ name:"MUGLA MERKEZ isletme", SAİDİ:0, SAİFİ: 0,Ort_OG_Ariza_GidermeSuresi:0,Ort_AG_Ariza_GidermeSuresi:0,toplam_uzun_og_ariza_sayisi:0,toplam_uzun_ag_ariza_sayisi:0,toplam__kisa_og_ariza_sayisi:0 },
    13:{ name :"NAZİLLİ isletme", SAİDİ:0, SAİFİ: 0,Ort_OG_Ariza_GidermeSuresi:0,Ort_AG_Ariza_GidermeSuresi:0,toplam_uzun_og_ariza_sayisi:0,toplam_uzun_ag_ariza_sayisi:0,toplam__kisa_og_ariza_sayisi:0 },
    14:{ name: "ORTACA isletme",SAİDİ:0, SAİFİ: 0,Ort_OG_Ariza_GidermeSuresi:0,Ort_AG_Ariza_GidermeSuresi:0,toplam_uzun_og_ariza_sayisi:0,toplam_uzun_ag_ariza_sayisi:0,toplam__kisa_og_ariza_sayisi:0 },
    15:{ name:"SARAYKOY isletme", SAİDİ:0, SAİFİ: 0,Ort_OG_Ariza_GidermeSuresi:0,Ort_AG_Ariza_GidermeSuresi:0,toplam_uzun_og_ariza_sayisi:0,toplam_uzun_ag_ariza_sayisi:0,toplam__kisa_og_ariza_sayisi:0 },
    16:{ name:"SOKE isletme", SAİDİ:0, SAİFİ: 0,Ort_OG_Ariza_GidermeSuresi:0,Ort_AG_Ariza_GidermeSuresi:0,toplam_uzun_og_ariza_sayisi:0,toplam_uzun_ag_ariza_sayisi:0,toplam__kisa_og_ariza_sayisi:0 },
    },
    4: {
     1:  {name:"ACİPAYAM isletme" ,SAİDİ:0, SAİFİ: 0,Ort_OG_Ariza_GidermeSuresi:0,Ort_AG_Ariza_GidermeSuresi:0,toplam_uzun_og_ariza_sayisi:0,toplam_uzun_ag_ariza_sayisi:0,toplam__kisa_og_ariza_sayisi:0 },
     2 : {name: "AYDİN MERKEZ isletme", SAİDİ:0, SAİFİ: 0,Ort_OG_Ariza_GidermeSuresi:0,Ort_AG_Ariza_GidermeSuresi:0,toplam_uzun_og_ariza_sayisi:0,toplam_uzun_ag_ariza_sayisi:0,toplam__kisa_og_ariza_sayisi:0 },
     3:  {name:"BODRUM isletme",SAİDİ:0, SAİFİ: 0,Ort_OG_Ariza_GidermeSuresi:0,Ort_AG_Ariza_GidermeSuresi:0,toplam_uzun_og_ariza_sayisi:0,toplam_uzun_ag_ariza_sayisi:0,toplam__kisa_og_ariza_sayisi:0 },
     4: {name: "CİNE isletme",SAİDİ:0, SAİFİ: 0,Ort_OG_Ariza_GidermeSuresi:0,Ort_AG_Ariza_GidermeSuresi:0,toplam_uzun_og_ariza_sayisi:0,toplam_uzun_ag_ariza_sayisi:0,toplam__kisa_og_ariza_sayisi:0 },
     5: {name:"CİVRİL isletme", SAİDİ:0, SAİFİ: 0,Ort_OG_Ariza_GidermeSuresi:0,Ort_AG_Ariza_GidermeSuresi:0,toplam_uzun_og_ariza_sayisi:0,toplam_uzun_ag_ariza_sayisi:0,toplam__kisa_og_ariza_sayisi:0 },
     6: {name:"DENİZLİ MERKEZ isletme", SAİDİ:0, SAİFİ: 0,Ort_OG_Ariza_GidermeSuresi:0,Ort_AG_Ariza_GidermeSuresi:0,toplam_uzun_og_ariza_sayisi:0,toplam_uzun_ag_ariza_sayisi:0,toplam__kisa_og_ariza_sayisi:0 },
     7:{ name: "DİDİM isletme", SAİDİ:0, SAİFİ: 0,Ort_OG_Ariza_GidermeSuresi:0,Ort_AG_Ariza_GidermeSuresi:0,toplam_uzun_og_ariza_sayisi:0,toplam_uzun_ag_ariza_sayisi:0,toplam__kisa_og_ariza_sayisi:0 },
     8:{name:"FETHİYE isletme", SAİDİ:0, SAİFİ: 0,Ort_OG_Ariza_GidermeSuresi:0,Ort_AG_Ariza_GidermeSuresi:0,toplam_uzun_og_ariza_sayisi:0,toplam_uzun_ag_ariza_sayisi:0,toplam__kisa_og_ariza_sayisi:0 },  
     9:{ name: "KUSADASİ isletme", SAİDİ:0, SAİFİ: 0,Ort_OG_Ariza_GidermeSuresi:0,Ort_AG_Ariza_GidermeSuresi:0,toplam_uzun_og_ariza_sayisi:0,toplam_uzun_ag_ariza_sayisi:0,toplam__kisa_og_ariza_sayisi:0 },
    10:{ name:"MARMARİS isletme", SAİDİ:0, SAİFİ: 0,Ort_OG_Ariza_GidermeSuresi:0,Ort_AG_Ariza_GidermeSuresi:0,toplam_uzun_og_ariza_sayisi:0,toplam_uzun_ag_ariza_sayisi:0,toplam__kisa_og_ariza_sayisi:0 },
    11:{  name:"MİLAS isletme", SAİDİ:0, SAİFİ: 0,Ort_OG_Ariza_GidermeSuresi:0,Ort_AG_Ariza_GidermeSuresi:0,toplam_uzun_og_ariza_sayisi:0,toplam_uzun_ag_ariza_sayisi:0,toplam__kisa_og_ariza_sayisi:0 },
    12:{ name:"MUGLA MERKEZ isletme", SAİDİ:0, SAİFİ: 0,Ort_OG_Ariza_GidermeSuresi:0,Ort_AG_Ariza_GidermeSuresi:0,toplam_uzun_og_ariza_sayisi:0,toplam_uzun_ag_ariza_sayisi:0,toplam__kisa_og_ariza_sayisi:0 },
    13:{ name :"NAZİLLİ isletme", SAİDİ:0, SAİFİ: 0,Ort_OG_Ariza_GidermeSuresi:0,Ort_AG_Ariza_GidermeSuresi:0,toplam_uzun_og_ariza_sayisi:0,toplam_uzun_ag_ariza_sayisi:0,toplam__kisa_og_ariza_sayisi:0 },
    14:{ name: "ORTACA isletme",SAİDİ:0, SAİFİ: 0,Ort_OG_Ariza_GidermeSuresi:0,Ort_AG_Ariza_GidermeSuresi:0,toplam_uzun_og_ariza_sayisi:0,toplam_uzun_ag_ariza_sayisi:0,toplam__kisa_og_ariza_sayisi:0 },
    15:{ name:"SARAYKOY isletme", SAİDİ:0, SAİFİ: 0,Ort_OG_Ariza_GidermeSuresi:0,Ort_AG_Ariza_GidermeSuresi:0,toplam_uzun_og_ariza_sayisi:0,toplam_uzun_ag_ariza_sayisi:0,toplam__kisa_og_ariza_sayisi:0 },
    16:{ name:"SOKE isletme", SAİDİ:0, SAİFİ: 0,Ort_OG_Ariza_GidermeSuresi:0,Ort_AG_Ariza_GidermeSuresi:0,toplam_uzun_og_ariza_sayisi:0,toplam_uzun_ag_ariza_sayisi:0,toplam__kisa_og_ariza_sayisi:0 },
    },
    5: {
     1:  {name:"ACİPAYAM isletme" ,SAİDİ:0, SAİFİ: 0,Ort_OG_Ariza_GidermeSuresi:0,Ort_AG_Ariza_GidermeSuresi:0,toplam_uzun_og_ariza_sayisi:0,toplam_uzun_ag_ariza_sayisi:0,toplam__kisa_og_ariza_sayisi:0 },
     2 : {name: "AYDİN MERKEZ isletme", SAİDİ:0, SAİFİ: 0,Ort_OG_Ariza_GidermeSuresi:0,Ort_AG_Ariza_GidermeSuresi:0,toplam_uzun_og_ariza_sayisi:0,toplam_uzun_ag_ariza_sayisi:0,toplam__kisa_og_ariza_sayisi:0 },
     3:  {name:"BODRUM isletme",SAİDİ:0, SAİFİ: 0,Ort_OG_Ariza_GidermeSuresi:0,Ort_AG_Ariza_GidermeSuresi:0,toplam_uzun_og_ariza_sayisi:0,toplam_uzun_ag_ariza_sayisi:0,toplam__kisa_og_ariza_sayisi:0 },
     4: {name: "CİNE isletme",SAİDİ:0, SAİFİ: 0,Ort_OG_Ariza_GidermeSuresi:0,Ort_AG_Ariza_GidermeSuresi:0,toplam_uzun_og_ariza_sayisi:0,toplam_uzun_ag_ariza_sayisi:0,toplam__kisa_og_ariza_sayisi:0 },
     5: {name:"CİVRİL isletme", SAİDİ:0, SAİFİ: 0,Ort_OG_Ariza_GidermeSuresi:0,Ort_AG_Ariza_GidermeSuresi:0,toplam_uzun_og_ariza_sayisi:0,toplam_uzun_ag_ariza_sayisi:0,toplam__kisa_og_ariza_sayisi:0 },
     6: {name:"DENİZLİ MERKEZ isletme", SAİDİ:0, SAİFİ: 0,Ort_OG_Ariza_GidermeSuresi:0,Ort_AG_Ariza_GidermeSuresi:0,toplam_uzun_og_ariza_sayisi:0,toplam_uzun_ag_ariza_sayisi:0,toplam__kisa_og_ariza_sayisi:0 },
     7:{ name: "DİDİM isletme", SAİDİ:0, SAİFİ: 0,Ort_OG_Ariza_GidermeSuresi:0,Ort_AG_Ariza_GidermeSuresi:0,toplam_uzun_og_ariza_sayisi:0,toplam_uzun_ag_ariza_sayisi:0,toplam__kisa_og_ariza_sayisi:0 },
     8:{name:"FETHİYE isletme", SAİDİ:0, SAİFİ: 0,Ort_OG_Ariza_GidermeSuresi:0,Ort_AG_Ariza_GidermeSuresi:0,toplam_uzun_og_ariza_sayisi:0,toplam_uzun_ag_ariza_sayisi:0,toplam__kisa_og_ariza_sayisi:0 },  
     9:{ name: "KUSADASİ isletme", SAİDİ:0, SAİFİ: 0,Ort_OG_Ariza_GidermeSuresi:0,Ort_AG_Ariza_GidermeSuresi:0,toplam_uzun_og_ariza_sayisi:0,toplam_uzun_ag_ariza_sayisi:0,toplam__kisa_og_ariza_sayisi:0 },
    10:{ name:"MARMARİS isletme", SAİDİ:0, SAİFİ: 0,Ort_OG_Ariza_GidermeSuresi:0,Ort_AG_Ariza_GidermeSuresi:0,toplam_uzun_og_ariza_sayisi:0,toplam_uzun_ag_ariza_sayisi:0,toplam__kisa_og_ariza_sayisi:0 },
    11:{  name:"MİLAS isletme", SAİDİ:0, SAİFİ: 0,Ort_OG_Ariza_GidermeSuresi:0,Ort_AG_Ariza_GidermeSuresi:0,toplam_uzun_og_ariza_sayisi:0,toplam_uzun_ag_ariza_sayisi:0,toplam__kisa_og_ariza_sayisi:0 },
    12:{ name:"MUGLA MERKEZ isletme", SAİDİ:0, SAİFİ: 0,Ort_OG_Ariza_GidermeSuresi:0,Ort_AG_Ariza_GidermeSuresi:0,toplam_uzun_og_ariza_sayisi:0,toplam_uzun_ag_ariza_sayisi:0,toplam__kisa_og_ariza_sayisi:0 },
    13:{ name :"NAZİLLİ isletme", SAİDİ:0, SAİFİ: 0,Ort_OG_Ariza_GidermeSuresi:0,Ort_AG_Ariza_GidermeSuresi:0,toplam_uzun_og_ariza_sayisi:0,toplam_uzun_ag_ariza_sayisi:0,toplam__kisa_og_ariza_sayisi:0 },
    14:{ name: "ORTACA isletme",SAİDİ:0, SAİFİ: 0,Ort_OG_Ariza_GidermeSuresi:0,Ort_AG_Ariza_GidermeSuresi:0,toplam_uzun_og_ariza_sayisi:0,toplam_uzun_ag_ariza_sayisi:0,toplam__kisa_og_ariza_sayisi:0 },
    15:{ name:"SARAYKOY isletme", SAİDİ:0, SAİFİ: 0,Ort_OG_Ariza_GidermeSuresi:0,Ort_AG_Ariza_GidermeSuresi:0,toplam_uzun_og_ariza_sayisi:0,toplam_uzun_ag_ariza_sayisi:0,toplam__kisa_og_ariza_sayisi:0 },
    16:{ name:"SOKE isletme", SAİDİ:0, SAİFİ: 0,Ort_OG_Ariza_GidermeSuresi:0,Ort_AG_Ariza_GidermeSuresi:0,toplam_uzun_og_ariza_sayisi:0,toplam_uzun_ag_ariza_sayisi:0,toplam__kisa_og_ariza_sayisi:0 },
    },
    6: {
     1:  {name:"ACİPAYAM isletme" ,SAİDİ:0, SAİFİ: 0,Ort_OG_Ariza_GidermeSuresi:0,Ort_AG_Ariza_GidermeSuresi:0,toplam_uzun_og_ariza_sayisi:0,toplam_uzun_ag_ariza_sayisi:0,toplam__kisa_og_ariza_sayisi:0 },
     2 : {name: "AYDİN MERKEZ isletme", SAİDİ:0, SAİFİ: 0,Ort_OG_Ariza_GidermeSuresi:0,Ort_AG_Ariza_GidermeSuresi:0,toplam_uzun_og_ariza_sayisi:0,toplam_uzun_ag_ariza_sayisi:0,toplam__kisa_og_ariza_sayisi:0 },
     3:  {name:"BODRUM isletme",SAİDİ:0, SAİFİ: 0,Ort_OG_Ariza_GidermeSuresi:0,Ort_AG_Ariza_GidermeSuresi:0,toplam_uzun_og_ariza_sayisi:0,toplam_uzun_ag_ariza_sayisi:0,toplam__kisa_og_ariza_sayisi:0 },
     4: {name: "CİNE isletme",SAİDİ:0, SAİFİ: 0,Ort_OG_Ariza_GidermeSuresi:0,Ort_AG_Ariza_GidermeSuresi:0,toplam_uzun_og_ariza_sayisi:0,toplam_uzun_ag_ariza_sayisi:0,toplam__kisa_og_ariza_sayisi:0 },
     5: {name:"CİVRİL isletme", SAİDİ:0, SAİFİ: 0,Ort_OG_Ariza_GidermeSuresi:0,Ort_AG_Ariza_GidermeSuresi:0,toplam_uzun_og_ariza_sayisi:0,toplam_uzun_ag_ariza_sayisi:0,toplam__kisa_og_ariza_sayisi:0 },
     6: {name:"DENİZLİ MERKEZ isletme", SAİDİ:0, SAİFİ: 0,Ort_OG_Ariza_GidermeSuresi:0,Ort_AG_Ariza_GidermeSuresi:0,toplam_uzun_og_ariza_sayisi:0,toplam_uzun_ag_ariza_sayisi:0,toplam__kisa_og_ariza_sayisi:0 },
     7:{ name: "DİDİM isletme", SAİDİ:0, SAİFİ: 0,Ort_OG_Ariza_GidermeSuresi:0,Ort_AG_Ariza_GidermeSuresi:0,toplam_uzun_og_ariza_sayisi:0,toplam_uzun_ag_ariza_sayisi:0,toplam__kisa_og_ariza_sayisi:0 },
     8:{name:"FETHİYE isletme", SAİDİ:0, SAİFİ: 0,Ort_OG_Ariza_GidermeSuresi:0,Ort_AG_Ariza_GidermeSuresi:0,toplam_uzun_og_ariza_sayisi:0,toplam_uzun_ag_ariza_sayisi:0,toplam__kisa_og_ariza_sayisi:0 },  
     9:{ name: "KUSADASİ isletme", SAİDİ:0, SAİFİ: 0,Ort_OG_Ariza_GidermeSuresi:0,Ort_AG_Ariza_GidermeSuresi:0,toplam_uzun_og_ariza_sayisi:0,toplam_uzun_ag_ariza_sayisi:0,toplam__kisa_og_ariza_sayisi:0 },
    10:{ name:"MARMARİS isletme", SAİDİ:0, SAİFİ: 0,Ort_OG_Ariza_GidermeSuresi:0,Ort_AG_Ariza_GidermeSuresi:0,toplam_uzun_og_ariza_sayisi:0,toplam_uzun_ag_ariza_sayisi:0,toplam__kisa_og_ariza_sayisi:0 },
    11:{  name:"MİLAS isletme", SAİDİ:0, SAİFİ: 0,Ort_OG_Ariza_GidermeSuresi:0,Ort_AG_Ariza_GidermeSuresi:0,toplam_uzun_og_ariza_sayisi:0,toplam_uzun_ag_ariza_sayisi:0,toplam__kisa_og_ariza_sayisi:0 },
    12:{ name:"MUGLA MERKEZ isletme", SAİDİ:0, SAİFİ: 0,Ort_OG_Ariza_GidermeSuresi:0,Ort_AG_Ariza_GidermeSuresi:0,toplam_uzun_og_ariza_sayisi:0,toplam_uzun_ag_ariza_sayisi:0,toplam__kisa_og_ariza_sayisi:0 },
    13:{ name :"NAZİLLİ isletme", SAİDİ:0, SAİFİ: 0,Ort_OG_Ariza_GidermeSuresi:0,Ort_AG_Ariza_GidermeSuresi:0,toplam_uzun_og_ariza_sayisi:0,toplam_uzun_ag_ariza_sayisi:0,toplam__kisa_og_ariza_sayisi:0 },
    14:{ name: "ORTACA isletme",SAİDİ:0, SAİFİ: 0,Ort_OG_Ariza_GidermeSuresi:0,Ort_AG_Ariza_GidermeSuresi:0,toplam_uzun_og_ariza_sayisi:0,toplam_uzun_ag_ariza_sayisi:0,toplam__kisa_og_ariza_sayisi:0 },
    15:{ name:"SARAYKOY isletme", SAİDİ:0, SAİFİ: 0,Ort_OG_Ariza_GidermeSuresi:0,Ort_AG_Ariza_GidermeSuresi:0,toplam_uzun_og_ariza_sayisi:0,toplam_uzun_ag_ariza_sayisi:0,toplam__kisa_og_ariza_sayisi:0 },
    16:{ name:"SOKE isletme", SAİDİ:0, SAİFİ: 0,Ort_OG_Ariza_GidermeSuresi:0,Ort_AG_Ariza_GidermeSuresi:0,toplam_uzun_og_ariza_sayisi:0,toplam_uzun_ag_ariza_sayisi:0,toplam__kisa_og_ariza_sayisi:0 },
    },
    7: {
     1:  {name:"ACİPAYAM isletme" ,SAİDİ:0, SAİFİ: 0,Ort_OG_Ariza_GidermeSuresi:0,Ort_AG_Ariza_GidermeSuresi:0,toplam_uzun_og_ariza_sayisi:0,toplam_uzun_ag_ariza_sayisi:0,toplam__kisa_og_ariza_sayisi:0 },
     2 : {name: "AYDİN MERKEZ isletme", SAİDİ:0, SAİFİ: 0,Ort_OG_Ariza_GidermeSuresi:0,Ort_AG_Ariza_GidermeSuresi:0,toplam_uzun_og_ariza_sayisi:0,toplam_uzun_ag_ariza_sayisi:0,toplam__kisa_og_ariza_sayisi:0 },
     3:  {name:"BODRUM isletme",SAİDİ:0, SAİFİ: 0,Ort_OG_Ariza_GidermeSuresi:0,Ort_AG_Ariza_GidermeSuresi:0,toplam_uzun_og_ariza_sayisi:0,toplam_uzun_ag_ariza_sayisi:0,toplam__kisa_og_ariza_sayisi:0 },
     4: {name: "CİNE isletme",SAİDİ:0, SAİFİ: 0,Ort_OG_Ariza_GidermeSuresi:0,Ort_AG_Ariza_GidermeSuresi:0,toplam_uzun_og_ariza_sayisi:0,toplam_uzun_ag_ariza_sayisi:0,toplam__kisa_og_ariza_sayisi:0 },
     5: {name:"CİVRİL isletme", SAİDİ:0, SAİFİ: 0,Ort_OG_Ariza_GidermeSuresi:0,Ort_AG_Ariza_GidermeSuresi:0,toplam_uzun_og_ariza_sayisi:0,toplam_uzun_ag_ariza_sayisi:0,toplam__kisa_og_ariza_sayisi:0 },
     6: {name:"DENİZLİ MERKEZ isletme", SAİDİ:0, SAİFİ: 0,Ort_OG_Ariza_GidermeSuresi:0,Ort_AG_Ariza_GidermeSuresi:0,toplam_uzun_og_ariza_sayisi:0,toplam_uzun_ag_ariza_sayisi:0,toplam__kisa_og_ariza_sayisi:0 },
     7:{ name: "DİDİM isletme", SAİDİ:0, SAİFİ: 0,Ort_OG_Ariza_GidermeSuresi:0,Ort_AG_Ariza_GidermeSuresi:0,toplam_uzun_og_ariza_sayisi:0,toplam_uzun_ag_ariza_sayisi:0,toplam__kisa_og_ariza_sayisi:0 },
     8:{name:"FETHİYE isletme", SAİDİ:0, SAİFİ: 0,Ort_OG_Ariza_GidermeSuresi:0,Ort_AG_Ariza_GidermeSuresi:0,toplam_uzun_og_ariza_sayisi:0,toplam_uzun_ag_ariza_sayisi:0,toplam__kisa_og_ariza_sayisi:0 },  
     9:{ name: "KUSADASİ isletme", SAİDİ:0, SAİFİ: 0,Ort_OG_Ariza_GidermeSuresi:0,Ort_AG_Ariza_GidermeSuresi:0,toplam_uzun_og_ariza_sayisi:0,toplam_uzun_ag_ariza_sayisi:0,toplam__kisa_og_ariza_sayisi:0 },
    10:{ name:"MARMARİS isletme", SAİDİ:0, SAİFİ: 0,Ort_OG_Ariza_GidermeSuresi:0,Ort_AG_Ariza_GidermeSuresi:0,toplam_uzun_og_ariza_sayisi:0,toplam_uzun_ag_ariza_sayisi:0,toplam__kisa_og_ariza_sayisi:0 },
    11:{  name:"MİLAS isletme", SAİDİ:0, SAİFİ: 0,Ort_OG_Ariza_GidermeSuresi:0,Ort_AG_Ariza_GidermeSuresi:0,toplam_uzun_og_ariza_sayisi:0,toplam_uzun_ag_ariza_sayisi:0,toplam__kisa_og_ariza_sayisi:0 },
    12:{ name:"MUGLA MERKEZ isletme", SAİDİ:0, SAİFİ: 0,Ort_OG_Ariza_GidermeSuresi:0,Ort_AG_Ariza_GidermeSuresi:0,toplam_uzun_og_ariza_sayisi:0,toplam_uzun_ag_ariza_sayisi:0,toplam__kisa_og_ariza_sayisi:0 },
    13:{ name :"NAZİLLİ isletme", SAİDİ:0, SAİFİ: 0,Ort_OG_Ariza_GidermeSuresi:0,Ort_AG_Ariza_GidermeSuresi:0,toplam_uzun_og_ariza_sayisi:0,toplam_uzun_ag_ariza_sayisi:0,toplam__kisa_og_ariza_sayisi:0 },
    14:{ name: "ORTACA isletme",SAİDİ:0, SAİFİ: 0,Ort_OG_Ariza_GidermeSuresi:0,Ort_AG_Ariza_GidermeSuresi:0,toplam_uzun_og_ariza_sayisi:0,toplam_uzun_ag_ariza_sayisi:0,toplam__kisa_og_ariza_sayisi:0 },
    15:{ name:"SARAYKOY isletme", SAİDİ:0, SAİFİ: 0,Ort_OG_Ariza_GidermeSuresi:0,Ort_AG_Ariza_GidermeSuresi:0,toplam_uzun_og_ariza_sayisi:0,toplam_uzun_ag_ariza_sayisi:0,toplam__kisa_og_ariza_sayisi:0 },
    16:{ name:"SOKE isletme", SAİDİ:0, SAİFİ: 0,Ort_OG_Ariza_GidermeSuresi:0,Ort_AG_Ariza_GidermeSuresi:0,toplam_uzun_og_ariza_sayisi:0,toplam_uzun_ag_ariza_sayisi:0,toplam__kisa_og_ariza_sayisi:0 },
    },
    8: {
     1:  {name:"ACİPAYAM isletme" ,SAİDİ:0, SAİFİ: 0,Ort_OG_Ariza_GidermeSuresi:0,Ort_AG_Ariza_GidermeSuresi:0,toplam_uzun_og_ariza_sayisi:0,toplam_uzun_ag_ariza_sayisi:0,toplam__kisa_og_ariza_sayisi:0 },
     2 : {name: "AYDİN MERKEZ isletme", SAİDİ:0, SAİFİ: 0,Ort_OG_Ariza_GidermeSuresi:0,Ort_AG_Ariza_GidermeSuresi:0,toplam_uzun_og_ariza_sayisi:0,toplam_uzun_ag_ariza_sayisi:0,toplam__kisa_og_ariza_sayisi:0 },
     3:  {name:"BODRUM isletme",SAİDİ:0, SAİFİ: 0,Ort_OG_Ariza_GidermeSuresi:0,Ort_AG_Ariza_GidermeSuresi:0,toplam_uzun_og_ariza_sayisi:0,toplam_uzun_ag_ariza_sayisi:0,toplam__kisa_og_ariza_sayisi:0 },
     4: {name: "CİNE isletme",SAİDİ:0, SAİFİ: 0,Ort_OG_Ariza_GidermeSuresi:0,Ort_AG_Ariza_GidermeSuresi:0,toplam_uzun_og_ariza_sayisi:0,toplam_uzun_ag_ariza_sayisi:0,toplam__kisa_og_ariza_sayisi:0 },
     5: {name:"CİVRİL isletme", SAİDİ:0, SAİFİ: 0,Ort_OG_Ariza_GidermeSuresi:0,Ort_AG_Ariza_GidermeSuresi:0,toplam_uzun_og_ariza_sayisi:0,toplam_uzun_ag_ariza_sayisi:0,toplam__kisa_og_ariza_sayisi:0 },
     6: {name:"DENİZLİ MERKEZ isletme", SAİDİ:0, SAİFİ: 0,Ort_OG_Ariza_GidermeSuresi:0,Ort_AG_Ariza_GidermeSuresi:0,toplam_uzun_og_ariza_sayisi:0,toplam_uzun_ag_ariza_sayisi:0,toplam__kisa_og_ariza_sayisi:0 },
     7:{ name: "DİDİM isletme", SAİDİ:0, SAİFİ: 0,Ort_OG_Ariza_GidermeSuresi:0,Ort_AG_Ariza_GidermeSuresi:0,toplam_uzun_og_ariza_sayisi:0,toplam_uzun_ag_ariza_sayisi:0,toplam__kisa_og_ariza_sayisi:0 },
     8:{name:"FETHİYE isletme", SAİDİ:0, SAİFİ: 0,Ort_OG_Ariza_GidermeSuresi:0,Ort_AG_Ariza_GidermeSuresi:0,toplam_uzun_og_ariza_sayisi:0,toplam_uzun_ag_ariza_sayisi:0,toplam__kisa_og_ariza_sayisi:0 },  
     9:{ name: "KUSADASİ isletme", SAİDİ:0, SAİFİ: 0,Ort_OG_Ariza_GidermeSuresi:0,Ort_AG_Ariza_GidermeSuresi:0,toplam_uzun_og_ariza_sayisi:0,toplam_uzun_ag_ariza_sayisi:0,toplam__kisa_og_ariza_sayisi:0 },
    10:{ name:"MARMARİS isletme", SAİDİ:0, SAİFİ: 0,Ort_OG_Ariza_GidermeSuresi:0,Ort_AG_Ariza_GidermeSuresi:0,toplam_uzun_og_ariza_sayisi:0,toplam_uzun_ag_ariza_sayisi:0,toplam__kisa_og_ariza_sayisi:0 },
    11:{  name:"MİLAS isletme", SAİDİ:0, SAİFİ: 0,Ort_OG_Ariza_GidermeSuresi:0,Ort_AG_Ariza_GidermeSuresi:0,toplam_uzun_og_ariza_sayisi:0,toplam_uzun_ag_ariza_sayisi:0,toplam__kisa_og_ariza_sayisi:0 },
    12:{ name:"MUGLA MERKEZ isletme", SAİDİ:0, SAİFİ: 0,Ort_OG_Ariza_GidermeSuresi:0,Ort_AG_Ariza_GidermeSuresi:0,toplam_uzun_og_ariza_sayisi:0,toplam_uzun_ag_ariza_sayisi:0,toplam__kisa_og_ariza_sayisi:0 },
    13:{ name :"NAZİLLİ isletme", SAİDİ:0, SAİFİ: 0,Ort_OG_Ariza_GidermeSuresi:0,Ort_AG_Ariza_GidermeSuresi:0,toplam_uzun_og_ariza_sayisi:0,toplam_uzun_ag_ariza_sayisi:0,toplam__kisa_og_ariza_sayisi:0 },
    14:{ name: "ORTACA isletme",SAİDİ:0, SAİFİ: 0,Ort_OG_Ariza_GidermeSuresi:0,Ort_AG_Ariza_GidermeSuresi:0,toplam_uzun_og_ariza_sayisi:0,toplam_uzun_ag_ariza_sayisi:0,toplam__kisa_og_ariza_sayisi:0 },
    15:{ name:"SARAYKOY isletme", SAİDİ:0, SAİFİ: 0,Ort_OG_Ariza_GidermeSuresi:0,Ort_AG_Ariza_GidermeSuresi:0,toplam_uzun_og_ariza_sayisi:0,toplam_uzun_ag_ariza_sayisi:0,toplam__kisa_og_ariza_sayisi:0 },
    16:{ name:"SOKE isletme", SAİDİ:0, SAİFİ: 0,Ort_OG_Ariza_GidermeSuresi:0,Ort_AG_Ariza_GidermeSuresi:0,toplam_uzun_og_ariza_sayisi:0,toplam_uzun_ag_ariza_sayisi:0,toplam__kisa_og_ariza_sayisi:0 },
    },
    9: {
     1:  {name:"ACİPAYAM isletme" ,SAİDİ:0, SAİFİ: 0,Ort_OG_Ariza_GidermeSuresi:0,Ort_AG_Ariza_GidermeSuresi:0,toplam_uzun_og_ariza_sayisi:0,toplam_uzun_ag_ariza_sayisi:0,toplam__kisa_og_ariza_sayisi:0 },
     2 : {name: "AYDİN MERKEZ isletme", SAİDİ:0, SAİFİ: 0,Ort_OG_Ariza_GidermeSuresi:0,Ort_AG_Ariza_GidermeSuresi:0,toplam_uzun_og_ariza_sayisi:0,toplam_uzun_ag_ariza_sayisi:0,toplam__kisa_og_ariza_sayisi:0 },
     3:  {name:"BODRUM isletme",SAİDİ:0, SAİFİ: 0,Ort_OG_Ariza_GidermeSuresi:0,Ort_AG_Ariza_GidermeSuresi:0,toplam_uzun_og_ariza_sayisi:0,toplam_uzun_ag_ariza_sayisi:0,toplam__kisa_og_ariza_sayisi:0 },
     4: {name: "CİNE isletme",SAİDİ:0, SAİFİ: 0,Ort_OG_Ariza_GidermeSuresi:0,Ort_AG_Ariza_GidermeSuresi:0,toplam_uzun_og_ariza_sayisi:0,toplam_uzun_ag_ariza_sayisi:0,toplam__kisa_og_ariza_sayisi:0 },
     5: {name:"CİVRİL isletme", SAİDİ:0, SAİFİ: 0,Ort_OG_Ariza_GidermeSuresi:0,Ort_AG_Ariza_GidermeSuresi:0,toplam_uzun_og_ariza_sayisi:0,toplam_uzun_ag_ariza_sayisi:0,toplam__kisa_og_ariza_sayisi:0 },
     6: {name:"DENİZLİ MERKEZ isletme", SAİDİ:0, SAİFİ: 0,Ort_OG_Ariza_GidermeSuresi:0,Ort_AG_Ariza_GidermeSuresi:0,toplam_uzun_og_ariza_sayisi:0,toplam_uzun_ag_ariza_sayisi:0,toplam__kisa_og_ariza_sayisi:0 },
     7:{ name: "DİDİM isletme", SAİDİ:0, SAİFİ: 0,Ort_OG_Ariza_GidermeSuresi:0,Ort_AG_Ariza_GidermeSuresi:0,toplam_uzun_og_ariza_sayisi:0,toplam_uzun_ag_ariza_sayisi:0,toplam__kisa_og_ariza_sayisi:0 },
     8:{name:"FETHİYE isletme", SAİDİ:0, SAİFİ: 0,Ort_OG_Ariza_GidermeSuresi:0,Ort_AG_Ariza_GidermeSuresi:0,toplam_uzun_og_ariza_sayisi:0,toplam_uzun_ag_ariza_sayisi:0,toplam__kisa_og_ariza_sayisi:0 },  
     9:{ name: "KUSADASİ isletme", SAİDİ:0, SAİFİ: 0,Ort_OG_Ariza_GidermeSuresi:0,Ort_AG_Ariza_GidermeSuresi:0,toplam_uzun_og_ariza_sayisi:0,toplam_uzun_ag_ariza_sayisi:0,toplam__kisa_og_ariza_sayisi:0 },
    10:{ name:"MARMARİS isletme", SAİDİ:0, SAİFİ: 0,Ort_OG_Ariza_GidermeSuresi:0,Ort_AG_Ariza_GidermeSuresi:0,toplam_uzun_og_ariza_sayisi:0,toplam_uzun_ag_ariza_sayisi:0,toplam__kisa_og_ariza_sayisi:0 },
    11:{  name:"MİLAS isletme", SAİDİ:0, SAİFİ: 0,Ort_OG_Ariza_GidermeSuresi:0,Ort_AG_Ariza_GidermeSuresi:0,toplam_uzun_og_ariza_sayisi:0,toplam_uzun_ag_ariza_sayisi:0,toplam__kisa_og_ariza_sayisi:0 },
    12:{ name:"MUGLA MERKEZ isletme", SAİDİ:0, SAİFİ: 0,Ort_OG_Ariza_GidermeSuresi:0,Ort_AG_Ariza_GidermeSuresi:0,toplam_uzun_og_ariza_sayisi:0,toplam_uzun_ag_ariza_sayisi:0,toplam__kisa_og_ariza_sayisi:0 },
    13:{ name :"NAZİLLİ isletme", SAİDİ:0, SAİFİ: 0,Ort_OG_Ariza_GidermeSuresi:0,Ort_AG_Ariza_GidermeSuresi:0,toplam_uzun_og_ariza_sayisi:0,toplam_uzun_ag_ariza_sayisi:0,toplam__kisa_og_ariza_sayisi:0 },
    14:{ name: "ORTACA isletme",SAİDİ:0, SAİFİ: 0,Ort_OG_Ariza_GidermeSuresi:0,Ort_AG_Ariza_GidermeSuresi:0,toplam_uzun_og_ariza_sayisi:0,toplam_uzun_ag_ariza_sayisi:0,toplam__kisa_og_ariza_sayisi:0 },
    15:{ name:"SARAYKOY isletme", SAİDİ:0, SAİFİ: 0,Ort_OG_Ariza_GidermeSuresi:0,Ort_AG_Ariza_GidermeSuresi:0,toplam_uzun_og_ariza_sayisi:0,toplam_uzun_ag_ariza_sayisi:0,toplam__kisa_og_ariza_sayisi:0 },
    16:{ name:"SOKE isletme", SAİDİ:0, SAİFİ: 0,Ort_OG_Ariza_GidermeSuresi:0,Ort_AG_Ariza_GidermeSuresi:0,toplam_uzun_og_ariza_sayisi:0,toplam_uzun_ag_ariza_sayisi:0,toplam__kisa_og_ariza_sayisi:0 },
    },
    10: {
     1:  {name:"ACİPAYAM isletme" ,SAİDİ:0, SAİFİ: 0,Ort_OG_Ariza_GidermeSuresi:0,Ort_AG_Ariza_GidermeSuresi:0,toplam_uzun_og_ariza_sayisi:0,toplam_uzun_ag_ariza_sayisi:0,toplam__kisa_og_ariza_sayisi:0 },
     2 : {name: "AYDİN MERKEZ isletme", SAİDİ:0, SAİFİ: 0,Ort_OG_Ariza_GidermeSuresi:0,Ort_AG_Ariza_GidermeSuresi:0,toplam_uzun_og_ariza_sayisi:0,toplam_uzun_ag_ariza_sayisi:0,toplam__kisa_og_ariza_sayisi:0 },
     3:  {name:"BODRUM isletme",SAİDİ:0, SAİFİ: 0,Ort_OG_Ariza_GidermeSuresi:0,Ort_AG_Ariza_GidermeSuresi:0,toplam_uzun_og_ariza_sayisi:0,toplam_uzun_ag_ariza_sayisi:0,toplam__kisa_og_ariza_sayisi:0 },
     4: {name: "CİNE isletme",SAİDİ:0, SAİFİ: 0,Ort_OG_Ariza_GidermeSuresi:0,Ort_AG_Ariza_GidermeSuresi:0,toplam_uzun_og_ariza_sayisi:0,toplam_uzun_ag_ariza_sayisi:0,toplam__kisa_og_ariza_sayisi:0 },
     5: {name:"CİVRİL isletme", SAİDİ:0, SAİFİ: 0,Ort_OG_Ariza_GidermeSuresi:0,Ort_AG_Ariza_GidermeSuresi:0,toplam_uzun_og_ariza_sayisi:0,toplam_uzun_ag_ariza_sayisi:0,toplam__kisa_og_ariza_sayisi:0 },
     6: {name:"DENİZLİ MERKEZ isletme", SAİDİ:0, SAİFİ: 0,Ort_OG_Ariza_GidermeSuresi:0,Ort_AG_Ariza_GidermeSuresi:0,toplam_uzun_og_ariza_sayisi:0,toplam_uzun_ag_ariza_sayisi:0,toplam__kisa_og_ariza_sayisi:0 },
     7:{ name: "DİDİM isletme", SAİDİ:0, SAİFİ: 0,Ort_OG_Ariza_GidermeSuresi:0,Ort_AG_Ariza_GidermeSuresi:0,toplam_uzun_og_ariza_sayisi:0,toplam_uzun_ag_ariza_sayisi:0,toplam__kisa_og_ariza_sayisi:0 },
     8:{name:"FETHİYE isletme", SAİDİ:0, SAİFİ: 0,Ort_OG_Ariza_GidermeSuresi:0,Ort_AG_Ariza_GidermeSuresi:0,toplam_uzun_og_ariza_sayisi:0,toplam_uzun_ag_ariza_sayisi:0,toplam__kisa_og_ariza_sayisi:0 },  
     9:{ name: "KUSADASİ isletme", SAİDİ:0, SAİFİ: 0,Ort_OG_Ariza_GidermeSuresi:0,Ort_AG_Ariza_GidermeSuresi:0,toplam_uzun_og_ariza_sayisi:0,toplam_uzun_ag_ariza_sayisi:0,toplam__kisa_og_ariza_sayisi:0 },
    10:{ name:"MARMARİS isletme", SAİDİ:0, SAİFİ: 0,Ort_OG_Ariza_GidermeSuresi:0,Ort_AG_Ariza_GidermeSuresi:0,toplam_uzun_og_ariza_sayisi:0,toplam_uzun_ag_ariza_sayisi:0,toplam__kisa_og_ariza_sayisi:0 },
    11:{  name:"MİLAS isletme", SAİDİ:0, SAİFİ: 0,Ort_OG_Ariza_GidermeSuresi:0,Ort_AG_Ariza_GidermeSuresi:0,toplam_uzun_og_ariza_sayisi:0,toplam_uzun_ag_ariza_sayisi:0,toplam__kisa_og_ariza_sayisi:0 },
    12:{ name:"MUGLA MERKEZ isletme", SAİDİ:0, SAİFİ: 0,Ort_OG_Ariza_GidermeSuresi:0,Ort_AG_Ariza_GidermeSuresi:0,toplam_uzun_og_ariza_sayisi:0,toplam_uzun_ag_ariza_sayisi:0,toplam__kisa_og_ariza_sayisi:0 },
    13:{ name :"NAZİLLİ isletme", SAİDİ:0, SAİFİ: 0,Ort_OG_Ariza_GidermeSuresi:0,Ort_AG_Ariza_GidermeSuresi:0,toplam_uzun_og_ariza_sayisi:0,toplam_uzun_ag_ariza_sayisi:0,toplam__kisa_og_ariza_sayisi:0 },
    14:{ name: "ORTACA isletme",SAİDİ:0, SAİFİ: 0,Ort_OG_Ariza_GidermeSuresi:0,Ort_AG_Ariza_GidermeSuresi:0,toplam_uzun_og_ariza_sayisi:0,toplam_uzun_ag_ariza_sayisi:0,toplam__kisa_og_ariza_sayisi:0 },
    15:{ name:"SARAYKOY isletme", SAİDİ:0, SAİFİ: 0,Ort_OG_Ariza_GidermeSuresi:0,Ort_AG_Ariza_GidermeSuresi:0,toplam_uzun_og_ariza_sayisi:0,toplam_uzun_ag_ariza_sayisi:0,toplam__kisa_og_ariza_sayisi:0 },
    16:{ name:"SOKE isletme", SAİDİ:0, SAİFİ: 0,Ort_OG_Ariza_GidermeSuresi:0,Ort_AG_Ariza_GidermeSuresi:0,toplam_uzun_og_ariza_sayisi:0,toplam_uzun_ag_ariza_sayisi:0,toplam__kisa_og_ariza_sayisi:0 },
    },
    11: {
     1:  {name:"ACİPAYAM isletme" ,SAİDİ:0, SAİFİ: 0,Ort_OG_Ariza_GidermeSuresi:0,Ort_AG_Ariza_GidermeSuresi:0,toplam_uzun_og_ariza_sayisi:0,toplam_uzun_ag_ariza_sayisi:0,toplam__kisa_og_ariza_sayisi:0 },
     2 : {name: "AYDİN MERKEZ isletme", SAİDİ:0, SAİFİ: 0,Ort_OG_Ariza_GidermeSuresi:0,Ort_AG_Ariza_GidermeSuresi:0,toplam_uzun_og_ariza_sayisi:0,toplam_uzun_ag_ariza_sayisi:0,toplam__kisa_og_ariza_sayisi:0 },
     3:  {name:"BODRUM isletme",SAİDİ:0, SAİFİ: 0,Ort_OG_Ariza_GidermeSuresi:0,Ort_AG_Ariza_GidermeSuresi:0,toplam_uzun_og_ariza_sayisi:0,toplam_uzun_ag_ariza_sayisi:0,toplam__kisa_og_ariza_sayisi:0 },
     4: {name: "CİNE isletme",SAİDİ:0, SAİFİ: 0,Ort_OG_Ariza_GidermeSuresi:0,Ort_AG_Ariza_GidermeSuresi:0,toplam_uzun_og_ariza_sayisi:0,toplam_uzun_ag_ariza_sayisi:0,toplam__kisa_og_ariza_sayisi:0 },
     5: {name:"CİVRİL isletme", SAİDİ:0, SAİFİ: 0,Ort_OG_Ariza_GidermeSuresi:0,Ort_AG_Ariza_GidermeSuresi:0,toplam_uzun_og_ariza_sayisi:0,toplam_uzun_ag_ariza_sayisi:0,toplam__kisa_og_ariza_sayisi:0 },
     6: {name:"DENİZLİ MERKEZ isletme", SAİDİ:0, SAİFİ: 0,Ort_OG_Ariza_GidermeSuresi:0,Ort_AG_Ariza_GidermeSuresi:0,toplam_uzun_og_ariza_sayisi:0,toplam_uzun_ag_ariza_sayisi:0,toplam__kisa_og_ariza_sayisi:0 },
     7:{ name: "DİDİM isletme", SAİDİ:0, SAİFİ: 0,Ort_OG_Ariza_GidermeSuresi:0,Ort_AG_Ariza_GidermeSuresi:0,toplam_uzun_og_ariza_sayisi:0,toplam_uzun_ag_ariza_sayisi:0,toplam__kisa_og_ariza_sayisi:0 },
     8:{name:"FETHİYE isletme", SAİDİ:0, SAİFİ: 0,Ort_OG_Ariza_GidermeSuresi:0,Ort_AG_Ariza_GidermeSuresi:0,toplam_uzun_og_ariza_sayisi:0,toplam_uzun_ag_ariza_sayisi:0,toplam__kisa_og_ariza_sayisi:0 },  
     9:{ name: "KUSADASİ isletme", SAİDİ:0, SAİFİ: 0,Ort_OG_Ariza_GidermeSuresi:0,Ort_AG_Ariza_GidermeSuresi:0,toplam_uzun_og_ariza_sayisi:0,toplam_uzun_ag_ariza_sayisi:0,toplam__kisa_og_ariza_sayisi:0 },
    10:{ name:"MARMARİS isletme", SAİDİ:0, SAİFİ: 0,Ort_OG_Ariza_GidermeSuresi:0,Ort_AG_Ariza_GidermeSuresi:0,toplam_uzun_og_ariza_sayisi:0,toplam_uzun_ag_ariza_sayisi:0,toplam__kisa_og_ariza_sayisi:0 },
    11:{  name:"MİLAS isletme", SAİDİ:0, SAİFİ: 0,Ort_OG_Ariza_GidermeSuresi:0,Ort_AG_Ariza_GidermeSuresi:0,toplam_uzun_og_ariza_sayisi:0,toplam_uzun_ag_ariza_sayisi:0,toplam__kisa_og_ariza_sayisi:0 },
    12:{ name:"MUGLA MERKEZ isletme", SAİDİ:0, SAİFİ: 0,Ort_OG_Ariza_GidermeSuresi:0,Ort_AG_Ariza_GidermeSuresi:0,toplam_uzun_og_ariza_sayisi:0,toplam_uzun_ag_ariza_sayisi:0,toplam__kisa_og_ariza_sayisi:0 },
    13:{ name :"NAZİLLİ isletme", SAİDİ:0, SAİFİ: 0,Ort_OG_Ariza_GidermeSuresi:0,Ort_AG_Ariza_GidermeSuresi:0,toplam_uzun_og_ariza_sayisi:0,toplam_uzun_ag_ariza_sayisi:0,toplam__kisa_og_ariza_sayisi:0 },
    14:{ name: "ORTACA isletme",SAİDİ:0, SAİFİ: 0,Ort_OG_Ariza_GidermeSuresi:0,Ort_AG_Ariza_GidermeSuresi:0,toplam_uzun_og_ariza_sayisi:0,toplam_uzun_ag_ariza_sayisi:0,toplam__kisa_og_ariza_sayisi:0 },
    15:{ name:"SARAYKOY isletme", SAİDİ:0, SAİFİ: 0,Ort_OG_Ariza_GidermeSuresi:0,Ort_AG_Ariza_GidermeSuresi:0,toplam_uzun_og_ariza_sayisi:0,toplam_uzun_ag_ariza_sayisi:0,toplam__kisa_og_ariza_sayisi:0 },
    16:{ name:"SOKE isletme", SAİDİ:0, SAİFİ: 0,Ort_OG_Ariza_GidermeSuresi:0,Ort_AG_Ariza_GidermeSuresi:0,toplam_uzun_og_ariza_sayisi:0,toplam_uzun_ag_ariza_sayisi:0,toplam__kisa_og_ariza_sayisi:0 },
    },
    12: {
     1:  {name:"ACİPAYAM isletme" ,SAİDİ:0, SAİFİ: 0,Ort_OG_Ariza_GidermeSuresi:0,Ort_AG_Ariza_GidermeSuresi:0,toplam_uzun_og_ariza_sayisi:0,toplam_uzun_ag_ariza_sayisi:0,toplam__kisa_og_ariza_sayisi:0 },
     2 : {name: "AYDİN MERKEZ isletme", SAİDİ:0, SAİFİ: 0,Ort_OG_Ariza_GidermeSuresi:0,Ort_AG_Ariza_GidermeSuresi:0,toplam_uzun_og_ariza_sayisi:0,toplam_uzun_ag_ariza_sayisi:0,toplam__kisa_og_ariza_sayisi:0 },
     3:  {name:"BODRUM isletme",SAİDİ:0, SAİFİ: 0,Ort_OG_Ariza_GidermeSuresi:0,Ort_AG_Ariza_GidermeSuresi:0,toplam_uzun_og_ariza_sayisi:0,toplam_uzun_ag_ariza_sayisi:0,toplam__kisa_og_ariza_sayisi:0 },
     4: {name: "CİNE isletme",SAİDİ:0, SAİFİ: 0,Ort_OG_Ariza_GidermeSuresi:0,Ort_AG_Ariza_GidermeSuresi:0,toplam_uzun_og_ariza_sayisi:0,toplam_uzun_ag_ariza_sayisi:0,toplam__kisa_og_ariza_sayisi:0 },
     5: {name:"CİVRİL isletme", SAİDİ:0, SAİFİ: 0,Ort_OG_Ariza_GidermeSuresi:0,Ort_AG_Ariza_GidermeSuresi:0,toplam_uzun_og_ariza_sayisi:0,toplam_uzun_ag_ariza_sayisi:0,toplam__kisa_og_ariza_sayisi:0 },
     6: {name:"DENİZLİ MERKEZ isletme", SAİDİ:0, SAİFİ: 0,Ort_OG_Ariza_GidermeSuresi:0,Ort_AG_Ariza_GidermeSuresi:0,toplam_uzun_og_ariza_sayisi:0,toplam_uzun_ag_ariza_sayisi:0,toplam__kisa_og_ariza_sayisi:0 },
     7:{ name: "DİDİM isletme", SAİDİ:0, SAİFİ: 0,Ort_OG_Ariza_GidermeSuresi:0,Ort_AG_Ariza_GidermeSuresi:0,toplam_uzun_og_ariza_sayisi:0,toplam_uzun_ag_ariza_sayisi:0,toplam__kisa_og_ariza_sayisi:0 },
     8:{name:"FETHİYE isletme", SAİDİ:0, SAİFİ: 0,Ort_OG_Ariza_GidermeSuresi:0,Ort_AG_Ariza_GidermeSuresi:0,toplam_uzun_og_ariza_sayisi:0,toplam_uzun_ag_ariza_sayisi:0,toplam__kisa_og_ariza_sayisi:0 },  
     9:{ name: "KUSADASİ isletme", SAİDİ:0, SAİFİ: 0,Ort_OG_Ariza_GidermeSuresi:0,Ort_AG_Ariza_GidermeSuresi:0,toplam_uzun_og_ariza_sayisi:0,toplam_uzun_ag_ariza_sayisi:0,toplam__kisa_og_ariza_sayisi:0 },
    10:{ name:"MARMARİS isletme", SAİDİ:0, SAİFİ: 0,Ort_OG_Ariza_GidermeSuresi:0,Ort_AG_Ariza_GidermeSuresi:0,toplam_uzun_og_ariza_sayisi:0,toplam_uzun_ag_ariza_sayisi:0,toplam__kisa_og_ariza_sayisi:0 },
    11:{  name:"MİLAS isletme", SAİDİ:0, SAİFİ: 0,Ort_OG_Ariza_GidermeSuresi:0,Ort_AG_Ariza_GidermeSuresi:0,toplam_uzun_og_ariza_sayisi:0,toplam_uzun_ag_ariza_sayisi:0,toplam__kisa_og_ariza_sayisi:0 },
    12:{ name:"MUGLA MERKEZ isletme", SAİDİ:0, SAİFİ: 0,Ort_OG_Ariza_GidermeSuresi:0,Ort_AG_Ariza_GidermeSuresi:0,toplam_uzun_og_ariza_sayisi:0,toplam_uzun_ag_ariza_sayisi:0,toplam__kisa_og_ariza_sayisi:0 },
    13:{ name :"NAZİLLİ isletme", SAİDİ:0, SAİFİ: 0,Ort_OG_Ariza_GidermeSuresi:0,Ort_AG_Ariza_GidermeSuresi:0,toplam_uzun_og_ariza_sayisi:0,toplam_uzun_ag_ariza_sayisi:0,toplam__kisa_og_ariza_sayisi:0 },
    14:{ name: "ORTACA isletme",SAİDİ:0, SAİFİ: 0,Ort_OG_Ariza_GidermeSuresi:0,Ort_AG_Ariza_GidermeSuresi:0,toplam_uzun_og_ariza_sayisi:0,toplam_uzun_ag_ariza_sayisi:0,toplam__kisa_og_ariza_sayisi:0 },
    15:{ name:"SARAYKOY isletme", SAİDİ:0, SAİFİ: 0,Ort_OG_Ariza_GidermeSuresi:0,Ort_AG_Ariza_GidermeSuresi:0,toplam_uzun_og_ariza_sayisi:0,toplam_uzun_ag_ariza_sayisi:0,toplam__kisa_og_ariza_sayisi:0 },
    16:{ name:"SOKE isletme", SAİDİ:0, SAİFİ: 0,Ort_OG_Ariza_GidermeSuresi:0,Ort_AG_Ariza_GidermeSuresi:0,toplam_uzun_og_ariza_sayisi:0,toplam_uzun_ag_ariza_sayisi:0,toplam__kisa_og_ariza_sayisi:0 },
    },

};

export const DataContext = createContext();
export const DataProvider = ({ children }) => {
    const [data, setData] = useState(initialState);
  
    const updateSaidiSaifi = (updateArray) => {
      const newData = { ...data };
  
      updateArray.forEach(item => {
        // Gelen sorgu sonucundaki "ay" değeri doğrudan state içindeki anahtar ile eşleşiyor
        const monthKey = item.ay; 
      //  console.log("Updating month:", monthKey);
        
        // Eğer belirtilen ay state içerisinde varsa
        if(newData[monthKey]) {
          //  console.log("girdi monteky ne data")
          // İlgili ay içindeki ilçeler arasında, "isletme" adı eşleşen girdiyi bul
          const districtEntry = Object.entries(newData[monthKey]).find(
            ([, districtData]) => districtData.name === item.isletme
          );
          
          if (districtEntry) {
            //console.log("girdi distric")
            const [districtId, districtData] = districtEntry;
            newData[monthKey][districtId] = {
              ...districtData,
              SAİDİ: item.saidi_isletme,
              SAİFİ: item.saifi_isletme,
              Ort_OG_Ariza_GidermeSuresi:item.ort_og_ariza_giderme_suresi,
              Ort_AG_Ariza_GidermeSuresi:item.ort_ag_ariza_giderme_suresi,
              toplam_uzun_og_ariza_sayisi:item.toplam_uzun_og_ariza_sayisi,
              toplam_uzun_ag_ariza_sayisi:item.toplam_uzun_ag_ariza_sayisi,
              toplam__kisa_og_ariza_sayisi:item.toplam__kisa_og_ariza_sayisi,
            };
          } else {
            console.warn(`No matching district found for isletme "${item.isletme}" in month ${monthKey}`);
          }
        } else {
          console.warn(`Month ${monthKey} is not found in data`);
        }
      });
     //console.log("datancontexteki herhangi bir veri ",data[1][1])
      setData(newData);
    };
  
    return (
      <DataContext.Provider value={{ data, updateSaidiSaifi }}>
        {children}
      </DataContext.Provider>
    );
  };
  
  

export const useData = () => useContext(DataContext);
