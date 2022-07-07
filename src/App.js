import "./App.css";
import MyRoutes from "./MyRoutes";
import { ThemeProvider, createTheme } from "@mui/material";
import { SnackbarProvider } from "notistack";
import UserMain from "./userMain/UserMain";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import NavigationIcon from "@mui/icons-material/Navigation";
import { useNavigate } from "react-router-dom";

const myTheme = createTheme({
  palette: {
    primary: {
      main: "#ab832a",
      light: "#F2DBB8",
      dark: "#3E2707",
    },
    secondary: {
      main: "#7B8723",
      light: "#f6feea",
      contrastText: "#F2DBB8",
    },
    text: {
      primary: "rgba(0, 0, 0, 0.8)",
      secondary: "#494948;",
    },
    background: {
      default: "#FCFAF6",
      paper: "#eaeaea",
    },
  },
  typography: {
    fontFamily: ["Raleway"],
  },
});

function App() {
  const navigate = useNavigate();
  return (
    <ThemeProvider theme={myTheme}>
      <SnackbarProvider maxSnack={4}>
        <div className="App">
          <Box
            sx={{
              "& > :not(style)": { m: 1 },
              position: "fixed",
              top: "75vh",
              right: "-5rem",
              zIndex: "100",
              transition: "0.3s",
              "&:hover": {
                transition: "0.3s",
                right: 0,
              },
            }}
            onClick={() => navigate("/about")}
          >
            <Fab variant="extended" color="secondary" aria-label="add">
              <NavigationIcon sx={{ mr: 1 }} />
              About
            </Fab>
          </Box>
          <UserMain />
        </div>
      </SnackbarProvider>
    </ThemeProvider>
  );
}

export default App;
