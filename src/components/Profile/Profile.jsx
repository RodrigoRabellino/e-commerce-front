import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";



function Profile() {
  return (
    <Card sx={{ display: "flex", paddingTop: "5rem" }}>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5">
            Live From Space
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            Mac Miller
          </Typography>
        </CardContent>
        <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
          <IconButton aria-label="previous"></IconButton>
          <IconButton aria-label="play/pause">
          
          </IconButton>
          <IconButton aria-label="next"></IconButton>
        </Box>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
      

      />
    </Card>
  );
}

export default Profile;
