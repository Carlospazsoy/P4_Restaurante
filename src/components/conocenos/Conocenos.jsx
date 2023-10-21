import {servicioData} from '../dataPage'
import React from 'react'
import './conocenos.css'
import img from '../../img/restaurante/comercial/Vegan/1.1.png'

function Conocenos() {
  
  return (
    <>
      <div className='abtContenedor' >
        <div className='wrapper'>
          <div className='row'>
            <div className='column1'>
              <div className='text-wrap'>
                <h1 className='topLine'>Conocenos!!</h1>
                {/* {servicioData.descripcion} si estuviese en las propiedades de <p> se llamaraia elemento controlado y rqueriria que al lado le pongas un onchange como se ve en reservas.jsx  */}
                {/* <p className='heading'> </p> */}
                <p className='subtitle'>{servicioData.descripcion}</p>
                <div className='btnWrapC'>
                  <button className='btnHome'>Reserva</button>
                </div>
              </div>
            </div>
            <div className='column2'>
             <div className='imgWrapC'>
             <img className='imgConocenos' src={img} alt='conocenos' />
             </div>
              
            </div>
          </div>
        </div>

      </div>
      </>
  )
}

export default Conocenos
