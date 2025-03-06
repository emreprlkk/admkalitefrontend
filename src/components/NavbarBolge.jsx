import React from 'react';
import './Navbar.css';

function NavbarBolge({ onIsletmeChange }) { 
  return (
    <nav className="navbar_bOLGE">
      <a href="#AydınB" onClick={() => onIsletmeChange("AYDIN")}>AYDIN BÖLGE</a>
      <a href="#BodrumB" onClick={() => onIsletmeChange("BODRUM")}>BODRUM BÖLGE</a>
      <a href="#DenizliB"  onClick={() => onIsletmeChange("DENİZLİ")}>DENİZLİ BÖLGE</a>
      <a href="#MuglaB" onClick={() => onIsletmeChange("MUĞLA")}>MUĞLA BÖLGE</a>
     
    </nav>
  );
}

export default NavbarBolge;
