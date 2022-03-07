import FilterItems from "./FilterItems";
import MainList from "./MainList";
import useMainActions from "../hooks/useMainActions";
import "../styles/components/mainSite-s.css";

export default function MainSite() {
  let { handleBuy, handleFilter, data } = useMainActions();
  return (
    <main className="main-s">
      <FilterItems handleFilter={handleFilter} />
      <MainList data={data} handleBuy={handleBuy} />
    </main>
  );
}
