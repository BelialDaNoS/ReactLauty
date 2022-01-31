import CartWidget from "./CartWidget"
import { Container, Nav,Navbar, NavDropdown } from "react-bootstrap";
import { useState, useEffect } from "react";
import DropdownTipos from "./DropdownTipos";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "./CartContext";

function NavBar() {

  const categorias = ["normal", "peleador", "electrico", "volador"];

  const {productCount} = useContext(CartContext);

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
          <DropdownTipos categorias={categorias}/>
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