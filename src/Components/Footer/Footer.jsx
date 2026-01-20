import React from "react";
import logo from "../../assets/logo.png";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaXTwitter,
} from "react-icons/fa6";
import { FaWhatsappSquare } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
import { SiGmail } from "react-icons/si";
import { IoLocationSharp } from "react-icons/io5";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="relative bg-linear-to-br from-indigo-900 via-black to-purple-900 overflow-hidden">
      {/* Subtle background overlay for depth */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 py-16">
        {/* Main Footer Content - Glass Card Style */}

        <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl p-10 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Logo & Title */}
            <div className="flex flex-col items-center md:items-start">
              <img
                className="w-20 h-20 mb-4"
                src={logo}
                alt="Contest Hub Logo"
              />
              <h1 className="text-white font-extrabold text-4xl tracking-tight drop-shadow-lg">
                Contest Hub
              </h1>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-white text-xl font-bold mb-6">Contact Us</h3>
              <ul className="space-y-4 text-white/80">
                <li className="flex items-center gap-3 hover:text-purple-300 transition">
                  <IoMdCall className="text-xl" /> 01522-100212
                </li>
                <li className="flex items-center gap-3 hover:text-purple-300 transition">
                  <SiGmail className="text-xl" /> pritom.royjess@gmail.com
                </li>
                <li className="flex items-center gap-3 hover:text-purple-300 transition">
                  <IoLocationSharp className="text-xl" />
                  Jashore, Bangladesh
                </li>
              </ul>
            </div>

            {/* Useful Links */}
            <div>
              <h3 className="text-white text-xl font-bold mb-6">
                Useful Links
              </h3>
              <ul className="space-y-4 text-white/80">
                <Link to="/about">
                  <li className="hover:text-purple-300 cursor-pointer transition">
                    About Us
                  </li>
                </Link>
                <Link to="/all-contest">
                  {" "}
                  <li className="hover:text-purple-300 cursor-pointer transition">
                    Contests
                  </li>
                </Link>
                <Link to="/leaderboard">
                  <li className="hover:text-purple-300 cursor-pointer transition">
                    Leaderboard
                  </li>
                </Link>
                <Link to="/policy">
                  <li className="hover:text-purple-300 cursor-pointer transition">
                    Privacy Policy
                  </li>
                </Link>
              </ul>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-white text-xl font-bold mb-6">
                Social Contact
              </h3>
              <ul className="text-white flex flex-col  gap-2">
                <a
                  target="_blank" // ← নতুন ট্যাবে খুলবে
                  rel="noopener noreferrer"
                  href="https://www.facebook.com/prithom.roy.94"
                >
                  <li className="flex items-center gap-2 hover:underline cursor-pointer">
                    <FaFacebook />
                    Facebook
                  </li>
                </a>

                <a
                  target="_blank" // ← নতুন ট্যাবে খুলবে
                  rel="noopener noreferrer"
                  href="https://www.instagram.com/_pritom__roy_/"
                >
                  <li className="flex items-center gap-2 hover:underline cursor-pointer">
                    <FaInstagram />
                    Instagram
                  </li>
                </a>

                <a
                  target="_blank" // ← নতুন ট্যাবে খুলবে
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/in/pritom-roy-jess/"
                >
                  <li className="flex items-center gap-2 hover:underline cursor-pointer">
                    <FaLinkedin />
                    Linkedin
                  </li>
                </a>

                {/* <li className="flex items-center gap-2 hover:underline cursor-pointer">
              twitter
             
            </li>
            <li className="flex items-center gap-2 hover:underline cursor-pointer">
              <FaWhatsappSquare />
              Whatsapp
            </li> */}
              </ul>
            </div>
          </div>

          {/* Description */}
          <div className="mt-16 text-center">
            <p className="text-white/70 text-lg max-w-4xl mx-auto leading-relaxed">
              Contest Hub – Your ultimate platform for competitive programming.
              Track upcoming contests, join challenges from top platforms,
              improve your skills, and climb the global leaderboard. Built for
              coders, by coders. 🚀
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-10 text-white/60 text-sm">
          <p>Copyright © 2025 Contest Hub. All rights reserved.</p>
        </div>
      </div>

      {/* Decorative blurred orbs for extra depth */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-indigo-600/20 rounded-full blur-3xl"></div>
      </div>
    </footer>
  );
};

export default Footer;
