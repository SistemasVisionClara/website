import React from 'react';
import Tarjetas from './Tarjetas';

const OSYPrepagas = () => {

  const ejemplo = [{
    name : "OSDE",
    img : "https://upload.wikimedia.org/wikipedia/commons/1/18/Logo_OSDE_2020.png",
    description: " Únicamente turnos programados. Se atienden todos los planes de Swiss Medical y Docthos excepto Docthos Básico. Hay planes con copago." 
    
  },{
    name: "Swis Medical",
    img: "https://cacofar.org/wp-content/uploads/2016/10/SwissMedical.png",
    description:" Únicamente turnos programados. Se atienden todos los planes de Swiss Medical y Docthos excepto Docthos Básico. Hay planes con copago. "
  },
  {
    name : "Medifé",
    img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQAxEXE32nPD6X88gS0eOeU1u7CmfS4A1hYapfMtlhbQ&s",
    description: " Únicamente turnos programados. Se atienden todos los planes de Swiss Medical y Docthos excepto Docthos Básico. Hay planes con copago." 
    
  },{
    name: "OSPE",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI6LDD1mi6vzGz3LLm0G0dhTZC5V1J8JxeXAJFb3-Ssw&s",
    description:" Únicamente turnos programados. Se atienden todos los planes de Swiss Medical y Docthos excepto Docthos Básico. Hay planes con copago. "
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
         
        {(ejemplo.map(e => Tarjetas(e)))}
  
      </div>
  
      </div>
      
    );
  }


export default OSYPrepagas;
