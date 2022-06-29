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
  useTheme,
} from "@mui/material";

import { Card } from "react-bootstrap";
import { Box } from "@mui/system";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../Redux/cart/slice";

function MyCarousel({ starredProducts }) {
  return (
    <Carousel
      sx={{
        borderRadius: "15px",
      }}
    >
      {starredProducts.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}

function Item(props) {
  const theme = useTheme();
  const dispatch = useDispatch();
  const addToCart = (item) => {
    dispatch(addItemToCart(item));
  };
  return (
    <Card>
      <CardHeader
        title={props.item.name}
        sx={{
          backgroundColor: theme.palette.primary.main,
          color: "white",
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
          image={props.item.imgUrl[0]}
          alt={props.item.name}
        />
      </Grid>
      <CardContent
        sx={{
          backgroundColor: theme.palette.primary.main,
          height: "90px",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        <Typography variant="p" color="white">
          {props.item.description}
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          backgroundColor: theme.palette.primary.main,
          borderEndEndRadius: "15px",
          borderEndStartRadius: "15px",
        }}
      >
        <Grid container>
          <Box flex={1}>
            {" "}
            <IconButton aria-label="add to favorites">
              <FavoriteIcon sx={{ color: theme.palette.primary.dark }} />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon sx={{ color: theme.palette.primary.dark }} />
            </IconButton>
          </Box>
          <Box flex={1}>
            <Button
              variant="contained"
              onClick={() => addToCart(props.item)}
              sx={{ backgroundColor: theme.palette.primary.dark }}
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
