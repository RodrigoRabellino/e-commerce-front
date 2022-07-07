import CloseIcon from "@mui/icons-material/Close";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";
import { Drawer, Box, Typography, Button, Grid, useTheme } from "@mui/material";

import { useSelector, useDispatch } from "react-redux";
import {
  addItemToCart,
  deleteItemCart,
  addOneQty,
  removeOneQty,
} from "../../Redux/cart/slice";
import { createOrderReducer } from "../../Redux/order/slice";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const CartDrawer = ({ isCartOpen, setIsCartOpen }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
    navigate("/checkout", { replace: false });
  };

  useEffect(() => {
    const canCheckout = () => {
      cart.map((item) => {
        if (item.qty <= item.stock) {
          setCanCheckout(true);
        } else {
          setCanCheckout(false);
        }
      });
    };
    canCheckout();
  }, cart);

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
          sx={{ width: "400px", height: "100%", background: "white" }}
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
              <Typography
                variant="h4"
                sx={{ color: theme.palette.primary.main }}
              >
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
            <Grid container mt={3} sx={{ width: "100%" }}>
              {cart.map((item) => {
                return (
                  <div key={item._id}>
                    <Grid
                      container
                      sx={{
                        borderBottom: `1px solid ${theme.palette.primary.main}`,
                      }}
                    >
                      <Grid item sm={2} p={1} maxHeight="5rem">
                        <img
                          src={item.imgUrl[0]}
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
                        sm={8}
                        p={1}
                        display="flex"
                        flexDirection="column"
                        justifyContent="space-between"
                      >
                        <Grid item>
                          <Typography variant="p" color="primary">
                            {item.name}
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Typography variant="span" color="primary">
                            <RemoveIcon
                              sx={{
                                "&:hover": {
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
                            color="primary"
                            className="number"
                          >
                            x {item.qty}
                          </Typography>
                          <Typography variant="span" color="primary">
                            <AddIcon
                              sx={{
                                "&:hover": {
                                  cursor: "pointer",
                                  color: theme.palette.primary.dark,
                                },
                              }}
                              fontSize="small"
                              onClick={() => addOneToCart(item)}
                            />
                          </Typography>
                        </Grid>
                      </Grid>

                      <Grid
                        item
                        p={1}
                        display="flex"
                        flexDirection="column"
                        justifyContent="space-between"
                        sm={2}
                        sx={{
                          textAlign: "center",
                        }}
                      >
                        <Box textAlign="end">
                          <DeleteIcon
                            sx={{
                              color: "#8C5032",
                              "&:hover": {
                                cursor: "pointer",
                                color: theme.palette.primary.dark,
                              },
                            }}
                            onClick={() => deleteFromCart(item)}
                          />
                        </Box>
                        <Box
                          display="flex"
                          justifyContent="space-between"
                          alignItems="center"
                        >
                          <Typography
                            variant="p"
                            component="span"
                            color="primary"
                          >
                            $
                          </Typography>
                          <Typography
                            variant="p"
                            component="span"
                            align="center"
                            color="primary"
                            className="number"
                            fontSize="1.2rem"
                          >
                            {item.price * item.qty}
                          </Typography>
                        </Box>
                      </Grid>
                    </Grid>
                  </div>
                );
              })}
              <Grid
                container
                p={1}
                columnSpacing={2}
                justifyContent="space-between"
                alignItems="center"
              >
                <Grid item sx={{ display: "flex", alignItems: "center" }}>
                  <Typography variant="h6" ms={5} color="primary">
                    Total:
                  </Typography>
                  <Typography
                    variant="p"
                    fontSize="1.5rem"
                    fontWeight="700"
                    color="primary"
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
                      borderRadius: "15px",
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
