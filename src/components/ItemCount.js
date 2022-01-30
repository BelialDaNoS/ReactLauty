import React, { useState, useContext } from 'react';
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { CartContext } from "./CartContext";

function ItemCount({stock,initial,onAdd}) {
  const [cantidad, setCount] = useState(initial);

  const {cartArray} = useContext(CartContext)



  const sumar = () =>{
    if(cantidad<stock){
      setCount(cantidad + 1)
    }
  }

  const restar = () =>{
    if(cantidad>1){
      setCount(cantidad - 1)
    }
  }

   
  return (
    <Container>
      <Row>
        <Col>
          <Button variant="danger" onClick={() => restar()}>
            Quitar
          </Button>
        </Col>
        <Col>
          <h2>{cantidad}</h2>
        </Col>
        <Col>
          <Button variant="success" onClick={() =>sumar()} >
            Agregar
          </Button>
        </Col>
        <Button className='mb-1' variant="success" onClick={() =>onAdd(cantidad)}>
          Agregar Al Carrito
        </Button>
      </Row>
    </Container>
  )}


export default ItemCount;


