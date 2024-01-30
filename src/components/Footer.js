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
        <p><b>Dirección:</b> Vuelta de Obligado 2890 6"A", C1429AVB CABA, Argentina</p>
        <p><b>TE:</b> 11-3602-0083</p>
        <p><b>Turnos Whastapp:</b> 11-2010-6330</p>
        <p><b>Email:</b> secretaria@visionclara.net</p>
      </p>
      <p>
        &copy; {new Date().getFullYear()} Visión Clara. Todos los derechos reservados.
      </p>
    </div>
  );
}

export default Footer;
