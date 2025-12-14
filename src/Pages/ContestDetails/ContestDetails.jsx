import React from 'react';
import logo from '../../assets/logo.png'

const ContestDetails = () => {
    return (
        <div>
      <div className="w-10/12 mx-auto my-5 py-5 px-2 h-auto">
        <div
          className="card card-side hover:shadow-2xl hover:shadow-purple-500/20 hover:scale-105 transition-all duration-300 
                   active:scale-95 cursor-pointer flex flex-col md:flex-row lg:flex-row border border-[#f55a00]"
        >
          <figure className="h-82.5 w-82.5">
            <img
              className="object-cover  "
              src={logo}
              alt="Movie"
            />
          </figure>
          <div className="card-body rounded-lg">
            <h2 className="card-title font-bold text-2xl">
              {"Partner"} : {'details.name'}
            </h2>

            <h2 className="card-category font-bold text-xl">
              Subject : {'details.subject'}
            </h2>

            <div className="study flex gap-2 text-center font-semibold">
              <p className="px-3 py-2 border text-sm font-bold border-[#ff7f35] transition">
                {'details.studyMode'}
              </p>
              <p className="px-3 py-2 border text-sm font-bold border-[#ff7f35] transition">
                Exp:{'details.experienceLevel'}
              </p>
              <p className="flex items-center justify-center gap-1 px-3 py-2 border text-sm font-bold border-[#ff7f35] transition">
                <FaStar color="#ff7f35" />
                {'details.rating'}
              </p>
            </div>

            <div className="study flex gap-2 text-center font-semibold">
              <p className="px-3 py-2  text-sm font-bold border border-[#ff7f35] transition">
                {'details.location'}
              </p>
              <p className="px-3 py-2 border text-sm font-bold  border-[#ff7f35] transition">
                {'details.availabilityTime'}
              </p>
              <p className="flex items-center justify-center gap-1 px-3 py-2 border text-sm font-bold  border-[#ff7f35] transition">Partner Count
                <IoPersonAdd color="#2563EB" />
                {'details.partnerCount'}
              </p>
            </div>

            <p className="font-bold text-[#ff7f35] my-2">
              Study Mood :{" "}
              <span
                className={`px-3 py-1 rounded-full text-sm font-bold ${
                  `details.studyMode === "Online"
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"`
                }`}
              >
                {'details.studyMode'}
              </span>
            </p>

            <button onClick={'handleRequest'} className="w-52 mt-4 py-3 px-3 bg-linear-to-r from-[#2563EB] to-pink-600 text-white font-bold rounded-xl hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 shadow-md cursor-pointer">
              Sent Partner Request
            </button>
          </div>
        </div>

        {/* <div className="detail my-10 py-2">
        <h1 className="text-2xl text-white font-bold">Details</h1>
        <p className="text-gray-300 text-sm py-2 my-1">
          {matchGame?.description}
        </p>
        <p className="text-gray-300 text-sm">
          Step into the world of limitless action and immersive gameplay. Every
          mission, every race, every battle brings a new level of thrill and
          challenge. Experience cinematic graphics, powerful sound design, and
          smooth performance crafted to make you feel inside the game itself.
          Unlock new weapons, conquer difficult levels, and prove your skills as
          a true gamer. Whether you fight, drive, explore, or survive — every
          moment is adrenaline-fueled. Welcome to the next generation of gaming
          — where legends are made
        </p>
      </div> */}
      </div>
    </div>
    );
};

export default ContestDetails;