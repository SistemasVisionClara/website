// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TopBanner from './components/TopBanner';
import Menu from './components/Menu';
import Inicio from './components/Inicio';
import Nosotros from './components/Nosotros';
import Profesionales from './components/Profesionales';
import Horarios from './components/Horarios';
import Estudios from './components/Estudios';
import OSYPrepagas from './components/OSYPrepagas';
import InfoPacientes from './components/InfoPacientes';
import Contacto from './components/Contacto';
import ContactInfoArea from './components/ContactInfoArea';
import Footer from './components/Footer';
import Logo from './components/Logo';

const App = () => {
  return (
    <Router>
      <div>
        <Logo />
        <Menu />
        <TopBanner />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/profesionales" element={<Profesionales />} />
          <Route path="/horarios" element={<Horarios />} />
          <Route path="/estudios" element={<Estudios />} />
          <Route path="/os-prepagas" element={<OSYPrepagas />} />
          <Route path="/info-pacientes" element={<InfoPacientes />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
        <ContactInfoArea />
        <Footer />
      </div>
    </Router>
  );
}

export default App;

