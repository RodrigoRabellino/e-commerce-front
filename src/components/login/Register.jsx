import "./Login.css";
import { useFormik } from "formik";
import { validationSchema } from "./validationSchema";

import {
  Button,
  Divider,
  CssBaseline,
  TextField,
  Paper,
  Box,
  Grid,
} from "@mui/material";

import Typography from "@mui/material/Typography";
import { Container } from "@mui/system";
import { useTheme } from "@emotion/react";
import { registerUser } from "../../services/registerServices";
import { loginUserReducer } from "../../Redux/user/slice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Register() {
  const theme = useTheme();
  const [error, setError] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegister = async ({
    firstName,
    lastName,
    email,
    password,
    address,
  }) => {
    setError(false);
    const response = await registerUser(
      firstName,
      lastName,
      email,
      password,
      address
    );
    if (Object.entries(response).length === 0) return setError(true);

    dispatch(loginUserReducer(response));
    navigate("/", { replace: true });
  };

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      address: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => handleRegister(values),
  });

  const categoryBtnStyles = {
    bgcolor: "primary.main",
    border: `1px solid ${theme.palette.primary.light}`,
    borderRadius: "15px",
    color: "white",
    "&:hover": {
      color: "primary",
    },
  };
  return (
    <>
      <Container sx={{ paddingY: "2rem", mt: "64px" }}>
        <Grid container component="main" className="borderform">
          <CssBaseline />

          <Grid
            item
            xs={12}
            sm={6}
            md={5}
            className="gradientbg"
            component={Paper}
            elevation={3}
            square
            backgroundColor="white"
          >
            <Box
              sx={{
                my: 3,
                mx: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography component="h1" variant="h5">
                Sign Up
              </Typography>
              <form onSubmit={formik.handleSubmit}>
                <Box>
                  <TextField
                    margin="normal"
                    fullWidth
                    name="firstName"
                    id="firstName"
                    label="First Name"
                    variant="standard"
                    value={formik.values.firstName}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.firstName &&
                      Boolean(formik.errors.firstName)
                    }
                    helperText={
                      formik.touched.firstName && formik.errors.firstName
                    }
                  />
                  <TextField
                    margin="normal"
                    fullWidth
                    name="lastName"
                    id="lastName"
                    label="Last Name"
                    variant="standard"
                    value={formik.values.lastName}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.lastName && Boolean(formik.errors.lastName)
                    }
                    helperText={
                      formik.touched.lastName && formik.errors.lastName
                    }
                  />
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
                    type="password"
                    name="password"
                    id="password"
                    label="Enter your Password"
                    variant="standard"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.password && Boolean(formik.errors.password)
                    }
                    helperText={
                      formik.touched.password && formik.errors.password
                    }
                  />
                  <TextField
                    margin="normal"
                    fullWidth
                    name="address"
                    id="address"
                    label="Enter your address"
                    variant="standard"
                    value={formik.values.address}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.address && Boolean(formik.errors.address)
                    }
                    helperText={formik.touched.address && formik.errors.address}
                  />
                  <Box height="3rem" display="flex" alignItems="center">
                    {error ? (
                      <Typography sx={{ color: "red" }}>
                        Email already exist
                      </Typography>
                    ) : (
                      <></>
                    )}
                  </Box>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ ...categoryBtnStyles }}
                  >
                    Sign Up
                  </Button>

                  <Divider sx={{ paddingTop: "2rem", color: "black" }}>
                    OR
                  </Divider>
                  <Box paddingBottom={2} paddingTop={1} alignItems="center">
                    <button type="button" className="google-button butonn">
                      <span className="google-button__icon">
                        <svg
                          viewBox="0 0 366 372"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M125.9 10.2c40.2-13.9 85.3-13.6 125.3 1.1 22.2 8.2 42.5 21 59.9 37.1-5.8 6.3-12.1 12.2-18.1 18.3l-34.2 34.2c-11.3-10.8-25.1-19-40.1-23.6-17.6-5.3-36.6-6.1-54.6-2.2-21 4.5-40.5 15.5-55.6 30.9-12.2 12.3-21.4 27.5-27 43.9-20.3-15.8-40.6-31.5-61-47.3 21.5-43 60.1-76.9 105.4-92.4z"
                            id="Shape"
                            fill="#EA4335"
                          />
                          <path
                            d="M20.6 102.4c20.3 15.8 40.6 31.5 61 47.3-8 23.3-8 49.2 0 72.4-20.3 15.8-40.6 31.6-60.9 47.3C1.9 232.7-3.8 189.6 4.4 149.2c3.3-16.2 8.7-32 16.2-46.8z"
                            id="Shape"
                            fill="#FBBC05"
                          />
                          <path
                            d="M361.7 151.1c5.8 32.7 4.5 66.8-4.7 98.8-8.5 29.3-24.6 56.5-47.1 77.2l-59.1-45.9c19.5-13.1 33.3-34.3 37.2-57.5H186.6c.1-24.2.1-48.4.1-72.6h175z"
                            id="Shape"
                            fill="#4285F4"
                          />
                          <path
                            d="M81.4 222.2c7.8 22.9 22.8 43.2 42.6 57.1 12.4 8.7 26.6 14.9 41.4 17.9 14.6 3 29.7 2.6 44.4.1 14.6-2.6 28.7-7.9 41-16.2l59.1 45.9c-21.3 19.7-48 33.1-76.2 39.6-31.2 7.1-64.2 7.3-95.2-1-24.6-6.5-47.7-18.2-67.6-34.1-20.9-16.6-38.3-38-50.4-62 20.3-15.7 40.6-31.5 60.9-47.3z"
                            fill="#34A853"
                          />
                        </svg>
                      </span>
                      <span className="google-button__text">
                        Sign in with Google
                      </span>
                    </button>
                  </Box>
                  <Box alignItems="center">
                    <button type="button" className="twitter-button butonn">
                      <span className="google-button__icon">
                        <svg
                          viewBox="328 355 335 276"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="  M 630, 425
                           A 195, 195 0 0 1 331, 600
                            A 142, 142 0 0 0 428, 570
                            A  70,  70 0 0 1 370, 523
                            A  70,  70 0 0 0 401, 521
                            A  70,  70 0 0 1 344, 455
                            A  70,  70 0 0 0 372, 460
                            A  70,  70 0 0 1 354, 370
                            A 195, 195 0 0 0 495, 442
                            A  67,  67 0 0 1 611, 380
                            A 117, 117 0 0 0 654, 363
                            A  65,  65 0 0 1 623, 401
                            A 117, 117 0 0 0 662, 390
                            A  65,  65 0 0 1 630, 425
                            Z"
                            fill="#3BA9EE"
                          />
                        </svg>
                      </span>
                      <span className="google-button__text">
                        Sign in with Twitter
                      </span>
                    </button>
                  </Box>
                </Box>
              </form>
            </Box>
          </Grid>
          <Grid
            className="background-guitar"
            item
            xs={false}
            sm={6}
            md={7}
            sx={{
              backgroundImage:
                "url(https://wallpaperboat.com/wp-content/uploads/2019/04/electric-guitar-003.jpg)",

              backgroundRepeat: "no-repeat",
              backgroundColor: (t) =>
                t.palette.mode === "light"
                  ? t.palette.grey[70]
                  : t.palette.grey[900],
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </Grid>
      </Container>
    </>
  );
}
