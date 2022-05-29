import React from "react";

import { useNavigate } from "react-router-dom";
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

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DeleteIcon from "@mui/icons-material/Delete";

import { useSelector, useDispatch } from "react-redux";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import Divider from "@mui/material/Divider";
import Badge from "@mui/material/Badge";
import {
  incrementQuantity,
  decrementQuantity,
  deleteFromCart,
} from "../actions/appActions";
export default function Cart(product) {
  const cartItems = useSelector((state) =>
    state.app.products?.filter((product) => product.quantity > 0)
  );

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const total = sum(cartItems);

  function sum(arr) {
    let count = 0;
    for (const product of arr) {
      count = count + product.price * product.quantity;
    }
    return count;
  }

  const badgeCount = cartItems.reduce((accumulator, obj) => {
    return accumulator + obj.quantity;
  }, 0);

  const dispatch = useDispatch();
  const handleIncrementQuantity = (id) => {
    dispatch(incrementQuantity(id));
  };

  const handleDecrementQuantity = (id) => {
    dispatch(decrementQuantity(id));
  };

  const handleRemove = (id) => {
    dispatch(deleteFromCart(id));
  };

  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate("/checkout");
    handleClose();
  };

  return (
    <>
      <Button onClick={handleClickOpen}>
        <Badge badgeContent={badgeCount} color="secondary">
          <Avatar src="../images/fast-delivery__1_.png" alt="Cart" />
        </Badge>
      </Button>

      <Dialog
        open={open}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogContent>
          <Grid>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                {cartItems.map((product) => (
                  <Card
                    key={product.id}
                    elevation={0}
                    sx={{ display: "flex", m: 1 }}
                  >
                    <CardContent>
                      <Grid container spacing={1}>
                        <Grid item xs={6} sm={6}>
                          <img src={product.image} alt="pizza" width={"50%"} />
                        </Grid>
                        <Grid item container xs={6} sm={6}>
                          <Grid item xs={12} sm={12}>
                            <Typography component="div" variant="h5">
                              {product.name}
                            </Typography>
                          </Grid>
                          <Grid
                            item
                            container
                            xs={12}
                            sm={12}
                            alignItems="center"
                          >
                            <Typography>Qty:</Typography>
                            <IconButton
                              onClick={() =>
                                dispatch(handleDecrementQuantity(product.id))
                              }
                            >
                              <RemoveIcon />
                            </IconButton>

                            <Badge
                              color="secondary"
                              badgeContent={product.quantity}
                            ></Badge>

                            <IconButton
                              onClick={() =>
                                dispatch(handleIncrementQuantity(product.id))
                              }
                            >
                              <AddIcon />
                            </IconButton>
                            <IconButton
                              onClick={() => dispatch(handleRemove(product.id))}
                            >
                              <DeleteIcon />
                            </IconButton>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid container alignItems="center">
                        <Grid item xs={6}>
                          <Typography>
                            Total: $ {product.price * product.quantity}
                          </Typography>
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
                  <Box>| SubTotal: $ {total} |</Box>

                  <Button
                    sx={{ mb: 2, color: "error" }}
                    variant="contained"
                    color="secondary"
                    fullWidth
                    onClick={handleCheckout}
                  >
                    Check Out
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Add More Items</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
