import * as React from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Cart from './Cart';
import Typography from "@mui/material/Typography";

import Link from "@mui/material/Link";





export default function NavBar(props) {
  
  

  const { cartItems } = props;


  return (
    <AppBar style={{ backgroundColor: "#303030" }} position="sticky">
      <Toolbar >
      <Box >
          <Typography variant="h2" className="white">
          OBSD <img src="../images/logo.png" alt="logo" />
          </Typography>
          </Box>
        <Box
          sx={{ display: "flex", justifyContent: "end", flexGrow: 1 }} >
          <Link
           href="/"
            style={{ textDecoration: "none" }}
            sx={{ pr: 2 }}
            className="white"
          >
            
            <span style={{ color:"white" }}> Menu</span>
          </Link>
          <Link
            
            style={{ textDecoration: "none" }}
            sx={{ pr: 2 }}
            onClick={() => { }}
          className="white" >
            
            <span style={{ color:"white" }}> Most Popular</span>
          </Link>
          
        </Box>
        <Cart cartItems={cartItems}/>
      </Toolbar>
      
    </AppBar>
  );
}
