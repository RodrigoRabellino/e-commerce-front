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
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import "./aboutUs.css";

const AboutUs = () => {
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
          <Box sx={{ ...avatarBoxStyle }}>
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
              ...avatarBoxStyle,
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
              ...avatarBoxStyle,
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
              ...avatarBoxStyle,
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
        <Grid container p={5}>
          <Grid item xs={7}>
            <Typography fontSize="15px" textAlign="start" variant="h5">
              Este proyecto se encuentra enfocado en la realización de la
              entrega final del curso del Coding Bootcamp de Hack Academy. Se
              llevó a cabo durante 3 semanas, donde cada integrante le dedicó un
              aproximado de 190 horas. Se organiza en 3 partes, la primera es la
              interfaz de usuario donde los posibles clientes pueden visualizar
              los productos a la venta, acceder a listados filtrados por
              categoría, agregar y quitar productos del carrito, completar la
              orden una vez logueados y acceder a la lista de compras
              realizadas. La segunda parte consiste en un panel de control para
              los administradores del sitio. Aquí se puede ver, crear, editar y
              eliminar productos, categorías y administradores. También se puede
              editar el estado de las órdenes y ver el detalle de las mismas.
              Por último tenemos una API REST, encargada de recibir y enviar la
              información solicitada, almacenándola en la base de datos. Nuestro
              objetivo era crear una tienda luthier de guitarras y accesorios
              donde el cliente fácilmente pudiera ingresar, seleccionar un
              producto de excelente calidad, añadirlo al carrito de compras,
              procesar el pago. También le dimos la posibilidad de ingresar al
              histórico de pedidos realizados. El concepto de diseño, paleta de
              colores, detalles y funcionalidades son todas inspiradas en ideas
              impartidas por el equipo de trabajo referenciandónos en
              instrumentos músicales tales como la guitarra criolla.
            </Typography>
          </Grid>
          <Grid item xs={5}>
            <Typography
              sx={{
                mb: "1rem",
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
                mb: "1rem",
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
