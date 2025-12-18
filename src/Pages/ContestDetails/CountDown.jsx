import { useState, useEffect } from "react";
import { intervalToDuration, isPast } from "date-fns";

const CountdownCard = ({ deadline , onExpireChange }) => {
  const [duration, setDuration] = useState({});
  const [expired, setExpired] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const isExpired = isPast(new Date(deadline));

      setExpired(isExpired);
      onExpireChange(isExpired); // 👈 parent-কে জানাচ্ছি

      if (!isExpired) {
        const d = intervalToDuration({
          start: new Date(),
          end: new Date(deadline),
        });
        setDuration(d);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [deadline, onExpireChange]);
  // dubble blcok kore time dekhano hoiche
  
  const pad = (num) => String(num ?? 0).padStart(2, "0");

  return (
    <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8">
      <h3 className="text-xl font-semibold text-purple-200 mb-6 text-center">
        {expired ? "No Time Remaining" : "Time Remaining"}
      </h3>

      {expired ? (
        <p className="text-red-400 font-bold text-center text-lg">
          Contest End
        </p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {/* Days */}
          <div className="bg-white/10 rounded-xl py-4 px-8 text-center flex flex-col items-center justify-center">
            <div className="text-4xl font-bold text-white">{pad(duration.days)}</div>
            <div className="text-sm text-purple-200">D</div>
          </div>

          {/* Hours */}
          <div className="bg-white/10 rounded-xl py-4 px-8 text-center flex flex-col items-center justify-center">
            <div className="text-4xl font-bold text-white">{pad(duration.hours)}</div>
            <div className="text-sm text-purple-200">H</div>
          </div>

          {/* Minutes */}
          <div className="bg-white/10 rounded-xl py-4 px-8 text-center flex flex-col items-center justify-center">
            <div className="text-4xl font-bold text-white">{pad(duration.minutes)}</div>
            <div className="text-sm text-purple-200">M</div>
          </div>

          {/* Seconds */}
          <div className="bg-white/10 rounded-xl py-4 px-8 text-center flex flex-col items-center justify-center">
            <div className="text-4xl font-bold text-white">{pad(duration.seconds)}</div>
            <div className="text-sm text-purple-200">S</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CountdownCard;
