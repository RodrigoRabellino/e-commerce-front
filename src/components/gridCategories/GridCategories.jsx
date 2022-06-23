import { Box, Grid } from "@mui/material";
import "./gridCategories.css";

const GridCategories = () => {
  const containerStyles = {
    width: "33.3%",
    overflow: "hidden",
  };
  //Allproducts, guitars, bass, amps, accessories
  return (
    <Grid container spacing={0} marginTop="100px">
      <Grid item sx={4}>
        <Box xs={{ height: "100px", border: "1px solid red" }}>holiwi</Box>
      </Grid>
      <Grid item sx={4}>
        <Box xs={{ height: "100px", border: "1px solid red" }}></Box>
      </Grid>
    </Grid>
  );
};

export default GridCategories;
