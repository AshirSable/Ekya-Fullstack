import React, { useEffect, useState } from 'react';
import { FaUser, FaPlusCircle, FaSpinner, FaCog, FaHistory, FaRupeeSign, FaHeartbeat } from 'react-icons/fa';
import profile from "../assets/profile.jpeg";
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('/explore');

  useEffect(() => {
    // Update active tab based on the current path
    setActiveTab(location.pathname);
  }, [location]);

  return (
    <div className="fixed top-0 left-0 w-72 h-full bg-white shadow-lg p-4 flex flex-col">
      <div>
        <h1 className="text-xl font-bold mb-6 text-center">EKYA</h1>
        <Link to="/profile">
          <div className="flex items-center p-3 rounded-full border mb-4">
            <img 
              src={profile}
              alt="User" 
              className="w-10 h-10 rounded-full mr-3"
            />
            <span className="font-semibold">Mark Nelson</span>
          </div>
        </Link>

        <ul>
          <Link to="/explore">
            <li
              className={`flex items-center p-3 rounded-full cursor-pointer mb-4 ${
                activeTab === '/explore' ? 'bg-green-100 text-green-500' : 'hover:bg-gray-100 text-gray-800'
              }`}
            >
              <FaUser className="mr-3" />
              <span className="font-medium">Explore Collaborations</span>
            </li>
          </Link>
          <Link to="/addcollab">
            <li
              className={`flex items-center p-3 rounded-full cursor-pointer mb-4 ${
                activeTab === '/addcollab' ? 'bg-green-100 text-green-500' : 'hover:bg-gray-100 text-gray-800'
              }`}
            >
              <FaPlusCircle className="mr-3" />
              <span className="font-medium">Add Collaborations</span>
            </li>
          </Link>
          <Link to='/ongoingcollab'>
            <li
              className={`flex items-center p-3 rounded-full cursor-pointer mb-4 ${
                activeTab === '/ongoingcollab' ? 'bg-green-100 text-green-500' : 'hover:bg-gray-100 text-gray-800'
              }`}
            >
              <FaSpinner className="mr-3" />
              <span className="font-medium">Ongoing Collaborations</span>
            </li>
          </Link>
          <Link to='/pastcollab'>
            <li
              className={`flex items-center p-3 rounded-full cursor-pointer mb-4 ${
                activeTab === '/pastcollab' ? 'bg-green-100 text-green-500' : 'hover:bg-gray-100 text-gray-800'
              }`}
            >
              <FaHistory className="mr-3" />
              <span className="font-medium">Past Collaborations</span>
            </li>
          </Link>
          <Link to='/financials'>
            <li
              className={`flex items-center p-3 rounded-full cursor-pointer mb-4 ${
                activeTab === '/financials' ? 'bg-green-100 text-green-500' : 'hover:bg-gray-100 text-gray-800'
              }`}
            >
              <FaRupeeSign className="mr-3" />
              <span className="font-medium">Financial Solutions</span>
            </li>
          </Link>
          <Link to='/pulse'>
            <li
              className={`flex items-center p-3 rounded-full cursor-pointer mb-4 ${
                activeTab === '/pulse' ? 'bg-green-100 text-green-500' : 'hover:bg-gray-100 text-gray-800'
              }`}
            >
              <FaHeartbeat className="mr-3" />
              <span className="font-medium">Financial Pulse</span>
            </li>
          </Link>
        </ul>
      </div>

      <div className="mt-auto">
        <button className="flex items-center p-3 w-full rounded-full border hover:bg-gray-100">
          <FaCog className="mr-3 text-gray-800" />
          <span className="text-gray-800 font-medium">Settings</span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
