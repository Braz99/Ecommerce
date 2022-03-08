import useTotalItems from "../hooks/useTotalItems";

export default function CartHeader(props) {
  let totalItems = useTotalItems();
  return (
    <div className="arrow-back">
      <img
        src="assets/arrow-down-icon.svg"
        alt="arrow back"
        className="icon-arrow-back"
        onClick={props.onClick}
      />

      <span className="cart-total-items">
        {totalItems > 1
          ? `${totalItems} itens`
          : totalItems === 0
          ? "Nenhum item"
          : `${totalItems} item`}
      </span>
    </div>
  );
}
