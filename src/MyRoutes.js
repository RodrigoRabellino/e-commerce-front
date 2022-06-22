import { Route, Routes } from "react-router-dom";
import DashBoard from "./components/admin/dashboard/DashBoard";
import HomePage from "./components/homePage/HomePage";
import MyCarousel from "./components/homePage/MyCarousel";
import ProductDetail from "./components/productDetail/ProductDetail";
import AboutUs from "./components/aboutUs/AboutUs";

const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/admin" element={<DashBoard />} />
      <Route path="/productDetail" element={<ProductDetail />} />
      <Route path="/aboutUs" element={<AboutUs />} />
    </Routes>
  );
};

export default MyRoutes;
