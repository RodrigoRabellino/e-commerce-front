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
    <Box
      marginTop="65px"
      display="flex"
      padding="0.65rem"
      justifyContent="space-around"
    >
      <Paper
        elevation={2}
        sx={{
          width: "20%",
          minWidth: "170px",
          maxWidth: "270px",
          height: "400px",
          position: "sticky",
          top: "75px",
          padding: "1rem",
          backgroundImage:
            "linear-gradient(62deg, rgba(251, 171, 126, 0.33) 0%, rgba(247, 206, 104, 0.33) 100%)",
        }}
      >
        <Typography variant="h5" color="secondary">
          Categories
        </Typography>
        <Stack marginTop="1rem" spacing={2}>
          <Button variant="contained" sx={{ borderRadius: "50px" }}>
            All Products
          </Button>
          <Button
            variant="outlined"
            elevation={0}
            sx={{ borderRadius: "50px" }}
          >
            Guitars
          </Button>
          <Button
            variant="outlined"
            elevation={0}
            sx={{ borderRadius: "50px" }}
          >
            Bass
          </Button>
          <Button
            variant="outlined"
            elevation={0}
            sx={{ borderRadius: "50px" }}
          >
            Amps
          </Button>
          <Button
            variant="outlined"
            elevation={0}
            sx={{ borderRadius: "50px" }}
          >
            Accessories
          </Button>
        </Stack>
      </Paper>
      <Box width="75%" display="flex" flexDirection="column">
        <Box
          display="flex"
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
            <Grid container spacing={2} justifyContent="center" paddingX="1rem">
              {products.map((product) => {
                return (
                  <ProductCard
                    key={product.id}
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
  );
};

export default StorePage;
