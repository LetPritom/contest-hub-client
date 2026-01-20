import { useQuery } from "@tanstack/react-query";
import banner from "../../assets/banner.jpg";
import LineParticles from "../../Components/LineParticles";
import SnowLineParticles from "../../Components/SnowParticles";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useState } from "react";

const Banner = ({ setUiContests }) => {
  const [searchType, setSearchType] = useState("");
  const axiosSecure = useAxiosSecure();

  const { refetch, isFetching } = useQuery({
    queryKey: ["searchContest", searchType],
    queryFn: async () => {
      const result = await axiosSecure(`/if-search-contest?type=${searchType}`);
      return result.data;
    },
    enabled: false,
  });

  

  const handleSearch = async () => {
    const res = await refetch();
    setUiContests(res.data || []);
  };



  return (
    <div
      className="relative h-[92vh] overflow-hidden flex items-center justify-center
    bg-linear-to-br from-purple-900 via-black to-purple-900"
    >
      {/* Background Image */}
      <img
        src={banner}
        alt="banner-bg"
        className="absolute inset-0 w-full h-full object-cover
        opacity-30 mix-blend-overlay animate-pulse"
      />

      <LineParticles />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-4xl px-8 py-12 text-center">
        <div
          className="bg-black/10 backdrop-blur-md border border-white/20 
        rounded-3xl px-10 py-16 shadow-2xl"
        >
          <h1 className="text-5xl font-bold text-white mb-6">
            Unlock Your Potential in Every Contest
          </h1>

          <p className="text-xl text-white/80 mb-10">
            Join Contest Hub — Where Challenges Meet Champions.
          </p>

          <div className="relative max-w-2xl mx-auto">
            <input
              onChange={(e) => setSearchType(e.target.value)}
              value={searchType}
              className="w-full px-8 py-5 pr-30 bg-white/15 text-white
              placeholder-white/60 rounded-full backdrop-blur-md
              border border-white/30 focus:outline-none animate-pulse"
              placeholder="Search contests..."
            />
            <button
              onClick={handleSearch}
              className="absolute right-2 top-2 px-5 py-3 rounded-full
              bg-linear-to-r from-indigo-500 to-purple-600
              text-white font-semibold hover:scale-105 transition cursor-pointer"
            >
              {isFetching ? "Searching..." : "Search"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
