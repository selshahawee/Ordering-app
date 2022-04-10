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
            payload: data.products,
        }  
        );
        
    } catch (error) {
        console.log({ error });
    }
}

export  const filterProducts = (category) => async (dispatch) => {
    try {
    console.log("filterProducts"); 
      dispatch({
        type: "FILTER_PRODUCTS",
        payload: category,
      }
      );
    } catch (error) {
      console.log({ error });
    }
  }