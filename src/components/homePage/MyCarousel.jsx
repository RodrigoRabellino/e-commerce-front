import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";

function MyCarousel(props) {
  var items = [
    {
      name: "Random Name #1",
      description: "Probably the most random thing you have ever seen!",
    },
    {
      name: "Random Name #2",
      description: "Hello World!",
    },
    {
      name: "Random Name #3",
      description: "Hello World!",
    },
    {
      name: "Random Name #4",
      description: "Hello World!",
    },
  ];

  return (
    <Carousel
      sx={{
        marginTop: "200px",
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
    <Paper sx={{ height: "300px" }}>
      <h2>{props.item.name}</h2>
      <p>{props.item.description}</p>

      <Button className="CheckButton">More Details</Button>
    </Paper>
  );
}

export default MyCarousel;
