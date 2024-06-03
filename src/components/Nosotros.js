// Nosotros.js
import React from 'react';
import './Nosotros.css'; // Import the Nosotros styles
import useTitle from './useSEO';

const Nosotros = () => {

  const title = "Nosotros"
  useTitle({title : `${title}`, description: `Página de ${title} del consultorio Oftalmologico Vision Clara`})
  
  return (
    <div className="nosotros-container">
      
      <div className="text-container" style={{paddingBottom: '5%', textAlign: 'justify'}}>
        <h1 className="title">Nosotros</h1>
        <p className='p'>
          Bienvenido al Consultorio Oftalmológico Visión Clara, su destino confiable para un cuidado ocular de calidad en Buenos Aires. 
          Nos dedicamos a proporcionar servicios oftalmológicos de excelencia con un enfoque centrado en el paciente.
        </p>
        <p className='p'>
          Nuestro equipo está compuesto por oftalmólogos altamente calificados y especializados que se esfuerzan por brindar un 
          cuidado personalizado y compasivo a cada paciente que nos visita. Desde exámenes de la vista de rutina hasta tratamientos 
          avanzados para enfermedades oculares, estamos aquí para atender todas sus necesidades oftalmológicas.
        </p>
        <p className='p'>
          En nuestra Clínica oftalmológica ubicada en Belgrano (Buenos Aires, Argentina) utilizamos tecnología de punta para garantizar diagnósticos precisos y tratamientos efectivos. 
          Ya sea que necesite una simple consulta o esté buscando una solución a largo plazo para su salud ocular,
          en Visión Clara estamos comprometidos a ayudarlo a alcanzar una visión óptima y una mejor calidad de vida.
        </p>
        <p className='p'>
          <i>Dra. Maria Victoria Gopcevich</i> <br/>
          
        </p>
      </div>
    </div>
  );
}

export default Nosotros;
