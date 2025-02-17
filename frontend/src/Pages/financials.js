import React from 'react';
import Explorenav from "../components/loginnav";
import main from "../assets/financemain.jpeg"
import gl from "../assets/govloan.jpeg"
import bl from "../assets/bl.jpeg"
import ml from "../assets/microloan.jpeg"
import cc from "../assets/cc.jpeg"
import cv from "../assets/capital.jpeg"
import advisory from "../assets/advisory.jpeg"

export default function Financials() {
  return (
    <div className="flex h-screen">
      <Explorenav />

      {/* Main Content */}
      <main className="flex-1 bg-white p-8 ml-64 overflow-auto">
        <div className="max-w-5xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <div className="w-1/2 pr-8 ml-10">
              <h1 className="text-4xl font-bold leading-tight mb-4">
                Boost Your Business with Financing
              </h1>
              <p className="text-gray-600 text-lg mb-6">
                Leverage Smart Financial Solutions to Boost Business Growth and Achieve Sustainable Success
              </p>
              <button className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 text-lg font-medium">
                Know More
              </button>
            </div>
            <div className="relative w-1/2">
              <img
                src={main}
                alt="Financial Solutions"
                className="rounded-lg shadow-lg h-96 ml-auto mr-[20%]"
              />
              <div className="absolute top-4 right-4 bg-green-100 text-green-700 p-2 rounded-full text-sm font-semibold">
                Funding Impact: 35%
              </div>
              <div className="absolute bottom-4 left-4 bg-yellow-100 text-yellow-700 p-2 rounded-full text-sm font-semibold">
                Loan Approval Rate: 30%
              </div>
              <div className="absolute top-16 left-16 bg-blue-100 text-blue-700 p-2 rounded-full text-sm font-semibold">
                Annual Growth: 85%
              </div>
            </div>
          </div>
          <hr></hr>

          <div className="text-center mb-10 mt-10">
            <h2 className="text-2xl font-bold">Tailored Financial Solutions for You</h2>
            <p className="text-gray-600 text-lg">
              Personalized Funding Solutions for Business Expansion
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white shadow-lg rounded-lg p-6 border">
              <img
                src={bl}
                alt="Business Loans"
                className="w-full h-32 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Business Loans</h3>
              <p className="text-gray-600">
                Flexible business loans designed to support your growth and financial goals.
              </p>
            </div>

            <div className="bg-white shadow-lg rounded-lg p-6 border">
              <img
                src={cc}
                alt="Business Credit Cards"
                className="w-full h-32 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Business Credit Cards</h3>
              <p className="text-gray-600">
                Business credit cards tailored to manage expenses and boost cash flow.
              </p>
            </div>

            <div className="bg-white shadow-lg rounded-lg p-6 border">
              <img
                src={cv}
                alt="Venture Capital & Equity"
                className="w-full h-32 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Venture Capital & Equity</h3>
              <p className="text-gray-600">
                Venture capital and equity solutions to fuel innovation and scale growth.
              </p>
            </div>

            <div className="bg-white shadow-lg rounded-lg p-6 border">
              <img
                src={advisory}
                alt="Financial Advisory"
                className="w-full h-32 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Financial Advisory</h3>
              <p className="text-gray-600">
                Expert financial advisory services to guide strategic decisions and drive success.
              </p>
            </div>

            <div className="bg-white shadow-lg rounded-lg p-6 border">
              <img
                src={ml}
                alt="Micro Loans"
                className="w-full h-32 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Micro Loans</h3>
              <p className="text-gray-600">
                Micro loans providing essential funding for small-scale business needs and expansion.
              </p>
            </div>

            <div className="bg-white shadow-lg rounded-lg p-6 border">
              <img
                src={gl}
                alt="Government Backed Loans"
                className="w-full h-32 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Government Backed Loans</h3>
              <p className="text-gray-600">
                Government-backed loans offering affordable rates to support your business growth.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
