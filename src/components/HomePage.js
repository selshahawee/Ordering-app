import { Typography } from "@mui/material";
import React from "react";

import Box from "@mui/material/Box";
import RectangleIcon from "@mui/icons-material/Rectangle";
import Button from "@mui/material/Button";
import FoodCategories from "./FoodCategories";


export default function HomePage(props) {
  
  return ( 
    <div>
    <div style={{ backgroundColor: "#303030" }}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Typography style={{ float: "left" }} variant="h2" color="common.white">
          {" "}
          Pizza At <br />
          <span style={{ color: "#ff9200" }}>A Click</span>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button
              sx={{ px: 2, color: "white" }}
              startIcon={
                <RectangleIcon fontsize="large" style={{ color: "red" }} />
              }
            >
              Buy 1 Get 2
            </Button>
            <Button
              sx={{ px: 2, color: "white" }}
              startIcon={
                <RectangleIcon fontsize="large" style={{ color: "red" }} />
              }
            >
              Order Online Now
            </Button>
          </Box>
        </Typography>
        <img
          style={{ width: "30%", marginBottom: "10px", padding: 10 }}
          src="../images/pizza1.png"
          alt="Pizza"
        />
      </div>
    </div>
     <div> 
        <FoodCategories/>
      </div>
      </div>
  );
}
