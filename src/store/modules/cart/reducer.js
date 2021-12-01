import { ADD_CARRINHO, REMOVE_CARRINHO } from "./actionTypes";

const newCart = localStorage.getItem("@smartShopCart")
  ? JSON.parse(localStorage.getItem("@smartShopCart"))
  : [];

const cartReducers = (state = newCart, action) => {
  switch (action.type) {
    case ADD_CARRINHO:
      return action.products;
    case REMOVE_CARRINHO:
      return action.products;
    default:
      return state;
  }
};

export default cartReducers;
