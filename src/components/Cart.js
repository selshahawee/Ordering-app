import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Typography,
  Avatar,
  CardActionArea,
  CardMedia,
  IconButton,
} from "@material-ui/core";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";
import { useStyles } from "../styles";
import { useSelector , useDispatch} from "react-redux";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import Divider from "@mui/material/Divider";
import Badge from "@mui/material/Badge";
import { incrementQuantity,decrementQuantity,deleteFromCart } from "../actions/appActions";
export default function Cart(product) {
  const styles = useStyles();

  const cartItems = useSelector((state) =>
    state.app.products?.filter((product) => product.quantity > 0)
  );

  const total = sum(cartItems);

  function sum(arr) {
    let count = 0;
    for (const product of arr) {
      count = count + (product.price * product.quantity);
    }
    return count;
  }
  const dispatch = useDispatch();
  const handleIncrementQuantity = (id) => {
    console.log({id})
    dispatch(incrementQuantity(id));
  
  };
   
  const handleDecrementQuantity = (id) => {
    dispatch(decrementQuantity(id));
  };

  const handleRemove = (id) => {
    dispatch(deleteFromCart(id));
  }



  return (
    <Grid  md={10} >
        {cartItems.map((product) => (
          <Card elevation={0} sx={{ display: "flex", m: 1 }}>
            <Box sx={{ display: "flex", flexDirection: "row" }}>
            <Avatar src={product.image} />
              <CardContent>
                <Typography component="div" variant="h5">
                  {product.name}
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Typography>Qty: {product.quantity}</Typography>
                  <IconButton onClick={()=>dispatch(handleDecrementQuantity(product.id))}>
                    <RemoveIcon />
                  </IconButton>
                  <IconButton onClick={()=>dispatch(handleIncrementQuantity(product.id))}>
                    <AddIcon />
                  </IconButton>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Typography>Total: $ {product.price*product.quantity}</Typography>
                  <IconButton >
                    <DeleteIcon />
                  </IconButton>
                </Box>
              </CardContent>
            </Box>
          </Card>
        ))}

        <Divider variant="middle" />
        <Box
          sx={{
            display: "flex",
            justifyItems: "center",
            flexDirection: "column",
            m: 1,
          }}
        >
          <Box >
        | SubTotal: $ {total} | 
      
      </Box>
          
          <Button
            sx={{ mb: 2, color: "error" }}
            variant="contained"
            color="error"
            fullWidth >
            Check Out
          </Button>
          
        </Box>
      </Grid>
  );
}
