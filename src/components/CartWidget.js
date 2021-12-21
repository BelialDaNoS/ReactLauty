const carro = require("./carro.png");
import contador from "./ItemListContainer";

const CartWidget = () => {
  return (
    <div>
        <p>{contador}</p>
        <img src={carro}/>
    </div>
  )
}

export default CartWidget