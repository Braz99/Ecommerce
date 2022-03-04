import React, { useEffect, useState } from "react";
import somarTotal from "../logica_app/somar_total";
import CartItem from "./CartItem";
import TotalPrice from "./TotalPrice";

export default function CartMain() {
  let [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) ?? []
  );

  return (
    <main>
      <div className="arrow-back">
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

      <TotalPrice cart={cart} />
    </main>
  );
}
