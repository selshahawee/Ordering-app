import React from "react";
import { useDispatch, useSelector } from "react-redux";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

import { useStyles } from "../styles";
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
import { useEffect } from "react";
import { getProducts } from "../actions/appActions";
import { incrementQuantity, decrementQuantity } from "../actions/appActions";
const MenuItems = ({ selectedCategory }) => {
  const styles = useStyles();
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

  useEffect(() => {
    dispatch(getProducts());
  }, []);
  console.log(getProducts);
  return (
    <Grid
      id="menu"
      container
      spacing={3}
      style={{ textAlign: "center " }}
      maxWidth="lg"
    >
      {filteredProducts.map((product) => (
        <Grid
          item
          xs={11}
          sm={4}
          md={4}
          key={product.id}
          justifyContent="center"
          sx={{ alignItems: "center" }}
        >
          <Card
            sx={{ width: "100%", height: "100%" }}
            className={styles.card}
            style={{ direction: "row", display: "flex" }}
          >
            <Box>
              <CardActionArea>
                <CardMedia
                  component="img"
                  sx={{ width: "10rem" }}
                  alt={product.name}
                  image={product.image}
                  className="media"
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
                <Box className={styles.cardFooter}>
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
