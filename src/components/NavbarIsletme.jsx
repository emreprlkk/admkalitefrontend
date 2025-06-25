import React from 'react';
import EastSharpIcon from '@mui/icons-material/EastSharp';
import './Navbar.css';

function NavbarIsletme({ onIsletmeChange }) {
  //newIsletmeName,bolgecount,İsletmecount,directİsletmecount
  return (
    <nav className="navbar">
        <div className="nav-group-inline">
      <span className="nav-group-title">ADM & BÖLGE  <EastSharpIcon className="inline-icon" color="primary" fontSize="medium" /> </span>
      <a href="#ADM" onClick={() => onIsletmeChange('ADM', 920481, 1, 1)}>ADM </a>
      <a href="#AYDINBOLGE" onClick={() => onIsletmeChange("AYDIN BOLGE", 9, 7, 17)}>AYDIN BÖLGE</a>
      <a href="#DENIZLIBOLGE" onClick={() => onIsletmeChange("DENIZLI BOLGE", 20, 5, 18)}>DENİZLİ BÖLGE</a>
      <a href="#MUGLABOLGE" onClick={() => onIsletmeChange("MUGLA BOLGE", 48, 5, 19)}>MUĞLA BÖLGE</a>
      <a href="#BODRUMBOLGE" onClick={() => onIsletmeChange("BODRUM BOLGE", 481, 3, 20)}>BODRUM BÖLGE</a>
    </div>
    <div className="nav-group-inline">
      <span className="nav-group-title">DENİZLİ <EastSharpIcon className="inline-icon" color="primary" fontSize="medium" /> </span>
      <a href="#Acipayam" onClick={() => onIsletmeChange('ACİPAYAM isletme', 20, 1, 1)}>ACIPAYAM</a>
      <a href="#Çivril" onClick={() => onIsletmeChange("CİVRİL isletme", 20, 2, 5)}>ÇİVRİL</a>
      <a href="#DenizliM" onClick={() => onIsletmeChange("DENİZLİ MERKEZ isletme", 20, 3, 6)}>DENİZLİ MERKEZ</a>
      <a href="#Sarayköy" onClick={() => onIsletmeChange("SARAYKOY isletme", 20, 4, 15)}>SARAYKÖY</a>
    </div>
  
    <div className="nav-group-inline">
      <span className="nav-group-title">AYDIN  <EastSharpIcon className="inline-icon" color="primary" fontSize="medium" /></span>
      <a href="#AydınM" onClick={() => onIsletmeChange("AYDİN MERKEZ isletme", 9, 1, 2)}>AYDIN MERKEZ</a>
      <a href="#Çine" onClick={() => onIsletmeChange("CİNE isletme", 9, 2, 4)}>ÇİNE</a>
      <a href="#Didim" onClick={() => onIsletmeChange("DİDİM isletme", 9, 3, 7)}>DİDİM</a>
      <a href="#Kuşadasi" onClick={() => onIsletmeChange("KUSADASİ isletme", 9, 4, 9)}>KUŞADASI</a>
      <a href="#Nazilli" onClick={() => onIsletmeChange("NAZİLLİ isletme", 9, 5, 13)}>NAZİLLİ</a>
      <a href="#Söke" onClick={() => onIsletmeChange("SOKE isletme", 9, 6, 16)}>SÖKE</a>
    </div>
  
    <div className="nav-group-inline">
      <span className="nav-group-title">MUĞLA <EastSharpIcon className="inline-icon" color="primary" fontSize="medium" /> </span>
      <a href="#Bodrum" onClick={() => onIsletmeChange("BODRUM isletme", 481, 1, 3)}>BODRUM</a>
      <a href="#Fethiye" onClick={() => onIsletmeChange("FETHİYE isletme", 48, 1, 8)}>FETHİYE</a>
      <a href="#Marmaris" onClick={() => onIsletmeChange("MARMARİS isletme", 48, 2, 10)}>MARMARİS</a>
      <a href="#Milas" onClick={() => onIsletmeChange("MİLAS isletme", 481, 2, 11)}>MİLAS</a>
      <a href="#Muğlam" onClick={() => onIsletmeChange("MUGLA MERKEZ isletme", 48, 3, 12)}>MUĞLA MERKEZ</a>
      <a href="#Ortaca" onClick={() => onIsletmeChange("ORTACA isletme", 48, 4, 14)}>ORTACA</a>
    </div>
  </nav>
  );
}

export default NavbarIsletme;
