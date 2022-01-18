import React , { createContext, useState } from 'react'



export const CartContext = createContext();


const CartProvider = ( {children} ) => {

    const [cartArray, setCartArray] = useState([])

    const addToCart = (product, pokenombre, count) =>{
        console.log(`Agregaste ${pokenombre} Cantidad:${count}`)
        const newItem ={
            pokenombre,
            count,
            product
        }
        setCartArray([...cartArray, newItem])
    }

    const deleteItem = (id) => {
        const updatedCart = cartArray.filter(element => element.id !== id);
        setCartArray(updatedCart);
    }

    const clearCart = () => {
        setCartArray([]);
    }

    const isInCart = (id) => {
        return cartArray.some(element => element.id == id);
    }


    const value = {
        cartArray,
        addToCart,
        deleteItem,
        clearCart
    }

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;    