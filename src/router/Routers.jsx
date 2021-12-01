import { Header } from "./style";

import { Switch, Route, Link } from "react-router-dom";
import { BsCart2 } from "react-icons/bs";
import { IoEnterOutline } from "react-icons/io5";
import { useSelector } from "react-redux";

import Home from "../pages/Home";
import Card from "../pages/Cart";

const Routers = () => {
  const ListCart = useSelector((store) => store.cart);

  return (
    <>
      <Header>
        <div>
          <Link to="/">PokeShop</Link>
        </div>
        <div>
          <Link to="/cart" className="icons">
            <BsCart2 />
            <p>Carrinho</p>
            {ListCart.length > 0 ? (
              <span className="qtd--products">
                {ListCart.reduce((total, product) => {
                  return total + product.qtdProduct;
                }, 0)}
              </span>
            ) : (
              <></>
            )}
          </Link>
          <Link to="/" className="icons">
            <IoEnterOutline />
            <p>Entrar</p>
          </Link>
        </div>
      </Header>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/cart" component={Card} />
      </Switch>
    </>
  );
};

export default Routers;
