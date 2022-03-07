import { toast } from "react-toastify";
import { useCart } from "../provider/CartProvider";

export default function useCartActions() {
  let [cart, setCart] = useCart();

  const saveStore = (data) =>
    localStorage.setItem("cart", JSON.stringify([...data]));

  function handleIncrease(id) {
    let found = cart.find((item) => item.id === id);

    let unitPrice = found.price / found.quantity;

    found.quantity += 1;

    found.price += unitPrice;

    setCart([...cart]);

    saveStore(cart);
  }

  function handleDecrease(id) {
    let found = cart.find((item) => item.id === id);

    let unitPrice = found.price / found.quantity;

    if (found.quantity > 0) {
      found.quantity -= 1;

      found.price -= unitPrice;

      setCart([...cart]);

      saveStore(cart);
    }

    if (found.quantity === 0) {
      let newCart = cart.filter((item) => item.id !== id);

      setCart([...newCart]);

      saveStore(newCart);

      toast.error("Item removido do carrinho", {
        autoClose: 2000,
      });
    }
  }

  function handleRemove(id) {
    let newCart = cart.filter((item) => item.id !== id);

    setCart([...newCart]);

    saveStore(newCart);

    toast.error("Item removido do carrinho", {
      autoClose: 2000,
    });
  }

  return { handleIncrease, handleDecrease, handleRemove, cart, setCart };
}
