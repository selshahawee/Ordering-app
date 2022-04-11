import React from "react";
import { useDispatch, useSelector } from "react-redux";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { styled } from "@mui/material/styles";
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
  IconButton,
  Container,
  Grid,
} from "@mui/material";
import { useEffect } from "react";
import { getProducts } from "../actions/appActions";
import { incrementQuantity, decrementQuantity } from "../actions/appActions";
const MenuItems = ({ selectedCategory, }) => {
  const styles = useStyles();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.app.products);

  const handleIncrementQuantity = (id) => {
    console.log({id})
    dispatch(incrementQuantity(id));
  
  };
   
  const handleDecrementQuantity = (id) => {
    dispatch(decrementQuantity(id));
  };

  useEffect(() => {
    dispatch(getProducts());
  }, []);
  return (
    <Grid container spacing={1} style={{ textAlign:"center "}}>
      {products
        ?.filter((product) => product.category === selectedCategory)
        .map((product) => (
          <Grid item xs={11} sm={4} md={3}>
            <Card key={product.id} className={styles.card} style={{ direction: "row", display: "flex", }}>
  
            <Box >
            <CardActionArea>
              <CardMedia
                component="img"
                alt={product.name}
                image={product.image}
                class="media"
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
                <Typography variant="body2" color="textSecondary" component="p">
                  {product.calorie} Cal
                </Typography>
                <Typography variant="body2" color="textPrimary" component="p">
                  ${product.price}
                </Typography>
                <Button
                  aria-label="reduce"
                  onClick={() => {
                    handleDecrementQuantity(product.id);
                  }}
                  
                >
                  <span style={{ color: "black" }}></span>
                  <RemoveIcon fontSize="small" />
                </Button>

                <Badge color="secondary" badgeContent={product.quantity}></Badge>
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
