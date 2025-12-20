import axios from 'axios';
import React from 'react';
import { toast } from 'react-toastify';

const SubmissionDetailCard = ({ submission }) => {
  const { participant_name, participant_email, taskData, submittedAt, _id, contestId } = submission || {};

  const handleDeclareWinner = async () => {

    try {
      await axios.patch(`${import.meta.env.VITE_API_URL}/announce-winner`, { _id, contestId});
      toast.success("Winner :",participant_name);
    } catch (err) {
      toast.error(err.message);
    }

  };

  return (
    <div className="bg-white/5 border w-full border-white/10 rounded-2xl shadow-lg p-6 space-y-4 hover:shadow-purple-500/30 transition-all duration-300">
      
      {/* Avatar */}
      <div className="w-20 h-20 rounded-full bg-linear-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-md ring-4 ring-white/20 mx-auto">
        <span className="text-3xl font-extrabold text-white">
          {participant_name?.charAt(0).toUpperCase()}
        </span>
      </div>

      {/* Info */}
      <div className="text-center space-y-1">
        <h3 className="text-xl font-bold bg-linear-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
          {participant_name}
        </h3>
        <p className="text-sm text-purple-200">{participant_email}</p>
        <p className="text-xs text-gray-400">
          Submitted on: {submittedAt ? new Date(submittedAt).toLocaleDateString('en-US', {
            year: 'numeric', month: 'short', day: 'numeric'
          }) : "Invalid Date"}
        </p>
      </div>

      {/* Task */}
      <div className="bg-white/10 border border-white/20 rounded-xl p-4 text-sm text-gray-200 whitespace-pre-wrap min-h-24">
        {taskData || "No additional notes provided."}
      </div>

      {/* Button */}
      <div className="text-center">
        <button
          onClick={handleDeclareWinner}
          className="px-6 py-3 text-sm font-bold text-white rounded-xl bg-linear-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 shadow-md hover:shadow-orange-500/70 transform hover:scale-105 transition-all duration-300 cursor-pointer"
        >
          Declare as Winner 🏆
        </button>
      </div>
    </div>
  );
};

export default SubmissionDetailCard;
