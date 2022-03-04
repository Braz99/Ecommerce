import React, { useState } from "react";
import CartItem from "./CartItem";

export default function CartMain({ showCart }) {
  let [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) ?? []
  );

  return (
    <div>
      <div className="arrow-back" onClick={() => showCart()}>
        <img
          src="assets/arrow-down-icon.svg"
          alt="arrow back"
          className="icon-back"
        />
      </div>

      <ul className="cart">
        {cart.map((game, i) => (
          <CartItem key={i} cartList={{ cart, setCart }}>
            {game}
          </CartItem>
        ))}
      </ul>
    </div>
  );
}
