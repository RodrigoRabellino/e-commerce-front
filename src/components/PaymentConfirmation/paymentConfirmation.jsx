import React from "react";
import { Box, Container, Paper, Typography, Button } from "@mui/material";

function PaymentConfirmation({ handleBack }) {
  const buttonStyles = {
    ":hover": { transition: "0.2s", color: "white" },
  };

  return (
    <>
      <Container
        sx={{
          height: "100vh",
          width: "100%",
          mt: "150px",
        }}
      >
        <Box>
          <Typography fontWeight="600" mt="20px" mb="20px" variant="h6">
            Thank you for your order.
          </Typography>
          <Typography variant="h6">
            Your order number is #9809870.We have emailed you an order
            confirmation.We will notify you when your order has been delivered.
          </Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center", mt: "10vh" }}>
          <Paper
            sx={{
              width: "70%",
              height: "70%",
              p: "20px",
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
              flexDirection: "column",
            }}
            elevation={4}
          >
            <Box
              sx={{
                mb: "10px",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Typography sx={{ color: "primary.main" }}>Guitarrero</Typography>
              <img
                style={{
                  width: "40px",
                  position: "relative",
                  transform: "rotate(45deg)",
                }}
                src={require("../../assets/images/guitarreroGreen.png")}
              />
            </Box>
            <Box>
              <Typography mb="20px" variant="h5">
                Time to save money!
              </Typography>
              <Typography mb="20px" variant="h5">
                SAVE $100 ON YOUR NEXT ORDER
              </Typography>
              <Typography mb="20px">
                Thank you for your purchase. We have the feeling this is the
                beginning of a beautiful friendship. So that we can get to know
                each other a little better, we're offering you $100 off an order
                of $500 or more!
              </Typography>
            </Box>
          </Paper>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "flex-end",
            height: "270px",
          }}
        >
          <Button
            sx={{
              ...buttonStyles,
            }}
            variant="contained"
            onClick={handleBack}
          >
            Back
          </Button>
        </Box>
      </Container>
    </>
  );
}

export default PaymentConfirmation;
