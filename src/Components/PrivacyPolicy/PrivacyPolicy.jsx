// PrivacyPolicy.jsx

import React from 'react';

const PrivacyPolicy = () => {
  return (
    <section className="min-h-screen py-20 px-4 bg-linear-to-b from-black via-purple-950 to-black text-white mt-16">
      <div className="max-w-4xl mx-auto">
        {/* Glassmorphic Container */}
        <div className="backdrop-blur-lg bg-white/5 border border-purple-500/30 rounded-3xl p-8 shadow-2xl transition-all duration-300 hover:shadow-purple-500/50">
          <h1 className="text-4xl md:text-5xl font-extrabold text-center bg-linear-to-r from-yellow-400 via-pink-400 to-purple-400 bg-clip-text text-transparent mb-8">
            Privacy Policy
          </h1>
          
          <p className="text-lg text-purple-200 mb-6">
            At ContestHub, we value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you use our platform for creating, participating in, or managing contests.
          </p>

          <h2 className="text-2xl font-bold text-purple-300 mb-4">1. Information We Collect</h2>
          <p className="text-purple-200 mb-4">
            We collect the following types of information:
          </p>
          <ul className="list-disc pl-6 text-purple-200 mb-6 space-y-2">
            <li><strong>Personal Information:</strong> Name, email address, photo URL, and other details provided during registration or profile updates.</li>
            <li><strong>Payment Information:</strong> Processed securely via third-party providers (e.g., Stripe) for contest entry fees. We do not store your payment details.</li>
            <li><strong>Usage Data:</strong> IP address, browser type, pages visited, and participation in contests to improve our services.</li>
            <li><strong>Submitted Content:</strong> Tasks, links, and other materials you submit for contests.</li>
          </ul>

          <h2 className="text-2xl font-bold text-purple-300 mb-4">2. How We Use Your Information</h2>
          <p className="text-purple-200 mb-4">
            Your data is used to:
          </p>
          <ul className="list-disc pl-6 text-purple-200 mb-6 space-y-2">
            <li>Provide and maintain the platform, including user authentication and contest management.</li>
            <li>Process payments and declare winners.</li>
            <li>Send notifications about contests, deadlines, and updates.</li>
            <li>Analyze usage to enhance user experience and prevent fraud.</li>
          </ul>

          <h2 className="text-2xl font-bold text-purple-300 mb-4">3. Sharing Your Information</h2>
          <p className="text-purple-200 mb-6">
            We do not sell your personal information. We may share it with:
            - Contest creators (e.g., participant names and submissions).
            - Service providers for payment processing, hosting, and analytics.
            - Legal authorities if required by law.
          </p>

          <h2 className="text-2xl font-bold text-purple-300 mb-4">4. Security</h2>
          <p className="text-purple-200 mb-6">
            We use industry-standard security measures, including JWT authentication and environment-secured secrets, to protect your data. However, no system is completely secure, so please use strong passwords.
          </p>

          <h2 className="text-2xl font-bold text-purple-300 mb-4">5. Your Rights</h2>
          <p className="text-purple-200 mb-6">
            You can access, update, or delete your information via your dashboard. Contact us at support@contesthub.com for assistance.
          </p>

          <h2 className="text-2xl font-bold text-purple-300 mb-4">6. Changes to This Policy</h2>
          <p className="text-purple-200 mb-6">
            We may update this policy periodically. Continued use of the platform constitutes acceptance of changes.
          </p>

          <p className="text-center text-purple-300 mt-8">
            Last Updated: January 20, 2026
          </p>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;