import React from 'react'
import { NavLink } from 'react-router-dom'
import './navegador.css'

function Navegador() {
  return (
    <>
     <nav className='navegador'>
        <div className='contenedor'>
            <h1> <NavLink to="/" className="logoNav"> Vegan ♥ Love</NavLink></h1>
            <ul className='navMenu'>
            <li className='navItem'>
                <NavLink to="/" className="navLink">Home</NavLink>
              </li>
              <li className='navItem'>
                <NavLink to="/Conocenos" className="navLink">Conocenos</NavLink>
              </li>
              <li className='navItem'>
                <NavLink to="/Menu" className="navLink">Menu</NavLink>
              </li>
              <li className='navItem'>
                <NavLink to="/Reservaciones" className="navLink">Reservaciones</NavLink>
              </li>
             
              </ul>
          </div>
      </nav>
    </>
  )
}

export default Navegador