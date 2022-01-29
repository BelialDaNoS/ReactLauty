import { Row, Card, Col, Stack, Button } from "react-bootstrap";
import { useContext } from "react";
import { CartContext } from "./CartContext";
import ItemCart from "./ItemCart";




function Cart() {
  const {clearCart} = useContext(CartContext)
  const {cartArray, deleteItem} = useContext(CartContext);
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
  }else{return(
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
        {cartArray.length > 0 ? <h1 className="justify-content-end">Concretar Compra</h1> : <h1></h1>}
      </Card.Body>
    </Card>
  </Row>)
}}
  export default Cart;


