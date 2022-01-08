import ItemCount from "./ItemCount";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import { useState, useEffect } from "react"
// import {Link} from "react-router-dom";

function Item({cat}){
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
            <Card style={{ width: '18rem', margin: '30px' }}>
            <Card.Body>
                <Card.Title> {cat.nombre} </Card.Title>
                <Card.Subtitle className="mb-2 text-muted"> Stock Actual: {cat.stock} </Card.Subtitle>
                <Card.Text>
                    <img src={cat.img}/>
                </Card.Text>
                
                <ItemCount stock={cat.stock}/>

                    <Row className="justify-content-center">
                        <Button onClick={handleShow}>Detalles</Button >
                        <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} aria-labelledby="contained-modal-title-vcenter" centered>
                            <Modal.Header closeButton> 
                                <Modal.Title>Título de la prenda</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                Detalles del producto
                                </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    Cerrar
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </Row>

                {/* <Link to={`/cat/${cat.id}`}>Detalles</Link> */}
            </Card.Body>
            </Card>
    )
}
export default Item