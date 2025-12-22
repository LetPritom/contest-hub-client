import React from "react";
import { Outlet } from "react-router";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

const MainLayouts = () => {
  AOS.init({
    duration: 800, // animation time
    easing: "ease-in-out", // smooth feel
    once: false, // false = scroll up-down e abar animate hobe (recommended)
    mirror: true,
    anchorPlacement: "top-bottom", // optional
  });

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
