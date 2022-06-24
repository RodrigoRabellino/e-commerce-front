import { Snackbar, Alert } from "@mui/material";

const MySnackBar = ({ open, handleClose, message, severity = "success" }) => {
  return (
    <Snackbar open={open} autoHiddenDuration={6000} onClose={handleClose}>
      <Alert onClose={handleClose} severity={severity}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default MySnackBar;
