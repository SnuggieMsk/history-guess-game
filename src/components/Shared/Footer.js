// src/components/Shared/Footer.js
import React from 'react';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="app-footer">
      <div className="footer-content">
        <p>Historical Guess Game &copy; {currentYear}</p>
        <p>Videos created with Sora AI</p>
      </div>
    </footer>
  );
}

export default Footer;
