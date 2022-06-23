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
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addProduct } from "../../../Redux/product";

const ProductCard = ({ product, display }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/product/${product._id}`, { replace: false });
    dispatch(addProduct(product));
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
  padding: "0.2rem",
  transition: "0.2s",
  backgroundColor: "transparent",
  border: "1px solid rgba(247, 206, 104, 0.33)",
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

  return (
    <>
      <Card
        onClick={handleNavigate}
        elevation={0}
        sx={{
          ...cardStyle,
          width: "100%",
          height: "150px",
        }}
      >
        <CardMedia sx={{ height: "100%", width: "150px" }}>
          <img
            srcSet={imgUrl}
            alt={name}
            style={{
              borderRadius: "5px",
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "top",
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
            borderRadius: "5px",
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "top",
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
