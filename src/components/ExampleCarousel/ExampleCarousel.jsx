import React from "react";
import Carousel from "react-material-ui-carousel";
<<<<<<< Updated upstream
import { Paper, Box } from "@mui/material";
import { useSelector } from "react-redux";

function ExampleCarousel(props) {
  const product = useSelector((state) => state.products);
  var items = product.imgUrl;
=======
import { Paper, Button, Box, CircularProgress } from "@mui/material";
>>>>>>> Stashed changes

function ExampleCarousel({ selectedProduct }) {
  const productImages = selectedProduct.imgUrl;
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      {Object.entries(selectedProduct) === 0 ? (
        <CircularProgress />
      ) : (
        <Carousel
          indicators={false}
          sx={{
            width: "100%",
          }}
        >
          {productImages.length === 0 ? (
            <CircularProgress />
          ) : (
            productImages.map((img, i) => (
              <Box
                key={`img-${i}`}
                sx={{ maxWidth: "400px", maxHeight: "600px" }}
              >
                <img
                  srcSet={img}
                  style={{ width: "100%", objectFit: "cover" }}
                />
              </Box>
            ))
          )}
        </Carousel>
      )}
    </Box>
  );
}

function Item(props) {
  return (
    <Paper sx={{ width: "100%", height: "150px", border: "1px solid #BF8832" }}>
      <h2>{props.item.name}</h2>
      <p>{props.item.description}</p>
    </Paper>
  );
}

export default ExampleCarousel;
