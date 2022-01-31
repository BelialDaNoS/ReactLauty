import { useState, useEffect } from "react"
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom"
import {db} from "./firebase";
import { collection, getDocs } from "firebase/firestore";

const ItemDetailContainer = () => {

    const { id } = useParams();

    const [product, setProduct] = useState([]);


    const pokeimg = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
        
    useEffect(() => {

        const coleccionProductos = collection(db, "product")
        const pedido = getDocs(coleccionProductos)

            pedido
            .then((resultado)=>{
                const docs = resultado.docs
                const docs_formateado = docs.map(doc=>{
                    const producto ={
                    idfirebase: doc.id,
                    ...doc.data()
                    }
                    return producto
                })
                console.log(docs_formateado)

                const productfound = docs_formateado.find(element => element.id == id )

                setProduct(productfound)
            })
            .catch((error)=>{
                console.error(error)
            })
    }, [id])




        return (
                <ItemDetail product={product} pokeimg={pokeimg}/>

        )
    
}
  
  export default ItemDetailContainer;