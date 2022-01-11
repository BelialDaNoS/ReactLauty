import { useState, useEffect } from "react"
import ItemList from "./ItemList"
import { Row } from "react-bootstrap";
import {Container} from "react-bootstrap";
import { useParams } from "react-router-dom"

const ItemListContainer = () => {

    const [catalogo, setCatalogo] = useState([]);

    const [loading, setLoading] = useState(false)

    const [tienetipo, setTienetipo] = useState(false)

    const { id } = useParams();

    useEffect(() => {

        const URL = id ? `https://pokeapi.co/api/v2/type/${id}` : 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=500'

        const promise = fetch(URL);



        if(!id){
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
        }else{
        promise
            .then((res) => res.json())
            .then((res)=>{
                setCatalogo(res.pokemon);
                console.log("Tojoya")
                setTienetipo(true)
            })
            .catch(() => {
                console.error("Bien't")
            })
            .finally(() => setLoading(true))
        }
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
                <ItemList catalogo={catalogo} tienetipo={tienetipo} />
            </Row>
        )
    }
}
  
  export default ItemListContainer;