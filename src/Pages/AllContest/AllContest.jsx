import React, { useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import LoaderSpinner from "../../Components/Loader/LoaderSpinner";
import ContestCard from "../Components/ContestCard";


const AllContest = () => {
  const [activeTab, setActiveTab] = useState("All");

  const contestTypes = [
    "All",
    "web design",
    "graphic-design",
    "article",
    "writing",
    "coding ",
    "logo-design",
  ];

  const axiosSecure = useAxiosSecure();

//     queryKey: ["all contest"],
//     queryFn: async () => {
//       const result = await axiosSecure(`/all-approve-contest`);
//       return result.data;
//     },
//   });

  const handleTabClick = async (type) => {
    setActiveTab(type.trim());
  };

  const { data: contests = [], isPending } = useQuery({
  queryKey: ["contests", activeTab],
  queryFn: async () => {
    if (activeTab === "All") {
      const res = await axiosSecure("/approve-contest");
      return res.data;
    } else {
      const res = await axiosSecure(`/search-contest?type=${activeTab}`);
      return res.data;
    }
  },
});

  if (isPending) return <LoaderSpinner></LoaderSpinner>;

  return (
    <div className="div min-h-screen w-11/12 mx-auto">
      <div className="write flex flex-col flex-wrap h-50 justify-center items-center space-y-5 ">
        <h1 className="text-2xl md:text-4xl font-bold ">
          Explore All Contests 🏆{" "}
        </h1>
        <p className="text-md md:text-xl font-semibold ">
          All Challenges & Competitions
        </p>
      </div>




      <div className="flex flex-wrap gap-4 justify-center my-6">
        {" "}
        {contestTypes.map((type) => (
          <button
            key={type}
            onClick={() => handleTabClick(type)}
            className={`px-4 py-2 rounded-lg font-semibold cursor-pointer ${
              activeTab === type
                ? "bg-purple-600 text-white"
                : "bg-white text-purple-600"
            }`}
          >
            {" "}
            {type}{" "}
          </button>
        ))}{" "}
      </div>



<div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 my-14">
  {contests.map((contest, i) => (
    <ContestCard key={i} contest={contest} />
  ))}
</div>
    </div>
  );
};

export default AllContest;
