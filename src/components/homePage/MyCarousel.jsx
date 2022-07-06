import React from "react";

import { Slide } from "react-slideshow-image";
import "./MyCarousel.css";
import "react-slideshow-image/dist/styles.css";

import { Box } from "@mui/system";

const properties = {
  duration: 1000,
  autoplay: false,
  indicators: false,
  cssClass: "mySlider",
  responsive: [
    {
      breakpoint: 1500,
      settings: {
        slidesToShow: 7,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 1300,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 3,
      },
    },

    {
      breakpoint: 1100,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 350,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
      },
    },
  ],
};

function MyCarousel({ starredProducts }) {
  if (starredProducts.length === 0) return <></>;

  return (
    <Box
      sx={{
        backgroundColor: "white",
        boxShadow: 1,
        borderRadius: "10px",
        padding: 2,
        width: "100%",
      }}
    >
      <Slide {...properties} slidesToShow={3}>
        {starredProducts.map((item, i) => {
          return (
            <Box
              key={item._id}
              sx={{
                height: "300px",
                width: "200px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <img srcSet={item.imgUrl[0]} alt="" />
            </Box>
          );
        })}
      </Slide>
    </Box>
  );
}

export default MyCarousel;
