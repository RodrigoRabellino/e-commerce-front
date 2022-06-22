import {
  Box,
  Grid,
  Paper,
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

const StorePage = () => {
  const [page, setPage] = useState(1);
  const [products, setProducts] = useState([]);
  const [categorySelected, setCategorySelected] = useState("All Products");
  const [viewDisplay, setViewDisplay] = useState("module");

  const handleNextPage = () => {
    setPage((prev) => prev++);
    console.log("handlemore");
  };

  useEffect(() => {
    const getProducts = async (numPage) => {
      const resp = await fetchProducts(numPage);
      setProducts((prev) => [...prev, ...resp]);
    };
    //getProducts(1);
  }, [page]);
  console.log(products);
  return (
    <Box
      height="100vh"
      marginTop="65px"
      display="flex"
      padding="0.65rem"
      justifyContent="space-around"
    >
      <Paper
        elevation={0}
        sx={{ width: "25%", height: "50%", position: "sticky", top: "70px" }}
      ></Paper>
      <Box
        width="70%"
        display="flex"
        flexDirection="column"
        border="1px solid red"
      >
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Typography variant="h4">{categorySelected}</Typography>
          <ToggleButtonGroup
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
          >
            <Grid container spacing={2}>
              {products.map((product) => {
                return (
                  <Grid item lg="auto" key={product.id}>
                    <ProductCard product={product} />
                  </Grid>
                );
              })}
            </Grid>
          </InfiniteScroll>
        </Box>
      </Box>
    </Box>
  );
};

export default StorePage;
