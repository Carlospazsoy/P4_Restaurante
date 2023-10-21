import React from 'react'
import { comidas, bebidas, postres } from './data'
import { Card, Button } from 'react-bootstrap'
import './menu.css'
function Menu() {
  return (
    <>
      
      <div className='menu-contenedor'>
        <h2>COMIDAS</h2>
        
          <div className='productos-contenedor'>

           {/* (producto actual e inice correspondiente) */}
           {comidas.map((comida, index) => {
            return (
              <Card className='menu-card' style={{ width: "18rem" }} key={index}>
                <Card.Img variant="top" src={comida.img} />
                <Card.Body>
                  <Card.Title>{comida.nombre}</Card.Title>
                  <Card.Text> {comida.descripcion}</Card.Text>
                  <Button variant="primary">{comida.precio}</Button>
                </Card.Body>
              </Card>
            )
            })}

          </div>
        
        <h2>BEBIDAS</h2>
        <div className='productos-contenedor'>
          {bebidas.map((bebida, index) => {
            return (
              <Card className='menu-card' style={{ width: "18rem" }} key={index}>
                <Card.Img variant="top" src={bebida.img} />
                <Card.Body>
                  <Card.Title>{bebida.nombre}</Card.Title>
                  <Card.Text>{bebida.descripcion}</Card.Text>
                  <Button variant="primary">{bebida.precio}</Button>
                </Card.Body>
              </Card>
            )
          })
          }
        </div>
        <h2>POSTRES</h2>
        <div className='productos-contenedor'>
          {postres.map((postre, index) => {
            return (
              <Card className='menu-card' style={{ width: "18rem" }} key={index}>
                <Card.Img variant="top" src={postre.img} />
                <Card.Body>
                  <Card.Title>{postre.nombre}</Card.Title>
                  <Card.Text>{postre.descripcion}</Card.Text>
                  <Button variant="primary">{postre.precio}</Button>
                </Card.Body>
              </Card>
            )
          })
          }
        </div>
      </div>

    </>
  )
}

export default Menu

