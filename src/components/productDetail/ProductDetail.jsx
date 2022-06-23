import { Grid, Typography, Button, Box, Link } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import { Block } from "@mui/icons-material";
import ProductCarousel from "../productDetail/ProductCarousel";

function ProductDetail() {
  return (
    <Grid
      sx={{
        marginTop: "80px",
      }}
      container
      spacing={2}
    >
      <Grid item lg="auto">
        <img
          style={{
            marginLeft: "250px",
            marginTop: "80px",
            marginBottom: "30px",
            width: "300px",
            height: "370px",
            borderRadius: "20px",
          }}
          src="https://images.unsplash.com/photo-1605020420620-20c943cc4669?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Z3VpdGFyfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
        />
        <ProductCarousel />
      </Grid>
      <Grid sx={{ marginLeft: "300px" }} item lg="auto">
        <Typography
          sx={{ fontSize: "40px", marginBottom: "35px" }}
          variant="h3"
        >
          Title
          <h4 sx={{}}>$150</h4>
        </Typography>
        <Typography variant="h4">Product introduction</Typography>
        <Typography sx={{ fontSize: "15px" }} variant="h5"></Typography>
        <hr />

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
  );
}

export default ProductDetail;
