import "./App.css";
import MyRoutes from "./MyRoutes";
import Navbar from "./components/Navbar/Navbar";
import { ThemeProvider, createTheme } from "@mui/material";
import MyCarousel from "./components/homePage/MyCarousel";
import Footer from "./components/Footer/Footer";

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
    background: {
      default: "#f2dbb8",
      paper: "#f2dbb8",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={myTheme}>
      <div className="App">
        <Navbar />
        <MyCarousel/>
        <MyRoutes />
        <Footer/>
      </div>
    </ThemeProvider>
  );
}

export default App;
