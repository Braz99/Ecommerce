import { toast } from "react-toastify";
import { useCart } from "../provider/CartProvider";

export default function useCartActions() {
  let [cart, setCart] = useCart();

  function handleIncrease(id) {
    let found = cart.find((item) => item.id === id);

    let unitPrice = found.price / found.quantity;

    found.quantity += 1;

    found.price += unitPrice;

    setCart([...cart]);

    localStorage.setItem("cart", JSON.stringify([...cart]));
  }

  function handleDecrease(id) {
    let found = cart.find((item) => item.id === id);

    let unitPrice = found.price / found.quantity;

    if (found.quantity > 0) {
      found.quantity -= 1;

      found.price -= unitPrice;

      setCart([...cart]);

      localStorage.setItem("cart", JSON.stringify([...cart]));
    }

    if (found.quantity === 0) {
      let newCart = cart.filter((item) => item.id !== id);

      setCart([...newCart]);

      localStorage.setItem("cart", JSON.stringify([...newCart]));

      toast.error("Item removido(a) do carrinho", {
        autoClose: 2000,
      });
    }
  }

  function handleRemove(id) {
    let newCart = cart.filter((item) => item.id !== id);

    setCart([...newCart]);

    localStorage.setItem("cart", JSON.stringify([...newCart]));

    toast.error("Item removido(a) do carrinho", {
      autoClose: 2000,
    });
  }

  return { handleIncrease, handleDecrease, handleRemove, cart, setCart };
}
