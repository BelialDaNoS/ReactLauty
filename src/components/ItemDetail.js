import { Container, Card, Row, Stack } from "react-bootstrap";
import Types from "./Types";
import Abilities from "./Abilities";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";
import { useState, useContext } from "react";
import { CartContext } from "./CartContext";

function ItemDetail ({product, pokeimg}) {

const [added,setAdded]=useState(false)

const pokenombre = product.name;

const typee = product.types;

const {addToCart,isInCart,cartArray} = useContext(CartContext)

const flecha = "<--"


    function onAdd(count){
        addToCart(product, pokenombre , count)
        setAdded(true)
    }



    return (
        <Container className="pt-5">
        <Card className="text-center">
            <Card.Header>
                <Link className="btn btn-primary" to={`/`}>{flecha}</Link>
                <h1 style={{textTransform:"capitalize"}}>{pokenombre}</h1><h6>Stock:{product.id}</h6>
            </Card.Header>
            <Card.Body>
                <Card.Title>
                    <Stack direction="horizontal" gap={3} className="justify-content-center">
                        <img src={pokeimg} style={{width:'200px', height:'200px'}}/>
                        {isInCart(product.id) ? <Row> <h3>Item agregado al carrito.</h3> </Row> : <h2></h2>}
                    </Stack>
                </Card.Title>
                    <Card.Title className="border border-primary">Tipo:<Types type={typee} /></Card.Title>
                    <Card.Title className="border">Peso: {product.weight} (En hectogramos, no sé como poner una coma antes del último número xd)</Card.Title> 
                    <Card.Title className="border border-danger">Ataques:{<Abilities habilidades={product.abilities}/>}</Card.Title> 
            </Card.Body>
            <Card.Footer>
                {added ? <Link to={"/Cart"} className="btn btn-primary ms-2">Vamos Al Carrrrrrrito</Link> : <ItemCount stock={product.id} initial={1} onAdd={onAdd} added={added}/>}
                </Card.Footer>
        </Card>
        </Container>
        )
    }
export default ItemDetail

