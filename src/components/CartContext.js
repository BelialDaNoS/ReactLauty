import React , { createContext, useState } from 'react'



export const CartContext = createContext();


const CartProvider = ( {children} ) => {

    const [cartArray, setCartArray] = useState

    return (
        <CartContext.Provider value={{cartArray}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;