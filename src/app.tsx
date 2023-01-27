import React from "react";
import { Header } from "./header/header";
import { Home } from "./home/home";
import { Footer } from "./footer/footer";
import { User } from "./model/user";
import "./app.scss";
import { Address } from "./model/address";

const App: React.FC = () => {
  const user = new User("Iza", "Izamail", "Izapassword", "Iza", "Bella");

  console.log("------", new Date());

  return (
    <>
      <Header />
      <Home />
      <Footer />
    </>
  );
};

export default App;
