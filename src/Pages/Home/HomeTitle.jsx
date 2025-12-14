import React from "react";

const HomeTitle = () => {
  return (
    <div className="my-8 text-center">
      <h1
        className="
          text-4xl md:text-5xl font-extrabold 
          bg-linear-to-r from-blue-700 to-purple-600
          bg-clip-text text-transparent
        "
      >
        Popular Contests
      </h1>

      <p className="mt-2 text-gray-600">
        Explore the most joined and trending contests right now
      </p>
    </div>
  );
};

export default HomeTitle;
