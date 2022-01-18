import { Row } from "react-bootstrap";

const Types = ({type}) =>{
    if(type){
    return (
        <div>
            {type.map((item,index)=>
                <Row key={index}>
                <h3 style={{textTransform:"capitalize"}}>{item.type.name}</h3>
                </Row>
            )} 
        </div>
    )}else{return(<div>Cargando</div>)}
}
  export default Types;