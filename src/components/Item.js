import { Card } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import DeIdAPrecio from "./DeIdAPrecio";

function Item({cat}){
    const [pokeimg, setPokeimg] = useState([]);
    const [pokeinfo, setPokeinfo] = useState([]);


    useEffect(() => {
    const promesa = fetch(`https://pokeapi.co/api/v2/pokemon/${cat.name}`);
    promesa
        .then((res) => res.json())
        .then((res)=>{
            setPokeimg(res.sprites);
            setPokeinfo(res.id)
        })
        .catch(() => {
            console.error("Pokeinfo Mal")
        })
    }, [pokeimg])



    return(
            <Card style={{ width: '20rem', margin: '10px' }}>
            <Card.Body>
                <Card.Title style={{textTransform:"capitalize"}}> {cat.name} </Card.Title>
                <Card.Subtitle className="mb-2 text-muted"> Stock: {pokeinfo}   Precio: $<DeIdAPrecio id={pokeinfo}/>   </Card.Subtitle>
                <Card.Text><img src={pokeimg.front_default} style={{width:'200px', height:'200px'}}/></Card.Text>
                <Row><Link className="btn btn-primary" to={`/item/${pokeinfo}`}>Detalles</Link></Row>

            </Card.Body>
            </Card>
    )
}
export default Item