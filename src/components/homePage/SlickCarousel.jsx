import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import { Box, Button, Typography } from "@mui/material";
import "./slickCarousel.css";
import { useTheme } from "@emotion/react";
import { addItemToCart } from "../../Redux/cart/slice";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const SlickCarousel = ({ starredProducts }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const addToCart = (product) => {
    dispatch(addItemToCart({ ...product, qty: 1 }));
  };

  const theme = useTheme();
  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    centerMode: true,
    adaptiveHeight: true,
    appendDots: (dots) => <ul style={{ padding: "1rem" }}>{dots}</ul>,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  if (starredProducts.length === 0) return <></>;

  return (
    <Slider {...settings}>
      {starredProducts.map((product) => {
        const imageUrl =
          process.env.REACT_APP_IMAGE_HOSTING_URL + product.imgUrl[0];
        console.log(imageUrl);
        return (
          <Box
            className="carouselBox"
            key={product.name}
            onClick={() => navigate(`/product/${product.slug}`)}
          >
            <Box p={1}>
              <img
                src={
                  !product.imgUrl[0]
                    ? require("../../assets/images/img-placeholder.png")
                    : imageUrl
                }
                alt={product.name}
              />
            </Box>
            <Box>
              <Typography
                variant="h6"
                fontSize="1.2rem"
                sx={{
                  height: "4rem",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {product.name}
              </Typography>
            </Box>
            <Box>
              <Button
                disableElevation
                color="primary"
                sx={{
                  mb: "1rem",
                  width: "100%",
                  borderRadius: "10px",
                  border: `2px solid ${theme.palette.primary.light}`,
                }}
                onClick={() => addToCart(product)}
                variant="contained"
              >
                <AddShoppingCartIcon />
                <Typography
                  variant="p"
                  sx={{
                    fontSize: "1rem",
                    fontWeight: "700",
                  }}
                >
                  Add to cart
                </Typography>
              </Button>
            </Box>
          </Box>
        );
      })}
    </Slider>
  );
};

export default SlickCarousel;
