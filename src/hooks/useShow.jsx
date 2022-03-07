import { useState } from "react";

export default function useShow() {
  let [show, setShow] = useState(false);

  function showCart() {
    setShow(!show);
  }

  return { showCart, show };
}
