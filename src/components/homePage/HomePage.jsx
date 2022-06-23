import { Container, Grid, Box } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { fetchStarredProducts } from "../../services/apiServices";
import ProductCard from "../storePage/productCard/ProductCard";

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
    <>
      <Container maxWidth="lg">
        <Grid
          item
          sx={{
            position: "relative",
            width: "%100",
            height: "50vh",
            top: "5rem",
          }}
        >
          <h1>Slider con los productos starred=true</h1>
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
        </Grid>
      </Container>
    </>
  );
};

export default HomePage;
