import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';

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
        <button onClick={() => restar()}>
          -
        </button>
      </Col>
      <Col>
        <p>{cantidad}</p>
      </Col>
      <Col>
        <button onClick={() => sumar()}>
          +
        </button>
      </Col>
    </Row>
  </Container>
  );
}

export default ItemCount;


