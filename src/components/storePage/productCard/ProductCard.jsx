import {
  Box,
  Card,
  CardHeader,
  CardMedia,
  Typography,
  Grid,
  CardContent,
  Divider,
  useTheme,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product, display }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/product/${product._id}`, { replace: false });
  };

  return (
    <Grid item xs={display === "module" ? "auto" : 12}>
      {display === "module" ? (
        <ModuleView product={product} handleNavigate={handleNavigate} />
      ) : (
        <>
          <ListView product={product} handleNavigate={handleNavigate} />
        </>
      )}
    </Grid>
  );
};

const cardStyle = {
  display: "flex",
  cursor: "pointer",
  transition: "0.2s",
  padding: "0.5rem",
  ":hover": {
    transition: "0.2s",
    transform: "translateY(-5px)",
    backgroundImage:
      "linear-gradient(62deg, rgba(251, 171, 126, 0.33) 0%, rgba(247, 206, 104, 0.33) 100%)",
    boxShadow:
      "0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)",
  },
};

const ListView = ({ product, handleNavigate }) => {
  const { name, imgUrl, price, id, description } = product;
  const theme = useTheme();

  return (
    <>
      <Grid
        container
        spacing={1}
        onClick={handleNavigate}
        elevation={0}
        sx={{
          ...cardStyle,
          width: "100%",
          height: "180px",
          backgroundColor: theme.palette.primary.main,
          ":hover": { backgroundColor: theme.palette.primary.dark },
        }}
      >
        <Grid item xs={3} sx={{ height: "100%" }}>
          <img
            srcSet={imgUrl}
            alt={name}
            style={{
              borderRadius: "5px",
              width: "100%",
              height: "100%",
              objectFit: "contain",
              objectPosition: "center",
            }}
          />
        </Grid>
        <Grid
          item
          xs={9}
          flexDirection="column"
          justifyContent="space-between"
          sx={{ height: "100%" }}
        >
          <Typography
            color={theme.palette.primary.light}
            fontWeight="500"
            variant="h6"
            textAlign="start"
            sx={{ lineHeight: "1.2" }}
          >
            {name}
          </Typography>
          <Grid item display="flex" sx={{ height: "100%" }}>
            <Grid item xs={10} sx={{ height: "100%" }}>
              <Typography
                sx={{
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                }}
                component="p"
                variant="subtitle2"
                align="left"
                color={theme.palette.primary.light}
              >
                {description.substring(0, 250)}...
              </Typography>
            </Grid>
            <Grid
              item
              xs={2}
              display="flex"
              justifyContent="end"
              alignItems="flex-end"
            >
              <Typography
                sx={{ height: "100%" }}
                fontWeight="500"
                color={theme.palette.primary.light}
              >{`U$S ${price}`}</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {/* <Card
        onClick={handleNavigate}
        elevation={0}
        sx={{
          ...cardStyle,
          width: "100%",
          height: "150px",
          backgroundColor: theme.palette.primary.main,
          ":hover": { backgroundColor: theme.palette.primary.dark },
        }}
      >
        <CardMedia
          sx={{
            width: "150px",
          }}
        >
          <img
            srcSet={imgUrl}
            alt={name}
            style={{
              borderRadius: "5px",
              width: "100%",
              height: "100%",
              objectFit: "contain",
              objectPosition: "center",
            }}
          />
        </CardMedia>

        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Typography
            color={theme.palette.primary.light}
            noWrap
            fontWeight="500"
            variant="h5"
            textAlign="start"
          >
            {name}
          </Typography>
          <Box display="flex">
            <Typography
              variant="subtitle2"
              textAlign="start"
              color={theme.palette.primary.light}
            >
              {description.substring(0, 250)}...
            </Typography>

            <Typography
              sx={{ width: "100%" }}
              fontWeight="500"
              textAlign="end"
              marginTop="auto"
              color={theme.palette.primary.light}
            >{`U$S ${price}`}</Typography>
          </Box>
        </CardContent>

        {/* <CardActions sx={{ padding: 0 }}>
          <IconButton>
            <PlaylistAdd />
          </IconButton>
        </CardActions> */}
      {/* </Card> */}
    </>
  );
};

const ModuleView = ({ product, handleNavigate }) => {
  const theme = useTheme();
  const { name, imgUrl, price, id } = product;
  return (
    <Card
      onClick={handleNavigate}
      elevation={0}
      sx={{
        ...cardStyle,
        display: "block",
        width: "200px",
        backgroundColor: theme.palette.primary.main,
        ":hover": { backgroundColor: theme.palette.primary.dark },
      }}
    >
      <CardMedia p={1} sx={{ height: "170px" }}>
        <img
          srcSet={imgUrl}
          alt={name}
          style={{
            borderRadius: "5px",
            width: "100%",
            height: "100%",
            objectFit: "contain",
            objectPosition: "center",
          }}
        />
      </CardMedia>
      <CardHeader
        sx={{ paddingY: "0" }}
        title={
          <Typography
            fontWeight="700"
            variant="body1"
            textAlign="center"
            color={theme.palette.primary.light}
          >
            {name.substring(0, 14)}
          </Typography>
        }
        subheader={
          <Typography
            sx={{ width: "100%" }}
            color={theme.palette.primary.light}
            fontWeight="500"
            variant="overline"
          >{`U$S ${price}`}</Typography>
        }
      />
      {/* <CardActions sx={{ padding: 0 }}>
          <IconButton>
            <PlaylistAdd />
          </IconButton>
        </CardActions> */}
    </Card>
  );
};

export default ProductCard;
