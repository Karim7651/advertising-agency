import React from 'react';
import './Header.css'
import headerImage from '../assets/header.png'
import { useTheme } from '../ThemeContext';
function Header() {
  const darkTheme = useTheme()
  return (
    <header>
      
    <div className={`${darkTheme ? "bgr-gradient":"bgr-gradientLight"}`}>
      <div className="row justify-content-center text-white">
        <div className="col-3 offset-1 mt-5 pt-5" id="here" >
          <h1 className ="headerMainText">BrandName Ads</h1>
          <div className="headerTextSec">
          <h2 className="fs-1 headerSecText">Ads that work as hard as you do</h2>
          <p className="fs-5 headerParagraph">Ready to meet audiences where they shop, read, listen, and watch?</p>
          </div>
        </div>
        <div className="col-6 ">
          <img  id="headerImage" className='image-fluid float-right' src={headerImage}/>
        </div>
      </div>

    </div>
    </header>
  );
}

export default Header;