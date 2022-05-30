import React from "react";

import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";

const CompleteButton = () => {
  const dispatch = useDispatch();

    
   
  return (
    <Button
      variant="contained"
      color="error"
  
     
    >
      Complete
    </Button>
  );
};

export default CompleteButton;