import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './APODInfo.css'; // Certifique-se de que o caminho está correto

const APODInfo = () => {
  return (
    <Container className="apod-info-container">
      <Row>
        <Col>
          <h1 className="apod-title">O que é o APOD?</h1>
          <p className="apod-description">
            **APOD (Astronomy Picture of the Day)** é um site da NASA que fornece uma nova imagem ou vídeo do espaço todos os dias, acompanhado por uma breve explicação escrita por um astrônomo profissional. Lançado em 1995, o APOD é uma das mais populares fontes de imagens astronômicas na web. O objetivo do site é promover o interesse e a educação sobre astronomia, oferecendo aos visitantes uma visão diária de nosso universo.
          </p>
          <p className="apod-description">
            O site oferece uma variedade de conteúdos visuais impressionantes, desde fotos de galáxias distantes até vídeos de eventos astronômicos. Cada postagem inclui uma descrição que fornece contexto e detalhes sobre o que está sendo exibido, ajudando a tornar o conteúdo acessível e informativo para o público geral.
          </p>
          <p className="apod-description">
            A nossa aplicação é uma interface para explorar essas imagens e vídeos, permitindo que você busque por data específica e veja o conteúdo histórico do APOD. Desfrute das maravilhas do cosmos com facilidade e descubra novas informações sobre o universo a cada dia!
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default APODInfo;
