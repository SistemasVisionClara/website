// Nosotros.js
import React from 'react';
import './Nosotros.css'; // Import the Nosotros styles

const Nosotros = () => {
  return (
    <div className="nosotros-container">
      
      <div className="text-container" style={{paddingBottom: '5%', textAlign: 'justify'}}>
        <h1 className="title" style={{fontSize: "32px",}}>Nosotros</h1>
        <p>
          Bienvenido al Consultorio Oftalmológico Visión Clara, su destino confiable para cuidado ocular de calidad en Buenos Aires. 
          Nos dedicamos a proporcionar servicios oftalmológicos de excelencia con un enfoque centrado en el paciente.
        </p>
        <p>
          Nuestro equipo está compuesto por oftalmólogos altamente calificados y especializados que se esfuerzan por brindar un 
          cuidado personalizado y compasivo a cada paciente que nos visita. Desde exámenes de la vista de rutina hasta tratamientos 
          avanzados para enfermedades oculares, estamos aquí para atender todas sus necesidades oftalmológicas.
        </p>
        <p>
          En nuestro consultorio, utilizamos tecnología de punta para garantizar diagnósticos precisos y tratamientos efectivos. 
          Ya sea que necesite una simple consulta o esté buscando una solución a largo plazo para su salud ocular,
          en Visión Clara estamos comprometidos a ayudarlo a alcanzar una visión óptima y una mejor calidad de vida.
        </p>
        <p>
          <i>Dra. Maria Victoria Gopcevich</i> <br/>
          
        </p>
      </div>
    </div>
  );
}

export default Nosotros;
