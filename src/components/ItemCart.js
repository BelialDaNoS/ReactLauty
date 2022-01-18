import React from 'react'
import { Row, Card, Col, Button} from "react-bootstrap";
// nombre, cant, id
const ItemCart = (nombre) => {

    console.log(nombre.pokenombre.pokenombre)
    

    if(nombre){
    return (
            <Card>
                <Card.Body>
                    <Row>
                        <Col className='align-self-center'>
                            <Card.Title>
                                {nombre.pokenombre.pokenombre}
                            {/* Icono del poke junto al título*/}
                            </Card.Title>
                        </Col>
                        <Col className='align-self-center'>
                            <Card.Text>
                                Precio:
                                Cantidad:
                            </Card.Text>
                        </Col>
                        <Col className="d-flex justify-content-end" >
                            <Button variant="danger" >
                            <img src="/deleteicon.png" alt="" />
                            </Button>
                        </Col>

                    </Row>
                </Card.Body>
            </Card>
    )}
}

export default ItemCart;
