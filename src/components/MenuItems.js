import * as React from "react";

import Box from "@mui/material/Box";

import CardMedia from "@mui/material/CardMedia";

import Typography from "@mui/material/Typography";


import { styled } from "@mui/material/styles";

import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function FormRow() {
  return (
    <React.Fragment>
      <Grid item xs={4}>
        <Item>
          <CardMedia
            component="img"
            sx={{ width: 100 }}
            image="../images/seafoodpizza.png"
            alt="Pizza"
          />{" "}
          <Typography component="div" variant="h5">
           Seafood Pizza
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            Shrimps,octupos and pineapple
          </Typography>
        </Item>
      </Grid>
      <Grid item xs={4}>
        <Item>
          <CardMedia
            component="img"
            sx={{ width: 100 }}
            image="../images/seafoodpizza.png"
            alt="Pizza"
          />
          <Typography component="div" variant="h5">
           Seafood Pizza
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            Shrimps,Squid and pineapple
          </Typography>
        </Item>
      </Grid>
      <Grid item xs={4}>
        <Item>
          <CardMedia
            component="img"
            sx={{ width: 100 }}
            image="../images/seafoodpizza.png"
            alt="Pizza"
          />
          <Typography component="div" variant="h5">
           Seafood Pizza
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            Shrimps,Squid and pineapple
          </Typography>
        </Item>
      </Grid>
    </React.Fragment>
  );
}

export default function MenuItems() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
        <Grid container item spacing={3}>
          <FormRow />
        </Grid>
        <Grid container item spacing={3}>
          <FormRow />
        </Grid>
        <Grid container item spacing={3}>
          <FormRow />
        </Grid>
      </Grid>
    </Box>
  );
}

// export default function MenuItems() {
//   const theme = useTheme();

//   return (
//     <Card sx={{ display: 'flex' }}>
//       <Box sx={{ display: 'flex', flexDirection: 'column' }}>

//       <CardMedia
//         component="img"
//         sx={{ width:00 }}
//         image="../images/seafoodpizza.png"
//         alt="Pizza"
//       />
//         <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>

//         </Box>
//           </Box>
//           <CardContent sx={{ flex: '1 0 auto' }}>
//           <Typography component="div" variant="h5">
//            Seafood Pizza
//           </Typography>
//           <Typography variant="subtitle1" color="text.secondary" component="div">
//             Shrimps,Squid and pineappleand pineapple 
//           </Typography>
//         </CardContent>

//     </Card>
//   );
// }
