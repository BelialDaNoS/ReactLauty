import React , { createContext, useState } from 'react'



export const CartContext = createContext();


const CartProvider = ( {children} ) => {

    const [cartArray, setCartArray] = useState([]);

    const [productCount, setProductCount] = useState(0)


    const addToCart = (product, pokenombre, count) =>{
        if(isInCart(product.id)){
            alert("Ya agregaste uno de esos al carrito.")
        }else{
        console.log(`Agregaste ${pokenombre} Cantidad:${count}`)

        setProductCount(productCount + count);
        
        const newItem ={
            pokenombre,
            count,
            product
            }   
        setCartArray([...cartArray, newItem])
        }
    }

    const deleteItem = (id, cantidad) => {
        const updatedCart = cartArray.filter(element => element.product.id !== id);
        setCartArray(updatedCart);
        setProductCount(productCount - cantidad);
    }

    const clearCart = () => {
        setCartArray([]);
    }

    const isInCart = (id) => {
        return cartArray.some(element => element.product.id === id);
    }


    const value = {
        cartArray,
        productCount,
        addToCart,
        deleteItem,
        clearCart,
        isInCart
    }

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;    