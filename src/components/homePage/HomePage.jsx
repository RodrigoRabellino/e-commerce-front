import { Container, Grid, Box, Typography, Divider } from "@mui/material";

import React, { useEffect, useState } from "react";
import { fetchStarredProducts } from "../../services/apiServices";
<<<<<<< Updated upstream
import GridCategories from "../gridCategories/GridCategories";
import ExampleCarousel from "../../components/ExampleCarousel/ExampleCarousel";
import MyCarousel from "./MyCarousel";
import { useTheme } from "@emotion/react";
=======
import GridCategories from "../../components/gridCategories/GridCategories";

import "./HomePage.css";
>>>>>>> Stashed changes

const HomePage = () => {
  const [starredProducts, setStarredProducts] = useState([]);

  useEffect(() => {
    const getstarredProducts = async () => {
      const response = await fetchStarredProducts();
      setStarredProducts([...response]);
    };
    getstarredProducts();
  }, []);
  const theme = useTheme();

  return (
<<<<<<< Updated upstream
    <Box
      sx={{
        width: "100vw",
        minHeight: "100vh",
        backgroundColor: theme.palette.primary.light,
      }}
    >
      <section>
        <Box
          sx={{
            width: "100%",
            height: "500px",
          }}
        >
          <img
            srcSet={require("../../assets/images/acousticguitar.jpg")}
            style={{
=======
    <>
      <Box>
        <section>
          <Box
            sx={{
>>>>>>> Stashed changes
              width: "100%",
              height: "500px",
            }}
          >
            <img
              srcSet={require("../../assets/images/acousticguitar.jpg")}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                opacity: 0.8,
              }}
            />
          </Box>
        </section>
      </Box>
      <Box>
<<<<<<< Updated upstream
        <Typography
          fontWeight="600"
          marginTop="50px"
          variant="h3"
          color={theme.palette.primary.dark}
        >
          Music Inspires
        </Typography>
        <Typography
          variant="h5"
          sx={{ marginTop: "20px" }}
          color={theme.palette.primary.dark}
        >
          Life without playing music is inconceivable for me.
        </Typography>
=======
        <Container>
          <Typography fontWeight="600" marginTop="50px" variant="h4">
            Music Inspires
          </Typography>
          <Typography variant="h6" sx={{ marginTop: "0.4rem" }}>
            Life without playing music is inconceivable for me.
          </Typography>
          <Divider sx={{ marginTop: "0.8rem" }}></Divider>
        </Container>
>>>>>>> Stashed changes
      </Box>

      <Box sx={{ paddingY: "3rem", marginY: "3rem" }}>
        <GridCategories />
      </Box>
<<<<<<< Updated upstream
      <Grid
        container
        p={2}
        sx={{ paddingBottom: "5rem" }}
        justifyContent="center"
      >
        <Grid item sm={8} md={6}>
          <Typography
            variant="h3"
            color={theme.palette.primary.dark}
            sx={{ marginBottom: "2rem" }}
          >
            Our Featured Products
          </Typography>
          <MyCarousel starredProducts={starredProducts} />
        </Grid>
      </Grid>
    </Box>
=======
    
      <section className="parallax">
        <div className="parallax-inner">
          <h3 className="title-parallax">Lorem Impsum</h3>
        </div>
      </section>

      <Box>
        <Typography>
          <h3>Lorem ipsum</h3>
        </Typography>
      </Box>


    </>
>>>>>>> Stashed changes
  );
};

export default HomePage;
