import React from "react";
import { NavLink, Outlet } from "react-router";
import { MdPerson } from "react-icons/md";
import UserSidebar from "./UserSidebar/UserSidebar";
import SellerSidebar from "./SellerSidebar/SellerSidebar";
import AdminSidebar from "./AdminSidebar/AdminSidebar";
import { IoIosLogOut } from "react-icons/io";
import useAuth from "../../../hooks/useAuth";
import { toast } from "react-toastify";

const Sidebar = () => {

    const {logoutFunction , setLoading} = useAuth()
     const handleLogOut = async() => {
          try {
           await logoutFunction()
           setLoading(false)
           return toast.success("Logout");
    
          } catch (err) {
            toast.error(err.message)
          }
         
    
        };
  return (
    <div>
      <div className="drawer lg:drawer-open ">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content ">
          {/* Navbar */}
          <nav className="navbar w-full bg-base-300">
            <label
              htmlFor="my-drawer-4"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              {/* Sidebar toggle icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2"
                fill="none"
                stroke="currentColor"
                className="my-1.5 inline-block size-4"
              >
                <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                <path d="M9 4v16"></path>
                <path d="M14 10l2 2l-2 2"></path>
              </svg>
            </label>
            <h1 className="px-4">ContestHub Dashboard</h1>
          </nav>
          {/* Page content here */}
          <Outlet></Outlet>
        </div>

        <div className="drawer-side is-drawer-close:overflow-visible">
          <label
            htmlFor="my-drawer-4"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <div className="flex min-h-full flex-col items-start bg-base-200 is-drawer-close:w-14 is-drawer-open:w-64">
            {/* Sidebar content here */}

            <ul className="menu w-full grow flex flex-col gap-2">
              <UserSidebar></UserSidebar>
              <SellerSidebar></SellerSidebar>
              <AdminSidebar></AdminSidebar>

              {/* update profile */}
              <hr />

              <NavLink to="/profile">
                <li>
                  <button
                    className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                    data-tip="Settings"
                  >
                    {/* Settings icon */}
                    <MdPerson className="text-lg" />
                    <span className="is-drawer-close:hidden text-lg font-semibold">
                      Profile
                    </span>
                  </button>
                </li>
              </NavLink>

              <li onClick={handleLogOut} className="">
                <button
                  className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                  data-tip="Settings"
                >
                  {/* logout*/}
                  <IoIosLogOut className="text-lg" />
                  <span className="is-drawer-close:hidden text-lg font-semibold">Logout</span>
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
