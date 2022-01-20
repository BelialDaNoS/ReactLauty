import CartWidget from "./CartWidget"
import { Container, Nav,Navbar, NavDropdown } from "react-bootstrap";
import { useState, useEffect } from "react";
import DropdownTipos from "./DropdownTipos";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "./CartContext";

function NavBar() {


  
  const [categorias, setCategorias] = useState([]);

  const {productCount} = useContext(CartContext);




  useEffect(() => {

    
    const tipos = fetch('https://pokeapi.co/api/v2/type?limit=18/');

    tipos
        .then((res) => res.json())
        .then((res)=>{
            setCategorias(res);
            console.log("Tojoya Navbar")
        })
        .catch(() => {
            console.error("Bien't")
        })
}, [])


    return (
      <Navbar variant="dark" bg="dark" expand="sm" fixed="top" style={{height:"70px"}}>
      <Container fluid>
      <Link to={"/"} style={{textDecoration:"none"}}><h3>PokeCoder</h3></Link>
      <Navbar.Toggle aria-controls="navbar-dark-example" />
      <Navbar.Collapse id="navbar-dark-example">
        <Nav>
        <NavDropdown
          id="nav-dropdown-dark-example"
          title="Tipos"
          menuVariant="dark">
          <DropdownTipos categorias={categorias.results}/>
        </NavDropdown>
        </Nav>
        <form>
          <input className="form-control" type="text" placeholder="Search" aria-label="Search"/>
        </form>
      </Navbar.Collapse>
      <CartWidget productCount={productCount} />
    </Container>
  </Navbar>
    );
  }

  export default NavBar;