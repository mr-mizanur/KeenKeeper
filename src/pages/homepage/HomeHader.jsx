import React from 'react';
import { FaUserFriends, FaUserPlus } from 'react-icons/fa';
import { FiTarget } from 'react-icons/fi';
import { FiAlertTriangle } from 'react-icons/fi';
import { FaHeart } from 'react-icons/fa';
import { toast } from 'react-toastify';
const HomeHeader = () => {
  return (
    <div className="bg-gray-50 pt-8 pb-10">
      <div className="max-w-6xl mx-auto px-6">
         <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            Friends to keep close in your life
          </h1>
          <p className="text-gray-600 max-w-md mx-auto text-lg">
            Your personal shelf of meaningful connections. Browse, tend, and nurture the 
            relationships that matter most.
          </p>
        </div>

        
        <div className="flex justify-center mb-12">
          <button 
            onClick={() => toast.success("Friend added ")}
            className="bg-emerald-700 hover:bg-emerald-800 text-white font-semibold px-8 py-4 rounded-2xl flex items-center gap-3 text-lg shadow-lg shadow-emerald-200 transition-all active:scale-95">
            <span className="text-xl"> <FaUserPlus></FaUserPlus> </span>
            Add a Friend
          </button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          
          <div className="bg-white rounded-2xl p-6 shadow-sm border flex items-center gap-4">
            <div className="w-14 h-14 bg-blue-100 flex items-center justify-center rounded-2xl">
              <FaUserFriends className="w-8 h-8 text-blue-600" />
            </div>
            <div>
              <div className="text-4xl font-bold text-gray-900">12</div>
              <div className="text-gray-500 text-sm">Total Friends</div>
            </div>
          </div>

          
          <div className="bg-white rounded-2xl p-6 shadow-sm border flex items-center gap-4">
            <div className="w-14 h-14 bg-green-100 flex items-center justify-center rounded-2xl">
              <FiTarget className="w-8 h-8 text-green-600" />
            </div>
            <div>
              <div className="text-4xl font-bold text-gray-900">3</div>
              <div className="text-gray-500 text-sm">On Track</div>
            </div>
          </div>

          
          <div className="bg-white rounded-2xl p-6 shadow-sm border flex items-center gap-4">
            <div className="w-14 h-14 bg-orange-100 flex items-center justify-center rounded-2xl">
              <FiAlertTriangle className="w-8 h-8 text-orange-600" />
            </div>
            <div>
              <div className="text-4xl font-bold text-gray-900">6</div>
              <div className="text-gray-500 text-sm">Need Attention</div>
            </div>
          </div>

          
          <div className="bg-white rounded-2xl p-6 shadow-sm border flex items-center gap-4">
            <div className="w-14 h-14 bg-purple-100 flex items-center justify-center rounded-2xl">
              <FaHeart className="w-8 h-8 text-purple-600" />
            </div>
            <div>
              <div className="text-4xl font-bold text-gray-900">12</div>
              <div className="text-gray-500 text-sm">Interactions</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHeader;