import { Container, Grid, Box, Typography, Divider } from "@mui/material";
import React, { useEffect, useState } from "react";
import { fetchStarredProducts } from "../../services/apiServices";
import GridCategories from "../gridCategories/GridCategories";
// import ExampleCarousel from "../../components/ExampleCarousel/ExampleCarousel";
import MyCarousel from "./MyCarousel";
import { useTheme } from "@emotion/react";

import "./HomePage.css";

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
    <>
      <section>
        <Box
          sx={{
            width: "100vw",

            backgroundColor: theme.palette.primary.light,
          }}
        >
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
                height: "500px",
              }}
            />
          </Box>
        </Box>
      </section>
      <Box>
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
      </Box>

      <Box sx={{ paddingY: "3rem", marginY: "3rem" }}>
        <GridCategories />
      </Box>
      <section className="parallax">
        <Box className="parallax-inner" sx={{ marginBottom: "3rem" }}>
          <h3 className="title-parallax">Lorem Impsum</h3>
        </Box>
      </section>
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
    </>
  );
};

export default HomePage;
