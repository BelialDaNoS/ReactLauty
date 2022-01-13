import CartWidget from "./CartWidget"
import { Container, Nav,Navbar, NavDropdown } from "react-bootstrap";
import { useState, useEffect } from "react";
import DropdownTipos from "./DropdownTipos";


function NavBar() {


  const [categorias, setCategorias] = useState([]);

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
      <Navbar.Brand href="/"><h3>PokeCoder</h3></Navbar.Brand>
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
      <CartWidget compra={0} />
    </Container>
  </Navbar>
    );
  }

  export default NavBar;