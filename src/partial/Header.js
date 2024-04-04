import React from 'react';
import './Header.css'
import headerImage from '../assets/header.png'
import { useTheme } from '../ThemeContext';
function Header() {
  const darkTheme = useTheme()
  return (
    <div className={`${darkTheme? 'headerContainer':'headerContainerLight'}`}>
      <div className={`${darkTheme ? 'headerText':'headerTextLight'}`}>
        <h1 id="headerMainText">BrandName ads</h1>
        <h2 className="headerSecText">Ads that work as hard as you do</h2>
        <p className="headerSecText">Ready to meet audiences where they shop, read, listen, and watch?</p>
      </div>
      <img src={headerImage} alt="header image" id="headerImage"/> 
    </div>

  );
}

export default Header;