import React from "react";
import { Header } from "./header/header";
import { Home } from "./home/home";
import { Footer } from "./footer/footer";
import "./app.scss";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Home />
      <Footer />
    </>
  );
};

export default App;
