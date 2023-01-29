import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Contact = () => {
  return (
    <div className="contact d-flex align-items-center justify-content-around mx-auto">
      <Row>
        <Form>
          <Form.Group controlId="nameId">
            <Form.Label className="my-3">Name</Form.Label>
            <Form.Control placeholder="Your full name" />
          </Form.Group>
          <Form.Group controlId="emailId">
            <Form.Label className="my-3">Email address</Form.Label>
            <Form.Control type="email" placeholder="your@email.com" />
          </Form.Group>
          <Form.Group controlId="messageId">
            <Form.Label className="my-3">Message</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
        </Form>
        <Row className="my-3 text-center">
          <Col>
            <Link to="/">
              <h5>Back to home page</h5>
            </Link>
          </Col>
          <Col>
            <Button variant="success">
              <h5>Send message</h5>
            </Button>
          </Col>
        </Row>
      </Row>
    </div>
  );
};
