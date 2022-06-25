import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  Box,
  AppBar,
  Typography,
  Toolbar,
  Grid,
  useMediaQuery,
  useTheme,
  useScrollTrigger,
  Container,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import DrawerNav from "./DrawerNav";
import CartDrawer from "./CartDrawer";
import "./NavBar.css";

function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });
  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

function Navbar() {
  const [value, setValue] = useState();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const cart = useSelector((state) => state.cart);
  let cartQty = 0;
  cart.forEach((item) => {
    cartQty += item.qty;
  });

  return (
    <>
      <ElevationScroll>
        <AppBar position="fixed">
          <Container>
            <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
              <Link to="/" className="navLink">
                <Typography>LOGUITO</Typography>
              </Link>
              {isMatch ? (
                <>
                  <DrawerNav />
                </>
              ) : (
                <>
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    width="35%"
                  >
                    <Typography variant="button">
                      <Link to="/store" className="navLink">
                        All Products
                      </Link>
                    </Typography>
                    <Typography variant="button">
                      <Link to="/" className="navLink">
                        Contact Us
                      </Link>
                    </Typography>
                    <Typography variant="button">
                      <Link to="/aboutus" className="navLink">
                        About Us
                      </Link>
                    </Typography>
                  </Box>
                  <Box display="flex" justifyContent="space-between">
                    <Box>
                      <Typography variant="button">
                        <Link to="/signin" className="hover navLink">
                          Login
                        </Link>
                      </Typography>
                    </Box>
                    <Box display="flex">
                      <ShoppingCartIcon
                        sx={{ paddingTop: 0.1, marginLeft: 2 }}
                        className="hover navLink"
                        onClick={() => setIsCartOpen(true)}
                        color="background"
                      />
                      <Box
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        sx={{
                          position: "relative",
                          right: "18px",
                          bottom: "5px",
                          backgroundColor: "#8C5032",
                          width: "15px",
                          height: "15px",
                          borderRadius: "100%",
                        }}
                      >
                        {cartQty}
                      </Box>
                    </Box>
                  </Box>
                </>
              )}
            </Toolbar>
          </Container>
        </AppBar>
      </ElevationScroll>
      <CartDrawer isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />
    </>
  );
}

export default Navbar;
