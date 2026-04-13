import React from 'react';
import { FaUserSecret, FaHeart } from 'react-icons/fa';
import { FiAlertTriangle, FiTarget } from 'react-icons/fi';

const HomeHeader = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            Friends to keep close in your life
          </h1>
          <p className="text-gray-600 text-lg max-w-md mx-auto">
            Your personal shelf of meaningful connections.
          </p>
        </div>

        {/* Button */}
        <div className="flex justify-center mb-12">
          <button className="flex items-center gap-2 bg-emerald-700 hover:bg-emerald-800 text-white px-6 py-3 rounded-xl shadow-lg">
            <span className="text-xl">+</span>
            Add a Friend
          </button>
        </div>

        {/* FLEX STATS */}
        <div className="flex flex-wrap justify-center gap-6">

          {/* Card 1 */}
          <div className="flex items-center gap-4 bg-white rounded-2xl p-6 shadow-sm border w-full sm:w-[45%] md:w-[22%]">
            <div className="w-12 h-12 bg-blue-100 flex items-center justify-center rounded-xl">
              <FaUserSecret className="w-7 h-7 text-blue-600" />
            </div>
            <div>
              <div className="text-3xl font-bold">10</div>
              <div className="text-gray-500 text-sm">Total Friends</div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex items-center gap-4 bg-white rounded-2xl p-6 shadow-sm border w-full sm:w-[45%] md:w-[22%]">
            <div className="w-12 h-12 bg-green-100 flex items-center justify-center rounded-xl">
              <FiTarget className="w-7 h-7 text-green-600" />
            </div>
            <div>
              <div className="text-3xl font-bold">3</div>
              <div className="text-gray-500 text-sm">On Track</div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex items-center gap-4 bg-white rounded-2xl p-6 shadow-sm border w-full sm:w-[45%] md:w-[22%]">
            <div className="w-12 h-12 bg-orange-100 flex items-center justify-center rounded-xl">
              <FiAlertTriangle className="w-7 h-7 text-orange-600" />
            </div>
            <div>
              <div className="text-3xl font-bold">6</div>
              <div className="text-gray-500 text-sm">Need Attention</div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="flex items-center gap-4 bg-white rounded-2xl p-6 shadow-sm border w-full sm:w-[45%] md:w-[22%]">
            <div className="w-12 h-12 bg-purple-100 flex items-center justify-center rounded-xl">
              <FaHeart className="w-7 h-7 text-purple-600" />
            </div>
            <div>
              <div className="text-3xl font-bold">12</div>
              <div className="text-gray-500 text-sm">Interactions</div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default HomeHeader;