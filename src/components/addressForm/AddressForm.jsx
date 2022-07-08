import {
  Box,
  Typography,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Button,
  TextField,
  Grid,
  Container,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { useDispatch } from "react-redux";
import { updateOrderReducer } from "../../Redux/order/slice";

function AddressForm({ handleNext }) {
  const dispatch = useDispatch();
  const buttonStyles = {
    ":hover": { transition: "0.2s", color: "white" },
  };

  const handleNextForm = (data) => {
    dispatch(updateOrderReducer({ ...data }));
    handleNext();
  };

  const { handleSubmit, control } = useForm({
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
      <Box sx={{ height: "100%", width: "100%" }}>
        <Typography fontWeight="600" variant="h5">
          Shipping Details
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
          }}
        >
          <form onSubmit={handleSubmit(handleNextForm)}>
            <Container>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <Controller
                    rules={{ required: true }}
                    control={control}
                    name={"firstName"}
                    sx={{ width: "100%" }}
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
                </Grid>
                <Grid item xs={12} md={6}>
                  <Controller
                    rules={{ required: true, min: 3 }}
                    control={control}
                    name={"lastName"}
                    render={({ field: { onChange, value } }) => (
                      <TextField
                        variant="standard"
                        label="Last name*"
                        size="small"
                        fullWidth
                        value={value}
                        onChange={onChange}
                        type="text"
                        aria-describedby="lastName-helper"
                      />
                    )}
                  />
                </Grid>

                <Grid item xs={12}>
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
                </Grid>
                <Grid item xs={12}>
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
                </Grid>

                <Grid item xs={12} md={6}>
                  {/* <Box display="flex" justifyContent="space-between"> */}
                  <Controller
                    rules={{ required: true, min: 3 }}
                    control={control}
                    name={"country"}
                    render={({ field: { onChange, value } }) => (
                      <TextField
                        variant="standard"
                        label="Country"
                        size="small"
                        fullWidth
                        value={value}
                        onChange={onChange}
                        type="text"
                        aria-describedby="country"
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <Controller
                    rules={{ required: true, min: 3 }}
                    control={control}
                    name={"city"}
                    render={({ field: { onChange, value } }) => (
                      <TextField
                        variant="standard"
                        label="City"
                        size="small"
                        value={value}
                        fullWidth
                        onChange={onChange}
                        type="text"
                        aria-describedby="city-helper"
                      />
                    )}
                  />
                </Grid>

                {/* </Box> */}

                <Grid item xs={12} md={6}>
                  {/* <Box display="flex" justifyContent="space-between"> */}
                  <Controller
                    rules={{ required: true, min: 3 }}
                    control={control}
                    name={"state"}
                    render={({ field: { onChange, value } }) => (
                      <TextField
                        variant="standard"
                        label="State/Province/Region"
                        size="small"
                        fullWidth
                        value={value}
                        onChange={onChange}
                        type="text"
                        aria-describedby="state"
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  {" "}
                  <Controller
                    rules={{ required: true, min: 3 }}
                    control={control}
                    name={"zip"}
                    render={({ field: { onChange, value } }) => (
                      <TextField
                        variant="standard"
                        label="Zip/Postal Code"
                        size="small"
                        value={value}
                        fullWidth
                        onChange={onChange}
                        type="text"
                        aria-describedby="zip"
                      />
                    )}
                  />
                </Grid>

                {/* </Box> */}
              </Grid>

              <FormGroup>
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="Use this address for payment details"
                />
              </FormGroup>

              <Box display="flex" justifyContent="end">
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
            </Container>
          </form>
        </Box>
      </Box>
    </>
  );
}

export default AddressForm;
