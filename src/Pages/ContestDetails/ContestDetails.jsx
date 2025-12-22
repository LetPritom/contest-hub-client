import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import LoaderSpinner from "../../Components/Loader/LoaderSpinner";
import CountDown from "./CountDown";
import RegisterModal from "../Modal/RegisterModal";
import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import TaskModal from "../Modal/TaskModal";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const ContestDetails = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [submit, setSubmit] = useState(false);
  const [expired, setExpired] = useState(false);

  const closeModal = () => setIsOpen(false);
  const cancelSubmit = () => setSubmit(false);

  const { id } = useParams();
  console.log(id);
  const { user } = useAuth();

  const axiosSecure = useAxiosSecure();

  const { data: ContestDetails = {}, isPending } = useQuery({
    queryKey: ["contest", id],
    queryFn: async () => {
      const result = await axiosSecure(`/detail-contest/${id}`);
      return result.data;
    },
  });

  const {
    name,
    image,
    description,
    deadline,
    participant,
    price,
    prizeMoney,
    taskInstruction,
  } = ContestDetails;

  const { data: taskAllow = {} } = useQuery({
    queryKey: ["task", id],
    queryFn: async () => {
      const result = await axiosSecure(
        `/submit-task-open?email=${user?.email}&contestId=${id}`
      );

      return result.data;
    },
  });

  // conditional winner rendering and button

  const { data: isSubmit = {}, refetch } = useQuery({
    queryKey: ["isSubmit", id],
    queryFn: async () => {
      const result = await axiosSecure(
        `${import.meta.env.VITE_API_URL}/condition-submit?email=${
          user?.email
        }&contestId=${id}`
      );

      return result.data;
    },
  });

  const { data: isWinner = {} } = useQuery({
    queryKey: ["card", id],
    queryFn: async () => {
      const result = await axiosSecure(
        `${import.meta.env.VITE_API_URL}/single-winner?contestId=${id}`
      );

      return result.data;
    },
  });

  console.log(isWinner);

  const {
    image: winnerImage,
    participant_name: winnerName,
    declaredWinnerTime,
  } = isWinner;

  const winnerDeclaredTime = new Date(declaredWinnerTime).toLocaleString(
    "en-US",
    { dateStyle: "medium", timeStyle: "short" }
  );

  const { participant_email, payment_status } = taskAllow;

  console.log(participant_email);

  if (isPending) return <LoaderSpinner></LoaderSpinner>;

  return (
    <div className="min-h-screen bg-linear-to-br from-purple-950  via-black to-blue-900/80 py-12 px-4">
      {/* Main Glass Container */}
      <div className="max-w-6xl mx-auto backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl shadow-2xl overflow-hidden">
        {/* Big Hero Banner */}
        <div className="relative h-96 md:h-screen max-h-screen  hover:scale-103 transition-all duration-200">
          <img
            src={image}
            alt={image.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent" />

          {/* Contest Title on Banner */}
          <div className="absolute text-center bottom-12 left-8 md:left-10 md:right-10">
            <h1 className="text-3xl md:text-6xl font-extrabold text-white mb-2 drop-shadow-2xl">
              {name}
            </h1>
            <p className="text-xl p-1 font-semibold md:text-2xl text-purple-200">
              Prize Money : ${prizeMoney}
            </p>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-8 md:p-12 -mt-20 relative z-10">
          <div className="grid md:grid-cols-3 gap-10">
            {/* Left: Description & Task */}
            <div className="md:col-span-2 space-y-10">
              {/* Description */}

              {/* Winner Section (show only after declaration) */}

              {isWinner ? (
                <div className="backdrop-blur-md bg-linear-to-r from-purple-600/20 to-pink-600/20 border border-purple-400/50 rounded-2xl p-8 text-center">
                  <h3 className="text-2xl font-bold text-purple-200 mb-6">
                    Winner 🏆
                  </h3>
                  <img
                    src={winnerImage}
                    alt="Winner"
                    className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-purple-400"
                  />
                  <p className="text-2xl font-bold text-white">{winnerName}</p>
                  <p className="text-purple-200 mt-2">
                    Declared on {winnerDeclaredTime}
                  </p>
                </div>
              ) : (
                <div className="backdrop-blur-md bg-white/20 border text-white font-semibold text-lg border-purple-400/70 rounded-2xl p-8 text-center">
                  Winner hasn’t been announced yet
                </div>
              )}

              <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-purple-300 mb-6">
                  Contest Description
                </h2>
                <p className="text-gray-200 text-lg leading-relaxed">
                  {description}
                </p>
              </div>

              {/* Task Instruction */}
              <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-purple-300 mb-6">
                  Task Details
                </h2>
                <p className="text-gray-200 text-lg leading-relaxed">
                  {taskInstruction}
                </p>
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="space-y-8">
              {/* Participants */}
              <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8 text-center">
                <h3 className="text-xl font-semibold text-purple-200 mb-4">
                  Total Participants
                </h3>
                <p className="text-6xl font-extrabold text-white">
                  {participant}
                </p>
              </div>

              {/* Countdown */}

              <CountDown
                onExpireChange={setExpired}
                deadline={deadline}
              ></CountDown>

              {/* Buttons */}

              <div className="space-y-4">
                {payment_status !== "paid" ? (
                  <button
                    disabled={expired}
                    onClick={() => setIsOpen(true)}
                    className={`w-full  py-5 rounded-xl font-semibold 
                  ${expired ? "bg-gray-500 cursor-not-allowed" : "btn-custom "}
                   `}
                  >
                    {expired ? "Contest Expired" : "Register & Pay"} ${price}
                  </button>
                ) : (
                  <button className="btn-custom disabled cursor-not-allowed:">
                    Registered
                  </button>
                )}

                <RegisterModal
                  ContestDetails={ContestDetails}
                  isOpen={isOpen}
                  closeModal={closeModal}
                ></RegisterModal>

                {participant_email === user?.email && (
                  <button
                    disabled={isSubmit}
                    onClick={() => setSubmit(true)}
                    className="w-full py-3 text-xl font-bold text-white rounded-2xl bg-transparent backdrop-blur-2xl border border-white/20 shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer "
                  >
                    {isSubmit ? "Your Task submitted" : "Submit Your Task"}
                  </button>
                )}

                <TaskModal
                  refetch={refetch}
                  ContestDetails={ContestDetails}
                  submit={submit}
                  cancelSubmit={cancelSubmit}
                ></TaskModal>

                {/* If ended or already registered, disable buttons */}
                {/* <button disabled className="w-full py-5 text-xl font-bold text-gray-500 bg-gray-700 rounded-2xl cursor-not-allowed">
                  Contest Ended
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Optional: Submission Modal (static look) */}
      {/* তুই চাইলে এটা modal component আলাদা করে নিবি */}
    </div>
  );
};

export default ContestDetails;
