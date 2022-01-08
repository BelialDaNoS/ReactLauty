import { Modal } from "react-bootstrap";
import { useState, useEffect } from "react"
import { Button } from "react-bootstrap";

    const ItemDetail = ({product}) => {
        const handleShow = () => setShow(true);
        const [show, setShow] = useState(false);
        const handleClose = () => setShow(false);

        return (
            <>
                <Button onClick={handleShow}>Detalles</Button >
                <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} aria-labelledby="contained-modal-title-vcenter" centered>
                    <Modal.Header closeButton> 
                        <Modal.Title>{product.nombre}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <img src={product.img}/>
                        <h5>Talle: {product.Talle}</h5>
                        <h5>Precio:$ {product.precio}</h5>
                        <h5>Cantidad en Stock: {product.stock}</h5>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Cerrar
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        )
    }
export default ItemDetail