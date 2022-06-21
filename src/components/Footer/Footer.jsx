import React from "react";
import {
  Container,
  Box,
  Grid,
  Link,
  Divider,
  FormControl,
  Typography,
  TextField,
} from "@mui/material";

import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";


function Footer() {
  return (
    <>
      <Box
        px={{ xs: 3, sm: 10 }}
        py={{ xs: 5, sm: 10 }}
        bgcolor="black"
        color="white"
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} paddingBottom={14}>
            <Grid item xs={12} sm={3}>
              <Box textAlign="left" variant="h1" marginBottom={3}>
                LOGUITO
              </Box>
              <Typography
                variant="subtitle1"
                borderBottom={0}
                textAlign="left"
                color="primary"
              >
                Contact
              </Typography>
              <Box>
                <Box href="" color="inherit" textAlign="left" marginTop={1}>
                  pepe.leia@hackacademy.com
                </Box>
              </Box>
              <Box>
                <Box href="" color="inherit" textAlign="left">
                  Cel:55523156
                </Box>
              </Box>
            </Grid>

            <Grid item xs={12} sm={3}>
              <Typography
                variant="subtitle1"
                borderBottom={0}
                textAlign="left"
                color="primary"
              >
                Locals
              </Typography>
              <Box marginTop={1}>
                <Box color="inherit" textAlign="left">
                  P. Sherman, calle Wallaby, 42
                </Box>
              </Box>
              <Box>
                <Box href="" color="inherit" textAlign="left">
                  Open: 9:00-18:00
                </Box>
              </Box>

              <Box marginTop={2}>
                <Box href="" color="inherit" textAlign="left">
                  P. Sherman, calle Falsa, 123
                </Box>
              </Box>
              <Box>
                <Box href="" color="inherit" textAlign="left">
                  Open: 9:00-18:00
                </Box>
              </Box>
            </Grid>

            <Grid item xs={12} sm={3}>
              <Typography
                variant="subtitle1"
                borderBottom={0}
                textAlign="left"
                color="primary"
              >
                Store
              </Typography>
              <Box textAlign="left" marginTop={1}>
                <Link
                  href=""
                  color="inherit"
                  variant="caption"
                  sx={{ textDecoration: "none" }}
                >
                  HOME
                </Link>
              </Box>
              <Box textAlign="left">
                <Link
                  href=""
                  color="inherit"
                  variant="caption"
                  sx={{ textDecoration: "none" }}
                >
                  SHOP
                </Link>
              </Box>
              <Box textAlign="left">
                <Link
                  href=""
                  color="inherit"
                  variant="caption"
                  sx={{ textDecoration: "none" }}
                >
                  ADMIN
                </Link>
              </Box>
            </Grid>

            <Grid item xs={12} sm={3}>
              <FormControl variant="standart">
                <Typography
                  variant="h5"
                  gutterBottom
                  component="div"
                  textAlign="left"
                  color="primary"
                >
                  Suscribe for More
                </Typography>
                <Divider></Divider>
                <Typography
                  variant="subtitle1"
                  gutterBottom
                  component="div"
                  textAlign="left"
                >
                  subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit. Quos blanditiis tenetur
                </Typography>
                <TextField
                  label="Filled success"
                  variant="filled"
                  color="success"
                  focused
                />
              </FormControl>
            </Grid>
          </Grid>
          <Divider></Divider>

          <Grid container spacing={4} paddingTop={6}>
            <Grid item xs={12} sm={4}>
              <Box textAlign="left" pt={{ xs: 5, sm: 0 }} pb={{ xs: 5, sm: 0 }}>
                &reg;{new Date().getFullYear()} nombredelnegocio
              </Box>
              </Grid>

              <Grid item xs={12} sm={4}>
                <Box
                  textAlign="center"
                  pt={{ xs: 5, sm: 0 }}
                  pb={{ xs: 5, sm: 0 }}
                >
                  <Link href="" color="inherit">
                    <InstagramIcon />
                  </Link>
                  <Link href="" color="inherit" marginLeft={1}>
                    <GitHubIcon />
                  </Link>
                  <Link href="" color="inherit" marginLeft={1}>
                    <TwitterIcon />
                  </Link>
                  <Link href="" color="inherit" marginLeft={1}>
                    <LinkedInIcon />
                  </Link>
                </Box>
             
            </Grid>

            <Grid item xs={12} sm={4}>
            <Box textAlign="right"   pt={{ xs: 5, sm: 0 }}
            pb={{ xs: 5, sm: 0 }}>
            by: grupo:3(nombres)

          </Box>
            </Grid>
          </Grid>

          {/*    <Box
            textAlign="center"
         
            pt={{ xs: 5, sm: 10 }}
            pb={{ xs: 5, sm: 0 }}
          >
              <Link href="" color="inherit">
                  <InstagramIcon />
                </Link>
                <Link href="" color="inherit" marginLeft={1}>
                  <GitHubIcon />
                </Link>
                <Link href="" color="inherit" marginLeft={1}>
                  <TwitterIcon />
                </Link>
                <Link href="" color="inherit" marginLeft={1}>
                  <LinkedInIcon />
                </Link>


      
          </Box>
          <Box textAlign="left"  pt={{ xs: 5, sm: 0 }}
            pb={{ xs: 5, sm: 0 }}>
            &reg;{new Date().getFullYear()} nombredelnegocio

          </Box>

            
           */}
        </Container>
      </Box>
    </>
  );
}

export default Footer;
