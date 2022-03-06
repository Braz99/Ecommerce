import React from "react";
import ReactDOM from "react-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import App from "./App";
import { CartProvider } from "./provider/CartProvider";
import "./styles/global.css";

ReactDOM.render(
  <React.StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
    <ToastContainer />
  </React.StrictMode>,
  document.getElementById("root")
);
