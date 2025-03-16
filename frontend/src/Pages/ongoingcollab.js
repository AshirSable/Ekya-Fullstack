import React, { useState } from "react";
import Explorenav from "../components/loginnav";
import TopBar from "../components/topbar";
import heroImage from "../assets/google2.png";
import notifyImage from "../assets/Notification.png";
import aes_ongoing from "../assets/aes_ongoing.png";
import Dashboard from "../components/dashboard";

function OngoingCollab() {
  return (
    <div className="flex h-screen overflow-hidden">
      <div className="w-64 bg-gray-800">
        <Explorenav />
      </div>
      <div className="flex-1 p-5 ml-6 overflow-y-auto">
        <TopBar />
        <div className="w-full h-60 rounded-lg relative overflow-hidden shadow-md p-6">
          {/* Title */}
          <h1 className="text-xl font-bold text-black">
            Natural Language Processing based Navigation System
          </h1>
          {/* Subtitle */}
          <h3 className="text-md text-gray-500 mt-1">
            A voice-controlled navigation system using NLP for real-time route
            guidance and assistance using Gemma v3.
          </h3>
          {/* Capsules (Now Properly Aligned Below Text) */}
          <div className="flex gap-3 mt-3">
            <span className="inline-flex items-center px-4 py-1 text-sm font-medium text-gray-600 bg-gray-200 rounded-full">
              2 Months
            </span>
            <span className="inline-flex items-center px-4 py-1 text-sm font-medium text-gray-600 bg-gray-200 rounded-full">
              Ongoing
            </span>
          </div>

          {/* Images */}
          <img
            src={aes_ongoing}
            className="absolute bottom-0 left-0 w-56 h-auto object-cover"
            alt="ongoing Collaboration"
          />
          <img
            src={heroImage}
            className="absolute top-1/2 right-9 transform -translate-y-1/2 w-28 h-auto object-cover"
            alt="ongoing Collaboration"
          />

          {/* Bottom Right Text */}
          <h1 className="absolute bottom-4 right-6 text-lg font-normal text-gray-600">
            Collaborating with Google LLC
          </h1>
        </div>
        
        <Dashboard />

      </div>
    </div>
  );
}

export default OngoingCollab;
