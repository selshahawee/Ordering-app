import * as api from "../api";

export const getCategories = () => async (dispatch) => {
  try {
    const { data } = await api.getCategories();

    dispatch({
      type: "FETCH_CATEGORIES",
      payload: data,
    });
  } catch (error) {
    console.log({ error });
  }
};

export const getProducts = () => async (dispatch) => {
  try {
    const { data } = await api.getProducts();

    dispatch({
      type: "FETCH_PRODUCTS",
      payload: data,
    });
  } catch (error) {
    console.log({ error });
  }
};

export const incrementQuantity = (id) => {
  return {
    type: "INCREMENT_QUANTITY",

    payload: {
      id,
    },
  };
};

export const decrementQuantity = (id) => {
  return {
    type: "DECREMENT_QUANTITY",
    payload: {
      id,
    },
  };
};

// delete from cart
export const deleteFromCart = (id) => {
  return {
    type: "DELETE_FROM_CART",
    payload: {
      id,
    },
  };
};
