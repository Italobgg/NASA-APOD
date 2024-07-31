import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const APODInfo = () => {
  return (
    <Container className="text-center my-5">
      <Row>
        <Col>
          <h1>O que é o APOD ?</h1>
          <p>
            O Astronomy Picture of the Day (APOD) é um site mantido pela NASA
            que exibe uma nova imagem ou vídeo astronômico a cada dia. Cada
            publicação vem acompanhada de uma breve descrição, fornecida por um
            astrônomo ou especialista no campo.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default APODInfo;
