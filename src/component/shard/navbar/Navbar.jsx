import React from 'react';
import { CiHome } from 'react-icons/ci';
import { IoMdClock } from 'react-icons/io';
import { IoStatsChart } from 'react-icons/io5';
import { Link } from 'react-router';

const Navbar = () => {
    return (
         <div className="navbar bg-base-100 shadow-sm px-6  container mx-auto">

  
  <div className="flex-1">
    <a className="text-3xl font-semibold ">
      <span className="text-black font-bold">Keen</span>
      <span className="text-emerald-700">Keeper</span>
    </a>
  </div>

  
  <div className="flex-none">
    <ul className="menu menu-horizontal gap-3 font-bold">
      <li>
        < Link to={"/"}  className="text-gray-600 rounded-lg px-4 py-2">
          <CiHome></CiHome> Home
        </ Link>
      </li>
      <li>
        <Link Link to={"/timeline"} className="text-gray-600 hover:text-emerald-800">
          <IoMdClock></IoMdClock> Timeline
        </Link>
      </li>
      <li>
        <Link Link to="/status" className="text-gray-600 hover:text-emerald-800">
          <IoStatsChart></IoStatsChart> Stats
        </Link>
      </li>
    </ul>
  </div>

</div>
    );
};

export default Navbar;