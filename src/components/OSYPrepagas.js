import React from 'react';
import Tarjetas from './Tarjetas';
import Omint from '../images/omint.png';
import Osde from '../images/osde.png';
import Sancor from '../images/sancor.png';
import Pami from '../images/pami.jpg'
import useTitle from './useSEO';
import Particles from '../images/anonimo.webp'

const OSYPrepagas = () => {

  const oys = [{
    name : "OSDE",
    img : Osde,
    description: "Podes sacar turno desde la página de OSDE haciendo CLICK acá." ,
    a: "https://www.osde.com.ar/index1.html#!osde-cartilla-detalle-prestador.html?planId=21&especialidadId=146&filialId=60&centroMedicoId=37&numeroPrestadorId=6670&especialidadNombre=Oftalmolog%C3%ADa&miCartillaOpen=0&desdeMisTurnos=false&secuencia=101&turnos=1"
    
  },{
    name: "Swis Medical",
    img: "https://cacofar.org/wp-content/uploads/2016/10/SwissMedical.png",
    description:"Trabajamos Swis Medical cubriendo la totalidad de la atención."
  },
  {
    name : "Medifé",
    img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQAxEXE32nPD6X88gS0eOeU1u7CmfS4A1hYapfMtlhbQ&s",
    description: "Prioridad en la reserva de turnos. Se atienden todos los planes." 
    
  },{
    name: "OMINT",
    img: Omint,
    description:"Se atienden todos los planes de OMINT."
  }, {
    name: "Sancor",
    img: Sancor,
    description: "Cubrimos todos los planes y tambíen la posibilidad de reintegro."
  } , {
    name: "PAMI y otras Obras Sociales",
    img: Pami,
    description: "Trabajamos unicamente atraves de reintegro."
  }, {
    name: "Particulares",
    img: Particles,
    description: "Podes consultar los metodos de atención y consideraciones que ofrecemos para atención particular comunicandote con nosotros."
  }]
  
  
  //Styles
  const prof_container = {
    display: 'flex',
    flexWrap: 'wrap',
    margin: '10px',
    justifyContent: 'center',
  
  }

  
  const title = "Obra Social y Prepagas"
  useTitle({title : `${title}`, description: `Página de ${title} del consultorio Oftalmologico Vision Clara`})

    return (
  
      <div >
  
      
        <h2 className='title' style={{margin:'42px'}}>Obra Social y Prepagas </h2>
        <p className='p'> Enorme abanico de opciones, tanto con diversas obras sociales y prepagas, como metodos de financiamiento, para que puedas atenderte y cuidar tu salud.<br/>
        Ante cualquier duda no dejes de comunicarte con nosotros. Más información en la pestaña CONTACTO</p>
        <div style={prof_container} >
         
        {(oys.map((e, k) => Tarjetas(e, k)))}
  
      </div>
  
      </div>
      
    );
  }


export default OSYPrepagas;
