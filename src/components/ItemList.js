import Item from "./Item";
import { Row } from "react-bootstrap";

    const ItemList = ({catalogo, tienetipo}) => {

        if(!tienetipo){
        return (
            <Row>
                {catalogo.map((item,index)=>
                <Item key={index} cat={item}/>
                )}
            </Row>
        )}else{
            return(
            <Row>
            {catalogo.map((item,index)=>
            <Item key={index} cat={item.pokemon}/>
            )}
        </Row>)
        }
    }
export default ItemList;