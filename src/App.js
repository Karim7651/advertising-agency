import React from 'react';
import 'bootstrap/dist/js/bootstrap.bundle';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import ContactUs from './components/ContactUs';
import "bootstrap-icons/font/bootstrap-icons.css";
import './App.css'
import { ThemeProvider } from './ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<ContactUs/>} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;