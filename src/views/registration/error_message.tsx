import React from "react";
import { Alert } from "react-bootstrap";

export const ErrorMessage = ({ message }) => {
  return (
    <div className="my-4">
      <Alert variant="danger">{message}</Alert>
    </div>
  );
};
