import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { User } from "../../models/user";
import { Button, Col, Form, Row } from "react-bootstrap";
import { ErrorMessage } from "./error_message";
import { registrationStarted } from "../../store/slices/entry_process_slice";

const userNameRegexp = /^[a-zA-Z0-9\.\-\_]{2,20}$/;
const nameRegexp = /^[a-zA-Z\-]{2,20}$/;
const emailRegexp =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const isValidValue = (regexp, value) => {
  return String(value).match(regexp);
};

export const Registration = () => {
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();
  // TODO useState/useStore to get processIndicator values

  const registrationHandler = (e) => {
    e.preventDefault();

    const userName = e.target["userNameId"].value;
    const middleName = e.target["middleNameId"].value;
    const firstName = e.target["firstNameId"].value;
    const lastName = e.target["lastNameId"].value;
    const email = e.target["emailId"].value;
    const password1 = e.target["passwordId"].value;
    const password2 = e.target["passwordAgainId"].value;

    if (password1 !== password2) {
      setErrorMessage("Passwords are different. Please, type them again.");
      if (password1.length < 8) {
        setErrorMessage("Passwords should be at least 8 characters.");
      }
    } else if (!isValidValue(userNameRegexp, userName)) {
      setErrorMessage(
        "User name contains invalid characthers. The valid characters are: small and capital letters, numbers, and ., -, _."
      );
    } else if (
      !isValidValue(nameRegexp, firstName) ||
      !isValidValue(nameRegexp, lastName)
    ) {
      setErrorMessage("All name fields should be separately 2-20 characters.");
    } else if (!isValidValue(emailRegexp, email)) {
      setErrorMessage("Please add a valid email address.");
    } else {
      const user = new User(
        userName,
        email,
        password1,
        firstName,
        lastName,
        middleName
      );
      setErrorMessage(null);
      dispatch(registrationStarted({ user, userType: "PET_OWNER" }));
    }
  };

  return (
    <div className="registration d-flex align-items-center justify-content-around mx-auto">
      <Row>
        <h1>Register your account</h1>
        <Form onSubmit={registrationHandler}>
          {errorMessage ? <ErrorMessage message={errorMessage} /> : null}
          {/* Name */}
          <Form.Group controlId="userNameId">
            <Form.Label className="my-3">Select a user name *</Form.Label>
            <Form.Control type="text" required />
            <Form.Control.Feedback type="invalid">
              Please provide a user name.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="firstNameId">
            <Form.Label className="my-3">First name *</Form.Label>
            <Form.Control type="text" required />
            <Form.Control.Feedback type="invalid">
              Please provide first name.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="middleNameId">
            <Form.Label className="my-3">Middle name</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Form.Group controlId="lastNameId">
            <Form.Label className="my-3">Last name *</Form.Label>
            <Form.Control type="text" required />
            <Form.Control.Feedback type="invalid">
              Please provide last name.
            </Form.Control.Feedback>
          </Form.Group>

          {/* Email */}
          <Form.Group controlId="emailId">
            <Form.Label className="my-3">Email address *</Form.Label>
            <Form.Control type="email" placeholder="your@email.com" required />
            <Form.Control.Feedback type="invalid">
              Please provide email.
            </Form.Control.Feedback>
          </Form.Group>

          {/* Password */}
          <Form.Group controlId="passwordId">
            <Form.Label className="my-3">Add a password *</Form.Label>
            <Form.Control
              type="password"
              required
              placeholder="Password should be at least 8 character"
            />
            <Form.Control.Feedback type="invalid">
              Please type a password.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="passwordAgainId">
            <Form.Label className="my-3">Password again *</Form.Label>
            <Form.Control type="password" required />
            <Form.Control.Feedback type="invalid">
              Please type the password again.
            </Form.Control.Feedback>
          </Form.Group>

          <Row className="my-3 text-center">
            <Col>
              <Button variant="success" type="submit">
                <h5>Send register</h5>
              </Button>
            </Col>
          </Row>
        </Form>
      </Row>
    </div>
  );
};
