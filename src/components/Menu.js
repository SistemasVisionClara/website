import React from 'react';
import {  NavLink } from 'react-router-dom';

const Menu = () => {
  //Shows Menu when hamburguer its called
  const menuDisplay = () =>{  
    const div = document.getElementsByClassName("menu");
      div[0].classList.toggle("visible");
      
  const menuArr = Array.from(document.getElementsByClassName('menu-item'))
    for (let i = 0; i < menuArr.length; i++) {
      menuArr[i].classList.toggle("menu-items-show")

      
    }

  }

  // Close Menu when any <NavLink> its called
  const closeMenu = () =>{
  const menuArr = Array.from(document.getElementsByClassName('menu-item'))  
  const div = document.getElementsByClassName("menu")

  if(window.innerWidth <= 768){
  div[0].classList.toggle("visible")

  for (let i = 0; i < menuArr.length; i++) {
  menuArr[i].classList.toggle("menu-items-show")
    
      }
    }
  }

  // Close Menu when screen width is over 768px

  const widthScreenChages = () =>{
  const menu = document.getElementsByClassName("menu");

  if (menu[0].className === "menu visible")
    menu[0].classList.toggle("visible")

  }

  window.addEventListener("resize", widthScreenChages)

  return (
    <div className="menu"  >

      <svg onClick={menuDisplay} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="hamburguer">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      </svg>

      <NavLink  id="menu" to="/" className="menu-item" onClick={closeMenu}>INICIO</NavLink>
      <NavLink  to="/nosotros" className="menu-item" onClick={closeMenu}>NOSOTROS</NavLink>
      <NavLink  to="/horarios"  className="menu-item" onClick={closeMenu}>HORARIOS</NavLink>
      <NavLink  to="/estudios"  className="menu-item" onClick={closeMenu}>ESTUDIOS</NavLink>
      <NavLink  to="/os-prepagas"  className="menu-item" onClick={closeMenu}>O.S Y PREPAGAS</NavLink>
      <NavLink  to="/contacto"  className="menu-item" onClick={closeMenu}>CONTACTO</NavLink>
    </div>
  );
}


export default Menu;
