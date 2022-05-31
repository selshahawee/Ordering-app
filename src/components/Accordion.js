import * as React from "react";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FoodCategories from "./foodCategories";
import MenuItems from "./menuItems";
import { useDispatch} from "react-redux";
import { useEffect, useState } from "react";
import { getProducts } from "../actions/appActions";

export default function BasicAccordion() {
  const dispatch = useDispatch();

  const [selectedCategory, setSelectedCategory] = useState(1);

  useEffect(() => dispatch(getProducts()));

  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Food Categories</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FoodCategories setSelectedCategory={setSelectedCategory} />
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Menu</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <MenuItems selectedCategory={selectedCategory} />
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
