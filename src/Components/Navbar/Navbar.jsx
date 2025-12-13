import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";

import { AuthContext } from "../../Providers/AuthContext";
import logo from "../../assets/logo.png";
import { NavLink } from "react-router";
import { GoHomeFill } from "react-icons/go";
import { FaBookOpenReader, FaUsersViewfinder } from "react-icons/fa6";
import { MdOutlineCreateNewFolder } from "react-icons/md";
import Container from "../Container";

const Navbar = () => {
  //   const { user, logoutFunction, loading } = useAuth(AuthContext);
  //   console.log(user);
  //   const handleLogOut = () => {
  //     logoutFunction()
  //       .then(() => {
  //         return toast.success("Logout");
  //       })
  //       .catch((err) => {
  //         toast.error(err);
  //       });
  //   };
  toast;
  const [dark, setDark] = useState("");
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    const html = document.querySelector("html");
    html.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleTheme = (checked) => {
    setDark(checked);
    setTheme(checked ? "dark" : "light");
  };

  return (
    <Container className="border-b border-gray-300">
      <div className=" ">
        <div className="navbar w-9/12 lg:w-10/12 mx-auto py-4">
          <div className="navbar-start">
            <div className="dropdown ">
              <div
                tabIndex={0}
                role="button"
                className=" mx-2 p-2 btn lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <NavLink to="/">
                  <li className="hover:text-[#f55a00] cursor-pointer">Home</li>
                </NavLink>
                <NavLink to="/find-partner">
                  <li className="hover:text-[#f55a00] cursor-pointer">
                    All Contests
                  </li>
                </NavLink>

                {/* extra section */}

                {/* <NavLink to="/create-partner">
                  <li className="hover:text-[#f55a00] cursor-pointer">
                    Create Partner Profile
                  </li>
                </NavLink>

                <NavLink to="my-connection">
                  <li className="hover:text-[#f55a00] cursor-pointer">
                    My Connections
                  </li>
                </NavLink> */}
              </ul>
            </div>
            <div className="logo flex gap-2 items-center ">
              <img className="h-10 w-10 cursor-pointer" src={logo} alt="" />
              <div className="title">
                <h1
                  className="text-2xl font-bold
                bg-linear-to-r from-blue-700 to-purple-500
                bg-clip-text text-transparent"
                >
                  ContestHub
                </h1>
              </div>
            </div>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul
              className={`menu menu-horizontal px-1 flex gap-5 font-semibold transition-all duration-300 text-[#2563EB] ${
                dark ? "text-white" : "text-[#2563EB]"
              }`}
            >
              <NavLink to="/">
                <div className="flex items-center gap-1 icon">
                  <GoHomeFill className="text-md" />
                  <li className="hover:text-[#f55a00] cursor-pointer flex gap-1 items-center">
                    Home
                  </li>
                </div>
              </NavLink>

              <NavLink to="/all-contest">
                <div className="flex items-center gap-1 icon">
                  <FaUsersViewfinder className="text-md" />
                  <li className="hover:text-[#f55a00] cursor-pointer">
                    All Contest
                  </li>
                </div>
              </NavLink>

              {/* extra section */}

              {/* <NavLink to="/create-partner">
                <div className="flex items-center gap-1 icon">
                  <MdOutlineCreateNewFolder className="text-md" />
                  <li className="hover:text-[#f55a00] cursor-pointer">
                    Create Partner Profile
                  </li>
                </div>
              </NavLink>

              <NavLink to="my-connection">
                <div className="flex items-center gap-1 icon">
                  <FaBookOpenReader className="text-md" />

                  <li className="hover:text-[#f55a00] cursor-pointer ">
                    My Connections
                  </li>
                </div>
              </NavLink> */}
            </ul>
          </div>
          <div className="navbar-end">
            {/* <a
            className="border border-[#f55a00] bg-transparent text-[#2563EB]  
                         px-3 py-1.5 rounded-lg cursor-pointer font-semibold
                       hover:bg-white hover:text-[#f55a00] hover:border-[#2563EB]
                        transition-all duration-200 ease-in-out shadow-sm hover:shadow-md"
          >
            Log in
          </a> */}
            {/* theme toggle button */}
            <div className={`theme flex gap-1 items-center mx-2  px-2 py-2 border  ${dark? 'text-white' : 'text-purple-700'}  rounded-full ${dark? 'border-white' : 'border-purple-700'}`}>
              <p className="text-sm font-semibold sm:text-es">
                {dark ? "Dark" : "Light"}
              </p>
              <input
                onChange={(e) => handleTheme(e.target.checked)}
                type="checkbox"
                className="toggle"
              />
            </div>
            (
            <div className="img">
              <button
                className="cursor-pointer"
                popoverTarget="popover-1"
                style={{ anchorName: "--anchor-1" }}
              >
                {/* <img
                  className="h-10 w-10 rounded-full"
                  src={''}
                  alt="user-image"
                /> */}
              </button>

              <ul
                className="dropdown menu w-32 flex flex-col justify-center rounded-lg bg-white shadow-sm"
                popover="auto"
                id="popover-1"
                style={{ positionAnchor: "--anchor-1" }}
              >
                <div className="down flex flex-col justify-center">
                  <NavLink to="/profile">
                    <p className="text-sm font-semibold my-2">Profile</p>
                  </NavLink>
                </div>

                <div className="button">
                  <button
                    onClick={"handleLogOut"}
                    className="border border-[#f55a00] bg-transparent text-[#2563EB]  
                         px-3 py-1.5 rounded-lg cursor-pointer font-semibold
                        hover:text-[#f55a00] hover:border-[#2563EB]
                        transition-all duration-200 ease-in-out shadow-sm hover:shadow-md"
                  >
                    Log Out
                  </button>
                </div>
              </ul>
            </div>
            ) : (
            <NavLink to="/login">
              <button
                className="
                    relative px-5 py-2 rounded-xl font-semibold text-md
                    text-white
                    bg-linear-to-r from-blue-600 via-indigo-600 to-purple-500
                    shadow-lg shadow-indigo-500/20
                    overflow-hidden
                    transition-all duration-500 ease-out
                    hover:shadow-2xl hover:shadow-purple-500/40
                    hover:scale-105
                    hover:bg-linear-to-r hover:from-blue-700 hover:via-indigo-700 hover:to-purple-500
                    active:scale-95
                    cursor-pointer
"
              >
                {/* Shiny effect (optional but pro lagbe) */}
                <span className="absolute inset-0 w-full h-full bg-linear-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>

                {/* Button text */}
                <span className="relative z-10">Login</span>
              </button>
            </NavLink>
            )
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Navbar;
