import { Component } from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

class Top extends Component {
  render() {
    return (
      <Container>
        <Navbar expand="lg" variant="dark">
          <Navbar.Brand href="#">TV Shows</Navbar.Brand>
          <Nav>
            <NavDropdown id="nav-dropdown-dark-example" title="Genres" menuVariant="dark">
              <NavDropdown.Item href="#action/3.1">Comedy</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Drama</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Thriller</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text className="d-flex">
              <i className="bi bi-grid-fill me-3"></i>
              <i className="bi bi-grid-3x3-gap-fill"></i>
            </Navbar.Text>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    );
  }
}

export default Top;