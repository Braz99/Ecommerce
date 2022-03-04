import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function TotalPrice() {
  let [total, setTotal] = useState(0.0);
  let [ship, setShip] = useState(0.0);
  let navigate = useNavigate();
  let cart = JSON.parse(localStorage.getItem("cart"));

  useEffect(() => {
    let priceItems = cart.reduce((a, b) => a + b.price, 0);
    let shipItems = cart.reduce((a, b) => a + b.quantity, 0);

    setTotal(priceItems);

    if (priceItems > 250.0) {
      setShip(0.0);
    } else {
      setShip(shipItems * 10.0);
    }
  }, [cart]);

  function handleRedirect() {
    if (cart.length > 0) {
      localStorage.clear();
      navigate("/checkout");
    } else {
      toast.error("Compre algo primeiro!", {
        position: "top-center",
        autoClose: 2500,
        toastId: 1,
      });
    }
  }

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

      <button onClick={() => handleRedirect()}>Finalizar compra</button>
    </div>
  );
}
