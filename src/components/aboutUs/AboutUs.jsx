import {
  Typography,
  Box,
  Container,
  Button,
  Avatar,
  Stack,
} from "@mui/material";

function AboutUs() {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#F2DBB8",
          height: "200px",
        }}
      >
        <Stack
          sx={{
            marginTop: "200px",
            marginLeft: "270px",
            paddingTop: "40px",
          }}
          direction="row"
          spacing={2}
        >
          <Avatar
            sx={{ height: "150px", width: "150px" }}
            alt="Remy Sharp"
            srcSet=""
          />
          <Avatar
            sx={{ height: "150px", width: "150px" }}
            alt="Travis Howard"
            srcSet="../../../public/man1.webp"
          />
          <Avatar
            sx={{ height: "150px", width: "150px" }}
            alt="Cindy Baker"
            src="../../../public/man2.webp"
          />
          <Avatar
            sx={{ height: "150px", width: "150px" }}
            alt="Cindy Baker"
            src="../../../public/man 3.webp"
          />
        </Stack>
      </Box>

      <hr />
      <Typography
        sx={{
          fontSize: "30px",
          fontWeight: "bold",
          marginBottom: "20px",
          marginTop: "10px",
          color: "#8C5032",
        }}
        variant="h4"
      >
        About Us
      </Typography>
      <Typography sx={{ fontSize: "15px" }} variant="h5">
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
          marginLeft: "580px",
          marginTop: "20px",
          textDecoration: "underline",
        }}
      >
        Accede como cliente usando las siguientes credenciales:
      </Typography>
      <Typography sx={{ marginLeft: "580px", fontSize: "13px" }}>
        Email:/Password:
      </Typography>
      <Typography sx={{ marginLeft: "580px", fontSize: "13px" }}>
        O dirígete a la página de ADMIN para tener acceso total al CRUD.
      </Typography>
      <Typography
        sx={{
          marginLeft: "580px",
          fontSize: "13px",
          fontWeight: "bold",
        }}
      >
        Para una mejor experiencia, por favor resetear la base de datos:
      </Typography>
      <Button
        sx={{ marginLeft: "810px", marginTop: "15px" }}
        variant="contained"
      >
        Reset DataBase
      </Button>
    </>
  );
}

export default AboutUs;
