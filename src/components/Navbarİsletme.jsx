import React from 'react';
import './Navbar.css';

function Navbarİsletme({ onIsletmeChange }) { 
  return (
    <nav className="navbar">
      <a href="#Acipayam" onClick={() => onIsletmeChange('ACİPAYAM isletme')}>ACIPAYAM</a>
      <a href="#AydınM" onClick={() => onIsletmeChange("AYDİN MERKEZ isletme")}>AYDIN MERKEZ</a>
      <a href="#Bodrum"  onClick={() => onIsletmeChange("BODRUM isletme")}>BODRUM</a>
      <a href="#Çine" onClick={() => onIsletmeChange("CİNE isletme")}>ÇİNE</a>
      <a href="#Çivril" onClick={() => onIsletmeChange("CİVRİL isletme")}>ÇİVRİL</a>
      <a href="#DenizliM" onClick={() => onIsletmeChange("DENİZLİ MERKEZ isletme")}>DENİZLİ MERKEZ</a>
      <a href="#Didim" onClick={() => onIsletmeChange("DİDİM isletme")}>DİDİM</a>

      <a href="#Fethiye" onClick={() => onIsletmeChange("FETHİYE isletme")}>FETHİYE</a>
      <a href="#Kuşadasi" onClick={() => onIsletmeChange("KUSADASİ isletme")}>KUŞADASI</a>
      <a href="#Marmaris" onClick={() => onIsletmeChange("MARMARİS isletme")}>MARMARİS</a>
      <a href="#Milas" onClick={() => onIsletmeChange("MİLAS isletme")}>MİLAS</a>
      <a href="#Muğlam" onClick={() => onIsletmeChange("MUGLA MERKEZ isletme")}>MUĞLA MERKEZ</a>
      <a href="#Nazilli" onClick={() => onIsletmeChange("NAZİLLİ isletme")}>NAZİLLİ</a>
      <a href="#Ortaca" onClick={() => onIsletmeChange("ORTACA isletme")}>ORTACA</a>
      <a href="#Sarayköy" onClick={() => onIsletmeChange("SARAYKOY isletme")}>SARAYKÖY</a>
      <a href="#Söke" onClick={() => onIsletmeChange("SOKE isletme")}>SÖKE</a>
    </nav>
  );
}

export default Navbarİsletme;
