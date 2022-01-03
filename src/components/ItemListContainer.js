import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import ItemList from "./ItemList"
import { Row } from "react-bootstrap";

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
        "nombre":"Remera bastante mas grande", 
        "Talle":"XL",  
        "precio":800,
        "img":"/remera.jpg"
    },
] 


const ItemListContainer = () => {

    let [catalogo, setCatalogo] = useState([])
    const { id } = useParams()

    
    useEffect(() => {
       const promesa = new Promise((res, rej) => {
            setTimeout(() => {
                res(obj)
            }, 2000)
        })

        promesa
            .then((catalogo) => {
                console.log("Bien")
                setCatalogo(obj)
            })
            .catch(() => {
                console.log("Bien't")
            })
    }, [id])

    return (
        <Row> 
            <ItemList catalogo={catalogo} />
        </Row>
    )
}
  
  export default ItemListContainer;
  