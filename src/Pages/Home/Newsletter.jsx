// Newsletter.jsx (or add this as a component/section)

import React from 'react';

const Newsletter = () => {
  return (
    <section className="py-16 px-4 md:px-8 bg-linear-to-br from-purple-700 via-black to-black relative overflow-hidden">
      {/* Optional subtle background glow */}
      <div className="absolute inset-0 bg-linear-to-b from-purple-950/20 to-transparent pointer-events-none"></div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Title with AOS */}
        <div 
          data-aos="fade-down" 
          data-aos-duration="900" 
          data-aos-easing="ease-out-cubic"
          className="mb-6"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Stay in the Loop
          </h2>
          <p className="mt-3 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Get exclusive updates on new contests, winner announcements, and special offers.
          </p>
        </div>

        {/* Minimal Gorgeous Form */}
        <div 
          data-aos="zoom-in" 
          data-aos-delay="200" 
          data-aos-duration="800"
          className="mt-8 max-w-md mx-auto"
        >
          <form className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full sm:flex-1 px-6 py-4 bg-gray-900/60 border border-gray-700 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30 transition-all duration-300 shadow-inner"
              required
            />
            <button
              type="submit"
              className="w-full sm:w-auto px-8 py-4 bg-linear-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-purple-600/50 hover:-translate-y-1 active:scale-95"
            >
              Subscribe
            </button>
          </form>

          {/* Tiny privacy note */}
          <p className="mt-4 text-sm text-gray-500">
            We respect your privacy. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;