import { combineReducers } from "redux";
import productsReducers from "./products/reducer";
import cartReducers from "./cart/reducer";

const Reducers = combineReducers({
  products: productsReducers,
  cart: cartReducers,
});

export default Reducers;
