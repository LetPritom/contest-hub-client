import { useEffect, useRef, useState } from "react";
import logo from "../../assets/logo.png";
import { NavLink } from "react-router";
import { GoHomeFill } from "react-icons/go";
import { FaUsersViewfinder } from "react-icons/fa6";
import { MdOutlineLeaderboard, MdOutlineLogout, MdOutlineSpaceDashboard } from "react-icons/md";
import { MdDarkMode, MdLightMode , } from "react-icons/md";
import { MdAutoStories } from "react-icons/md";
import Container from "../Container";
import useAuth from "../../hooks/useAuth";
import { RiArrowDropDownLine } from "react-icons/ri";
import { toast } from "react-toastify";
import { FaInfoCircle } from "react-icons/fa";
import LoaderSpinner from "../Loader/LoaderSpinner";

const Navbar = () => {
  const { user, logoutFunction, loading, setLoading } = useAuth();

  console.log(user);
  const handleLogOut = async () => {
    try {
      await logoutFunction();
      setOpen(false);
      setLoading(false);
      return toast.success("Logout");
    } catch (err) {
      toast.error(err.message);
    }
  };
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

  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  // outside click close
  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <Container className="border-b border-gray-300">
      <div className=" ">
        <div className="navbar lg:w-12/12 mx-auto py-4">
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

                <NavLink to="/stories">
                <div className="flex items-center gap-1 icon">
                  <MdAutoStories className="text-md" />
                  <li className="hover:text-[#f55a00] cursor-pointer">
                    Stories
                  </li>
                </div>
              </NavLink>
         

              <NavLink to="/leaderboard">
                <div className="flex items-center gap-1 icon">
                  <MdOutlineLeaderboard className="text-md" />
                  <li className="hover:text-[#f55a00] cursor-pointer">
                    Leaderboard
                  </li>
                </div>
              </NavLink>

              <NavLink to="/about">
                <div className="flex items-center gap-1 icon">
                  <FaInfoCircle className="text-md" />
                  <li className="hover:text-[#f55a00] cursor-pointer">
                    About Us
                  </li>
                </div>
              </NavLink>

              </ul>
            </div>
            <div className="logo flex gap-2 items-center ">
              <NavLink to="/">
                <img className="h-10 w-10 cursor-pointer" src={logo} alt="" />
              </NavLink>

              <div className="title">
                <NavLink to="/">
                  <h1
                    className="text-2xl font-bold
                  bg-linear-to-r from-blue-700 to-purple-500
                  bg-clip-text text-transparent hidden md:block"
                  >
                    ContestHub
                  </h1>
                </NavLink>
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

              <NavLink to="/stories">
                <div className="flex items-center gap-1 icon">
                  <MdAutoStories className="text-md" />
                  <li className="hover:text-[#f55a00] cursor-pointer">
                    Stories
                  </li>
                </div>
              </NavLink>
         

              <NavLink to="/leaderboard">
                <div className="flex items-center gap-1 icon">
                  <MdOutlineLeaderboard className="text-md" />
                  <li className="hover:text-[#f55a00] cursor-pointer">
                    Leaderboard
                  </li>
                </div>
              </NavLink>

              <NavLink to="/about">
                <div className="flex items-center gap-1 icon">
                  <FaInfoCircle className="text-md" />
                  <li className="hover:text-[#f55a00] cursor-pointer">
                    About Us
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
            {/* theme toggle button */}

            <div
              className={`flex items-center gap-2 px-3 py-1.5 mx-2 rounded-full border
                transition-all duration-300
                ${
                  dark? "bg-black/30 border-white/30 text-white": "bg-purple-100 border-purple-400 text-purple-700"
                }`}
            >
              {/* Icon (Left side) */}
              {dark ? (
                <MdDarkMode className="text-lg text-indigo-400 transition-all duration-300" />
              ) : (
                <MdLightMode className="text-lg text-yellow-400 transition-all duration-300" />
              )}

              {/* Toggle */}
              <input
                type="checkbox"
                checked={dark}
                onChange={(e) => handleTheme(e.target.checked)}
                className="toggle toggle-sm bg-transparent border border-current ml-2"
              />
            </div>

            {/* user and dashboard dropdown */}

            {user ? (
              <div
                className="relative z-50 hover:bg-purple-600/20 p-1 rounded-full transition duration-400 "
                ref={dropdownRef}
              >
                {/* Avatar */}
                <button
                  onClick={() => setOpen(!open)}
                  className="focus:outline-none flex items-center  gap-2 p-1 cursor-pointer"
                >
                  {!loading && user && (
                    <img
                      src={user?.photoURL}
                      alt="user"
                      className="h-8 w-8 rounded-full ring-2 ring-purple-500 
                              hover:ring-purple-400 transition"
                    />
                  )}

                  {open ? (
                    <RiArrowDropDownLine className="text-2xl cursor-pointer -scale-100 transition duration-250" />
                  ) : (
                    <RiArrowDropDownLine className="text-2xl cursor-pointer transition duration-250" />
                  )}
                </button>

                {/* Dropdown */}
                <div
                  className={`absolute right-0 mt-3 w-56 rounded-xl
                  bg-linear-to-b from-purple-900/60 to-purple-900/40
                text-white shadow-xl border border-purple-700/40
                  transform transition-all duration-200 ease-out
                  ${
                    open
                      ? "scale-100 opacity-100"
                      : "scale-95 opacity-0 pointer-events-none"
                  }`}
                >
                  {/* User info */}
                  <div className="px-4 py-3 border-b border-purple-700/40">
                    <p
                      className="text-sm font-semibold truncate"
                      title={user?.displayName}
                    >
                      {user.displayName}
                    </p>
                  </div>

                  {/* Menu */}
                  <div className="flex flex-col px-2 py-2">
                    <NavLink
                      to="/dashboard"
                      className="px-3 py-2 rounded-lg text-sm font-medium cursor-pointer
                    hover:bg-purple-700/30 transition flex items-center gap-2"
                      onClick={() => setOpen(false)}
                    >
                      <MdOutlineSpaceDashboard />
                      Dashboard
                    </NavLink>
                    <button
                      onClick={handleLogOut}
                      className="px-3 py-2 rounded-lg text-sm font-medium text-red-500 hover:text-white
                    hover:bg-purple-700/30 transition flex items-center gap-2 cursor-pointer"
                    >
                      <MdOutlineLogout />
                      Logout
                    </button>
                  </div>
                </div>
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
            )}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Navbar;
