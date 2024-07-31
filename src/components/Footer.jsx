import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <Container>
        <Row>
          <Col md={4} className="d-flex flex-column mb-4 mb-md-0">
            <h5 className="mb-3">NASA APOD</h5>
            <p>Explorando o universo, uma imagem de cada vez.</p>
          </Col>
          <Col md={4} className="d-flex flex-column">
            <h5 className="mb-3">Contato</h5>
            <p className="mb-1">Email: <a href="mailto:contact@nasaapod.com" className="text-white text-decoration-none">contact@nasaapod.com</a></p>
            <p className="mb-0">Siga-nos <a href="https://twitter.com/nasa" className="text-white text-decoration-none">Twitter</a></p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
