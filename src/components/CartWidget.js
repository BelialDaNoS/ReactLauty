import { Link } from "react-router-dom";


const carro = require("./carro.png");

const CartWidget = ({productCount}) => {

  return (
        <div className="d-flex justify-content-end">
          <h4 className="row text-white align-content-start me-1 mt-4">{productCount}</h4>
          <Link to={"/cart"}><img src={carro} className="row"/></Link> 
        </div>
  )
}

export default CartWidget