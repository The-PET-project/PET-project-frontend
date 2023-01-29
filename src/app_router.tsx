import React from "react";
import { useRoutes } from "react-router-dom";
import { Home } from "./home/home";
import { Contact } from "./contact/contact";

const AppRouter = () => {
  let element = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    { path: "contact", element: <Contact /> },
  ]);
  return element;
};

export default AppRouter;
