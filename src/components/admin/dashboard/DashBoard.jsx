import { Box, Paper, Grid, IconButton } from "@mui/material";
import { MoreVert } from "@mui/icons-material";
import MyChartBar from "./myCharts/MyChartBar";
import MyChartLine from "./myCharts/MyChartLine";
import MyChartBubble from "./myCharts/MyChartBubble";
import { useState } from "react";

const colors = {
  primary: "#FFFB7D",
  secondary: "#FBAB7E",
  third: "#85FFBD",
  fourth: "",
};

const DashBoard = () => {
  const [showLateral, setShowLateral] = useState(true);

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
      display="flex"
      alignItems="flex-start"
      justifyContent="center"
    >
      {showLateral ? <Paper></Paper> : <></>}

      <Box
        padding="1rem"
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Grid container spacing={4} marginBottom="0.65rem">
          <Grid item lg="auto">
            <Paper elevation={0} sx={cardStyle}>
              <Box width="100%">
                <MyChartLine colors={colors} />
              </Box>
            </Paper>
          </Grid>
          <Grid item lg="auto">
            <Paper elevation={0} sx={cardStyle}>
              <MyChartBubble colors={colors} />
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
        <Box width="90%" display="flex">
          <MyChartBar colors={colors} />
        </Box>
      </Box>
    </Box>
  );
};

export default DashBoard;
