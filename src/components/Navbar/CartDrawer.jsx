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
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  console.log(cart);
  const removeFromCart = (cartItem) => {
    dispatch(RemoveItemCart(cartItem));
  };
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
            <Grid item>
              <Box
                p={2}
                width="400px"
                className="row mt-5"
                sx={{ color: "#8C5032" }}
              >
                <div className="col text-center">
                  {/* <FontAwesomeIcon icon={faCartShopping} /> */}

                  <span style={{ fontSize: "1.5rem" }}>
                    {/* <FontAwesomeIcon icon={faCircleExclamation} /> */}
                  </span>
                  <h5>It looks like your Shopping Cart is empty!</h5>
                  <RemoveShoppingCartIcon fontSize="large" />
                </div>
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
                            {item.price}
                          </Typography>
                        </Box>
                      </Grid>
                    </Grid>
                  </>
                );
              })}
            </Grid>
          )}
        </Grid>
      </Drawer>
    </>
  );
};

export default CartDrawer;
