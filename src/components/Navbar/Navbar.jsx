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
  Collapse,
  Stack,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import DrawerNav from "./DrawerNav";
import CartDrawer from "./CartDrawer";
import "./navBar.css";
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
  const [categoriesOpen, setCategoriesOpen] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);
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
                      variant="button"
                      className="navStyles"
                      onClick={() => setCategoriesOpen((prev) => !prev)}
                    >
                      Categories
                    </Typography>
                    <Collapse
                      in={categoriesOpen}
                      unmountOnExit
                      sx={{
                        px: "2rem",
                        pt: "1rem",
                        position: "absolute",
                        top: "64px",
                        left: "31%",
                        backgroundColor: "rgba(171, 131, 42,0.8)",
                        borderRadius: "15px",
                        backdropFilter: "blur(3px)",
                      }}
                    >
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
                    <Typography variant="button">
                      <Link to="/contact" className="navLink navStyles">
                        Contact
                      </Link>
                    </Typography>
                    <Typography variant="button">
                      <Link to="/about" className="navLink navStyles">
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
