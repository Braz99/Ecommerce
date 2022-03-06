export default function FilterItems({ handleFilter }) {
  return (
    <div className="filter">
      <select className="select-filter" onChange={(e) => handleFilter(e)}>
        <option value="filter" defaultValue>
          Filtrar
        </option>
        <option value="default">Padrão</option>
        <option value="price">Filtrar por preço</option>
        <option value="score">Filtrar por score</option>
      </select>
    </div>
  );
}
