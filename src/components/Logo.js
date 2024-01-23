// Logo.js
import React from 'react';
import './Logo.css'; // Import the Logo styles
import Banner from '../images/banner.png'

const Logo = () => {
  return (
    <div className="logo-container">
      {/* Replace the placeholder URL with the actual URL of your logo image */}
      <img src={Banner} alt="Logo" />
    </div>
  );
}

export default Logo;
