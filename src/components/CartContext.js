import React , { createContext, useState } from 'react'



export const CartContext = createContext();


const CartProvider = ( {children} ) => {

    const [cartArray, setCartArray] = useState([]);

    const [productCount, setProductCount] = useState(0)


    console.log(productCount);


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

    const deleteItem = (id) => {
        const updatedCart = cartArray.filter(element => element.product.id !== id);
        setCartArray(updatedCart);
        console.log(updatedCart)
    }

    const clearCart = () => {
        setCartArray([]);
    }

    const isInCart = (id) => {
        return cartArray.some(element => element.product.id === id);
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