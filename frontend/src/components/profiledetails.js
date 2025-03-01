import React, { useEffect, useState } from "react";
import { useRef } from "react";
import aboutImage from "../assets/aboutimage.jpeg";

const ProfileDetails = () => {
    // Create refs for each section
  const aboutUsRef = useRef(null);
  const servicesRef = useRef(null);
  const collaborationsRef = useRef(null);
  const milestonesRef = useRef(null);

  // Scroll to a specific section
  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  
  return (
    <div className="mt-[10%] px-[5%]">
      <nav className="flex justify-between">
        <button
          onClick={() => scrollToSection(aboutUsRef)}
          className="text-gray-700 hover:text-blue-600"
        >
          ABOUT US
        </button>
        <button
          onClick={() => scrollToSection(servicesRef)}
          className="text-gray-700 hover:text-blue-600"
        >
          OUR SERVICES
        </button>
        <button
          onClick={() => scrollToSection(collaborationsRef)}
          className="text-gray-700 hover:text-blue-600"
        >
          COLLABORATION INTERESTS
        </button>
        <button
          onClick={() => scrollToSection(milestonesRef)}
          className="text-gray-700 hover:text-blue-600"
        >
          MILESTONES & ACHIEVEMENTS
        </button>
      </nav>
      <hr className="my-[4%] border-t-2 border-gray-300" />
      {/* Section: About Us */}
      <section
        ref={aboutUsRef}
        className="p-[4%] flex items-center justify-between"
      >
        <img
          src={aboutImage}
          alt="About Us"
          className="w-[33.33%] mr-[4%] rounded-lg shadow-md"
        />
        <div>
          <h2 className="text-green-600 text-lg font-bold">____ About Us</h2>
          <h3 className="text-3xl font-extrabold my-[3%]">
            WE’RE READY TO GROW YOUR BUSINESS
          </h3>
          <p className="text-gray-600 mb-[4%]">
            CypherSOL Fintech India Private Ltd. has developed a
            state-of-the-art Bank Statement Analyzer, that can extract
            structured insights and valuable information from financial
            statements. Instead of spending hours analyzing a large number of
            data transactions from multiple banks or statements, you can use
            CypherSOL to do so efficiently and in minimal time.
          </p>
          <ul className="list-none text-gray-700">
            <li className="flex items-center mb-[2%]">
              <svg
                className="w-[5%] h-[5%] text-green-500 mr-[2%]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              Customer Trust and Data Security Are Our Top Priorities.
            </li>
            <li className="flex items-center">
              <svg
                className="w-[5%] h-[5%] text-green-500 mr-[2%]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              Commitment to Innovation and Excellence in Financial Solutions.
            </li>
          </ul>
        </div>
      </section>
      <hr className="my-[4%] border-t-2 border-gray-300" />
      {/* Section: Our Services */}
      <section
        ref={servicesRef}
        className="p-[4%] flex items-center justify-between"
      >
        <div className="w-[50%]">
          <h2 className="text-green-600 text-lg font-bold">
            ____ Our Services
          </h2>
          <h3 className="text-3xl font-extrabold my-[4%]">
            WE’RE READY TO GROW YOUR BUSINESS
          </h3>
          <p className="text-gray-600 mb-[4%]">
            CypherSOL Fintech India Private Ltd. has developed a
            state-of-the-art Bank Statement Analyzer, that can extract
            structured insights and valuable information from financial
            statements. Instead of spending hours analyzing a large number of
            data transactions from multiple banks or statements, you can use
            CypherSOL to do so efficiently and in minimal time.
          </p>
          <ul className="list-none text-gray-700">
            <li className="flex items-center mb-[2%]">
              <svg
                className="w-[5%] h-[5%] text-green-500 mr-[2%]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              Customer Trust and Data Security Are Our Top Priorities.
            </li>
            <li className="flex items-center">
              <svg
                className="w-[5%] h-[5%] text-green-500 mr-[2%]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              Commitment to Innovation and Excellence in Financial Solutions.
            </li>
          </ul>
        </div>
        <img
          src={aboutImage}
          alt="About Us"
          className="w-[33.33%] mr-[3%] rounded-lg shadow-md"
        />
      </section>
      <hr className="my-4 border-t-2 border-gray-300" />
      {/* Section: Collaboration Interests */}
      <section
        ref={collaborationsRef}
        className="p-[4%] flex items-center justify-between"
      >
        <img
          src={aboutImage}
          alt="About Us"
          className="w-[33.33%] mr-[4%] rounded-lg shadow-md"
        />
        <div>
          <h2 className="text-green-600 text-lg font-bold">
            ____ Collaboration Interests
          </h2>
          <h3 className="text-3xl font-extrabold my-[3%]">
            WE’RE READY TO GROW YOUR BUSINESS
          </h3>
          <p className="text-gray-600 mb-[4%]">
            CypherSOL Fintech India Private Ltd. has developed a
            state-of-the-art Bank Statement Analyzer, that can extract
            structured insights and valuable information from financial
            statements. Instead of spending hours analyzing a large number of
            data transactions from multiple banks or statements, you can use
            CypherSOL to do so efficiently and in minimal time.
          </p>
          <ul className="list-none text-gray-700">
            <li className="flex items-center mb-[2%]">
              <svg
                className="w-[5%] h-[5%] text-green-500 mr-[2%]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              Customer Trust and Data Security Are Our Top Priorities.
            </li>
            <li className="flex items-center">
              <svg
                className="w-[5%] h-[5%] text-green-500 mr-[2%]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              Commitment to Innovation and Excellence in Financial Solutions.
            </li>
          </ul>
        </div>
      </section>
      <hr className="my-4 border-t-2 border-gray-300" />
      {/* Section: Milestones & Achievements */}
      <section
        ref={milestonesRef}
        className="p-[4%] flex items-center justify-between"
      >
        <div className="w-[50%]">
          <h2 className="text-green-600 text-lg font-bold">
            ____ Milestones & Achievements
          </h2>
          <h3 className="text-3xl font-extrabold my-[4%]">
            WE’RE READY TO GROW YOUR BUSINESS
          </h3>
          <p className="text-gray-600 mb-[4%]">
            CypherSOL Fintech India Private Ltd. has developed a
            state-of-the-art Bank Statement Analyzer, that can extract
            structured insights and valuable information from financial
            statements. Instead of spending hours analyzing a large number of
            data transactions from multiple banks or statements, you can use
            CypherSOL to do so efficiently and in minimal time.
          </p>
          <ul className="list-none text-gray-700">
            <li className="flex items-center mb-[2%]">
              <svg
                className="w-[5%] h-[5%] text-green-500 mr-[2%]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              Customer Trust and Data Security Are Our Top Priorities.
            </li>
            <li className="flex items-center">
              <svg
                className="w-[5%] h-[5%] text-green-500 mr-[2%]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              Commitment to Innovation and Excellence in Financial Solutions.
            </li>
          </ul>
        </div>
        <img
          src={aboutImage}
          alt="About Us"
          className="w-[33.33%] mr-[3%] rounded-lg shadow-md"
        />
      </section>
    </div>
  );
};

export default ProfileDetails;
