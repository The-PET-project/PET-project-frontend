import React from "react";
import "./app.scss";
import { Header } from "./header/header";
import { Home } from "./home/home";
import { Footer } from "./footer/footer";

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
