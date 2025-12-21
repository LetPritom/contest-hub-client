import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const WinnerMarquee = () => {
  const { data: winners = [] } = useQuery({
    queryKey: ["winners"],
    queryFn: async () => {
      const res = await axios(
        `${import.meta.env.VITE_API_URL}/all-winner`
      );
      return res.data;
    },
  });

  return (
    <div className="overflow-hidden whitespace-nowrap relative">
      <div className="flex gap-8 animate-marquee px-6">
        {winners.map((winner) => (
          <div
            key={winner._id}
            className="min-w-70 bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center shadow-lg"
          >
            <img
              src={winner.participant_image}
              alt={winner.participant_name}
              className="w-20 h-20 mx-auto rounded-full object-cover ring-4 ring-purple-400"
            />

            <h4 className="mt-4 text-lg font-bold">
              {winner.participant_name}
            </h4>
            <h4 className="mt-4 text-lg font-bold">
              Winner Of Contest
            </h4>
            <h4 className="mt-4 text-lg font-semibold">
              {winner.name}
            </h4>

            <p className="text-sm text-purple-300 mt-1">
              Winner
            </p>

            <p className="mt-2 text-yellow-400 font-semibold">
              💰 ${winner.prizeMoney}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WinnerMarquee;
