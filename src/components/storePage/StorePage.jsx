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

  useEffect(() => {
    const getAllProducts = async () => {
      const data = await fetchProducts(page);
      setProducts(data.products);
      setProdCount(data.count);
    };

    const getProductsByCategory = async () => {
      const data = await fetchProductsByCategory(params.categoryName, page);
      console.log("data", data);
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
    <Container>
      <CssBaseline />
      <Grid
        container
        sx={{ position: "relative", top: "64px", marginBottom: "10vh" }}
      >
        <Grid item xs={12}>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            my="1rem"
            sx={{
              width: "100%",
              borderBottom: `solid 1px ${theme.palette.primary.main}`,
            }}
          >
            <Typography variant="h3" color={theme.palette.primary.main}>
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
                    onClick={() => console.log(product)}
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
  );
};

export default StorePage;
