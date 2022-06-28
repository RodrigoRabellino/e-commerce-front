import {
  Grid,
  Typography,
  Button,
  Box,
  Link,
  Container,
  CircularProgress,
  ButtonGroup,
} from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";

import ExampleCarousel from "../ExampleCarousel/ExampleCarousel";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchOneProduct } from "../../services/apiServices";
import { useDispatch } from "react-redux";
import { addItemToCart, addOneQty, removeOneQty } from "../../Redux/cart/slice";
import "./quantityItems.css";

function ProductDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [selectedProduct, setSelectedProduct] = useState({});
  const [qty, setQty] = useState(0);

  useEffect(() => {
    const getProduct = async () => {
      const response = await fetchOneProduct(id);
      setSelectedProduct({ ...response.data });
    };
    getProduct();
  }, []);

  const addToCart = () => {
    dispatch(addItemToCart({ ...selectedProduct, qty: qty }));
  };

  const removeFromQty = () => {
    if (qty > 1) {
      setQty((prev) => (prev -= 1));
    } else return;
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
            <ButtonGroup>
              <Button
                variant="contained"
                sx={{ borderRadius: "15px" }}
                onClick={() => removeFromQty()}
              >
                <RemoveCircleOutlineIcon />
              </Button>
              <Button>
                <Typography
                  value={1}
                  sx={{
                    fontWeight: "600",
                    fontSize: "1.2rem",
                    padding: "0 12px",
                  }}
                >
                  {qty}
                </Typography>
              </Button>
              <Button
                variant="contained"
                sx={{ borderRadius: "15px" }}
                onClick={() => setQty((prev) => (prev += 1))}
              >
                <AddCircleOutlineIcon />
              </Button>
            </ButtonGroup>
          </Box>

          <Button
            sx={{ borderRadius: "15px" }}
            variant="contained"
            onClick={() => addToCart()}
          >
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
