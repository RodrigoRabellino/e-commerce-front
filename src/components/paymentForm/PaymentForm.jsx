import React from "react";
import { Box, Container, Typography } from "@mui/material";
import CheckOut from "../checkout/CheckOut";

function PaymentForm() {
  return (
    <>
      <Container
        sx={{
          mb: "200px",
          mt: "200px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box sx={{ boxShadow: "0 5px 10px 0", width: "50%" }}>
          <Typography variant="h4" sx={{ mt: "20px", mb: "30px" }}>
            Checkout
          </Typography>
          <CheckOut />
          <Typography fontWeight="600" variant="h6">
            Thank you for your order.
          </Typography>
          <Typography variant="h6">
            Your order number is #9809870.We have emailed you an order
            confirmation.We will notify you when your order has been delivered.
          </Typography>
        </Box>
      </Container>
    </>
  );
}

export default PaymentForm;
