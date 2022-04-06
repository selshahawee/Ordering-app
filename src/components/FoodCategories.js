import * as React from "react";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";

import Divider from "@mui/material/Divider";
import { addToOrder,
  clearOrder,
  listCategories,
  listProducts,
  removeFromOrder,
} from "../actions";
import { useContext, useEffect, useState } from "react";
import { Store } from "../Store";
import { Alert } from "@material-ui/lab";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import { useStyles } from "../styles";
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
  Dialog,
  TextField,
  DialogTitle,
} from "@material-ui/core";
import Badge from "@mui/material/Badge";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function FoodCategories(props) {
  const styles = useStyles();
  const [count, setCount] = React.useState(0);
  const [categoryName, setCategoryName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const [product, setProduct] = useState({});

  const closeHandler = () => {
    setIsOpen(false);
  };

  const productClickHandler = (p) => {
    setProduct(p);
    setIsOpen(true);
  };

  const addToOrderHandler = () => {
    addToOrder(dispatch, { ...product, quantity });
    setIsOpen(false);
  };
  const cancelOrRemoveFromOrder = () => {
    removeFromOrder(dispatch, product);
    setIsOpen(false);
  };
  const { state, dispatch } = useContext(Store);
  const { categories, loading, error } = state.categoryList;
  const {
    products,
    loading: loadingProducts,
    error: errorProducts,
  } = state.productList;
  
  
  
  const {
    orderItems,
    itemsCount,
    totalPrice,
    taxPrice,
    
  } = state.order;

  useEffect(() => {
    if (!categories) {
      listCategories(dispatch);
    } else {
      listProducts(dispatch, categoryName);
    }
  }, [dispatch, categories, categoryName]);

  const categoryClickHandler = (name) => {
    setCategoryName(name);
    listProducts(dispatch, categoryName);
  };
 
 
  return (
    <div>
      <Dialog
        maxWidth="sm"
        fullWidth={true}
        open={isOpen}
        onClose={closeHandler}
      >
        <DialogTitle className={styles.center}>Add {product.name}</DialogTitle>
        <Box className={[styles.row, styles.center]}>
          <Button
            variant="contained"
            color="primary"
            disabled={quantity === 1}
            onClick={(e) => quantity > 1 && setQuantity(quantity - 1)}
          >
            <RemoveIcon />
          </Button>
          <TextField
            inputProps={{ className: styles.largeInput }}
            InputProps={{
              bar: true,
              inputProps: {
                className: styles.largeInput,
              },
            }}
            className={styles.largeNumber}
            type="number"
            variant="filled"
            min={1}
            value={quantity}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={(e) => setQuantity(quantity + 1)}
          >
            <AddIcon />
          </Button>
        </Box>
        <Box className={[styles.row, styles.around]}>
          <Button
            onClick={cancelOrRemoveFromOrder}
            variant="contained"
            color="primary"
            size="large"
            className={styles.largeButton}
          >
            {orderItems.find((x) => x.name === product.name)
              ? 'Remove From Order'
              : 'Cancel'}
          </Button>

          <Button
            onClick={addToOrderHandler}
            variant="contained"
            color="primary"
            size="large"
            className={styles.largeButton}
          >
            ADD To Order
          </Button>
        </Box>
      </Dialog>
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
      <Grid item md={10}>
        <Typography
          gutterBottom
          className={styles.title}
          variant="h2"
          component="h2"
          style={{ textAlign: "center" }}
        >
          {categoryName || "Main Menu"}
        </Typography>
        <Grid container spacing={1} style={{ justifyContent: "center" }}>
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
              >
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
                    <Button
                  aria-label="reduce"
                  onClick={(e) => quantity > 1 && setQuantity(quantity - 1)}
                >
                  <span style={{color:"black"}}>Qty</span>
                  <RemoveIcon fontSize="small" />
                  
                </Button>
                 
                <Badge color="secondary" badgeContent={quantity}>
                  
                </Badge>
                <Button
                      aria-label="increase"
                      onClick={(e) => setQuantity(quantity + 1)
                         }
                   >
                  <AddIcon fontSize="small" />
                </Button>
                    
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
