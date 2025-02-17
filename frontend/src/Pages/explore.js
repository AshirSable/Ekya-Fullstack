import React from 'react';
import Explorenav from "../components/loginnav";
import { FaSearch } from 'react-icons/fa';
import { IoMdNotificationsOutline } from 'react-icons/io';
import profile from "../assets/profile.jpeg"
import exphero from "../assets/Intersect.png"
import google from "../assets/google.jpeg"

const App = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      <div className="w-64 bg-gray-800">
        <Explorenav />
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 ml-6 overflow-y-auto">
        {/* Top Bar */}
        <div className="flex items-center mb-6 p-2 rounded-2xl bg-white shadow border">
          {/* Sidebar Toggle Button (if needed) */}
          <button className="p-2 rounded-full bg-white border ml-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>

          {/* Search Bar */}
          <div className="flex items-center bg-white p-3 rounded-full border w-1/2 ml-6">
            <FaSearch className="text-gray-400 mr-3" />
            <input
              type="text"
              placeholder="Search here..."
              className="outline-none w-full"
            />
          </div>

          <button className="p-2 rounded-full bg-white border mr-4 ml-auto">
            <IoMdNotificationsOutline className="text-gray-400 text-2xl" />
          </button>

        </div>

        <section className="relative bg-cover bg-center bg-[#2BAF7F] rounded-3xl h-[45vh] mb-8 overflow-hidden flex items-center justify-between shadow-md">
          <div className=" flex-col justify-center px-10 mt-[5%]">
            <p className="text-6xl font-bold text-white leading-none">COLLABORATE</p>
            <p className=" text-white text-xl font-semibold">
              WITH SAME LINE BUSINESSES
            </p>
            <button className="bg-black text-white font-medium rounded-xl px-4 py-2 mt-[3%] ">
              Know More
            </button>
          </div>
          <img 
            src={exphero} 
            className="h-full object-cover rounded-lg"
            alt="Explore Collaboration"
          />
        </section>

        {/* Main Heading */}
        <h2 className="text-2xl font-bold mb-2">Explore Collaborations</h2>
        <p className="text-gray-500 mb-6">
          Collaborate with same-line businesses here on Ekya!
        </p>

        {/* Collaboration Sections */}
        <div className="space-y-8">
          {/* Recommended For You */}
          <div>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold">Recomendations for you</h3>
              <button className="text-blue-500 whitespace-nowrap">See All</button>
            </div>
            <div className="flex space-x-4 overflow-x-auto mt-5">
              {/* Example Collaboration Cards */}
              {Array(5).fill().map((_, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md border mb-5 w-56 min-w-[14rem]">
                  <div className="flex justify-center items-center mb-4 h-[12vh]">
                    <img src={google} alt="Company" className="object-contain h-full" />
                  </div>
                  <hr></hr>
                  <h4 className="font-semibold mb-2 mt-4">GOOGLE</h4>
                  <p className="text-sm text-gray-500">
                    A Software for Business Collaboration
                  </p>
                  <p className="text-sm text-gray-500 mt-2">Revenue Shared: 50%</p>
                  <p className="text-sm text-gray-500">Timeline: 1 Month</p>
                </div>
              ))}
            </div>
          </div>

          {/* Most Popular */}
          <div>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold">Most Popular</h3>
              <button className="text-blue-500 whitespace-nowrap">See All</button>
            </div>
            <div className="flex space-x-4 overflow-x-auto">
              {/* Example Collaboration Cards */}
              {Array(5).fill().map((_, index) => (
                <div key={index} className="bg-white p-6 rounded-lg border mb-5 shadow-md w-56 min-w-[14rem]">
                  <div className="flex justify-center items-center mb-4 h-[12vh]">
                    <img src={google} alt="Company" className="object-contain h-full" />
                  </div>
                  <hr></hr>
                  <h4 className="font-semibold mb-2 mt-4">GOOGLE</h4>
                  <p className="text-sm text-gray-500 ">
                    A Software for Business Collaboration
                  </p>
                  <p className="text-sm text-gray-500 mt-2 ">Revenue Shared: 50%</p>
                  <p className="text-sm text-gray-500">Timeline: 1 Month</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
