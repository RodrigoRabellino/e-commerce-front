import {
  Grid,
  Typography,
  Button,
  Box,
  Link,
  Container,
  CircularProgress,
} from "@mui/material";
import Carousel from "react-material-ui-carousel";
import { Block } from "@mui/icons-material";
import ExampleCarousel from "../ExampleCarousel/ExampleCarousel";
import { useSelector } from "react-redux";
import QuantityItems from "./QuantityItems";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchOneProduct } from "../../services/apiServices";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../Redux/cart/slice";

function ProductDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [selectedProduct, setSelectedProduct] = useState({});

  useEffect(() => {
    const getProduct = async () => {
      const response = await fetchOneProduct(id);
      setSelectedProduct({ ...response.data });
    };
    getProduct();
  }, []);

  const addToCart = () => {
    console.log(selectedProduct);
    dispatch(addItemToCart(selectedProduct));
  };

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
          {Object.entries(selectedProduct).length === 0 ? (
            <CircularProgress />
          ) : (
            <>
              <ExampleCarousel selectedProduct={selectedProduct} />
              <Box
                sx={{
                  display: "flex",
                  marginTop: "50px",
                  justifyContent: "space-between",
                }}
              >
                <img
                  src={selectedProduct.imgUrl[0]}
                  style={{ width: "150px" }}
                />
                <img
                  src={selectedProduct.imgUrl[1]}
                  style={{ width: "150px" }}
                />
                <img
                  src={selectedProduct.imgUrl[2]}
                  style={{ width: "150px" }}
                />
              </Box>
            </>
          )}
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
            {selectedProduct.name}
          </Typography>
          <Typography variant="h4">${selectedProduct.price}</Typography>

          <Typography variant="h6">Product introduction</Typography>
          <Typography variant="p">{selectedProduct.description}</Typography>

          <Typography sx={{ fontSize: "15px" }} variant="h5"></Typography>
          <hr />
          <Typography>Stock: {selectedProduct.stock}</Typography>
          <Typography sx={{ paddingBottom: "30px" }} variant="h6">
            Product Available
          </Typography>
          <Box sx={{ marginBottom: "30px" }}>
            <QuantityItems />
          </Box>

          <Button variant="contained" onClick={() => addToCart()}>
            Add to cart
          </Button>
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
