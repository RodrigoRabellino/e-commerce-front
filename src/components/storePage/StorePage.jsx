import {
  Box,
  Button,
  Grid,
  Paper,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { fetchProducts } from "../../services/apiServices";
import { ViewList, ViewModule } from "@mui/icons-material";
import InfiniteScroll from "react-infinite-scroll-component";
import LoadingSkeleton from "./loadingSkeleton/LoadingSkeleton";
import ProductCard from "./productCard/ProductCard";
import { Container } from "@mui/system";

const StorePage = () => {
  const [page, setPage] = useState(1);
  const [products, setProducts] = useState([]);
  const [categorySelected, setCategorySelected] = useState("All Products");
  const [viewDisplay, setViewDisplay] = useState("module");

  const handleNextPage = () => {
    //setPage((prev) => prev++);
    console.log("handlemore");
  };

  const handleToggleView = (newValue) => {
    console.log(newValue);
  };

  useEffect(() => {
    const getProducts = async (numPage) => {
      const resp = await fetchProducts(numPage);
      setProducts((prev) => [...prev, ...resp]);
    };
    getProducts(page);
  }, [page]);

  return (
    <Grid container>
      <Grid item xs={3}>
        <Box
          sx={{
            position: "sticky",
            top: "5rem",
            width: "100%",
            padding: "1rem",
          }}
        >
          <Typography variant="h5" color="primary">
            Categories
          </Typography>
          <Stack marginTop="1rem" spacing={2}>
            <Button
              onClick={() => setCategorySelected("all products")}
              variant={
                categorySelected === "all products" ? "contained" : "outlined"
              }
              sx={{ borderRadius: "50px", backgroundColor: "primary" }}
            >
              All Products
            </Button>
            <Button
              onClick={() => setCategorySelected("guitars")}
              variant={
                categorySelected === "guitars" ? "contained" : "outlined"
              }
              elevation={0}
              sx={{ borderRadius: "50px" }}
            >
              Guitars
            </Button>
            <Button
              onClick={() => setCategorySelected("bass")}
              variant={categorySelected === "bass" ? "contained" : "outlined"}
              elevation={0}
              sx={{ borderRadius: "50px" }}
            >
              Bass
            </Button>
            <Button
              onClick={() => setCategorySelected("amps")}
              variant={categorySelected === "amps" ? "contained" : "outlined"}
              elevation={0}
              sx={{ borderRadius: "50px" }}
            >
              Amps
            </Button>
            <Button
              onClick={() => setCategorySelected("accessories")}
              variant={
                categorySelected === "accessories" ? "contained" : "outlined"
              }
              elevation={0}
              sx={{ borderRadius: "50px" }}
            >
              Accessories
            </Button>
          </Stack>
        </Box>
        {/* <Paper
          elevation={2}
          sx={{
            width: "100%",
            minWidth: "170px",
            maxWidth: "270px",
            height: "400px",
            position: "sticky",
            top: "60px",
            padding: "3rem",
            backgroundImage:
              "linear-gradient(62deg, rgba(251, 171, 126, 0.33) 0%, rgba(247, 206, 104, 0.33) 100%)",
          }}
        >
          <Typography variant="h5" color="secondary">
            Categories
          </Typography>
          <Stack marginTop="1rem" spacing={2}>
            <Button
              onClick={() => setCategorySelected("all products")}
              variant={
                categorySelected === "all products" ? "contained" : "outlined"
              }
              sx={{ borderRadius: "50px" }}
            >
              All Products
            </Button>
            <Button
              onClick={() => setCategorySelected("guitars")}
              variant={
                categorySelected === "guitars" ? "contained" : "outlined"
              }
              elevation={0}
              sx={{ borderRadius: "50px" }}
            >
              Guitars
            </Button>
            <Button
              onClick={() => setCategorySelected("bass")}
              variant={categorySelected === "bass" ? "contained" : "outlined"}
              elevation={0}
              sx={{ borderRadius: "50px" }}
            >
              Bass
            </Button>
            <Button
              onClick={() => setCategorySelected("amps")}
              variant={categorySelected === "amps" ? "contained" : "outlined"}
              elevation={0}
              sx={{ borderRadius: "50px" }}
            >
              Amps
            </Button>
            <Button
              onClick={() => setCategorySelected("accessories")}
              variant={
                categorySelected === "accessories" ? "contained" : "outlined"
              }
              elevation={0}
              sx={{ borderRadius: "50px" }}
            >
              Accessories
            </Button>
          </Stack>
        </Paper> */}
      </Grid>
      <Grid item xs={8}>
        <Box
          width="100%"
          marginTop="65px"
          display="flex"
          padding="0.65rem"
          justifyContent="space-around"
        >
          <Box width="100%" display="flex" flexDirection="column">
            <Box
              display="fle"
              alignItems="center"
              justifyContent="space-between"
              marginBottom="1rem"
            >
              <Typography variant="h4">{categorySelected}</Typography>
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
              <InfiniteScroll
                dataLength={products.length}
                next={() => handleNextPage()}
                hasMore={true}
                loader={<LoadingSkeleton />}
                scrollThreshold={0.95}
                endMessage={null}
                style={{ paddingTop: "1rem" }}
              >
                <Grid
                  container
                  spacing={2}
                  justifyContent="center"
                  paddingX="1rem"
                >
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
              </InfiniteScroll>
            </Box>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default StorePage;
