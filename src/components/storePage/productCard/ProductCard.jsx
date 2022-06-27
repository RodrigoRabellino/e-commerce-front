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

const ListView = ({ product, handleNavigate }) => {
  const { name, imgUrl, price, id, description } = product;
  const theme = useTheme();

  const cardStyle = {
    display: "flex",
    cursor: "pointer",
    transition: "0.2s",
    padding: "0.5rem",
    ":hover": {
      backgroundColor: "white",
      transition: "0.2s",
      transform: "translateY(-5px)",
      boxShadow: "2px 2px 5px 5px rgb(0,0,0,0.22)",
      border: `thick double ${theme.palette.primary.main}`,
      borderRadius: "15px",
    },
  };

  return (
    <>
      <Grid
        p={5}
        m={1}
        container
        onClick={handleNavigate}
        elevation={0}
        sx={{
          ...cardStyle,
          width: "100%",
          height: "180px",
          backgroundColor: "white",
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
          px={5}
          xs={9}
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
        >
          <Typography
            color="primary"
            fontWeight="500"
            variant="h6"
            textAlign="start"
            sx={{ lineHeight: "1.2" }}
          >
            {name}
          </Typography>
          <Grid
            item
            display="flex"
            sx={{ height: "100%" }}
            alignItems="flex-end"
          >
            <Grid item xs={10}>
              <Typography
                sx={{
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                  height: "4rem",
                }}
                component="p"
                variant="subtitle2"
                align="left"
                color="primary"
              >
                {description.substring(0, 140)}...
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography
                fontWeight="500"
                color="primary"
              >{`$ ${price}`}</Typography>
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

  const cardStyle = {
    display: "flex",
    cursor: "pointer",
    transition: "0.2s",
    padding: "0.5rem",
    ":hover": {
      backgroundColor: "white",
      transition: "0.2s",
      transform: "translateY(-5px)",
      boxShadow: "2px 2px 5px 1px rgb(0,0,0,0.22)",
      border: `thick double ${theme.palette.primary.main}`,
      borderRadius: "15px",
    },
  };

  return (
    <Card
      onClick={handleNavigate}
      elevation={1}
      sx={{
        ...cardStyle,
        display: "block",
        width: "200px",
        backgroundColor: "white",
        marginBottom: "2rem",
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
            color="primary"
          >
            {name.substring(0, 14)}
          </Typography>
        }
        subheader={
          <Typography
            sx={{ width: "100%" }}
            color="primary"
            fontWeight="500"
            variant="subtitle2"
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
