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
import { fetchProducts } from "../../services/apiServices";
import { ViewList, ViewModule } from "@mui/icons-material";
import ProductCard from "./productCard/ProductCard";
import { Container } from "@mui/system";
import { useSelector } from "react-redux";

const StorePage = () => {
  const [page, setPage] = useState(1);
  // const [products, setProducts] = useState([]);
  const [categorySelected, setCategorySelected] = useState("All Products");
  const [viewDisplay, setViewDisplay] = useState("module");

  const theme = useTheme();

  const handleToggleView = (newValue) => {
    console.log(newValue);
  };

  useEffect(() => {
    const getProducts = async () => {
      const resp = await fetchProducts(page);
      // setProducts([...resp]);
    };
    getProducts();
  }, [page]);

  const products = useSelector((state) => state.products);

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
        {/* <Grid item xs={12}>
          <Box my={2}>
            <Typography variant="h4" color={theme.palette.primary.main}>
              Categories
            </Typography>
          </Box>
          <Box
            mb={2}
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            <Button
              sx={{ ...categoryBtnStyles }}
              onClick={() => setCategorySelected("All Products")}
              variant="contained"
            >
              All Products
            </Button>
            <Button
              sx={{ ...categoryBtnStyles }}
              onClick={() => setCategorySelected("Guitars")}
              variant="contained"
              elevation={0}
            >
              Guitars
            </Button>
            <Button
              sx={{ ...categoryBtnStyles }}
              onClick={() => setCategorySelected("Basses")}
              variant="contained"
              elevation={0}
            >
              Bass
            </Button>
            <Button
              sx={{ ...categoryBtnStyles }}
              onClick={() => setCategorySelected("Amps")}
              variant="contained"
              elevation={0}
            >
              Amps
            </Button>
            <Button
              sx={{ ...categoryBtnStyles }}
              onClick={() => setCategorySelected("Accessories")}
              variant="contained"
              elevation={0}
            >
              Accessories
            </Button>
          </Box>
        </Grid> */}
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
                count={4}
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
