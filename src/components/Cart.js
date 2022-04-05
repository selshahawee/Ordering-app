import React from 'react'

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import seafoodpizza from "../image/seafoodpizza.png";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import Divider from "@mui/material/Divider";

import Button from "@mui/material/Button";
import Badge from "@mui/material/Badge";

export default function Cart() {
    const [count, setCount] = React.useState(1);
    return (
      <Grid container sm={12} spacing={2} sx={{ mt: 3 }}>
        
        

      <Grid sm={12}>
        <Card elevation={0} sx={{ display: "flex", m: 1 }}>
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <img src={seafoodpizza} alt="pizaa" />
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
            <img src={seafoodpizza} alt="pizaa" />
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
            <img src={seafoodpizza}  alt="pizaa"/>
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
    
  )
}




