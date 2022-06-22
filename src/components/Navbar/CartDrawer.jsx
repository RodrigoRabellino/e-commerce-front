import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faCircleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import { Drawer, Box, Typography, Button } from "@mui/material";
import { useState } from "react";
import { isCartOpen, setIsCartOpen } from "./Navbar";

const CartDrawer = ({ isCartOpen, setIsCartOpen }) => {
  return (
    <>
      <div className="container">
        <Drawer anchor="right" open={isCartOpen}>
          <Box p={2} width="400px" textAlign="center" role="presentation">
            <div className="d-flex border-bottom border-white">
              <Typography
                variant="h4"
                component="div"
                className="flex-grow-1"
                sx={{ color: "#8C5032" }}
              >
                Shopping Cart
              </Typography>
              <Button
                variant="text"
                onClick={() => setIsCartOpen(false)}
                className="flex-shrink-1 navLink"
                sx={{ color: "#8C5032" }}
              >
                X
              </Button>
            </div>
          </Box>
          <Box
            p={2}
            width="400px"
            className="row mt-5"
            sx={{ color: "#8C5032" }}
          >
            <div className="col text-center">
              <span style={{ fontSize: "3rem" }}>
                <FontAwesomeIcon icon={faCartShopping} />
              </span>
              <span style={{ fontSize: "1.5rem" }}>
                <FontAwesomeIcon icon={faCircleExclamation} />
              </span>
              <h5>It looks like your Shopping Cart is empty!</h5>
            </div>
          </Box>
        </Drawer>
      </div>
    </>
  );
};

export default CartDrawer;
