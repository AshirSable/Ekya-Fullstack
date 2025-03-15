import React, { useState } from "react";
import WorkStatus from "./workstatus";

// Capsule Tabs Component
const CapsuleTabs = ({ tabs, activeTab, setActiveTab }) => {
  return (
    <div className="flex space-x-3 p-4 border-b">
      {tabs.map((tab, index) => (
        <button
          key={index}
          className={`px-4 py-2 rounded-full border ${
    activeTab === index ? "bg-green-100 text-green-700 font-semibold" : "bg-gray-100 text-gray-500"
  }`}
          onClick={() => setActiveTab(index)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

// Individual Tab Components
const Overview = () => <div className="p-4">Hello, this is Overview</div>;
const Partners = () => <div className="p-4">Hello, this is Partners</div>;
const TermsConditions = () => <div className="p-4">Hello, this is Terms & Conditions</div>;

// Main Component
const Dashboard = () => {
  const tabs = ["Work Status", "Partners", "Overview", "Terms & Conditions"];
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="mt-6 p-4 border rounded-lg shadow-md">
      <CapsuleTabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="mt-4">
        {activeTab === 0 && <WorkStatus />}
        {activeTab === 1 && <Partners />}
        {activeTab === 2 && <Overview />}
        {activeTab === 3 && <TermsConditions />}
      </div>
    </div>
  );
};

export default Dashboard;
