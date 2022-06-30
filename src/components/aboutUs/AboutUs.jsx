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
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import "./aboutUs.css";

const AboutUs = () => {
  const avatarStyles = {
    height: "190px",
    width: "190px",
    ":hover": { transition: "0.2s" },
  };
  const cardStyles = {
    transition: "0.2s",
    width: "200px",
    height: "200px",
    boxShadow: "3px 3px 5px 0 rgb(0,0,0, 0.22)",
    ":hover": {
      transition: "0.5s",
      boxShadow: "3px 3px 5px 0 rgb(0,0,0, 0.44)",
    },
  };
  return (
    <>
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
          sx={{
            display: "flex",
            width: "80%",
            alignItems: "center",
            justifyContent: "center",
          }}
          direction="row"
          spacing={4}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Avatar
              sx={avatarStyles}
              alt="Remy Sharp"
              srcSet={require("../../assets/images/man1.webp")}
            />
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <IconButton aria-label="LinkedInIcon" sx={{ color: "white" }}>
                <LinkedInIcon />
              </IconButton>
              <IconButton aria-label="GitHubIcon" sx={{ color: "white" }}>
                <GitHubIcon />
              </IconButton>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Avatar
              sx={avatarStyles}
              alt="Remy Sharp"
              srcSet={require("../../assets/images/man2.webp")}
            />
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <IconButton aria-label="LinkedInIcon" sx={{ color: "white" }}>
                <LinkedInIcon />
              </IconButton>
              <IconButton aria-label="GitHubIcon" sx={{ color: "white" }}>
                <GitHubIcon />
              </IconButton>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Avatar
              sx={avatarStyles}
              alt="Remy Sharp"
              srcSet={require("../../assets/images/man3.webp")}
            />
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <IconButton aria-label="LinkedInIcon" sx={{ color: "white" }}>
                <LinkedInIcon />
              </IconButton>
              <IconButton aria-label="GitHubIcon" sx={{ color: "white" }}>
                <GitHubIcon />
              </IconButton>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Avatar
              sx={avatarStyles}
              alt="Remy Sharp"
              srcSet={require("../../assets/images/woman1.webp")}
            />

            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <IconButton aria-label="LinkedInIcon" sx={{ color: "white" }}>
                <LinkedInIcon />
              </IconButton>
              <IconButton aria-label="GitHubIcon" sx={{ color: "white" }}>
                <GitHubIcon />
              </IconButton>
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
      <Divider />
      <Container>
        <Grid container>
          <Grid item xs={7}>
            <Typography fontSize="15px" textAlign="start" variant="h5">
              Este proyecto se encuentra enfocado en la realización de la
              entrega final del Bootcamp. Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Accusantium voluptatem vel commodi
              aspernatur nemo eos dolores eius cumque? Vero laudantium
              molestiae, perspiciatis id quam beatae laborum unde odit iste
              animi.
            </Typography>
          </Grid>
          <Grid item xs={5}>
            <Typography
              sx={{
                fontSize: "15px",
                fontWeight: "bold",
                textDecoration: "underline",
              }}
            >
              Accede como cliente usando las siguientes credenciales:
            </Typography>
            <Typography sx={{ fontSize: "13px" }}>
              Email:user@user.com / Password:1234
            </Typography>
            <Typography sx={{ fontSize: "13px" }}>
              O dirígete a la página de ADMIN para tener acceso total al CRUD.
            </Typography>
            <Button
              sx={{
                color: "#7B8723",
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
              }}
            >
              Para una mejor experiencia, por favor resetear la base de datos:
            </Typography>
            <Button variant="outlined">Reset DataBase</Button>
          </Grid>
        </Grid>
      </Container>
      <Divider />
      <Container
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "30px",
          marginTop: "30px",
        }}
      >
        <Card sx={cardStyles}>
          <CardContent>
            <Typography
              sx={{ fontSize: 14, fontWeight: "bold" }}
              color="text.secondary"
            >
              Challenges
            </Typography>
            <Divider />

            <Typography variant="body2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim
            </Typography>
          </CardContent>
        </Card>
        <Card sx={cardStyles}>
          <CardContent>
            <Typography
              sx={{ fontSize: 14, fontWeight: "bold" }}
              color="text.secondary"
            >
              Organization
            </Typography>
            <Divider />

            <Typography variant="body2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim
            </Typography>
          </CardContent>
        </Card>
        <Card sx={cardStyles}>
          <CardContent>
            <Typography
              sx={{ fontSize: 14, fontWeight: "bold" }}
              color="text.secondary"
            >
              Technologies
            </Typography>
            <Divider />

            <Typography variant="body2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim
              <br />
            </Typography>
          </CardContent>
        </Card>
      </Container>
    </>
  );
};

export default AboutUs;
