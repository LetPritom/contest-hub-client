import { intervalToDuration, isPast } from "date-fns";
import React, { useEffect, useState } from "react";

const MyContestTable = ({ game }) => {
  const { deadline, image, participant_name, participant_pay, payment_status ,contest_name} =
    game;

  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(new Date()); // Update current time every second
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const expired = isPast(new Date(deadline));

  if (expired) {
    return <span className="text-red-500">Deadline Over</span>;
  }

  const duration = intervalToDuration({
    start: now,
    end: new Date(deadline),
  });
  const pad = (num) => String(num ?? 0).padStart(2, "0");

  return (
    <div className="w-11/12 max-w-7xl mx-auto my-10">
      {/* Mobile Card */}
      <div className="block lg:hidden">
        <div className="bg-white/5 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl p-5 space-y-5">
          {/* profile picture & name */}
          <div className="flex items-start gap-4">
            <div className="avatar shrink-0">
              <div className="mask mask-squircle w-20 h-20 ring-4 ring-[#f55a00] ring-offset-2">
                <img src={image} alt={game.name} className="object-cover" />
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-bold text-lg text-white truncate">{participant_name}</h3>
              <p className="text-sm text-gray-300 truncate">{contest_name}</p>
            </div>
          </div>

          {/* Subject & Status */}
          <div className="text-sm my-4 space-y-2">
            <div className="flex items-center gap-4">
              <span className="font-semibold text-white">pay:</span>
              <span className="px-4 py-2 bg-purple-900/30 text-purple-200 font-bold rounded-full text-xs backdrop-blur-sm">
                $ {participant_pay}
              </span>
            </div>

            <div className="flex items-center gap-4">
              <span className="font-semibold text-white">Status:</span>
              <span
                className={`px-4 py-2 rounded-full font-bold text-xs flex items-center gap-2 backdrop-blur-sm `}
              >
                <span
                  className={`w-auto h-3 rounded-full text-green-400 flex justify-center items-center`}
                >
                   {payment_status}
                </span>
              </span>
            </div>
          </div>

          <p className="text-xs text-gray-400 mt-1">
            Participants_Name: {participant_name}
          </p>

          {/* Buttons */}
          <div className="flex flex-col items-center">
            <div className="grid grid-cols-4 gap-4 max-w-md">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl py-5 px-6 text-center border border-white/10 shadow-lg flex flex-col justify-center items-cente">
                <div className="text-xl font-extrabold text-white">
                  {pad(duration.days)}
                </div>
                <div className="text-sm text-purple-200 mt-2">d</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl py-5 px-6 text-center border border-white/10 shadow-lg flex flex-col justify-center items-cente">
                <div className="text-xl font-extrabold text-white">
                  {pad(duration.hours)}
                </div>
                <div className="text-sm text-purple-200 mt-2">h</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl py-5 px-6 text-center border border-white/10 shadow-lg flex flex-col justify-center items-cente">
                <div className="text-xl font-extrabold text-white">
                  {pad(duration.minutes)}
                </div>
                <div className="text-sm text-purple-200 mt-2">m</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl py-5 px-6 text-center border border-white/10 shadow-lg flex flex-col justify-center items-center">
                <div className="text-xl font-extrabold text-white">
                  {pad(duration.seconds)}
                </div>
                <div className="text-sm text-purple-200 mt-2">s</div>
              </div>
            </div>

            {expired && (
              <p className="text-red-400 font-bold text-xl mt-6">
                Contest Expired
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Desktop Table */}
      <div className="hidden lg:block overflow-x-auto rounded-2xl shadow-2xl border border-white/20 bg-white/5 backdrop-blur-xl">
        <table className="table table-zebra w-full">
          <thead className=" text-white text-lg">
            <tr>
              <th className="py-5 rounded-tl-2xl">Contest Detail</th>
              <th className="py-5">pay</th>
              <th className="py-5">Status</th>
              <th className="py-5 rounded-tr-2xl text-center">Upcoming Deadline</th>
            </tr>
          </thead>
          <tbody>
            <tr className="">
              <td className="py-6">
                <div className="flex items-center gap-4">
                  <div className="avatar">
                    <div className="mask mask-squircle w-16 h-16 ring-4 ring-white ring-offset-2">
                      <img
                        src={image}
                        alt={game.name}
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="text-sm opacity-70 text-gray-300">
                      <p>Participant Name: {participant_name}</p>
                    </div>
                  </div>
                </div>
              </td>

              <td>
                <span className="px-5 py-2 bg-purple-900/30 text-purple-200 font-bold rounded-full text-sm shadow-sm backdrop-blur-sm">
                  $ {participant_pay}
                </span>
              </td>

              <td>
                <span
                  className={` py-3  rounded-full font-bold text-sm flex items-center justify-center gap-2 shadow-sm backdrop-blur-sm `}
                >
                  <span
                    className={`w-auto h-3 rounded-full text-green-400 flex items-center justify-center`}
                  >
                    {payment_status}
                  </span>
                </span>
              </td>

              <td className="py-8">
                <div className="flex flex-col items-center">
                  <div className="grid grid-cols-4 gap-4 max-w-md">
                    <div className="bg-white/10 backdrop-blur-md rounded-2xl py-5 px-6 text-center border border-white/10 shadow-lg">
                      <div className="text-4xl font-extrabold text-white">
                        {pad(duration.days)}
                      </div>
                      <div className="text-sm text-purple-200 mt-2">Days</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-md rounded-2xl py-5 px-6 text-center border border-white/10 shadow-lg">
                      <div className="text-4xl font-extrabold text-white">
                        {pad(duration.hours)}
                      </div>
                      <div className="text-sm text-purple-200 mt-2">Hours</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-md rounded-2xl py-5 px-6 text-center border border-white/10 shadow-lg">
                      <div className="text-4xl font-extrabold text-white">
                        {pad(duration.minutes)}
                      </div>
                      <div className="text-sm text-purple-200 mt-2">
                        Minutes
                      </div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-md rounded-2xl py-5 px-6 text-center border border-white/10 shadow-lg">
                      <div className="text-4xl font-extrabold text-white">
                        {pad(duration.seconds)}
                      </div>
                      <div className="text-sm text-purple-200 mt-2">
                        Seconds
                      </div>
                    </div>
                  </div>

                  {expired && (
                    <p className="text-red-400 font-bold text-xl mt-6">
                      Contest Expired
                    </p>
                  )}
                </div>
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

export default MyContestTable;
