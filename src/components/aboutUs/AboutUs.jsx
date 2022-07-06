import {
  Typography,
  Box,
  Card,
  CardContent,
  Button,
  Avatar,
  Stack,
  IconButton,
  Paper,
  Divider,
  Container,
  Grid,
  CssBaseline,
  image,
  ListItem,
  ListItemText,
} from "@mui/material";
import React, { useState } from "react";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import "./aboutUs.css";
import JavascriptIcon from "@mui/icons-material/Javascript";
import CssIcon from "@mui/icons-material/Css";
import solePhoto1 from "../../assets/images/soleCampos1.jpg";
import solePhoto2 from "../../assets/images/sole2.jpg";
import { fontWeight } from "@mui/system";
import rodriPhoto1 from "../../assets/images/Rodri1.jpeg";
import rodriPhoto2 from "../../assets/images/Rodri2.jpeg";
import { Javascript } from "@mui/icons-material";
import sebaPhoto1 from "../../assets/images/seba.jpeg";
import sebaPhoto2 from "../../assets/images/Seba2.jpeg";
import juanPhoto1 from "../../assets/images/JuanBlanco1.jpg";
import juanPhoto2 from "../../assets/images/JuanBlanco2.jpg";

const AboutUs = () => {
  const [hover, setHover] = useState(false);
  const [hover1, setHover1] = useState(false);
  const [touch, setTouch] = useState(false);
  const [touch1, setTouch1] = useState(false);
  const avatarBoxStyle = {
    width: { md: "150px", sm: "120px", xs: "90px" },
    height: { md: "150px", sm: "120px", xs: "90px" },
  };
  const avatarStyles = {
    height: "100%",
    width: "100%",
    ":hover": { transition: "0.2s" },
  };
  const cardStyles = {
    backgroundColor: "white",
    transition: "0.2s",
    width: "100%",
    marginBottom: "1rem",
    maxWidth: "300px",
    minWidth: "250px",
    height: "300px",
    boxShadow: "3px 3px 5px 0 rgb(0,0,0, 0.22)",
    ":hover": {
      transition: "0.5s",
      boxShadow: "3px 3px 5px 0 rgb(0,0,, 0.44)",
    },
  };
  return (
    <>
      <CssBaseline />
      <Box
        className="about-page"
        sx={{
          height: "400px",
          width: "100%",
          marginTop: "64px",
        }}
      >
        <Stack
          className="about-opacity-bg"
          justifyContent="center"
          sx={{
            alignItems: "center",
          }}
          direction="row"
          spacing={2}
          flexWrap="wrap"
        >
          <Box sx={{ ...avatarBoxStyle, cursor: "pointer" }}>
            <Avatar
              id="solePhoto1"
              src={hover ? solePhoto2 : solePhoto1}
              className="AvatarSole"
              sx={avatarStyles}
              alt="Soledad Photo"
              onMouseOver={() => setHover(true)}
              onMouseOut={() => setHover(false)}

              // srcSet={require("../../assets/images/soleCampos1.jpg")}
            />
            <Box pt="10px">
              <Typography color="white">Soledad Campos</Typography>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <IconButton aria-label="LinkedInIcon" sx={{ color: "white" }}>
                  <a href="https://www.linkedin.com/in/soledad-campos-arellano/">
                    <LinkedInIcon className="logoLinkedin" />
                  </a>
                </IconButton>
                <IconButton aria-label="GitHubIcon" sx={{ color: "white" }}>
                  <a href="https://github.com/SoleDalia">
                    <GitHubIcon className="logoGithub" />
                  </a>
                </IconButton>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              ...avatarBoxStyle,
              cursor: "pointer",
            }}
          >
            <Avatar
              id="sebaPhoto1"
              src={touch ? sebaPhoto2 : sebaPhoto1}
              className="AvatarSeba"
              sx={avatarStyles}
              alt="Seba Photo"
              onMouseOver={() => setTouch(true)}
              onMouseOut={() => setTouch(false)}

              // srcSet={require("../../assets/images/soleCampos1.jpg")}
            />
            <Box pt="10px">
              <Typography color="white">Sebastián Sosa</Typography>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <IconButton aria-label="LinkedInIcon" sx={{ color: "white" }}>
                  <a href="https://www.linkedin.com/in/sebastian-sosa-cinotti/">
                    <LinkedInIcon className="logoLinkedin" />
                  </a>
                </IconButton>
                <IconButton aria-label="GitHubIcon" sx={{ color: "white" }}>
                  <a href="https://github.com/1986SebastianSosa">
                    <GitHubIcon className="logoGithub" />
                  </a>
                </IconButton>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              ...avatarBoxStyle,
              cursor: "pointer",
            }}
          >
            <Avatar
              sx={avatarStyles}
              alt="Rodrigo photo"
              id="rodriPhoto1"
              src={hover1 ? rodriPhoto2 : rodriPhoto1}
              className="AvatarRodri"
              onMouseOver={() => setHover1(true)}
              onMouseOut={() => setHover1(false)}
            />
            <Box pt="10px">
              <Typography color="white">Rodrigo Rabellino</Typography>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <IconButton aria-label="LinkedInIcon" sx={{ color: "white" }}>
                  <a href="https://www.linkedin.com/in/rodrigorabellino/">
                    <LinkedInIcon className="logoLinkedin" />
                  </a>
                </IconButton>
                <IconButton aria-label="GitHubIcon" sx={{ color: "white" }}>
                  <a href="https://github.com/RodrigoRabellino">
                    <GitHubIcon className="logoGithub" />
                  </a>
                </IconButton>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              ...avatarBoxStyle,
              cursor: "pointer",
            }}
          >
            <Avatar
              sx={avatarStyles}
              alt="Juan photo"
              id="JuanPhoto1"
              src={touch1 ? juanPhoto2 : juanPhoto1}
              className="AvatarRodri"
              onMouseOver={() => setTouch1(true)}
              onMouseOut={() => setTouch1(false)}
            />
            <Box pt="10px">
              <Typography color="white">Juan Arede</Typography>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <IconButton aria-label="LinkedInIcon" sx={{ color: "white" }}>
                  <a href="https://www.linkedin.com/in/juanarede/">
                    <LinkedInIcon className="logoLinkedin" />
                  </a>
                </IconButton>
                <IconButton aria-label="GitHubIcon" sx={{ color: "white" }}>
                  <a href="https://github.com/juanarede">
                    <GitHubIcon className="logoGithub" />
                  </a>
                </IconButton>
              </Box>
            </Box>
          </Box>
        </Stack>
      </Box>
      <Box>
        <Typography
          sx={{
            fontSize: "30px",
            fontWeight: "bold",
            marginBottom: "20px",
            marginTop: "20px",
            color: "#8C5032",
          }}
          variant="h4"
        >
          About Us
        </Typography>
      </Box>
      <Container>
        <Divider />
        <Grid container>
          <Grid item xs={12} md={6}>
            <Typography
              textAlign="start"
              fontSize="18px"
              lineHeight="1.5rem"
              variant="h5"
              pt="10px"
            >
              We are a multidisciplinary team of 4 members, who have different
              academic backgrounds as well as extensive experience in our
              respective previous fields.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography
              textAlign="start"
              lineHeight="1.5rem"
              fontSize="18px"
              variant="h5"
              pt="10px"
            >
              Despite of these past studies not having anything related between
              them, we have currently created strong ties to pursue & achieve
              our main goal: to get better in the IT Development world. This
              will help us renew our job careers sharing knowledge, ideas, etc.
            </Typography>
          </Grid>
        </Grid>
      </Container>

      <Typography
        sx={{
          fontSize: "30px",
          fontWeight: "bold",
          marginBottom: "20px",
          marginTop: "30px",
          color: "#8C5032",
        }}
        variant="h4"
      >
        About Our Project
      </Typography>

      <Container>
        <Divider />
        <Grid container>
          <Grid item xs={12} md={6}>
            <Typography
              textAlign="start"
              fontSize="18px"
              lineHeight="1.5rem"
              variant="h5"
              pt="10px"
            >
              This e-commerce site is oriented to create the final Hack Academy
              Bootcamp project. We've worked intensively during 3 weeks, each
              member dedicated around 190 hours. Our first step, was to do a
              brainstorming which motivated us to design a MER in Figma. Later
              on, we started the project following the MER and the to do list
              implemented in Trello.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography
              textAlign="start"
              lineHeight="1.5rem"
              fontSize="18px"
              variant="h5"
              pt="10px"
            >
              The app was divided in the following projects: 1-User Interface,
              2-Admin Site, 3-API Rest. Our main purpose was to create our own
              brand. We designed the color palette inspired by wood and natural
              elements. All details and functionalities implemented were the
              team's own ideas. The spanish guitar was the main inspiration
              element to design this web experience.
            </Typography>
          </Grid>
        </Grid>
      </Container>
      <Container>
        <Grid container mt="50px" mb="20px">
          <Grid items xs={12} md={6}>
            <img
