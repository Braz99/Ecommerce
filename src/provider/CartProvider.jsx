import { useContext, createContext, useState } from "react";

const CartContext = createContext([]);

export function CartProvider({ children }) {
  let [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) ?? []
  );

  return (
    <CartContext.Provider value={[cart, setCart]}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
