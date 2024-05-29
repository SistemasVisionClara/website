import React from 'react';
import Tarjetas from './Tarjetas';
import Allegrone from '../images/dra-julieta-allegrone.jpg'

const ejemplo = [{
  name : "Cuerpo profesional compuesto de los doctores:",
  img : "",
  description: "ALLEGRONE, Julieta. BANCHERO, Francisco. BELLANI, Florencia. DUARTE, Ana. FERRERE, Magdalena. GOPCEVICH, María Victoria. GOPCEVICH, Mike. MERCAU, Santiago. TERAN, Agustín. VOLOCH, Rita." 
  }, /*{
    name: "Dra. ALLEGRONE, Julieta",
    img: Allegrone,
    description: "Oftalmología general"
  }, {
    name: "Dr. BANCHERO, Francisco"
  }*/]


const Profesionales = () => {

  const prof_container = {
  display: 'flex',
  flexWrap: 'wrap',
  margin: '10px',
  justifyContent: 'center',

}


  return (

    <div>
      <h2  className='title prof-title'> NUESTRO EQUIPO PROFESIONAL</h2>
      <h3 style={{ marginLeft:'50px', color:'#4a4a4a'}} > Un equipo de profesionales a cargo de los más de 30 años de experiencia de la Dra. Maria Victoria Gopcevich</h3>
      <div style={prof_container} >

      {(ejemplo.map((e, k) => Tarjetas(e, k)))}
      

    </div>

    </div>
    
  );
}

export default Profesionales;
