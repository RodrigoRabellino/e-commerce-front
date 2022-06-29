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
  TextField,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";

function AddressForm({ handleNext, setDatos, datos }) {
  const buttonStyles = {
    ":hover": { transition: "0.2s", color: "white" },
  };
  console.log(handleNext);
  const handleNextForm = (d) => {
    console.log(d);
    console.log("entre a handleNextForm");
    // setDatos();
    handleNext();
  };

  const { register, handleSubmit, control } = useForm({
    defaultValues: {
      name: "",
      lastName: "",
      addressLine: "",
      addressLine2: "",
      city: "",
      state: "",
      zip: "",
      country: "",
    },
  });
  const onSubmit = (d) => handleNext();

  return (
    <>
      <Box sx={{ height: "100%" }}>
        <Typography mt="20px" fontWeight="600" variant="h5">
          Shipping Address
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
          }}
        >
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
              name={"lastName"}
              render={({ field: { onChange, value } }) => (
                <TextField
                  variant="standard"
                  fullWidth
                  label="Last name*"
                  size="small"
                  value={value}
                  onChange={onChange}
                  type="text"
                  aria-describedby="lastName-helper"
                />
              )}
            />

            <Controller
              control={control}
              name={"addressLine"}
              render={({ field: { onChange, value } }) => (
                <TextField
                  variant="standard"
                  fullWidth
                  label="Address Line*"
                  size="small"
                  value={value}
                  onChange={onChange}
                  type="text"
                  aria-describedby="addressLine-helper"
                />
              )}
            />

            <Controller
              control={control}
              name={"addressLine2"}
              render={({ field: { onChange, value } }) => (
                <TextField
                  variant="standard"
                  fullWidth
                  label="Address Line 2"
                  size="small"
                  value={value}
                  onChange={onChange}
                  type="text"
                  aria-describedby="addressLine2-helper"
                />
              )}
            />

            <Controller
              control={control}
              name={"city"}
              render={({ field: { onChange, value } }) => (
                <TextField
                  variant="standard"
                  fullWidth
                  label="City"
                  size="small"
                  value={value}
                  onChange={onChange}
                  type="text"
                  aria-describedby="city-helper"
                />
              )}
            />

            <Controller
              control={control}
              name={"state"}
              render={({ field: { onChange, value } }) => (
                <TextField
                  variant="standard"
                  fullWidth
                  label="State/Province/Region"
                  size="small"
                  value={value}
                  onChange={onChange}
                  type="text"
                  aria-describedby="state"
                />
              )}
            />

            <Controller
              control={control}
              name={"zip"}
              render={({ field: { onChange, value } }) => (
                <TextField
                  variant="standard"
                  fullWidth
                  label="Zip/Postal Code"
                  size="small"
                  value={value}
                  onChange={onChange}
                  type="text"
                  aria-describedby="zip"
                />
              )}
            />

            <Controller
              control={control}
              name={"country"}
              render={({ field: { onChange, value } }) => (
                <TextField
                  variant="standard"
                  fullWidth
                  label="Country"
                  size="small"
                  value={value}
                  onChange={onChange}
                  type="text"
                  aria-describedby="country"
                />
              )}
            />

            <Box display="flex" justifyContent="space-between">
              <FormGroup mt="10px">
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="Use this address for payment details"
                />
              </FormGroup>
              <Button
                type="submit"
                sx={{
                  ...buttonStyles,
                  mt: "160px",
                }}
                variant="contained"
              >
                Next
              </Button>
            </Box>
          </form>
        </Box>
      </Box>
    </>
  );
}

export default AddressForm;
