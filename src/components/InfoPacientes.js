import React from 'react';
import useTitle from './useTitle';

const InfoPacientes = () => {
  useTitle({title : "Información para Pacientes"})
  
  return (
    <div>
      <h2>INFO PACIENTES</h2>
      {/* Add content specific to the "INFO PACIENTES" page */}
    </div>
  );
}

export default InfoPacientes;
