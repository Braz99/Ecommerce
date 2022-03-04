import React, { useEffect, useState } from "react";

import somarTotal from "../logica_app/somar_total";
import verificar from "../logica_app/verificar_vazio";
import CartItem from "./CartItem";

export default function CartMain() {
  useEffect(() => somarTotal());

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

      <div className="total">
        <h3>
          Total sem frete: <span className="subtotal"> R$ 0,00 </span>
        </h3>
        <h2>
          Total dos produtos: <span className="total"> R$ 0,00</span>
        </h2>

        <button
          onClick={() => {
            verificar();
          }}
        >
          Finalizar compra
        </button>
      </div>
    </main>
  );
}
