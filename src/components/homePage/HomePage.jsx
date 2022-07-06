import {
  Container,
  Grid,
  Box,
  Typography,
  Divider,
  Button,
  CssBaseline,
} from "@mui/material";

import React, { useEffect, useState } from "react";
import { fetchStarredProducts } from "../../services/apiServices";
import GridCategories from "../gridCategories/GridCategories";
import MyCarousel from "./MyCarousel";
import { useTheme } from "@emotion/react";

import "./HomePage.css";

const HomePage = () => {
  const [starredProducts, setStarredProducts] = useState([]);
  const theme = useTheme();
  const categoryBtnStyles = {
    bgcolor: "primary.main",
    border: `1px solid ${theme.palette.primary.light}`,
    borderRadius: "15px",
    color: "white",
    "&:hover": {
      color: "primary",
    },
  };

  useEffect(() => {
    const getstarredProducts = async () => {
      const response = await fetchStarredProducts();
      setStarredProducts([...response]);
    };
    getstarredProducts();
  }, []);

  return (
    <>
      <CssBaseline />
      <section className="start-page parallax-background" id="home">
        <Box className="opacity-bg"></Box>
        <Box className="content-bg">
          <Box
            sx={{ height: "100%" }}
            className="title-text"
            display="flex"
            flexDirection="column"
            JustifyContent="center"
          >
            <Typography variant="h2" sx={{ color: "white" }}>
              lorem ipsum
            </Typography>
            <Typography variant="subtitle1" sx={{ color: "white" }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy
            </Typography>
            <Box sx={{ paddingTop: "2rem" }}>
              {/* <Button variant="contained" sx={{ ...categoryBtnStyles }}>
                Contact Us
              </Button> */}
            </Box>
          </Box>
          <Box className="arrow-down"></Box>
        </Box>
      </section>

      <section>
        <Container>
          <Box>
            <Typography
              fontWeight="600"
              marginTop="50px"
              variant="h3"
              color={theme.palette.primary.main}
            >
              Music Inspires
            </Typography>
            <Typography
              variant="h5"
              sx={{ marginTop: "20px" }}
              color={theme.palette.primary.main}
            >
              Life without playing music is inconceivable for me.
            </Typography>
          </Box>
          <Box sx={{ paddingY: "3rem", marginY: "3rem" }}>
            <GridCategories />
          </Box>
        </Container>
      </section>

      <section className="parallax">
        <Box className="parallax-inner" sx={{ marginBottom: "3rem" }}>
          <h3 className="title-parallax">Lorem Impsum</h3>
        </Box>
      </section>

      <section>
        <Container>
          <Grid
            container
            py={2}
            sx={{ paddingBottom: "5rem" }}
            justifyContent="center"
          >
            <Grid item sm={12} md={12}>
              <Typography
                variant="h3"
                color={theme.palette.primary.dark}
                sx={{ marginBottom: "2rem" }}
              >
                Our Featured Products
              </Typography>
              <MyCarousel starredProducts={starredProducts} />
            </Grid>
          </Grid>

          <Box>
            <Grid container paddingBottom={3}>
              <Grid item xs={12} sm={4} className="iconsvg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  id="Layer_1"
                  x="0px"
                  y="0px"
                  viewBox="0 0 100.353 100.353"
                  className="iconsvg"
                >
                  <g>
                    <path d="M89.381,19.52h-78.76c-3.983,0-7.224,3.241-7.224,7.224v4.828v10.404v31.281c0,3.983,3.241,7.223,7.224,7.223h78.76   c3.983,0,7.223-3.24,7.223-7.223V41.976V31.572v-4.828C96.604,22.761,93.364,19.52,89.381,19.52z M6.396,26.744   c0.001-2.33,1.895-4.224,4.224-4.224h78.76c2.329,0,4.223,1.895,4.223,4.224v3.328H6.396V26.744z M93.604,73.256   c0,2.328-1.895,4.223-4.223,4.223h-78.76c-2.329,0-4.224-1.895-4.224-4.223V43.475h87.207V73.256z M93.604,40.475H6.397v-7.404   h87.207V40.475z" />
                    <path d="M17.894,71.566c2.885,0,5.231-2.345,5.231-5.227c0-2.884-2.346-5.231-5.231-5.231c-2.883,0-5.229,2.347-5.229,5.231   C12.665,69.221,15.011,71.566,17.894,71.566z M17.894,64.108c1.23,0,2.231,1.001,2.231,2.231c0,1.228-1.001,2.227-2.231,2.227   c-1.229,0-2.229-0.999-2.229-2.227C15.665,65.109,16.665,64.108,17.894,64.108z" />
                    <path d="M29.08,68.015h42.264c0.829,0,1.5-0.671,1.5-1.5s-0.671-1.5-1.5-1.5H29.08c-0.829,0-1.5,0.671-1.5,1.5   C27.58,67.344,28.251,68.015,29.08,68.015z" />
                  </g>
                </svg>
                <Typography variant="h5" fontWeight={700}>
                  Buy with card or cash
                </Typography>
                <Typography variant="subtitle1">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy
                </Typography>
              </Grid>
              {/* <Divider orientation="vertical" flexItem>
                .
              </Divider> */}
              <Grid
                item
                xs={12}
                sm={4}
                className="iconsvg"
                sx={{
                  borderLeft: `1px solid ${theme.palette.primary.light}`,
                  borderRight: `1px solid ${theme.palette.primary.light}`,
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  id="Layer_1"
                  data-name="Layer 1"
                  viewBox="0 0 512 512"
                  className="iconsvg"
                >
                  <path d="M507.219,275.177,466.234,185.01A42.749,42.749,0,0,0,427.4,160H352V128a32.035,32.035,0,0,0-32-32H53.333a32.035,32.035,0,0,0-32,32V256a10.667,10.667,0,1,0,21.333,0V128a10.679,10.679,0,0,1,10.667-10.667H320A10.679,10.679,0,0,1,330.667,128V298.667A10.681,10.681,0,0,1,320,309.333H192a10.667,10.667,0,0,0,0,21.333H320a32.035,32.035,0,0,0,32-32V181.333h75.4a21.381,21.381,0,0,1,19.422,12.505l4.013,8.828h-45.5A21.356,21.356,0,0,0,384,224v42.667A21.354,21.354,0,0,0,405.333,288h83.94a31.775,31.775,0,0,1,1.393,9.24v44.094A10.681,10.681,0,0,1,480,352H446.924a53.336,53.336,0,0,0-104.516,0H169.591a53.336,53.336,0,0,0-104.516,0H53.333a10.681,10.681,0,0,1-10.667-10.667V330.667a10.667,10.667,0,0,0,0-21.333h-32a10.667,10.667,0,0,0,0,21.333H21.333v10.667a32.035,32.035,0,0,0,32,32H65.076a53.336,53.336,0,0,0,104.516,0H342.409a53.336,53.336,0,0,0,104.516,0H480a32.035,32.035,0,0,0,32-32V297.24A52.9,52.9,0,0,0,507.219,275.177ZM117.333,394.667a32,32,0,1,1,32-32A32.035,32.035,0,0,1,117.333,394.667Zm277.333,0a32,32,0,1,1,32-32A32.035,32.035,0,0,1,394.667,394.667ZM405.333,224h55.194l19.393,42.667H405.333Z" />
                  <path d="M10.667,298.667H64a10.667,10.667,0,0,0,0-21.333H10.667a10.667,10.667,0,0,0,0,21.333Z" />
                </svg>
                <Typography variant="h5" fontWeight={700}>
                  Fast and safe shipping
                </Typography>
                <Typography variant="subtitle1">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy
                </Typography>
              </Grid>
              {/* <Divider orientation="vertical" flexItem>
                .
              </Divider> */}
              <Grid item xs={12} sm={4} className="iconsvg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="iconsvg"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12 21.849C11.6572 21.8493 11.3201 21.7615 11.021 21.594L10.721 21.423C8.38028 20.1053 6.43183 18.1892 5.07515 15.8708C3.71847 13.5524 3.00231 10.9152 3 8.22903L3 8.08403C3.00068 7.72962 3.09523 7.38172 3.27405 7.07573C3.45287 6.76974 3.70956 6.51658 4.018 6.34203L11.018 2.40403C11.3174 2.23675 11.6546 2.14893 11.9975 2.14893C12.3404 2.14893 12.6776 2.23675 12.977 2.40403L19.977 6.34103C20.2864 6.51518 20.5441 6.76825 20.7238 7.07444C20.9035 7.38064 20.9988 7.729 21 8.08403V8.22903C20.9991 10.9159 20.2839 13.5542 18.9277 15.8737C17.5715 18.1932 15.623 20.1104 13.282 21.429L12.982 21.599C12.6816 21.7653 12.3434 21.8514 12 21.849V21.849ZM12 4.14903L5 8.08403V8.22903C5.00194 10.5607 5.62331 12.8501 6.80054 14.8628C7.97777 16.8755 9.6686 18.5393 11.7 19.684L12 19.854L12.3 19.684C14.3314 18.5393 16.0222 16.8755 17.1995 14.8628C18.3767 12.8501 18.9981 10.5607 19 8.22903V8.08403L12 4.14903Z"
                    fill="black"
                  />
                </svg>
                <Typography variant="h5" fontWeight={700}>
                  Protected Purchase
                </Typography>
                <Typography variant="subtitle1">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </section>

      <Box className="marqueebutom">
        <span>
          <p className="giftext">
            International shipping available [Free shipping]Lorem Ipsum is
            simply dummy text of the printing and typesetting
          </p>
        </span>
      </Box>
    </>
  );
};

export default HomePage;
