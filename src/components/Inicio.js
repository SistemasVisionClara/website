// Inicio.js
import React from 'react';
import './Inicio.css'; // Import the Inicio styles
import inicio1 from '../images/mom-daughter-trying-glasses-optometrist.jpg'
import inicio2 from '../images/Oraculo.png'
import inicio3 from '../images/old-man-standing-gray-backround-with-his-granddaughter.jpg'
import inicio4 from '../images/closeup-person-s-beautiful-brown-eye.jpg'
import ContactInfoArea from '../components/ContactInfoArea';
import { Link } from 'react-router-dom';
import useTitle from './useSEO';

const Inicio = () => {
  
  const title = "Inicio"
  useTitle({title : `${title}`, description: `Página de ${title} del consultorio Oftalmologico Vision Clara`})


  return (
    <>
    
      {/* Area 1 */}
      <div className="inicio-area odd-row">
        <div className="picture">
          {/* Generic placeholder image with max width of 150px */}
          <img src={inicio1} alt="Free copyright downloaded from Freepic of a Child with glasses" />
        </div>
        <div className="content">
          <h1 className="title">¡Bienvenido al consultorio Oftalmológico Visión Clara!</h1>
          <p className='p'>
              Clínica oftalmológica de gran experiencia quirúrgica y altísimo nivel de equipamiento.
              En nuestro centro dedicado al cuidado de la salud visual, nos enorgullece ofrecer servicios oftalmológicos de excelencia.
             Con un equipo de especialistas altamente calificados y tecnología de punta, estamos comprometidos en brindarte la mejor atención 
             para cuidar de tu visión y mejorar tu calidad de vida.  Cirugías oftalmológicas, tratamientos y todos los estudios para tu salud visual.<br/>
          </p>
        </div>
      </div>

        <div className="inicio-area even-row">
        <div className="picture">
          <img  src={inicio3} alt="Free copyright from Freepic of a old man trying glasses" />
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
      

    <div className="inicio-area odd-row">
        <div className="picture">
          <img src={inicio2} alt="Free copyright from Freepic of a hand taking some glasses" />
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

      <div className="inicio-area even-row">
        <div className="picture">
          <img src={inicio4} alt="Free copyright eye from Freepic" />
        </div>
        <div className="content">
          <h2 className="title">Atención a todas las prepagas</h2>
          <p className='p'>¿Necesitas una consulta inmediata? ¡Estamos aquí para ti! En nuestro consultorio, ofrecemos servicios de calidad con atención personalizada.
             Lo mejor de todo es que aceptamos todos los medios de pago en el momento. Puedes abonar con tarjeta de crédito, débito o efectivo.
            Además, si tienes una obra social, no te preocupes. Gestionamos el reintegro por ti. Solo trae tus datos y la documentación necesaria, y nosotros nos encargamos del resto.

            Ven y cuida tu vista con profesionales altamente capacitados. ¡Te esperamos!
          </p>
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
