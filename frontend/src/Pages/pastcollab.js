import React from "react";
import Explorenav from "../components/loginnav";

const PastCollab = () => {
  return (
    <div className="flex h-screen bg-gray-100 min-h-screen">
      <Explorenav />
      <div className="ml-80 mt-5 w-full mr-8">
        <h1 className="text-2xl font-semibold pb-5">Your Past Collaborations</h1>
        <div className="bg-white rounded-lg shadow-md h-24 w-full  border border-gray-200">
          <div className="m-4">
            <h2 className="text-xl font-semibold mb-2">Software for business collaboration</h2>
            <div className="flex flex-row justify-between items-center">
              <div className="flex flex-row">
                <p className="text-sm mb-2 pr-14 text-gray-700 flex flex-row">
                  Revenue Shared:
                  <span className="text-black font-semibold pl-2">12%</span>
                </p>
                <p className="text-sm mb-2 pr-14 text-gray-700 flex flex-row">
                  Time Period:
                  <span className="text-black font-semibold pl-2">
                    12 months
                  </span>
                </p>
                <p className="text-sm mb-2 text-gray-700 flex flex-row">
                  Completed:
                  <span className="text-black font-semibold pl-2">
                    100%
                  </span>
                </p>
              </div>

              {/* Buttons aligned on the right */}
              <div className="flex space-x-2">
                <button className="border border-blue-600 text-blue-600 font-semibold px-4 py-1 rounded-md hover:bg-blue-600 hover:text-white">
                  Review
                </button>
                <button className="bg-green-500 text-white font-semibold px-4 py-1 rounded-md hover:bg-green-600">
                  Resubmit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PastCollab;