<<<<<<< HEAD
              height="100%"
=======
              alt="merEcommerceFront"
              width="100%"
>>>>>>> f3c00793cc441bb17972d65b3c675b372f5ec827
              srcSet={require("../../assets/images/MERe-commerce.png")}
            />
          </Grid>

          <Grid items display="flex" flexDirection="column" xs={12} md={6}>
            <Typography fontSize="16px" lineHeight="1.5rem" textAlign="left">
              <Typography fontWeight="600" fontSize="18px">
                1-User Interface:
              </Typography>
              Clients can login, navigate the site, browse product categories
              and add or delete items from the shopping cart. They can also pay
              the order and deliver it (simulation mode). Finally, once they've
              finished the shopping process, they can also review their order
              history.
            </Typography>

            <Typography lineHeight="1.5rem" fontSize="16px" textAlign="left">
              <Typography fontWeight="600" fontSize="18px">
                2- Admin Site:
              </Typography>
              This is where administrators have the controls to manage the site.
              They can view, create, edit and delete products, categories and
              admins. In addition to this, they can also check order details and
              edit order status.
            </Typography>

            <Typography lineHeight="1.5rem" textAlign="left" fontSize="16px">
              <Typography fontWeight="600" fontSize="18px">
                3-API Rest:
              </Typography>
              This site is in charge of receiving and sending the requested
              information.
            </Typography>
          </Grid>
        </Grid>
      </Container>

      <Container>
        <Divider
          sx={{
            my: "30px",
          }}
        />
        <Grid
          justifyContent="center"
          container
          rowSpacing={{ xs: 0, md: 2 }}
          columnSpacing={2}
        >
          <Grid item xs={12} md={4} display="flex" justifyContent="center">
            <Card sx={cardStyles}>
              <CardContent>
                <Typography
                  sx={{ fontSize: 14, fontWeight: "bold" }}
                  color="text.secondary"
                >
                  Challenges
                </Typography>
                <Divider />

                <Typography pt="30px" variant="body2">
                  Our main challenge was to create and design the whole web
                  experience in just 3 weeks. At the beginning, we thought that
                  working from home could limit us from crafting a great
                  product, but we’ve discovered that our workflow was very fluid
                  and faster than we actually anticipated, overcoming any
                  potential obstacles efficiently.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4} display="flex" justifyContent="center">
            <Card sx={cardStyles}>
              <CardContent>
                <Typography
                  sx={{ fontSize: 14, fontWeight: "bold" }}
                  color="text.secondary"
                >
                  Organization
                </Typography>
                <Divider />

                <Typography pt="30px" variant="body2">
                  We defined a sprint per week and we followed the Trello
                  pendings list to comply accordingly with the corresponding
                  time frame. We’ve also developed a very cohesive feedback
                  communication flow, which enhanced our team’s progress
                  efforts. We’ve also updated Trello continuously to better
                  picture our desired project goals.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4} display="flex" justifyContent="center">
            <Card sx={cardStyles}>
              <CardContent>
                <Typography
                  sx={{ fontSize: 14, fontWeight: "bold" }}
                  color="text.secondary"
                >
                  Technologies
                </Typography>
                <Divider />

                <Box display="flex" variant="body2" pt="30px">
                  <br />
                  <Box>
                    <ListItem>
                      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M0 32v448h448V32H0zm243.8 349.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z"></path>
                  </svg> */}
                      Javascript
                    </ListItem>
                    <ListItem>
                      {/* <CssIcon /> */}
                      CSS
                    </ListItem>

                    <ListItem>
                      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z"></path>
                  </svg> */}
                      React.js
                    </ListItem>
                    <ListItem>Mongoose</ListItem>
                    <ListItem>
                      {/* <svg viewBox="0 0 35 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.634 16.504c.87-.075 1.543-.84 1.5-1.754-.047-.914-.796-1.648-1.709-1.648h-.061a1.71 1.71 0 00-1.648 1.769c.03.479.226.869.494 1.153-1.048 2.038-2.621 3.536-5.005 4.795-1.603.838-3.296 1.154-4.944.93-1.378-.195-2.456-.81-3.116-1.799-.988-1.499-1.078-3.116-.255-4.734.6-1.17 1.499-2.023 2.099-2.443a9.96 9.96 0 01-.42-1.543C-.868 14.408-.416 18.752.932 20.805c1.004 1.498 3.057 2.456 5.304 2.456.6 0 1.23-.044 1.843-.194 3.897-.749 6.848-3.086 8.541-6.532zm5.348-3.746c-2.32-2.728-5.738-4.226-9.634-4.226h-.51c-.253-.554-.837-.899-1.498-.899h-.045c-.943 0-1.678.81-1.647 1.753.03.898.794 1.648 1.708 1.648h.074a1.69 1.69 0 001.499-1.049h.555c2.309 0 4.495.674 6.488 1.992 1.527 1.005 2.622 2.323 3.237 3.897.538 1.288.509 2.547-.045 3.597-.855 1.647-2.294 2.517-4.196 2.517-1.199 0-2.367-.375-2.967-.644-.36.298-.96.793-1.394 1.093 1.318.598 2.652.943 3.94.943 2.922 0 5.094-1.647 5.919-3.236.898-1.798.824-4.824-1.47-7.416zM6.49 17.042c.03.899.793 1.648 1.708 1.648h.06a1.688 1.688 0 001.648-1.768c0-.9-.779-1.647-1.693-1.647h-.06c-.06 0-.15 0-.226.029-1.243-2.098-1.768-4.347-1.572-6.772.12-1.828.72-3.417 1.797-4.735.9-1.124 2.593-1.68 3.747-1.708 3.236-.061 4.585 3.971 4.689 5.574l1.498.45C17.741 3.197 14.686.62 11.764.62 9.02.62 6.49 2.613 5.47 5.535 4.077 9.43 4.991 13.177 6.7 16.174c-.15.195-.24.539-.21.868z"></path>
                  </svg> */}
                      Redux
                    </ListItem>
                  </Box>
                  <Box>
                    <ListItem>
                      {/* <svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    role="img"
                    width="1em"
                    height="1em"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 35 24"
                  >
                    <path
                      fill="currentColor"
                      d="M24 18.588a1.529 1.529 0 0 1-1.895-.72l-3.45-4.771l-.5-.667l-4.003 5.444a1.466 1.466 0 0 1-1.802.708l5.158-6.92l-4.798-6.251a1.595 1.595 0 0 1 1.9.666l3.576 4.83l3.596-4.81a1.435 1.435 0 0 1 1.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 0 0 0 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27c1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 0 0 2.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 0 1-2.589 3.957a6.272 6.272 0 0 1-7.306-.933a6.575 6.575 0 0 1-1.64-3.858c0-.235-.08-.455-.134-.666A88.33 88.33 0 0 1 0 11.577zm1.127-.286h9.654c-.06-3.076-2.001-5.258-4.59-5.278c-2.882-.04-4.944 2.094-5.071 5.264z"
                    ></path>
                  </svg> */}
                      Express
                    </ListItem>
                    <ListItem>
                      {/* <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1400 512"
                  >
                    <path d="M224 508c-6.7 0-13.5-1.8-19.4-5.2l-61.7-36.5c-9.2-5.2-4.7-7-1.7-8 12.3-4.3 14.8-5.2 27.9-12.7 1.4-.8 3.2-.5 4.6.4l47.4 28.1c1.7 1 4.1 1 5.7 0l184.7-106.6c1.7-1 2.8-3 2.8-5V149.3c0-2.1-1.1-4-2.9-5.1L226.8 37.7c-1.7-1-4-1-5.7 0L36.6 144.3c-1.8 1-2.9 3-2.9 5.1v213.1c0 2 1.1 4 2.9 4.9l50.6 29.2c27.5 13.7 44.3-2.4 44.3-18.7V167.5c0-3 2.4-5.3 5.4-5.3h23.4c2.9 0 5.4 2.3 5.4 5.3V378c0 36.6-20 57.6-54.7 57.6-10.7 0-19.1 0-42.5-11.6l-48.4-27.9C8.1 389.2.7 376.3.7 362.4V149.3c0-13.8 7.4-26.8 19.4-33.7L204.6 9c11.7-6.6 27.2-6.6 38.8 0l184.7 106.7c12 6.9 19.4 19.8 19.4 33.7v213.1c0 13.8-7.4 26.7-19.4 33.7L243.4 502.8c-5.9 3.4-12.6 5.2-19.4 5.2zm149.1-210.1c0-39.9-27-50.5-83.7-58-57.4-7.6-63.2-11.5-63.2-24.9 0-11.1 4.9-25.9 47.4-25.9 37.9 0 51.9 8.2 57.7 33.8.5 2.4 2.7 4.2 5.2 4.2h24c1.5 0 2.9-.6 3.9-1.7s1.5-2.6 1.4-4.1c-3.7-44.1-33-64.6-92.2-64.6-52.7 0-84.1 22.2-84.1 59.5 0 40.4 31.3 51.6 81.8 56.6 60.5 5.9 65.2 14.8 65.2 26.7 0 20.6-16.6 29.4-55.5 29.4-48.9 0-59.6-12.3-63.2-36.6-.4-2.6-2.6-4.5-5.3-4.5h-23.9c-3 0-5.3 2.4-5.3 5.3 0 31.1 16.9 68.2 97.8 68.2 58.4-.1 92-23.2 92-63.4z"></path>
                  </svg> */}
                      Node.js
                    </ListItem>
                    <ListItem>
                      {/* <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.2em"
                    height="1.2em"
                    viewBox="0 0 172 172"
                  >
                    <g
                      stroke-width="1"
                      stroke-linecap="butt"
                      stroke-linejoin="miter"
                      stroke-miterlimit="10"
                    >
                      <path d="M0,172v-172h172v172z" fill="none"></path>
                      <g fill="#000000">
                        <path d="M78.4965,113.84967l9.32025,-9.761l9.31667,9.761v40.23367h-18.63692z"></path>
                        <path d="M63.55758,104.1245l13.27625,-2.41875l1.80242,13.373l-23.65,32.551l-15.07508,-10.95783z"></path>
                        <path d="M57.19717,87.46558l12.15825,5.848l-6.39983,11.87875l-38.26642,12.43058l-5.75842,-17.72317z"></path>
                        <path d="M61.834,70.25842l6.39983,11.87875l-12.15825,5.848l-38.26642,-12.43417l5.75842,-17.72675z"></path>
                        <path d="M75.7015,59.0605l-1.80242,13.373l-13.27625,-2.41875l-23.65,-32.551l15.07867,-10.95425z"></path>
                        <path d="M93.5035,58.15033l-9.32025,9.761l-9.31667,-9.761v-40.23367h18.63692z"></path>
                        <path d="M108.43883,67.87908l-13.27267,2.41875l-1.80242,-13.373l23.64642,-32.551l15.07867,10.95425z"></path>
                        <path d="M114.80642,84.53083l-12.16183,-5.848l6.39983,-11.87875l38.26642,-12.43058l5.75842,17.72317z"></path>
                        <path d="M110.166,101.74158l-6.39983,-11.87875l12.15825,-5.84442l38.26642,12.43058l-5.75842,17.72675z"></path>
                        <path d="M96.2985,112.9395l1.806,-13.373l13.27267,2.41875l23.65,32.551l-15.07867,10.95425z"></path>
                      </g>
                    </g>
                  </svg> */}
                      JWToken
                    </ListItem>
                    <ListItem>Material UI</ListItem>

                    <ListItem>others...</ListItem>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
