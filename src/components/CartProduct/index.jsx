import { Div } from "./style";
import { ImBin } from "react-icons/im";
import { useDispatch } from "react-redux";

import {
  removeCartThunk,
  addQtdThunk,
  removeQtdThunk,
} from "../../store/modules/cart/thunk";

const CardProduct = ({ Item }) => {
  const dispatch = useDispatch();

  return (
    <Div>
      <figure>
        <img src={Item.image} alt={Item.name} />
      </figure>
      <div>
        <h2>{Item.name}</h2>
        <p>R$ {Item.price.toFixed(2)}</p>
      </div>
      <div className="qtd--product">
        {Item.qtdProduct === 1 ? (
          <button
            onClick={() => {
              dispatch(removeCartThunk(Item));
            }}
            className="remove"
          >
            <ImBin />
          </button>
        ) : (
          <button
            onClick={() => {
              dispatch(removeQtdThunk(Item));
            }}
            className="remove"
          >
            -
          </button>
        )}
        <p>{Item.qtdProduct}</p>
        <button
          onClick={() => {
            dispatch(addQtdThunk(Item));
          }}
          className="add"
        >
          +
        </button>
      </div>
    </Div>
  );
};

export default CardProduct;
