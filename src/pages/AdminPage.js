import React from "react";
import Grid from "@mui/material/Grid";
import { Box, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import RectangleIcon from "@mui/icons-material/Rectangle";
import { red } from "@mui/material/colors";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from '@mui/material/FormControlLabel';





const AdminPage = () => {
  return (
    <Grid container spacing={2} sx={{ my: 5 }}>
      
      <Grid sm={2} sx={{ minHeight:"100%" ,pt: 6, bgcolor: "#303030"}}>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Typography sx={{ color: "white" }} variant="h4">
            Dashboard
          </Typography>
        </Box>
        <Box sx={{ justifyContent: "center", displayDirection: "column" }}>
          <Button
            sx={{ px: 4, color: "white", display: "flex", m: 3 }}
            startIcon={<RectangleIcon fontsize="large" sx={{ color: "red" }} />}
          >
            Pending Orders
          </Button>
          <Button
            sx={{ px: 4, color: "white", display: "flex", m: 3 }}
            startIcon={<RectangleIcon fontsize="large" sx={{ color: 'red' }} />}
          >
            Completed Orders
          </Button>
        </Box>
      </Grid>

      <Grid
        sm={9}
        spacing={2}
        sx={{
          mt: 2,
          display: "flex",
          flexWrap: "wrap",
          displayDirection: "row",
        }}
      >

        <Grid sm={5} sx={{ m: 3 }}>
          <Card>
            <Box sx={{ bgcolor: "#303030" }}>
              <Typography align="right" sx={{ color: "white", mx:1 }}>05:00</Typography>
            </Box>
            <CardContent sx={{ display: "inline-flex", flexDirection: "column" }}>
              <FormControlLabel label="Seafood Qty: 1" control={<Checkbox color="default" />}/>
              <FormControlLabel label="Seafood Qty: 1" control={<Checkbox color="default" />}/>
              <FormControlLabel label="Seafood Qty: 1" control={<Checkbox color="default" />}/>
            </CardContent>
          </Card>
        </Grid>

        <Grid sm={5} sx={{ m: 3 }}>
          <Card>
            <Box sx={{ bgcolor: "#303030" }}>
              <Typography align="right" sx={{ color: "white", mx:1 }}>05:00</Typography>
            </Box>
            <CardContent sx={{ display: "inline-flex", flexDirection: "column" }}>
              <FormControlLabel label="Seafood Qty: 1" control={<Checkbox color="default" />}/>
              <FormControlLabel label="Seafood Qty: 1" control={<Checkbox color="default" />}/>
              <FormControlLabel label="Seafood Qty: 1" control={<Checkbox color="default" />}/>
            </CardContent>
          </Card>
        </Grid>

        <Grid sm={5} sx={{ m: 3 }}>
          <Card>
            <Box sx={{ bgcolor: "#303030" }}>
              <Typography align="right" sx={{ color: "white", mx:1 }}>05:00</Typography>
            </Box>
            <CardContent sx={{ display: "inline-flex", flexDirection: "column" }}>
              <FormControlLabel label="Seafood Qty: 1" control={<Checkbox color="default" />}/>
              <FormControlLabel label="Seafood Qty: 1" control={<Checkbox color="default" />}/>
              <FormControlLabel label="Seafood Qty: 1" control={<Checkbox color="default" />}/>
            </CardContent>
          </Card>
        </Grid>

        <Grid sm={5} sx={{ m: 3 }}>
          <Card>
            <Box sx={{ bgcolor: "#303030" }}>
              <Typography align="right" sx={{ color: "white", mx:1 }}>05:00</Typography>
            </Box>
            <CardContent sx={{ display: "inline-flex", flexDirection: "column" }}>
              <FormControlLabel label="Seafood Qty: 1" control={<Checkbox color="default" />}/>
              <FormControlLabel label="Seafood Qty: 1" control={<Checkbox color="default" />}/>
              <FormControlLabel label="Seafood Qty: 1" control={<Checkbox color="default" />}/>
            </CardContent>
          </Card>
        </Grid>


      </Grid>
    </Grid>
  );
};

export default AdminPage;
