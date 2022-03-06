import useCartActions from "../hooks/useCartActions";

export default function CartItem({ children }) {
  let { handleIncrease, handleDecrease, handleRemove } = useCartActions();

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
