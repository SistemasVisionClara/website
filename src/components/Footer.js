import React from 'react';

const Footer = () => {
  const footerStyle = {
    backgroundColor: '#343a40', // Adjust background color as needed
    color: 'white',
    padding: '20px',
    textAlign: 'center',
  };

  return (
    <div className="footer" style={footerStyle}>
      <p>
        Address: Vuelta de Obligado 2890, C1429AVB CABA, Argentina<br />
        Phone: Your Phone Number<br />
        Email: Your Email Address
      </p>
      <p>
        &copy; {new Date().getFullYear()} Your Company Name. All Rights Reserved.
      </p>
    </div>
  );
}

export default Footer;
