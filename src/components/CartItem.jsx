import { toast } from "react-toastify";

export default function CartItem({ children, cartList }) {
  let { cart, setCart } = cartList;

  function handleIncrease(id) {
    let found = cart.find((item) => item.id === id);
    let unitPrice = found.price / found.quantity;

    found.quantity += 1;
    found.price += unitPrice;

    localStorage.setItem("cart", JSON.stringify(cart));
    setCart([...cart]);
  }

  function handleDecrease(id) {
    let found = cart.find((item) => item.id === id);
    let unitPrice = found.price / found.quantity;

    if (found.quantity > 0) {
      found.quantity -= 1;
      found.price -= unitPrice;
      setCart([...cart]);
      localStorage.setItem("cart", JSON.stringify(cart));
    }

    if (found.quantity === 0) {
      let newCart = cart.filter((item) => item.id !== id);

      localStorage.setItem("cart", JSON.stringify(newCart));

      setCart([...newCart]);

      toast.error("Item removido(a) do carrinho", {
        autoClose: 2000,
      });
    }
  }

  function handleRemove(id) {
    let newCart = cart.filter((item) => item.id !== id);

    localStorage.setItem("cart", JSON.stringify(newCart));

    setCart([...newCart]);

    toast.error("Item removido(a) do carrinho", {
      autoClose: 2000,
    });
  }

  return (
    <li className="cart-game">
      <h2 className="cart-game-name">{children.name}</h2>

      <img
        className="cart-game-image"
        src={"assets/" + children.image}
        alt={"imagem do game " + children.name}
      />

      <h3 className="cart-game-price">
        R$ {children.price.toFixed(2).replace(".", ",")}
      </h3>

      <div className="order">
        <button
          className="cart-button-increase"
          onClick={() => handleIncrease(children.id)}
        >
          Comprar
        </button>

        <h3 className="cart-game-quantity"> {children.quantity}</h3>

        <button
          className="cart-button-decrease"
          onClick={() => handleDecrease(children.id)}
        >
          Retirar
        </button>
      </div>

      <button
        className="cart-button-remove"
        onClick={() => handleRemove(children.id)}
      >
        Remover
      </button>
    </li>
  );
}
