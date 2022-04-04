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
// import ClickAwayListener from '@mui/material/ClickAwayListener';

export default function NavBar(props) {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  const handleClickAway = () => {
    setOpen(false);
  };

  return (
    <AppBar style={{ backgroundColor: "#303030" }} position="sticky">
      <Toolbar>
      <Box >
        <Typography variant="h2">
          OBSD <img src="../images/logo.png" alt="logo" />
          </Typography>
          </Box>
        <Box
          sx={{ display: "flex", justifyContent: "end", flexGrow: 1 }} >
          <Link
            color="inherit"
            style={{ textDecoration: "none" }}
            sx={{ pr: 2 }}
          >
            
            Menu
          </Link>
          <Link
            color="inherit"
            style={{ textDecoration: "none" }}
            sx={{ pr: 2 }}
            onClick={() => { }}
          >
            
            Most Popular
          </Link>
          <Badge badgeContent={4} color="secondary"></Badge>
          {/* <ClickAwayListener
       mouseEvent="onMouseDown"
       touchEvent="onTouchStart"
       onClickAway={handleClickAway}>
          <button type="button" onClick={handleClick}>
          <Avatar src="../images/fast-delivery__1_.png" alt="Cart" />
            </button>
            {open ? (
          <Cart/>
        ) : null}
            </ClickAwayListener> */}
        </Box>
        
      </Toolbar>
      
    </AppBar>
  );
}
