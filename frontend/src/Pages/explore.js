import React from "react";
import Explorenav from "../components/loginnav";
import { FaSearch } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";
import profile from "../assets/profile.jpeg";
import exphero from "../assets/Intersect.png";
import google from "../assets/google.jpeg";
import TopBar from "../components/topbar";
import { useNavigate } from 'react-router-dom';

const App = () => {
  const navigate = useNavigate(); // Initialize navigate function

  return (
    <div className="flex h-screen overflow-hidden">
      <div className="w-64 bg-gray-800">
        <Explorenav />
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 ml-6 overflow-y-auto">
        <TopBar />

        <section className="relative bg-cover bg-center bg-[#2BAF7F] rounded-3xl h-[45vh] mb-8 overflow-hidden flex items-center justify-between shadow-md">
          <div className=" flex-col justify-center px-10 mt-[5%]">
            <p className="text-6xl font-bold text-white leading-none">
              COLLABORATE
            </p>
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
              <button className="text-blue-500 whitespace-nowrap">
                See All
              </button>
            </div>
            <div className="flex space-x-4 overflow-x-auto mt-5">
              {Array(5)
                .fill()
                .map((_, index) => (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-lg shadow-md border mb-5 w-56 min-w-[14rem] cursor-pointer hover:shadow-lg transition"
                    onClick={() => navigate("/collabdetails")} // Corrected use of navigate
                  >
                    <div className="flex justify-center items-center mb-4 h-[12vh]">
                      <img
                        src={google}
                        alt="Company"
                        className="object-contain h-full"
                      />
                    </div>
                    <hr />
                    <h4 className="font-semibold mb-2 mt-4">GOOGLE</h4>
                    <p className="text-sm text-gray-500">
                      A Software for Business Collaboration
                    </p>
                    <p className="text-sm text-gray-500 mt-2">
                      Revenue Shared: 50%
                    </p>
                    <p className="text-sm text-gray-500">Timeline: 1 Month</p>
                  </div>
                ))}
            </div>
          </div>

          {/* Most Popular */}
          <div>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold">Most Popular</h3>
              <button className="text-blue-500 whitespace-nowrap">
                See All
              </button>
            </div>
            <div className="flex space-x-4 overflow-x-auto">
              {/* Example Collaboration Cards */}
              {Array(5)
                .fill()
                .map((_, index) => (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-lg border mb-5 shadow-md w-56 min-w-[14rem]"
                  >
                    <div className="flex justify-center items-center mb-4 h-[12vh]">
                      <img
                        src={google}
                        alt="Company"
                        className="object-contain h-full"
                      />
                    </div>
                    <hr></hr>
                    <h4 className="font-semibold mb-2 mt-4">GOOGLE</h4>
                    <p className="text-sm text-gray-500 ">
                      A Software for Business Collaboration
                    </p>
                    <p className="text-sm text-gray-500 mt-2 ">
                      Revenue Shared: 50%
                    </p>
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
