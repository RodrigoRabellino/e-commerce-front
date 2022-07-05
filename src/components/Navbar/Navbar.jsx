import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  Box,
  AppBar,
  Typography,
  Toolbar,
  useMediaQuery,
  useTheme,
  useScrollTrigger,
  Container,
  Badge,
  Avatar,
  IconButton,
  Popover,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import DrawerNav from "./DrawerNav";
import CartDrawer from "./CartDrawer";
import "./NavBar.css";
import {
  fetchCategories,
  fetchProducts,
  fetchProductsByCategory,
} from "../../services/apiServices";
import { showProducts } from "../../Redux/products/slice";

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
  const cart = useSelector((state) => state.cart);
  const products = useSelector((state) => state.products);
  const [categories, setCategories] = useState([]);
  const [categorySelect, setCategorySelect] = useState([]);
  const [anchor, setAnchor] = useState(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const openPopover = (e) => {
    setAnchor(e.currentTarget);
  };

  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  let cartQty = 0;
  cart.forEach((item) => {
    cartQty += item.qty;
  });

  useEffect(() => {
    const getCategories = async () => {
      const response = await fetchCategories();
      setCategories(response.data);
    };
    getCategories();
  }, []);

  const handleAllProducts = async () => {
    const response = await fetchProducts();
    dispatch(showProducts(response));
  };

  const handleCategorySelect = async (category) => {
    setCategorySelect(category);
    const response = await fetchProductsByCategory(category._id);
    dispatch(showProducts(response.data));
    navigate("/store");
  };

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
                <Typography>
                  {" "}
                  <img
                    style={{
                      width: "25px",
                      // position: "relative",
                      // transform: "rotate(25deg)",
                    }}
                    srcSet={require("../../assets/images/guitarreroWithe.png")}
                    alt={"cardLog0"}
                  />
                  Guitarrero Store
                </Typography>
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
                    <Typography
                      onClick={openPopover}
                      variant="button"
                      sx={{ ...navStyles, "&:hover": { cursor: "pointer" } }}
                    >
                      Categories
                    </Typography>
                    <Popover
                      open={Boolean(anchor)}
                      onClose={() => setAnchor(null)}
                      anchorEl={anchor}
                      anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "center",
                      }}
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "center",
                      }}
                    >
                      <Box px={2} pt={1} sx={{ backgroundColor: "white" }}>
                        <Box pb={1} key={1}>
                          {" "}
                          <Typography
                            variant="p"
                            fontSize="14px"
                            fontWeight="500"
                            onClick={() => {
                              handleAllProducts();
                            }}
                            sx={{
                              borderBottom: "thick double white",
                              transition: "0.2s",
                              "&:hover": {
                                cursor: "pointer",
                                borderBottom: `thick double ${theme.palette.primary.main}`,
                              },
                            }}
                          >
                            All Products
                          </Typography>
                        </Box>
                        {categories.map((category) => {
                          return (
                            <Box pb={1} key={category._id}>
                              <Typography
                                variant="p"
                                fontSize="14px"
                                fontWeight="500"
                                onClick={() => {
                                  handleCategorySelect(category);
                                }}
                                sx={{
                                  borderBottom: "thick double white",
                                  transition: "0.2s",
                                  "&:hover": {
                                    cursor: "pointer",
                                    borderBottom: `thick double ${theme.palette.primary.main}`,
                                  },
                                }}
                              >
                                {category.name.toUpperCase()}
                              </Typography>
                            </Box>
                          );
                        })}
                      </Box>
                    </Popover>
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
                            <Link to="/login" className="hover navLink">
                              Login
                            </Link>
                          </Typography>
                        </Box>
                      </>
                    ) : (
                      <>
                        <IconButton
                          size="small"
                          onClick={() =>
                            navigate("/userpage", { replace: false })
                          }
                        >
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
