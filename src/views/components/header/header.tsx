import React from "react";
import { Link } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";

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
          <Navbar.Brand className="mx-1">
            <Link to="/">Pet Project</Link>
          </Navbar.Brand>
        </Nav.Item>
        <Nav.Item>
          <Navbar.Brand>
            <Link to="/contact">Contact us</Link>
          </Navbar.Brand>
        </Nav.Item>
        <Nav.Item>
          <Navbar.Brand>
            <Link to="/sign-up">Sign up</Link>
          </Navbar.Brand>
        </Nav.Item>
        <Navbar.Brand>Sign in</Navbar.Brand>
      </Navbar>
    </Container>
  );
};
