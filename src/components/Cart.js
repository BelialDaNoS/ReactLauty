import { Row, Card, Col, Stack, Button, Offcanvas, Form, Modal } from "react-bootstrap";
import { useContext, useState, React } from "react";
import { CartContext } from "./CartContext";
import ItemCart from "./ItemCart";
import {db} from "./firebase";
import { collection, addDoc } from "firebase/firestore";

function Cart() {
  const {cartArray, deleteItem, clearCart, productCount} = useContext(CartContext);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [nombreInput, setNombreInput] = useState();
  const [mail, setMail ] = useState();
  const [direccion, setDireccion ] = useState();
  const [contraseña, setContraseña ] = useState();
  const [idCompra, setIdCompra ] = useState();
  const [concretada, setConcretada ] = useState(false);


  let regex = /[]/;

  function handleNombre (nombre) {

    ( regex.test(nombre.key)
      ? nombre.preventDefault()
      : setNombreInput(nombre.target.value + nombre.key)
    ) 
  }

  function mailInput (mail) {
    ( regex.test(mail.key)
      ? mail.preventDefault()
      : setMail(mail.target.value + mail.key)
    ) 
  }

  function direccionInput (direccion) {
    ( regex.test(direccion.key)
      ? direccion.preventDefault()
      : setDireccion(direccion.target.value + direccion.key)
    ) 
  }

  function contraseñaInput (password) {
    ( regex.test(password.key)
      ? password.preventDefault()
      : setContraseña(password.target.value + password.key)
    ) 
  }
    const crearOrden = () => {
      const coleccionProductos = collection(db, "productosLlevados")
      const usuario ={
        nombre: nombreInput,
        email: mail,
        ubicacion: direccion,
        contraseña: contraseña 
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
          setIdCompra(resultado.id)
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
      if(a.precioFinal){
        return{precioFinal:a.precioFinal+b.precioTotal}
      }else{
      return {precioFinal: a.precioTotal + b.precioTotal};}})
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
            {!concretada? 
            <Modal.Body>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicNombre" >
                  <Form.Label>Nombre</Form.Label>
                  <Form.Control type="text" placeholder="Ingrese su Nombre o apodo"  onKeyPress={handleNombre}/>
                  <Form.Text className="text-muted">
                  </Form.Text>
                </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Correo</Form.Label>
                <Form.Control type="email" placeholder="Ingrese su email" onKeyPress={mailInput}/>
                <Form.Text className="text-muted">
                  No le avisaremos al, ni somos el equipo Rocket.
                </Form.Text>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formDireccion">
                <Form.Label>Dirección</Form.Label>
                <Form.Control type="text" placeholder="Ingrese donde quiere la entrega" onKeyPress={direccionInput}/>
            </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword" onKeyPress={contraseñaInput}>
                <Form.Label>Su contraseña</Form.Label>
                <Form.Control type="password" placeholder="Contraseña" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Recordarme" />
              </Form.Group>
            </Form> 
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Cancelar
              </Button>
              <Button variant="primary" onClick={()=>{
              crearOrden();
              setConcretada(true)
              setShow(true);
              }}>
                Comprar
              </Button>
            </Modal.Footer>
            </Modal.Body>:<Modal.Body>
              <h2>Compra exitosa! Su código de compra es: {idCompra}</h2>
              <Modal.Footer>
              <Button variant="success" onClick={()=>{
                handleClose();
                clearCart();
              }}>
                Entendido!
              </Button>
              </Modal.Footer>
            </Modal.Body>
            }
          </Modal>
        </Card.Body>
      </Card>
    </Row>
    )
  }
}

export default Cart;