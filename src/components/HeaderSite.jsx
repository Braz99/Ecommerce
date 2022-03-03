import { Link } from "react-router-dom";
import "../styles/components/header-s.css";

function HeaderSite() {
  return (
    <header className="header-s">
      <Link className="logo" to="/">
        Loja Arretada
      </Link>

      <nav className="nav-s">
        <ul className="menu">
          <li>
            <Link to="/cart">
              <img
                src="./assets/cart-icon.svg"
                alt="Ícone do carrinho"
                className="icon-cart"
              />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default HeaderSite;
