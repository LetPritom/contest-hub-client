import React from "react";
import { useForm } from "react-hook-form";
// import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { toast } from "react-toastify";
// import axios from "axios";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const ManageUserTable = ({ user, refetch }) => {
  const { name, email, role, image } = user || {};
//   const axiosSecure = useAxiosSecure();
const axiosSecure = useAxiosSecure();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  const onSubmit = async (data) => {
    try {
      const {role} = data;
      console.log(role)
      await axiosSecure.patch(`/change-role`, { email, role });
      toast.success("role Update");
      refetch()
      console.log(data);
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto my-6 px-2 md:px-4">
      {/* Glass Table Container */}
      <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl md:rounded-3xl shadow-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-white text-sm md:text-base">
            <thead>
              <tr className="bg-white/10 backdrop-blur-md text-purple-200 text-left">
                <th className="px-2 py-3 md:px-6 md:py-5 font-semibold">
                  User Name
                </th>
                <th className="px-2 py-3 md:px-6 md:py-5 font-semibold">
                  Current Role
                </th>
                <th className="px-2 py-3 md:px-6 md:py-5 font-semibold text-center">
                  Change Role
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-white/10 hover:bg-white/5 transition-all duration-300">
                <td className="px-2 py-4 md:px-6 md:py-6">
                  <div className="flex items-center gap-2 md:gap-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-linear-to-br from-purple-500 to-pink-500 flex items-center justify-center text-base md:text-xl font-bold animate-pulse">
                      <img
                        className="rounded-full h-10 w-10 object-cover relative z-50"
                        src={image}
                        alt={name}
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-sm md:text-lg truncate">
                        {name}
                      </p>
                      <p className="text-xs md:text-sm text-gray-400 truncate">
                        {email}
                      </p>
                    </div>
                  </div>
                </td>
                <td className="px-2 py-4 md:px-6 md:py-6">
                  <span className="px-3 py-1 md:px-5 md:py-2 bg-purple-800/40 backdrop-blur-sm rounded-full font-semibold text-purple-200 shadow-md text-xs md:text-base">
                    {role}
                  </span>
                </td>
                <td className="px-2 py-4 md:px-6 md:py-6 text-center">
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <select
                      {...register("role", {
                        required: "Please select role",
                      })}
                      defaultValue={role}
                      className="w-full max-w-30 md:max-w-xs px-3 py-2 md:px-5 md:py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white text-xs md:text-base focus:outline-none focus:border-purple-400 focus:ring-4 focus:ring-purple-500/30"
                    >
                      <option value="User" className="bg-gray-900">
                        User
                      </option>
                      <option value="Creator" className="bg-gray-900">
                        Creator
                      </option>
                      <option value="Admin" className="bg-gray-900">
                        Admin
                      </option>
                    </select>
                    {errors.role && (
                      <p className="text-red-400 text-sm mt-2">
                        {errors.role.message}
                      </p>
                    )}

                    <button className="mt-2 cursor-pointer md:mt-3 w-full max-w-30 md:max-w-xs py-2 md:py-3 bg-linear-to-r from-purple-600 to-pink-600 text-white font-bold rounded-xl shadow-lg hover:shadow-purple-500/50 hover:scale-105 transform transition-all duration-300 text-xs md:text-base">
                      Change
                    </button>
                  </form>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageUserTable;
