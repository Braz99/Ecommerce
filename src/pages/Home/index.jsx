import MainSite from "../../components/MainSite";
import Footer from "../../components/Footer";
import HeaderSite from "../../components/HeaderSite";
import CartMain from "../../components/CartMain";
import TotalPrice from "../../components/TotalPrice";
import { useState } from "react";

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
          <TotalPrice />
        </div>
      ) : (
        false
      )}

      <div className="area-main">
        <HeaderSite showCart={showCart} />
        <MainSite />
        <Footer />
      </div>
    </>
  );
}
