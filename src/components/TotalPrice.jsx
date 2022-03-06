import useTotalActions from "../hooks/useTotalActions";
import "../styles/components/totalPrice.css";

export default function TotalPrice() {
  let { total, ship, handleRedirect } = useTotalActions();
  
  return (
    <div className="total-price">
      <h3>
        Total sem frete:{" "}
        <span className="subtotal">
          {" "}
          R$ {total.toFixed(2).replace(".", ",")}
        </span>
      </h3>
      <h2>
        Total dos produtos:{" "}
        <span className="total">
          {" "}
          R$ {(total + ship).toFixed(2).replace(".", ",")}
        </span>
      </h2>

      <button className="total-button" onClick={() => handleRedirect()}>
        Finalizar compra
      </button>
    </div>
  );
}
