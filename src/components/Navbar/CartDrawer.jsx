import CloseIcon from "@mui/icons-material/Close";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import RemoveCircleOutlineOutlinedIcon from "@mui/icons-material/RemoveCircleOutlineOutlined";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  Drawer,
  Box,
  Typography,
  Button,
  Grid,
  useTheme,
  useMediaQuery,
} from "@mui/material";

import { useSelector, useDispatch } from "react-redux";
import {
  addItemToCart,
  deleteItemCart,
  addOneQty,
  removeOneQty,
} from "../../Redux/cart/slice";
import { createOrderReducer } from "../../Redux/order/slice";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const CartDrawer = ({ isCartOpen, setIsCartOpen }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const matches = useMediaQuery("(min-width: 415px)");
  const user = useSelector((state) => state.user);
  const [canCheckout, setCanCheckout] = useState(true);
  const addOneToCart = (item) => {
    dispatch(addOneQty(item));
  };

  const removeOneFromCart = (item) => {
    dispatch(removeOneQty(item));
  };

  const deleteFromCart = (item) => {
    dispatch(deleteItemCart(item));
  };
  const cart = useSelector((state) => state.cart);

  let cartTotal = 0;
  cart.forEach((item) => {
    cartTotal += item.qty * item.price;
  });

  const theme = useTheme();

  const handleCheckOut = () => {
    dispatch(createOrderReducer({ cart }));
    setIsCartOpen(false);
    navigate(
      Object.entries(user).length === 0
        ? "/login?routePath=checkout"
        : "/checkout",
      { replace: false }
    );
  };

  useEffect(() => {
    const canCheckout = () => {
      return cart.every((item) => item.qty <= item.stock);
    };
    canCheckout();
    canCheckout() ? setCanCheckout(true) : setCanCheckout(false);
  }, [cart]);

  return (
    <>
      <Drawer
        sx={{ paper: { background: "white" } }}
        anchor="right"
        open={isCartOpen}
        onClose={() => setIsCartOpen(false)}
      >
        <Box
          container
          p={2}
          display="flex"
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flext-start"
          sx={{
            width: matches ? "400px" : "100%",
            height: "100%",
            background: "white",
            overflow: "scroll",
          }}
        >
          <Grid
            item
            px={1}
            sx={{
              width: "100%",
              height: "auto",
              borderBottom: `1px solid ${theme.palette.primary.main}`,
            }}
          >
            <Box style={{ display: "flex", justifyContent: "space-between" }}>
              <Typography variant="h4" color="primary">
                Shopping Cart
              </Typography>

              <CloseIcon
                sx={{
                  color: theme.palette.primary.main,
                  "&:hover": {
                    color: theme.palette.primary.dark,
                    cursor: "pointer",
                  },
                }}
                onClick={() => setIsCartOpen(false)}
              />
            </Box>
          </Grid>
          {cart.length === 0 ? (
            <Box container xs={12} sx={{ height: "70vh" }}>
              <Box
                position="relative"
                textAlign="center"
                top="15rem"
                p={2}
                width="100%"
                sx={{ color: theme.palette.primary.main }}
              >
                <Typography variant="h5" textAlign="center">
                  It looks like your Shopping Cart is empty!
                </Typography>
                <RemoveShoppingCartIcon
                  fontSize="large"
                  sx={{ marginTop: "1rem", color: theme.palette.primary.main }}
                />
              </Box>
            </Box>
          ) : (
            <Grid container mt={1} sx={{ width: "100%" }}>
              {cart.map((item) => {
                return (
                  <Grid
                    key={item._id}
                    container
                    justifyContent="space-between"
                    py={1}
                    spacing={1}
                  >
                    <Grid
                      item
                      xs={3}
                      maxHeight="5rem"
                      sx={{
                        transition: "0.2s",
                        ":hover": {
                          cursor: "pointer",
                          transform: "translate(0,-4px)",
                        },
                      }}
                      onClick={() => {
                        navigate(`/product/${item.slug}`);
                        setIsCartOpen(false);
                      }}
                    >
                      <img
                        src={
                          process.env.REACT_APP_IMAGE_HOSTING_URL +
                          item.imgUrl[0]
                        }
                        alt=""
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "contain",
                        }}
                      />
                    </Grid>

                    <Grid
                      item
                      xs={7}
                      display="flex"
                      flexDirection="column"
                      justifyContent="space-between"
                      sx={{
                        ":hover": {
                          cursor: "pointer",
                        },
                      }}
                      onClick={() => {
                        navigate(`/product/${item.slug}`);
                        setIsCartOpen(false);
                      }}
                    >
                      <Typography
                        variant="p"
                        color="text"
                        fontWeight="500"
                        sx={{
                          transition: "0.2s",
                          ":hover": {
                            transform: "translate(0, -4px)",
                            color: "primary.dark",
                            transition: "0.2s",
                          },
                        }}
                      >
                        {item.name}
                      </Typography>
                    </Grid>
                    <Grid item xs={2} display="flex" justifyContent="flex-end">
                      <DeleteIcon
                        sx={{
                          color: `${theme.palette.primary.main}`,
                          transition: "0.2s",
                          "&:hover": {
                            transition: "0.2s",
                            cursor: "pointer",
                            color: theme.palette.primary.dark,
                          },
                        }}
                        onClick={() => deleteFromCart(item)}
                      />
                    </Grid>

                    <Grid
                      container
                      sx={{
                        mt: "5px",
                        p: "5px",
                        borderRadius: "5px",
                        border: `1px solid ${theme.palette.primary.main}`,
                      }}
                    >
                      <Grid item xs={6} display="flex" alignItems="center">
                        <Typography variant="span" color="primary.main">
                          <RemoveCircleOutlineOutlinedIcon
                            sx={{
                              transition: "0.2s",
                              mr: 1,
                              "&:hover": {
                                transition: "0.2s",
                                cursor: "pointer",
                                color: theme.palette.primary.dark,
                              },
                            }}
                            fontSize="small"
                            onClick={() => removeOneFromCart(item)}
                          />
                        </Typography>
                        <Typography
                          variant="span"
                          color="text"
                          className="number"
                        >
                          x {item.qty}
                        </Typography>
                        <Typography variant="span" color="primary.main">
                          <AddCircleOutlineOutlinedIcon
                            sx={{
                              transition: "0.2s",
                              ml: 1,
                              "&:hover": {
                                transition: "0.2s",
                                cursor: "pointer",
                                color: theme.palette.primary.dark,
                              },
                            }}
                            fontSize="small"
                            onClick={() => addOneToCart(item)}
                          />
                        </Typography>
                      </Grid>

                      <Grid
                        xs={6}
                        item
                        sx={{
                          textAlign: "right",
                        }}
                      >
                        <Typography variant="p" component="span" color="text">
                          $
                        </Typography>
                        <Typography
                          variant="p"
                          component="span"
                          align="center"
                          color="text"
                          className="number"
                          fontSize="1rem"
                        >
                          {item.price * item.qty}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                );
              })}
              <Grid
                container
                mt={1}
                spacing={1}
                justifyContent="space-between"
                alignItems="center"
              >
                <Grid item sx={{ display: "flex", alignItems: "center" }}>
                  <Typography variant="h6" color="primary" mr={1}>
                    Total:
                  </Typography>
                  <Typography
                    variant="p"
                    fontSize="1.5rem"
                    fontWeight="500"
                    color="text"
                    className="number"
                  >
                    {" "}
                    $ {cartTotal}
                  </Typography>
                </Grid>
                <Grid item sx={{ display: "flex", alignItems: "center" }}>
                  <Button
                    disableElevation
                    sx={{
                      height: "2.5rem",
                      width: "100%",
                      borderRadius: "5px",
                      border: `2px solid ${theme.palette.primary.light}`,
                    }}
                    onClick={handleCheckOut}
                    variant={canCheckout ? "contained" : "disabled"}
                  >
                    <Typography
                      variant="p"
                      sx={{
                        fontSize: "1rem",
                        fontWeight: "700",
                      }}
                    >
                      Checkout
                    </Typography>
                  </Button>
                </Grid>
                {!canCheckout ? (
                  <Grid item xs={12} display="flex" justifyContent="end" mt={1}>
                    <Box sx={{ width: "35%" }}>
                      <Typography
                        variant="body2"
                        sx={{ fontWeight: 500 }}
                        color="red"
                      >
                        {" "}
                        Sorry, but you can't purchase more items than there is
                        stock of it!
                      </Typography>
                    </Box>
                  </Grid>
                ) : null}
              </Grid>
            </Grid>
          )}
        </Box>
      </Drawer>
    </>
  );
};

export default CartDrawer;
