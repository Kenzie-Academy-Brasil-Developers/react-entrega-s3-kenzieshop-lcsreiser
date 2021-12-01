import { ADD_CARRINHO, REMOVE_CARRINHO } from "./actionTypes";

export const addCart = (products) => {
  return {
    type: ADD_CARRINHO,
    products,
  };
};

export const removeCart = (products) => {
  return {
    type: REMOVE_CARRINHO,
    products,
  };
};
