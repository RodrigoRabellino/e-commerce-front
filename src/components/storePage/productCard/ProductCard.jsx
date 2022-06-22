import { Box, Typography } from "@mui/material";

const ProductCard = ({ product }) => {
  const { name, description } = product;
  return (
    <Box>
      <Typography>{name}</Typography>
      <Typography>{description}</Typography>
    </Box>
  );
};

export default ProductCard;
