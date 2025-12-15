import React from "react";

const LoaderSpinner = () => {
  return (
<div className="fixed inset-0 z-999 flex items-center justify-center
                ">

    <div className="relative">
    {/* Outer ring */}
    <div
        className="h-16 w-16 rounded-full border-4 border-purple-600/30
        border-t-purple-500 animate-spin"></div>

    {/* Inner glow */}
    <div
        className="absolute inset-2 rounded-full
        bg-purple-600/20 blur-md"
    ></div>
    </div>
</div>
  );
};

export default LoaderSpinner;
