import "./App.css";
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
    text: {
      primary: "rgba(0, 0, 0, 0.8)",
      secondary: "#494948;",
    },
    background: {
      default: "#FCFAF6",
      paper: "#FCFAF6",
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
