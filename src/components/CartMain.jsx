import { useCart } from "../provider/CartProvider";
import CartItem from "./CartItem";
import "../styles/components/cartMain-s.css";
import TotalPrice from "./TotalPrice";

export default function CartMain({ showCart }) {
  let [cart] = useCart();

  return (
    <div className="cart-section">
      <div className="arrow-back" onClick={() => showCart()}>
        <img
          src="assets/arrow-down-icon.svg"
          alt="arrow back"
          className="icon-arrow-back"
        />
      </div>

      <ul className="cart-s">
        {cart.map((game, i) => (
          <CartItem key={i}>{game}</CartItem>
        ))}
      </ul>

      <TotalPrice />
    </div>
  );
}
