import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../actions/appActions";
import { Avatar, Button } from "@material-ui/core";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function FoodCategories({ setSelectedCategory }) {
    const dispatch = useDispatch();
    const categories = useSelector((state) => state.app.categories);
  
    useEffect(() => {
      dispatch(getCategories());
    }, []);

  return (
    <>
      {" "}
      <Stack
        sx={{ justifyContent: "center", alignItems: "center" }}
        direction="row"
        divider={
          <Divider
            style={{ background: " solid black" }}
            orientation="vertical"
            flexItem
          />
        }
        spacing={3}
        p={5}
      >
        
        {categories?.map((category, index) => (
          
          <Button size="large" key={index} onClick={() => setSelectedCategory(category.name)}>
              
              <Item p={50}>
                
              <Avatar
                style={{ width: 50, height: 50 }}
                alt={category.name}
                src={category.image}
              >
                
              </Avatar>{" "}
              {category.name}
            </Item>{" "}
          </Button>
        ))}
      </Stack>
    </>
  );
}

export default FoodCategories;