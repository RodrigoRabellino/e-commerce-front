import CloseIcon from "@mui/icons-material/Close";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";
import { Drawer, Box, Typography, Button, Grid, useTheme } from "@mui/material";

import { useSelector, useDispatch } from "react-redux";
import { removeItemCart, addItemToCart } from "../../Redux/cart/slice";

const CartDrawer = ({ isCartOpen, setIsCartOpen }) => {
  const dispatch = useDispatch();
  const removeFromCart = (cartItem) => {
    dispatch(removeItemCart(cartItem));
  };
  const addToCart = (cartItem) => {
    dispatch(addItemToCart(cartItem));
  };

  const cart = useSelector((state) => state.cart);
  let cartTotal = 0;
  cart.forEach((item) => {
    cartTotal += item.qty * item.price;
  });

  const theme = useTheme();

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
                              onClick={() => removeFromCart(item)}
                            />
                          </Typography>
                          <Typography variant="span" color="primary">
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
                              onClick={() => addToCart(item)}
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
                            onClick={() => removeFromCart(item)}
                            sx={{
                              color: "#8C5032",
                              "&:hover": {
                                cursor: "pointer",
                                color: theme.palette.primary.dark,
                              },
                            }}
                          />
                        </Box>
                        <Box display="flex" justifyContent="space-between">
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
                          >
                            {item.price * item.qty}
                          </Typography>
                        </Box>
                      </Grid>
                    </Grid>
                  </div>
                );
              })}
              <Grid container p={1} columnSpacing={2} justifyContent="flex-end">
                <Grid item>
                  <Typography variant="h6" ms={5} color="primary">
                    Total:
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="h6" color="primary">
                    {" "}
                    $ {cartTotal}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          )}
        </Box>
      </Drawer>
    </>
  );
};

export default CartDrawer;
