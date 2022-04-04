import { Typography } from "@mui/material";
import React from "react";
import Fab from "@mui/material/Fab";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import Box from "@mui/material/Box";

export default function HomePage() {
  return (
    <div style={{ backgroundColor: "#303030" }}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Typography style={{ float: "left" }} variant="h2" color="common.white">
          {" "}
          Pizza At <br />
          <span style={{color:"#ff9200"}}>A Click</span>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Fab
              style={{
                display: "block",
                margin: "4px",
                backgroundColor: "red",
              }}
              variant="extended"
              size="medium"
              color="primary"
              aria-label="add"
            >
              Buy 1 Get 1 Free
            </Fab>

            <Fab
              style={{
                backgroundColor: "red",
                display: "block",
                padding: "",
              }}
              variant="extended"
              size="medium"
              color="primary"
              aria-label="add"
            >
              Order Online Now
              <ArrowDownwardIcon sx={{ mr: 1 }} />
            </Fab>
          </Box>
        </Typography>
        <img
          style={{ width: "30%", marginBottom: "10px", padding: 10 }}
          src="../images/pizza1.png"
          alt="Pizza"
        />
      </div>
    </div>
  );
}
