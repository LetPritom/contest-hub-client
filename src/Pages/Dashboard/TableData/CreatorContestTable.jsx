import React from "react";
import { NavLink } from "react-router";
import { toast } from "react-toastify";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const CreatorContestTable = ({ creator, refetch }) => {
const axiosSecure= useAxiosSecure()
  

  const { contestType, image, name, price, prizeMoney, status, _id } = creator;

  const handleDelete = async () => {
    try {
      await axiosSecure.delete(
        `/delete-contest/${_id}`
      );

      toast.success("Delete");
      refetch();
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div className="w-11/12 max-w-7xl mx-auto my-10">
      {/* Mobile Card */}
      <div className="block lg:hidden">
        <div className="bg-white/5 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl p-5 space-y-5">
          {/* profile picture & name */}
          <div className="flex items-start gap-4">
            <div className="avatar shrink-0">
              <div className="mask mask-squircle w-20 h-20 ring-4 ring-[#f55a00] ring-offset-2">
                <img src={image} alt={name} className="object-cover" />
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-bold text-lg text-white truncate">{name}</h3>
              <p className="text-sm text-gray-300 truncate">{contestType}</p>
            </div>
          </div>

          {/* Subject & Status */}
          <div className="text-sm my-4 space-y-2">
            <div className="flex items-center gap-4">
              <span className="font-semibold text-white">Prize Money:</span>
              <span className="px-4 py-2 bg-purple-900/30 text-purple-200 font-bold rounded-full text-xs backdrop-blur-sm">
                $ {prizeMoney}
              </span>
            </div>

            <div className="flex items-center gap-4">
              <span className="font-semibold text-white">Entry Fee:</span>
              <span
                className={`px-4 py-2 rounded-full font-bold text-xs flex items-center gap-2 backdrop-blur-sm `}
              >
                <span
                  className={`w-auto h-3 rounded-full text-white flex justify-center items-center`}
                >
                  $ {price}
                </span>
              </span>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-3 pt-3">
            {status === "pending" ? (
              <NavLink to={`/dashboard/edit-contest/${_id}`}>
                <button
                  disabled={status !== "pending"}
                  className="flex-1 btn btn-sm rounded-lg bg-green-600 text-white backdrop-blur-md border border-white/20 shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  update
                </button>
              </NavLink>
            ) : (
              <button
                disabled={status !== "pending"}
                className="flex-1 btn btn-sm rounded-lg bg-gray-400 text-white cursor-not-allowed"
              >
                update
              </button>
            )}

            {/* delete */}

            <button
              disabled={status !== "pending"}
              onClick={handleDelete}
              className={`${
                status === "pending"
                  ? "btn btn-sm bg-red-600 backdrop-blur-md border border-white/20 text-white shadow-md hover:shadow-xl transform hover:bg-red-700 hover:scale-105 transition-all duration-300 rounded-lg"
                  : " bg-red-400 text-white btn btn-sm rounded-lg "
              }`}
            >
              Delete
            </button>

            {/* submission button */}

            <NavLink to={`/dashboard/submitted-Tasks/${_id}`}>
              <button
                className={`flex-1 btn btn-sm bg-white/20 backdrop-blur-2xl border border-white/20 text-white shadow-md hover:shadow-xl transform  hover:scale-105 transition-all duration-300 rounded-lg`}
              >
                Submissions
              </button>
            </NavLink>
          </div>
        </div>
      </div>

      {/* Desktop Table */}
      <div className="hidden lg:block overflow-x-auto rounded-2xl shadow-2xl border border-white/20 bg-white/5 backdrop-blur-xl">
        <table className="table table-zebra w-full">
          <thead className=" text-white text-lg">
            <tr>
              <th className="py-5 rounded-tl-2xl">Contest Detail</th>
              <th className="py-5">Prize Money</th>
              <th className="py-5">Entry Fee</th>
              <th className="py-5">Status</th>
              <th className="py-5 rounded-tr-2xl text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr className="">
              <td className="py-6">
                <div className="flex items-center gap-4">
                  <div className="avatar">
                    <div className="mask mask-squircle w-16 h-16 ring-4 ring-white ring-offset-2">
                      <img src={image} alt={name} className="object-cover" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold text-xl text-white">{name}</div>
                    <div className="text-sm opacity-70 text-gray-300">
                      <p>contest type : {contestType}</p>
                    </div>
                  </div>
                </div>
              </td>

              {/* priXeMoney */}

              <td>
                <span className="px-5 py-2 bg-purple-900/30 text-purple-200 font-bold rounded-full text-sm shadow-sm backdrop-blur-sm">
                  $ {prizeMoney}
                </span>
              </td>
              <td>
                {/* entry fee */}

                <span className="px-5 py-2 bg-purple-900/30 text-purple-200 font-bold rounded-full text-sm shadow-sm backdrop-blur-sm">
                  $ {price}
                </span>
              </td>

              {/* status */}

              <td>
                <span
                  className={` py-3 rounded-full font-bold text-sm flex items-center justify-center gap-2 shadow-sm backdrop-blur-sm `}
                >
                  <span
                    className={`w-auto h-3 rounded-full text-white flex items-center justify-center`}
                  >
                    {status}
                  </span>
                </span>
              </td>

              <td className="text-center space-x-3">
                {/* update */}

                {status === "pending" ? (
                  <NavLink to={`/dashboard/edit-contest/${_id}`}>
                    <button className="btn btn-sm rounded-lg bg-green-600 text-white backdrop-blur-md border border-white/20 shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                      update
                    </button>
                  </NavLink>
                ) : (
                  <button
                    disabled
                    className="btn btn-sm rounded-lg bg-gray-400 text-white cursor-not-allowed"
                  >
                    update
                  </button>
                )}

                {/* delete button  */}

                <button
                  disabled={status !== "pending"}
                  onClick={handleDelete}
                  className={`${
                    status === "pending"
                      ? "btn btn-sm bg-red-600 backdrop-blur-md border border-white/20 text-white shadow-md hover:shadow-xl transform hover:bg-red-700 hover:scale-105 transition-all duration-300 rounded-lg"
                      : " bg-red-400 text-white btn btn-sm rounded-lg "
                  }`}
                >
                  Delete
                </button>

                {/* Submissions button */}

                <NavLink to={`/dashboard/submitted-tasks/${_id}`}>
                  <button
                    className={`btn btn-sm bg-white/20 backdrop-blur-2xl border border-white/20 text-white shadow-md hover:shadow-xl transform  hover:scale-105 transition-all duration-300 rounded-lg`}
                  >
                    See Submissions
                  </button>
                </NavLink>
              </td>
            </tr>
          </tbody>
        </table>

        {/* <button className="btn btn-sm bg-transparent backdrop-blur-md border border-white/20 text-white shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 rounded-lg">
              Approve
            </button> */}
      </div>
    </div>
  );
};

export default CreatorContestTable;
