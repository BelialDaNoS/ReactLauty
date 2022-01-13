const carro = require("./carro.png");

const CartWidget = ({compra}) => {

  return (

        <div className="d-flex justify-content-end">
          <h4 className="row text-white align-content-start">{compra}</h4>
          <img src={carro} className="row"/>
        </div>
  )
}

export default CartWidget