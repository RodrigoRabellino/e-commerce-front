import CloseIcon from "@mui/icons-material/Close";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  Drawer,
  Box,
  Typography,
  Button,
  Grid,
  List,
  ListItem,
} from "@mui/material";
import { style } from "@mui/system";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { isCartOpen, setIsCartOpen } from "./Navbar";
import { RemoveItemCart } from "../../Redux/cart/slice";

const CartDrawer = ({ isCartOpen, setIsCartOpen }) => {
  const dispatch = useDispatch();
  const removeFromCart = (cartItem) => {
    dispatch(RemoveItemCart(cartItem));
  };

  const cart = useSelector((state) => state.cart);
  let cartTotal = 0;
  cart.forEach((item) => {
    cartTotal += item.qty * item.price;
  });

  return (
    <>
      <Drawer anchor="right" open={isCartOpen}>
        <Grid container p={2} style={{ width: "500px" }}>
          <Grid
            item
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
            <Grid container mt={5} sx={{ width: "100%" }}>
              {cart.map((item) => {
                return (
                  <>
                    <Grid
                      container
                      p={2}
                      sx={{
                        width: "100%",
                        borderBottom: "1px solid #8C5032",
                      }}
                    >
                      <Grid item sm={2}>
                        <img
                          src={item.imgUrl[0]}
                          alt=""
                          style={{
                            width: "80%",
                            height: "100%",
                            objectFit: "contain",
                          }}
                        />
                      </Grid>

                      <Grid item sm={8}>
                        <Typography variant="h6">{item.name}</Typography>
                        <Typography variant="span">x {item.qty}</Typography>
                      </Grid>

                      <Grid
                        item
                        sm={2}
                        sx={{
                          textAlign: "center",
                        }}
                      >
                        <Box>
                          <DeleteIcon
                            onClick={() => removeFromCart(item)}
                            sx={{
                              color: "#8C5032",
                              "&:hover": { cursor: "pointer", color: "black" },
                            }}
                          />
                        </Box>
                        <Box>
                          <Typography variant="h6" component="span">
                            USD
                          </Typography>
                          <Typography
                            variant="h5"
                            component="span"
                            align="center"
                          >
                            {item.price * item.qty}
                          </Typography>
                        </Box>
                      </Grid>
                    </Grid>
                  </>
                );
              })}
              <Grid container p={2}>
                <Box>
                  <Typography variant="h6" ms={5}>
                    Total:{" "}
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="h6">USD {cartTotal}</Typography>
                </Box>
              </Grid>
            </Grid>
          )}
        </Grid>
      </Drawer>
    </>
  );
};

export default CartDrawer;
