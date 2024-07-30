import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-white mt-5 p-4">
      <Container>
        <Row>
          <Col md={4}>
            <h5>NASA APOD</h5>
            <p>Exploring the universe, one image at a time.</p>
          </Col>
          <Col md={4}>
            <h5>Links</h5>
            <ul className="list-unstyled">
              <li><a href="#home" className="text-white">Home</a></li>
              <li><a href="#about" className="text-white">About</a></li>
              <li><a href="#contact" className="text-white">Contact</a></li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Contact</h5>
            <p>Email: contact@nasaapod.com</p>
            <p>Follow us on <a href="https://twitter.com/nasa" className="text-white">Twitter</a></p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
