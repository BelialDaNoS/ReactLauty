import { useState, useEffect } from "react"
import ItemDetail from "./ItemDetail"
import { Row } from "react-bootstrap";
import { useParams } from "react-router-dom"

const id = 9;


const ItemDetailContainer = () => {

        // const { id } = useParams()

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
            <Row> 
                <ItemDetail product={product} pokeimg={pokeimg} />
            </Row>
        )
    
}
  
  export default ItemDetailContainer;