import { Box, Button, Paper, TextField, Typography } from "@mui/material";
const AdminLogin = () => {
  return (
    <Box
      height="100vh"
      width="100vw"
      display="flex"
      alignItems="center"
      justifyContent="flex-end"
      paddingRight="100px"
    >
      <Paper
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "2rem",
          height: "325px",
        }}
      >
        <Typography variant="h3" fontWeight="600">
          Admin Login
        </Typography>
        <Box height="100%">
          <form
            style={{
              display: "flex",
              height: "100%",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <TextField name="email" label="email" variant="standard" />
              <TextField name="password" label="password" variant="standard" />
            </Box>

            <Button type="submit">Login</Button>
          </form>
        </Box>
      </Paper>
    </Box>
  );
};

export default AdminLogin;
