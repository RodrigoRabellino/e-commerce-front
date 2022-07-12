import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { updateUser } from "./../../../services/apiServices";
import { useFormik } from "formik";
import * as yup from "yup";
import { useParams } from "react-router-dom";

const AddressDialogue = ({ open, setOpen, address, setAddress }) => {
  const handleClose = () => setOpen(false);
  const params = useParams();

  const validationSchema = yup.object({
    address: yup
      .string("Enter your address")
      .required("Your address is required"),
  });

  const formik = useFormik({
    initialValues: {
      address: address,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
      updateUser(values, params);
      handleClose();
    },
  });

  return (
    <>
      <Dialog open={open} onClose={handleClose} maxWidth="lg">
        <DialogTitle sx={{ width: "50rem" }}>Edit your address</DialogTitle>
        <form
          onSubmit={() => {
            setAddress(formik.values.address);
            formik.handleSubmit();
          }}
        >
          <DialogContent>
            <TextField
              autoFocus
              fullWidth
              margin="dense"
              id="address"
              label="address"
              type="text"
              variant="standard"
              value={formik.values.address}
              onChange={formik.handleChange}
              error={formik.touched.address && Boolean(formik.errors.address)}
              helperText={formik.touched.address && formik.errors.address}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button type="submit">Edit</Button>
          </DialogActions>
        </form>
      </Dialog>
      ;
    </>
  );
};

export default AddressDialogue;
