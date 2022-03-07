import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useCart } from "../provider/CartProvider";

export default function useTotalActions() {
  let [total, setTotal] = useState(0.0);
  let [ship, setShip] = useState(0.0);
  let [cart, setCart] = useCart();
  let navigate = useNavigate();

  useEffect(() => {
    let priceItems = cart.reduce((a, b) => a + b.price, 0);
    let shipItems = cart.reduce((a, b) => a + b.quantity, 0);

    setTotal(priceItems);

    if (priceItems > 250.0) {
      setShip(0.0);
    } else {
      setShip(shipItems * 10.0);
    }
  }, [cart]);

  function handleRedirect() {
    if (cart.length > 0) {
      localStorage.clear();
      setCart([]);
      navigate("/checkout");
    } else {
      toast.warning("Compre algo primeiro!", {
        position: "top-center",
        autoClose: 2500,
        toastId: 1,
      });
    }
  }

  return { total, ship, handleRedirect };
}
