import { useCart } from "../provider/CartProvider";
import CartItem from "./CartItem";
import "../styles/components/cartMain-s.css";
import TotalPrice from "./TotalPrice";
import useTotalItems from "../hooks/useTotalItems";

export default function CartMain({ showCart }) {
  let [cart] = useCart();
  let totalItems = useTotalItems();

  return (
    <div className="cart-section">
      <div className="arrow-back">
        <img
          src="assets/arrow-down-icon.svg"
          alt="arrow back"
          className="icon-arrow-back"
          onClick={() => showCart()}
        />

        <span className="cart-total-items">
          {totalItems > 1
            ? `${totalItems} itens`
            : totalItems === 0
            ? "Nenhum item"
            : `${totalItems} item`}
        </span>
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
