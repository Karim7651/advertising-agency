import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
function Footer() {
  return (
    <footer className="footerContainer">
      <div className="footerSocial">
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
      <div className="footerNav">
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
          <div className="footerCopyRights">
          <p>{"Copyright ©" + new Date().getFullYear() + " Brandname ads"}</p>
          </div>
        </ul>

      </div>
      
    </footer>
  );
}

export default Footer;