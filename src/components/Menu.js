// Menu.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  const [isSticky, setIsSticky] = useState(false);
  // State to track the selected menu item
  const [selectedItem, setSelectedItem] = useState(null);
  
  // Function to handle item selection
  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsSticky(scrollPosition > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const menuStyle = {
    backgroundColor: '#007BFF', // Blue background
    color: 'white', // White text
    padding: '10px',
    display: 'flex',
    justifyContent: 'space-evenly',
    position: isSticky ? 'fixed' : 'relative',
    top: isSticky ? '80px' : '0',
    left: 0,
    width: '100%',
    zIndex: 1000,
  };

  const linkStyle = {
    textDecoration: 'none', // Remove underline
    color: 'white', // White text color
  };

  return (
    <div className="menu" style={menuStyle}>
      <Link to="/" className={`menu-item ${selectedItem === 'inicio' ? 'selected' : ''}`} style={linkStyle}>INICIO</Link>
      <Link to="/nosotros" style={linkStyle}>NOSOTROS</Link>
      <Link to="/profesionales" style={linkStyle}>PROFESIONALES</Link>
      <Link to="/horarios" style={linkStyle}>HORARIOS</Link>
      <Link to="/estudios" style={linkStyle}>ESTUDIOS</Link>
      <Link to="/os-prepagas" style={linkStyle}>O.S Y PREPAGAS</Link>
      <Link to="/info-pacientes" style={linkStyle}>INFO PACIENTES</Link>
      <Link to="/contacto" style={linkStyle}>CONTACTO</Link>
    </div>
  );
}

export default Menu;
