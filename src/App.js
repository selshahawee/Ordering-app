import React from "react";
import "./App.css";
import NavBar from "./components/navBar";

import HomePage from "./pages/homePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import CheckoutPage from "./pages/checkoutPage";
import AdminPage from "./pages/adminPage";
import OrderSuccess from "./pages/orderSuccess";




function App() {
 
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
       
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/ordersuccess/:orderId" element={<OrderSuccess />} />
          <Route path="/dashboard" element={<AdminPage />} />
        </Routes>
       
      </BrowserRouter>
    </div>
  );
}

export default App;
