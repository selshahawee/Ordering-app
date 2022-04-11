import React from "react";

import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Typography,
  Avatar,
 
  IconButton,
} from "@material-ui/core";
import DeleteIcon from "@mui/icons-material/Delete";

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

  // const handleRemove = (id) => {
  //   dispatch(deleteFromCart(id));
  // }



  return (
    <Grid >
      <Grid container spacing={1}>
        <Grid item xs={12}>
        {cartItems.map((product) => (
          
          <Card elevation={0} sx={{ display: "flex", m: 1 }}>

          
            <CardContent>
              <Grid container spacing={1}>
                <Grid item xs={6} sm={6}>
                <img src={product.image} alt="pizza"  width={"50%"}/> 
                </Grid>
                <Grid item container xs={6} sm={6}>
                  <Grid item xs={12} sm={12}>
                <Typography component="div" variant="h5">
                  {product.name}
                </Typography>
                </Grid>
                <Grid item container xs={12} sm={12} alignItems="center" >
                    <Typography>Qty:</Typography>
                  <IconButton onClick={()=>dispatch(handleDecrementQuantity(product.id))}>
                    <RemoveIcon />
                  </IconButton>
              
                  <Badge color="secondary" badgeContent={product.quantity}></Badge>

                  <IconButton onClick={()=>dispatch(handleIncrementQuantity(product.id))}>
                    <AddIcon />
                    </IconButton>
                    <IconButton   >
                    <DeleteIcon />
                  </IconButton>
                     </Grid>
                  </Grid>
                </Grid>
              <Grid container alignItems="center">
                <Grid item xs={6}>
                  <Typography>Total: $ {product.price * product.quantity}</Typography>
                </Grid>
                
                  
                
                </Grid>
              </CardContent>
           
          </Card>
        ))}
        </Grid>
        <Divider variant="middle" />
        <Grid item xs={12}>
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
          </Grid>
      </Grid>
  );
}
