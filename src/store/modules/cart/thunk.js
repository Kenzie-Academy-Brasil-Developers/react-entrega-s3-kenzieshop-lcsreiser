import { addCart, removeCart } from "./actions";

export const addCartThunk = (product) => {
  return (dispatch, getState) => {
    const { cart } = getState();
    const newItem = { ...product, qtdProduct: 1 };
    const newCart = [...cart, newItem];

    localStorage.setItem("@smartShopCart", JSON.stringify(newCart));
    dispatch(addCart(newCart));
  };
};

export const removeCartThunk = (product) => {
  return (dispatch, getState) => {
    const { cart } = getState();
    const newList = [...cart.filter((item) => item.id !== product.id)];

    localStorage.setItem("@smartShopCart", JSON.stringify(newList));
    dispatch(removeCart(newList));
  };
};

export const addQtdThunk = (product) => {
  return (dispatch, getState) => {
    const { cart } = getState();
    const newList = [
      ...cart.map((item) => {
        if (item.id === product.id) {
          return { ...item, qtdProduct: item.qtdProduct + 1 };
        }
        return { ...item };
      }),
    ];

    localStorage.setItem("@smartShopCart", JSON.stringify(newList));
    dispatch(addCart(newList));
  };
};

export const removeQtdThunk = (product) => {
  return (dispatch, getState) => {
    const { cart } = getState();
    const newList = [
      ...cart.map((item) => {
        if (item.id === product.id) {
          return { ...item, qtdProduct: item.qtdProduct - 1 };
        }
        return { ...item };
      }),
    ];

    localStorage.setItem("@smartShopCart", JSON.stringify(newList));
    dispatch(addCart(newList));
  };
};
