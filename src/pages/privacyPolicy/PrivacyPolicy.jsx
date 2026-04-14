import React from 'react';

const PrivacyPolicy = () => {
    return (
        <div className="max-w-4xl mx-auto p-6">

            <div className="bg-white shadow rounded-2xl p-8">

                <h1 className="text-3xl font-bold text-gray-800 mb-4">
                    Privacy Policy
                </h1>

                <p className="text-gray-600 mb-6">
                    Your privacy is important to us. This page explains how we collect,
                    use, and protect your personal information.
                </p>

                <h2 className="text-xl font-semibold text-gray-800 mt-6">
                    1. Information We Collect
                </h2>
                <p className="text-gray-600 mt-2">
                    We may collect basic information like name, email, and usage data
                    to improve your experience.
                </p>

               
                <h2 className="text-xl font-semibold text-gray-800 mt-6">
                    2. How We Use Information
                </h2>
                <p className="text-gray-600 mt-2">
                    We use your data to provide better services, improve features,
                    and personalize your experience.
                </p>

             
                <h2 className="text-xl font-semibold text-gray-800 mt-6">
                    3. Data Protection
                </h2>
                <p className="text-gray-600 mt-2">
                    We take security seriously and use modern methods to protect your data.
                </p>

                
                <h2 className="text-xl font-semibold text-gray-800 mt-6">
                    4. Third-Party Services
                </h2>
                <p className="text-gray-600 mt-2">
                    We may use third-party tools (like analytics) that follow their own privacy policies.
                </p>

                
                <h2 className="text-xl font-semibold text-gray-800 mt-6">
                    5. Your Rights
                </h2>
                <p className="text-gray-600 mt-2">
                    You can request to access, update, or delete your data anytime.
                </p>

                
                <div className="mt-8 pt-6 border-t text-sm text-gray-500">
                    Last updated: 2026
                </div>

            </div>

        </div>
    );
};

export default PrivacyPolicy;