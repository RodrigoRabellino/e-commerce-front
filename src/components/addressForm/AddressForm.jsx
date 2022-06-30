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
import { useForm, Controller } from "react-hook-form";
import { useDispatch } from "react-redux";
import { updateOrderReducer } from "../../Redux/order/slice";

function AddressForm({ handleNext }) {
  const dispatch = useDispatch();
  const buttonStyles = {
    ":hover": { transition: "0.2s", color: "white" },
  };
  // const [data, setData] = useState({
  //   firstName: "",
  //   lastName: "",
  //   address: "",
  //   city: "",
  //   state: "",
  //   zip: "",
  //   country: "",
  // });

  const handleNextForm = (data) => {
    dispatch(updateOrderReducer({ ...data }));
    handleNext();
  };

  const { register, handleSubmit, control } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      addressLine: "",
      addressLine2: "",
      city: "",
      state: "",
      zip: "",
      country: "",
    },
  });
  return (
    <>
      <Box sx={{ height: "100%" }}>
        <Typography mt="20px" fontWeight="600" variant="h5">
          Shipping Details
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
          }}
        >
          <form onSubmit={handleSubmit(handleNextForm)}>
            <Controller
              rules={{ required: true }}
              control={control}
              name={"firstName"}
              render={({ field }) => (
                <TextField
                  variant="standard"
                  fullWidth
                  label="Name*"
                  size="small"
                  {...field}
                  type="text"
                  aria-describedby="name-helper"
                />
              )}
            />

            <Controller
              rules={{ required: true, min: 3 }}
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
              rules={{ required: true, min: 3 }}
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
              rules={{ required: true, min: 3 }}
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
              rules={{ required: true, min: 3 }}
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
              rules={{ required: true, min: 3 }}
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
              rules={{ required: true, min: 3 }}
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

            <Box display="flex">
              <FormGroup mt="10px">
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="Use this address for payment details"
                />
              </FormGroup>
            </Box>
            <Box display="flex" justifyContent="flex-end" paddingTop="80px">
              <Button
                type="submit"
                sx={{
                  ...buttonStyles,
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
