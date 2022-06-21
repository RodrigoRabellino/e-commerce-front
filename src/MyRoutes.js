import { Route, Routes } from "react-router-dom";
import MainPage from "./components/admin/dashboard/DashBoard";
import HomePage from "./components/homePage/HomePage";
import MyCarousel from "./components/homePage/MyCarousel";

const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/admin" element={<MainPage />} />
      <Route path="/myCarousel" element={<MyCarousel />} />
      {/* <Route path="/productDetail" element={<ProductDetail />} /> */}
    </Routes>
  );
};

export default MyRoutes;
