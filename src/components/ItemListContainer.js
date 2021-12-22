import { Card } from "react-bootstrap";
import ItemCount from "./ItemCount";

function ItemListContainer(){

    return (
    <div>
        <Card style={{ width: '18rem' }}>
        <Card.Body>
            <Card.Title> Remera </Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Talle: L</Card.Subtitle>
            <Card.Text>
                Acá iría una foto de una remera piola que encontré en google pero no se como agregarla y me frustré buscando así que queda éste texto.
            </Card.Text>
            <ItemCount stock={5}/>
        </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }}>
        <Card.Body>
            <Card.Title> Pantalón </Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Talle: L</Card.Subtitle>
            <Card.Text>
                Acá iría una foto de un pantalón piola que encontré en google pero no se como agregarlo y me frustré buscando así que queda éste texto.
            </Card.Text>
            <ItemCount stock={10}/>
        </Card.Body>
        </Card>
    </div>
    )
  }
  
  export default ItemListContainer;
  