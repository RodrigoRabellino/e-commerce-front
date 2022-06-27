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

function AddressForm({ handleNext }) {
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
        <Box sx={{ boxShadow: "0px 5px 10px 0px", width: "60%" }}>
          <Typography mt="10px" variant="h6">
            Shipping Address
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-evenly",
            }}
          >
            <FormControl sx={{ width: "32%" }}>
              <InputLabel htmlFor="Name" />
              <InputLabel />
              <Input id="name" type="text" aria-describedby="name-helper" />
              <FormHelperText id="name-helper">Name*</FormHelperText>
            </FormControl>

            <FormControl sx={{ width: "32%" }}>
              <InputLabel htmlFor="LastName" />
              <InputLabel />
              <Input
                id="Lastname"
                type="text"
                aria-describedby="Lastname-helper"
              />
              <FormHelperText id="Lastname-helper">Last name*</FormHelperText>
            </FormControl>
          </Box>

          <Box>
            <FormControl sx={{ width: "76%" }}>
              <InputLabel htmlFor="AddressLine" />
              <InputLabel />
              <Input
                id="AddressLine"
                type="text"
                aria-describedby="address-helper"
              />
              <FormHelperText id="address-helper">
                Address Line 1*
              </FormHelperText>
            </FormControl>
          </Box>
          <Box>
            <FormControl sx={{ width: "75%" }}>
              <InputLabel htmlFor="Name" />
              <InputLabel />
              <Input id="name" type="text" aria-describedby="name-helper" />
              <FormHelperText id="name-helper">Address Line 2</FormHelperText>
            </FormControl>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
            <FormControl sx={{ width: "32%" }}>
              <InputLabel htmlFor="Name" />
              <InputLabel />
              <Input id="name" type="text" aria-describedby="name-helper" />
              <FormHelperText id="name-helper">City*</FormHelperText>
            </FormControl>

            <FormControl sx={{ width: "32%" }}>
              <InputLabel htmlFor="Name" />
              <InputLabel />
              <Input id="name" type="text" aria-describedby="name-helper" />
              <FormHelperText id="name-helper">
                State/Province/Region
              </FormHelperText>
            </FormControl>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
            <FormControl sx={{ width: "32%" }}>
              <InputLabel htmlFor="Name" />
              <InputLabel />
              <Input id="name" type="text" aria-describedby="name-helper" />
              <FormHelperText id="name-helper">Zip/Postal Code*</FormHelperText>
            </FormControl>

            <FormControl sx={{ width: "32%" }}>
              <InputLabel htmlFor="Name" />
              <InputLabel />
              <Input id="name" type="text" aria-describedby="name-helper" />
              <FormHelperText id="name-helper">Country</FormHelperText>
            </FormControl>
          </Box>
          <Box sx={{ float: "right", mt: "50px", mb: "30px" }}>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Use this address for payment details"
              />
            </FormGroup>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              mb: "20px",
              mt: "150px",
              marginRight: "15px",
            }}
          >
            <Button
              sx={{ fontWeight: "600", ...buttonStyles }}
              variant="contained"
              href="#contained-buttons"
              onClick={handleNext}
            >
              Next
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  );
}

export default AddressForm;
