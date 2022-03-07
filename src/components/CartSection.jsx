import TotalPrice from "./TotalPrice";
import CartHeader from "./CartHeader";
import CartMain from "./CartMain";
import "../styles/components/cartSection-s.css";

export default function CartSection({ showCart }) {
  return (
    <div className="cart-section">
      <CartHeader onClick={() => showCart()} />
      <CartMain />
      <TotalPrice />
    </div>
  );
}
