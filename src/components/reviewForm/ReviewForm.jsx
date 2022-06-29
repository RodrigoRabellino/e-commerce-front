import React, { useState } from "react";
import {
  FormControl,
  FormHelperText,
  InputLabel,
  Input,
  Box,
  Container,
  Typography,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Button,
  ListItem,
} from "@mui/material";
import { useSelector } from "react-redux";

// import Total from "../Accounting/Total";

function ReviewForm({ handleNext, handleBack, datos }) {
  // const order = useSelector(state=>state.order)
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
          <Typography mt="10px" variant="h6">
            Review your order
          </Typography>
          <Box
            sx={{
              mt: "30px",
              ml: "40px",
            }}
          >
            <Box
              sx={{
                display: "flex",
              }}
            >
              <ListItem>Product 1</ListItem>
              <ListItem
                sx={{ display: "flex", justifyContent: "space-evenly" }}
              >
                $1000
              </ListItem>
            </Box>

            <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
              <ListItem>Product 2</ListItem>
              <ListItem
                sx={{ display: "flex", justifyContent: "space-evenly" }}
              >
                $1000
              </ListItem>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
              <ListItem>Product 3</ListItem>
              <ListItem
                sx={{ display: "flex", justifyContent: "space-evenly" }}
              >
                $6000
              </ListItem>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
              <ListItem>Product 4</ListItem>
              <ListItem
                sx={{ display: "flex", justifyContent: "space-evenly" }}
              >
                $2500
              </ListItem>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
              <ListItem>Product 5</ListItem>
              <ListItem
                sx={{ display: "flex", justifyContent: "space-evenly" }}
              >
                $4000
              </ListItem>
            </Box>
          </Box>
          <Box
            sx={{ display: "flex", justifyContent: "space-evenly", mt: "20px" }}
          >
            {/* <ListItem sx={{ mb: "25px" }}>Free Shipping</ListItem> */}
            <ListItem variant="h4" sx={{ mb: "20px", ml: "40px" }}>
              Total
            </ListItem>
            <ListItem sx={{ display: "flex", justifyContent: "space-evenly" }}>
              $20000
            </ListItem>
          </Box>
          <Box sx={{ float: "left", m: "20px" }}>
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
            {/* <Typography>{datos.name}</Typography> */}
            {/* <Typography>{datos.cardNumber}</Typography>
            <Typography>{datos.expiredDate}</Typography>
            <Typography>{datos.cvv}</Typography> */}
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <Button
              sx={{ fontWeight: "600", ...buttonStyles }}
              variant="contained"
              type="submit"
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
