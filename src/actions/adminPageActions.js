import * as api from "../api";

export const getOrders = () => async (dispatch) => {
  try {
    const response = await api.getOrders();

    dispatch({ type: "GET_ORDERS", payload: { orders: response.data } });
  } catch (err) {
    console.log(err);
  }
};
