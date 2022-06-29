import {
  Grid,
  Typography,
  Button,
  Box,
  Link,
  Container,
  CircularProgress,
  ButtonGroup,
  CssBaseline,
} from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import GppGoodOutlinedIcon from "@mui/icons-material/GppGoodOutlined";

import ExampleCarousel from "../ExampleCarousel/ExampleCarousel";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchOneProduct } from "../../services/apiServices";
import { useDispatch } from "react-redux";
import { addItemToCart, addOneQty, removeOneQty } from "../../Redux/cart/slice";
import "./quantityItems.css";
import { useTheme } from "@emotion/react";

function ProductDetail() {
  const theme = useTheme();
  const { id } = useParams();
  const dispatch = useDispatch();
  const [selectedProduct, setSelectedProduct] = useState({});
  const [qty, setQty] = useState(1);

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

  const carouselImgStyles = {
    width: "100px",
    marginLeft: "10px",
  };

  return (
    <Container
      sx={{
        position: "relative",
        mt: "64px",
        borderLeft: `1px solid ${theme.palette.primary.light}`,
        borderRight: `1px solid ${theme.palette.primary.light}`,
        backgroundColor: "white",
      }}
    >
      <CssBaseline />
      <Grid
        container
        justifyContent="center"
        sx={{
          p: 1,
        }}
      >
        <Grid item xs={12} md={7} justifyContent="center">
          {Object.entries(selectedProduct).length === 0 ? (
            <CircularProgress />
          ) : (
            <>
              <ExampleCarousel selectedProduct={selectedProduct} />
              <Box
                sx={{
                  display: { md: "flex", xs: "none" },
                  marginTop: "64px",
                  justifyContent: "center",
                }}
              >
                <img
                  src={selectedProduct.imgUrl[0]}
                  style={{ ...carouselImgStyles }}
                />
                <img
                  src={selectedProduct.imgUrl[1]}
                  style={{ ...carouselImgStyles }}
                />
                <img
                  src={selectedProduct.imgUrl[2]}
                  style={{ ...carouselImgStyles }}
                />
              </Box>
            </>
          )}
        </Grid>

        <Grid item xs={12} md={5}>
          <Typography
            sx={{
              fontSize: { xs: "30px", lg: "40px" },
              textAlign: { md: "left", xs: "center" },
            }}
            variant="h3"
          >
            {selectedProduct.name}
          </Typography>
          {/* </Grid> */}

          <Grid
            item
            xs={12}
            display="flex"
            flexDirection="column"
            sx={{ textAlign: { xs: "center", md: "start" }, width: "100%" }}
          >
            <Typography>Stock: {selectedProduct.stock}</Typography>
            <Typography variant="h6" color="secondary">
              Product Available
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: { xs: "center", md: "start" },
                textAlign: { xs: "center", md: "start" },
              }}
            >
              <LocalShippingOutlinedIcon sx={{ color: "secondary.main" }} />
              <Typography variant="body2" ml="5px">
                Delivers today if you order{" "}
                <Typography
                  variant="span"
                  sx={{
                    color: "secondary.main",
                    fontSize: "1.2rem",
                    fontWeight: "500",
                  }}
                >
                  now!
                </Typography>
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              justifyContent: { md: "start", xs: "center" },
              alignItems: "center",
              textAlign: { xs: "center", md: "flex-start" },
            }}
          >
            <Typography variant="h6">Price: U$S </Typography>
            <Typography
              variant="p"
              fontSize="2rem"
              component="span"
              className="number"
            >
              {selectedProduct.price}
            </Typography>
          </Grid>
          <Grid
            item
            display="flex"
            flexDirection="column"
            justifyContent="space-evenly"
            sx={{ alignItems: { md: "flex-start", xs: "center" } }}
            rowSpacing={1}
          >
            <Box>
              <ButtonGroup
                sx={{ display: "flex", mb: "0.5rem", height: "2.5rem" }}
              >
                <Button
                  variant="contained"
                  sx={{
                    borderRadius: "15px",
                    border: `2px solid ${theme.palette.primary.light}`,
                    flexGrow: "1",
                  }}
                  onClick={() => removeFromQty()}
                >
                  <RemoveCircleOutlineIcon />
                </Button>
                <Button
                  sx={{
                    border: `2px solid ${theme.palette.primary.light}`,
                    flexGrow: "1",
                    "&:hover": {
                      border: `2px solid ${theme.palette.primary.light}`,
                    },
                  }}
                >
                  <Typography
                    className="number"
                    variant="p"
                    value={1}
                    sx={{
                      fontWeight: "400",
                      fontSize: "1.3rem",
                      padding: "0 12px",
                    }}
                  >
                    {qty}
                  </Typography>
                </Button>
                <Button
                  variant="contained"
                  sx={{
                    borderRadius: "15px",
                    border: `2px solid ${theme.palette.primary.light}`,
                    flexGrow: "1",
                  }}
                  onClick={() => setQty((prev) => (prev += 1))}
                >
                  <AddCircleOutlineIcon />
                </Button>
              </ButtonGroup>
              <Button
                sx={{
                  height: "2.5rem",
                  mb: "1rem",
                  width: "100%",
                  borderRadius: "15px",
                  border: `2px solid ${theme.palette.primary.light}`,
                }}
                variant="contained"
                onClick={() => addToCart()}
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

            <Box display="flex" alignItems="center" mb={1}>
              <GppGoodOutlinedIcon sx={{ color: "secondary.main" }} />
              <Typography variant="body2">
                Your card information is protected
              </Typography>
            </Box>
            <Typography
              variant="p"
              sx={{
                fontSize: "1.1rem",
                fontWeight: "500",
                color: "secondary.main",
              }}
            >
              <Link
                sx={{
                  color: "secondary.main",
                  cursor: "pointer",
                  textDecoration: "none",
                  "&:hover": {
                    color: "secondary.dark",
                  },
                }}
                href="#"
              >
                Add to Wish List +
              </Link>
            </Typography>
          </Grid>
          <Grid item mb="1rem" sx={{ textAlign: "start" }}>
            <Typography variant="body1">
              {selectedProduct.description}
            </Typography>
          </Grid>
        </Grid>
        <hr />
      </Grid>
    </Container>
  );
}

export default ProductDetail;
