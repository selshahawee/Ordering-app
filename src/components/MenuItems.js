import React from "react";
import { useDispatch, useSelector } from "react-redux";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Button,
  Badge,
  CardActionArea,
  Grid,
} from "@mui/material";

import { incrementQuantity, decrementQuantity } from "../actions/appActions";

const MenuItems = ({ selectedCategory }) => {
 
  const dispatch = useDispatch();
  const products = useSelector((state) => state.app.products);

  const filteredProducts = products?.filter(
    (product) => product.category.id === selectedCategory
  );

  const handleIncrementQuantity = (id) => {
    dispatch(incrementQuantity(id));
  };

  const handleDecrementQuantity = (id) => {
    dispatch(decrementQuantity(id));
  };

 
  return (
    <Grid
      id="menu"
      container
      spacing={3}
      style={{ textAlign: "center " }}
      justifyContent="center"
      sx={{ alignItems: "center" }}
    >
      {filteredProducts.map((product) => (
        <Grid item  md={4} xs={12} key={product.id} margin="auto">
          <Card
            sx={{
              maxWidth: "400px",
               m: "auto",
              justifyContent: "space-between",
              display: "flex",
              flexDirection: "row",
            }}
          
          >
            <Box>
              <CardActionArea>
                <CardMedia
                  component="img"
                  sx={{ width: "10rem" }}
                  alt={product.name}
                  image={product.image}
                 
                />
              </CardActionArea>
            </Box>

            <Box>
              <CardContent>
                <Typography
                  gutterBottom
                  variant="body2"
                  color="textPrimary"
                  component="p"
                >
                  {product.name}
                </Typography>
                <Box >
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {product.description}
                  </Typography>
                  <Typography variant="body2" color="textPrimary" component="p">
                    ${product.price}
                  </Typography>

                  <Button
                    aria-label="reduce"
                    disabled={product.quantity < 1 ? true : false}
                    onClick={() => {
                      handleDecrementQuantity(product.id);
                    }}
                  >
                    <span style={{ color: "black" }}></span>
                    <RemoveIcon fontSize="small" />
                  </Button>

                  <Badge
                    color="secondary"
                    badgeContent={product.quantity}
                  ></Badge>
                  <Button
                    style={{ marginLeft: 10 }}
                    aria-label="increase"
                    onClick={() => {
                      handleIncrementQuantity(product.id);
                    }}
                  >
                    <AddIcon fontSize="small" />
                  </Button>
                </Box>
              </CardContent>
            </Box>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default MenuItems;
