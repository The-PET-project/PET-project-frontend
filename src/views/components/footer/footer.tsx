import React from "react";
import { Col, Row } from "react-bootstrap";
import { EmailSvg, LayeredWavesSvg, MobileSvg } from "../../assets/svg";

export const Footer = () => {
  const currentYear: number = new Date().getFullYear();
  return (
    <>
      <LayeredWavesSvg />
      <Row className="text-center footer">
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
      </Row>
    </>
  );
};
