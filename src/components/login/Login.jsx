import "./Login.css";
import {
  Button,
  Divider,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Paper,
  Box,
  Grid,
  Container,
  IconButton,
} from "@mui/material";
import { NavLink, useNavigate, useSearchParams } from "react-router-dom";
import Typography from "@mui/material/Typography";
import { useTheme } from "@emotion/react";
import { useFormik } from "formik";
import { loginUserReducer } from "../../Redux/user/slice";
import { loginUser } from "../../services/loginServices";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { loginValidationSchema } from "./loginValidationSchema";
import MySnackBar from "../snackBar/MySnackBar";
import { Twitter } from "@mui/icons-material";
import Google from "../../assets/icons/google_icon.png";

export default function Login() {
  const theme = useTheme();
  const dispatch = useDispatch();
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const routePath = params.get("routePath");

  const [openSnack, setOpenSnack] = useState(false);
  const [messageSnack, setMessageSnack] = useState("");
  const [severitySnack, setSeveritySnack] = useState("");

  const handleOpenSnack = (message, severity) => {
    setMessageSnack(message);
    setSeveritySnack(severity);
    setOpenSnack(true);
  };

  const handleCloseSnack = () => setOpenSnack(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categoryBtnStyles = {
    bgcolor: "primary.main",
    border: `1px solid ${theme.palette.primary.light}`,
    borderRadius: "15px",
    color: "white",
    "&:hover": {
      color: "primary",
    },
  };

  const handleLogin = async ({ email, password }) => {
    setError(false);
    const response = await loginUser(email, password);
    if (Object.entries(response).length === 0) return setError(true);
    dispatch(loginUserReducer(response));
    navigate(!routePath ? "/welcome" : `/${routePath}`, { replace: true });
  };

  const formik = useFormik({
    initialValues: {
      email: "user@user.com",
      password: "12345678",
    },
    validationSchema: loginValidationSchema,
    onSubmit: (values) => handleLogin(values),
  });

  return (
    <>
      <CssBaseline />
      <Container sx={{ paddingY: "2rem", mt: "64px" }}>
        <Grid
          container
          component="main"
          className="border-form"
          sx={{
            width: "100%",
            marginBottom: "4rem",
          }}
        >
          <Grid
            className="background-guitar"
            item
            xs={false}
            sm={6}
            md={7}
            sx={{
              backgroundImage:
                "url(https://img.wallpapersafari.com/tablet/2560/1700/29/66/N7iGLn.jpg)",
              backgroundRepeat: "no-repeat",
              backgroundColor: (t) =>
                t.palette.mode === "light"
                  ? t.palette.grey[70]
                  : t.palette.grey[900],
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />

          <Grid
            item
            xs={12}
            sm={6}
            md={5}
            className="gradientbg"
            component={Paper}
            elevation={6}
            square
            sx={{ backgroundColor: "white" }}
          >
            <Box
              sx={{
                my: 8,
                mx: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography variant="h3" marginBottom="4px" color="primary">
                Welcome
              </Typography>

              <Typography variant="h5">Sign in</Typography>
              <Divider></Divider>
              <form onSubmit={formik.handleSubmit}>
                <TextField
                  margin="normal"
                  fullWidth
                  name="email"
                  id="email"
                  label="Enter your Email"
                  variant="standard"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                />
                <TextField
                  margin="normal"
                  fullWidth
                  name="password"
                  type="password"
                  id="password"
                  label="Enter your Password"
                  variant="standard"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.password && Boolean(formik.errors.password)
                  }
                  helperText={formik.touched.password && formik.errors.password}
                />
                {error ? (
                  <>
                    <Typography textAlign="center" sx={{ color: "red" }}>
                      Invalid Email or Password
                    </Typography>
                  </>
                ) : (
                  <></>
                )}
                <FormControlLabel
                  sx={{ color: "black" }}
                  control={<Checkbox value="remember" color="secondary" />}
                  label="Remember me"
                />

                <Box className="button-singin">
                  <Button
                    disableElevation
                    fullWidth
                    type="submit"
                    variant="contained"
                    sx={{ ...categoryBtnStyles }}
                  >
                    Sign In
                  </Button>
                </Box>
                <NavLink to="/register" style={{ textDecoration: "none" }}>
                  <Button
                    disableElevation
                    fullWidth
                    variant="contained"
                    sx={{ ...categoryBtnStyles }}
                  >
                    Sign Up
                  </Button>
                </NavLink>

                <Divider sx={{ py: "2rem", color: "black" }}>OR</Divider>
                <Box paddingBottom={2} alignItems="center">
                  <Button
                    variant="outlined"
                    sx={{ color: "text.primary", width: "100%" }}
                    onClick={() =>
                      handleOpenSnack(
                        "this functions is out of scope",
                        "warning"
                      )
                    }
                  >
                    <img
                      src={Google}
                      alt="Google Icon"
                      style={{ width: "20.92px", marginRight: "5px" }}
                    />
                    <span>Sign in with Google</span>
                  </Button>
                </Box>
                <Box alignItems="center">
                  <Button
                    variant="outlined"
                    sx={{ color: "text.primary", width: "100%" }}
                    onClick={() =>
                      handleOpenSnack(
                        "this functions is out of scope",
                        "warning"
                      )
                    }
                  >
                    <Twitter sx={{ mr: "5px", color: "#00acee" }} /> Sign in
                    with Twitter
                  </Button>
                </Box>
              </form>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <MySnackBar
        open={openSnack}
        handleClose={handleCloseSnack}
        message={messageSnack}
        severity={severitySnack}
      />
    </>
  );
}
