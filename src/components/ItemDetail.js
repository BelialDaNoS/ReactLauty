import Item from "./Item";
import { Row } from "react-bootstrap";


    const ItemDetail = ({catalogo}) => {
        return (
            <Row>
                {catalogo.map((item,index)=>
                <Item key={index} cat={item}/>
                )}
            </Row>
        )
    }
export default ItemDetail