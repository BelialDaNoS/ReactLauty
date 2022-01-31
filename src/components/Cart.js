import { Row, Card, Col, Stack, Button, Offcanvas, Form } from "react-bootstrap";
import { useContext, useState } from "react";
import { CartContext } from "./CartContext";
import ItemCart from "./ItemCart";
import {db} from "./firebase";
import { collection, addDoc } from "firebase/firestore";




function Cart() {
  const {cartArray, deleteItem, clearCart, productCount} = useContext(CartContext);
  // const [precio,setPrecio]=useState();




  const crearOrden = () => {
    const coleccionProductos = collection(db, "productosLlevados")

    const usuario ={
      nomre: prompt("Ingrese su Nombre"),
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
        console.log(resultado)
      })
      .catch((error)=>console.log(error))
  }

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  
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
    // cartArray.map((item) => 
    //   setPrecio(precio+item.precioIndividual))
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
          <Row className="justify-content-end">Total:$ {}</Row>
          <Row  className="d-flex justify-content-end mt-2">{cartArray.length > 0 ? <Button variant="success" style={{width:"100px"}} onClick={handleShow, crearOrden}>Concretar Compra</Button> : null}</Row>
        </Card.Body>
      </Card>







      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Datos del Usuario (Solo para facha, en realidad no anda jeje)</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Form>                
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Correo</Form.Label>
              <Form.Control type="email" placeholder="Ingrese su email" />
              <Form.Text className="text-muted">
                No le avisaremos al, ni somos el equipo Rocket.
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formDireccion">
              <Form.Label>Dirección</Form.Label>
              <Form.Control type="email" placeholder="Ingrese donde quiere la entrega" />
          </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Su contraseña</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Recordarme" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Offcanvas.Body>
      </Offcanvas>
    </Row>)
  }
}
  export default Cart;


