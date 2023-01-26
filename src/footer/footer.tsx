import React from "react";
import { EmailSvg, MobileSvg } from "../assets/svg";
import { Col, Container, Row } from "react-bootstrap";

export const Footer = () => {
  const currentYear: number = new Date().getFullYear();
  return (
    <Container fluid className="text-center footer">
      <Row>
        <Col>
          <MobileSvg /> <span>+1 23 456 789</span>
        </Col>
      </Row>
      <Row>
        <Col>
          <EmailSvg /> <span>petproject@email.com</span>
        </Col>
      </Row>
      <Row>
        <Col>
          <div>
            <span>&copy;</span>
            <span>{currentYear}</span>
            <span>Redturtle</span>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
