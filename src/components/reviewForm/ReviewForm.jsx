import React, { useState } from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import { useSelector } from "react-redux";
import { postNewOrder } from "../../services/apiServices";
import MySnackBar from "../snackBar/MySnackBar";
import { useNavigate } from "react-router-dom";
import { LoadingButton } from "@mui/lab";

function ReviewForm({ handleNext, handleBack }) {
  const order = useSelector((state) => state.order);
  const navigate = useNavigate();
  const { _id, accessToken } = useSelector((state) => state.user);
  const [isLoading, setIsLoading] = useState(false);
  const [totalPrice, setTotalPrice] = useState(1000);
  const [showSnack, setShowSnack] = useState(false);
  const [snackMessage, setSnackMessage] = useState("");
  const [snackSeverity, setSnackSeverity] = useState("info");

  const handleOpenSnack = () => setShowSnack(true);
  const handleCloseSnack = () => setShowSnack(false);

  const handleNewOrder = async () => {
    setIsLoading(true);
    const response = await postNewOrder(_id, accessToken, order, totalPrice);
    if (Object.entries(response).length === 0) {
      setSnackMessage("unknown error occurred");
      setSnackSeverity("error");
      setShowSnack(true);
      setTimeout(() => {
        setIsLoading(false);
        return navigate("/userpage", { replace: true });
      }, 2000);
    }
    setSnackMessage("Order confirmed");
    setSnackSeverity("success");
    setShowSnack(true);

    setTimeout(() => {
      setIsLoading(false);
      return navigate("/userpage", { replace: true });
    }, 2000);
  };

  const buttonStyles = {
    ":hover": { transition: "0.2s", color: "white" },
  };

  try {
    for (let i = 0; i < order.cart.length; i++) {
      let price = order.cart[i].price * order.cart[i].qty;
      console.log("price x qty", price);
    }
  } catch (e) {
    console.log(e);
  }

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
                  <Typography>{`${product.qty}-${product.name}`}</Typography>
                  <Typography>U$S{product.price}</Typography>
                </Box>
              );
            })}
          </Box>
          <Box display="flex" marginTop="1rem" justifyContent="end">
            <Box display="flex" justifyContent="space-between" width="50%">
              <Typography fontWeight="600">Total:</Typography>
              <Typography fontWeight="600">U$Sver que pasa</Typography>
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
