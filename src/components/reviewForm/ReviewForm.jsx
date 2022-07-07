import React, { useState } from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { postNewOrder } from "../../services/apiServices";
import MySnackBar from "../snackBar/MySnackBar";
import { useNavigate } from "react-router-dom";
import { LoadingButton } from "@mui/lab";
import { emptyCart } from "../../Redux/cart/slice";
import { createOrderReducer } from "../../Redux/order/slice";

function ReviewForm({ handleNext, handleBack, setOrder }) {
  const order = useSelector((state) => state.order);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { _id, accessToken } = useSelector((state) => state.user);

  const [isLoading, setIsLoading] = useState(false);
  const [showSnack, setShowSnack] = useState(false);
  const [snackMessage, setSnackMessage] = useState("");
  const [snackSeverity, setSnackSeverity] = useState("info");

  const handleOpenSnack = () => setShowSnack(true);
  const handleCloseSnack = () => setShowSnack(false);

  let total = 0;

  const handleNewOrder = async () => {
    setIsLoading(true);
    const response = await postNewOrder(_id, accessToken, order, total);
    if (response.status !== "confirmed") {
      setSnackMessage("unknown error occurred");
      setSnackSeverity("error");
      setShowSnack(true);

      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
      return;
    }
    setSnackMessage("Order confirmed");
    setSnackSeverity("success");
    setShowSnack(true);

    setTimeout(() => {
      setIsLoading(false);
      dispatch(emptyCart(""));
      setOrder(response);
      handleNext();
      // return navigate("/userpage", { replace: true });
    }, 2000);
  };

  const buttonStyles = {
    ":hover": { transition: "0.2s", color: "white" },
  };
  return (
    <>
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box sx={{ height: "100%", width: "100%" }}>
          <Typography fontWeight="600" variant="h5">
            Review your Order
          </Typography>
          <Box display="flex" flexDirection="column" marginTop="1rem">
            {order.cart.map((product) => {
              return (
                <Box
                  key={product._id}
                  display="flex"
                  width="100%"
                  marginBottom="0.65rem"
                  bgColor="#eaeaea"
                  justifyContent="space-between"
                >
                  <Typography
                    sx={{ fontFamily: "number" }}
                  >{`${product.qty}-${product.name}`}</Typography>
                  <Typography sx={{ fontFamily: "number" }}>
                    U$S {product.price}
                  </Typography>
                </Box>
              );
            })}
          </Box>
          <Box display="flex" marginTop="1rem" justifyContent="end">
            <Box display="flex" justifyContent="space-between" width="50%">
              <Typography fontWeight="600" fontSize="1.3rem">
                Total:
              </Typography>
              <Typography
                fontWeight="600"
                fontSize="1.3rem"
                sx={{ fontFamily: "number" }}
              >
                {order.cart.forEach((item) => (total += item.qty * item.price))}
                U$S {total}
              </Typography>
            </Box>
          </Box>
          <Box sx={{ marginY: "1rem" }}>
            <Typography variant="h6">Address</Typography>
            <Typography>
              {order.shippingDetails.addressLine}
              {order.shippingDetails.addressLine2}
            </Typography>
            <Typography>
              {order.shippingDetails.state}, {order.shippingDetails.city}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "end",
            }}
          >
            <Button
              sx={{
                transition: "0.2",
                marginRight: "1rem",
                ":hover": {
                  transition: "0.2",
                  color: "#ab832a",
                  backgroundColor: "rgb(171,131,42, 0.1)",
                },
              }}
              variant="text"
              onClick={handleBack}
            >
              Back
            </Button>
            <LoadingButton
              loading={isLoading}
              onClick={handleNewOrder}
              sx={{ fontWeight: "600", ...buttonStyles }}
              variant="contained"
            >
              Place order
            </LoadingButton>
          </Box>
        </Box>
        <MySnackBar
          open={showSnack}
          message={snackMessage}
          handleClose={handleCloseSnack}
          severity={snackSeverity}
        />
      </Container>
    </>
  );
}

export default ReviewForm;
