import { Container, Grid, Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { fetchStarredProducts } from "../../services/apiServices";
import GridCategories from "../gridCategories/GridCategories";
import ExampleCarousel from "../../components/ExampleCarousel/ExampleCarousel";
import MyCarousel from "./MyCarousel";

const HomePage = () => {
  const [starredProducts, setStarredProducts] = useState([]);

  useEffect(() => {
    const getstarredProducts = async () => {
      const response = await fetchStarredProducts();
      setStarredProducts([...response]);
    };
    getstarredProducts();
  }, []);

  return (
    <Box sx={{ width: "100vw", minHeight: "100vh" }}>
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
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </Box>
      </section>
      <Box>
        <Typography
          fontWeight="600"
          marginTop="50px"
          variant="h3"
          color="primary"
        >
          Music Inspires
        </Typography>
        <Typography variant="h5" sx={{ marginTop: "20px" }} color="primary">
          Life without playing music is inconceivable for me.
        </Typography>
      </Box>

      <Box sx={{ paddingY: "3rem", marginY: "3rem" }}>
        <GridCategories />
      </Box>
      <Container p={2} sx={{ marginBottom: "5rem" }}>
        <Typography variant="h3" sx={{ marginBottom: "2rem" }}>
          Our Featured Products
        </Typography>
        <MyCarousel starredProducts={starredProducts} />
      </Container>
    </Box>
  );
};

export default HomePage;
