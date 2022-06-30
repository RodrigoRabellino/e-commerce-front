import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
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
  Avatar,
  IconButton,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import DrawerNav from "./DrawerNav";
import CartDrawer from "./CartDrawer";
import "./NavBar.css";
import { logOutUserReducer } from "../../Redux/user/slice";

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
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const [value, setValue] = useState();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const cart = useSelector((state) => state.cart);
  let cartQty = 0;
  cart.forEach((item) => {
    cartQty += item.qty;
  });

  const handleLogOut = () => dispatch(logOutUserReducer());

  const stringAvatar = (firstName, lastName) => {
    return {
      sx: {
        bgcolor: "#eaeaea",
      },
      children: `${firstName[0].toUpperCase()}${lastName[0].toUpperCase()}`,
    };
  };

  const navStyles = {
    fontSize: "0.9rem",
    fontWeight: "500",
    transition: "0.2s",
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
                      <Link to="/contactUs" className="navLink">
                        Contact Us
                      </Link>
                    </Typography>
                    <Typography variant="button" sx={{ ...navStyles }}>
                      <Link to="/aboutus" className="navLink">
                        About Us
                      </Link>
                    </Typography>
                  </Box>
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    {Object.entries(user).length === 0 ? (
                      <>
                        <Box>
                          <Typography variant="button" sx={{ ...navStyles }}>
                            <Link to="/signin" className="hover navLink">
                              Login
                            </Link>
                          </Typography>
                        </Box>
                      </>
                    ) : (
                      <>
                        <IconButton size="small" onClick={handleLogOut}>
                          <Avatar
                            {...stringAvatar(user.firstName, user.lastName)}
                          />
                        </IconButton>
                      </>
                    )}

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
