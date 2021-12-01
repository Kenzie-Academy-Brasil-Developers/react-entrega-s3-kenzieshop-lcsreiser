import { Div } from "./style";

import { useDispatch, useSelector } from "react-redux";

import { addCartThunk, removeCartThunk } from "../../store/modules/cart/thunk";

const Product = ({ Item }) => {
  const dispatch = useDispatch();
  const ListCart = useSelector((store) => store.cart);

  return (
    <Div>
      <figure>
        <img src={Item.image} alt={Item.name} />
      </figure>
      <div>
        <h2>{Item.name}</h2>
        <p>R$ {Item.price.toFixed(2)}</p>
        {ListCart.find((product) => product.id === Item.id) ? (
          <button
            onClick={() => {
              dispatch(removeCartThunk(Item));
            }}
            className="button-remove"
          >
            Remover do Carrinho
          </button>
        ) : (
          <button
            onClick={() => {
              dispatch(addCartThunk(Item));
            }}
            className="button-add"
          >
            Adicionar no Carrinho
          </button>
        )}
      </div>
    </Div>
  );
};

export default Product;
