import React from "react";
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
} from "@mui/material";

function PaymentForm({ handleNext, handleBack }) {
  const buttonStyles = {
    ":hover": { transition: "0.2s", color: "white" },
  };
  return (
    <>
      <Container
        sx={{
          mt: "100px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box sx={{ boxShadow: "0 5px 10px 0", width: "50%" }}>
          <Typography fontWeight="600" mt="10px" variant="h5">
            Payment Method
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
            <FormControl>
              <InputLabel htmlFor="Name" />
              <InputLabel />
              <Input id="name" type="text" aria-describedby="name-helper" />
              <FormHelperText id="name-helper">Name on card*</FormHelperText>
            </FormControl>

            <FormControl>
              <InputLabel htmlFor="CardNumber" />
              <InputLabel />
              <Input
                id="Lastname"
                type="number"
                aria-describedby="Lastname-helper"
              />
              <FormHelperText id="Lastname-helper">Card Number*</FormHelperText>
            </FormControl>
          </Box>

          <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
            <FormControl>
              <InputLabel htmlFor="Name" />
              <InputLabel />
              <Input id="name" type="text" aria-describedby="name-helper" />
              <FormHelperText id="name-helper">Expired Date*</FormHelperText>
            </FormControl>

            <FormControl>
              <InputLabel htmlFor="CardNumber" />
              <InputLabel />
              <Input
                id="Lastname"
                type="number"
                aria-describedby="Lastname-helper"
              />
              <FormHelperText id="Lastname-helper">CVV*</FormHelperText>
            </FormControl>
          </Box>
          <Box sx={{ float: "right", mt: "30px" }}>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Remember Credit Card for next time"
              />
            </FormGroup>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mt: "150px",
              mr: "10px",
              ml: "10px",
              mb: "20px",
            }}
          >
            <Button
              sx={{ ...buttonStyles }}
              variant="contained"
              href="#contained-buttons"
              onClick={handleBack}
            >
              Back
            </Button>
            <Button
              sx={{ fontWeight: "600", ...buttonStyles }}
              variant="contained"
              href="#contained-buttons"
              onClick={handleNext}
            >
              Next
            </Button>

            {/* <Box
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              mt: "150px",
              mb: "10px",
              marginRight: "15px",
            }}
          > */}
          </Box>
        </Box>
      </Container>
    </>
  );
}

export default PaymentForm;
