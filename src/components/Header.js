import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-scroll";
import Box from "@mui/material/Box";
import RectangleIcon from "@mui/icons-material/Rectangle";
import Button from "@mui/material/Button";

export default function Header(props) {
  return (
    <Box>
      <Box style={{ backgroundColor: "#303030" }}>
        <Box style={{ display: "flex", justifyContent: "center" }}>
          <Typography
            style={{ float: "left" }}
            variant="h2"
            color="common.white"
          >
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
                  <RectangleIcon fontSize="large" style={{ color: "red" }} />
                }
              >
                Buy 1 Get 2
              </Button>
              <Link
                activeClass="active"
                to="menu"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <Button
                  sx={{ px: 2, color: "white" }}
                  startIcon={
                    <RectangleIcon fontSize="large" style={{ color: "red" }} />
                  }
                >
                  Order Online Now
                </Button>
              </Link>
            </Box>
          </Typography>
          <img
            style={{ width: "30%", marginBottom: "10px", padding: 10 }}
            src="../images/pizza1.png"
            alt="Pizza"
          />
        </Box>
      </Box>
    </Box>
  );
}
