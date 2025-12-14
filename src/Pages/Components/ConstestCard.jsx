import React from "react";
import logo from "../../assets/image1.jpg";
import { NavLink } from "react-router";

const ConstestCard = () => {
  return (
    <div>
      <div className="group relative bg-white/0 backdrop-blur-xl rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-purple-500/20 transition-all hover:-translate-y-2 duration-500 border border-white/20">
        {/* Gradient Border Effect */}
        <div className="absolute inset-0 bg-linear-to-br from-[#2563EB] via-pink-300 to- opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl -z-10 scale-105"></div>

        {/* Profile Image zoom  kora hoiche jokhon over korbo */}
        <div className="relative overflow-hidden">
          <img
            src={logo}
            alt={"partner.name"}
            className="w-full h-80  object-cover transition-transform duration-500 group-hover:scale-110"
          />
          {/* Online Badge */}
          {/* <div
            className={`absolute top-4 right-4 w-4 h-4 ${
              partner.studyMode === "Online" ? "bg-green-500" : "bg-red-500"
            } rounded-full ring-4 ring-white shadow-lg animate-pulse`}
          ></div> */}
        </div>

        {/* Card Body */}
        <div className="p-6 space-y-4">
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-bold text-gray-800">
              {"partner.name"}
            </h2>
            <h2 className="text-sm font-bold text-gray-800">
              Exp: {"partner.experienceLevel"}
            </h2>
            <div className="flex items-center gap-2">
              <span
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold shadow-md transition-all duration-500 ${`partner.studyMode === "Online"
                    ? "bg-green-100 text-green-800 ring-2 ring-green-500/30"
                    : "bg-red-100 text-red-800 ring-2 ring-red-500/30"`}`}
              >
                {/* Dot */}
                <span
                  className={`w-3 h-3 rounded-full animate-pulse ${`partner.studyMode === "Online"
                      ? "bg-green-500"
                      : "bg-red-500"`}`}
                ></span>

                {/* Text */}
                {`partner.studyMode === "Online"
                  ? "Online Now"
                  : "Offline"`}
              </span>
            </div>
          </div>

          {/* Subject and Rating */}

          <div className="flex justify-between items-center">
            <span className="px-4 py-2 bg-linear-to-r from-purple-500 to-pink-400 text-white font-semibold rounded-md text-sm">
              {`partner.subject`}
            </span>
            <div className="flex items-center gap-1">
              <span className="text-yellow-500 text-xl">
                <img className="w-5 h-5" src={`rating`} alt="" />
              </span>
              <span className="font-bold text-gray-700 ml-1">
                {`partner.rating`}
              </span>
            </div>
          </div>

          {/* create partner profile button */}
          <NavLink to={`/partnersDetails/${8}`}>
            <button className="w-full mt-4 py-3 bg-linear-to-r from-[#2563EB] to-pink-600 text-white font-bold rounded-xl hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 shadow-md cursor-pointer">
              View Profile
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ConstestCard;
