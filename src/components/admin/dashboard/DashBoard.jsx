import { Box, Paper } from "@mui/material";
import { Grid } from "react-bootstrap";

const DashBoard = () => {
  return (
    <Box width="100%" height="100%">
      <Grid spacing={4}>
        <Paper sx={{ width: "300px", height: "150px" }}></Paper>
      </Grid>
    </Box>
  );
};

export default DashBoard;
