import React, { useState } from "react";
import CartItem from "./CartItem";
import "../styles/components/cartMain-s.css";
import TotalPrice from "./TotalPrice";

export default function CartMain({ showCart }) {
  let [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) ?? []
  );

  return (
    <div className="cart-section">
      <div className="arrow-back" onClick={() => showCart()}>
        <img
          src="assets/arrow-down-icon.svg"
          alt="arrow back"
          className="icon-arrow-back"
        />
      </div>

      <ul className="cart-s">
        {cart.map((game, i) => (
          <CartItem key={i} cartList={{ cart, setCart }}>
            {game}
          </CartItem>
        ))}
      </ul>

      <TotalPrice />
    </div>
  );
}
