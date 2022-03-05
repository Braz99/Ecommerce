import { useState } from "react";
import MainSite from "../../components/MainSite";
import HeaderSite from "../../components/HeaderSite";
import CartMain from "../../components/CartMain";
import FooterSite from "../../components/FooterSite";
import "../../styles/components/area.css";

export default function Home() {
  let [show, setShow] = useState(false);
  function showCart() {
    setShow(!show);
  }
  return (
    <>
      {show ? (
        <div className="area-cart">
          <CartMain showCart={showCart} />
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
