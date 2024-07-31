import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import "./NasaCard.css";

const NasaCard = ({ title, url, explanation, date, mediaType }) => {
  return (
    <Card className="mb-3 nasa-card">
      <Row noGutters={true} className="align-items-center justify-content-center nasa-card-row">
        <Col md={7} className="d-flex justify-content-center">
          {mediaType === "video" ? (
            <div className="embed-responsive embed-responsive-16by9 nasa-media">
              <iframe
                className="embed-responsive-item"
                src={url}
                title={title}
                allowFullScreen
              ></iframe>
            </div>
          ) : (
            <Card.Img className="nasa-card-img nasa-media" src={url} alt={title} />
          )}
        </Col>
        <Col
          md={4}
          className="d-flex flex-column justify-content-center align-items-center nasa-card-body"
        >
          <Card.Body className="text-center">
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
