import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import "./NasaCard.css";

const NasaCard = ({ title, url, explanation, date }) => {
  return (
    <Card className="mb-3 nasa-card">
      <Row className="no-gutters align-items-center nasa-card-row">
        <Col md={4}>
          <Card.Img className="nasa-card-img" src={url} alt={title} />
        </Col>
        <Col md={8} className="d-flex flex-column justify-content-center">
          <Card.Body className="nasa-card-text">
            <Card.Title>{title}</Card.Title>
            <Card.Text>{explanation}</Card.Text>
            <Card.Footer>
              <small className="text-muted">{date}</small>
            </Card.Footer>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};

export default NasaCard;
