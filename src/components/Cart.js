import React from "react";


import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Typography,
} from "@material-ui/core";
import {  useState } from "react";
import { useStyles } from "../styles";
import seafoodpizza from "../image/seafoodpizza.png";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import Divider from "@mui/material/Divider";
import Badge from "@mui/material/Badge";

export default function Cart(props) {
  const styles = useStyles();
const [count , setCount] = useState(0);


    return (
      <Grid container  spacing={2} sx={{ mt: 3 }}>
        
        

        <Grid >
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
                 
                >
                  <span style={{color:"black"}}>Qty</span>
                  <RemoveIcon fontSize="small" />
                  
                </Button>
                 
                <Badge color="secondary" badgeContent={count}>
                  
                </Badge>
                <Button
                  aria-label="increase"
                 
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
         <Box >
        My Order - | Tax: $ | Total: $ | Items:{" "}
        items count
      </Box>
      
      </Grid>
    </Grid>
    
  )
}













