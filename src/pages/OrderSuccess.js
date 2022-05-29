import React from "react";
import { Box, Typography } from "@mui/material";
import Check from "../image/Check.png";
import styles from "../styles/Order.module.css"
import { useParams } from "react-router-dom";

  const status = 0;

  const statusClass = (index) => {
    if (index - status < 1) return styles.done;
    if (index - status === 1) return styles.inProgress;
    if (index - status > 1) return styles.undone;
  };
const OrderSuccess = () => {
  const {orderId} = useParams();
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
      <Typography sx={{
       p: 12,
      }} variant="h4">Order Number: {orderId}</Typography>
      <Box className={styles.row}>
          <Box className={statusClass(0)}>
            <img src="../images/paid.png" width={30} height={30} alt="" />
            <span>Payment</span>
            <Box className={styles.checkedIcon}>
              <img
                className={styles.checkedIcon}
                src="../images/checked.png"
                width={20}
                height={20}
                alt=""
              />
            </Box>
          </Box>
          <Box className={statusClass(1)}>
            <img src="../images/bake.png" width={30} height={30} alt="" />
            <span>Preparing</span>
            <Box className={styles.checkedIcon}>
              <img
                className={styles.checkedIcon}
                src="../images/checked.png"
                width={20}
                height={20}
                alt=""
              />
            </Box>
          </Box>
          <Box className={statusClass(2)}>
            <img src="../images/bike.png" width={30} height={30} alt="" />
            <span>On the way</span>
            <Box className={styles.checkedIcon}>
              <img
                className={styles.checkedIcon}
                src="../images/checked.png"
                width={20}
                height={20}
                alt=""
              />
            </Box>
          </Box>
          <Box className={statusClass(3)}>
            <img src="../images/delivered.png" width={30} height={30} alt="" />
            <span>Delivered</span>
            <Box className={styles.checkedIcon}>
              <img
                className={styles.checkedIcon}
                src="../images/checked.png"
                width={20}
                height={20}
                alt=""
              />
            </Box>
          </Box>
        </Box>
    </Box>
  );
};

export default OrderSuccess;