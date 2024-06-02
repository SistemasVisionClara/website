// Inicio.js
import React from 'react';
import './Inicio.css'; // Import the Inicio styles
import inicio1 from '../images/mom-daughter-trying-glasses-optometrist.jpg'
import inicio2 from '../images/Oraculo.png'
import inicio3 from '../images/old-man-standing-gray-backround-with-his-granddaughter.jpg'
import inicio4 from '../images/closeup-person-s-beautiful-brown-eye.jpg'
import ContactInfoArea from '../components/ContactInfoArea';
import { Link } from 'react-router-dom';
import useTitle from './useTitle';

const Inicio = () => {

  useTitle({title : "Inicio"})


  return (
    <>
    
      {/* Area 1 */}
      <div className="inicio-area odd-row">
        <div className="picture">
          {/* Generic placeholder image with max width of 150px */}
          <img src={inicio1} alt=" 1" />
        </div>
        <div className="content">
          <h2 className="title">¡Bienvenido al consultorio Oftalmológico Visión Clara!</h2>
          <p className='p'>
            En nuestro centro dedicado al cuidado de la salud visual, nos enorgullece ofrecer servicios oftalmológicos de excelencia.
             Con un equipo de especialistas altamente calificados y tecnología de punta, estamos comprometidos en brindarte la mejor atención 
             para cuidar de tu visión y mejorar tu calidad de vida.<br/>
          </p>
        </div>
      </div>

      {/* Area 2 */}
        <div className="inicio-area even-row">
        <div className="picture">
          <img  src={inicio3} alt=" 2" />
        </div>
        <div className="content">
          <h2 className="title">¿Quienes somos?</h2>
          <p className='p'>
            Como líderes en oftalmología en la ciudad de Buenos Aires, nuestro equipo de especialistas altamente calificados 
            se compromete a proporcionarte una atención integral y personalizada. Desde exámenes de la vista hasta tratamientos avanzados,
             estamos aquí para ayudarte a mantener una visión clara y saludable en cada etapa de tu vida. Con tecnología de vanguardia 
             y un enfoque centrado en el paciente, en Visión Clara tu vista está en buenas manos.
          </p>
          <Link to="/nosotros">
          <button className="ver-mas-button" >Ver más</button>
          </Link>
         </div>
      </div>
      

      {/* Area 3 */}
      <div className="inicio-area odd-row">
        <div className="picture">
          {/* Generic placeholder image with max width of 150px */}
          <img src={inicio2} alt=" 3" />
        </div>
        <div className="content">
          <h2 className="title">Todos los estudios</h2>
          <p className='p'>Ofrecemos servicios oftalmológicos completos en nuestras instalaciones, incluyendo exámenes de refracción, 
            tonometría, pruebas de agudeza visual, examen del fondo de ojo y evaluaciones de motilidad ocular.
             Nuestro enfoque es brindar cuidado integral y personalizado para preservar la salud visual de nuestros pacientes.</p>
             <Link to="/estudios">
          <button className="ver-mas-button" >Ver más</button>
          </Link>
        </div>
      </div>

      {/* Area 4 */}
      <div className="inicio-area even-row">
        <div className="picture">
          {/* Generic placeholder image with max width of 150px */}
          <img src={inicio4} alt=" 4" />
        </div>
        <div className="content">
          <h2 className="title">50% de descuento con PAMI</h2>
          <p className='p'>¡Oferta especial para afiliados de PAMI! Obtén un descuento del 50% en todos nuestros servicios oftalmológicos en tu próxima 
            visita al consultorio. Cuidamos tu salud visual con atención integral y personalizada. 
            ¡Llama ahora para reservar tu cita y aprovechar esta increíble oferta!</p>
            <Link to="/os-prepagas">
          <button className="ver-mas-button" >Ver más</button>
          </Link>
        </div>
      </div>
    

    <ContactInfoArea />

    </>
  );
 
}


export default Inicio;
