import { Row, Card, Col } from "react-bootstrap";
import { useContext } from "react";
import { CartContext } from "./CartContext";
import ItemCart from "./ItemCart";

function Cart() {

  const {cartArray, deleteItem} = useContext(CartContext);
  
  console.log(cartArray)


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
        <Card.Title>Carrito</Card.Title>
        {cartArray.map((item)=>
          <ItemCart key={item.product.id} item={item} nombre={item.pokenombre} id={item.product.id} deleteItem={deleteItem}/>
        )}
      </Card.Body>
    </Card>
  </Row>)
}}
  export default Cart;


