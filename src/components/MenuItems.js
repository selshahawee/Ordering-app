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

const MenuItems = ({ selectedCategory}) => {
  const styles = useStyles();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.app.products);

  useEffect(() => {
    dispatch(getProducts());
  }, []);
  return (
    <Grid container spacing={1} style={{ justifyContent: "center" }}>
      {products?.filter(product=>product.category === selectedCategory).map((product) => ( 
        <Card key={product._id} className={styles.card} onClick={() => {}}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt={product.name}
              image={product.image}
              className={styles.media}
            />
          </CardActionArea>
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
                  dispatch({
                    type: "DECREMENT_QUANTITY",
                    payload: product.id,
                  });
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
                  dispatch({
                    type: "INCREMENT_QUANTITY",
                    payload: product.id,
                  });
                }}
              >
                <AddIcon fontSize="small" />
              </Button>
            </Box>
          </CardContent>
        </Card>
      ))}
    </Grid>
  );
};

export default MenuItems;
