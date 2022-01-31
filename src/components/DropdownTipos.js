import { NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

const DropdownTipos = ({categorias}) =>{
    if(categorias){
        return (
            <div>
                {categorias.map((item,index)=>
                    <NavDropdown.Item as={"span"} key={index}>
                        <Link to={`tipos/${item}`} style={{textTransform:"capitalize"}}>{item}</Link>
                    </NavDropdown.Item>
                )} 
            </div>

        )
    }else{return(<div>Cargando</div>)}
}
    export default DropdownTipos;