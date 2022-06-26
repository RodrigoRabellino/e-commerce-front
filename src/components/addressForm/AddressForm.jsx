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

import CheckOut from "../checkout/CheckOut";

function AddressForm() {
  return (
    <>
      <Container
        sx={{
          mb: "200px",
          mt: "200px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box sx={{ boxShadow: "0 5px 10px 0", width: "50%" }}>
          <Typography variant="h4" sx={{ mt: "20px", mb: "30px" }}>
            Checkout
          </Typography>
          <CheckOut />
          <Typography variant="h6">Shipping Address</Typography>
          <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
            <FormControl>
              <InputLabel htmlFor="Name" />
              <InputLabel />
              <Input id="name" type="text" aria-describedby="name-helper" />
              <FormHelperText id="name-helper">Name*</FormHelperText>
            </FormControl>

            <FormControl>
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
            <FormControl sx={{ width: "75%" }}>
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
            <FormControl>
              <InputLabel htmlFor="Name" />
              <InputLabel />
              <Input id="name" type="text" aria-describedby="name-helper" />
              <FormHelperText id="name-helper">City*</FormHelperText>
            </FormControl>

            <FormControl>
              <InputLabel htmlFor="Name" />
              <InputLabel />
              <Input id="name" type="text" aria-describedby="name-helper" />
              <FormHelperText id="name-helper">
                State/Province/Region
              </FormHelperText>
            </FormControl>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
            <FormControl>
              <InputLabel htmlFor="Name" />
              <InputLabel />
              <Input id="name" type="text" aria-describedby="name-helper" />
              <FormHelperText id="name-helper">Zip/Postal Code*</FormHelperText>
            </FormControl>

            <FormControl>
              <InputLabel htmlFor="Name" />
              <InputLabel />
              <Input id="name" type="text" aria-describedby="name-helper" />
              <FormHelperText id="name-helper">Country</FormHelperText>
            </FormControl>
          </Box>
          <Box sx={{ float: "right", mt: "30px", mb: "30px" }}>
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
              sx={{ fontWeight: "600" }}
              variant="contained"
              href="#contained-buttons"
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
