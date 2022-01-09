import { useState, useEffect } from "react"
import ItemDetail from "./ItemDetail"
import { Row } from "react-bootstrap";
import { useParams } from "react-router-dom"

const id = 4;


const ItemDetailContainer = () => {

    const [product, setProduct] = useState([]);

    // const { id } = useParams()

    const [catalogo, setCatalogo] = useState([]);

    const [loading, setLoading] = useState(false)


        
    useEffect(() => {


        const URL = ['https://pokeapi.co/api/v2/'];
    
        const getcollection = fetch(URL);

        if(id){
            const productDetail = URL.find(e => e.id === parseInt(id))}



        getcollection
            .then((res) =>  res.json())
            .then((res) => {
                setCatalogo(URL);
                setProduct(res.find(product => product.id === id))
            })
            .catch((rej) => {
                console.error("Bien't")
            })
    }, [id])

        return (
            <Row> 
                <ItemDetail product={product} />
            </Row>
        )
    
}
  
  export default ItemDetailContainer;