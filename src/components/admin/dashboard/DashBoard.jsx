import { Box, Paper, Grid, IconButton } from "@mui/material";
import { MoreVert } from "@mui/icons-material";
import MyChartBar from "./myCharts/MyChartBar";

const DashBoard = () => {
  const cardStyle = {
    background:
      "linear-gradient(90deg, rgba(41,255,198,1) 0%, rgba(32,227,178,1) 50%, rgba(12,235,235,1) 100%)",
    width: "300px",
    height: "150px",
    padding: "0.65rem",
  };
  return (
    <Box
      width="100%"
      height="100vh"
      marginTop="65px"
      display="flex"
      padding="1rem"
      alignItems="flex-start"
      justifyContent="center"
    >
      <Box padding="1rem">
        <Grid container spacing={4} marginBottom="0.65rem">
          <Grid item lg="auto">
            <Paper elevation={0} sx={cardStyle}>
              <Box
                sx={{
                  width: "100%",
                  height: "33%",
                  display: "flex",
                  justifyContent: "end",
                }}
              >
                <IconButton>
                  <MoreVert color="primary" />
                </IconButton>
              </Box>
            </Paper>
          </Grid>
          <Grid item lg="auto">
            <Paper elevation={0} sx={cardStyle}>
              <Box
                sx={{
                  width: "100%",
                  height: "33%",
                  display: "flex",
                  justifyContent: "end",
                }}
              >
                <IconButton>
                  <MoreVert color="primary" />
                </IconButton>
              </Box>
            </Paper>
          </Grid>
          <Grid item lg="auto">
            <Paper elevation={0} sx={cardStyle}>
              <Box
                sx={{
                  width: "100%",
                  height: "33%",
                  display: "flex",
                  justifyContent: "end",
                }}
              >
                <IconButton>
                  <MoreVert color="primary" />
                </IconButton>
              </Box>
            </Paper>
          </Grid>
        </Grid>
        <Box width="100%">
          <MyChartBar />
        </Box>
      </Box>
      <Paper
        elevation={0}
        sx={{
          ...cardStyle,
          width: "300px",
          height: "100%",
          padding: "0.65rem",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "33%",
            display: "flex",
            justifyContent: "end",
            alignItems: "start",
          }}
        >
          <IconButton>
            <MoreVert sx={{ color: "#f2dbb8" }} />
          </IconButton>
        </Box>
      </Paper>
    </Box>
  );
};

export default DashBoard;
