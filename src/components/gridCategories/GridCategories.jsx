import { Box, Grid, Button, Typography } from "@mui/material";
import { Masonry } from "@mui/lab";

const GridCategories = () => {
  const containerStyles = {
    width: "33.3%",
    overflow: "hidden",
  };
  return (
    <Box width="100%" display="flex" justifyContent="center" marginTop="100px">
      <Box
        display="flex"
        width="75%"
        border="1px solid green"
        height="700px"
      ></Box>
    </Box>
  );
};

export default GridCategories;
