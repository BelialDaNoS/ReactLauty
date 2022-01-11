import React, { useState } from 'react';
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Container } from 'react-bootstrap';

function ItemCount({stock}) {
  const [cantidad, setCount] = useState(0);

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
          <Button onClick={() => sumar()} variant="success">
            Agregar
          </Button>
        </Col>
      </Row>
    </Container>

  );
}

export default ItemCount;


