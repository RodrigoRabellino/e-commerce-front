import { Route, Routes } from "react-router-dom";
import DashBoard from "./components/admin/dashboard/DashBoard";
import GridCategories from "./components/gridCategories/GridCategories";
import HomePage from "./components/homePage/HomePage";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import SignIn from "./components/login/SignIn";
import SignUp from "./components/login/SignUp";
import ProductDetail from "./components/productDetail/ProductDetail";
import AboutUs from "./components/aboutUs/AboutUs";
import StorePage from "./components/storePage/StorePage";
import ProductCarousel from "./components/productDetail/ProductCarousel";
import QuantityItems from "./components/productDetail/QuantityItems";
import AdminLogin from "./components/admin/login/AdminLogin";

const MyRoutes = ({ type }) => {
  if (type === "admin") {
    return (
      <Route path="/admin">
        <Route path="dashboard" element={<DashBoard />} />
        <Route path="login" element={<AdminLogin />} />
      </Route>
    );
  }

  return (
    <Routes>
      <Route path="/product/:id" element={<ProductDetail />} />
      <Route path="/aboutUs" element={<AboutUs />} />
      <Route path="/categories" element={<GridCategories />} />
      <Route path="/store" element={<StorePage />} />
      <Route path="/productCarousel" element={<ProductCarousel />} />
      <Route path="/quantityItems" element={<QuantityItems />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
};

export default MyRoutes;
