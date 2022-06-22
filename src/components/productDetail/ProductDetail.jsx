import { Grid, Typography, Button, Box, Link, Container } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import { Block } from "@mui/icons-material";
import { useSelector } from "react-redux";

function ProductDetail() {
  // const Item = [
  //   {
  //     name: "Random Name #1",
  //     description: "Probably the most random thing you have ever seen!",
  //   },
  // ];

  // const items = [
  //   {
  //     name: "Random Name #1",
  //     description: "Probably the most random thing you have ever seen!",
  //   },
  //   {
  //     name: "Random Name #2",
  //     description: "Hello World!",
  //   },
  //   {
  //     name: "Random Name #3",
  //     description: "Hello World!",
  //   },
  //   {
  //     name: "Random Name #4",
  //     description: "Hello World!",
  //   },
  // ];

  const product = useSelector((state) => state.products);
  console.log(product);

  return (
    <Container maxWidth="lg">
      <Grid
        sx={{
          marginTop: "80px",
          p: 5,
        }}
        spacing={2}
      >
        <Grid item>
          <img src={product.imgUrl[0]} style={{ width: "500px" }} />
          {/* <> */}
          {/* <Carousel>
            {items.map((item, i) => (
              <Item key={i} item={item} />
            ))}
          </Carousel>
        </> */}
        </Grid>
        <Grid>
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
          <Button variant="contained">Add to cart</Button>

          <Typography
            sx={{
              fontSize: "17px",
              marginTop: "30px",
              float: "left",
              fontWeight: "bold",
              marginTop: "50px",
            }}
            variant="h5"
          >
            Origin
          </Typography>
          <Typography
            sx={{ paddingTop: "40px", paddingBottom: "10px", fontSize: "15px" }}
            variant="h6"
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </Typography>

          <Typography
            sx={{
              fontSize: "17px",
              marginTop: "30px",
              float: "left",
              fontWeight: "bold",
              marginTop: "6px",
            }}
            variant="h5"
          >
            Dimension
          </Typography>
          <Typography
            sx={{ paddingTop: "29px", paddingBottom: "10px", fontSize: "15px" }}
            variant="h6"
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </Typography>
          <Typography
            sx={{
              fontSize: "17px",
              marginTop: "30px",
              float: "left",
              fontWeight: "bold",
              marginTop: "6px",
            }}
            variant="h5"
          >
            Material
          </Typography>
          <Typography
            sx={{ paddingTop: "29px", paddingBottom: "10px", fontSize: "15px" }}
            variant="h6"
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </Typography>
          <Typography
            sx={{
              fontSize: "17px",
              marginTop: "30px",
              float: "left",
              fontWeight: "bold",
              marginTop: "6px",
            }}
            variant="h5"
          >
            Color
          </Typography>
          <Typography
            sx={{ paddingTop: "29px", paddingBottom: "10px", fontSize: "15px" }}
            variant="h6"
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </Typography>
          <Link
            sx={{ paddingTop: "15px", cursor: "pointer", marginLeft: "200px" }}
            href="#"
          >
            Add to Wish List +
          </Link>
        </Grid>
      </Grid>
    </Container>
  );
}

export default ProductDetail;
