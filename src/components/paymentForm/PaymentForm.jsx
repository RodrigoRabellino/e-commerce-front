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
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useForm, Controller } from "react-hook-form";
import MySnackBar from "../snackBar/MySnackBar";

function PaymentForm({ handleNext, handleBack }) {
  const [isLoading, setIsLoading] = useState(false);
  const [showSnack, setShowSnack] = useState(false);
  const [snackMessage, setSnackMessage] = useState("");
  const [snackSeverity, setSnackSeverity] = useState("info");
  const [dateExpired, setDateExpired] = useState(null);

  const handleCloseSnack = () => setShowSnack(false);

  const { register, handleSubmit, control } = useForm({
    defaultValues: {
      name: "",
      cardNumber: "66777677676678",
      expiredDate: "",
      CVV: "323",
    },
  });

  const onSubmit = (d) => {
    setIsLoading(true);
    setTimeout(() => {
      setSnackMessage("Payment accepted");
      setShowSnack(true);
    }, 1000);
    setTimeout(() => {
      setIsLoading(false);
      handleNext();
    }, 2500);
  };

  const buttonStyles = {
    ":hover": { transition: "0.2s", color: "white" },
  };

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
        <Typography fontWeight="600" variant="h5">
          Payment Method
        </Typography>
        <Box>
          <Typography
            fontWeight="400"
            variant="h6"
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              mb: "10px",
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
          <img
            srcSet={require("../../assets/images/credit-card-logo.png")}
            alt={"cardLog0"}
          />
          <img
            srcSet={require("../../assets/images/Paypal logo.png")}
            alt={"cardLog0"}
          />
        </Box>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            control={control}
            name={"name"}
            render={({ field: { onChange, value } }) => (
              <TextField
                disabled={isLoading}
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
                disabled={isLoading}
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
          <Box
            display="flex"
            marginTop="1rem"
            justifyContent="space-between"
            alignItems="center"
          >
            <Controller
              control={control}
              name={"expiredDate"}
              render={({ field: { onChange, value } }) => (
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    minDate={new Date()}
                    maxDate={new Date("2034-01-01T00:00:00.000")}
                    label="Expire Date"
                    views={["month", "year"]}
                    value={dateExpired}
                    onChange={(newValue) => setDateExpired(newValue)}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        variant="standard"
                        sx={{ width: "48%" }}
                      />
                    )}
                  />
                </LocalizationProvider>
                // <TextField
                //   disabled={isLoading}
                //   variant="standard"
                //   sx={{ width: "48%" }}
                //   label="ExpiredDate*"
                //   size="small"
                //   value={value}
                //   onChange={onChange}
                //   type="text"
                //   aria-describedby="expiredDate-helper"
                // />
              )}
            />
            <Controller
              control={control}
              name={"cvv"}
              render={({ field: { onChange, value } }) => (
                <TextField
                  disabled={isLoading}
                  variant="standard"
                  sx={{ width: "48%" }}
                  label="CVV*"
                  size="small"
                  value={value}
                  onChange={onChange}
                  type="number"
                  aria-describedby="cvv-helper"
                />
              )}
            />
          </Box>

          <FormGroup>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Remember Credit Card for next time"
            />
          </FormGroup>
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
              sx={{ ...buttonStyles }}
              variant="contained"
              type="submit"
            >
              Next
            </LoadingButton>
          </Box>
        </form>
        <MySnackBar
          open={showSnack}
          message={snackMessage}
          handleClose={handleCloseSnack}
          severity={snackSeverity}
        />
      </Box>
    </>
  );
}

export default PaymentForm;
