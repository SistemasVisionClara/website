import React from 'react';
import ContactInfoArea from './ContactInfoArea';
import useTitle from './useTitle';

const Contacto = () => {

    const container = {
      display: 'flex',
      flexWrap: 'wrap',
      margin: '100px',
      justifyContent: 'center',
    
    }

  useTitle({title : "Contacto"})
  return (
<>
    
    <div style={container} >
      
      <div style={{margin: '0 55px', width:'300px'}}>
      <h2 className='title'>Contacto</h2>
        <h4>Dirección</h4>
        <p>Vuelta de Obligado 2890 6"A", C1429AVB CABA, Argentina</p>
        <h4>Teléfono</h4>
        <p>11-3602-0083</p>
        <p>WhatsApp: 11-2010-6330</p>
        <h4>Email</h4>
        <p>secretaria@visionclara.net</p>
      </div>

    <div style={{margin: '0 55px', width:'300px'}}>
    <h2 className='title' >Como llegar</h2>
        <h4>Subte</h4>
        <p>Estación Congreso de Tucuman, linea D, en Av. Congreso y Av. Cabildo.</p>
        <h4>Tren</h4>
        <p>Estación Nuñez del tren Mitre, a 10 cuadras del consultorio.</p>
        <h4>Colectivos</h4>
        <p>Metrobús y lineas 133, 59, 60, 168, 184, 29, 57, 41, 169, 152, 194</p>
        
      
    </div>

    <button className="consultas-whatsapp" >Consultas al WHATSAPP</button>
    
    </div>
    <ContactInfoArea />
</>
  );
}

export default Contacto;
