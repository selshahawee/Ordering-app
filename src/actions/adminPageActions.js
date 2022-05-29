import * as api from "../api";


export const getOrders = () => async (dispatch) => {
  try {
   
    const response =  await api.getOrders();
     
      dispatch({ type: "GET_ORDERS", payload: { orders: response.data } });
      
  } catch (err) {
    console.log(err);
  }
};


export const checkBox = (order, id) => {
  return {
    type: "CHECKED",
    payload: { order, id },
  };
};

export const orderComplete = (id) => {
  return {
    type: "COMPLETED",
    payload: { id },
  };
};


