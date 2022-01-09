import { Card, Row } from "react-bootstrap";

const Types = ({type}) =>{
    console.log(type)
    return (
        <Row>
        {type.map((item)=>
            <h2>{item.type.name}</h2>
        )}
        </Row>
    )
}
  export default Types;
    


