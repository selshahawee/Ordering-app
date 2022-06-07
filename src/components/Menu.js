import { Grid } from "@mui/material";
import MenuItems from "./menuItems";

import {  useState } from "react";
import FoodCategories from "./foodCategories";


const Menu = () => {
 

  const [selectedCategory, setSelectedCategory] = useState(1);

 

  return (
    <Grid container spacing={3} justifyContent="center">
      <FoodCategories setSelectedCategory={setSelectedCategory} />

      <MenuItems selectedCategory={selectedCategory} />
    </Grid>
  );
};

export default Menu;
