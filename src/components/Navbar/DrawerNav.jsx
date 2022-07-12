import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  Box,
  Typography,
  Avatar,
  Stack,
  Collapse,
  Badge,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useNavigate } from "react-router-dom";
import "./NavBar.css";
import { useSelector } from "react-redux";
import { useTheme } from "@emotion/react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

function DrawerNav() {
  const [categoriesOpen, setCategoriesOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const cart = useSelector((state) => state.cart);
  let cartQty = 0;
  cart.forEach((item) => {
    cartQty += item.qty;
  });
  const stringAvatar = (firstName, lastName) => {
    return {
      sx: {
        backgroundColor: "#FCFAF6",
        color: theme.palette.primary.main,
        fontWeight: 500,
        border: `1px solid ${theme.palette.primary.main}`,
      },
      children: `${firstName[0].toUpperCase()}${lastName[0].toUpperCase()}`,
    };
  };
  const theme = useTheme();
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <>
      <Drawer
        anchor="right"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          height="100%"
        >
          <Stack
            backgroundColor={`${theme.palette.background.default}`}
            direction="column"
            spacing={2}
            alignItems="center"
            p="2rem"
            sx={{ width: "200px", mt: 5 }}
          >
            <img
              className="logo"
              style={{
                width: "50px",
                marginBottom: "1rem",
              }}
              srcSet={require("../../assets/images/guitarreroGreen.png")}
              alt=""
              onClick={() => setOpenDrawer(false)}
            />

            {Object.entries(user).length === 0 ? (
              <Typography
                variant="button"
                className="navStyles"
                fontWeight="700"
                onClick={() => navigate("/login")}
              >
                {" "}
                LOGIN
              </Typography>
            ) : (
              <IconButton
                size="small"
                onClick={() => {
                  navigate(`/userpage/${user._id}`, { replace: false });
                  setOpenDrawer(false);
                }}
              >
                <Avatar
                  sx={{ backgroundColor: `${theme.palette.primary.main}` }}
                />
              </IconButton>
            )}

            <Typography
              variant="button"
              className="navStyles"
              fontWeight="700"
              onClick={() => setCategoriesOpen((prev) => !prev)}
            >
              {" "}
              CATEGORIES
            </Typography>
            <Collapse in={categoriesOpen} unmountOnExit>
              <Stack>
                <Typography
                  variant="button"
                  className="navStyles"
                  onClick={() => {
                    navigate("/store/allproducts");
                    setOpenDrawer(false);
                  }}
                >
                  {" "}
                  ALL PRODUCTS
                </Typography>
                <Typography
                  variant="button"
                  className="navStyles"
                  onClick={() => {
                    navigate("/store/accesories");
                    setOpenDrawer(false);
                  }}
                >
                  {" "}
                  ACCESORIES
                </Typography>
                <Typography
                  variant="button"
                  className="navStyles"
                  onClick={() => {
                    navigate("/store/effects");
                    setOpenDrawer(false);
                  }}
                >
                  {" "}
                  EFFECTS
                </Typography>
                <Typography
                  variant="button"
                  className="navStyles"
                  onClick={() => {
                    navigate("/store/bass");
                    setOpenDrawer(false);
                  }}
                >
                  {" "}
                  BASS
                </Typography>
                <Typography
                  variant="button"
                  className="navStyles"
                  onClick={() => {
                    navigate("/store/electric");
                    setOpenDrawer(false);
                  }}
                >
                  {" "}
                  ELECTRIC
                </Typography>
                <Typography
                  variant="button"
                  className="navStyles"
                  onClick={() => {
                    navigate("/store/acoustic");
                    setOpenDrawer(false);
                  }}
                >
                  {" "}
                  ACOUSTIC
                </Typography>
                <Typography
                  variant="button"
                  className="navStyles"
                  onClick={() => {
                    navigate("/store/amplifier");
                    setOpenDrawer(false);
                  }}
                >
                  {" "}
                  AMPLIFIER
                </Typography>
              </Stack>
            </Collapse>

            <Typography
              variant="button"
              className="navStyles"
              fontWeight="700"
              onClick={() => {
                navigate("/contact");
                setOpenDrawer(false);
              }}
            >
              {" "}
              CONTACT
            </Typography>

            <Typography
              variant="button"
              className="navStyles"
              fontWeight="700"
              onClick={() => {
                navigate("/about");
                setOpenDrawer(false);
              }}
            >
              {" "}
              ABOUT
            </Typography>
          </Stack>
          {/* <Box
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
                color="primary"
              />
            </Badge>
          </Box> */}
          <Typography
            variant="h6"
            textAlign="center"
            mb={3}
            color="primary.main"
            fontSize="1.2rem"
          >
            GUITARRERO
          </Typography>
        </Box>
      </Drawer>
      <IconButton
        sx={{ color: "white", marginLeft: "auto" }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon />
      </IconButton>
    </>
  );
}

export default DrawerNav;