<<<<<<< HEAD
      </Container>

      <Box
        width="90%"
        display="flex"
        alignItems="flex-end"
        flexDirection="column"
        mt="30px"
        mb="20px"
      >
        <Box sx={{ textAlign: "left" }}>
          <Typography variant="h5">Credentials</Typography>

          <Typography
            sx={{
              mb: "1rem",
              fontSize: "15px",
              fontWeight: "bold",
              textAlign: "left",
            }}
          >
            For full access use the following credentials:
          </Typography>
          <Typography
            sx={{
              fontSize: "13px",
              fontWeight: "600",
              pb: "10px",
            }}
          >
            Email: user@user.com / Password:1234
          </Typography>
          <Typography
            sx={{
              fontSize: "15px",
              fontWeight: "bold",
            }}
          >
            Access to the CRUD - ADMIN site
          </Typography>

          <Button
            sx={{ color: "#7B8723" }}
            onClick={() => {
              window.open(process.env.REACT_APP_ADMIN_URL, "_blank");
            }}
          >
            ADMIN
          </Button>
          <Typography
            sx={{
              fontSize: "13px",
              fontWeight: "bold",
              mb: "1rem",
            }}
          >
            For a better experience, please reset the database:
          </Typography>
          <Button variant="outlined">Reset DataBase</Button>
        </Box>
      </Box>
