import React from "react";
import Top3Podium from "./Top3Podium";
import { useQuery } from "@tanstack/react-query";
import LoaderSpinner from "../Loader/LoaderSpinner";
import useAuth from "../../hooks/useAuth";
import SnowParticles from "../SnowParticles";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const Leaderboard = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: topThreeWinners = {}, isPending } = useQuery({
    queryKey: ["Leader", user?.email],
    queryFn: async () => {
      const result = await axiosSecure(
        `${import.meta.env.VITE_API_URL}/top-leaders`
      );
      return result.data;
    },
  });

  console.log(topThreeWinners);

  if (isPending) return <LoaderSpinner></LoaderSpinner>;
  return (
    <div className="min-h-screen bg-linear-to-br from-purple-950 via-black to-pink-950 py-16 px-4">
      <SnowParticles></SnowParticles>
      <div className="w-11/12 mx-auto">
        {/* Title */}
        <div className="text-center mb-16">
          <h1 className="text-6xl md:text-8xl font-extrabold mb-6 bg-linear-to-r from-yellow-400 via-orange-400 to-pink-400 bg-clip-text text-transparent">
            ContestHub Leaderboard
          </h1>
          <p className="text-2xl md:text-3xl text-purple-200">
            Celebrating Our Top Champions Across All Contests
          </p>

          <Top3Podium topWinners={topThreeWinners}></Top3Podium>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
