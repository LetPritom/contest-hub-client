import React from "react";
import { Outlet } from "react-router";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

const MainLayouts = () => {
  return (
    <div className="flex flex-col">
      <div className="">
        <Navbar></Navbar>
      </div>

      <div className="flex-1">
        <Outlet></Outlet>
      </div>
      <div className="">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default MainLayouts;
