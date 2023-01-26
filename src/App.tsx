import React from "react";
import { createBrowserRouter } from "react-router-dom";
import "./app.scss";
import { Header } from "./header/header";
import { Home } from "./home/home";
import { Footer } from "./footer/footer";

const App = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

// const App: React.FC = () => {
//   return (
//     <>
//       <Header />
//       <Footer />
//     </>
//   );
// };

export default App;
