import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";

import HomePage from "./pages/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import CheckoutPage from "./pages/CheckoutPage";
import AdminPage from "./pages/AdminPage";
import OrderSuccess from "./pages/OrderSuccess";


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
