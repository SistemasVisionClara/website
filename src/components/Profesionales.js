import React from 'react';
import Tarjetas from './Tarjetas';

const ejemplo = {
  name : "Luis Alberto Spinetta",
  img : "",
  description: "lore impsumlore impsumlore impsumlore impsumlore impsumlore impsumlore impsumlore impsumlore impsumlore impsumlore impsumlore impsumlore impsumlore impsumlore impsumlore impsum" 
  
}


const Profesionales = () => {

  const prof_container = {
  display: 'flex',
  flexWrap: 'wrap',
  margin: '10px',
  justifyContent: 'center',

}


  return (

    <div>

    
      <h2 className='title'> NUESTRO EQUIPO PROFESIONAL</h2>
      <div style={prof_container} >

      {Tarjetas(ejemplo)}
      

    </div>

    </div>
    
  );
}

export default Profesionales;
