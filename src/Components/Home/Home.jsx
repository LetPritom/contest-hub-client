import React, { useEffect, useState } from "react";
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
import TermsOfService from "../../Pages/Home/TermsOfService";
import Newsletter from "../../Pages/Home/Newsletter";

const Home = () => {
  const [uiContests, setUiContests] = useState([]);

  // Default approved contests load (page load e)
  const { data: defaultContests = [], isPending } = useQuery({
    queryKey: ["approvedContests"],
    queryFn: async () => {
      const result = await axios(
        `${import.meta.env.VITE_API_URL}/approve-contest`
      );
      return result.data;
    },
  });

  // Jab search hoy na, default contests show korbo
  useEffect(() => {
    setUiContests(defaultContests);
  }, [defaultContests]);

  console.log(uiContests);

  if (isPending) return <LoaderSpinner></LoaderSpinner>;

  return (
    <div>
      <div
        data-aos="fade-down"
        data-aos-delay="200"
        data-aos-easing="ease-out-cubic"
        className="ani"
      >
        <Banner setUiContests={setUiContests}></Banner>
      </div>

      <HomeTitle></HomeTitle>


      <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {uiContests.map((contest, index) => (
          <div
            key={contest._id}
            data-aos="fade-up"
            data-aos-delay={index * 150}
            data-aos-duration="800"
            data-aos-easing="ease-out-cubic"
            data-aos-offset="100"
            className="group"
          >
            <ContestCard contest={contest} />
          </div>
        ))}
      </div>

      {/* see all button */}

      <div
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-easing="ease-out-cubic"
        className=""
      >
        <NavLink to="/all-contest">
          <div className="align flex justify-center items-center h-32 my-10">
            <div className="button w-48">
              <button className="btn-custom flex items-center justify-center gap-2 text-center animate-bounce hover:animate-none">
                Explore <FaRightLong />
              </button>
            </div>
          </div>
        </NavLink>
      </div>

      <WinnerSections></WinnerSections>

            <TermsOfService></TermsOfService>

      <div
        data-aos="fade-down"
        data-aos-delay="200"
        data-aos-easing="ease-out-cubic"
        className="ani"
      >

        <ExtraSection></ExtraSection>
        <Newsletter></Newsletter>

      </div>
      
    </div>
  );
};

export default Home;
