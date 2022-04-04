import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import FoodCategories from './components/FoodCategories';
import MenuItems from './components/MenuItems';
import HomePage from './components/HomePage';
import { BrowserRouter, Route } from 'react-router-dom';
import { Store } from './store';
import { useContext } from 'react';
function App() {
  const { state } = useContext(Store);
  return (
    <div className="App">

      <NavBar />
      <BrowserRouter>
      <HomePage />
      <div style={{ margin: "5px" ,display: 'flex' ,justifyContent: "center", alignItems: "center"}}>
        <FoodCategories />
      </div>
      <div style= {{padding:"4" ,display: 'flex' ,justifyContent: "center", alignItems: "center"}}>
      <MenuItems/>
        </div>
        </BrowserRouter>
    </div>
    
  );
}

export default App;
