import React from "react";
import { Col, Container, Figure, Row } from "react-bootstrap";

export const AboutComponent = () => {
  return (
    <Container className="about">
      <h2 className="text-center">Services</h2>
      <Row className="about-row d-block d-md-flex justify-content-center align-items-center ">
        <Col className="text-center">
          <h2>Pet-walking</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Accusantium animi voluptates totam eaque! Asperiores reprehenderit
            dolorum sunt magni! Error molestias cumque sunt distinctio expedita,
            consectetur explicabo assumenda maxime consequatur eaque.
          </p>
        </Col>
        <Col className="text-center">
          <Figure.Image width={400} className="about-img" src="cover.jpg" />
        </Col>
      </Row>
      <Row className="about-row d-block d-md-flex flex-row-reverse justify-content-center align-items-center">
        <Col className="text-center">
          <h2>Pet-taxi</h2>
          <p>Coming soon...</p>
        </Col>
        <Col className="text-center">
          <Figure.Image width={400} className="about-img" src="cover.jpg" />
        </Col>
      </Row>
      <Row className="about-row d-block d-md-flex justify-content-center align-items-center">
        <Col className="text-center">
          <h2>Pet-Feeding</h2>
          <p>Coming soon...</p>
        </Col>
        <Col className="text-center">
          <Figure.Image width={400} className="about-img" src="cover.jpg" />
        </Col>
      </Row>
    </Container>
  );
};
