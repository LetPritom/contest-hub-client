import React from 'react';

const Top3Podium = ({ topWinners = [] }) => {
  if (topWinners.length === 0) {
    return (
      <div className="text-center py-20 text-purple-300 text-3xl">
        No winners yet!
      </div>
    );
  }

  const getPodiumHeight = (rank) => {
    if (rank === 0) return 'md:mt-0'; // 1st highest
    if (rank === 1) return 'md:mt-16'; // 2nd
    return 'md:mt-32'; // 3rd lowest
  };

  const getMedal = (rank) => {
    if (rank === 0) return { emoji: '🥇', color: 'from-yellow-400 to-orange-500' };
    if (rank === 1) return { emoji: '🥈', color: 'from-gray-300 to-gray-500' };
    return { emoji: '🥉', color: 'from-orange-600 to-yellow-600' };
  };

  return (
    <div className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 bg-linear-to-r from-yellow-400 via-orange-400 to-pink-400 bg-clip-text text-transparent">
          Top Champions 🏆
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end">
          {topWinners.slice(0, 3).map((winner, index) => {
            const { emoji, color } = getMedal(index);

            return (
              <div
                key={winner._id}
                className={`relative group ${getPodiumHeight(index)} transition-all duration-700`}
              >
                {/* Medal Badge */}
                <div
                  className={`absolute -top-14 left-1/2 -translate-x-1/2 z-20 w-28 h-28 rounded-full bg-linear-to-br ${color} flex items-center justify-center shadow-2xl text-7xl border-4 border-white/30`}
                >
                  {emoji}
                </div>

                {/* Card */}
                <div className="relative backdrop-blur-xl bg-linear-to-br from-purple-900/40 to-purple-700/20 border border-purple-400/30 rounded-3xl shadow-2xl overflow-hidden group-hover:scale-105 group-hover:shadow-purple-500/50 transition-transform duration-500">
                  <div className="pt-24 pb-12 px-8 text-center space-y-6">
                    {/* Photo */}
                    <img
                      src={winner.image || 'https://randomuser.me/api/portraits/lego/5.jpg'}
                      alt={winner.name}
                      className="w-36 h-36 mx-auto rounded-full ring-8 ring-purple-400/40 object-cover shadow-xl group-hover:ring-yellow-400/60 transition-all duration-500"
                    />

                    {/* Name & Prize */}
                    <div>
                      <h3 className="text-3xl font-extrabold text-white drop-shadow-lg">
                        {winner.name}
                      </h3>
                      <div className="mt-4 inline-flex items-center gap-3 px-8 py-4 bg-linear-to-r from-green-500 to-emerald-600 rounded-full text-white font-extrabold text-2xl shadow-xl">
                        <span>$ {winner.win}</span>
                        <span className="text-lg">Won</span>
                      </div>
                    </div>

                    {/* Contest */}
                    <div className="pt-4 border-t border-white/10">
                      <p className="text-sm text-gray-400 uppercase tracking-wider">
                        Champion of
                      </p>
                      <p className="text-xl font-bold text-purple-200 mt-2">
                        {winner.contestName}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Top3Podium;
