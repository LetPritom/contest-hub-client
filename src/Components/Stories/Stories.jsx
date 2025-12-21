import React from "react";
import WinnerMarquee from "./WinnerMarquee";
import { NavLink } from "react-router";
// import { useQuery } from "@tanstack/react-query";
// import axios from "axios";

const Stories = () => {
  //   const { data: winners = [] } = useQuery({
  //     queryKey: ["winners"],
  //     queryFn: async () => {
  //       const res = await axios(`${import.meta.env.VITE_API_URL}/all-winner`);
  //       return res.data;
  //     },
  //   });
  return (
    <div className="min-h-screen bg-linear-to-br from-purple-950 via-black to-black text-white py-16 px-4 overflow-hidden relative">
      <div className="absolute top-10 left-10 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-pink-600/20 rounded-full blur-3xl animate-pulse delay-1000" />
      {/* Heading */}
      <div className="relative z-10 max-w-5xl mx-auto text-center px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
          Stories from <span className="text-purple-400">ContestHub</span>
        </h2>
        

        <p className="text-gray-300 text-lg leading-relaxed">
          Every year, thousands of contests are created on ContestHub by
          passionate creators. Participants showcase their talent, become
          winners, and discover a new version of themselves.
        </p>

        <p className="mt-4 text-gray-400 text-base">
          ContestHub is a growing community where creativity meets opportunity,
          and every contest creates a new success story.
        </p>


        <h2 className="text-4xl md:text-5xl font-extrabold my-18">
          Happy Winner of  <span className="text-purple-400">ContestHub</span>
        </h2>
      </div>



      {/* Winner Marquee */}
      <div className="relative z-10 mt-20">
        <WinnerMarquee />
      </div>

      <div className="button flex justify-center my-14">
         <NavLink to="/signup">
        <button className="px-12 my-5 cursor-pointer py-6 text-2xl font-bold text-white rounded-2xl bg-white/20 backdrop-blur-2xl border border-white hover:from-purple-700 hover:to-pink-700 shadow-2xl hover:shadow-purple-500/60 transform hover:scale-103 transition-all duration-500 animate-bounce hover:animate-none  flex justify-center items-center ">
          Go and Join🚀
        </button>
      </NavLink>
      </div>

     
    </div>
  );
};

export default Stories;
