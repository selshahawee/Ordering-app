import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { getCategories ,getProducts } from "./actions/appActions";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { createStore, compose, applyMiddleware } from "redux";
import reducers from "./reducers"

const store = createStore(reducers, compose(applyMiddleware(thunk)));
store.dispatch(getCategories())
store.dispatch(getProducts())
ReactDOM.render(
  <Provider store={store}>
    
      <App />
   
  </Provider>,
  document.getElementById("root")
);
