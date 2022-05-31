import { Grid } from "@mui/material";
import MenuItems from "./menuItems";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import FoodCategories from "./foodCategories";
import { getProducts } from "../actions/appActions";

const Menu = () => {
  const dispatch = useDispatch();

  const [selectedCategory, setSelectedCategory] = useState(1);

  useEffect(() => dispatch(getProducts()));

  return (
    <Grid container spacing={3} justifyContent="center">
      <FoodCategories setSelectedCategory={setSelectedCategory} />

      <MenuItems selectedCategory={selectedCategory} />
    </Grid>
  );
};

export default Menu;
