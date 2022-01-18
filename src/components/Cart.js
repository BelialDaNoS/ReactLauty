import { Row, Card, Col } from "react-bootstrap";
import { useContext } from "react";
import { CartContext } from "./CartContext";
import ItemCart from "./ItemCart";

function Cart() {

  const {cartArray} = useContext(CartContext)
  
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
        {cartArray.map((pokenombre, index)=>
          <ItemCart key={index} nombre={pokenombre}/>
        )}
      </Card.Body>
    </Card>
  </Row>)
}}
  export default Cart;


