import { Route, Routes } from "react-router-dom";
import DashBoard from "./components/admin/dashboard/DashBoard";
import GridCategories from "./components/gridCategories/GridCategories";
import HomePage from "./components/homePage/HomePage";
<<<<<<< Updated upstream
import ProductDetail from "./components/productDetail/ProductDetail";
import AboutUs from "./components/aboutUs/AboutUs";
import StorePage from "./components/storePage/StorePage";
=======
import MyCarousel from "./components/homePage/MyCarousel";
import Login from "./components/admin/login/Login"
>>>>>>> Stashed changes

const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/admin" element={<DashBoard />} />
      <Route path="/productDetail" element={<ProductDetail />} />
      <Route path="/aboutUs" element={<AboutUs />} />
      <Route path="/categories" element={<GridCategories />} />
<<<<<<< Updated upstream
      <Route path="/store" element={<StorePage />} />
=======
      <Route path="/login" element={<Login/>} />
>>>>>>> Stashed changes
    </Routes>
  );
};

export default MyRoutes;
