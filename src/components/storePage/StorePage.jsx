import {
  Box,
  Button,
  CssBaseline,
  Grid,
  Pagination,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
  useTheme,
  Popover,
} from "@mui/material";
import { useEffect, useState } from "react";
import {
  fetchProducts,
  fetchProductsByCategory,
} from "../../services/apiServices";
import { ViewList, ViewModule } from "@mui/icons-material";
import ProductCard from "./productCard/ProductCard";
import { Container } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "./StorePage.css";

const StorePage = () => {
  const [page, setPage] = useState(1);
  const [products, setProducts] = useState([]);
  const [prodCount, setProdCount] = useState(0);
  const [categorySelected, setCategorySelected] = useState("All Products");
  const [viewDisplay, setViewDisplay] = useState("module");

  const theme = useTheme();

  const handleToggleView = (newValue) => {
    console.log(newValue);
  };

  const params = useParams();

  const categoryName = () => {
    if (
      params.categoryName === "electric" ||
      params.categoryName === "acoustic" ||
      params.categoryName === "bass"
    ) {
      return (
        params.categoryName.replace(
          params.categoryName[0],
          params.categoryName[0].toUpperCase()
        ) + " Guitars"
      );
    }
    return params.categoryName.replace(
      params.categoryName[0],
      params.categoryName[0].toUpperCase()
    );
  };
  categoryName();

  const categoryHeader = () => {
    switch (params.categoryName) {
      case "allproducts":
        return "https://i.ibb.co/j3DW9S1/header-all-1.jpg";

      case "accesories":
        return "https://i.ibb.co/ZgcqdYh/header-accesories-2.webp";
      case "effects":
        return "https://i.ibb.co/85tKwLs/header-pedals-2.jpg";
      case "bass":
        return "https://i.ibb.co/vP0mBvP/header-bass-3.jpg";
      case "electric":
        return "https://i.ibb.co/kDd2DYm/header-guitar-2.webp";
      case "acoustic":
        return "https://i.ibb.co/6gkZ2yr/header-guitar-3.webp";
      case "amplifier":
        return "https://i.ibb.co/bLjyJbf/header-amp-1.jpg";
    }
  };

  useEffect(() => {
    const getAllProducts = async () => {
      const data = await fetchProducts(page);
      setProducts(data.products);
      setProdCount(data.count);
    };

    const getProductsByCategory = async () => {
      const data = await fetchProductsByCategory(params.categoryName, page);
      setProducts(data.products);
      setProdCount(data.count);
    };
    if (params.categoryName === "allproducts") {
      getAllProducts();
      setCategorySelected("All Products");
    } else {
      getProductsByCategory();

      setCategorySelected(categoryName);
    }
  }, [params.categoryName, page]);

  const categoryBtnStyles = {
    marginY: "8px",
    width: { md: "30%", xs: "45%" },
    height: "2.5rem",
    bgcolor: "primary.main",
    border: `1px solid ${theme.palette.primary.light}`,
    borderRadius: "15px",
    color: "white",
    "&:hover": {
      color: "primary",
    },
  };

  return (
    <>
      <CssBaseline />
      <Grid
        container
        sx={{ position: "relative", top: "64px", marginBottom: "10vh" }}
      >
        <Grid item xs={12} className="heading">
          <img src={categoryHeader()} alt="" />
        </Grid>
        <Box className="opacity-bg"></Box>
      </Grid>
      <Container>
        <Grid container>
          <Grid item xs={12}>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              my="1rem"
              sx={{
                width: "100%",
                borderBottom: `solid 1px ${theme.palette.text.secondary}`,
              }}
            >
              <Typography variant="h3" color={theme.palette.text.primary}>
                {categorySelected}
              </Typography>

              <ToggleButtonGroup
                size="small"
                exclusive
                color="primary"
                value={viewDisplay}
                onChange={(e, newValue) => setViewDisplay(newValue)}
              >
                <ToggleButton value="module">
                  <ViewModule fontSize="small" />
                </ToggleButton>
                <ToggleButton value="list">
                  <ViewList fontSize="small" />
                </ToggleButton>
              </ToggleButtonGroup>
            </Box>

            <Box>
              <Grid container width="100%" justifyContent="space-between">
                {products.map((product) => {
                  return (
                    <ProductCard
                      key={product._id}
                      product={product}
                      display={viewDisplay}
                    />
                  );
                })}
              </Grid>
              <Box display="flex" justifyContent="center">
                <Pagination
                  page={page}
                  count={Math.ceil(prodCount / 10)}
                  shape="rounded"
                  onChange={(e) => setPage(parseInt(e.target.textContent))}
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default StorePage;
