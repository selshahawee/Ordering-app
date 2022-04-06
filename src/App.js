import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import FoodCategories from "./components/FoodCategories";
import MenuItems from "./components/MenuItems";
import HomePage from "./components/HomePage";
import { BrowserRouter, Route ,Routes } from "react-router-dom";
import { Store } from "./Store";
import { useContext } from "react";
import CheckoutPage from "./pages/CheckoutPage";
import AdminPage from "./pages/AdminPage";
import OrderSuccess from "./pages/OrderSuccess";
import {useState} from "react"




function App() {

  const { state } = useContext(Store);
  
  return (
    <div className="App">
      <NavBar />
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/checkout" element={<CheckoutPage/>}/>
        <Route path="/ordersuccess" element={<OrderSuccess/>}/>
        <Route path="/dashboard" element={<AdminPage/>}/>
      </Routes>
          
      </BrowserRouter>
    </div>
    
  );
}

export default App;
