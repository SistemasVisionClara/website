import React from 'react';
import Tarjetas from './Tarjetas';
import Omint from '../images/omint.png';
import Osde from '../images/osde.png';
import Sancor from '../images/sancor.png';
import Pami from '../images/pami.jpg'

const OSYPrepagas = () => {

  const ejemplo = [{
    name : "OSDE",
    img : Osde,
    description: "Únicamente turnos programados. Se atienden todos los planes de Swiss Medical y Docthos excepto Docthos Básico. Hay planes con copago." 
    
  },{
    name: "Swis Medical",
    img: "https://cacofar.org/wp-content/uploads/2016/10/SwissMedical.png",
    description:"Trabajamos Swis Medical unícamente con reintegro."
  },
  {
    name : "Medifé",
    img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQAxEXE32nPD6X88gS0eOeU1u7CmfS4A1hYapfMtlhbQ&s",
    description: "Prioridad en la reserva de turnos. Se atienden todos los planes." 
    
  },{
    name: "OMINT",
    img: Omint,
    description:" Únicamente turnos programados. Se atienden todos los planes de OMINT. Hay planes con copago. "
  }, {
    name: "Sancor",
    img: Sancor,
    description: "Cubrimos todos los planes y tambíen la posibilidad de reintegro."
  } , {
    name: "PAMI",
    img: Pami,
    description: "Hasta un 50% de descuento trabajando unicamente atraves de reintegro."
  }]
  
  
  //Styles
  const prof_container = {
    display: 'flex',
    flexWrap: 'wrap',
    margin: '10px',
    justifyContent: 'center',
  
  }

    

    return (
  
      <div style={{margin:"6%"}}>
  
      
        <h2 className='title' style={{margin:'42px'}}>Obra Social y Prepagas </h2>
        <div style={prof_container} >
         
        {(ejemplo.map((e, k) => Tarjetas(e, k)))}
  
      </div>
  
      </div>
      
    );
  }


export default OSYPrepagas;
