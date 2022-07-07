import { Route, Routes } from "react-router-dom";
import GridCategories from "./components/gridCategories/GridCategories";
import HomePage from "./components/homePage/HomePage";
import Login from "./components/login/Login";
import Register from "./components/login/Register";
import ProductDetail from "./components/productDetail/ProductDetail";
import AboutUs from "./components/aboutUs/AboutUs";
import StorePage from "./components/storePage/StorePage";
import ProductCarousel from "./components/productDetail/ProductCarousel";
import CheckOut from "./components/checkout/CheckOut";
import ContactUs from "./components/ContactUs/ContactUs";
import UserPage from "./components/userPage/UserPage";
import Welcome from "./components/login/Welcome";

const MyRoutes = ({ type }) => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/product/:id" element={<ProductDetail />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/categories" element={<GridCategories />} />
      <Route path="/store/:categoryName" element={<StorePage />} />
      <Route path="/productCarousel" element={<ProductCarousel />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/checkout" element={<CheckOut />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/userPage" element={<UserPage />} />
      <Route path="/welcome" element={<Welcome />} />
    </Routes>
  );
};

export default MyRoutes;
