import { useState, useEffect } from "react"
import ItemDetail from "./ItemDetail"
import { Row } from "react-bootstrap";
import {Container} from "react-bootstrap";

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

    const [catalogo, setCatalogo] = useState([]);

    const [loading, setLoading] = useState(false)
        
    useEffect(() => {
       const promise = new Promise((res, rej) => {
            setTimeout(() => {
                res(obj)
            }, 2000)
        })

        promise
            .then((res) => {
                console.log("Bien");
                setCatalogo(obj);
                setLoading(true)
                setProduct(res.find(product => product.id === id))
            })
            .catch(() => {
                console.error("Bien't")
            })
    }, [id])

    if(!loading){
        return (
            <Container fluid>
            <Row className="justify-content-md-center">
                <img src="/loadgif.gif" alt="" style={{width:'500px', height:'500px'}}/>
            </Row>
            </Container>
        )
    }else{
        return (
            <Row> 
                <ItemDetail catalogo={catalogo} />
            </Row>
        )
    }
}
  
  export default ItemDetailContainer;