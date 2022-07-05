import {
  Divider,
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

import avatarimg from "../../assets/images/depositphotos_58414213-stock-photo-acoustic-guitar.jpeg";
import "./Profile.css";

function Profile() {
  return (
    <>
      <Box sx={{ paddingTop: "10rem", paddingBottom: "10rem" }}>
        <Card
          sx={{
            display: "flex",
            maxWidth: 450,
            margin: "0 auto",
            height: "18rem",
            backgroundColor: "white",
          }}
        >
          <CardMedia
            component="img"
            sx={{ width: 151 }}
            image={avatarimg}
            alt="Live from space album cover"
          />
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography component="div" variant="h5">
                User Profile
              </Typography>
              <Divider></Divider>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
              ></Typography>
            </CardContent>
          </Box>
        </Card>
      </Box>
    </>
  );
}

export default Profile;
