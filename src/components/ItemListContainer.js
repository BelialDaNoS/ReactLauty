import { useState, useEffect } from "react"
import ItemList from "./ItemList"
import { Row } from "react-bootstrap";
import {Container} from "react-bootstrap";


const ItemListContainer = () => {

    const [catalogo, setCatalogo] = useState([]);

    const [loading, setLoading] = useState(false)

    useEffect(() => {

        const promise = fetch('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=200');

        promise
            .then((res) => res.json())
            .then((res)=>{
                setCatalogo(res.results);
                console.log("Tojoya")
            })
            .catch(() => {
                console.error("Bien't")
            })
            .finally(() => setLoading(true))
    }, [])

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
                <ItemList catalogo={catalogo} />
            </Row>
        )
    }
}
  
  export default ItemListContainer;