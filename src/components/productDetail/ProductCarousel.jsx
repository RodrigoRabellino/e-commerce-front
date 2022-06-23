import ImageGallery from "react-image-gallery";
import "./productCarousel.module.css";
import React from "react";
import { Box } from "@mui/material";

const images = [
  {
    original: "https://picsum.photos/id/1018/1000/600/",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
];

class ProductCarousel extends React.Component {
  render() {
    return (
      <Box sx={{ width: "100vw", height: "100vh", backgroundColor: "red" }}>
        <ImageGallery
          originalHeight={"auto"}
          items={images}
          showPlayButton={false}
          infinite={true}
          showBullets={true}
          showFullscreenButton={true}
          showIndex={false}
          showNav={true}
          showThumbnails={true}
          useWindowKeyDown={true}
        />
      </Box>
    );
  }
}

export default ProductCarousel;
