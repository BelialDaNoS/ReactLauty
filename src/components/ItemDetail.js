import Item from "./Item";
import { Row } from "react-bootstrap";


    const ItemDetail = ({product}) => {
        return (
            <Row>
                <Item key={index} cat={item}/>
            </Row>
        )
    }
export default ItemDetail