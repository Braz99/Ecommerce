import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { CartProvider } from "./provider/CartProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./styles/global.css";
import "./styles/components/toast-s.css";

ReactDOM.render(
  <React.StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
    <ToastContainer
      draggable={true}
      pauseOnHover={false}
      hideProgressBar={true}
      theme={"light"}
      limit={3}
      position={"top-left"}
      className="toast-s"
    />
  </React.StrictMode>,
  document.getElementById("root")
);
