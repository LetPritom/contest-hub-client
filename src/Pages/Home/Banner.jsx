import React from 'react';

const Banner = () => {
    return (
       <div className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-linear-to-br from-purple-900 via-black to-purple-900">
      {/* Glassmorphism Overlay */}

      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>

      {/* Main Glass Card */}
      <div className="relative z-10 w-full max-w-4xl mx-4 px-8 py-12 text-center">
        <div className="bg-black/20 backdrop-blur-xl border border-white/30 rounded-3xl shadow-2xl px-10 py-16 animate-pulse-border">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg">
            Unlock Your Potential in Every Contest
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto font-medium">
            Join Contest Hub — Where Challenges Meet Champions. Compete, Learn, Grow & Win Big!
          </p>

          {/* Search Bar */}
          <div className="flex items-center justify-center max-w-2xl mx-auto animate-pulse">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search contests by name, platform, prize..."
                className="w-full px-8 py-5 pr-48 text-lg text-white placeholder-white/70 bg-white/15 backdrop-blur-md border border-white/30 rounded-full focus:outline-none focus:ring-4 focus:ring-white/30 focus:border-white/50 transition-all"
              />
              <button className="absolute right-2 top-2 px-8 py-3 bg-linear-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-semibold rounded-full transition-all transform hover:scale-105 shadow-lg cursor-pointer">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Optional subtle decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-72 h-72 bg-purple-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-400/20 rounded-full blur-3xl"></div>
      </div>
    </div>
    );
};

export default Banner;