import React from 'react';

const TermsofService = () => {
    return (
        <div className="max-w-4xl mx-auto p-6">

            <div className="bg-white shadow rounded-2xl p-8">

                <h1 className="text-3xl font-bold text-gray-800 mb-4">
                    Terms of Service
                </h1>

                <p className="text-gray-600 mb-6">
                    By using this application, you agree to follow the terms and conditions
                    described on this page.
                </p>

                
                <h2 className="text-xl font-semibold text-gray-800 mt-6">
                    1. Use of Service
                </h2>
                <p className="text-gray-600 mt-2">
                    You agree to use this app only for personal and lawful purposes.
                    Any misuse may result in account restrictions.
                </p>

               
                <h2 className="text-xl font-semibold text-gray-800 mt-6">
                    2. User Responsibilities
                </h2>
                <p className="text-gray-600 mt-2">
                    You are responsible for maintaining the accuracy of your data and activity.
                </p>

              
                <h2 className="text-xl font-semibold text-gray-800 mt-6">
                    3. Account Security
                </h2>
                <p className="text-gray-600 mt-2">
                    Keep your account credentials safe. We are not responsible for unauthorized access.
                </p>

               
                <h2 className="text-xl font-semibold text-gray-800 mt-6">
                    4. Service Changes
                </h2>
                <p className="text-gray-600 mt-2">
                    We may update or modify features anytime without prior notice.
                </p>

               
                <h2 className="text-xl font-semibold text-gray-800 mt-6">
                    5. Termination
                </h2>
                <p className="text-gray-600 mt-2">
                    We reserve the right to suspend accounts that violate our terms.
                </p>

                
                <div className="mt-8 pt-6 border-t text-sm text-gray-500">
                    Last updated: 2026
                </div>

            </div>

        </div>
    );
};

export default TermsofService;