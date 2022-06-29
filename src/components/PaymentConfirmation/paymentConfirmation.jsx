import React from "react";
import { Box, Container, Typography, Button } from "@mui/material";

function PaymentConfirmation({ handleBack }) {
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
        <Box sx={{ height: "100%" }}>
          <Typography fontWeight="600" mt="20px" mb="20px" variant="h6">
            Thank you for your order.
          </Typography>
          <Typography variant="h6">
            Your order number is #9809870.We have emailed you an order
            confirmation.We will notify you when your order has been delivered.
          </Typography>
          <Box
            sx={{
              marginTop: "60px",
              display: "flex",
              justifyContent: "flex-end",
              mb: "20px",
              mr: "13px",
            }}
          >
            <Button
              sx={{ fontWeight: "600", ...buttonStyles }}
              variant="contained"
              href="#contained-buttons"
              onClick={handleBack}
            >
              Back
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  );
}

export default PaymentConfirmation;
