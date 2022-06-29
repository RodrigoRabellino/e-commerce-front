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
      maxWidth="lg"
      sx={{
        position: "relative",
        mt: "4rem",
        borderLeft: `1px solid ${theme.palette.primary.light}`,
        borderRight: `1px solid ${theme.palette.primary.light}`,
      }}
    >
      <Grid
        container
        sx={{
          p: 1,
        }}
      >
        <Grid item xs={7} justifyContent="center">
          {Object.entries(selectedProduct).length === 0 ? (
            <CircularProgress />
          ) : (
            <>
              <ExampleCarousel selectedProduct={selectedProduct} />
              <Box
                sx={{
                  display: "flex",
                  marginTop: "50px",
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
        <Grid
          container
          xs={5}
          height="100%"
          display="flex"
          flexDirection="column"
          rowSpacing={2}
          justifyContent="space-between"
          alignItems="flex-start"
          textAlign="left"
        >
          <Grid item xs={12}>
            <Typography sx={{ fontSize: "40px" }} variant="h3">
              {selectedProduct.name}
            </Typography>
          </Grid>

          <Grid
            item
            xs={12}
            display="flex"
            flexDirection="column"
            justifyContent="flex-end"
          >
            <Typography>Stock: {selectedProduct.stock}</Typography>
            <Typography variant="h6" color="secondary">
              Product Available
            </Typography>
            <Box display="flex" alignItems="center">
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
          <Grid item xs={12} display="flex">
            <Typography variant="h6" flex="1">
              Price: U$S{" "}
              <Typography variant="h4" component="span">
                {selectedProduct.price}
              </Typography>
            </Typography>
          </Grid>
          <Grid
            item
            display="flex"
            flexDirection="column"
            justifyContent="space-evenly"
            alignItems="flex-start"
            rowSpacing={1}
          >
            <Box>
              <ButtonGroup sx={{ display: "flex", mb: "0.5rem" }}>
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
          <Grid item mb="1rem">
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
