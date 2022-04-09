import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";

import HomePage from "./components/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Store } from "./store";
import { useContext } from "react";
import CheckoutPage from "./pages/CheckoutPage";
import AdminPage from "./pages/AdminPage";
import OrderSuccess from "./pages/OrderSuccess";
import MoustafaPage from "./pages/MoustafaPage";

function App() {
  return (
    <div className="App">
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/moustafa" element={<MoustafaPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/ordersuccess" element={<OrderSuccess />} />
          <Route path="/dashboard" element={<AdminPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
