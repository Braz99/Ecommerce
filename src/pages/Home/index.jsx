import MainSite from "../../components/MainSite";
import HeaderSite from "../../components/HeaderSite";
import FooterSite from "../../components/FooterSite";
import CartSection from "../../components/CartSection";
import "../../styles/components/area.css";
import useShow from "../../hooks/useShow";

export default function Home() {
  let { show, showCart } = useShow();

  return (
    <>
      {show ? (
        <div className="area-cart">
          <CartSection showCart={showCart} />
        </div>
      ) : (
        false
      )}

      <div className={`${show ? "area-main" : ""}`}>
        <HeaderSite showCart={showCart} />
        <MainSite />
        <FooterSite />
      </div>
    </>
  );
}
