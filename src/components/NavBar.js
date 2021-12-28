import CartWidget from "./CartWidget"
import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import {cantidad} from "./ItemCount"

function NavBar() {
    return (
      <Navbar variant="dark" bg="dark" expand="sm">
      <Container fluid>
      <Navbar.Brand href="#home"><h3>Local Genérico</h3></Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-dark-example" />
      <Navbar.Collapse id="navbar-dark-example">
        <Nav>
          <Nav.Item>
            <Nav.Link href="/home">Remeras</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/home">Pantalones</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/home">Otros</Nav.Link>
          </Nav.Item>
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