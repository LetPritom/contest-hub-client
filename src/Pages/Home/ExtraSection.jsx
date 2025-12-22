import React from "react";

const ExtraSection = () => {
  return (
    <div>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-linear-to-br from-purple-950 via-black to-purple-950 px-4 py-20">
        {/* Background subtle pattern (optional glow) */}

        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

        <div
          data-aos="fade-down"
          data-aos-delay="300"
          data-aos-easing="ease-out-cubic"
          className="ani"
        >
          <div className="relative z-10 text-center max-w-5xl mx-auto">
            {/* Main Glass Card */}
            <div className="backdrop-blur-2xl bg-white/5 border border-white/10 rounded-3xl shadow-2xl p-10 md:p-16 lg:p-20">
              {/* Inner glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-pink-600/10 rounded-3xl" />

              <div className="relative space-y-8">
                {/* Title */}
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent leading-tight">
                  ContestHub
                </h1>

                {/* Tagline */}
                <p className="text-2xl md:text-4xl text-purple-200 font-semibold max-w-4xl mx-auto ">
                  Where Creativity Meets Competition.
                  <br />
                  Showcase Your Talent. Win Big Prizes.
                </p>

                {/* Stats Highlight (optional static) */}
                <div className="flex flex-wrap justify-center gap-8 mt-12">
                  <div className="text-center">
                    <p className="text-4xl md:text-5xl font-bold text-green-400">
                      $150K+
                    </p>
                    <p className="text-purple-300 mt-2">
                      Total Prizes Distributed
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-4xl md:text-5xl font-bold text-orange-400">
                      1,200+
                    </p>
                    <p className="text-purple-300 mt-2">Talented Winners</p>
                  </div>
                </div>

                <div className="mt-12 border border-white p-5">
                  <span className="relative z-10 bg-linear-to-r from-purple-300 via-pink-300 to-yellow-300 bg-clip-text text-transparent text-2xl">
                    Explore and Enjoy
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative floating elements (optional) */}
        <div className="absolute top-10 left-10 w-64 h-64 bg-purple-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-pink-600/20 rounded-full blur-3xl" />
      </section>
    </div>
  );
};

export default ExtraSection;
