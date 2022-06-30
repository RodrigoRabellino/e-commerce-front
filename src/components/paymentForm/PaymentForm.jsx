import React, { useState } from "react";
import {
  Box,
  Typography,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Button,
  TextField,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { useForm, Controller } from "react-hook-form";
function PaymentForm({ handleNext, handleBack }) {
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit, control } = useForm({
    defaultValues: {
      name: "",
      cardNumber: "",
      expiredDate: "",
      CVV: "",
    },
  });

  const onSubmit = (d) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      // handleNext();
    }, 2000);
  };

  const buttonStyles = {
    ":hover": { transition: "0.2s", color: "white" },
  };

  const enviarDatos = (event) => {};

  return (
    <>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
        }}
      >
        <Box sx={{ height: "100%" }}>
          <Typography
            fontWeight="600"
            variant="h5"
            sx={{
              variant: "h5",
              fontWeight: "600",
              mt: "20px",
            }}
          >
            Payment Method
          </Typography>
          <Typography
            fontWeight="400"
            mt="20px"
            variant="h6"
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              mb: "20px",
              width: "100%",
            }}
          >
            Credit Card
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mb: "20px",
          }}
        >
          <img src={require("../../assets/images/credit-card-logo.png")} />
          <img src={require("../../assets/images/Paypal logo.png")} />
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

          <FormGroup mt="10px">
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Remember Credit Card for next time"
            />
          </FormGroup>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mt: "200px",
            }}
          >
            <Button
              sx={{
                ...buttonStyles,
              }}
              variant="contained"
              href="#contained-buttons"
              onClick={handleBack}
            >
              Back
            </Button>
            <LoadingButton
              loading={isLoading}
              sx={{ ...buttonStyles }}
              variant="contained"
              type="submit"
            >
              Next
            </LoadingButton>
          </Box>

          {/* <Box
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              mt: "150px",
              mb: "10px",
              marginRight: "15px",
            }}
          > */}
        </form>
      </Box>
    </>
  );
}

export default PaymentForm;
