import React from "react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import MyRoutes from "../MyRoutes";

const UserMain = () => {
  return (
    <>
      <Navbar />
      <MyRoutes type="user" />
      <Footer />
    </>
  );
};

export default UserMain;
