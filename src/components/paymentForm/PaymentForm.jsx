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
  TextField,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";

function PaymentForm({ handleNext, handleBack }) {
  const { register, handleSubmit, control } = useForm({
    defaultValues: {
      name: "",
      cardNumber: "",
      expiredDate: "",
      CVV: "",
    },
  });

  const onSubmit = (d) => handleNext();
  const handleInputChange = (event) => {
    // console.log(event.target.value);
    // console.log(event.target.name);
  };
  const buttonStyles = {
    ":hover": { transition: "0.2s", color: "white" },
  };

  const enviarDatos = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box sx={{ height: "100%" }}>
          <Typography
            fontWeight="600"
            variant="h5"
            sx={{
              fontWeight: "600",
              mt: "10px",
              variant: "h5",
            }}
          >
            Payment Method
          </Typography>
        </Box>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            control={control}
            name={"name"}
            render={({ field: { onChange, value } }) => (
              <TextField
                variant="standard"
                fullWidth
                label="Name*"
                size="small"
                value={value}
                onChange={onChange}
                type="text"
                aria-describedby="name-helper"
              />
            )}
          />

          <Controller
            control={control}
            name={"cardNumber"}
            render={({ field: { onChange, value } }) => (
              <TextField
                variant="standard"
                fullWidth
                label="CardNumber*"
                size="small"
                value={value}
                onChange={onChange}
                type="text"
                aria-describedby="cardNumber-helper"
              />
            )}
          />

          <Controller
            control={control}
            name={"expiredDate"}
            render={({ field: { onChange, value } }) => (
              <TextField
                variant="standard"
                fullWidth
                label="ExpiredDate*"
                size="small"
                value={value}
                onChange={onChange}
                type="text"
                aria-describedby="expiredDate-helper"
              />
            )}
          />

          <Controller
            control={control}
            name={"cvv"}
            render={({ field: { onChange, value } }) => (
              <TextField
                variant="standard"
                fullWidth
                label="CVV*"
                size="small"
                value={value}
                onChange={onChange}
                type="number"
                aria-describedby="cvv-helper"
              />
            )}
          />

          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <FormGroup>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Remember Credit Card for next time"
              />
            </FormGroup>

            <Button
              sx={{
                ...buttonStyles,
                display: "flex",
                justifyContent: "space-evenly",
              }}
              variant="contained"
              href="#contained-buttons"
              onClick={handleBack}
            >
              Back
            </Button>
            <Button
              sx={{ fontWeight: "600", ...buttonStyles }}
              variant="contained"
              type="submit"
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
        </form>
      </Box>
    </>
  );
}

export default PaymentForm;
