import * as React from "react";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import { listProducts } from "../actions";
import Divider from "@mui/material/Divider";
import { listCategories } from "../actions";
import { useContext, useEffect, useState } from "react";
import { Store } from "../Store";
import { Alert } from "@material-ui/lab";

import { useStyles } from '../styles';
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CircularProgress,
  Grid,
  Typography,
  CardMedia,
  CardActionArea,
} from "@material-ui/core";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function FoodCategories() {
  const styles = useStyles();
  const { state, dispatch } = useContext(Store);
  const { categories, loading, error } = state.categoryList;
  const [count, setCount] = React.useState(1);
  const { products, loading: loadingProducts, error: errorProducts } = state.productList;
  const [product, setProduct] = useState({});
  const [isOpen, setIsOpen] = useState(false)
  const [categoryName, setCategoryName] = useState("");
  const productClickHandler = (p) => {
    setProduct(p);
    setIsOpen(true);
  };
  useEffect(() => {
    if (!categories) {
      listCategories(dispatch);
    } else {
      listProducts(dispatch, categoryName);
    }
  }, [dispatch, categoryName]);

  const categoryClickHandler = (name) => {
    setCategoryName(name);
    listProducts(dispatch, categoryName);
  };

  return (
    <div>
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
        {loading ? (
          <CircularProgress />
        ) : error ? (
          <Alert severity="error">{error}</Alert>
        ) : (
          <>
            {categories.map((category) => (
              <Button
                size="large"
                onClick={() => categoryClickHandler(category.name)}
              >
                <Item p={50} key={category.name}>
                  <Avatar
                    style={{ width: 50, height: 50 }}
                    alt={category.name}
                    src={category.image}
                  >
                    {" "}
                  </Avatar>{" "}
                  {category.name}
                </Item>{" "}
              </Button>
            ))}
          </>
        )}
      </Stack>
      <Grid item md={10} >
            <Typography
              gutterBottom
              className={styles.title}
              variant="h2"
              component="h2"
               style={{textAlign:'center' }}>
              {categoryName || 'Main Menu'}
            </Typography>
            <Grid container spacing={1} style={{justifyContent:'center' }}>
              {loadingProducts ? (
                <CircularProgress />
              ) : errorProducts ? (
                <Alert severity="error">{errorProducts}</Alert>
              ) : (
                products.map((product) => (
                  
                    <Card
                      key={product.id}
                      className={styles.card}
                      onClick={() => productClickHandler(product)}
                      style={{ display:'flex', justifyContent:'center' ,alignItems:"center" }}>
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
                          <Typography
                            variant="body2"
                            color="textSecondary"
                            component="p"
                          >
                            {product.calorie} Cal
                          </Typography>
                          <Typography
                            variant="body2"
                            color="textPrimary"
                            component="p"
                          >
                            ${product.price}
                          </Typography>
                        </Box>
                      </CardContent>
                    </Card>
                  
                ))
              )}
            </Grid>
          </Grid>
    </div>
  );
}
