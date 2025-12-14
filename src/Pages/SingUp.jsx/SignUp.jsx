import React from "react";
import { NavLink } from "react-router";

const SignUp = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-purple-900 via-black to-purple-900 flex items-center justify-center px-4 py-16">
      <div className="w-10/12 mx-auto flex flex-col md:flex-row items-center justify-between gap-15">
        <div className="text-center rounded-full  mb-10 flex-1 bg-black/10 backdrop-blur-2xl shadow-2xl border border-white/10 p-10">
          <div className="align flex flex-col justify-center items-center h-52 ">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight drop-shadow-2xl">
              Join Contest Hub!
            </h2>
            <p className="text-white/70 text-lg">
              Create your account and start competing today
            </p>
          </div>
        </div>

        {/* Glassmorphism Card */}

        <div className="bg-black/10 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/10 p-10 animate-fade-in flex-1">
          <form onSubmit={"handleSubmit"} className="space-y-3">
            {/* Name Field */}
            <div>
              <label className="block text-white/90 font-medium mb-2">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                onChange={"handleChange"}
                required
                placeholder="Enter your name"
                className="w-full px-5 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-4 focus:ring-purple-500/50 focus:border-purple-500/70 transition-all duration-300"
              />
            </div>

            {/* Photo URL Field */}
            <div>
              <label className="block text-white/90 font-medium mb-2">
                Photo URL
              </label>
              <input
                type="url"
                name="photoURL"
                onChange={"handleChange"}
                placeholder="https://example.com/your-photo.jpg"
                className="w-full px-5 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-4 focus:ring-purple-500/50 focus:border-purple-500/70 transition-all duration-300"
              />
              <p className="text-white/50 text-xs mt-2">
                Paste a direct link to your profile picture
              </p>
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-white/90 font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                onChange={"handleChange"}
                required
                placeholder="you@example.com"
                className="w-full px-5 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-4 focus:ring-purple-500/50 focus:border-purple-500/70 transition-all duration-300"
              />
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-white/90 font-medium mb-2">
                Password
              </label>
              <input
                type="password"
                name="password"
                onChange={"handleChange"}
                required
                placeholder="••••••••"
                minLength="6"
                className="w-full px-5 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-4 focus:ring-purple-500/50 focus:border-purple-500/70 transition-all duration-300"
              />
              <p className="text-white/50 text-xs mt-2">Minimum 6 characters</p>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-4 bg-linear-to-r from-indigo-600 to-purple-700 hover:from-indigo-500 hover:to-purple-600 text-white font-bold text-lg rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300 hover:shadow-purple-500/30 cursor-pointer"
            >
              Signup
            </button>

            {/* google signup */}

            <button
              type="button"
              onClick={"handleGoogleSignin"}
              className="flex items-center justify-center gap-3 w-full border border-white cursor-pointer text-white py-3 rounded-lg font-medium hover:bg-white/10 transition"
            >
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="Google"
                className="w-5 h-5"
              />
              Continue with Google
            </button>
          </form>

          <p className="text-center text-white/60 mt-8">
            Already have an account?{" "}
           <NavLink to='/login' className="text-white font-semibold hover:text-purple-300 transition">
                   Login
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
