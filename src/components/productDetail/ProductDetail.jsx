import { Grid, Typography, Button, Box, Link, Container } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import { Block } from "@mui/icons-material";
import ExampleCarousel from "../ExampleCarousel/ExampleCarousel";
import { useSelector } from "react-redux";
import QuantityItems from "./QuantityItems";

function ProductDetail() {
  const product = useSelector((state) => state.products);

  return (
    <Container maxWidth="lg">
      <Grid
        container
        sx={{
          marginTop: "80px",
          p: 1,
        }}
        spacing={5}
      >
        <Grid item xs={6}>
          <ExampleCarousel />
          <Box
            sx={{
              display: "flex",
              marginTop: "50px",
              justifyContent: "space-between",
            }}
          >
            <img src={product.imgUrl[0]} style={{ width: "150px" }} />
            <img src={product.imgUrl[1]} style={{ width: "150px" }} />
            <img src={product.imgUrl[2]} style={{ width: "150px" }} />
          </Box>
          {/* <img src={product.imgUrl[0]} style={{ width: "500px" }} /> */}
          {/* <> */}
          {/* <Carousel>
            {items.map((item, i) => (
              <Item key={i} item={item} />
            ))}
          </Carousel>
        </> */}
        </Grid>
        <Grid item xs={6}>
          <Typography
            sx={{ fontSize: "40px", marginBottom: "35px" }}
            variant="h3"
          >
            {product.name}
          </Typography>
          <Typography variant="h4">${product.price}</Typography>

          <Typography variant="h6">Product introduction</Typography>
          <Typography variant="p">{product.description}</Typography>

          <Typography sx={{ fontSize: "15px" }} variant="h5"></Typography>
          <hr />
          <Typography>Stock: {product.stock}</Typography>
          <Typography sx={{ paddingBottom: "30px" }} variant="h6">
            Product Available
          </Typography>
          <Box sx={{ marginBottom: "30px" }}>
            <QuantityItems />
          </Box>

          <Button variant="contained">Add to cart</Button>
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <Link
              sx={{
                paddingTop: "15px",
                cursor: "pointer",
                marginLeft: "70px",
              }}
              href="#"
            >
              Add to Wish List +
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default ProductDetail;
