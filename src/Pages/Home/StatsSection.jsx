import React from 'react';

const StatsSection = ({ totalPrize = '150K+', totalWinners = '1,200+' }) => {
  return (
    <section className="py-12 px-4 ">
      <div className="max-w-5xl mx-auto">
        {/* Responsive Grid - 1 on mobile, 2 on md+ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Card 1: Total Prize Distributed */}
          <div className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl overflow-hidden transition-all duration-500 hover:shadow-green-500/30 hover:-translate-y-2">
            <div className="absolute inset-0 bg-linear-to-br from-green-600/10 to-emerald-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
            
            <div className="relative p-8 md:p-12 text-center flex items-center justify-center gap-6 cursor-pointer">
              {/* Green Money Icon */}
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-linear-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-xl">
                <span className="text-4xl md:text-5xl">$</span>
              </div>

              {/* Text */}
              <div className="text-left">
                <p className="text-4xl md:text-5xl font-extrabold text-white">
                  ${totalPrize}
                </p>
                <p className="text-lg md:text-xl text-green-300 mt-2">
                  Total Prize Distributed
                </p>
              </div>
            </div>
          </div>

          {/* Card 2: Total Winners */}
          <div className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl overflow-hidden transition-all duration-500 hover:shadow-orange-500/30 hover:-translate-y-2  cursor-pointer">
            <div className="absolute inset-0 bg-linear-to-br from-orange-600/10 to-yellow-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
            
            <div className="relative p-8 md:p-12 text-center flex items-center justify-center gap-6">
              {/* Orange Trophy Icon */}
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-linear-to-br from-orange-500 to-yellow-600 flex items-center justify-center shadow-xl">
                <span className="text-4xl md:text-5xl ">🏆</span>
              </div>

              {/* Text */}
              <div className="text-left ">
                <p className="text-4xl md:text-5xl font-extrabold text-white">
                  {totalWinners}+
                </p>
                <p className="text-lg md:text-xl text-orange-300 mt-2">
                  Talented Winners
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;