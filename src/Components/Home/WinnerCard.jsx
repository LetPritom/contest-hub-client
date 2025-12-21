import React from 'react';

const WinnerCard = ({winner}) => {
  const { name, prizeMoney,  participant_name, participant_image } = winner; // তোর data structure অনুযায়ী adjust করিস

  return (
    <div className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl overflow-hidden transition-all duration-500 hover:shadow-purple-500/30 hover:-translate-y-4">
      {/* Subtle Glow on Hover */}
      <div className="absolute inset-0 bg-linear-to-br from-purple-600/10 to-pink-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />

      <div className="relative p-8 text-center space-y-6">
        {/* Winner Photo with Gradient Ring */}
        <div className="relative mx-auto w-32 h-32">
          <img
            src={participant_image}
            alt={name}
            className="w-full h-full rounded-full object-cover ring-4 ring-gradient-to-r from-yellow-400 to-orange-500 shadow-xl"
          />
          {/* Star Badge */}
          <div className="absolute -top-2 -right-2 w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center shadow-lg">
            <span className="text-2xl">⭐</span>
          </div>
        </div>

        {/* Prize Money Badge */}
        <div className="inline-flex items-center gap-2 px-6 py-3 bg-linear-to-r from-green-500 to-emerald-600 rounded-full text-white font-extrabold text-xl shadow-lg">
          <span>$ {prizeMoney}</span>
          <span className="text-sm font-normal">Won</span>
        </div>

        {/* Name &  */}

        
        <div>
          <h3 className="text-2xl font-bold text-white">{participant_name}</h3>
        </div>

        {/* Quote */}
        {/* <p className="text-gray-300 text-base italic leading-relaxed px-4">
          "{quote || 'This platform changed my career. The exposure I got was incredible!'}"
        </p> */}

        {/* Contest Name */}
        <div className="pt-4 border-t border-white/10">
          <p className="text-sm text-gray-500 uppercase tracking-wider">Winner of</p>
          <p className="text-xl font-semibold text-purple-200 mt-1">
            {`contestName`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default WinnerCard;