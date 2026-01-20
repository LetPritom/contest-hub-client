import React from "react";
import { NavLink } from "react-router";

const About = () => {
  return (
    <div className="  min-h-screen bg-linear-to-br from-purple-950 via-black to-black text-white py-16 px-4 overflow-hidden relative mt-16">
      {/* Floating Glow Orbs */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-pink-600/20 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="w-11/12 mx-auto space-y-20 relative z-10">
        {/* Hero Title */}
        <div className="text-center">
          <h1 className="text-6xl md:text-8xl font-extrabold mb-8 bg-linear-to-r from-purple-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent">
            About ContestHub
          </h1>
          <p className="text-2xl md:text-4xl text-purple-200 max-w-4xl mx-auto">
            A perfect platform for your talent — where creativity meets
            competition and big rewards!
          </p>
        </div>

        {/* Introduction Card */}
        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl shadow-2xl p-10 md:p-16">
          <h2 className="text-2xl md:text-4xl font-bold my-8 text-center bg-linear-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
            What Is ContestHub?
          </h2>
          <p className="text-xl md:text-2xl text-gray-200 leading-relaxed text-center max-w-4xl mx-auto">
            ContestHub is a multi-vendor online contest platform. Here, creators
            can create their own contests, participants can join to showcase
            their talents, and winners can earn exciting prizes. It’s ideal for
            any creative skill — logo design, coding, writing, graphics, and
            more!
          </p>
        </div>

        {/* Features Grid */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-linear-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent cursor-pointer">
            Our Features
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Card 1 */}
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl shadow-2xl p-8 hover:shadow-purple-500/40 hover:-translate-y-4 transition-all duration-500 cursor-pointer">
              <h3 className="text-2xl font-bold mb-4 text-purple-300">
                Public page
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Home, All Contests, Leaderboard, About Us, and Stories pages are
                accessible without login. However, registration is required to
                view contest details.
              </p>
            </div>

            {/* Card 2 */}
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl shadow-2xl p-8 hover:shadow-purple-500/40 hover:-translate-y-4 transition-all duration-500 cursor-pointer">
              <h3 className="text-2xl font-bold mb-4 text-purple-300">
                Join Contest
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Join within the deadline. Pay a small entry fee, submit your
                task, and if you perform the best — the prize is yours!
              </p>
            </div>

            {/* Card 3 */}
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl shadow-2xl p-8 hover:shadow-purple-500/40 hover:-translate-y-4 transition-all duration-500 cursor-pointer">
              <h3 className="text-2xl font-bold mb-4 text-purple-300">
                Creator Power
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Create your own contests, view submissions, and declare a
                winner. Turn your ideas into reality.
              </p>
            </div>

            {/* Card 4 */}
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl shadow-2xl p-8 hover:shadow-purple-500/40 hover:-translate-y-4 transition-all duration-500 cursor-pointer">
              <h3 className="text-2xl font-bold mb-4 text-purple-300">
                Admin Control
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Approve, reject, or delete contests. View all users and change
                roles (User ↔ Creator ↔ Admin).
              </p>
            </div>

            {/* Card 5 */}

            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl shadow-2xl p-8 hover:shadow-purple-500/40 hover:-translate-y-4 transition-all duration-500 md:col-span-2 lg:col-span-1 cursor-pointer">
              <h3 className="text-2xl font-bold mb-4 text-purple-300">
                Why should you join?
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Showcase your talent, connect with the community, win big
                prizes, and boost your career. Every contest brings a new
                opportunity!
              </p>
            </div>

            {/* card 6 */}
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl shadow-2xl p-8 hover:shadow-purple-500/40 hover:-translate-y-4 transition-all duration-500 md:col-span-2 lg:col-span-1">
              <h3 className="text-2xl font-bold mb-4 text-purple-300">
                Update Your Profile
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Users can update their profile information such as name and profile picture, and also view how many contests they have won!
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-5xl md:text-7xl font-extrabold mb-8 bg-linear-to-r from-yellow-400 via-orange-400 to-pink-400 bg-clip-text text-transparent">
            Ready to Shine?
          </h2>
          <p className="text-2xl text-purple-200 mb-10">
            Register today and join your first contest!
          </p>
          <NavLink to='/signup'>
            <button className="px-12 cursor-pointer py-6 text-2xl font-bold text-white rounded-2xl bg-white/20 backdrop-blur-2xl border border-white hover:from-purple-700 hover:to-pink-700 shadow-2xl hover:shadow-purple-500/60 transform hover:scale-110 transition-all duration-500">
              Join ContestHub Now 🚀
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default About;
