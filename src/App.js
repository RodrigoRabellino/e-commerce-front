import "./App.css";
import MyRoutes from "./MyRoutes";
import { ThemeProvider, createTheme } from "@mui/material";
import { SnackbarProvider } from "notistack";
import UserMain from "./userMain/UserMain";

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
  return (
    <ThemeProvider theme={myTheme}>
      <SnackbarProvider maxSnack={4}>
        <div className="App">
          <UserMain />
        </div>
      </SnackbarProvider>
    </ThemeProvider>
  );
}

export default App;
