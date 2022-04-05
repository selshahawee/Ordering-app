import React from "react";
import { Box, Typography } from "@mui/material";
import Check from "../image/Check.png";

const OrderSuccess = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        mt: 12,
      }}
    >
      <img src={Check} alt="checked"/>
      <Typography variant="h3">Order Placed</Typography>
      <Typography variant="subtitle2">Order Number: 94</Typography>
    </Box>
  );
};

export default OrderSuccess;