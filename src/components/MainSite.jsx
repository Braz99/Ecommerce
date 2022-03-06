import FilterItems from "./FilterItems";
import MainItem from "./MainItem";
import "../styles/components/mainSite-s.css";
import useMainActions from "../hooks/useMainActios";

export default function MainSite() {
  let { handleBuy, data, setData, db, handleFilter } = useMainActions();

  return (
    <main className="main-s">
      <FilterItems handleFilter={handleFilter} />

      <ul className="game-list">
        {data.map((game, i) => (
          <MainItem key={i} handleBuy={handleBuy}>
            {game}
          </MainItem>
        ))}
      </ul>
    </main>
  );
}
