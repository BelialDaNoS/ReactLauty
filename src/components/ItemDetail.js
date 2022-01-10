import { Container, Card } from "react-bootstrap";
import Types from "./Types";
import Abilities from "./Abilities";

function ItemDetail ({product, pokeimg}) {

const pokenombre = product.name;

const typee = product.types;


    return (
        <Container>
        <Card className="text-center">
        <Card.Header><h1 style={{textTransform:"capitalize"}}>{pokenombre}</h1><h6>id:{product.id}</h6></Card.Header>
        <Card.Body>
            <Card.Title><img src={pokeimg} style={{width:'200px', height:'200px'}}/></Card.Title>
                <Card.Title className="border border-primary">Tipo:<Types type={typee} /></Card.Title>
                <Card.Title className="border">Peso: {product.weight} (En hectogramos, no sé como poner una coma antes del último número xd)</Card.Title> 
                <Card.Title className="border border-danger">Ataques:{<Abilities habilidades={product.abilities}/>}</Card.Title> 
        </Card.Body>
        <Card.Footer className="text-muted"></Card.Footer>
        </Card>
        </Container>
        )
    }
export default ItemDetail