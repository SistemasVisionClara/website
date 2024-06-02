import React from 'react';
import { Link } from 'react-router-dom';
import useTitle from './useTitle';


const Horarios = () => {


  const textContainer = {
    padding: '15%',
    paddingTop: '5%',
    paddingBottom: '10%',
    width: '50%',
    
    
  };


  useTitle({title: "Horarios"})

  return (
    
    <div style={{display:'flex', justifyContent:'center'}}>
     
      <div style={textContainer}>

      <div style={{float: 'right'}}>
        <      Link to='https://wa.me/541120106330' target="_blank">
              <button className="turnos-online">Turnos ONLINE</button>
              </Link>
          </div>

      <h2 className='title horarios'>Horarios sin turnos</h2>

        <p className='p'>
          Lunes, Martes, Jueves y Viernes: 8.30hs a 18.30hs.<br/> 
          Miercoles: 8.15hs a 18.45hs<br/>
          Sábados: 8.30hs a 12.15hs.<br/> 
          <br/> 
          Modalidades de atención:<br/> 
            - Demanda espontánea <br/> 
            - Turnos programados <br/> 
            - Turnos programados estudios <br/> 
          <br/> 
            Feriados:<br/> 
            Actualizados en el perfil de Google o llamar al 11-3602-0083
          <br/><br/>   
            Disponibilidad para VIDEO CONSULTAS y RECETAS ELECTRONICAS, <br/>
            solicitar turno al TELÉFONO: 11-3602-0083 o al Whastapp: 11-2010-6330
        </p>
      </div>
    </div>
  );
}

export default Horarios;
