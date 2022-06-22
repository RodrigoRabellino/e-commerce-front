import {
  Box,
  Card,
  CardHeader,
  CardMedia,
  Typography,
  Grid,
  CardContent,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product, display }) => {
  const navigate = useNavigate();
  const handleNavigate = () =>
    navigate(`/product/${product.id}`, { replace: false });

  return (
    <Grid item xs={display === "module" ? "auto" : 12}>
      {display === "module" ? (
        <ModuleView product={product} handleNavigate={handleNavigate} />
      ) : (
        <ListView product={product} handleNavigate={handleNavigate} />
      )}
    </Grid>
  );
};

const ListView = ({ product, handleNavigate }) => {
  const { name, imgUrl, price, id } = product;
  return (
    <Card
      onClick={handleNavigate}
      elevation={0}
      sx={{
        display: "flex",

        padding: "0.2rem",
        transition: "0.2s",
        width: "100%",
        height: "150px",
        backgroundColor: "transparent",
        ":hover": {
          transition: "0.2s",
          backgroundColor: "rgb(242,219,184, 0.33)",
        },
      }}
    >
      <CardMedia sx={{ height: "100%", width: "150px" }}>
        <img
          srcSet={imgUrl}
          alt={name}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "fill",
          }}
        />
      </CardMedia>
      <CardContent
        sx={{
          padding: 0,
          marginLeft: "0.65rem",
          background: "red",
          width: "100%",
        }}
      >
        <Box display="flex" sx={{ background: "green" }}>
          <Typography noWrap fontWeight="700" variant="h5" textAlign="start">
            {name}
          </Typography>
        </Box>
        <Typography
          sx={{ width: "100%" }}
          fontWeight="500"
        >{`U$S ${price}`}</Typography>
      </CardContent>

      {/* <CardActions sx={{ padding: 0 }}>
          <IconButton>
            <PlaylistAdd />
          </IconButton>
        </CardActions> */}
    </Card>
  );
};

const ModuleView = ({ product, handleNavigate }) => {
  const { name, imgUrl, price, id } = product;
  const navigate = useNavigate();
  return (
    <Card
      onClick={handleNavigate}
      elevation={0}
      sx={{
        padding: "0.2rem",
        transition: "0.2s",
        width: "200px",
        height: "250px",
        backgroundColor: "transparent",
        ":hover": {
          transition: "0.2s",
          backgroundColor: "rgb(242,219,184, 0.33)",
        },
      }}
    >
      <CardMedia sx={{ height: "70%" }}>
        <img
          srcSet={imgUrl}
          alt={name}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "fill",
          }}
        />
      </CardMedia>
      <CardHeader
        title={
          <Typography fontWeight="700" variant="body1" textAlign="start">
            {name.substring(0, 14)}
          </Typography>
        }
        subheader={
          <Typography
            sx={{ width: "100%" }}
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
