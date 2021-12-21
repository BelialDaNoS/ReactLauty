import React, { useState } from 'react'

const contador = ( { stock, initial, onAdd } ) => {

  const [ contador, setContador ] = useState(initial);

  const sumar = () => {
    if (contador < stock) {
      setContador(contador + 1)
    }
  }
  
  const restar = () => {
    if (contador > initial) {
      setContador(contador - 1)
    }
  }

  return (
    <div>
      <button onClick={() => restar()} >-</button>
      
      <p>{contador}</p>
      <button onClick={() => sumar()} >+</button>
    </div>
  )
}

export default contador