import React from 'react';
import './Header.css'
import headerImage from '../assets/header.png'
function Header() {
  return (
    <header>
    <div className="bgr-gradient">
      <div className="row justify-content-center text-white">
        <div className="col-3 offset-1 mt-5 pt-5" id="here" >
          <h1 className ="headerMainText">BrandName Ads</h1>
          <div className="headerTextSec">
          <h2 class="fs-1 headerSecText">Ads that work as hard as you do</h2>
          <p class="fs-4 headerParagraph">Ready to meet audiences where they shop, read, listen, and watch?</p>
          </div>
        </div>
        <div className="col-6 ">
          <img  id="headerImage" src={headerImage}/>
        </div>
      </div>

    </div>
    </header>
  );
}

export default Header;