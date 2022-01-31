import { Container, Nav, Navbar as BTNavbar, NavDropdown} from "react-bootstrap";

const NavBar = () => {
  return (
<BTNavbar bg="light" expand="lg">
  <Container>
    <BTNavbar.Brand href="#home">La Tiendita E-Commerceq</BTNavbar.Brand>
    <BTNavbar.Toggle aria-controls="basic-navbar-nav" />
    <BTNavbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Link</Nav.Link>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </BTNavbar.Collapse>
  </Container>
</BTNavbar>
  );
};

export default NavBar;
