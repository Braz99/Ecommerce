import { Link } from "react-router-dom";

function HeaderSite() {
  return (
    <header className="header-s">
      <Link className="logo" to="/">
        Loja Arretada
      </Link>

      <nav className="nav-s">
        <ul className="menu">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/cart">
              <img
                src="../../public/assets/cart-icon.svg"
                alt="Ícone do carrinho"
              />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default HeaderSite;
