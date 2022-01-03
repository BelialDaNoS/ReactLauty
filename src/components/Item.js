import ItemCount from "./ItemCount";
import { Card } from "react-bootstrap";
// import {Link} from "react-router-dom";

function Item({cat}){
    return(
            <Card style={{ width: '18rem', margin: '30px' }}>
            <Card.Body>
                <Card.Title> {cat.nombre} </Card.Title>
                <Card.Subtitle className="mb-2 text-muted"> Stock Actual: {cat.stock} </Card.Subtitle>
                <Card.Text>
                    <img src={cat.img}/>
                </Card.Text>
                <ItemCount stock={cat.stock}/>
                {/* <Link to={`/cat/${cat.id}`}>Detalles</Link> */}
            </Card.Body>
            </Card>
    )
}
export default Item