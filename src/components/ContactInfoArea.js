// ContactInfoArea.js
import React from 'react';

const ContactInfoArea = () => {
  const contactInfoStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: '#eeeeee', // Light gray background
  };

  const mapContainerStyle = {
    flexBasis: '50%',
    height: '300px',
    border: '1px solid #ddd',
    borderRadius: '5px',
    marginRight: '20px',
  };

  return (
    <div className="contact-info-area" style={contactInfoStyle}>
      <div style={mapContainerStyle}>
        {/* Google Map iframe */}
        {/* Replace with your actual Google Map or map component */}
        <iframe
          title="Google Map"
          width="100%"
          height="100%"
          frameBorder="0"
          style={{ border: 0 }}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.001989700549!2d-58.468693184912654!3d-34.56403558046548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca4db68f8d93%3A0xe70d3e6205563f97!2sVuelta%20de%20Obligado%202890%2C%20C1429AVB%20CABA!5e0!3m2!1sen!2sar!4v1647369736708!5m2!1sen!2sar"
          allowFullScreen
        ></iframe>
      </div>
      <div>
        <h2>Contacto</h2>
        <p><b>Dirección:</b> Vuelta de Obligado 2890 6"A", C1429AVB CABA, Argentina</p>
        <p><b>TE:</b> 11-3602-0083</p>
        <p><b>Turnos Whastapp:</b> 11-2010-6330</p>
        <p><b>Email:</b> secretaria@visionclara.net</p>
      </div>
    </div>
  );
}

export default ContactInfoArea;
