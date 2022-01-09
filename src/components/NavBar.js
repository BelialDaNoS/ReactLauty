import CartWidget from "./CartWidget"
import { Container, Nav,Navbar, NavDropdown } from "react-bootstrap";


function NavBar() {
    return (
      <Navbar variant="dark" bg="dark" expand="sm">
      <Container fluid>
      <Navbar.Brand href="/"><h3>PokeCoder</h3></Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-dark-example" />
      <Navbar.Collapse id="navbar-dark-example">
        <Nav>
          <Nav.Item>
            <Nav.Link href="/">Normales</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/">Fuego</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/">Tierra</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/">Agua</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/">Volador</Nav.Link>
          </Nav.Item>
          <NavDropdown title="Otros Tipos" id="nav-dropdown">
            <NavDropdown.Item href="/">Peleador</NavDropdown.Item>
            <NavDropdown.Item href="/">Veneno</NavDropdown.Item>
            <NavDropdown.Item href="/">Planta</NavDropdown.Item>
            <NavDropdown.Item href="/">Piedra</NavDropdown.Item>
            <NavDropdown.Item href="/">Bicho</NavDropdown.Item>
            <NavDropdown.Item href="/">Fantasma</NavDropdown.Item>
            <NavDropdown.Item href="/">Acero</NavDropdown.Item>
            <NavDropdown.Item href="/">Electrico</NavDropdown.Item>
            <NavDropdown.Item href="/">Psíquico</NavDropdown.Item>
            <NavDropdown.Item href="/">Hielo</NavDropdown.Item>
            <NavDropdown.Item href="/">Dragon</NavDropdown.Item>
            <NavDropdown.Item href="/">Oscuridad</NavDropdown.Item>
            <NavDropdown.Item href="/">Hada</NavDropdown.Item>
            <NavDropdown.Item href="/">Desconocido</NavDropdown.Item>
            <NavDropdown.Item href="/">Sombra</NavDropdown.Item>
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