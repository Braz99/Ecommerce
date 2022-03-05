import { useNavigate } from "react-router-dom";
import "../styles/components/checkout-s.css";

export default function MainCheckout() {
  let navigate = useNavigate();

  return (
    <main className="checkout-main">
      <section className="checkout-section">
        <h1 className="checkout-title">Sua compra foi finalizada!</h1>

        <p className="checkout-message">
          Muito obrigado pelo apoio, teu pedido chegará em breve!
        </p>

        <button
          className="checkout-button"
          onClick={() => {
            navigate("/");
          }}
        >
          Página Inicial
        </button>
      </section>
    </main>
  );
}
