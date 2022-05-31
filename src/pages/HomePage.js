import React from "react";
import Header from "../components/header";
import Menu from "../components/menu";
import Accordion from "../components/accordion"
import { Box } from "@mui/material";
function HomePage() {
  return (
    <div>
      <Box sx={{ display: { xs:'none' , sm: 'none', md: 'block', lg: 'block' } }}>
      <Header />
        <Menu />
        </Box>
      <Box sx={{ display: { xs:"block" , sm: 'block', md: 'none', lg: 'none' } }}>
        <Accordion/>
      </Box>
    </div>
  );
}

export default HomePage;
