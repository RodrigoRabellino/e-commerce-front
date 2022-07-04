import {
  Container,
  Divider,
  Grid,
  Typography,
  Box,
  Card,
  CardContent,
  TextField,
  Button,
  CssBaseline,
} from "@mui/material";
import React from "react";
import imgGuitarStore from "../../assets/images/guitarscontactUs.webp";
import "./contactUs.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

function ContactUs() {
  return (
    <>
      <CssBaseline />
      <Container>
        <Typography
          variant="h3"
          fontWeight={700}
          color="primary"
          alignItems="center"
          paddingTop="5rem"
        >
          <Divider sx={{ color: "primary" }}>Contact Us</Divider>
        </Typography>

        <Grid container spacing={2} columns={16} sx={{ paddingTop: "2rem" }}>
          <Grid item xs={16} md={8}>
            <Typography
              variant="h5"
              fontWeight={700}
              color="primary"
              alignItems="center"
            >
              Get in Touch
            </Typography>
            <Box paddingTop="0.5rem">
              <Card
                sx={{
                  maxWidth: 450,
                  margin: "0 auto",
                  padding: "20px 5px",
                  backgroundColor: "white",
                }}
              >
                <CardContent>
                  <form>
                    <Grid container spacing={1}>
                      <Grid xs={12} md={6} item>
                        <TextField
                          label="First Name"
                          placeholder="Enter First Name"
                          variant="outlined"
                          fullWidth
                          required
                        />
                      </Grid>
                      <Grid xs={12} md={6} item>
                        <TextField
                          label="Last Name"
                          placeholder="Enter Last Name"
                          variant="outlined"
                          fullWidth
                          required
                        />
                      </Grid>
                      <Grid xs={12} item>
                        <TextField
                          type="email"
                          label="Email"
                          placeholder="Enter Email"
                          variant="outlined"
                          fullWidth
                          required
                        />
                      </Grid>
                      <Grid xs={12} item>
                        <TextField
                          multiline
                          rows={4}
                          label="Message"
                          placeholder="Type your message here"
                          variant="outlined"
                          fullWidth
                          required
                        />
                      </Grid>
                      <Grid xs={12} item>
                        <Button variant="contained" color="primary" fullWidth>
                          Submit
                        </Button>
                      </Grid>
                    </Grid>
                  </form>
                </CardContent>
              </Card>
            </Box>
          </Grid>

          <Grid
            item
            xs={16}
            md={8}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box>
              <Typography
                variant="h5"
                fontWeight={700}
                color="primary"
                alignItems="center"
              >
                About Usdas loremipusum
              </Typography>
              <Typography
                variant="subtitle1"
                fontWeight={700}
                alignItems="center"
                paddingTop="0.3rem"
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
              </Typography>
            </Box>

            <Divider />
            <Box sx={{ width: { xs: "80%" } }}>
              <img
                srcSet={imgGuitarStore}
                alt=""
                className="imgcontactUs"
              ></img>
            </Box>
            <Divider />
            <Grid
              container
              columns={16}
              mb={5}
              sx={{ width: { xs: "80%", md: "100%" } }}
            >
              <Grid item xs={1}>
                <LocationOnIcon sx={{ paddingTop: "0.3rem" }} />
              </Grid>
              <Grid item xs={7}>
                <Typography
                  variant="subtitle1"
                  fontWeight={700}
                  textAlign="left"
                  paddingTop="0.3rem"
                >
                  P. Sherman, calle Wallaby, 42
                </Typography>
                <Typography
                  variant="subtitle1"
                  fontWeight={700}
                  textAlign="left"
                >
                  Open: 9:00-18:00
                </Typography>
                <Typography
                  variant="subtitle1"
                  fontWeight={700}
                  textAlign="left"
                  paddingTop="1rem"
                >
                  742 Evergreen Terrace
                </Typography>
                <Typography
                  variant="subtitle1"
                  fontWeight={700}
                  textAlign="left"
                >
                  Open: 9:00-18:00
                </Typography>
              </Grid>

              <Grid item xs={1}>
                <EmailIcon sx={{ paddingTop: "0.3rem" }} />
                <LocalPhoneIcon sx={{ paddingTop: "0.3rem" }} />
              </Grid>

<<<<<<< HEAD
              <Grid item xs={7}>
                <Typography
                  variant="subtitle1"
                  fontWeight={700}
                  textAlign="left"
                >
                  pepe.leia@ha.com
=======
              <Grid item xs={7} sx={{ textAlign: "left" }}>
                <Typography variant="subtitle1" fontWeight={700}>
                  pepe.leia@hackacademy.com
>>>>>>> 3c4bc6a013de880977a2e150d34767d171d568c0
                </Typography>
                <Typography
                  variant="subtitle1"
                  fontWeight={700}
                  textAlign="left"
                >
                  55523156
                </Typography>
                <Box paddingTop="1.4rem" sx={{ display: "flex" }}>
                  <InstagramIcon sx={{ marginRight: "0.6rem" }} />
                  <GitHubIcon sx={{ marginRight: "0.6rem" }} />
                  <TwitterIcon sx={{ marginRight: "0.6rem" }} />
                  <LinkedInIcon />
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default ContactUs;
