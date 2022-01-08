import { Modal } from "react-bootstrap";
import { useState } from "react"

    const ItemDetail = ({product}) => {
        const [show, setShow] = useState(false);
        const handleClose = () => setShow(false);
        return (
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
        )
    }
export default ItemDetail