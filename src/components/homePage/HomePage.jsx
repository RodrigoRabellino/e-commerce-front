<<<<<<< Updated upstream
import { Container, Grid, Box } from "@mui/material";
=======
import { Container, Grid,Box  } from "@mui/material";
import axios from "axios";
>>>>>>> Stashed changes
import React, { useEffect, useState } from "react";
import { fetchStarredProducts } from "../../services/apiServices";
import GridCategories from "../gridCategories/GridCategories";


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
<<<<<<< Updated upstream
          <img
            srcSet={require("../../assets/images/guitar2.jpg")}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </Box>
      </section>

      {/* {starredProducts.map((product) => {
=======
       
        
          {/* {starredProducts.map((product) => {
>>>>>>> Stashed changes
            return (
              <ProductCard
                key={product.id}
                product={product}
                display={viewDisplay}
                onClick={() => console.log(product)}
              />
            );
            
          })} */}

      <Box>
        <GridCategories />
      </Box>
    </Box>
  );
};

export default HomePage;
