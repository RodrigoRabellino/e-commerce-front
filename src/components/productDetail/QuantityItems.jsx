import React from "react";
import Counter from "react-mui-counter";
import { Box } from "@mui/material";
import "./quantityItems.css";
const QuantityItems = () => {
  return (
    <Box>
      <Counter className="counter-class" />
    </Box>
  );
};
export default QuantityItems;
