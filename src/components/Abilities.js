import { Row } from "react-bootstrap";

const Abilities = ({habilidades}) =>{
    console.log(habilidades)
    return (

        <div>
           {habilidades.map((item,index)=>
                <Row key={index}>
                    <h2>{item.ability.name}</h2>
                </Row>
            )}
        </div>

    )
}
  export default Abilities;