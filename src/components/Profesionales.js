import React from 'react';
import Tarjetas from './Tarjetas';
import useTitle from './useTitle';

const ejemplo = [{
  name : "Nuestro cuerpo profesional está compuesto por un grupo de especialistas altamente capacitados y comprometidos con proporcionar la mejor atención oftalmológica posible.",
  img : "",
  description: "ALLEGRONE, Julieta. BANCHERO, Francisco. BELLANI, Florencia. DUARTE, Ana. FERRERE, Magdalena. GOPCEVICH, María Victoria. GOPCEVICH, Mike. MERCAU, Santiago. TERAN, Agustín. VOLOCH, Rita." 
  }]


const Profesionales = () => {

  
  const prof_container = {
  display: 'flex',
  flexWrap: 'wrap',
  margin: '10px',
  justifyContent: 'center',

}

useTitle({title : "Profesionales"})
  return (

    <div>
      <h2  className='title prof-title'> NUESTRO EQUIPO PROFESIONAL</h2>
      <h3 style={{ marginLeft:'50px', color:'#4a4a4a'}} > Nuestro equipo cuenta con profesionales en oftalmología liderados por la Dra. Maria Victoria Gopcevich, 
      una experta con más de 30 años de experiencia dedicados al cuidado de la salud visual. </h3>
      <div style={prof_container} >

      {(ejemplo.map((e, k) => Tarjetas(e, k)))}
      

    </div>

    </div>
    
  );
}

export default Profesionales;
