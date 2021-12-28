import { Card } from "react-bootstrap";
import ItemCount from "./ItemCount";
import { Row } from "react-bootstrap";

function ItemListContainer({remera, tazyanne}){
    return (
    <div>
        <Row>
            <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title> {remera.title} </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Talle: L</Card.Subtitle>
                <Card.Text>
                    <img src="/remera.jpg"/>
                </Card.Text>
                <ItemCount stock={remera.stock}/>
            </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title> {tazyanne.title} </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Talle: L</Card.Subtitle>
                <Card.Text>
                    <img src="/tazyanne.jpg" alt="" />
                </Card.Text>
                <ItemCount stock={tazyanne.stock}/>
            </Card.Body>
            </Card>
        </Row>
    </div>
    )
  }
  
  export default ItemListContainer;
  