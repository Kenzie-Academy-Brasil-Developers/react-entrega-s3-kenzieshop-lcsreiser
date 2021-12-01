import { Main, CartSection, CartDescription, EmptyCart } from "./style";

import { useSelector } from "react-redux";
import { BsCartX } from "react-icons/bs";

import CardProduct from "../../components/CartProduct";

const Card = () => {
  const ListCart = useSelector((state) => state.cart);

  return (
    <Main>
      <CartSection>
        {ListCart.length > 0 ? (
          ListCart.map((item) => <CardProduct key={item.id} Item={item} />)
        ) : (
          <EmptyCart>
            <BsCartX />
            <p>Carrinho Vazio</p>
          </EmptyCart>
        )}
      </CartSection>
      <CartDescription>
        <h3>Resumo do pedido</h3>
        <div>
          <p>
            {ListCart.reduce((total, item) => {
              return total + item.qtdProduct;
            }, 0)}{" "}
            Produtos
          </p>
          <span>
            {Number(
              ListCart.reduce((total, item) => {
                return total + item.price * item.qtdProduct;
              }, 0)
            ).toFixed(2)}
          </span>
        </div>
        <button>Finalizar o pedido</button>
      </CartDescription>
    </Main>
  );
};

export default Card;
