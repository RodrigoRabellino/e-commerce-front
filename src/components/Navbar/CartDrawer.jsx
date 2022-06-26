import CloseIcon from "@mui/icons-material/Close";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

import DeleteIcon from "@mui/icons-material/Delete";
import { Drawer, Box, Typography, Button, Grid } from "@mui/material";
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

  return (
    <>
      <Drawer
        anchor="right"
        open={isCartOpen}
        onClose={() => setIsCartOpen(false)}
      >
        <Grid container p={2} sx={{ width: "400px" }}>
          <Grid
            item
            px={1}
            sx={{
              width: "100%",
              borderBottom: "1px solid #8C5032",
            }}
          >
            <Box style={{ display: "flex", justifyContent: "space-between" }}>
              <Typography variant="h4" sx={{ color: "#8C5032" }}>
                Shopping Cart
              </Typography>
              <Button
                style={{
                  textAlign: "end",
                  justifyContent: "flex-end",
                  padding: 0,
                }}
              >
                <CloseIcon
                  sx={{ color: "#8C5032" }}
                  onClick={() => setIsCartOpen(false)}
                ></CloseIcon>
              </Button>
            </Box>
          </Grid>
          {cart.length === 0 ? (
            <Grid
              container
              xs={12}
              direction="column"
              justifyContent="center"
              alignItems="center"
              sx={{ height: "70vh" }}
            >
              <Box p={2} width="100%" sx={{ color: "#8C5032" }}>
                <Typography variant="h5" textAlign="center">
                  It looks like your Shopping Cart is empty!
                </Typography>
              </Box>
              <Box>
                <RemoveShoppingCartIcon
                  fontSize="large"
                  sx={{ color: "#8C5032" }}
                />
              </Box>
            </Grid>
          ) : (
            <Grid container mt={3} sx={{ width: "100%" }}>
              {cart.map((item) => {
                return (
                  <div key={item._id}>
                    <Grid
                      container
                      sx={{
                        borderBottom: "1px solid #8C5032",
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
                          <Typography variant="p" color="secondary">
                            {item.name}
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Typography variant="span" color="secondary">
                            <RemoveIcon
                              sx={{
                                "&:hover": {
                                  cursor: "pointer",
                                  color: "black",
                                },
                              }}
                              fontSize="small"
                              onClick={() => removeFromCart(item)}
                            />
                          </Typography>
                          <Typography variant="span" color="secondary">
                            x {item.qty}
                          </Typography>
                          <Typography variant="span" color="secondary">
                            <AddIcon
                              sx={{
                                "&:hover": {
                                  cursor: "pointer",
                                  color: "black",
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
                              "&:hover": { cursor: "pointer", color: "black" },
                            }}
                          />
                        </Box>
                        <Box display="flex" justifyContent="space-between">
                          <Typography
                            variant="p"
                            component="span"
                            color="secondary"
                          >
                            $
                          </Typography>
                          <Typography
                            variant="p"
                            component="span"
                            align="center"
                            color="secondary"
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
                  <Typography variant="h6" ms={5} color="secondary">
                    Total:
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="h6" color="secondary">
                    {" "}
                    $ {cartTotal}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          )}
        </Grid>
      </Drawer>
    </>
  );
};

export default CartDrawer;
