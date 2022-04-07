import * as React from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Cart from './Cart';
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Avatar } from "@mui/material";
import Link from "@mui/material/Link";
import Badge from "@mui/material/Badge";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';




export default function NavBar(props) {
  
  
  const [open, setOpen] = React.useState(false);
  const { cartItems } = props;
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
          <Badge badgeContent={4} color="secondary"></Badge>
          <Button onClick={handleClickOpen}>
              <Avatar src="../images/fast-delivery__1_.png" alt="Cart" />
          </Button>
          <Dialog
        open={open}
        
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        
        <DialogContent>
              <Cart cartItems={cartItems}/>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Add More Items</Button>
        </DialogActions>
      </Dialog>
        </Box>
        
      </Toolbar>
      
    </AppBar>
  );
}
