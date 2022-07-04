import { useSelector } from "react-redux";
import { Container } from "@mui/system";
import { Grid } from "@mui/material";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  console.log(user);
  setTimeout(() => {
    return navigate("/", { replace: true });
  }, 3000);

  return (
    <>
      <Container sx={{ position: "relative", top: "64px", height: "100vh" }}>
        <Grid container justifyContent="center" sx={{ mt: "3rem" }}>
          <Grid item>
            <Typography variant="h3" textAlign="center">
              Welcome, {user.firstName}!
            </Typography>
            <Typography variant="h5">Enjoy your Stay</Typography>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Welcome;
