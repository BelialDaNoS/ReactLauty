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
                        <Modal.Title>{product.id}</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        

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