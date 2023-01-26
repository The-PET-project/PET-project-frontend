import React from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import AppRouter from "./App";

createRoot(document.getElementById("root")).render(
  <RouterProvider router={AppRouter} />
);
