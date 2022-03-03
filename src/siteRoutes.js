import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./pages/Cart";
import CheckOut from "./pages/Checkout";
import Home from "./pages/Home";
import React from "react";

export default function SiteRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Home />} exact />

        <Route path={"/cart"} element={<Cart />} />

        <Route path={"/checkout"} element={<CheckOut />} />
      </Routes>
    </BrowserRouter>
  );
}
