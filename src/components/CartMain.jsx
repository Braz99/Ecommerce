import { useCart } from "../provider/CartProvider";
import CartItem from "./CartItem";

export default function CartMain() {
  let [cart] = useCart();
  return (
    <ul className="cart-s">
      {cart.map((game, i) => (
        <CartItem key={i}>{game}</CartItem>
      ))}
    </ul>
  );
}
