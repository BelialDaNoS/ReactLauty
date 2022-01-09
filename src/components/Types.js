import { Row } from "react-bootstrap";

const Types = ({type}) =>{
    console.log(type)
    return (

        <div>
            {type.map((item,index)=>
                <Row key={index}>
                <h2>{item.type.name}</h2>
                </Row>
            )}
        </div>

    )
}
  export default Types;