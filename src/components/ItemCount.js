import React, { useState } from 'react';
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Container } from 'react-bootstrap';

function ItemCount({stock,initial,onAdd}) {
  const [cantidad, setCount] = useState(initial);

  const sumar = () =>{
    if(cantidad<stock){
      setCount(cantidad + 1)
    }
  }

  const restar = () =>{
    if(cantidad>0){
      setCount(cantidad - 1)
    }
  }

  // onAdd(cantidad)

  return (
    <Container>
      <Row>
        <Col>
          <Button variant="danger" onClick={() => restar()}>
            Quitar
          </Button>
        </Col>
        <Col>
          <p>{cantidad}</p>
        </Col>
        <Col>
          <Button variant="success" onClick={() =>sumar()} >
            Agregar
          </Button>
        </Col>
        <Button variant="success" onClick={() =>onAdd(cantidad)}>
          Agregar Al Carrito
        </Button>
      </Row>
    </Container>

  );
}

export default ItemCount;


