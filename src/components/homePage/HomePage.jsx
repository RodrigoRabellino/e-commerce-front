import { Container, Grid, Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { fetchStarredProducts } from "../../services/apiServices";
import GridCategories from "../gridCategories/GridCategories";
import ExampleCarousel from "../../components/ExampleCarousel/ExampleCarousel";

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
        <Typography fontWeight="600" marginTop="50px" variant="h3">
          Music Inspires
        </Typography>
        <Typography variant="h5" sx={{ marginTop: "20px" }}>
          Life without playing music is inconceivable for me.
        </Typography>
      </Box>

      {/* {starredProducts.map((product) => {
            return (
              <ProductCard
                key={product.id}
                product={product}
                display={viewDisplay}
                onClick={() => console.log(product)}
              />
            );
            
          })} */}

      <Box sx={{ paddingY: "3rem" }}>
        <GridCategories />
      </Box>
    </Box>
  );
};

export default HomePage;
