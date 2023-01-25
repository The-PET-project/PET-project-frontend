import React from "react";
import { Container, Nav, Navbar, Row } from "react-bootstrap";
import "./header.scss";

export const Header = () => {
  return (
    <Container className="header">
      <Navbar
        bg="dark"
        variant="dark"
        className="container-fluid d-flex"
        fixed="top"
      >
        <Nav.Item className="me-auto">
          <Navbar.Brand className="mx-1">Pet Project</Navbar.Brand>
        </Nav.Item>
        <Nav.Item>
          <Navbar.Brand>Sign Up</Navbar.Brand>
        </Nav.Item>
        <Navbar.Brand>Sign in</Navbar.Brand>
      </Navbar>
    </Container>
  );
};
