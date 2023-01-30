import React from "react";
import { useRoutes } from "react-router-dom";
import { Home } from "./home/home";
import { Registration } from "./registration/registration";
import { Contact } from "./contact/contact";

const AppRouter = () => {
  let element = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    { path: "/contact", element: <Contact /> },
    { path: "/sign-up", element: <Registration /> },
  ]);
  return element;
};

export default AppRouter;
