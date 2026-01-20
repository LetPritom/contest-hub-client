// TermsOfService.jsx

import React from 'react';

const TermsOfService = () => {
  return (
    <section className="min-h-screen py-16 px-4 md:px-8 lg:px-12 bg-linear-to-b from-black via-purple-950 to-black">
      <div className="max-w-5xl mx-auto">
        {/* Main Title with AOS */}
        <div 
          data-aos="fade-down" 
          data-aos-duration="1000" 
          data-aos-easing="ease-out-cubic"
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent">
            Terms of Service
          </h1>
          <p className="mt-4 text-xl text-purple-300 max-w-2xl mx-auto">
            Welcome to ContestHub! By using our platform, you agree to these terms.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1 */}
          <div 
            data-aos="fade-up" 
            data-aos-delay="100" 
            data-aos-duration="800"
            className="group backdrop-blur-xl bg-white/5 border border-purple-500/30 rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 hover:shadow-purple-600/40 hover:border-purple-400/50 hover:-translate-y-2"
          >
            <div className="p-8">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent mb-4">
                1. User Accounts
              </h2>
              <p className="text-purple-200 leading-relaxed">
                You must create an account to participate in contests. You are responsible for keeping your password secure and notifying us of any unauthorized access.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div 
            data-aos="fade-up" 
            data-aos-delay="200" 
            data-aos-duration="800"
            className="group backdrop-blur-xl bg-white/5 border border-purple-500/30 rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 hover:shadow-purple-600/40 hover:border-purple-400/50 hover:-translate-y-2"
          >
            <div className="p-8">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent mb-4">
                2. User Roles & Responsibilities
              </h2>
              <ul className="text-purple-200 space-y-3 list-disc pl-5">
                <li><strong>Normal Users:</strong> Browse, pay, and participate in contests.</li>
                <li><strong>Contest Creators:</strong> Create and manage contests responsibly.</li>
                <li><strong>Admins:</strong> Approve contests and moderate the platform.</li>
              </ul>
            </div>
          </div>

          {/* Card 3 */}
          <div 
            data-aos="fade-up" 
            data-aos-delay="300" 
            data-aos-duration="800"
            className="group backdrop-blur-xl bg-white/5 border border-purple-500/30 rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 hover:shadow-purple-600/40 hover:border-purple-400/50 hover:-translate-y-2"
          >
            <div className="p-8">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent mb-4">
                3. Contests & Payments
              </h2>
              <p className="text-purple-200 leading-relaxed">
                Entry fees are non-refundable. Prize distribution is handled by creators. ContestHub is not liable for disputes between users.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div 
            data-aos="fade-up" 
            data-aos-delay="400" 
            data-aos-duration="800"
            className="group backdrop-blur-xl bg-white/5 border border-purple-500/30 rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 hover:shadow-purple-600/40 hover:border-purple-400/50 hover:-translate-y-2"
          >
            <div className="p-8">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent mb-4">
                4. Content Ownership
              </h2>
              <p className="text-purple-200 leading-relaxed">
                You retain ownership of your submissions but grant us a license to display them on the platform. No infringing or illegal content allowed.
              </p>
            </div>
          </div>

          {/* Card 5 */}
          <div 
            data-aos="fade-up" 
            data-aos-delay="500" 
            data-aos-duration="800"
            className="group backdrop-blur-xl bg-white/5 border border-purple-500/30 rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 hover:shadow-purple-600/40 hover:border-purple-400/50 hover:-translate-y-2 md:col-span-2"
          >
            <div className="p-8">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent mb-4">
                5. Prohibited Conduct
              </h2>
              <p className="text-purple-200 leading-relaxed">
                Do not cheat, harass others, spam, or violate laws. Violations may lead to immediate account suspension or termination.
              </p>
            </div>
          </div>

          {/* Card 6 - Full width for important sections */}
          <div 
            data-aos="fade-up" 
            data-aos-delay="600" 
            data-aos-duration="800"
            className="group backdrop-blur-xl bg-white/5 border border-purple-500/30 rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 hover:shadow-purple-600/40 hover:border-purple-400/50 hover:-translate-y-2 md:col-span-2"
          >
            <div className="p-8">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent mb-4">
                6. Termination & Liability
              </h2>
              <p className="text-purple-200 leading-relaxed mb-4">
                We may terminate accounts for any violation. The platform is provided "as is" with no warranties. We are not liable for any damages from use.
              </p>
              <p className="text-purple-300 text-sm italic">
                Last Updated: January 20, 2026
              </p>
            </div>
          </div>
        </div>

        {/* Final Note */}
        <div 
          data-aos="zoom-in" 
          data-aos-delay="800" 
          data-aos-duration="1000"
          className="text-center mt-12 text-purple-300 text-lg"
        >
          By continuing to use ContestHub, you accept these Terms of Service.
        </div>
      </div>
    </section>
  );
};

export default TermsOfService;