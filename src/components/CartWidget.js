import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "./CartContext";

const carro = require("./carro.png");

const CartWidget = ({compra}) => {


  const {cartArray, productCount} = useContext(CartContext);

  if(cartArray.length != 0){
    console.log(productCount)
  }


  return (
        <div className="d-flex justify-content-end">
          <h4 className="row text-white align-content-start">{compra}</h4>
          <Link to={"/cart"}><img src={carro} className="row"/></Link> 
        </div>
  )
}

export default CartWidget