import React from "react";
import Explorenav from "../components/loginnav";
import companylogo from "../assets/cyphersol.jpeg";
import { useRef } from "react";
import aboutImage from "../assets/aboutimage.jpeg";

export default function Profile() {
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
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar Section */}
      <div className="w-[20%] fixed h-full">
        {" "}
        {/* Sidebar should take 20% of the width and be fixed */}
        <Explorenav /> {/* Use the sidebar component */}
      </div>

      {/* Main Content Section */}
      <div className="ml-[22%] w-[80%] mt-[2%] mx-[2%]">
        {/* The main content now starts after the sidebar and takes 80% of the width */}
        {/* Header Section */}
        <div className="flex flex-col bg-gradient-to-r from-blue-900 to-blue-600 text-white p-8 rounded-t-lg">
          <h1 className="text-3xl font-bold self-end mr-12">Welcome back,</h1>
          <h1 className="text-3xl font-bold self-end mr-12">Mark Nelson</h1>
        </div>

        {/* Company Info Section */}
        <div className="bg-white shadow-md rounded-b-lg p-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img
                src={companylogo}
                className="w-28 h-28 rounded-full border-gray-200 border shadow-lg"
              />
              <div className="ml-6">
                <h2 className="text-xl font-bold">CypherSOL Pvt. Ltd.</h2>
                <p className="text-gray-500">Mumbai, Maharashtra</p>
              </div>
            </div>
            <button className="bg-green-500 font-semibold text-white px-6 py-2 rounded-lg hover:bg-green-600">
              EDIT PAGE
            </button>
          </div>

          {/* Navigation Tabs */}
          <div className="mt-8">
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
            <hr className="my-4 border-t-2 border-gray-300" />

            {/* Section: About Us */}
            <section ref={aboutUsRef} className="flex mt-8">
              <img
                src={aboutImage}
                alt="About Us"
                className="w-1/3 mr-6 rounded-lg shadow-md"
              />
              <div>
                <h2 className="text-green-600 text-lg font-bold">
                  ____ About Us
                </h2>
                <h3 className="text-3xl font-extrabold mt-2 mb-4">
                  WE’RE READY TO GROW YOUR BUSINESS
                </h3>
                <p className="text-gray-600">
                  CypherSOL Fintech India Private Ltd. has developed a
                  state-of-the-art Bank Statement Analyzer, that can extract
                  structured insights and valuable information from financial
                  statements. Instead of spending hours analyzing a large number
                  of data transactions from multiple banks or statements, you
                  can use CypherSOL to do so efficiently and in minimal time.
                </p>
                <ul className="list-none text-gray-700 mt-4">
                  <li className="flex items-center mb-2">
                    <svg
                      className="w-6 h-6 text-green-500 mr-2"
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
                      className="w-6 h-6 text-green-500 mr-2"
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
                    Commitment to Innovation and Excellence in Financial
                    Solutions.
                  </li>
                </ul>
              </div>
            </section>

            <hr className="my-8 border-t-2 border-gray-300" />

            {/* Section: Our Services */}
            <section ref={servicesRef} className="mt-8">
              <h2 className="text-green-600 text-lg font-bold">
                ____ Our Services
              </h2>
              <h3 className="text-3xl font-extrabold mt-2 mb-4">
                FINANCIAL ANALYSIS REDEFINED
              </h3>
              <p className="text-gray-600">
                We offer a variety of financial solutions including statement
                analysis, transaction insights, and risk assessments. Our
                innovative technology simplifies data extraction and provides
                actionable insights in real-time.
              </p>
            </section>

            <hr className="my-8 border-t-2 border-gray-300" />

            {/* Section: Collaboration Interests */}
            <section ref={collaborationsRef} className="mt-8">
              <h2 className="text-green-600 text-lg font-bold">
                ____ Collaboration Interests
              </h2>
              <h3 className="text-3xl font-extrabold mt-2 mb-4">
                PARTNER WITH US
              </h3>
              <p className="text-gray-600">
                We are actively seeking collaborations with fintech companies,
                financial institutions, and other businesses that are committed
                to innovation in financial technologies.
              </p>
            </section>

            <hr className="my-8 border-t-2 border-gray-300" />

            {/* Section: Milestones & Achievements */}
            <section ref={milestonesRef} className="mt-8">
              <h2 className="text-green-600 text-lg font-bold">
                ____ Milestones & Achievements
              </h2>
              <h3 className="text-3xl font-extrabold mt-2 mb-4">
                OUR JOURNEY SO FAR
              </h3>
              <p className="text-gray-600">
                From our humble beginnings in Mumbai, we have expanded our
                services across India and are constantly innovating to bring the
                best solutions to our clients. Our key achievements include...
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
