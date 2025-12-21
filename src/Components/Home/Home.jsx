import React from "react";
import Banner from "../../Pages/Home/Banner";
import HomeTitle from "../../Pages/Home/HomeTitle";
import ContestDetails from "../../Pages/ContestDetails/ContestDetails";
import ContestCard from "../../Pages/Components/ContestCard";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import LoaderSpinner from "../Loader/LoaderSpinner";
import { NavLink } from "react-router";
import { FaRightLong } from "react-icons/fa6";
import WinnerSections from "../../Pages/Home/WinnerSections";
import ExtraSection from "../../Pages/Home/ExtraSection";

const Home = () => {
  const { data: contests = [], isPending } = useQuery({
    queryKey: ["contest"],
    queryFn: async () => {
      const result = await axios(
        `${import.meta.env.VITE_API_URL}/approve-contest`
      );
      return result.data;
    },
  });

  if (isPending) return <LoaderSpinner></LoaderSpinner>;

  return (
    <div>
      <Banner></Banner>
      <HomeTitle></HomeTitle>

      <div className="w-11/12 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {contests.map((contest, i) => (
          <ContestCard contest={contest} key={i}></ContestCard>
        ))}
      </div>

      {/* see all button */}

      <NavLink to="/all-contest">
        <div className="align flex justify-center items-center my-10">
          <div className="button w-48 ">
            <button className="btn-custom flex items-center justify-center gap-2 text-center">
              See All <FaRightLong />
            </button>
          </div>
        </div>
      </NavLink>

      <WinnerSections></WinnerSections>
      <ExtraSection></ExtraSection>
    </div>
  );
};

export default Home;
