import { Container, Card, Row, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";
import { useState, useContext } from "react";
import { CartContext } from "./CartContext";

function ItemDetail ({product, pokeimg}) {
    const [added,setAdded]=useState(false)
    const pokenombre = product.title;
    const {addToCart,cartArray,isInCart} = useContext(CartContext)
    const flecha = "<--";
    const precioIndividual = product.precio ;

    function onAdd(count){
        addToCart(product, pokenombre , count, precioIndividual)
        setAdded(true)
    }

    return (
        <Container className="pt-5">
        <Card className="text-center">
            <Card.Header>
                <Link className="btn btn-primary" to={`/`}>{flecha}</Link>
                <h1 style={{textTransform:"capitalize"}}>{pokenombre}</h1><h6>Id:{product.id} || Precio: {product.precio}$</h6>
            </Card.Header>
            <Card.Body>
                <Card.Title>
                    <Stack direction="horizontal" gap={3} className="justify-content-center">
                        <img src={pokeimg} style={{width:'200px', height:'200px'}}/>
                        {isInCart(product.id) ? <Row> <h3>Item agregado al carrito.</h3></Row> : <h2></h2>}
                    </Stack>
                </Card.Title>
                    <Card.Title className="border border-primary">Tipo/s:{product.categoria_2 != "" ? <Row>
                        <h3 style={{textTransform:"capitalize"}}>{product.categoria}</h3><h3 style={{textTransform:"capitalize"}}> {product.categoria_2}</h3>
                    </Row> : <h3 style={{textTransform:"capitalize"}}>{product.categoria}</h3> }</Card.Title>
                    <Card.Title className="border">Peso: {product.peso} Kilogramos</Card.Title> 
                    <Card.Title className="border border-danger">Ataque principal:<h4 style={{textTransform:"capitalize"}}>{product.ataque}</h4></Card.Title> 
            </Card.Body>
            <Card.Footer>
                {added ? <Link to={"/Cart"} className="btn btn-primary ms-2">Vamos Al Carrrrrrrito</Link> : <ItemCount stock={product.id} initial={1} onAdd={onAdd} added={added}/>}
                </Card.Footer>
        </Card>
        </Container>
        )
    }
export default ItemDetail

