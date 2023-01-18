import React from "react";
import { Nav, Navbar, Row } from "react-bootstrap";
import "./header.scss";

export const Header = () => {
  return (
    <div className="header">
      <Navbar
        bg="dark"
        variant="dark"
        className="container-fluid d-flex"
        fixed="top"
      >
        <Nav.Item className="me-auto">
          <Navbar.Brand>
            <img
              alt="Home Page Logo"
              src="dog.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            Pet Project
          </Navbar.Brand>
        </Nav.Item>
        <Nav.Item>
          <Navbar.Brand>Sign Up</Navbar.Brand>
        </Nav.Item>
        <Navbar.Brand>Sign in</Navbar.Brand>
      </Navbar>
    </div>
  );
};
