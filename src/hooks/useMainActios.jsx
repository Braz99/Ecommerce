import { toast } from "react-toastify";
import { useState, useEffect } from "react";
import { useCart } from "../provider/CartProvider";

export default function useMainActions() {
  let db = require("../api/products.json");

  let [data, setData] = useState([]);

  let [cart, setCart] = useCart();

  useEffect(() => setData([...db]), []);

  function handleBuy(game) {
    let item = {
      id: game.id,
      name: game.name,
      image: game.image,
      score: game.score,
      price: parseFloat(game.price),
      quantity: 1,
    };

    let found = cart.find((i) => i.id === item.id);

    if (found) {
      found.quantity += 1;
      found.price += item.price;
    } else {
      cart.push(item);
    }

    setCart([...cart]);

    localStorage.setItem("cart", JSON.stringify(cart));

    toast.success("Item adicionado ao carrinho!", {
      autoClose: 2000,
    });
  }

  function handleFilter(e) {
    let selectedOption = e.target.value;

    if (selectedOption === "default") {
      setData([...db]);
    }

    if (selectedOption === "price") {
      data.sort(function (a, b) {
        if (a.price < b.price) {
          return -1;
        } else {
          return true;
        }
      });

      setData([...data]);
    }

    if (selectedOption === "score") {
      data.sort(function (a, b) {
        if (a.score < b.score) {
          return -1;
        } else {
          return true;
        }
      });

      setData([...data]);
    }
  }

  return { handleFilter, handleBuy, data, setData, db };
}
