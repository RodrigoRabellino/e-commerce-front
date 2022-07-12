import {
  Box,
  Button,
  Container,
  Grid,
  Modal,
  Typography,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import FirstnameDialogue from "./editDialogues/FirstnameDialogue";

const ResumePage = ({ user }) => {
  const { firstName, lastName, email, address, phone } = user;
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [field, setField] = useState("");
  const handleOpen = () => setOpen(true);

  const getDialogue = (editField) => {
    switch (editField) {
      case "firstname":
        return <FirstnameDialogue setOpen={setOpen} open={open} />;
    }
  };

  const buttonStyle = {
    width: "100%",
    textAlign: "center",
    color: theme.palette.text.primary,
    border: `1px solid ${theme.palette.primary.main}`,
    borderRadius: "5px",
    backgroundColor: "white",
    display: "flex",
  };
  const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <>
      <Container>
        <Grid container textAlign="left" spacing={5} mb={5}>
          <Grid
            item
            xs={12}
            sx={{
              borderBottom: `1px solid ${theme.palette.primary.main}`,
            }}
          >
            <Typography variant="h4">
              Manage your Account Information
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body2">Firstname:</Typography>
            <Button
              sx={buttonStyle}
              onClick={() => {
                setField("firstname");
                handleOpen();
              }}
            >
              <Typography variant="p" fontSize="16px" width="100%">
                {firstName}
              </Typography>

              <EditIcon fontSize="small" color="primary" />
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="lead">Lastname:</Typography>
            <Button sx={buttonStyle} onClick={handleOpen}>
              <Typography variant="p" fontSize="16px" width="100%">
                {lastName}
              </Typography>
              <EditIcon fontSize="small" color="primary" />
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body2">Email:</Typography>
            <Button sx={buttonStyle} onClick={handleOpen}>
              <Typography variant="p" fontSize="16px" width="100%">
                {email}
              </Typography>
              <EditIcon fontSize="small" color="primary" />
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body2">Password:</Typography>
            <Button sx={buttonStyle} onClick={handleOpen}>
              <Typography variant="p" fontSize="16px" width="100%">
                {"password"}
              </Typography>
              <EditIcon fontSize="small" color="primary" />
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body2">Address:</Typography>
            <Button sx={buttonStyle} onClick={handleOpen}>
              <Typography variant="p" fontSize="16px" width="100%">
                {address}
              </Typography>
              <EditIcon fontSize="small" color="primary" />
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body2">Phone Number:</Typography>
            <Button sx={buttonStyle} onClick={handleOpen}>
              <Typography variant="p" fontSize="16px" width="100%">
                {phone}
              </Typography>
              <EditIcon fontSize="small" color="primary" />
            </Button>
          </Grid>
        </Grid>
        {getDialogue(field)}
      </Container>

      {/* <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="h3">{`Welcome ${firstName} ${lastName}`}</Typography>
        <IconButton>
          <Edit />
        </IconButton>
      </Box>
      <Box pt="2rem">
        <Typography variant="h6" textAlign="start">
          <AlternateEmail /> {email}
        </Typography>
        <Typography variant="h6" textAlign="start">
          <ContactMail /> {address}
        </Typography>
        <Typography variant="h6" textAlign="start">
          <PhoneAndroid />
          <span style={{ fontFamily: "number" }}>{phone}</span>
        </Typography>
      </Box> */}
    </>
  );
};

export default ResumePage;
