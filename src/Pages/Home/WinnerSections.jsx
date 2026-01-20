import React from "react";
import WinnerCard from "../../Components/Home/WinnerCard";
import StatsSection from "./StatsSection";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import LoaderSpinner from "../../Components/Loader/LoaderSpinner";
import useAuth from "../../hooks/useAuth";

const WinnerSections = () => {
  const { user } = useAuth();

  const { data, isPending } = useQuery({
    queryKey: ["Winner", user?.email],
    queryFn: async () => {
      const result = await axios(`${import.meta.env.VITE_API_URL}/all-winner`);
      return result.data;
    },
  });

  const winnerDetail = Array.isArray(data) ? data : []

  console.log(winnerDetail);

  const totalWinner = winnerDetail.length;

  if (winnerDetail.length === 0)
    return (
      <p className="2xl my-8 text-center font-semibold">NO Winner Available</p>
    );

  if (isPending) return <LoaderSpinner></LoaderSpinner>;

  if (winnerDetail.length === 0)
    return (
      <div
        data-aos="fade-down"
        data-aos-delay="200"
        data-aos-easing="ease-out-cubic"
      >
        <h1 className="text-center text-purple-300 text-2xl">
          {" "}
          No winners declared yet!
        </h1>
      </div>
    );

  return (
    <section className="py-20 px-4 bg-linear-to-b from-black via-purple-950 to-black">
      <div className="w-11/12 mx-auto">
        {/* Title */}
        <div className="text-center mb-16">
          <div
            data-aos="fade-down"
            data-aos-delay="200"
            data-aos-easing="ease-out-cubic"
            className="div"
          >
            <h2 className="text-5xl md:text-7xl font-extrabold bg-linear-to-r from-yellow-400 via-pink-400 to-purple-400 bg-clip-text text-transparent mb-6">
              Celebrate Our Champions 🏆
            </h2>


          </div>

          <div
          data-aos="fade-down"
            data-aos-delay="200"
            data-aos-easing="ease-out-cubic"
          className="div">
                        <p className="text-xl md:text-2xl text-purple-200 max-w-3xl mx-auto">
            Every contest has a winner. Your creativity could be next! Join now
            and claim your glory.
          </p>
          </div>

          
        </div>

        <StatsSection totalWinner={totalWinner}></StatsSection>

        <div className="current my-20 flex items-center justify-center gap-5 flex-wrap">
          <span className="animate-bounce text-5xl">🏆</span>
          <div
            data-aos="fade-down"
            data-aos-delay="200"
            data-aos-easing="ease-out-cubic"
            className="div"
          >
            <h2 className="text-3xl md:text-5xl font-extrabold bg-linear-to-r from-yellow-400 via-pink-400 to-purple-400 bg-clip-text text-transparent mb-6 text-center">
              Our Current Winner
            </h2>
          </div>
        </div>

        <div className="w-10/12 mx-auto space-y-5 my-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {winnerDetail.map((winner, index) => (
            <div
              key={winner._id || index}
              data-aos="zoom-in-up"
              data-aos-delay={index * 200}
              data-aos-duration="900"
              data-aos-easing="ease-out-back"
              className="group"
            >
              {/* Card Wrapper with Hover Magic */}
              <div
                className="
                  bg-linear-to-br from-purple-900/40 to-indigo-900/40 
                  backdrop-blur-lg border border-purple-500/30 
                  rounded-3xl overflow-hidden shadow-2xl
                  transition-all duration-700 ease-out
                  hover:scale-105 hover:shadow-purple-500/50
                  hover:border-purple-400 hover:-translate-y-3
                  hover:bg-linear-to-br hover:from-purple-800/60 hover:to-indigo-800/60 cursor-pointer"
              >
                <WinnerCard winner={winner} totalWinner={totalWinner} />
              </div>
            </div>
          ))}
        </div>

        {/* button */}

        <div className="text-center mt-16">
          <p className="text-3xl md:text-5xl font-bold text-white">
            Ready to be the next{" "}
            <span className="bg-linear-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Winner
            </span>
            ?
          </p>
          <p className="text-xl text-purple-300 mt-4">
            Join a contest today and unleash your talent!
          </p>
        </div>
      </div>
    </section>
  );
};

export default WinnerSections;
