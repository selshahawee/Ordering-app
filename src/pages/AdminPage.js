import React from "react";
import Grid from "@mui/material/Grid";
import { Box, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import RectangleIcon from "@mui/icons-material/Rectangle";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "@mui/material/Card";
import { getOrders } from "../actions/adminPageActions";
import CardContent from "@mui/material/CardContent";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Divider from "@mui/material/Divider";
import moment from "moment";


const AdminPage = () => {
  const orders = useSelector((state) => state.ordered);
  const dispatch = useDispatch();
  const [view, setView] = React.useState(false);
  useEffect(() => {
    dispatch(getOrders());
  });
  const filteredOrders = orders.filter((order) => order.completed === view);

  return (
    <Grid
      container
      spacing={2}
      sx={{ mb: 0, mt: 5, maxWidth: "lg", minHeight: "100vh" }}
    >
      <Grid item sm={3} sx={{ py: 6, bgcolor: "#303030" }} className="sidebar">
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Typography sx={{ color: "white" }} variant="h4">
            Dashboard
          </Typography>
          <Divider variant="middle" />
        </Box>
        <br />
        <Box sx={{ justifyContent: "center", displayDirection: "column" }}>
          <Button
            variant="outlined"
            sx={{ px: 4, color: "white", display: "flex", m: 3 }}
            startIcon={<RectangleIcon fontSize="large" sx={{ color: "red" }} />}
            onClick={() => setView(false)}
          >
            Pending Orders
          </Button>
          <Button
            variant="outlined"
            sx={{ px: 4, color: "white", display: "flex", m: 3 }}
            startIcon={<RectangleIcon fontSize="large" sx={{ color: "red" }} />}
            onClick={() => setView(true)}
          >
            Completed Orders
          </Button>
        </Box>
      </Grid>

      <Grid
        item
        container
        sm={9}
        spacing={2}
        sx={{
          mt: 5,
          display: "flex",
          flexWrap: "wrap",
          displayDirection: "row",
        }}
      >
        {filteredOrders.map((item) => {
          return (
            <Grid item sm={5} sx={{ m: 3 }} key={item.id}>
              <Card>
                <Box sx={{ bgcolor: "#303030" }}>
                  <Typography align="right" sx={{ color: "white", mx: 1 }}>
                    {moment(item.date_created).format("hh: mm: ss")}
                  </Typography>
                </Box>
                {item.lineItems.map((order) => {
                  return (
                    <CardContent
                      key={order.id}
                      sx={{ display: "inline-flex", flexDirection: "column" }}
                    >
                      <FormControlLabel
                        label={
                          <Typography style={{ color: "black" }}>
                            {order.product.name} Qty: {order.quantity}
                          </Typography>
                        }
                        control={<Checkbox color="default" />}
                        checked={order.completed}
                      />
                    </CardContent>
                  );
                })}
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
};

export default AdminPage;
