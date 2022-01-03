import Item from "./Item";
import { Row } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Col } from "react-bootstrap";

    const ItemList = ({catalogo}) => {
        return (
            <Row>
                {catalogo.map((item,index)=>{
                    return <Item key={index} cat={item}/>
                })}
            </Row>
        )
    }
export default ItemList