import React, { useState } from "react";
import { Box, Container, Typography, Button, ListItem } from "@mui/material";
import { useSelector } from "react-redux";

function ReviewForm({ handleNext, handleBack }) {
  const order = useSelector((state) => state.order);
  const [totalPrice, setTotalPrice] = useState(0);

  const buttonStyles = {
    ":hover": { transition: "0.2s", color: "white" },
  };

  try {
    console.log(order.cart[0]);
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
                  <Typography>{product.name}</Typography>
                  <Typography>U$S{product.price}</Typography>
                </Box>
              );
            })}
          </Box>

          <Box
            sx={{ display: "flex", justifyContent: "space-evenly", mt: "20px" }}
          >
            {/* <ListItem sx={{ mb: "25px" }}>Free Shipping</ListItem> */}
            <ListItem
              variant="h4"
              sx={{ mb: "20px", ml: "40px", fontWeight: "500" }}
            >
              Total
            </ListItem>
            <ListItem sx={{ display: "flex", justifyContent: "space-evenly" }}>
              $20000
            </ListItem>
          </Box>
          <Box sx={{ float: "left" }}>
            <Typography variant="h6" fontWeight="600">
              Shipping
            </Typography>
            <Typography>Ave. Texas Dr 1234,</Typography>
            <Typography>Dallas,tx,99999, USA</Typography>
          </Box>
          <Box sx={{ m: "20px", float: "right", marginBottom: "50px" }}>
            <Typography variant="h6" fontWeight="600">
              Payment Details
            </Typography>
            <Typography>Card Type: Visa</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
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
            <Button
              type="submit"
              sx={{ fontWeight: "600", ...buttonStyles }}
              variant="contained"
            >
              Place order
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  );
}

export default ReviewForm;
