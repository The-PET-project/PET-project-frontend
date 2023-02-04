import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";
import { store } from "./store/store";
import { Header } from "./views/components/header/header";
import { Footer } from "./views/components/footer/footer";
import AppRouter from "./app_router";
import "./app.scss";

createRoot(document.getElementById("root")).render(
  <HashRouter>
    <Provider store={store}>
      <Header />
      <AppRouter />
      <Footer />
    </Provider>
  </HashRouter>
);
