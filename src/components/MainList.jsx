import MainItem from "./MainItem";

export default function MainList({ handleBuy, data }) {
  return (
    <ul className="game-list">
      {data.map((game, i) => (
        <MainItem key={i} handleBuy={handleBuy}>
          {game}
        </MainItem>
      ))}
    </ul>
  );
}
