import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../actions/appActions";
import { Avatar, Button } from "@material-ui/core";
import styles from "../styles/Button.module.css";


import { Box } from "@mui/material";



function FoodCategories({ setSelectedCategory }) {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.app.categories);

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  return (
    
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
       
      }}
      p={5}
      xs={{ p: 2 }}
      md={{ p: 8 }}
    >
      {categories?.map((category, index) => (
        <Button
          size="large"
          key={index}
          onClick={() => setSelectedCategory(category.id)}
         
          className={styles.btn} >
     
            <Avatar
              style={{ width: 50, height: 50  }}
              alt={category.name}
            src={category.image}
            m={2}
            ></Avatar>{" "}
          {category.name}
            
        </Button>
      ))}
      </Box>
   
  );
}

export default FoodCategories;
