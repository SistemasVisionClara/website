import React from 'react';


const Horarios = () => {


  const textContainer = {
    padding: '15%',
    paddingTop: '5%',
    paddingBottom: '10%',
    width: '50%',
    
    
  };

  return (
    <div style={{display:'flex', justifyContent:'center'}}>
     
      <div style={textContainer}>

      <div style={{float: 'right'}}>
              <button className="turnos-online">Turnos ONLINE</button>
          </div>

      <h2 className='title'>Horarios</h2>

        <p>
          Lunes a Viernes: 8 a 20.30hs.<br/> 
          Sábados: 9 a 20hs.<br/> 
          Domingos: 10 a 20hs.<br/> 
          <br/> 
          Modalidades de atención:<br/> 
            - Demanda espontánea Otorrinolaringología<br/> 
            - Turnos programados Otorrinolaringología<br/> 
            - Turnos programados estudios audiométricos<br/> 
            - Atención a domicilio de forma particular: domicilios@atencionorl.com<br/> 
          <br/> 
            Feriados:<br/> 
            Actualizados en el perfil de Google aquí o llamar al 4783-2308 / 4788-8431
          <br/><br/>   
            La atención por turnos Otorrinolaringológicos y los estudios audiométricos se brinda de lunes a sábados, <br/>
            solicitar horario al TELÉFONO: 11-3602-0083 o al Whastapp: 11-2010-6330
        </p>
      </div>
    </div>
  );
}

export default Horarios;
