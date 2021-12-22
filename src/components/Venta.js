import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';

function Venta() {
  const [cantidad, setCount] = useState(0);

  return (

  <Container>
    <Row>
      <Col>
        <button onClick={() => setCount(cantidad - 1)}>
          -
        </button>
      </Col>
      <Col>
        <p>{cantidad}</p>
      </Col>
      <Col>
        <button onClick={() => setCount(cantidad + 1)}>
          +
        </button>
      </Col>
    </Row>
  </Container>


      



  );
}

export default Venta;


