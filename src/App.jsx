import { Route } from "react-router-dom";
import { Nav } from "./Components/Nav.js";
import { Routes } from "react-router-dom";
import { Home } from "./pages/Home.js";
import { Cart } from "./pages/Cart.js";
import { useEffect } from "react";
import React from "react";

const App = () => {
  
  return (
    <div className="mb-4">
      <Nav></Nav>

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/cart" element={<Cart></Cart>}></Route>
      </Routes>

    </div>
  );
};

export default App;
