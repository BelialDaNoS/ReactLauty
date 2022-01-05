import Item from "./Item";
import { Row } from "react-bootstrap";


    const ItemList = ({catalogo}) => {
        return (
            <Row>
                {catalogo.map((item,index)=>
                <Item key={index} cat={item}/>
                )}
            </Row>
        )
    }
export default ItemList