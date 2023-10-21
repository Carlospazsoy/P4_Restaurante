import React from 'react';
import srcimg from '../../img/restaurante/comercial/portada4.jpg';
import './presentacion.css';
import { NavLink } from 'react-router-dom';
import ReactPlayer from "react-player";

function Presentacion() {
  return (
    <>
		<div className='contenedor-general'>
		<div className='homeContenedor'>
        <div className='homeBg'>
          <img className='imgBg' alt='img' src={srcimg} />
        </div>
        <div className='homeContent'>
          <h1 className='home-h1'>Vegan ♥ Love</h1>
          <p className='home-p1'>"Comer alimentos puros es exquisito"</p>
          <div className='btnWrap'>
            <NavLink to="/Conocenos" className="navLink">
              <button className='btnHome'>
                Conoce mas
              </button>
            </NavLink>
          </div>
        </div>
      </div>
			<div className='video-contenedor'>
			<ReactPlayer url ='https://www.youtube.com/embed/rbFyIqqDkhE?si=juKBS8yg-U3rx79o' playing={true} controls={false}  loop width='100vh' height='100%'/>
			</div>
			
		</div>
      
    </>
  );
}

export default Presentacion;
