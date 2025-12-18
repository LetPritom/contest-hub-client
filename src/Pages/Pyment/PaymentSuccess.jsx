import React from 'react';
import { useNavigate } from 'react-router';

const PaymentSuccess = () => {

    const navigate = useNavigate()
    return (
        <div className="min-h-screen bg-linear-to-br from-purple-950 via-black to-pink-950 flex items-center justify-center p-6">
      
      {/* Main Glass Card */}
      <div className="w-full max-w-md backdrop-blur-2xl bg-white/5 border border-white/10 rounded-3xl shadow-2xl overflow-hidden">
        
        {/* Subtle Top Gradient Glow */}
        <div className="h-32 bg-linear-to-b from-purple-600/20 to-transparent" />
        
        <div className="relative -mt-20 px-10 pb-12 text-center">
          
          {/* Large Glowing Checkmark Circle */}
          <div className="w-40 h-40 mx-auto mb-8 rounded-full bg-linear-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-2xl shadow-green-500/40 border-4 border-white/20">
            <svg className="w-20 h-20 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>

          {/* Title */}
          <h1 className="text-5xl font-extrabold mb-4 bg-linear-to-r from-purple-300 via-pink-300 to-green-300 bg-clip-text text-transparent">
            Payment Successful!
          </h1>

          {/* Subtitle Message */}
          <p className="text-xl text-purple-200 leading-relaxed mb-12">
            Congratulations! 🎉<br />
            You're now officially registered for the contest.<br />
            Best of luck – show the world your talent!
          </p>

          {/* Home Button – Gorgeous Gradient */}
          <button
            onClick={() => navigate('/')}
            className="w-full btn-custom"
          >
            Back to Home →
          </button>
        </div>

        {/* Optional Bottom Wave (pure CSS beauty) */}
        <div className="h-20 bg-linear-to-t from-purple-800/20 to-transparent" />
      </div>
    </div>
    );
};

export default PaymentSuccess;