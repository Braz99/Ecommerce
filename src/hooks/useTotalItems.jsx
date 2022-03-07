import { useEffect, useState } from "react";
import { useCart } from "../provider/CartProvider";

export default function useTotalItems() {
  let [cart] = useCart();

  let [totalItems, setTotalItems] = useState();

  useEffect(
    () => setTotalItems(cart.reduce((a, b) => a + b.quantity, 0)),
    [cart]
  );

  return totalItems;
}