=======
        <Grid
          container
          marginY="2rem"
          justifyContent={{ md: "flex-end", xs: "center" }}
        >
          <Grid item xs={12} md={4} display="flex" justifyContent="center">
            <Box textAlign="left">
              <Typography variant="h5">Credentials</Typography>
              <Typography
                sx={{
                  mb: "1rem",
                  fontSize: "15px",
                  fontWeight: "bold",
                  textAlign: "left",
                }}
              >
                For full access use the following credentials:
              </Typography>
              <Typography
                sx={{
                  fontSize: "13px",
                  fontWeight: "600",
                  pb: "10px",
                }}
              >
                Email: user@user.com / Password:1234
              </Typography>
              <Typography
                sx={{
                  fontSize: "15px",
                  fontWeight: "bold",
                }}
              >
                Access to the CRUD - ADMIN site
              </Typography>

              <Button
                variant="outlined"
                size="small"
                sx={{
                  color: "#7B8723",
                  my: "1rem",
                }}
                onClick={() => {
                  window.open(process.env.REACT_APP_ADMIN_URL, "_blank");
                }}
              >
                ADMIN
              </Button>
              <Typography
                sx={{
                  fontSize: "13px",
                  fontWeight: "bold",
                  mb: "1rem",
                }}
              >
                For a better experience, please reset the database:
              </Typography>
              <Button variant="outlined">Reset DataBase</Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
>>>>>>> f3c00793cc441bb17972d65b3c675b372f5ec827
    </>
  );
};

export default AboutUs;
