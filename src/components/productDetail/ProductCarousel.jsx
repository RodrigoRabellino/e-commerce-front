import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";

function MyCarousel(props) {
  var items = [
    {
      name: "Photo#1",
    },
    {
      name: "Photo#2",
    },
    {
      name: "Photo#3",
    },
    {
      name: "Photo#4",
    },
  ];

  return (
    <Carousel
      sx={{
        marginLeft: "250px",
        marginBottom: "30px",
      }}
    >
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
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

export default MyCarousel;
