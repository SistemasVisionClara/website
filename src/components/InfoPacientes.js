import React from 'react';
import useTitle from './useSEO';

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
