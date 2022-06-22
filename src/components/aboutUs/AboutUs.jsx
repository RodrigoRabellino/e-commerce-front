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
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
function AboutUs() {
  const avatarStyles = {
    height: "190px",
    width: "190px",
    ":hover": { transition: "0.2s" },
  };
  const cardStyles = {
    width: "200px",
    height: "200px",
    ":hover": { transition: "0.2s", background: "#BF8832" },
    boxShadow: "0 5px 10px 0",
  };
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#e8c084",
          height: "300px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          marginTop: "80px",
        }}
      >
        <Stack
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
              <IconButton aria-label="LinkedInIcon">
                <LinkedInIcon />
              </IconButton>
              <IconButton aria-label="GitHubIcon">
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
              <IconButton aria-label="LinkedInIcon">
                <LinkedInIcon />
              </IconButton>
              <IconButton aria-label="GitHubIcon">
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
              <IconButton aria-label="LinkedInIcon">
                <LinkedInIcon />
              </IconButton>
              <IconButton aria-label="GitHubIcon">
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
              <IconButton aria-label="LinkedInIcon">
                <LinkedInIcon />
              </IconButton>
              <IconButton aria-label="GitHubIcon">
                <GitHubIcon />
              </IconButton>
            </Box>
          </Box>
        </Stack>
      </Box>

      <Typography
        sx={{
          fontSize: "30px",
          fontWeight: "bold",
          marginBottom: "15px",
          marginTop: "20px",
          color: "#8C5032",
        }}
        variant="h4"
      >
        About Us
      </Typography>
      <hr />
      <Typography
        sx={{ fontSize: "15px", marginBottom: "30px", margin: "40px" }}
        variant="h5"
      >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati
        distinctio maxime sint praesentium dolorem illum, quo alias odit
        aspernatur minima soluta reiciendis earum natus porro atque fugit
        debitis sit velit.Lorem ipsum dolor sit amet consectetur, adipisicing
        elit. Obcaecati distinctio maxime sint praesentium dolorem illum, quo
        alias odit aspernatur minima soluta reiciendis earum natus porro atque
        fugit debitis sit velit.Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Obcaecati distinctio maxime sint praesentium dolorem
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati
        distinctio maxime sint praesentium dolorem illum, quo alias odit
        aspernatur minima soluta reiciendis earum natus porro atque fugit
        debitis sit velit.Lorem ipsum dolor sit amet consectetur, adipisicing
        elit. Obcaecati distinctio maxime sint praesentium dolorem illum, quo
        alias odit aspernatur minima soluta reiciendis earum natus porro atque
        fugit debitis sit velit.Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Obcaecati distinctio maxime sint praesentium dolorem
      </Typography>
      <Typography
        sx={{
          fontSize: "15px",
          fontWeight: "bold",
          marginLeft: "780px",
          marginTop: "50px",
          textDecoration: "underline",
        }}
      >
        Accede como cliente usando las siguientes credenciales:
      </Typography>
      <Typography sx={{ marginLeft: "780px", fontSize: "13px" }}>
        Email:/Password:
      </Typography>
      <Typography sx={{ marginLeft: "780px", fontSize: "13px" }}>
        O dirígete a la página de ADMIN para tener acceso total al CRUD.
      </Typography>
      <Typography
        sx={{
          marginLeft: "780px",
          fontSize: "13px",
          fontWeight: "bold",
        }}
      >
        Para una mejor experiencia, por favor resetear la base de datos:
      </Typography>
      <Button
        sx={{ marginLeft: "810px", marginTop: "35px", marginBottom: "35px" }}
        variant="contained"
      >
        Reset DataBase
      </Button>
      <Divider />
      <Box
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "space-evenly",
          marginBottom: "30px",
          marginTop: "20px",
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
            <hr />

            <Typography variant="body2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim
              <br />
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
              <br />
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
      </Box>
    </>
  );
}

export default AboutUs;
