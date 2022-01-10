import { Row } from "react-bootstrap";

const Abilities = ({habilidades}) =>{
    console.log(habilidades)
    if(habilidades){
    return (
        <div>
           {habilidades.map((item,index)=>
                <Row key={index}>
                    <h3 style={{textTransform:"capitalize"}}>{item.ability.name}</h3>
                </Row>
            )}
        </div>
    )}else{return(<div>Cargando</div>)}
}
  export default Abilities;