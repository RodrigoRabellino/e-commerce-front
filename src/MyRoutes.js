import { Route, Routes } from "react-router-dom";
import DashBoard from "./components/admin/dashboard/DashBoard";
import GridCategories from "./components/gridCategories/GridCategories";
import HomePage from "./components/homePage/HomePage";

import Login from "./components/admin/login/Login";
import ProductDetail from "./components/productDetail/ProductDetail";
import AboutUs from "./components/aboutUs/AboutUs";
import StorePage from "./components/storePage/StorePage";
import ProductCarousel from "./components/productDetail/ProductCarousel.jsx";
import QuantityItems from "./components/productDetail/QuantityItems";
import MyCarousel from "./components/homePage/MyCarousel";

const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/admin" element={<DashBoard />} />
      <Route path="/product/:id" element={<ProductDetail />} />
      <Route path="/aboutUs" element={<AboutUs />} />
      <Route path="/categories" element={<GridCategories />} />
      <Route path="/store" element={<StorePage />} />
      <Route path="/productCarousel" element={<ProductCarousel />} />
      <Route path="/quantityItems" element={<QuantityItems />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default MyRoutes;
