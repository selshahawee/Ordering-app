import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../actions/appActions";
import { getProducts } from "../actions/appActions";
import Categories from "../components/Categories";

function MoustafaPage() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.app.products);
  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <div>
      <h1>Th below is the categories</h1>

      {products?.map((product, index) => (
        <div key={index}>
          
          {product.name} quantity:{product.quantity} <button onClick={() => { dispatch({
            type: "INCREMENT_QUANTITY",
            payload:product.id,
        }  
              )
              }}> + </button>  
              <button onClick={() => {
                  dispatch({
                      type: "DECREMENT_QUANTITY",
                      payload: product.id
                  })
              }}> - </button>
        </div>
      ))}

      <Categories />
    </div>
  );
}

export default MoustafaPage;
