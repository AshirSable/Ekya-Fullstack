import React from 'react';
import Explorenav from "../components/loginnav";
import { FaBuilding, FaClock, FaCode, FaMoneyBillWave } from 'react-icons/fa';

const CollabDetails = () => {
  return (
    <div className="flex h-screen overflow-hidden p-4">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 rounded-xl shadow-lg">
        <Explorenav />
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 overflow-y-auto rounded-xl shadow-lg m-4 flex flex-col justify-between">
        <div>
          <h1 className="text-2xl font-bold mb-2">A Software for Business Collaboration</h1>
          <h2 className="text-xl font-semibold text-gray-700 mb-4">CypherSOL Fintech India Pvt Ltd</h2>

          {/* Details Section */}
          <div className="space-y-4">
            <div className="flex items-center">
              <FaMoneyBillWave className="text-green-500 text-lg mr-2" />
              <span className="font-semibold">Revenue Shared:</span>
              <span className="ml-2">23% Revenue Sharing (Negotiable)</span>
            </div>
            <div className="flex items-center">
              <FaCode className="text-blue-500 text-lg mr-2" />
              <span className="font-semibold">Skilled In:</span>
              <span className="ml-2">MERN Stack Development</span>
            </div>
            <div className="flex items-center">
              <FaClock className="text-purple-500 text-lg mr-2" />
              <span className="font-semibold">Time Period:</span>
              <span className="ml-2">12 Months</span>
            </div>
          </div>

          {/* Roles & Responsibilities */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold">Roles & Responsibilities</h3>
            <p className="text-gray-600 mt-2">Backend development for User Authentication. Their role includes designing and developing RESTful APIs, managing databases, and more.</p>
          </div>
        </div>

        {/* Button */}
        <button className="mt-6 bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 w-full">
          SEND REQUEST
        </button>
      </div>
    </div>
  );
};

export default CollabDetails;
