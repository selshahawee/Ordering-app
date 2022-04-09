import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import seafoodpizza from "../image/seafoodpizza.png";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Badge from "@mui/material/Badge";

const CheckoutPage = (props) => {
  const [count, setCount] = React.useState(1);
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
          ></TextField>
          <TextField
            variant="standard"
            sx={{ width: "40%", m: 2, mx: 5 }}
            label="Mobile"
          ></TextField>
          <TextField
            variant="standard"
            sx={{ width: "70%", m: 2, mx: 5 }}
            label="Address"
          ></TextField>
          <TextField
            variant="standard"
            sx={{ width: "40%", m: 2, mx: 5 }}
            label="City"
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
            color="error"
          >
            Order Now
          </Button>
          <Button
            sx={{ mx: 1, color: "black" }}
            variant="outlined"
            color="error"
          >
            Cancel
          </Button>
        </Box>
      </Grid>

      <Divider
        style={{ background: 'black' }}
        sx={{ mx: 1.5 }}
        orientation="vertical"
        variant="middle"
        flexItem
      />

      <Grid sm={4}>
        <Card elevation={0} sx={{ display: "flex", m: 1 }}>
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <img src={seafoodpizza} alt="pizza" />
            <CardContent>
              <Typography component="div" variant="h5">
                Seafood
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center" }}>
              <Button
                  aria-label="reduce"
                  onClick={() => {
                    setCount(Math.max(count - 1, 0));
                  }}
                >
                  <span style={{color:"black"}}>Qty</span>
                  <RemoveIcon fontSize="small" />
                  
                </Button>
                 
                <Badge color="secondary" badgeContent={count}>
                  
                </Badge>
                <Button
                  aria-label="increase"
                  onClick={() => {
                    setCount(count + 1);
                  }}
                >
                  <AddIcon fontSize="small" />
                </Button>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Typography>Total: 20$</Typography>
                
              </Box>
            </CardContent>
          </Box>
        </Card>

        <Card elevation={0} sx={{ display: "flex", m: 1 }}>
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <img src={seafoodpizza } alt="pizza" />
            <CardContent>
              <Typography component="div" variant="h5">
                Seafood
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center" }}>
              <Button
                  aria-label="reduce"
                  onClick={() => {
                    setCount(Math.max(count - 1, 0));
                  }}
                >
                  <span style={{color:"black"}}>Qty</span>
                  <RemoveIcon fontSize="small" />
                  
                </Button>
                 
                <Badge color="secondary" badgeContent={count}>
                  
                </Badge>
                <Button
                  aria-label="increase"
                  onClick={() => {
                    setCount(count + 1);
                  }}
                >
                  <AddIcon fontSize="small" />
                </Button>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Typography>Total: 20$</Typography>
                
              </Box>
            </CardContent>
          </Box>
        </Card>

        <Card elevation={0} sx={{ display: "flex", m: 1 }}>
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <img src={seafoodpizza} alt="pizza" />
            <CardContent>
              <Typography component="div" variant="h5">
                Seafood
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Button
                  aria-label="reduce"
                  onClick={() => {
                    setCount(Math.max(count - 1, 0));
                  }}
                >
                  <span style={{color:"black"}}>Qty</span>
                  <RemoveIcon fontSize="small" />
                  
                </Button>
                 
                <Badge color="secondary" badgeContent={count}>
                  
                </Badge>
                <Button
                  aria-label="increase"
                  onClick={() => {
                    setCount(count + 1);
                  }}
                >
                  <AddIcon fontSize="small" />
                </Button>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Typography>Total: 20$</Typography>
                
              </Box>
            </CardContent>
          </Box>
        </Card>
        <Divider variant="middle" style={{ background: 'black' }}
        sx={{ mx: 1.5 }}
        orientation="horizontal"
       
        flexItem />
        <Typography sx={{ m: 1.5 }}>Subtotal: 60$ .00</Typography>
      </Grid>
    </Grid>
  );
};

export default CheckoutPage;