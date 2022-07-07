import { Snackbar, Alert } from "@mui/material";

const MySnackBar = ({ open, handleClose, message, severity = "success" }) => {
  //posibles severity = error, warning, info, success
  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
      <Alert onClose={handleClose} severity={severity}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default MySnackBar;
