import "./App.css";
import MyRoutes from "./MyRoutes";
import { ThemeProvider, createTheme } from "@mui/material";

const myTheme = createTheme({
  palette: {
    primary: {
      main: "#BF8832",
      contrastText: "#F2DBB8",
      dark: "#8C5032",
    },
    secondary: {
      main: "#8C5032",
      light: "#F2DBB8",
      contrastText: "#F2DBB8",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={myTheme}>
      <div className="App">
        <MyRoutes />
      </div>
    </ThemeProvider>
  );
}

export default App;
