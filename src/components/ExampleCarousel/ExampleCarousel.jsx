import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Box } from "@mui/material";
import { useSelector } from "react-redux";

function ExampleCarousel(props) {
  const product = useSelector((state) => state.products);
  var items = product.imgUrl;

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      <Carousel
        indicators={false}
        sx={{
          width: "100%",
        }}
      >
        {items.map((img, i) => (
          <Box sx={{ maxWidth: "400px", maxHeight: "600px" }}>
            <img srcset={img} style={{ width: "100%", objectFit: "cover" }} />
          </Box>
        ))}
      </Carousel>
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
