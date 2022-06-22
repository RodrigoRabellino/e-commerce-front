import {
  Box,
  Card,
  CardHeader,
  CardMedia,
  Typography,
  Grid,
  CardContent,
  Divider,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product, display }) => {
  const navigate = useNavigate();
  const handleNavigate = () =>
    navigate(`/product/${product._id}`, { replace: false });

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
  pointerEvents: "visible",
  padding: "0.2rem",
  transition: "0.2s",
  backgroundColor: "transparent",
  border: "1px solid rgb(242,219,184, 0.33)",
  ":hover": {
    transition: "0.2s",
    transform: "translateY(-5px)",
    backgroundColor: "rgb(242,219,184 , 0.33)",
    boxShadow:
      "0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)",
  },
};
const ListView = ({ product, handleNavigate }) => {
  const { name, imgUrl, price, id, description } = product;

  return (
    <>
      <Card
        onClick={handleNavigate}
        elevation={0}
        sx={{ ...cardStyle, width: "100%", height: "150px" }}
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
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "0.65rem",
            marginLeft: "0.65rem",
            width: "100%",
          }}
        >
          <Box display="flex">
            <Typography noWrap fontWeight="500" variant="h5" textAlign="start">
              {name}
            </Typography>
          </Box>
          <Box>
            <Typography variant="subtitle2" textAlign="start">
              {description.substring(0, 250)}...
            </Typography>
          </Box>
          <Box>
            <Typography
              sx={{ width: "100%" }}
              fontWeight="500"
              textAlign="end"
            >{`U$S ${price}`}</Typography>
          </Box>
        </CardContent>

        {/* <CardActions sx={{ padding: 0 }}>
          <IconButton>
            <PlaylistAdd />
          </IconButton>
        </CardActions> */}
      </Card>
    </>
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
        ...cardStyle,
        display: "block",
        width: "200px",
      }}
    >
      <CardMedia sx={{ height: "170px" }}>
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
        sx={{ paddingY: "0" }}
        title={
          <Typography fontWeight="700" variant="body1" textAlign="center">
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
