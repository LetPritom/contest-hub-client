import React from "react";
import { NavLink } from "react-router";
import { Description } from "@headlessui/react";
import SnowParticles from "../../Components/SnowParticles";
import { MdEmojiPeople } from "react-icons/md";

const ConstestCard = ({contest}) => {

  const {image , name , description , participant, contestType ,_id} = contest;
  const shortDes = description.slice(0  , 50) 
  console.log(shortDes)




  
  return (
    <div>
      <div className="group relative  bg-gray-900/10 backdrop-blur-xl rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-purple-500/20 transition-all hover:-translate-y-2 duration-500 border border-white/20">
            <SnowParticles></SnowParticles>
            
        {/* Gradient Border Effect */}

        <div className="absolute inset-0 bg-linear-to-br from-purple-900/10 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl -z-10 scale-105"></div>

        {/* Profile Image zoom  kora hoiche jokhon over korbo */}

        <div className="relative overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Card Body */}

        <div className="p-6 space-y-4">
          <div className="flex flex-col gap-2">
            <h2 className="text-xl font-bold">
              {name}
            </h2>
            <h2 className="text-sm font-bold ">
              {shortDes}.......
            </h2>
            <div className="flex items-center gap-2">
              <p className="px-4 py-2 border-2 border-purple-600/40 rounded-full">{contestType}</p>
            </div>

            
          </div>

          {/* Subject and Rating */}

          <div className="flex justify-between items-center relative">
            <div className="flex items-center absolute left-52 bottom-4">
              <span className="text-green-600 text-2xl">
               <MdEmojiPeople />
              </span>
              <span className="font-bold">
                {participant}
              </span>
            </div>
          </div>

          {/* create partner profile button */}
          <NavLink to={`/detail-contest/${_id}`}>
            <button className="w-full mt-4 py-3 btn-custom text-white font-bold rounded-xl hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 shadow-md cursor-pointer">
              View Profile
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ConstestCard;
