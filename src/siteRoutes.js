import { BrowserRouter, Routes, Route } from "react-router-dom";
import Checkout from "./pages/Checkout";
import Home from "./pages/Home";

export default function SiteRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Home />} exact />
        <Route path={"/checkout"} element={<Checkout />} />
      </Routes>
    </BrowserRouter>
  );
}
