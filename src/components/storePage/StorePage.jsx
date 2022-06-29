import {
  Box,
  Button,
  Grid,
  Paper,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
  useTheme,
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

  const theme = useTheme();
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

  const categoryBtnStyles = {
    bgcolor: "primary.main",
    border: `thick double ${theme.palette.primary.light}`,
    borderRadius: "15px",
    color: "white",
    "&:hover": {
      color: "primary",
    },
  };

  return (
    <Grid container>
      <Grid
        item
        xs={3}
        justifyContent="center"
        sx={{
          position: "relative",
          top: "10rem",
          display: { xs: "none", sm: "flex" },
        }}
      >
        <Box
          sx={{
            position: "sticky",
            top: "10rem",
            width: "80%",
            padding: "1rem",
          }}
        >
          <Typography variant="h5" color={theme.palette.primary.dark}>
            Categories
          </Typography>
          <Stack marginTop="1rem" spacing={2}>
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
          </Stack>
        </Box>
      </Grid>
      <Grid item xs={12} sm={9} md={8}>
        <Box
          position="relative"
          width="100%"
          marginTop="65px"
          display="flex"
          flexDirection="column"
          padding="0.65rem"
          justifyContent="space-around"
        >
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            marginBottom="1rem"
          >
            <Box flex={10}>
              <Typography
                mt={2}
                mb={5}
                variant="h2"
                color={theme.palette.primary.dark}
                sx={{ borderBottom: `solid 1px ${theme.palette.primary.dark}` }}
              >
                {categorySelected}
              </Typography>
            </Box>
            <Box>
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
                width="100%"
                justifyContent="space-evenly"
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
      </Grid>
    </Grid>
  );
};

export default StorePage;
