import { Route, Routes } from "react-router-dom";
import DashBoard from "./components/admin/dashboard/DashBoard";
import HomePage from "./components/homePage/HomePage";
import MyCarousel from "./components/homePage/MyCarousel";

const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/admin" element={<DashBoard />} />
    </Routes>
  );
};

export default MyRoutes;
