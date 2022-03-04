import { toast } from "react-toastify";

export default function MainItem({ children, cartList }) {
  let { cart, setCart } = cartList;

  function handleBuy(game) {
    let item = {
      id: game.id,
      name: game.name,
      image: game.image,
      score: game.score,
      price: parseFloat(game.price),
      quantity: 1,
    };

    let found = cart.find((i) => i.id === item.id);

    if (found) {
      found.quantity += 1;
      found.price += item.price;
    } else {
      cart.push(item);
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    setCart([...cart]);

    toast.success("Item adicionado ao carrinho!", {
      autoClose: 2000,
    });
  }
  return (
    <li className="game">
      <h2 className="game-name">{children.name}</h2>
      <h3 className="game-score">Score: {children.score}</h3>

      <img
        className="game-image"
        src={"assets/" + children.image}
        alt={"imagem do game " + children.name}
      />

      <h3 className="game-price">
        R$ {children.price.toFixed(2).replace(".", ",")}
      </h3>

      <button className="game-button" onClick={() => handleBuy(children)}>
        Comprar
      </button>
    </li>
  );
}
