import React from "react";

import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";

const CompleteButton = ({ item }) => {
  const dispatch = useDispatch();

    
   
  return (
    <Button
      variant="contained"
      color="error"
  
      disabled={!complete}
    >
      Complete
    </Button>
  );
};

export default CompleteButton;