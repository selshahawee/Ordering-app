import React from "react";
import Header from "../components/Header";
import Menu from "../components/Menu";
import Accordion from "../components/Accordion"
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
