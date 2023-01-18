import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./footer.scss";

export const Footer = () => {
  return (
    <Container fluid className="text-center footer">
      <Row>
        <Col>Phone</Col>
      </Row>
      <Row>
        <Col>Email</Col>
      </Row>
      <Row>
        <Col>
          &copy; <script>document.write(new Date().getFullYear())</script>
          Redturtle
        </Col>
      </Row>
    </Container>
  );
};
