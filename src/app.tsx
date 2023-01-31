import React from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
import AppRouter from "./app_router";
import { Header } from "./header/header";
import { Footer } from "./footer/footer";
import "./app.scss";

createRoot(document.getElementById("root")).render(
  <HashRouter>
    <Header />
    <AppRouter />
    <Footer />
  </HashRouter>
);
