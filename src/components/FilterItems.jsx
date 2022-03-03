export default function FilterItems({ dataBase }) {
  let { data, setData, db } = dataBase;
  function handleFilter(e) {
    let selectedOption = e.target.value;

    if (selectedOption === "default") {
      setData([...db]);
    }

    if (selectedOption === "price") {
      data.sort(function (a, b) {
        if (a.price < b.price) {
          return -1;
        } else {
          return true;
        }
      });

      setData([...data]);
    }

    if (selectedOption === "score") {
      data.sort(function (a, b) {
        if (a.score < b.score) {
          return -1;
        } else {
          return true;
        }
      });

      setData([...data]);
    }
  }

  return (
    <select className="filter" onChange={(e) => handleFilter(e)}>
      <option value="filter" defaultValue>
        Filtrar
      </option>
      <option value="default">Padrão</option>
      <option value="price">Filtrar por preço</option>
      <option value="score">Filtrar por score</option>
    </select>
  );
}
