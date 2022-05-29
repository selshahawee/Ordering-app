import React from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Typography,
  IconButton,
} from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useFormik } from "formik";
import * as api from "../api";
import DeleteIcon from "@mui/icons-material/Delete";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import Badge from "@mui/material/Badge";
import {
  incrementQuantity,
  decrementQuantity,
  deleteFromCart,
} from "../actions/appActions";

const CheckoutPage = (props) => {
  const cartItems = useSelector((state) =>
    state.app.products?.filter((product) => product.quantity > 0)
  );

  const total = sum(cartItems);

  function sum(arr) {
    let count = 0;
    for (const product of arr) {
      count = count + product.price * product.quantity;
    }
    return count;
  }

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

  const handleCancel = () => {
    navigate("/");
  };

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: "",
      mobile: "",
      address: "",
      city: "",
      items: cartItems,
    },
    onSubmit: async (values) => {
      formik.resetForm();

      const response = await api.addOrder(values);

      const orderId = response.data[0].id;

      navigate(`/ordersuccess/${orderId}`);
    },
  });

  return (
    <Grid container spacing={1} sx={{ mt: 3 }}>
      <Grid sm={7}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignContent: "flex-start",
          }}
        >
          <TextField
            variant="standard"
            sx={{ width: "70%", m: 2, mx: 5 }}
            label="Name"
            name="name"
            onChange={formik.handleChange}
            value={formik.values.name}
          ></TextField>
          <TextField
            variant="standard"
            sx={{ width: "40%", m: 2, mx: 5 }}
            label="Mobile"
            name="mobile"
            onChange={formik.handleChange}
            value={formik.values.mobile}
          ></TextField>
          <TextField
            variant="standard"
            sx={{ width: "70%", m: 2, mx: 5 }}
            label="address"
            onChange={formik.handleChange}
            value={formik.values.address}
            name="address"
          ></TextField>
          <TextField
            variant="standard"
            sx={{ width: "40%", m: 2, mx: 5 }}
            label="City"
            onChange={formik.handleChange}
            value={formik.values.city}
            name="city"
          ></TextField>
        </Box>

        <Box
          sx={{
            p: 1.5,
            alignItems: "center",
          }}
        >
          <Button
            sx={{ mx: 1, color: "error" }}
            variant="contained"
            color="secondary"
            onClick={formik.handleSubmit}
          >
            Order Now
          </Button>
          <Button
            sx={{ mx: 1, color: "black" }}
            variant="outlined"
            color="error"
            onClick={handleCancel}
          >
            Cancel
          </Button>
        </Box>
      </Grid>

      <Divider
        style={{ background: "black" }}
        sx={{ mx: 1.5 }}
        orientation="vertical"
        variant="middle"
        flexItem
      />

      <Grid sm={4}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            {cartItems.map((product) => (
              <Card
                key={product.id}
                elevation={0}
                sx={{ display: "flex", m: 1 }}
              >
                <Box sx={{ display: { xs: "none", sm: "none", md: "block" } }}>
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
                </Box>
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
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CheckoutPage;
