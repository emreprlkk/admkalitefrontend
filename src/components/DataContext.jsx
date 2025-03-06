import React, { createContext, useContext, useState } from 'react';


// Veri yapısını oluşturan initial state
const initialState = {
    1: {
     1: {name:"ACİPAYAM isletme" ,SAİDİ: '', SAİFİ: '',Ort_OG_Ariza_GidermeSuresi:'',Ort_AG_Ariza_GidermeSuresi:'',toplam_uzun_og_ariza_sayisi:'',toplam_uzun_ag_ariza_sayisi:'',toplam__kisa_og_ariza_sayisi:'' },
     2: {name: "AYDİN MERKEZ isletme",SAİDİ: '', SAİFİ: '',Ort_OG_Ariza_GidermeSuresi:'',Ort_AG_Ariza_GidermeSuresi:'',toplam_uzun_og_ariza_sayisi:'',toplam_uzun_ag_ariza_sayisi:'',toplam__kisa_og_ariza_sayisi:'' },
     3: {name:"BODRUM isletme",SAİDİ: '', SAİFİ: '',Ort_OG_Ariza_GidermeSuresi:'',Ort_AG_Ariza_GidermeSuresi:'',toplam_uzun_og_ariza_sayisi:'',toplam_uzun_ag_ariza_sayisi:'',toplam__kisa_og_ariza_sayisi:'' },
     4: {name: "CİNE isletme",SAİDİ: '', SAİFİ: '',Ort_OG_Ariza_GidermeSuresi:'',Ort_AG_Ariza_GidermeSuresi:'',toplam_uzun_og_ariza_sayisi:'',toplam_uzun_ag_ariza_sayisi:'',toplam__kisa_og_ariza_sayisi:'' },
     5: {name:"CİVRİL isletme", SAİDİ: '', SAİFİ: '',Ort_OG_Ariza_GidermeSuresi:'',Ort_AG_Ariza_GidermeSuresi:'',toplam_uzun_og_ariza_sayisi:'',toplam_uzun_ag_ariza_sayisi:'',toplam__kisa_og_ariza_sayisi:'' },
     6: {name:"DENİZLİ MERKEZ isletme", SAİDİ: '', SAİFİ: '',Ort_OG_Ariza_GidermeSuresi:'',Ort_AG_Ariza_GidermeSuresi:'',toplam_uzun_og_ariza_sayisi:'',toplam_uzun_ag_ariza_sayisi:'',toplam__kisa_og_ariza_sayisi:'' },
     7: { name: "DİDİM isletme", SAİDİ: '', SAİFİ: '',Ort_OG_Ariza_GidermeSuresi:'',Ort_AG_Ariza_GidermeSuresi:'',toplam_uzun_og_ariza_sayisi:'',toplam_uzun_ag_ariza_sayisi:'',toplam__kisa_og_ariza_sayisi:'' },
     8: {name:"FETHİYE isletme", SAİDİ: '', SAİFİ: '',Ort_OG_Ariza_GidermeSuresi:'',Ort_AG_Ariza_GidermeSuresi:'',toplam_uzun_og_ariza_sayisi:'',toplam_uzun_ag_ariza_sayisi:'',toplam__kisa_og_ariza_sayisi:'' },  
     9:{ name: "KUSADASİ isletme", SAİDİ: '', SAİFİ: '',Ort_OG_Ariza_GidermeSuresi:'',Ort_AG_Ariza_GidermeSuresi:'',toplam_uzun_og_ariza_sayisi:'',toplam_uzun_ag_ariza_sayisi:'',toplam__kisa_og_ariza_sayisi:'' },
    10:{ name:"MARMARİS isletme", SAİDİ: '', SAİFİ: '',Ort_OG_Ariza_GidermeSuresi:'',Ort_AG_Ariza_GidermeSuresi:'',toplam_uzun_og_ariza_sayisi:'',toplam_uzun_ag_ariza_sayisi:'',toplam__kisa_og_ariza_sayisi:'' },
    11:{  name:"MİLAS isletme", SAİDİ: '', SAİFİ: '',Ort_OG_Ariza_GidermeSuresi:'',Ort_AG_Ariza_GidermeSuresi:'',toplam_uzun_og_ariza_sayisi:'',toplam_uzun_ag_ariza_sayisi:'',toplam__kisa_og_ariza_sayisi:'' },
    12:{ name:"MUGLA MERKEZ isletme", SAİDİ: '', SAİFİ: '',Ort_OG_Ariza_GidermeSuresi:'',Ort_AG_Ariza_GidermeSuresi:'',toplam_uzun_og_ariza_sayisi:'',toplam_uzun_ag_ariza_sayisi:'',toplam__kisa_og_ariza_sayisi:'' },
    13:{ name :"NAZİLLİ isletme", SAİDİ: '', SAİFİ: '',Ort_OG_Ariza_GidermeSuresi:'',Ort_AG_Ariza_GidermeSuresi:'',toplam_uzun_og_ariza_sayisi:'',toplam_uzun_ag_ariza_sayisi:'',toplam__kisa_og_ariza_sayisi:'' },
    14:{ name: "ORTACA isletme",SAİDİ: '', SAİFİ: '',Ort_OG_Ariza_GidermeSuresi:'',Ort_AG_Ariza_GidermeSuresi:'',toplam_uzun_og_ariza_sayisi:'',toplam_uzun_ag_ariza_sayisi:'',toplam__kisa_og_ariza_sayisi:'' },
    15:{ name:"SARAYKOY isletme", SAİDİ: '', SAİFİ: '',Ort_OG_Ariza_GidermeSuresi:'',Ort_AG_Ariza_GidermeSuresi:'',toplam_uzun_og_ariza_sayisi:'',toplam_uzun_ag_ariza_sayisi:'',toplam__kisa_og_ariza_sayisi:'' },
    16:{ name:"SOKE isletme", SAİDİ: '', SAİFİ: '',Ort_OG_Ariza_GidermeSuresi:'',Ort_AG_Ariza_GidermeSuresi:'',toplam_uzun_og_ariza_sayisi:'',toplam_uzun_ag_ariza_sayisi:'',toplam__kisa_og_ariza_sayisi:'' },
    },
    2: {
     1: {name:"ACİPAYAM isletme" ,SAİDİ: '', SAİFİ: '',Ort_OG_Ariza_GidermeSuresi:'',Ort_AG_Ariza_GidermeSuresi:'',toplam_uzun_og_ariza_sayisi:'',toplam_uzun_ag_ariza_sayisi:'',toplam__kisa_og_ariza_sayisi:'' },
     2:{name: "AYDİN MERKEZ isletme", SAİDİ: '', SAİFİ: '',Ort_OG_Ariza_GidermeSuresi:'',Ort_AG_Ariza_GidermeSuresi:'',toplam_uzun_og_ariza_sayisi:'',toplam_uzun_ag_ariza_sayisi:'',toplam__kisa_og_ariza_sayisi:'' },
     3:{name:"BODRUM isletme",SAİDİ: '', SAİFİ: '',Ort_OG_Ariza_GidermeSuresi:'',Ort_AG_Ariza_GidermeSuresi:'',toplam_uzun_og_ariza_sayisi:'',toplam_uzun_ag_ariza_sayisi:'',toplam__kisa_og_ariza_sayisi:'' },
     4:{name: "CİNE isletme",SAİDİ: '', SAİFİ: '',Ort_OG_Ariza_GidermeSuresi:'',Ort_AG_Ariza_GidermeSuresi:'',toplam_uzun_og_ariza_sayisi:'',toplam_uzun_ag_ariza_sayisi:'',toplam__kisa_og_ariza_sayisi:'' },
     5: {name:"CİVRİL isletme", SAİDİ: '', SAİFİ: '',Ort_OG_Ariza_GidermeSuresi:'',Ort_AG_Ariza_GidermeSuresi:'',toplam_uzun_og_ariza_sayisi:'',toplam_uzun_ag_ariza_sayisi:'',toplam__kisa_og_ariza_sayisi:'' },
     6: {name:"DENİZLİ MERKEZ isletme", SAİDİ: '', SAİFİ: '',Ort_OG_Ariza_GidermeSuresi:'',Ort_AG_Ariza_GidermeSuresi:'',toplam_uzun_og_ariza_sayisi:'',toplam_uzun_ag_ariza_sayisi:'',toplam__kisa_og_ariza_sayisi:'' },
     7:{ name: "DİDİM isletme", SAİDİ: '', SAİFİ: '',Ort_OG_Ariza_GidermeSuresi:'',Ort_AG_Ariza_GidermeSuresi:'',toplam_uzun_og_ariza_sayisi:'',toplam_uzun_ag_ariza_sayisi:'',toplam__kisa_og_ariza_sayisi:'' },
     8:{name:"FETHİYE isletme", SAİDİ: '', SAİFİ: '',Ort_OG_Ariza_GidermeSuresi:'',Ort_AG_Ariza_GidermeSuresi:'',toplam_uzun_og_ariza_sayisi:'',toplam_uzun_ag_ariza_sayisi:'',toplam__kisa_og_ariza_sayisi:'' },  
     9:{ name: "KUSADASİ isletme", SAİDİ: '', SAİFİ: '',Ort_OG_Ariza_GidermeSuresi:'',Ort_AG_Ariza_GidermeSuresi:'',toplam_uzun_og_ariza_sayisi:'',toplam_uzun_ag_ariza_sayisi:'',toplam__kisa_og_ariza_sayisi:'' },
    10:{ name:"MARMARİS isletme", SAİDİ: '', SAİFİ: '',Ort_OG_Ariza_GidermeSuresi:'',Ort_AG_Ariza_GidermeSuresi:'',toplam_uzun_og_ariza_sayisi:'',toplam_uzun_ag_ariza_sayisi:'',toplam__kisa_og_ariza_sayisi:'' },
    11:{  name:"MİLAS isletme", SAİDİ: '', SAİFİ: '',Ort_OG_Ariza_GidermeSuresi:'',Ort_AG_Ariza_GidermeSuresi:'',toplam_uzun_og_ariza_sayisi:'',toplam_uzun_ag_ariza_sayisi:'',toplam__kisa_og_ariza_sayisi:'' },
    12:{ name:"MUGLA MERKEZ isletme", SAİDİ: '', SAİFİ: '',Ort_OG_Ariza_GidermeSuresi:'',Ort_AG_Ariza_GidermeSuresi:'',toplam_uzun_og_ariza_sayisi:'',toplam_uzun_ag_ariza_sayisi:'',toplam__kisa_og_ariza_sayisi:'' },
    13:{ name :"NAZİLLİ isletme", SAİDİ: '', SAİFİ: '',Ort_OG_Ariza_GidermeSuresi:'',Ort_AG_Ariza_GidermeSuresi:'',toplam_uzun_og_ariza_sayisi:'',toplam_uzun_ag_ariza_sayisi:'',toplam__kisa_og_ariza_sayisi:'' },
    14:{ name: "ORTACA isletme",SAİDİ: '', SAİFİ: '',Ort_OG_Ariza_GidermeSuresi:'',Ort_AG_Ariza_GidermeSuresi:'',toplam_uzun_og_ariza_sayisi:'',toplam_uzun_ag_ariza_sayisi:'',toplam__kisa_og_ariza_sayisi:'' },
    15:{ name:"SARAYKOY isletme", SAİDİ: '', SAİFİ: '',Ort_OG_Ariza_GidermeSuresi:'',Ort_AG_Ariza_GidermeSuresi:'',toplam_uzun_og_ariza_sayisi:'',toplam_uzun_ag_ariza_sayisi:'',toplam__kisa_og_ariza_sayisi:'' },
    16:{ name:"SOKE isletme", SAİDİ: '', SAİFİ: '',Ort_OG_Ariza_GidermeSuresi:'',Ort_AG_Ariza_GidermeSuresi:'',toplam_uzun_og_ariza_sayisi:'',toplam_uzun_ag_ariza_sayisi:'',toplam__kisa_og_ariza_sayisi:'' },
    },
    3: {
     1:  {name:"ACİPAYAM isletme" ,SAİDİ: '', SAİFİ: '',Ort_OG_Ariza_GidermeSuresi:'',Ort_AG_Ariza_GidermeSuresi:'',toplam_uzun_og_ariza_sayisi:'',toplam_uzun_ag_ariza_sayisi:'',toplam__kisa_og_ariza_sayisi:'' },
     2 : {name: "AYDİN MERKEZ isletme", SAİDİ: '', SAİFİ: '',Ort_OG_Ariza_GidermeSuresi:'',Ort_AG_Ariza_GidermeSuresi:'',toplam_uzun_og_ariza_sayisi:'',toplam_uzun_ag_ariza_sayisi:'',toplam__kisa_og_ariza_sayisi:'' },
     3:  {name:"BODRUM isletme",SAİDİ: '', SAİFİ: '',Ort_OG_Ariza_GidermeSuresi:'',Ort_AG_Ariza_GidermeSuresi:'',toplam_uzun_og_ariza_sayisi:'',toplam_uzun_ag_ariza_sayisi:'',toplam__kisa_og_ariza_sayisi:'' },
     4: {name: "CİNE isletme",SAİDİ: '', SAİFİ: '',Ort_OG_Ariza_GidermeSuresi:'',Ort_AG_Ariza_GidermeSuresi:'',toplam_uzun_og_ariza_sayisi:'',toplam_uzun_ag_ariza_sayisi:'',toplam__kisa_og_ariza_sayisi:'' },
     5: {name:"CİVRİL isletme", SAİDİ: '', SAİFİ: '',Ort_OG_Ariza_GidermeSuresi:'',Ort_AG_Ariza_GidermeSuresi:'',toplam_uzun_og_ariza_sayisi:'',toplam_uzun_ag_ariza_sayisi:'',toplam__kisa_og_ariza_sayisi:'' },
     6: {name:"DENİZLİ MERKEZ isletme", SAİDİ: '', SAİFİ: '',Ort_OG_Ariza_GidermeSuresi:'',Ort_AG_Ariza_GidermeSuresi:'',toplam_uzun_og_ariza_sayisi:'',toplam_uzun_ag_ariza_sayisi:'',toplam__kisa_og_ariza_sayisi:'' },
     7:{ name: "DİDİM isletme", SAİDİ: '', SAİFİ: '',Ort_OG_Ariza_GidermeSuresi:'',Ort_AG_Ariza_GidermeSuresi:'',toplam_uzun_og_ariza_sayisi:'',toplam_uzun_ag_ariza_sayisi:'',toplam__kisa_og_ariza_sayisi:'' },
     8:{name:"FETHİYE isletme", SAİDİ: '', SAİFİ: '',Ort_OG_Ariza_GidermeSuresi:'',Ort_AG_Ariza_GidermeSuresi:'',toplam_uzun_og_ariza_sayisi:'',toplam_uzun_ag_ariza_sayisi:'',toplam__kisa_og_ariza_sayisi:'' },  
     9:{ name: "KUSADASİ isletme", SAİDİ: '', SAİFİ: '',Ort_OG_Ariza_GidermeSuresi:'',Ort_AG_Ariza_GidermeSuresi:'',toplam_uzun_og_ariza_sayisi:'',toplam_uzun_ag_ariza_sayisi:'',toplam__kisa_og_ariza_sayisi:'' },
    10:{ name:"MARMARİS isletme", SAİDİ: '', SAİFİ: '',Ort_OG_Ariza_GidermeSuresi:'',Ort_AG_Ariza_GidermeSuresi:'',toplam_uzun_og_ariza_sayisi:'',toplam_uzun_ag_ariza_sayisi:'',toplam__kisa_og_ariza_sayisi:'' },
    11:{  name:"MİLAS isletme", SAİDİ: '', SAİFİ: '',Ort_OG_Ariza_GidermeSuresi:'',Ort_AG_Ariza_GidermeSuresi:'',toplam_uzun_og_ariza_sayisi:'',toplam_uzun_ag_ariza_sayisi:'',toplam__kisa_og_ariza_sayisi:'' },
    12:{ name:"MUGLA MERKEZ isletme", SAİDİ: '', SAİFİ: '',Ort_OG_Ariza_GidermeSuresi:'',Ort_AG_Ariza_GidermeSuresi:'',toplam_uzun_og_ariza_sayisi:'',toplam_uzun_ag_ariza_sayisi:'',toplam__kisa_og_ariza_sayisi:'' },
    13:{ name :"NAZİLLİ isletme", SAİDİ: '', SAİFİ: '',Ort_OG_Ariza_GidermeSuresi:'',Ort_AG_Ariza_GidermeSuresi:'',toplam_uzun_og_ariza_sayisi:'',toplam_uzun_ag_ariza_sayisi:'',toplam__kisa_og_ariza_sayisi:'' },
    14:{ name: "ORTACA isletme",SAİDİ: '', SAİFİ: '',Ort_OG_Ariza_GidermeSuresi:'',Ort_AG_Ariza_GidermeSuresi:'',toplam_uzun_og_ariza_sayisi:'',toplam_uzun_ag_ariza_sayisi:'',toplam__kisa_og_ariza_sayisi:'' },
    15:{ name:"SARAYKOY isletme", SAİDİ: '', SAİFİ: '',Ort_OG_Ariza_GidermeSuresi:'',Ort_AG_Ariza_GidermeSuresi:'',toplam_uzun_og_ariza_sayisi:'',toplam_uzun_ag_ariza_sayisi:'',toplam__kisa_og_ariza_sayisi:'' },
    16:{ name:"SOKE isletme", SAİDİ: '', SAİFİ: '',Ort_OG_Ariza_GidermeSuresi:'',Ort_AG_Ariza_GidermeSuresi:'',toplam_uzun_og_ariza_sayisi:'',toplam_uzun_ag_ariza_sayisi:'',toplam__kisa_og_ariza_sayisi:'' },
    },
    "Nisan": {
     1:  {name:"ACİPAYAM isletme" ,SAİDİ: '', SAİFİ: '',Ort_OG_Ariza_GidermeSuresi:'',Ort_AG_Ariza_GidermeSuresi:'',toplam_uzun_og_ariza_sayisi:'',toplam_uzun_ag_ariza_sayisi:'',toplam__kisa_og_ariza_sayisi:'' },
     2 : {name: "AYDİN MERKEZ isletme", SAİDİ: '', SAİFİ: '',Ort_OG_Ariza_GidermeSuresi:'',Ort_AG_Ariza_GidermeSuresi:'',toplam_uzun_og_ariza_sayisi:'',toplam_uzun_ag_ariza_sayisi:'',toplam__kisa_og_ariza_sayisi:'' },
     3:  {name:"BODRUM isletme",SAİDİ: '', SAİFİ: '',Ort_OG_Ariza_GidermeSuresi:'',Ort_AG_Ariza_GidermeSuresi:'',toplam_uzun_og_ariza_sayisi:'',toplam_uzun_ag_ariza_sayisi:'',toplam__kisa_og_ariza_sayisi:'' },
     4: {name: "CİNE isletme",SAİDİ: '', SAİFİ: '',Ort_OG_Ariza_GidermeSuresi:'',Ort_AG_Ariza_GidermeSuresi:'',toplam_uzun_og_ariza_sayisi:'',toplam_uzun_ag_ariza_sayisi:'',toplam__kisa_og_ariza_sayisi:'' },
     5: {name:"CİVRİL isletme", SAİDİ: '', SAİFİ: '',Ort_OG_Ariza_GidermeSuresi:'',Ort_AG_Ariza_GidermeSuresi:'',toplam_uzun_og_ariza_sayisi:'',toplam_uzun_ag_ariza_sayisi:'',toplam__kisa_og_ariza_sayisi:'' },
     6: {name:"DENİZLİ MERKEZ isletme", SAİDİ: '', SAİFİ: '',Ort_OG_Ariza_GidermeSuresi:'',Ort_AG_Ariza_GidermeSuresi:'',toplam_uzun_og_ariza_sayisi:'',toplam_uzun_ag_ariza_sayisi:'',toplam__kisa_og_ariza_sayisi:'' },
     7:{ name: "DİDİM isletme", SAİDİ: '', SAİFİ: '',Ort_OG_Ariza_GidermeSuresi:'',Ort_AG_Ariza_GidermeSuresi:'',toplam_uzun_og_ariza_sayisi:'',toplam_uzun_ag_ariza_sayisi:'',toplam__kisa_og_ariza_sayisi:'' },
     8:{name:"FETHİYE isletme", SAİDİ: '', SAİFİ: '',Ort_OG_Ariza_GidermeSuresi:'',Ort_AG_Ariza_GidermeSuresi:'',toplam_uzun_og_ariza_sayisi:'',toplam_uzun_ag_ariza_sayisi:'',toplam__kisa_og_ariza_sayisi:'' },  
     9:{ name: "KUSADASİ isletme", SAİDİ: '', SAİFİ: '',Ort_OG_Ariza_GidermeSuresi:'',Ort_AG_Ariza_GidermeSuresi:'',toplam_uzun_og_ariza_sayisi:'',toplam_uzun_ag_ariza_sayisi:'',toplam__kisa_og_ariza_sayisi:'' },
    10:{ name:"MARMARİS isletme", SAİDİ: '', SAİFİ: '',Ort_OG_Ariza_GidermeSuresi:'',Ort_AG_Ariza_GidermeSuresi:'',toplam_uzun_og_ariza_sayisi:'',toplam_uzun_ag_ariza_sayisi:'',toplam__kisa_og_ariza_sayisi:'' },
    11:{  name:"MİLAS isletme", SAİDİ: '', SAİFİ: '',Ort_OG_Ariza_GidermeSuresi:'',Ort_AG_Ariza_GidermeSuresi:'',toplam_uzun_og_ariza_sayisi:'',toplam_uzun_ag_ariza_sayisi:'',toplam__kisa_og_ariza_sayisi:'' },
    12:{ name:"MUGLA MERKEZ isletme", SAİDİ: '', SAİFİ: '',Ort_OG_Ariza_GidermeSuresi:'',Ort_AG_Ariza_GidermeSuresi:'',toplam_uzun_og_ariza_sayisi:'',toplam_uzun_ag_ariza_sayisi:'',toplam__kisa_og_ariza_sayisi:'' },
    13:{ name :"NAZİLLİ isletme", SAİDİ: '', SAİFİ: '',Ort_OG_Ariza_GidermeSuresi:'',Ort_AG_Ariza_GidermeSuresi:'',toplam_uzun_og_ariza_sayisi:'',toplam_uzun_ag_ariza_sayisi:'',toplam__kisa_og_ariza_sayisi:'' },
    14:{ name: "ORTACA isletme",SAİDİ: '', SAİFİ: '',Ort_OG_Ariza_GidermeSuresi:'',Ort_AG_Ariza_GidermeSuresi:'',toplam_uzun_og_ariza_sayisi:'',toplam_uzun_ag_ariza_sayisi:'',toplam__kisa_og_ariza_sayisi:'' },
    15:{ name:"SARAYKOY isletme", SAİDİ: '', SAİFİ: '',Ort_OG_Ariza_GidermeSuresi:'',Ort_AG_Ariza_GidermeSuresi:'',toplam_uzun_og_ariza_sayisi:'',toplam_uzun_ag_ariza_sayisi:'',toplam__kisa_og_ariza_sayisi:'' },
    16:{ name:"SOKE isletme", SAİDİ: '', SAİFİ: '',Ort_OG_Ariza_GidermeSuresi:'',Ort_AG_Ariza_GidermeSuresi:'',toplam_uzun_og_ariza_sayisi:'',toplam_uzun_ag_ariza_sayisi:'',toplam__kisa_og_ariza_sayisi:'' },
    },
    "Mayıs": {
     1:  {name:"ACİPAYAM isletme" ,SAİDİ: '', SAİFİ: '',Ort_OG_Ariza_GidermeSuresi:'',Ort_AG_Ariza_GidermeSuresi:'',toplam_uzun_og_ariza_sayisi:'',toplam_uzun_ag_ariza_sayisi:'',toplam__kisa_og_ariza_sayisi:'' },
     2 : {name: "AYDİN MERKEZ isletme", SAİDİ: '', SAİFİ: '',Ort_OG_Ariza_GidermeSuresi:'',Ort_AG_Ariza_GidermeSuresi:'',toplam_uzun_og_ariza_sayisi:'',toplam_uzun_ag_ariza_sayisi:'',toplam__kisa_og_ariza_sayisi:'' },
     3:  {name:"BODRUM isletme",SAİDİ: '', SAİFİ: '',Ort_OG_Ariza_GidermeSuresi:'',Ort_AG_Ariza_GidermeSuresi:'',toplam_uzun_og_ariza_sayisi:'',toplam_uzun_ag_ariza_sayisi:'',toplam__kisa_og_ariza_sayisi:'' },
     4: {name: "CİNE isletme",SAİDİ: '', SAİFİ: '',Ort_OG_Ariza_GidermeSuresi:'',Ort_AG_Ariza_GidermeSuresi:'',toplam_uzun_og_ariza_sayisi:'',toplam_uzun_ag_ariza_sayisi:'',toplam__kisa_og_ariza_sayisi:'' },
     5: {name:"CİVRİL isletme", SAİDİ: '', SAİFİ: '',Ort_OG_Ariza_GidermeSuresi:'',Ort_AG_Ariza_GidermeSuresi:'',toplam_uzun_og_ariza_sayisi:'',toplam_uzun_ag_ariza_sayisi:'',toplam__kisa_og_ariza_sayisi:'' },
     6: {name:"DENİZLİ MERKEZ isletme", SAİDİ: '', SAİFİ: '',Ort_OG_Ariza_GidermeSuresi:'',Ort_AG_Ariza_GidermeSuresi:'',toplam_uzun_og_ariza_sayisi:'',toplam_uzun_ag_ariza_sayisi:'',toplam__kisa_og_ariza_sayisi:'' },
     7:{ name: "DİDİM isletme", SAİDİ: '', SAİFİ: '',Ort_OG_Ariza_GidermeSuresi:'',Ort_AG_Ariza_GidermeSuresi:'',toplam_uzun_og_ariza_sayisi:'',toplam_uzun_ag_ariza_sayisi:'',toplam__kisa_og_ariza_sayisi:'' },
     8:{name:"FETHİYE isletme", SAİDİ: '', SAİFİ: '',Ort_OG_Ariza_GidermeSuresi:'',Ort_AG_Ariza_GidermeSuresi:'',toplam_uzun_og_ariza_sayisi:'',toplam_uzun_ag_ariza_sayisi:'',toplam__kisa_og_ariza_sayisi:'' },  
     9:{ name: "KUSADASİ isletme", SAİDİ: '', SAİFİ: '',Ort_OG_Ariza_GidermeSuresi:'',Ort_AG_Ariza_GidermeSuresi:'',toplam_uzun_og_ariza_sayisi:'',toplam_uzun_ag_ariza_sayisi:'',toplam__kisa_og_ariza_sayisi:'' },
    10:{ name:"MARMARİS isletme", SAİDİ: '', SAİFİ: '',Ort_OG_Ariza_GidermeSuresi:'',Ort_AG_Ariza_GidermeSuresi:'',toplam_uzun_og_ariza_sayisi:'',toplam_uzun_ag_ariza_sayisi:'',toplam__kisa_og_ariza_sayisi:'' },
    11:{  name:"MİLAS isletme", SAİDİ: '', SAİFİ: '',Ort_OG_Ariza_GidermeSuresi:'',Ort_AG_Ariza_GidermeSuresi:'',toplam_uzun_og_ariza_sayisi:'',toplam_uzun_ag_ariza_sayisi:'',toplam__kisa_og_ariza_sayisi:'' },
    12:{ name:"MUGLA MERKEZ isletme", SAİDİ: '', SAİFİ: '',Ort_OG_Ariza_GidermeSuresi:'',Ort_AG_Ariza_GidermeSuresi:'',toplam_uzun_og_ariza_sayisi:'',toplam_uzun_ag_ariza_sayisi:'',toplam__kisa_og_ariza_sayisi:'' },
    13:{ name :"NAZİLLİ isletme", SAİDİ: '', SAİFİ: '',Ort_OG_Ariza_GidermeSuresi:'',Ort_AG_Ariza_GidermeSuresi:'',toplam_uzun_og_ariza_sayisi:'',toplam_uzun_ag_ariza_sayisi:'',toplam__kisa_og_ariza_sayisi:'' },
    14:{ name: "ORTACA isletme",SAİDİ: '', SAİFİ: '',Ort_OG_Ariza_GidermeSuresi:'',Ort_AG_Ariza_GidermeSuresi:'',toplam_uzun_og_ariza_sayisi:'',toplam_uzun_ag_ariza_sayisi:'',toplam__kisa_og_ariza_sayisi:'' },
    15:{ name:"SARAYKOY isletme", SAİDİ: '', SAİFİ: '',Ort_OG_Ariza_GidermeSuresi:'',Ort_AG_Ariza_GidermeSuresi:'',toplam_uzun_og_ariza_sayisi:'',toplam_uzun_ag_ariza_sayisi:'',toplam__kisa_og_ariza_sayisi:'' },
    16:{ name:"SOKE isletme", SAİDİ: '', SAİFİ: '',Ort_OG_Ariza_GidermeSuresi:'',Ort_AG_Ariza_GidermeSuresi:'',toplam_uzun_og_ariza_sayisi:'',toplam_uzun_ag_ariza_sayisi:'',toplam__kisa_og_ariza_sayisi:'' },
    },
    "Haziran": {
     1:  {name:"ACİPAYAM isletme" ,SAİDİ: '', SAİFİ: '',Ort_OG_Ariza_GidermeSuresi:'',Ort_AG_Ariza_GidermeSuresi:'',toplam_uzun_og_ariza_sayisi:'',toplam_uzun_ag_ariza_sayisi:'',toplam__kisa_og_ariza_sayisi:'' },
     2 : {name: "AYDİN MERKEZ isletme", SAİDİ: '', SAİFİ: '',Ort_OG_Ariza_GidermeSuresi:'',Ort_AG_Ariza_GidermeSuresi:'',toplam_uzun_og_ariza_sayisi:'',toplam_uzun_ag_ariza_sayisi:'',toplam__kisa_og_ariza_sayisi:'' },
     3:  {name:"BODRUM isletme",SAİDİ: '', SAİFİ: '',Ort_OG_Ariza_GidermeSuresi:'',Ort_AG_Ariza_GidermeSuresi:'',toplam_uzun_og_ariza_sayisi:'',toplam_uzun_ag_ariza_sayisi:'',toplam__kisa_og_ariza_sayisi:'' },
     4: {name: "CİNE isletme",SAİDİ: '', SAİFİ: '',Ort_OG_Ariza_GidermeSuresi:'',Ort_AG_Ariza_GidermeSuresi:'',toplam_uzun_og_ariza_sayisi:'',toplam_uzun_ag_ariza_sayisi:'',toplam__kisa_og_ariza_sayisi:'' },
     5: {name:"CİVRİL isletme", SAİDİ: '', SAİFİ: '',Ort_OG_Ariza_GidermeSuresi:'',Ort_AG_Ariza_GidermeSuresi:'',toplam_uzun_og_ariza_sayisi:'',toplam_uzun_ag_ariza_sayisi:'',toplam__kisa_og_ariza_sayisi:'' },
     6: {name:"DENİZLİ MERKEZ isletme", SAİDİ: '', SAİFİ: '',Ort_OG_Ariza_GidermeSuresi:'',Ort_AG_Ariza_GidermeSuresi:'',toplam_uzun_og_ariza_sayisi:'',toplam_uzun_ag_ariza_sayisi:'',toplam__kisa_og_ariza_sayisi:'' },
     7:{ name: "DİDİM isletme", SAİDİ: '', SAİFİ: '',Ort_OG_Ariza_GidermeSuresi:'',Ort_AG_Ariza_GidermeSuresi:'',toplam_uzun_og_ariza_sayisi:'',toplam_uzun_ag_ariza_sayisi:'',toplam__kisa_og_ariza_sayisi:'' },
     8:{name:"FETHİYE isletme", SAİDİ: '', SAİFİ: '',Ort_OG_Ariza_GidermeSuresi:'',Ort_AG_Ariza_GidermeSuresi:'',toplam_uzun_og_ariza_sayisi:'',toplam_uzun_ag_ariza_sayisi:'',toplam__kisa_og_ariza_sayisi:'' },  
     9:{ name: "KUSADASİ isletme", SAİDİ: '', SAİFİ: '',Ort_OG_Ariza_GidermeSuresi:'',Ort_AG_Ariza_GidermeSuresi:'',toplam_uzun_og_ariza_sayisi:'',toplam_uzun_ag_ariza_sayisi:'',toplam__kisa_og_ariza_sayisi:'' },
    10:{ name:"MARMARİS isletme", SAİDİ: '', SAİFİ: '',Ort_OG_Ariza_GidermeSuresi:'',Ort_AG_Ariza_GidermeSuresi:'',toplam_uzun_og_ariza_sayisi:'',toplam_uzun_ag_ariza_sayisi:'',toplam__kisa_og_ariza_sayisi:'' },
    11:{  name:"MİLAS isletme", SAİDİ: '', SAİFİ: '',Ort_OG_Ariza_GidermeSuresi:'',Ort_AG_Ariza_GidermeSuresi:'',toplam_uzun_og_ariza_sayisi:'',toplam_uzun_ag_ariza_sayisi:'',toplam__kisa_og_ariza_sayisi:'' },
    12:{ name:"MUGLA MERKEZ isletme", SAİDİ: '', SAİFİ: '',Ort_OG_Ariza_GidermeSuresi:'',Ort_AG_Ariza_GidermeSuresi:'',toplam_uzun_og_ariza_sayisi:'',toplam_uzun_ag_ariza_sayisi:'',toplam__kisa_og_ariza_sayisi:'' },
    13:{ name :"NAZİLLİ isletme", SAİDİ: '', SAİFİ: '',Ort_OG_Ariza_GidermeSuresi:'',Ort_AG_Ariza_GidermeSuresi:'',toplam_uzun_og_ariza_sayisi:'',toplam_uzun_ag_ariza_sayisi:'',toplam__kisa_og_ariza_sayisi:'' },
    14:{ name: "ORTACA isletme",SAİDİ: '', SAİFİ: '',Ort_OG_Ariza_GidermeSuresi:'',Ort_AG_Ariza_GidermeSuresi:'',toplam_uzun_og_ariza_sayisi:'',toplam_uzun_ag_ariza_sayisi:'',toplam__kisa_og_ariza_sayisi:'' },
    15:{ name:"SARAYKOY isletme", SAİDİ: '', SAİFİ: '',Ort_OG_Ariza_GidermeSuresi:'',Ort_AG_Ariza_GidermeSuresi:'',toplam_uzun_og_ariza_sayisi:'',toplam_uzun_ag_ariza_sayisi:'',toplam__kisa_og_ariza_sayisi:'' },
    16:{ name:"SOKE isletme", SAİDİ: '', SAİFİ: '',Ort_OG_Ariza_GidermeSuresi:'',Ort_AG_Ariza_GidermeSuresi:'',toplam_uzun_og_ariza_sayisi:'',toplam_uzun_ag_ariza_sayisi:'',toplam__kisa_og_ariza_sayisi:'' },
    },
    "Temmuz": {
     1:  {name:"ACİPAYAM isletme" ,SAİDİ: '', SAİFİ: '',Ort_OG_Ariza_GidermeSuresi:'',Ort_AG_Ariza_GidermeSuresi:'',toplam_uzun_og_ariza_sayisi:'',toplam_uzun_ag_ariza_sayisi:'',toplam__kisa_og_ariza_sayisi:'' },
     2 : {name: "AYDİN MERKEZ isletme", SAİDİ: '', SAİFİ: '',Ort_OG_Ariza_GidermeSuresi:'',Ort_AG_Ariza_GidermeSuresi:'',toplam_uzun_og_ariza_sayisi:'',toplam_uzun_ag_ariza_sayisi:'',toplam__kisa_og_ariza_sayisi:'' },
     3:  {name:"BODRUM isletme",SAİDİ: '', SAİFİ: '',Ort_OG_Ariza_GidermeSuresi:'',Ort_AG_Ariza_GidermeSuresi:'',toplam_uzun_og_ariza_sayisi:'',toplam_uzun_ag_ariza_sayisi:'',toplam__kisa_og_ariza_sayisi:'' },
     4: {name: "CİNE isletme",SAİDİ: '', SAİFİ: '',Ort_OG_Ariza_GidermeSuresi:'',Ort_AG_Ariza_GidermeSuresi:'',toplam_uzun_og_ariza_sayisi:'',toplam_uzun_ag_ariza_sayisi:'',toplam__kisa_og_ariza_sayisi:'' },
     5: {name:"CİVRİL isletme", SAİDİ: '', SAİFİ: '',Ort_OG_Ariza_GidermeSuresi:'',Ort_AG_Ariza_GidermeSuresi:'',toplam_uzun_og_ariza_sayisi:'',toplam_uzun_ag_ariza_sayisi:'',toplam__kisa_og_ariza_sayisi:'' },
     6: {name:"DENİZLİ MERKEZ isletme", SAİDİ: '', SAİFİ: '',Ort_OG_Ariza_GidermeSuresi:'',Ort_AG_Ariza_GidermeSuresi:'',toplam_uzun_og_ariza_sayisi:'',toplam_uzun_ag_ariza_sayisi:'',toplam__kisa_og_ariza_sayisi:'' },
     7:{ name: "DİDİM isletme", SAİDİ: '', SAİFİ: '',Ort_OG_Ariza_GidermeSuresi:'',Ort_AG_Ariza_GidermeSuresi:'',toplam_uzun_og_ariza_sayisi:'',toplam_uzun_ag_ariza_sayisi:'',toplam__kisa_og_ariza_sayisi:'' },
     8:{name:"FETHİYE isletme", SAİDİ: '', SAİFİ: '',Ort_OG_Ariza_GidermeSuresi:'',Ort_AG_Ariza_GidermeSuresi:'',toplam_uzun_og_ariza_sayisi:'',toplam_uzun_ag_ariza_sayisi:'',toplam__kisa_og_ariza_sayisi:'' },  
     9:{ name: "KUSADASİ isletme", SAİDİ: '', SAİFİ: '',Ort_OG_Ariza_GidermeSuresi:'',Ort_AG_Ariza_GidermeSuresi:'',toplam_uzun_og_ariza_sayisi:'',toplam_uzun_ag_ariza_sayisi:'',toplam__kisa_og_ariza_sayisi:'' },
    10:{ name:"MARMARİS isletme", SAİDİ: '', SAİFİ: '',Ort_OG_Ariza_GidermeSuresi:'',Ort_AG_Ariza_GidermeSuresi:'',toplam_uzun_og_ariza_sayisi:'',toplam_uzun_ag_ariza_sayisi:'',toplam__kisa_og_ariza_sayisi:'' },
    11:{  name:"MİLAS isletme", SAİDİ: '', SAİFİ: '',Ort_OG_Ariza_GidermeSuresi:'',Ort_AG_Ariza_GidermeSuresi:'',toplam_uzun_og_ariza_sayisi:'',toplam_uzun_ag_ariza_sayisi:'',toplam__kisa_og_ariza_sayisi:'' },
    12:{ name:"MUGLA MERKEZ isletme", SAİDİ: '', SAİFİ: '',Ort_OG_Ariza_GidermeSuresi:'',Ort_AG_Ariza_GidermeSuresi:'',toplam_uzun_og_ariza_sayisi:'',toplam_uzun_ag_ariza_sayisi:'',toplam__kisa_og_ariza_sayisi:'' },
    13:{ name :"NAZİLLİ isletme", SAİDİ: '', SAİFİ: '',Ort_OG_Ariza_GidermeSuresi:'',Ort_AG_Ariza_GidermeSuresi:'',toplam_uzun_og_ariza_sayisi:'',toplam_uzun_ag_ariza_sayisi:'',toplam__kisa_og_ariza_sayisi:'' },
    14:{ name: "ORTACA isletme",SAİDİ: '', SAİFİ: '',Ort_OG_Ariza_GidermeSuresi:'',Ort_AG_Ariza_GidermeSuresi:'',toplam_uzun_og_ariza_sayisi:'',toplam_uzun_ag_ariza_sayisi:'',toplam__kisa_og_ariza_sayisi:'' },
    15:{ name:"SARAYKOY isletme", SAİDİ: '', SAİFİ: '',Ort_OG_Ariza_GidermeSuresi:'',Ort_AG_Ariza_GidermeSuresi:'',toplam_uzun_og_ariza_sayisi:'',toplam_uzun_ag_ariza_sayisi:'',toplam__kisa_og_ariza_sayisi:'' },
    16:{ name:"SOKE isletme", SAİDİ: '', SAİFİ: '',Ort_OG_Ariza_GidermeSuresi:'',Ort_AG_Ariza_GidermeSuresi:'',toplam_uzun_og_ariza_sayisi:'',toplam_uzun_ag_ariza_sayisi:'',toplam__kisa_og_ariza_sayisi:'' },
    },
    "Ağustos": {
     1:  {name:"ACİPAYAM isletme" ,SAİDİ: '', SAİFİ: '',Ort_OG_Ariza_GidermeSuresi:'',Ort_AG_Ariza_GidermeSuresi:'',toplam_uzun_og_ariza_sayisi:'',toplam_uzun_ag_ariza_sayisi:'',toplam__kisa_og_ariza_sayisi:'' },
     2 : {name: "AYDİN MERKEZ isletme", SAİDİ: '', SAİFİ: '',Ort_OG_Ariza_GidermeSuresi:'',Ort_AG_Ariza_GidermeSuresi:'',toplam_uzun_og_ariza_sayisi:'',toplam_uzun_ag_ariza_sayisi:'',toplam__kisa_og_ariza_sayisi:'' },
     3:  {name:"BODRUM isletme",SAİDİ: '', SAİFİ: '',Ort_OG_Ariza_GidermeSuresi:'',Ort_AG_Ariza_GidermeSuresi:'',toplam_uzun_og_ariza_sayisi:'',toplam_uzun_ag_ariza_sayisi:'',toplam__kisa_og_ariza_sayisi:'' },
     4: {name: "CİNE isletme",SAİDİ: '', SAİFİ: '',Ort_OG_Ariza_GidermeSuresi:'',Ort_AG_Ariza_GidermeSuresi:'',toplam_uzun_og_ariza_sayisi:'',toplam_uzun_ag_ariza_sayisi:'',toplam__kisa_og_ariza_sayisi:'' },
     5: {name:"CİVRİL isletme", SAİDİ: '', SAİFİ: '',Ort_OG_Ariza_GidermeSuresi:'',Ort_AG_Ariza_GidermeSuresi:'',toplam_uzun_og_ariza_sayisi:'',toplam_uzun_ag_ariza_sayisi:'',toplam__kisa_og_ariza_sayisi:'' },
     6: {name:"DENİZLİ MERKEZ isletme", SAİDİ: '', SAİFİ: '',Ort_OG_Ariza_GidermeSuresi:'',Ort_AG_Ariza_GidermeSuresi:'',toplam_uzun_og_ariza_sayisi:'',toplam_uzun_ag_ariza_sayisi:'',toplam__kisa_og_ariza_sayisi:'' },
     7:{ name: "DİDİM isletme", SAİDİ: '', SAİFİ: '',Ort_OG_Ariza_GidermeSuresi:'',Ort_AG_Ariza_GidermeSuresi:'',toplam_uzun_og_ariza_sayisi:'',toplam_uzun_ag_ariza_sayisi:'',toplam__kisa_og_ariza_sayisi:'' },
     8:{name:"FETHİYE isletme", SAİDİ: '', SAİFİ: '',Ort_OG_Ariza_GidermeSuresi:'',Ort_AG_Ariza_GidermeSuresi:'',toplam_uzun_og_ariza_sayisi:'',toplam_uzun_ag_ariza_sayisi:'',toplam__kisa_og_ariza_sayisi:'' },  
     9:{ name: "KUSADASİ isletme", SAİDİ: '', SAİFİ: '',Ort_OG_Ariza_GidermeSuresi:'',Ort_AG_Ariza_GidermeSuresi:'',toplam_uzun_og_ariza_sayisi:'',toplam_uzun_ag_ariza_sayisi:'',toplam__kisa_og_ariza_sayisi:'' },
    10:{ name:"MARMARİS isletme", SAİDİ: '', SAİFİ: '',Ort_OG_Ariza_GidermeSuresi:'',Ort_AG_Ariza_GidermeSuresi:'',toplam_uzun_og_ariza_sayisi:'',toplam_uzun_ag_ariza_sayisi:'',toplam__kisa_og_ariza_sayisi:'' },
    11:{  name:"MİLAS isletme", SAİDİ: '', SAİFİ: '',Ort_OG_Ariza_GidermeSuresi:'',Ort_AG_Ariza_GidermeSuresi:'',toplam_uzun_og_ariza_sayisi:'',toplam_uzun_ag_ariza_sayisi:'',toplam__kisa_og_ariza_sayisi:'' },
    12:{ name:"MUGLA MERKEZ isletme", SAİDİ: '', SAİFİ: '',Ort_OG_Ariza_GidermeSuresi:'',Ort_AG_Ariza_GidermeSuresi:'',toplam_uzun_og_ariza_sayisi:'',toplam_uzun_ag_ariza_sayisi:'',toplam__kisa_og_ariza_sayisi:'' },
    13:{ name :"NAZİLLİ isletme", SAİDİ: '', SAİFİ: '',Ort_OG_Ariza_GidermeSuresi:'',Ort_AG_Ariza_GidermeSuresi:'',toplam_uzun_og_ariza_sayisi:'',toplam_uzun_ag_ariza_sayisi:'',toplam__kisa_og_ariza_sayisi:'' },
    14:{ name: "ORTACA isletme",SAİDİ: '', SAİFİ: '',Ort_OG_Ariza_GidermeSuresi:'',Ort_AG_Ariza_GidermeSuresi:'',toplam_uzun_og_ariza_sayisi:'',toplam_uzun_ag_ariza_sayisi:'',toplam__kisa_og_ariza_sayisi:'' },
    15:{ name:"SARAYKOY isletme", SAİDİ: '', SAİFİ: '',Ort_OG_Ariza_GidermeSuresi:'',Ort_AG_Ariza_GidermeSuresi:'',toplam_uzun_og_ariza_sayisi:'',toplam_uzun_ag_ariza_sayisi:'',toplam__kisa_og_ariza_sayisi:'' },
    16:{ name:"SOKE isletme", SAİDİ: '', SAİFİ: '',Ort_OG_Ariza_GidermeSuresi:'',Ort_AG_Ariza_GidermeSuresi:'',toplam_uzun_og_ariza_sayisi:'',toplam_uzun_ag_ariza_sayisi:'',toplam__kisa_og_ariza_sayisi:'' },
    },
    "Eylül": {
     1:  {name:"ACİPAYAM isletme" ,SAİDİ: '', SAİFİ: '',Ort_OG_Ariza_GidermeSuresi:'',Ort_AG_Ariza_GidermeSuresi:'',toplam_uzun_og_ariza_sayisi:'',toplam_uzun_ag_ariza_sayisi:'',toplam__kisa_og_ariza_sayisi:'' },
     2 : {name: "AYDİN MERKEZ isletme", SAİDİ: '', SAİFİ: '',Ort_OG_Ariza_GidermeSuresi:'',Ort_AG_Ariza_GidermeSuresi:'',toplam_uzun_og_ariza_sayisi:'',toplam_uzun_ag_ariza_sayisi:'',toplam__kisa_og_ariza_sayisi:'' },
     3:  {name:"BODRUM isletme",SAİDİ: '', SAİFİ: '',Ort_OG_Ariza_GidermeSuresi:'',Ort_AG_Ariza_GidermeSuresi:'',toplam_uzun_og_ariza_sayisi:'',toplam_uzun_ag_ariza_sayisi:'',toplam__kisa_og_ariza_sayisi:'' },
     4: {name: "CİNE isletme",SAİDİ: '', SAİFİ: '',Ort_OG_Ariza_GidermeSuresi:'',Ort_AG_Ariza_GidermeSuresi:'',toplam_uzun_og_ariza_sayisi:'',toplam_uzun_ag_ariza_sayisi:'',toplam__kisa_og_ariza_sayisi:'' },
     5: {name:"CİVRİL isletme", SAİDİ: '', SAİFİ: '',Ort_OG_Ariza_GidermeSuresi:'',Ort_AG_Ariza_GidermeSuresi:'',toplam_uzun_og_ariza_sayisi:'',toplam_uzun_ag_ariza_sayisi:'',toplam__kisa_og_ariza_sayisi:'' },
     6: {name:"DENİZLİ MERKEZ isletme", SAİDİ: '', SAİFİ: '',Ort_OG_Ariza_GidermeSuresi:'',Ort_AG_Ariza_GidermeSuresi:'',toplam_uzun_og_ariza_sayisi:'',toplam_uzun_ag_ariza_sayisi:'',toplam__kisa_og_ariza_sayisi:'' },
     7:{ name: "DİDİM isletme", SAİDİ: '', SAİFİ: '',Ort_OG_Ariza_GidermeSuresi:'',Ort_AG_Ariza_GidermeSuresi:'',toplam_uzun_og_ariza_sayisi:'',toplam_uzun_ag_ariza_sayisi:'',toplam__kisa_og_ariza_sayisi:'' },
     8:{name:"FETHİYE isletme", SAİDİ: '', SAİFİ: '',Ort_OG_Ariza_GidermeSuresi:'',Ort_AG_Ariza_GidermeSuresi:'',toplam_uzun_og_ariza_sayisi:'',toplam_uzun_ag_ariza_sayisi:'',toplam__kisa_og_ariza_sayisi:'' },  
     9:{ name: "KUSADASİ isletme", SAİDİ: '', SAİFİ: '',Ort_OG_Ariza_GidermeSuresi:'',Ort_AG_Ariza_GidermeSuresi:'',toplam_uzun_og_ariza_sayisi:'',toplam_uzun_ag_ariza_sayisi:'',toplam__kisa_og_ariza_sayisi:'' },
    10:{ name:"MARMARİS isletme", SAİDİ: '', SAİFİ: '',Ort_OG_Ariza_GidermeSuresi:'',Ort_AG_Ariza_GidermeSuresi:'',toplam_uzun_og_ariza_sayisi:'',toplam_uzun_ag_ariza_sayisi:'',toplam__kisa_og_ariza_sayisi:'' },
    11:{  name:"MİLAS isletme", SAİDİ: '', SAİFİ: '',Ort_OG_Ariza_GidermeSuresi:'',Ort_AG_Ariza_GidermeSuresi:'',toplam_uzun_og_ariza_sayisi:'',toplam_uzun_ag_ariza_sayisi:'',toplam__kisa_og_ariza_sayisi:'' },
    12:{ name:"MUGLA MERKEZ isletme", SAİDİ: '', SAİFİ: '',Ort_OG_Ariza_GidermeSuresi:'',Ort_AG_Ariza_GidermeSuresi:'',toplam_uzun_og_ariza_sayisi:'',toplam_uzun_ag_ariza_sayisi:'',toplam__kisa_og_ariza_sayisi:'' },
    13:{ name :"NAZİLLİ isletme", SAİDİ: '', SAİFİ: '',Ort_OG_Ariza_GidermeSuresi:'',Ort_AG_Ariza_GidermeSuresi:'',toplam_uzun_og_ariza_sayisi:'',toplam_uzun_ag_ariza_sayisi:'',toplam__kisa_og_ariza_sayisi:'' },
    14:{ name: "ORTACA isletme",SAİDİ: '', SAİFİ: '',Ort_OG_Ariza_GidermeSuresi:'',Ort_AG_Ariza_GidermeSuresi:'',toplam_uzun_og_ariza_sayisi:'',toplam_uzun_ag_ariza_sayisi:'',toplam__kisa_og_ariza_sayisi:'' },
    15:{ name:"SARAYKOY isletme", SAİDİ: '', SAİFİ: '',Ort_OG_Ariza_GidermeSuresi:'',Ort_AG_Ariza_GidermeSuresi:'',toplam_uzun_og_ariza_sayisi:'',toplam_uzun_ag_ariza_sayisi:'',toplam__kisa_og_ariza_sayisi:'' },
    16:{ name:"SOKE isletme", SAİDİ: '', SAİFİ: '',Ort_OG_Ariza_GidermeSuresi:'',Ort_AG_Ariza_GidermeSuresi:'',toplam_uzun_og_ariza_sayisi:'',toplam_uzun_ag_ariza_sayisi:'',toplam__kisa_og_ariza_sayisi:'' },
    },
    "Ekim": {
     1:  {name:"ACİPAYAM isletme" ,SAİDİ: '', SAİFİ: '',Ort_OG_Ariza_GidermeSuresi:'',Ort_AG_Ariza_GidermeSuresi:'',toplam_uzun_og_ariza_sayisi:'',toplam_uzun_ag_ariza_sayisi:'',toplam__kisa_og_ariza_sayisi:'' },
     2 : {name: "AYDİN MERKEZ isletme", SAİDİ: '', SAİFİ: '',Ort_OG_Ariza_GidermeSuresi:'',Ort_AG_Ariza_GidermeSuresi:'',toplam_uzun_og_ariza_sayisi:'',toplam_uzun_ag_ariza_sayisi:'',toplam__kisa_og_ariza_sayisi:'' },
     3:  {name:"BODRUM isletme",SAİDİ: '', SAİFİ: '',Ort_OG_Ariza_GidermeSuresi:'',Ort_AG_Ariza_GidermeSuresi:'',toplam_uzun_og_ariza_sayisi:'',toplam_uzun_ag_ariza_sayisi:'',toplam__kisa_og_ariza_sayisi:'' },
     4: {name: "CİNE isletme",SAİDİ: '', SAİFİ: '',Ort_OG_Ariza_GidermeSuresi:'',Ort_AG_Ariza_GidermeSuresi:'',toplam_uzun_og_ariza_sayisi:'',toplam_uzun_ag_ariza_sayisi:'',toplam__kisa_og_ariza_sayisi:'' },
     5: {name:"CİVRİL isletme", SAİDİ: '', SAİFİ: '',Ort_OG_Ariza_GidermeSuresi:'',Ort_AG_Ariza_GidermeSuresi:'',toplam_uzun_og_ariza_sayisi:'',toplam_uzun_ag_ariza_sayisi:'',toplam__kisa_og_ariza_sayisi:'' },
     6: {name:"DENİZLİ MERKEZ isletme", SAİDİ: '', SAİFİ: '',Ort_OG_Ariza_GidermeSuresi:'',Ort_AG_Ariza_GidermeSuresi:'',toplam_uzun_og_ariza_sayisi:'',toplam_uzun_ag_ariza_sayisi:'',toplam__kisa_og_ariza_sayisi:'' },
     7:{ name: "DİDİM isletme", SAİDİ: '', SAİFİ: '',Ort_OG_Ariza_GidermeSuresi:'',Ort_AG_Ariza_GidermeSuresi:'',toplam_uzun_og_ariza_sayisi:'',toplam_uzun_ag_ariza_sayisi:'',toplam__kisa_og_ariza_sayisi:'' },
     8:{name:"FETHİYE isletme", SAİDİ: '', SAİFİ: '',Ort_OG_Ariza_GidermeSuresi:'',Ort_AG_Ariza_GidermeSuresi:'',toplam_uzun_og_ariza_sayisi:'',toplam_uzun_ag_ariza_sayisi:'',toplam__kisa_og_ariza_sayisi:'' },  
     9:{ name: "KUSADASİ isletme", SAİDİ: '', SAİFİ: '',Ort_OG_Ariza_GidermeSuresi:'',Ort_AG_Ariza_GidermeSuresi:'',toplam_uzun_og_ariza_sayisi:'',toplam_uzun_ag_ariza_sayisi:'',toplam__kisa_og_ariza_sayisi:'' },
    10:{ name:"MARMARİS isletme", SAİDİ: '', SAİFİ: '',Ort_OG_Ariza_GidermeSuresi:'',Ort_AG_Ariza_GidermeSuresi:'',toplam_uzun_og_ariza_sayisi:'',toplam_uzun_ag_ariza_sayisi:'',toplam__kisa_og_ariza_sayisi:'' },
    11:{  name:"MİLAS isletme", SAİDİ: '', SAİFİ: '',Ort_OG_Ariza_GidermeSuresi:'',Ort_AG_Ariza_GidermeSuresi:'',toplam_uzun_og_ariza_sayisi:'',toplam_uzun_ag_ariza_sayisi:'',toplam__kisa_og_ariza_sayisi:'' },
    12:{ name:"MUGLA MERKEZ isletme", SAİDİ: '', SAİFİ: '',Ort_OG_Ariza_GidermeSuresi:'',Ort_AG_Ariza_GidermeSuresi:'',toplam_uzun_og_ariza_sayisi:'',toplam_uzun_ag_ariza_sayisi:'',toplam__kisa_og_ariza_sayisi:'' },
    13:{ name :"NAZİLLİ isletme", SAİDİ: '', SAİFİ: '',Ort_OG_Ariza_GidermeSuresi:'',Ort_AG_Ariza_GidermeSuresi:'',toplam_uzun_og_ariza_sayisi:'',toplam_uzun_ag_ariza_sayisi:'',toplam__kisa_og_ariza_sayisi:'' },
    14:{ name: "ORTACA isletme",SAİDİ: '', SAİFİ: '',Ort_OG_Ariza_GidermeSuresi:'',Ort_AG_Ariza_GidermeSuresi:'',toplam_uzun_og_ariza_sayisi:'',toplam_uzun_ag_ariza_sayisi:'',toplam__kisa_og_ariza_sayisi:'' },
    15:{ name:"SARAYKOY isletme", SAİDİ: '', SAİFİ: '',Ort_OG_Ariza_GidermeSuresi:'',Ort_AG_Ariza_GidermeSuresi:'',toplam_uzun_og_ariza_sayisi:'',toplam_uzun_ag_ariza_sayisi:'',toplam__kisa_og_ariza_sayisi:'' },
    16:{ name:"SOKE isletme", SAİDİ: '', SAİFİ: '',Ort_OG_Ariza_GidermeSuresi:'',Ort_AG_Ariza_GidermeSuresi:'',toplam_uzun_og_ariza_sayisi:'',toplam_uzun_ag_ariza_sayisi:'',toplam__kisa_og_ariza_sayisi:'' },
    },
    "Kasım": {
     1:  {name:"ACİPAYAM isletme" ,SAİDİ: '', SAİFİ: '',Ort_OG_Ariza_GidermeSuresi:'',Ort_AG_Ariza_GidermeSuresi:'',toplam_uzun_og_ariza_sayisi:'',toplam_uzun_ag_ariza_sayisi:'',toplam__kisa_og_ariza_sayisi:'' },
     2 : {name: "AYDİN MERKEZ isletme", SAİDİ: '', SAİFİ: '',Ort_OG_Ariza_GidermeSuresi:'',Ort_AG_Ariza_GidermeSuresi:'',toplam_uzun_og_ariza_sayisi:'',toplam_uzun_ag_ariza_sayisi:'',toplam__kisa_og_ariza_sayisi:'' },
     3:  {name:"BODRUM isletme",SAİDİ: '', SAİFİ: '',Ort_OG_Ariza_GidermeSuresi:'',Ort_AG_Ariza_GidermeSuresi:'',toplam_uzun_og_ariza_sayisi:'',toplam_uzun_ag_ariza_sayisi:'',toplam__kisa_og_ariza_sayisi:'' },
     4: {name: "CİNE isletme",SAİDİ: '', SAİFİ: '',Ort_OG_Ariza_GidermeSuresi:'',Ort_AG_Ariza_GidermeSuresi:'',toplam_uzun_og_ariza_sayisi:'',toplam_uzun_ag_ariza_sayisi:'',toplam__kisa_og_ariza_sayisi:'' },
     5: {name:"CİVRİL isletme", SAİDİ: '', SAİFİ: '',Ort_OG_Ariza_GidermeSuresi:'',Ort_AG_Ariza_GidermeSuresi:'',toplam_uzun_og_ariza_sayisi:'',toplam_uzun_ag_ariza_sayisi:'',toplam__kisa_og_ariza_sayisi:'' },
     6: {name:"DENİZLİ MERKEZ isletme", SAİDİ: '', SAİFİ: '',Ort_OG_Ariza_GidermeSuresi:'',Ort_AG_Ariza_GidermeSuresi:'',toplam_uzun_og_ariza_sayisi:'',toplam_uzun_ag_ariza_sayisi:'',toplam__kisa_og_ariza_sayisi:'' },
     7:{ name: "DİDİM isletme", SAİDİ: '', SAİFİ: '',Ort_OG_Ariza_GidermeSuresi:'',Ort_AG_Ariza_GidermeSuresi:'',toplam_uzun_og_ariza_sayisi:'',toplam_uzun_ag_ariza_sayisi:'',toplam__kisa_og_ariza_sayisi:'' },
     8:{name:"FETHİYE isletme", SAİDİ: '', SAİFİ: '',Ort_OG_Ariza_GidermeSuresi:'',Ort_AG_Ariza_GidermeSuresi:'',toplam_uzun_og_ariza_sayisi:'',toplam_uzun_ag_ariza_sayisi:'',toplam__kisa_og_ariza_sayisi:'' },  
     9:{ name: "KUSADASİ isletme", SAİDİ: '', SAİFİ: '',Ort_OG_Ariza_GidermeSuresi:'',Ort_AG_Ariza_GidermeSuresi:'',toplam_uzun_og_ariza_sayisi:'',toplam_uzun_ag_ariza_sayisi:'',toplam__kisa_og_ariza_sayisi:'' },
    10:{ name:"MARMARİS isletme", SAİDİ: '', SAİFİ: '',Ort_OG_Ariza_GidermeSuresi:'',Ort_AG_Ariza_GidermeSuresi:'',toplam_uzun_og_ariza_sayisi:'',toplam_uzun_ag_ariza_sayisi:'',toplam__kisa_og_ariza_sayisi:'' },
    11:{  name:"MİLAS isletme", SAİDİ: '', SAİFİ: '',Ort_OG_Ariza_GidermeSuresi:'',Ort_AG_Ariza_GidermeSuresi:'',toplam_uzun_og_ariza_sayisi:'',toplam_uzun_ag_ariza_sayisi:'',toplam__kisa_og_ariza_sayisi:'' },
    12:{ name:"MUGLA MERKEZ isletme", SAİDİ: '', SAİFİ: '',Ort_OG_Ariza_GidermeSuresi:'',Ort_AG_Ariza_GidermeSuresi:'',toplam_uzun_og_ariza_sayisi:'',toplam_uzun_ag_ariza_sayisi:'',toplam__kisa_og_ariza_sayisi:'' },
    13:{ name :"NAZİLLİ isletme", SAİDİ: '', SAİFİ: '',Ort_OG_Ariza_GidermeSuresi:'',Ort_AG_Ariza_GidermeSuresi:'',toplam_uzun_og_ariza_sayisi:'',toplam_uzun_ag_ariza_sayisi:'',toplam__kisa_og_ariza_sayisi:'' },
    14:{ name: "ORTACA isletme",SAİDİ: '', SAİFİ: '',Ort_OG_Ariza_GidermeSuresi:'',Ort_AG_Ariza_GidermeSuresi:'',toplam_uzun_og_ariza_sayisi:'',toplam_uzun_ag_ariza_sayisi:'',toplam__kisa_og_ariza_sayisi:'' },
    15:{ name:"SARAYKOY isletme", SAİDİ: '', SAİFİ: '',Ort_OG_Ariza_GidermeSuresi:'',Ort_AG_Ariza_GidermeSuresi:'',toplam_uzun_og_ariza_sayisi:'',toplam_uzun_ag_ariza_sayisi:'',toplam__kisa_og_ariza_sayisi:'' },
    16:{ name:"SOKE isletme", SAİDİ: '', SAİFİ: '',Ort_OG_Ariza_GidermeSuresi:'',Ort_AG_Ariza_GidermeSuresi:'',toplam_uzun_og_ariza_sayisi:'',toplam_uzun_ag_ariza_sayisi:'',toplam__kisa_og_ariza_sayisi:'' },
    },
    "Aralık": {
     1:  {name:"ACİPAYAM isletme" ,SAİDİ: '', SAİFİ: '',Ort_OG_Ariza_GidermeSuresi:'',Ort_AG_Ariza_GidermeSuresi:'',toplam_uzun_og_ariza_sayisi:'',toplam_uzun_ag_ariza_sayisi:'',toplam__kisa_og_ariza_sayisi:'' },
     2 : {name: "AYDİN MERKEZ isletme", SAİDİ: '', SAİFİ: '',Ort_OG_Ariza_GidermeSuresi:'',Ort_AG_Ariza_GidermeSuresi:'',toplam_uzun_og_ariza_sayisi:'',toplam_uzun_ag_ariza_sayisi:'',toplam__kisa_og_ariza_sayisi:'' },
     3:  {name:"BODRUM isletme",SAİDİ: '', SAİFİ: '',Ort_OG_Ariza_GidermeSuresi:'',Ort_AG_Ariza_GidermeSuresi:'',toplam_uzun_og_ariza_sayisi:'',toplam_uzun_ag_ariza_sayisi:'',toplam__kisa_og_ariza_sayisi:'' },
     4: {name: "CİNE isletme",SAİDİ: '', SAİFİ: '',Ort_OG_Ariza_GidermeSuresi:'',Ort_AG_Ariza_GidermeSuresi:'',toplam_uzun_og_ariza_sayisi:'',toplam_uzun_ag_ariza_sayisi:'',toplam__kisa_og_ariza_sayisi:'' },
     5: {name:"CİVRİL isletme", SAİDİ: '', SAİFİ: '',Ort_OG_Ariza_GidermeSuresi:'',Ort_AG_Ariza_GidermeSuresi:'',toplam_uzun_og_ariza_sayisi:'',toplam_uzun_ag_ariza_sayisi:'',toplam__kisa_og_ariza_sayisi:'' },
     6: {name:"DENİZLİ MERKEZ isletme", SAİDİ: '', SAİFİ: '',Ort_OG_Ariza_GidermeSuresi:'',Ort_AG_Ariza_GidermeSuresi:'',toplam_uzun_og_ariza_sayisi:'',toplam_uzun_ag_ariza_sayisi:'',toplam__kisa_og_ariza_sayisi:'' },
     7:{ name: "DİDİM isletme", SAİDİ: '', SAİFİ: '',Ort_OG_Ariza_GidermeSuresi:'',Ort_AG_Ariza_GidermeSuresi:'',toplam_uzun_og_ariza_sayisi:'',toplam_uzun_ag_ariza_sayisi:'',toplam__kisa_og_ariza_sayisi:'' },
     8:{name:"FETHİYE isletme", SAİDİ: '', SAİFİ: '',Ort_OG_Ariza_GidermeSuresi:'',Ort_AG_Ariza_GidermeSuresi:'',toplam_uzun_og_ariza_sayisi:'',toplam_uzun_ag_ariza_sayisi:'',toplam__kisa_og_ariza_sayisi:'' },  
     9:{ name: "KUSADASİ isletme", SAİDİ: '', SAİFİ: '',Ort_OG_Ariza_GidermeSuresi:'',Ort_AG_Ariza_GidermeSuresi:'',toplam_uzun_og_ariza_sayisi:'',toplam_uzun_ag_ariza_sayisi:'',toplam__kisa_og_ariza_sayisi:'' },
    10:{ name:"MARMARİS isletme", SAİDİ: '', SAİFİ: '',Ort_OG_Ariza_GidermeSuresi:'',Ort_AG_Ariza_GidermeSuresi:'',toplam_uzun_og_ariza_sayisi:'',toplam_uzun_ag_ariza_sayisi:'',toplam__kisa_og_ariza_sayisi:'' },
    11:{  name:"MİLAS isletme", SAİDİ: '', SAİFİ: '',Ort_OG_Ariza_GidermeSuresi:'',Ort_AG_Ariza_GidermeSuresi:'',toplam_uzun_og_ariza_sayisi:'',toplam_uzun_ag_ariza_sayisi:'',toplam__kisa_og_ariza_sayisi:'' },
    12:{ name:"MUGLA MERKEZ isletme", SAİDİ: '', SAİFİ: '',Ort_OG_Ariza_GidermeSuresi:'',Ort_AG_Ariza_GidermeSuresi:'',toplam_uzun_og_ariza_sayisi:'',toplam_uzun_ag_ariza_sayisi:'',toplam__kisa_og_ariza_sayisi:'' },
    13:{ name :"NAZİLLİ isletme", SAİDİ: '', SAİFİ: '',Ort_OG_Ariza_GidermeSuresi:'',Ort_AG_Ariza_GidermeSuresi:'',toplam_uzun_og_ariza_sayisi:'',toplam_uzun_ag_ariza_sayisi:'',toplam__kisa_og_ariza_sayisi:'' },
    14:{ name: "ORTACA isletme",SAİDİ: '', SAİFİ: '',Ort_OG_Ariza_GidermeSuresi:'',Ort_AG_Ariza_GidermeSuresi:'',toplam_uzun_og_ariza_sayisi:'',toplam_uzun_ag_ariza_sayisi:'',toplam__kisa_og_ariza_sayisi:'' },
    15:{ name:"SARAYKOY isletme", SAİDİ: '', SAİFİ: '',Ort_OG_Ariza_GidermeSuresi:'',Ort_AG_Ariza_GidermeSuresi:'',toplam_uzun_og_ariza_sayisi:'',toplam_uzun_ag_ariza_sayisi:'',toplam__kisa_og_ariza_sayisi:'' },
    16:{ name:"SOKE isletme", SAİDİ: '', SAİFİ: '',Ort_OG_Ariza_GidermeSuresi:'',Ort_AG_Ariza_GidermeSuresi:'',toplam_uzun_og_ariza_sayisi:'',toplam_uzun_ag_ariza_sayisi:'',toplam__kisa_og_ariza_sayisi:'' },
    },
 // Diğer aylar...
};

const DataContext = createContext();
export const DataProvider = ({ children }) => {
    const [data, setData] = useState(initialState);
  
    const updateSaidiSaifi = (updateArray) => {
      const newData = { ...data };
  
      updateArray.forEach(item => {
        // Gelen sorgu sonucundaki "ay" değeri doğrudan state içindeki anahtar ile eşleşiyor
        const monthKey = item.ay; 
        console.log("Updating month:", monthKey);
        
        // Eğer belirtilen ay state içerisinde varsa
        if(newData[monthKey]) {
            console.log("girdi monteky ne data")
          // İlgili ay içindeki ilçeler arasında, "isletme" adı eşleşen girdiyi bul
          const districtEntry = Object.entries(newData[monthKey]).find(
            ([, districtData]) => districtData.name === item.isletme
          );
          
          if (districtEntry) {
            console.log("girdi distric")
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
      
      setData(newData);
    };
  
    return (
      <DataContext.Provider value={{ data, updateSaidiSaifi }}>
        {children}
      </DataContext.Provider>
    );
  };
  
  

export const useData = () => useContext(DataContext);
