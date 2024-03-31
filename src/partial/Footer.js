import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { useTheme,useThemeUpdate } from '../ThemeContext';
function Footer() {
  const darkTheme = useTheme()
  return (
    <footer className={`${darkTheme?'footerContainer':'footerContainerLight'}`} >
      <div className={`${darkTheme?'footerSocial':'footerSocialLight'}`}>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <i className="bi bi-facebook circle-icon "></i>
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <i className="bi bi-instagram circle-icon"></i>
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <i className="bi bi-twitter-x circle-icon" ></i>
        </a>
      </div>
      <div className={`${darkTheme?'footerNav':'footerNavLight'}`}>
        <ul>
          <li>
            <Link to='/' className='nav-link active'>Home</Link>
          </li>
          <li>
            <Link to='/about' className='nav-link'>About Us</Link>
          </li>
          <li>
            <Link to='/contact' className='nav-link'>Contact Us</Link>
          </li>
          <div className={`${darkTheme?'footerCopyRights':'footerCopyRightsLight'}`}>
          <p>{"Copyright ©" + new Date().getFullYear() + " Brandname ads"}</p>
          </div>
        </ul>

      </div>
      
    </footer>
  );
}

export default Footer;