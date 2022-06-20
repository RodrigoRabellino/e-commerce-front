import { Route, Routes } from "react-router-dom";
import HomePage from "./components/homePage/HomePage";

const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
};

export default MyRoutes;
