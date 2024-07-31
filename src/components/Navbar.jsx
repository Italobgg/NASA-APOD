import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./Navbar.css"; // Certifique-se de que o caminho está correto

const AppNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#" className="custom-navbar">
          <h1 className="navbar-title">I-GG</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto navbar-nav">
            <Nav.Link href="#">Inicio</Nav.Link>
            <Nav.Link
              href="https://github.com/Italobgg/NASA-APOD"
              target="_blank"
              rel="noopener noreferrer"
            >
              Repositório Git
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
