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
  Badge,
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

  const navStyles = {
    fontSize: "0.9rem",
    fontWeight: "500",
    borderBottom: `thick double ${theme.palette.primary.main}`,
    ":hover": {
      borderBottom: `thick double ${theme.palette.primary.light}`,
    },
  };

  return (
    <>
      <ElevationScroll>
        <AppBar
          position="fixed"
          sx={{
            borderBottom: `1px solid ${theme.palette.primary.light}`,
          }}
        >
          <Container>
            <Toolbar
              disableGutters
              label="cosopum"
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                paddingX: 0,
                marginX: 0,
              }}
            >
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
                    <Typography variant="button" sx={{ ...navStyles }}>
                      <Link to="/store" className="navLink">
                        All Products
                      </Link>
                    </Typography>
                    <Typography variant="button" sx={{ ...navStyles }}>
                      <Link to="/" className="navLink">
                        Contact Us
                      </Link>
                    </Typography>
                    <Typography variant="button" sx={{ ...navStyles }}>
                      <Link to="/aboutus" className="navLink">
                        About Us
                      </Link>
                    </Typography>
                  </Box>
                  <Box display="flex" justifyContent="space-between">
                    <Box>
                      <Typography variant="button" sx={{ ...navStyles }}>
                        <Link to="/signin" className="hover navLink">
                          Login
                        </Link>
                      </Typography>
                    </Box>
                    <Box
                      display="flex"
                      onClick={() => setIsCartOpen(true)}
                      sx={{ cursor: "pointer" }}
                    >
                      <Badge
                        badgeContent={cartQty}
                        color="secondary"
                        max={99}
                        overlap="circular"
                      >
                        <ShoppingCartIcon
                          sx={{ paddingTop: 0.1, marginLeft: 2 }}
                          className="hover navLink"
                          color="background"
                        />
                      </Badge>

                      {/* <Box
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        sx={{
                          position: "relative",
                          right: "13px",
                          bottom: "5px",
                          width: "15px",
                          height: "15px",
                          border: `1px solid ${theme.palette.primary.light}`,
                          borderRadius: "100%",
                          fontSize: "12px",
                          backgroundColor: "secondary.main",
                        }}
                      >
                        {cartQty}
                      </Box> */}
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
