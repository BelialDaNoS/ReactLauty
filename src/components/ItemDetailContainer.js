import { useState, useEffect } from "react"
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom"


const ItemDetailContainer = () => {

    const { id } = useParams();

    const [product, setProduct] = useState([]);


    const pokeimg = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
        
    useEffect(() => {

        const URL = `https://pokeapi.co/api/v2/pokemon/${id}`;

        const detalles = fetch(URL);

        detalles
            .then((res) => res.json())
            .then((res)=>{
                setProduct(res);
                console.log(product)
            })
            .catch(() => {console.error("Pokeinfo Mal")})
    }, [id])




        return (
                <ItemDetail product={product} pokeimg={pokeimg}/>

        )
    
}
  
  export default ItemDetailContainer;