import React from "react";
import { NavLink, Outlet } from "react-router";
import { MdPerson } from "react-icons/md";
import UserSidebar from "./UserSidebar/UserSidebar";
import SellerSidebar from "./SellerSidebar/SellerSidebar";
import AdminSidebar from "./AdminSidebar/AdminSidebar";
import { IoIosLogOut } from "react-icons/io";
import useAuth from "../../../hooks/useAuth";
import { toast } from "react-toastify";
import { GoHomeFill } from "react-icons/go";
import useRole from "../../../hooks/UseRole";
import Menu from "./Menu";
const Sidebar = () => {
  const { logoutFunction, setLoading } = useAuth();
  const handleLogOut = async () => {
    try {
      await logoutFunction();
      setLoading(false);
      return toast.success("Logout");
    } catch (err) {
      toast.error(err.message);
    }
  };

  const [role] = useRole();
  console.log(role);
  return (
    <div className="min-h-screen bg-linear-to-br from-[#17002e] via-[#07000f] to-[#340575] overflow-x-hidden">
      ``
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />

        {/* ================= MAIN CONTENT ================= */}
        <div className="drawer-content flex flex-col">
          {/* ===== NAVBAR ===== */}
          <nav
            className="navbar w-full
              bg-linear-to-r from-purple-900/40 via-black/30 to-purple-900/40
              backdrop-blur-2xl border-b border-purple-400/20
              shadow-[0_1px_10px_rgba(88,28,135,0.35)]
              lg:sticky lg:top-0 z-50 "
          >
            <label
              htmlFor="my-drawer-4"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2"
                fill="none"
                stroke="currentColor"
                className="size-5"
              >
                <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                <path d="M9 4v16"></path>
                <path d="M14 10l2 2l-2 2"></path>
              </svg>
            </label>

            <h1
              className="px-4 text-xl md:text-2xl font-extrabold
                bg-linear-to-r from-purple-300 to-indigo-400
                bg-clip-text text-transparent drop-shadow"
            >
              ContestHub Dashboard
            </h1>
          </nav>

          {/* ===== PAGE CONTENT ===== */}
          <div className="flex-1 p-4 md:p-8">
            <Outlet />
          </div>
        </div>

        {/* ================= SIDEBAR ================= */}
        <div className="mt-15 sm:mt-0 drawer-side is-drawer-close:overflow-visible">
          <label
            htmlFor="my-drawer-4"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>

          <div
            className="flex min-h-full flex-col items-start py-5
            bg-linear-to-b from-purple-900/40 via-black/40 to-purple-900/30
            backdrop-blur-2xl border-r border-purple-400/20
            shadow-[0px_2_10px_rgba(88,28,135,0.45)]
            is-drawer-close:w-14 is-drawer-open:w-64 transition-all duration-300"
          >
            {/* ===== SIDEBAR MENU ===== */}
            <ul className="menu w-full grow flex flex-col gap-2 p-4 text-white">
              {/* existing role-based sidebars (UNCHANGED) */}
              {/* home link */}
              <NavLink to="/">
                {" "}
                <Menu title={"Home"} icon={<GoHomeFill />}>
                  Home
                </Menu>
              </NavLink>

              {role === "user" && <UserSidebar />}

              {role === "creator" && <SellerSidebar />}

              {role === "admin" && <AdminSidebar />}

              <NavLink to="/dashboard/my-profile">
                <Menu title={"My-profile"} icon={<MdPerson />}>
                  My profile
                </Menu>
              </NavLink>

              <hr className="border-purple-400/20 my-3" />

              {/* ===== LOGOUT ===== */}
              <li>
                <NavLink to="/">
                  {" "}
                  <div
                    className="home  flex items-center gap-3 px-3 py-2 rounded-xl transition-all
                  hover:bg-red-500/20
                  is-drawer-close:tooltip is-drawer-close:tooltip-right"
                  >
                    <Menu title={"Home"} icon={<GoHomeFill />}>
                      <span className="is-drawer-close:hidden text-base font-semibold">
                        Home
                      </span>
                    </Menu>
                  </div>
                </NavLink>

                <button
                  onClick={handleLogOut}
                  className="
                  flex items-center gap-3 px-3 py-2 rounded-xl transition-all
                  hover:bg-red-500/20
                  is-drawer-close:tooltip is-drawer-close:tooltip-right
              "
                  data-tip="Logout"
                >
                  <IoIosLogOut className="text-xl text-red-400" />
                  <span className="is-drawer-close:hidden text-base font-semibold">
                    Logout
                  </span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
