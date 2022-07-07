import React, { useEffect, useState } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";
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
import { fetchCategories, fetchProducts } from "../../services/apiServices";

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
  const [navbarScroll, setNavbarScroll] = useState(false);
  const [page, setPage] = useState(1);
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
      setCategories(response);
    };
    getCategories();
  }, []);

  const handleAllProducts = async () => {
    const response = await fetchProducts(page);
  };

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

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbarScroll(true);
    } else {
      setNavbarScroll(false);
    }
  };
  window.addEventListener("scroll", changeBackground);

  const pathName = window.location.pathname;

  const notTransparentNav = [
    "login",
    "register",
    "contactus",
    "userpage",
    "contact",
    "product",
    "checkout",
    "welcome",
  ];

  const renderTransparentNav = notTransparentNav.includes(
    pathName.substring(1).split("/")[0]
  );

  return (
    <>
      <ElevationScroll>
        <AppBar
          sx={
            navbarScroll
              ? {
                  backgroundColor: "#ab832a",
                  transition: "0.3s",
                  width: "100%",
                }
              : {
                  backgroundColor: renderTransparentNav
                    ? "#ab832a"
                    : "transparent",
                  boxShadow: 0,
                  transition: "0.3s",
                  width: "100%",
                }
          }
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
                      className="navStyles"
                      // sx={{ ...navStyles, "&:hover": { cursor: "pointer" } }}
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
                          <Link to={`/store/allproducts`} className="navLink">
                            <Typography
                              color="primary"
                              variant="p"
                              fontSize="14px"
                              fontWeight="500"
                              onClick={() => {
                                handleAllProducts();
                              }}
                            >
                              ALL PRODUCTS
                            </Typography>
                          </Link>
                        </Box>
                        {categories.map((category) => {
                          return (
                            <Box pb={1} key={category._id}>
                              <Link
                                to={`/store/${category.name}`}
                                className="navLink"
                              >
                                <Typography
                                  color="primary"
                                  variant="p"
                                  fontSize="14px"
                                  fontWeight="500"
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
                              </Link>
                            </Box>
                          );
                        })}
                      </Box>
                    </Popover>
                    <Typography variant="button">
                      <Link to="/contact" className="navLink">
                        Contact
                      </Link>
                    </Typography>
                    <Typography variant="button">
                      <Link to="/about" className="navLink">
                        About
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
                          <Typography variant="button">
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
