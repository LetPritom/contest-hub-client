import React from 'react';

const ContestDetails = () => {

    
    return (
    <div className="min-h-screen bg-linear-to-br from-purple-950  via-black to-blue-900/80 py-12 px-4">
      {/* Main Glass Container */}
      <div className="max-w-6xl mx-auto backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl shadow-2xl overflow-hidden">
        
        {/* Big Hero Banner */}
        <div className="relative h-96 md:h-screen max-h-screen  hover:scale-103 transition-all duration-200">
          <img
            src="https://i.ibb.co/204RDk7c/cplusplus.jpg"
            alt="Contest Banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent" />
          
          {/* Contest Title on Banner */}
          <div className="absolute text-center bottom-12 left-0 md:left-10 md:right-10">
            <h1 className="text-3xl md:text-6xl font-extrabold text-white mb-4 drop-shadow-2xl">
              Ultimate Logo Design Championship
            </h1>
            <p className="text-xl p-1 font-semibold md:text-2xl text-purple-200">Prize Money : $25,000</p>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-8 md:p-12 -mt-20 relative z-10">
          <div className="grid md:grid-cols-3 gap-10">
            
            {/* Left: Description & Task */}
            <div className="md:col-span-2 space-y-10">
              {/* Description */}
              <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-purple-300 mb-6">Contest Description</h2>
                <p className="text-gray-200 text-lg leading-relaxed">
                  We are looking for a creative and modern logo for our new tech startup "Nexify". 
                  The logo should represent innovation, speed, and reliability. It needs to work well 
                  in both light and dark modes and be scalable for different sizes.
                </p>
              </div>

              {/* Task Instruction */}
              <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-purple-300 mb-6">Task Details</h2>
                <p className="text-gray-200 text-lg leading-relaxed">
                  Submit your logo design in PNG (transparent background) and SVG format.
                  Include 3 variations: Full color, monochrome, and inverted version.
                  Provide a short explanation (max 200 words) about your design concept.
                  Upload everything in a single Google Drive or Dropbox link.
                </p>
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="space-y-8">
              
              {/* Participants */}
              <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8 text-center">
                <h3 className="text-xl font-semibold text-purple-200 mb-4">Total Participants</h3>
                <p className="text-6xl font-extrabold text-white">48</p>
              </div>

              {/* Countdown */}
              <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-purple-200 mb-6 text-center">Time Remaining</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-white/10 rounded-xl p-4 text-center">
                    <div className="text-4xl font-bold text-white">05</div>
                    <div className="text-sm text-purple-200">Days</div>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4 text-center">
                    <div className="text-4xl font-bold text-white">12</div>
                    <div className="text-sm text-purple-200">Hours</div>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4 text-center">
                    <div className="text-4xl font-bold text-white">34</div>
                    <div className="text-sm text-purple-200">Minutes</div>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4 text-center">
                    <div className="text-4xl font-bold text-white">56</div>
                    <div className="text-sm text-purple-200">Seconds</div>
                  </div>
                </div>
                {/* If ended: <p className="text-3xl font-bold text-red-400 text-center mt-6">Contest Ended</p> */}
              </div>

              {/* Winner Section (show only after declaration) */}
              <div className="backdrop-blur-md bg-linear-to-r from-purple-600/30 to-pink-600/30 border border-purple-400/50 rounded-2xl p-8 text-center">
                <h3 className="text-2xl font-bold text-purple-200 mb-6">Winner 🏆</h3>
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="Winner"
                  className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-purple-400"
                />
                <p className="text-2xl font-bold text-white">Rahim Khan</p>
                <p className="text-purple-200 mt-2">Declared on Dec 25, 2025</p>
              </div>

              {/* Buttons */}
              <div className="space-y-4">
                <button className="w-full py-5 text-xl font-bold text-white rounded-2xl btn-custom">
                  Register & Pay (৳500)
                </button>

                <button className="w-full py-5 text-xl font-bold text-white rounded-2xl bg-transparent backdrop-blur-2xl border border-white/20 shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer ">
                  Submit Your Task
                </button>

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