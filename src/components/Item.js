import ItemCount from "./ItemCount";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { useState, useEffect } from "react"
import ItemDetailContainer from "./ItemDetailContainer"
// import {Link} from "react-router-dom";

function Item({cat,img}){
    const [pokeimg, setPokeimg] = useState([]);
    const [pokeinfo, setPokeinfo] = useState([]);


    const handleShow = () => setShow(true);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);


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
    }, [])



    return(
            <Card style={{ width: '18rem', margin: '30px' }}>
            <Card.Body>
                <Card.Title> {cat.name} </Card.Title>
                <Card.Subtitle className="mb-2 text-muted"> id: {pokeinfo} </Card.Subtitle>
                <Card.Text>
                    <img src={pokeimg.front_default} style={{width:'200px', height:'200px'}}/>
                </Card.Text>
                
                <ItemCount stock={pokeinfo}/>
                    <Row className="justify-content-center">
                        <Button onClick={handleShow}>Detalles</Button>
                    </Row>
                {/* <Link to={`/cat/${cat.id}`}>Detalles</Link> */}
            </Card.Body>
            </Card>
    )
}
export default Item