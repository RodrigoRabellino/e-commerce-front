import React from "react";
import Carousel from "react-material-ui-carousel";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import {
  Paper,
  Button,
  Grid,
  CardHeader,
  Avatar,
  IconButton,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
} from "@mui/material";
import { starredProducts } from "./HomePage";
import { Card } from "react-bootstrap";
import { Box } from "@mui/system";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../Redux/cart/slice";

function MyCarousel({ starredProducts }) {
  return (
    <Carousel>
      {starredProducts.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}

function Item(props) {
  const dispatch = useDispatch();
  const addToCart = (item) => {
    dispatch(addItemToCart(item));
  };
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        title={props.item.name}
        sx={{
          backgroundColor: "#BF8832",
          color: "#F2DBB8",
        }}
      />
      <Grid
        item
        width="100%"
        height={250}
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <CardMedia
          sx={{ objectFit: "contain", height: "90%", margin: "auto" }}
          component="img"
          image={props.item.imgUrl}
          alt={props.item.name}
        />
      </Grid>
      <CardContent
        sx={{
          backgroundColor: "#BF8832",
          height: "90px",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        <Typography variant="p" color="#F2DBB8">
          {props.item.description}
        </Typography>
      </CardContent>
      <CardActions sx={{ backgroundColor: "#BF8832" }}>
        <Grid container>
          <Box flex={1}>
            {" "}
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
          </Box>
          <Box flex={1}>
            <Button
              variant="contained"
              onClick={() => addToCart(props.item)}
              sx={{ backgroundColor: "#F2DBB8", color: "#BF8832" }}
            >
              Add to cart
            </Button>
          </Box>
        </Grid>
      </CardActions>
    </Card>
  );
}

export default MyCarousel;
