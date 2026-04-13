import React from 'react';
import { CiHome } from 'react-icons/ci';
import { GiBackForth } from 'react-icons/gi';
import { MdError } from 'react-icons/md';

const Error = () => {
    return (
        <div className="min-h-screen bg-[#16a085] flex items-center justify-center px-4">
            <div className="text-center max-w-lg">
                
                <div className="mx-auto mb-8 text-8xl animate-bounce">
                    <MdError></MdError>
                </div>

                <h1 className="text-7xl font-bold text-white mb-2 tracking-tighter">
                    404
                </h1>
                
                <h2 className="text-3xl font-semibold text-purple-300 mb-4">
                    Oops! Page Not Found
                </h2>
                
                

               
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                        onClick={() => window.history.back()}
                        className="px-8 py-3 bg-white text-slate-900 font-medium rounded-full hover:bg-gray-200 transition-all duration-300 flex items-center justify-center gap-2"
                    >
                        <GiBackForth></GiBackForth> Go Back
                    </button>
                    
                    <button onClick={() => window.location.href = '/'} className="px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-full transition-all duration-300 flex gap-2 items-center justify-center">
                        <CiHome></CiHome> Home
                    </button>
                </div>

                <p className="text-gray-500 mt-10 text-sm">
                    Need help? Contact support
                </p>
            </div>
        </div>
    );
};

export default Error;