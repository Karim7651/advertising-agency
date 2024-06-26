import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState,useEffect} from 'react'
import { Link } from 'react-router-dom';
import './Nav.css';
import ThemeButton from './ThemeButton';
import {useTheme,useThemeUpdate} from '../ThemeContext'
function Nav() {
    const darkTheme = useTheme()
    const toggleTheme = useThemeUpdate()

    const [isVisible, setIsVisible] = useState(true);
    useEffect(() => {
      let lastScrollY = window.scrollY;
  
      const handleScroll = () => {
        const currentScrollY = window.scrollY;
        if (currentScrollY > lastScrollY && window.scrollY > 30) {
          setIsVisible(false); // Scrolling down, hide the component
        } else {
          setIsVisible(true); // Scrolling up, show the component
        }
        lastScrollY = currentScrollY;
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        //when unmounted, cleanup it is not mandatory it is optional
        //it is best practice to remove listeners when component is unmounted
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
    const componentStyles = {
        position: 'sticky',
        top: '0',
        zIndex:'999',
        transform: isVisible ? 'translateY(0)' : 'translateY(-100%)',
        transition: 'transform 0.3s ease',
        backgroundColor: darkTheme ? "#212529" : "#f5f5f4"
      };
  return (
    //base classes then the conditional ones using string literals
    <nav className={`navbar navbar-expand-md ${darkTheme ? 'navbar-dark bg-dark': 'navbar-light bg-light'}`} id="LIGHTNAV"  style={componentStyles}>
        <div className ='container' >
            <a href='#' className='navbar-brand'>Brand</a>
            <button className='navbar-toggler' data-bs-toggle='collapse' data-bs-target='#nav' aria-controls='nav' aria-label='Expand Navigation'>
                <span className='navbar-toggler-icon'></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id='nav'>
                <ul className='navbar-nav'>
                    <li className='nav-item'>
                        <Link to='/' className='nav-link active'>Home</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/about' className='nav-link'>About Us</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/contact' className='nav-link'>Contact Us</Link>
                    </li>
                    <li>
                      <ThemeButton switch={toggleTheme} state={darkTheme}/>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  );
}

export default Nav;