import React from 'react';

const TableData = () => {
    return (
        <div className="w-11/12 max-w-7xl mx-auto my-10">
  {/* Mobile Card */}
  <div className="block lg:hidden">
    <div className="bg-white/5 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl p-5 space-y-5">
      {/* profile picture & name */}
      <div className="flex items-start gap-4">
        <div className="avatar shrink-0">
          <div className="mask mask-squircle w-20 h-20 ring-4 ring-[#f55a00] ring-offset-2">
            <img src={'image'} alt={'alt'} className="object-cover" />
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-bold text-lg text-white truncate">{'res.name'}</h3>
          <p className="text-sm text-gray-300 truncate">{'res.location'}</p>
        </div>
      </div>

      {/* Subject & Status */}
      <div className="text-sm my-4 space-y-2">
        <div className="flex items-center gap-4">
          <span className="font-semibold text-white">Subject:</span>
          <span className="px-4 py-2 bg-purple-900/30 text-purple-200 font-bold rounded-full text-xs backdrop-blur-sm">
            {'res.subject'}
          </span>
        </div>

        <div className="flex items-center gap-4">
          <span className="font-semibold text-white">Status:</span>
          <span className={`px-4 py-2 rounded-full font-bold text-xs flex items-center gap-2 backdrop-blur-sm `}>
            <span className={`w-3 h-3 rounded-full`}></span>
            {`res.studyMode`}
          </span>
        </div>
      </div>

      <p className="text-xs text-gray-400 mt-1">Requested by: {`res.request_by`}</p>

      {/* Buttons */}
      <div className="flex gap-3 pt-3">
        <button className="flex-1 btn btn-sm bg-[#f55a00]/70 hover:bg-[#f55a00] text-white border-none shadow-md hover:shadow-xl transform hover:scale-105 transition-all">
          Update
        </button>
        <button className="flex-1 btn btn-sm bg-red-500/70 hover:bg-red-600 text-white border-none shadow-md hover:shadow-xl transform hover:scale-105 transition-all">
          Delete
        </button>
      </div>
    </div>
  </div>

  {/* Desktop Table */}
  <div className="hidden lg:block overflow-x-auto rounded-2xl shadow-2xl border border-white/20 bg-white/5 backdrop-blur-xl">
    <table className="table table-zebra w-full">
      <thead className=" text-white text-lg">
        <tr>
          <th className="py-5 rounded-tl-2xl">Name</th>
          <th className="py-5">Subject</th>
          <th className="py-5">Study Mode</th>
          <th className="py-5 rounded-tr-2xl text-center">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr className="">
          <td className="py-6">
            <div className="flex items-center gap-4">
              <div className="avatar">
                <div className="mask mask-squircle w-16 h-16 ring-4 ring-white ring-offset-2">
                  <img src={`res.profileimage`} alt={`res.name`} className="object-cover" />
                </div>
              </div>
              <div>
                <div className="font-bold text-xl text-white">{`res.name`}</div>
                <div className="text-sm opacity-70 text-gray-300">
                  <p>Requested By: {`res.request_by`}</p>
                  {`res.location`}
                </div>
              </div>
            </div>
          </td>

          <td>
            <span className="px-5 py-2 bg-purple-900/30 text-purple-200 font-bold rounded-full text-sm shadow-sm backdrop-blur-sm">
              {`res.subject`}
            </span>
          </td>

          <td>
            <span className={`px-5 py-2 rounded-full font-bold text-sm flex items-center justify-center gap-2 shadow-sm backdrop-blur-sm `}>
              <span className={`w-3 h-3 rounded-full `}></span>
              {`res.studyMode`}
            </span>
          </td>

          <td className="text-center space-x-3">
            <button className="btn btn-sm bg-transparent backdrop-blur-md border border-white/20 text-white shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 rounded-lg">
              Update
            </button>
            <button className="btn btn-sm bg-red-600 backdrop-blur-md border border-white/20 text-white shadow-md hover:shadow-xl transform hover:bg-red-700 hover:scale-105 transition-all duration-300 rounded-lg">
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

    );
};

export default TableData;