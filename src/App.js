// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TopBanner from './components/TopBanner';
import Menu from './components/Menu';
import Inicio from './components/Inicio';
import Nosotros from './components/Nosotros';
import Horarios from './components/Horarios';
import Estudios from './components/Estudios';
import OSYPrepagas from './components/OSYPrepagas';
import InfoPacientes from './components/InfoPacientes';
import Contacto from './components/Contacto';
import Footer from './components/Footer';
import Logo from './components/Logo';
import WhatsApp from './components/WhatsApp';
import HangInThere from './images/hanginthere.jpg'

const App = () => {
  let a = 2;
  let b = 2;

  if (a == b){
  return (
    <Router>
      <div>
        <Logo />
        <Menu />
        <TopBanner />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/horarios" element={<Horarios />} />
          <Route path="/estudios" element={<Estudios />} />
          <Route path="/os-prepagas" element={<OSYPrepagas />} />
          <Route path="/info-pacientes" element={<InfoPacientes />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
        <WhatsApp/>
        <Footer />
      </div>
    </Router>
  );
} else {
  return(
    <>
    <h1 style={{textAlign: 'center'}}>ACTUALMENTE NO SE ENCUENTRA DISPONIBLE ESTA PÁGINA</h1>
    <div style={{display: 'flex', justifyContent: 'center'}}>
    
    <img src={HangInThere} />
    </div>
    </>
  )
}

}

export default App;

