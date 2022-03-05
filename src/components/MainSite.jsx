import { useState, useEffect } from "react";
import FilterItems from "./FilterItems";
import MainItem from "./MainItem";
import "../styles/components/mainSite-s.css";

export default function MainSite() {
  let db = require("../api/products.json");

  let [data, setData] = useState([]);

  let cartData = JSON.parse(localStorage.getItem("cart"));

  let [cart, setCart] = useState(cartData ? cartData : []);

  useEffect(() => setData([...db]), []);

  return (
    <main className="main-s">
      <FilterItems dataBase={{ data, setData, db }} />

      <ul className="game-list">
        {data.map((game, i) => (
          <MainItem key={i} cartList={{ cart, setCart }}>
            {game}
          </MainItem>
        ))}
      </ul>
    </main>
  );
}
