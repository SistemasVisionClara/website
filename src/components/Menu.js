// Menu.js
import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Menu = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isHover, setIsHover] = useState(false);


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
  


  const handleMouseEnter = () => {
    setIsHover(true);
 };
 
 const handleMouseLeave = () => {
    setIsHover(false);
 };

  const menuStyle = {
    backgroundColor: '#007BCF', // Blue background
    color: 'white', // White text
    padding: '0',
    display: 'flex',
    justifyContent: 'space-evenly',
    position: isSticky ? 'fixed' : 'relative',
    top: isSticky ? '100px' : '0',
    left: 0,
    width: '100%',
    zIndex: 1000,
    
    
  };


  const linkStyle = {
    textDecoration: 'none', // Remove underline
    color: '#ffffff' , // White text 
    
    
  };


  //        const onHover ={
    //        onMouseEnter:{handleMouseEnter},
      //      onMouseLeave:{handleMouseLeave}
        //  }

  return (
    <div className="menu" style={menuStyle} >
      <NavLink exact to="/" className="menu-item">INICIO</NavLink>
      <NavLink exact to="/nosotros" className="menu-item">NOSOTROS</NavLink>
      <NavLink exact to="/profesionales"  className="menu-item">PROFESIONALES</NavLink>
      <NavLink exact to="/horarios"  className="menu-item">HORARIOS</NavLink>
      <NavLink exact to="/estudios"  className="menu-item">ESTUDIOS</NavLink>
      <NavLink exact to="/os-prepagas"  className="menu-item">O.S Y PREPAGAS</NavLink>
      <NavLink exact to="/info-pacientes" className="menu-item">INFO PACIENTES</NavLink>
      <NavLink exact to="/contacto"  className="menu-item">CONTACTO</NavLink>
    </div>
  );
}

export default Menu;
