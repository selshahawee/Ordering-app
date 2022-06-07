import React from "react";
import {  useSelector } from "react-redux";

import { Avatar, Button } from "@material-ui/core";
import styles from "../styles/Button.module.css";


import { Box } from "@mui/material";



function FoodCategories({ setSelectedCategory }) {

  const categories = useSelector((state) => state.app.categories);

 
  const handelChangeCat= (id)=>{

    setSelectedCategory(id)
  }
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
          onClick={() => handelChangeCat(category.id)}
         
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
