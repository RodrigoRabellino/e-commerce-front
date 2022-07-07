import React from "react";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
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
