import { Container, Card } from "react-bootstrap";
import Types from "./Types";
import Abilities from "./Abilities";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";

function ItemDetail ({product, pokeimg}) {

const pokenombre = product.name;

const typee = product.types;

const flecha = "<--"

function onAdd (count){
    console.log(`Agregaste ${pokenombre} Cantidad:${count}`)
}


    return (
        <Container className="pt-5">
        <Card className="text-center">
            <Card.Header>
                <Link className="btn btn-primary" to={`/`}>{flecha}</Link>
                <h1 style={{textTransform:"capitalize"}}>{pokenombre}</h1><h6>Stock:{product.id}</h6>
            </Card.Header>
            <Card.Body>
                <Card.Title><img src={pokeimg} style={{width:'200px', height:'200px'}}/></Card.Title>
                    <Card.Title className="border border-primary">Tipo:<Types type={typee} /></Card.Title>
                    <Card.Title className="border">Peso: {product.weight} (En hectogramos, no sé como poner una coma antes del último número xd)</Card.Title> 
                    <Card.Title className="border border-danger">Ataques:{<Abilities habilidades={product.abilities}/>}</Card.Title> 
            </Card.Body>
            <Card.Footer><ItemCount stock={product.id} initial={0} onAdd={onAdd}/></Card.Footer>
        </Card>
        </Container>
        )
    }
export default ItemDetail