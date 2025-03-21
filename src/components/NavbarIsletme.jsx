import React from 'react';
import './Navbar.css';

function NavbarIsletme({ onIsletmeChange }) { 
  return (
    <nav className="navbar">
      <a href="#Acipayam" onClick={() => onIsletmeChange('ACİPAYAM isletme',20,1)}>ACIPAYAM</a>
      <a href="#AydınM" onClick={() => onIsletmeChange("AYDİN MERKEZ isletme",9,1)}>AYDIN MERKEZ</a>
      <a href="#Bodrum"  onClick={() => onIsletmeChange("BODRUM isletme",481,1)}>BODRUM</a>
      <a href="#Çine" onClick={() => onIsletmeChange("CİNE isletme",9,2)}>ÇİNE</a>
      <a href="#Çivril" onClick={() => onIsletmeChange("CİVRİL isletme",20,2)}>ÇİVRİL</a>
      <a href="#DenizliM" onClick={() => onIsletmeChange("DENİZLİ MERKEZ isletme",20,3)}>DENİZLİ MERKEZ</a>
      <a href="#Didim" onClick={() => onIsletmeChange("DİDİM isletme",9,3)}>DİDİM</a>

      <a href="#Fethiye" onClick={() => onIsletmeChange("FETHİYE isletme",48,1)}>FETHİYE</a>
      <a href="#Kuşadasi" onClick={() => onIsletmeChange("KUSADASİ isletme",9,4)}>KUŞADASI</a>
      <a href="#Marmaris" onClick={() => onIsletmeChange("MARMARİS isletme",48,2)}>MARMARİS</a>
      <a href="#Milas" onClick={() => onIsletmeChange("MİLAS isletme",481,2)}>MİLAS</a>
      <a href="#Muğlam" onClick={() => onIsletmeChange("MUGLA MERKEZ isletme",48,3)}>MUĞLA MERKEZ</a>
      <a href="#Nazilli" onClick={() => onIsletmeChange("NAZİLLİ isletme",9,5)}>NAZİLLİ</a>
      <a href="#Ortaca" onClick={() => onIsletmeChange("ORTACA isletme",48,4)}>ORTACA</a>
      <a href="#Sarayköy" onClick={() => onIsletmeChange("SARAYKOY isletme",20,4)}>SARAYKÖY</a>
      <a href="#Söke" onClick={() => onIsletmeChange("SOKE isletme",9,6)}>SÖKE</a></nav>
  );
}

export default NavbarIsletme;
