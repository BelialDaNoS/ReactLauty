import { useState, useEffect } from "react"
import ItemDetail from "./ItemDetail"
import { Row } from "react-bootstrap";
import { useParams } from "react-router-dom"

const id = 4;

let obj = [
    {   
        "id": 1,
        "stock":20,
        "nombre":"Remera pa muy niño",
        "Talle":"XS",  
        "precio":400,
        "img":"/remera.jpg"
    },
    {  
        "id": 2,
        "stock":10,
        "nombre":"Remera pa niño",
        "Talle":"S",  
        "precio":500,
        "img":"/remera.jpg"
    },
    {   
        "id": 3,
        "stock":0, 
        "nombre":"Remera", 
        "Talle":"M",  
        "precio":600,
        "img":"/remera.jpg"
    },
    {   
        "id": 4,
        "stock":15, 
        "nombre":"Remera mas grande", 
        "Talle":"L",  
        "precio":700,
        "img":"/remera.jpg"
    },
    {   
        "id": 5,
        "stock":7, 
        "nombre":"Remera muy grande", 
        "Talle":"XL",  
        "precio":800,
        "img":"/remera.jpg"
    },
] 


const ItemDetailContainer = () => {
    const [product, setProduct] = useState([]);

    // const { id } = useParams()

    const [catalogo, setCatalogo] = useState([]);

    const [loading, setLoading] = useState(false)


        
    useEffect(() => {

        if(id){
            const productDetail = obj.find(e => e.id === parseInt(id))}

       const promise = new Promise((res, rej) => {
            setTimeout(() => {
                res(obj)
            }, 2000)
        })



        promise
            .then((res) => {
                console.log("Bien");
                setCatalogo(obj);
                setProduct(res.find(product => product.id === id))
            })
            .catch((rej) => {
                console.error("Bien't")
            })
            .finally(() => setLoading(true))
    }, [id])

        return (
            <Row> 
                <ItemDetail product={product} />
            </Row>
        )
    
}
  
  export default ItemDetailContainer;