import { Row, Card, Col, Stack, Button, Offcanvas, Form, Modal } from "react-bootstrap";
import { useContext, useState } from "react";
import { CartContext } from "./CartContext";
import ItemCart from "./ItemCart";
import {db} from "./firebase";
import { collection, addDoc } from "firebase/firestore";




function Cart() {
  const {cartArray, deleteItem, clearCart, productCount} = useContext(CartContext);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
      
  console.log(cartArray)

  const nombre = document.getElementById("formBasicNombre")
  if(nombre){
    console.log(nombre)
  }

    const crearOrden = () => {
      const coleccionProductos = collection(db, "productosLlevados")
      const usuario ={
        nomre: document.getElementById(""),
        email: prompt("Ingrese su correo"),
        ubicacion: prompt("Ingrese la ubicación de la entrega"),
        telefono: prompt("Ingrese su número de  teléfono")
      }

      const orden ={
        usuario,
        infoCarrito: cartArray,
        total_llevado: productCount
      }

      const pedido = addDoc(coleccionProductos, orden)
      pedido
        .then((resultado)=>{
          console.log(resultado.id)
        })
        .catch((error)=>console.log(error))
    }
  
    if(cartArray.length == 0){
    return(
      <Row className="mt-5 pt-5 justify-content-center align-content-center align-middle">
      <Card>
        <Card.Body>
          <Row>
            <Col>
              <Card.Title>Carrito</Card.Title>
            </Col>
            <Col>
              <Card.Title>Su Carrito Está Vacio!!</Card.Title>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Row>
    )
    }else{

    const total = cartArray.reduce(function (a, b) {
      return {precioFinal: a.precioTotal + b.precioTotal};})

    return(
    <Row className="mt-5 pt-5 justify-content-center align-content-center align-middle">
      <Card>
        <Card.Body>
          <Stack direction="horizontal" gap={3} className="justify-content-between ms-3">
            <Card.Title>Carrito</Card.Title>
            <Card.Title className="justify-content-end"> <Button variant="danger" onClick={() => clearCart()}>Limpiar Carrito</Button></Card.Title>
          </Stack>
          {cartArray.map((item)=>
            <ItemCart key={item.product.id} item={item} nombre={item.pokenombre} id={item.product.id} deleteItem={deleteItem}/>
          )}
          <Row className="justify-content-end">Total:$ {cartArray.length > 1 ? <>{total.precioFinal}</> : <>{cartArray[0].precioTotal}</> }</Row>
          <Row  className="d-flex justify-content-end mt-2">{cartArray.length > 0 ? <Button variant="success" style={{width:"100px"}} onClick={handleShow}>Concretar Compra</Button> : null}</Row>


          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>La mejor Pokeinversión</Modal.Title>
            </Modal.Header>
            <Modal.Body>


              <Form>
              <Form.Group className="mb-3" controlId="formBasicNombre">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" placeholder="Ingrese su Nombre o apodo" />
                <Form.Text className="text-muted">

                </Form.Text>
              </Form.Group>



              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Correo</Form.Label>
                <Form.Control type="email" placeholder="Ingrese su email" />
                <Form.Text className="text-muted">
                  No le avisaremos al, ni somos el equipo Rocket.
                </Form.Text>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formDireccion">
                <Form.Label>Dirección</Form.Label>
                <Form.Control type="text" placeholder="Ingrese donde quiere la entrega" />
            </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Su contraseña</Form.Label>
                <Form.Control type="password" placeholder="Contraseña" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Recordarme" />
              </Form.Group>
            </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Cancelar
              </Button>
              <Button variant="primary" onClick={()=>{
              console.log("Compra finalizada")
              handleClose()
              // window.location.reload()
              }}>
                Comprar
              </Button>
            </Modal.Footer>
          </Modal>

      
        </Card.Body>
      </Card>
    </Row>
    )
  }
}

export default Cart;