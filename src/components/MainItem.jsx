export default function MainItem({ children, handleBuy }) {
  return (
    <li className="game">
      <h3 className="game-name">{children.name}</h3>
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
