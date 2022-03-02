import { BrowserRouter, Switch, Route } from "react-router-dom";
import Cart from "./pages/Cart";
import CheckOut from "./pages/Checkout";
import Home from "./pages/Home";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={"/"} exact>
          <Home />
        </Route>
        <Route path={"/cart"}>
          <Cart />
        </Route>
        <Route path={"/checkout"}>
          <CheckOut />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
