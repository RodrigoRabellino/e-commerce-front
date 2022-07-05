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
          <form
            onSubmit={handleSubmit(handleNextForm)}
            style={{ width: "100%" }}
          >
            <Box display="flex" justifyContent="space-between">
              <Controller
                rules={{ required: true }}
                control={control}
                name={"firstName"}
                render={({ field }) => (
                  <TextField
                    variant="standard"
                    sx={{ width: "48%" }}
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
                    sx={{ width: "48%" }}
                    label="Last name*"
                    size="small"
                    value={value}
                    onChange={onChange}
                    type="text"
                    aria-describedby="lastName-helper"
                  />
                )}
              />
            </Box>

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

            <Box display="flex" justifyContent="space-between">
              <Controller
                rules={{ required: true, min: 3 }}
                control={control}
                name={"country"}
                render={({ field: { onChange, value } }) => (
                  <TextField
                    variant="standard"
                    sx={{ width: "48%" }}
                    label="Country"
                    size="small"
                    value={value}
                    onChange={onChange}
                    type="text"
                    aria-describedby="country"
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
                    sx={{ width: "48%" }}
                    label="City"
                    size="small"
                    value={value}
                    onChange={onChange}
                    type="text"
                    aria-describedby="city-helper"
                  />
                )}
              />
            </Box>

            <Box display="flex" justifyContent="space-between">
              <Controller
                rules={{ required: true, min: 3 }}
                control={control}
                name={"state"}
                render={({ field: { onChange, value } }) => (
                  <TextField
                    variant="standard"
                    sx={{ width: "48%" }}
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
                    sx={{ width: "48%" }}
                    label="Zip/Postal Code"
                    size="small"
                    value={value}
                    onChange={onChange}
                    type="text"
                    aria-describedby="zip"
                  />
                )}
              />
            </Box>
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
          </form>
        </Box>
      </Box>
    </>
  );
}

export default AddressForm;
