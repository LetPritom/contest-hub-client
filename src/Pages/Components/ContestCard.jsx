import React from "react";
import { NavLink } from "react-router";
import { Description } from "@headlessui/react";
import { MdEmojiPeople } from "react-icons/md";
import LineParticles from "../../Components/LineParticles";

const ContestCard = ({ contest }) => {
  const { image, name, description, participant, contestType, _id } = contest;
  const shortDes = description.slice(0, 50);
  console.log(shortDes);

  return (
    <div
      className="group relative bg-purple-900/10 backdrop-blur-xl
          rounded-3xl overflow-hidden shadow-lg
          hover:shadow-2xl hover:shadow-purple-500/20
          transition-all hover:-translate-y-2 duration-500
          border border-white/20 my-5
          flex flex-col h-full"
    >
      <LineParticles />

      {/* Gradient overlay */}
      <div
        className="absolute inset-0 bg-linear-to-br from-purple-900/10 to-purple-500/10
                  opacity-20 group-hover:opacity-100 transition-opacity duration-500
                  rounded-3xl -z-10 scale-105"
      />

      {/* Image */}
      <div className="relative overflow-hidden h-60">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Body */}

      <div className="p-6 flex flex-col grow space-y-4">

        {/* Title & Description */}

        <div>
          <h2 className="text-xl font-bold">{name}</h2>

          {/* FIXED HEIGHT DESCRIPTION */}

          <p className="text-sm font-medium line-clamp-2 min-h-10 mt-2">
            {shortDes}
          </p>
        </div>

        {/* Type r Participant */}
        
        <div className="flex justify-between items-center">
          <span className="px-4 py-1 border border-purple-600/40 rounded-full text-sm">
            {contestType}
          </span>

          <div className="flex items-center gap-2">
            <MdEmojiPeople className="text-green-600 text-2xl" />
            <span className="font-bold">{participant}</span>
          </div>
        </div>

        {/* BUTTON ALWAYS BOTTOM */}

        <NavLink to={`/detail-contest/${_id}`} className="mt-auto">
          <button
            className="w-full py-3 btn-custom text-white font-bold relative z-50
                        rounded-xl hover:scale-105 transition-all duration-300 shadow-md"
          > 
            Contest Details
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default ContestCard;
