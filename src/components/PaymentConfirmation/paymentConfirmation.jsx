import React from "react";
import { Box, Paper, Typography, Button, useMediaQuery } from "@mui/material";
import { useNavigate } from "react-router-dom";

function PaymentConfirmation({ order }) {
  const xs = useMediaQuery("(min-width:0)");
  const sm = useMediaQuery("(min-width:600px)");
  const buttonStyles = {
    ":hover": { transition: "0.2s", color: "white" },
  };
  const navigate = useNavigate();
  const orderName = order._id;
  return (
    <>
      <Box mb={2}>
        <Typography fontWeight="400" variant="h4" mb={2}>
          Thank you for your order.
        </Typography>
        <Typography
          variant="p"
          marginBottom="2rem"
          sx={{ fontSize: { xs: "1rem", sm: "1.3rem" } }}
        >
          Your order number is{" "}
          <Typography variant="span" fontWeight="600" fontFamily="number">
            #${orderName.substring(0, 10)}
          </Typography>
          . We have emailed you an order confirmation.We will notify you when
          your order has been delivered.
        </Typography>
      </Box>
      <Box
        sx={{ display: "flex", justifyContent: "center", marginBottom: "2rem" }}
      >
        <Paper
          sx={{
            width: { md: "70%", xs: "100%" },
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
              srcSet={require("../../assets/images/guitarreroGreen.png")}
              alt="GuitarImage"
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
      <Box marginTop="2rem" display="flex" justifyContent="end">
        <Button
          sx={{
            ...buttonStyles,
          }}
          variant="contained"
          onClick={() => navigate("/", { replace: true })}
        >
          Finish
        </Button>
      </Box>
    </>
  );
}

export default PaymentConfirmation;
