import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import seafoodpizza from "../image/seafoodpizza.png";
import { Container } from "@mui/material";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import Badge from "@mui/material/Badge";
import Button from "@mui/material/Button";



const MenuItems = () => {
  const [count, setCount] = React.useState(1);
  return (
    <Box sx={{ mt: 3 }}>
      <Container maxWidth="lg">
        <Grid
          container
          spacing={1}
          justify="center"
          sx={{ alignItems: "center" }}
        >
          <Grid sm={4}>
            <Card sx={{ display: "flex", m: 1 }}>
              <Box sx={{ display: "flex", flexDirection: "row" }}>
                <img src={seafoodpizza} />
                <CardContent>
                  <Typography component="div" variant="h5">
                    Seafood
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    component="div"
                  >
                    Shrimp, Squid, Pineapple
                  </Typography>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Button
                      aria-label="reduce"
                      onClick={() => {
                        setCount(Math.max(count - 1, 0));
                      }}
                    >
                      <RemoveIcon fontSize="small" />
                    </Button>
                    <Badge color="secondary" badgeContent={count}>
                      {" "}
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
                </CardContent>
              </Box>
            </Card>
          </Grid>

          <Grid sm={4}>
            <Card sx={{ display: "flex", m: 1 }}>
              <Box sx={{ display: "flex", flexDirection: "row" }}>
                <img src={seafoodpizza} />
                <CardContent>
                  <Typography component="div" variant="h5">
                    Seafood
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    component="div"
                  >
                    Shrimp, Squid, Pineapple
                  </Typography>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Button
                      aria-label="reduce"
                      onClick={() => {
                        setCount(Math.max(count - 1, 0));
                      }}
                    >
                      <RemoveIcon fontSize="small" />
                    </Button>
                    <Badge color="secondary" badgeContent={count}>
                      {" "}
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
                </CardContent>
              </Box>
            </Card>
          </Grid>

          <Grid sm={4}>
            <Card sx={{ display: "flex", m: 1 }}>
              <Box sx={{ display: "flex", flexDirection: "row" }}>
                <img src={seafoodpizza} />
                <CardContent>
                  <Typography component="div" variant="h5">
                    Seafood
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    component="div"
                  >
                    Shrimp, Squid, Pineapple
                  </Typography>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Button
                      aria-label="reduce"
                      onClick={() => {
                        setCount(Math.max(count - 1, 0));
                      }}
                    >
                      <RemoveIcon fontSize="small" />
                    </Button>
                    <Badge color="secondary" badgeContent={count}>
                      {" "}
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
                </CardContent>
              </Box>
            </Card>
          </Grid>

          <Grid sm={4}>
            <Card sx={{ display: "flex", m: 1 }}>
              <Box sx={{ display: "flex", flexDirection: "row" }}>
                <img src={seafoodpizza} />
                <CardContent>
                  <Typography component="div" variant="h5">
                    Seafood
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    component="div"
                  >
                    Shrimp, Squid, Pineapple
                  </Typography>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Button
                      aria-label="reduce"
                      onClick={() => {
                        setCount(Math.max(count - 1, 0));
                      }}
                    >
                      <RemoveIcon fontSize="small" />
                    </Button>
                    <Badge color="secondary" badgeContent={count}>
                      {" "}
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
                </CardContent>
              </Box>
            </Card>
          </Grid>
          <Grid sm={4}>
            <Card sx={{ display: "flex", m: 1 }}>
              <Box sx={{ display: "flex", flexDirection: "row" }}>
                <img src={seafoodpizza} />
                <CardContent>
                  <Typography component="div" variant="h5">
                    Seafood
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    component="div"
                  >
                    Shrimp, Squid, Pineapple
                  </Typography>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Button
                      aria-label="reduce"
                      onClick={() => {
                        setCount(Math.max(count - 1, 0));
                      }}
                    >
                      <RemoveIcon fontSize="small" />
                    </Button>
                    <Badge color="secondary" badgeContent={count}>
                      {" "}
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
                </CardContent>
              </Box>
            </Card>
          </Grid>
          <Grid sm={4}>
            <Card sx={{ display: "flex", m: 1 }}>
              <Box sx={{ display: "flex", flexDirection: "row" }}>
                <img src={seafoodpizza} />
                <CardContent>
                  <Typography component="div" variant="h5">
                    Seafood
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    component="div"
                  >
                    Shrimp, Squid, Pineapple
                  </Typography>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Button
                      aria-label="reduce"
                      onClick={() => {
                        setCount(Math.max(count - 1, 0));
                      }}
                    >
                      <RemoveIcon fontSize="small" />
                    </Button>
                    <Badge color="secondary" badgeContent={count}>
                      {" "}
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
                </CardContent>
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default MenuItems;
