import React, { useState } from "react";
import Explorenav from "../components/loginnav";
import heroImage from "../assets/heroongoing.png";
import notifyImage from "../assets/Notification.png";
import agreeImage from "../assets/Agreement.png";

const line1Texts = [
  "Project Initiation",
  "Execution Stage",
  "Development",
  "Deployment",
  "Project Completion",
];

const line2Texts = [
  "Kickoff meeting to define project goals, scope, and team roles.",
  "Begin implementing the recommendation algorithms and integrating with the app.",
  "Build and refine the recommendation engine with continuous testing and feedback.",
  "Deploy the recommendation system to the production environment for user access.",
  "Finalize project deliverables, conduct a post-launch review, and prepare for future updates.",
];

const OngoingCollab = () => {
  const [isAgreementGenerated, setIsAgreementGenerated] = useState(false);
  const [isWorkStatusCreated, setIsWorkStatusCreated] = useState(true);
  const [isWorkStatusDivVisible, setIsWorkStatusDivVisible] = useState(false);

  const handleGenerateAgreement = () => {
    setIsAgreementGenerated(true);
  };

  const handleCreateWorkStatus = () => {
    setIsWorkStatusCreated(false); // This hides the "Create Work Status" button
    setIsWorkStatusDivVisible(true); // This shows the additional div
  };

  const [checkedItems, setCheckedItems] = useState({});

  const handleCheckboxChange = (index) => {
    setCheckedItems((prevCheckedItems) => ({
      ...prevCheckedItems,
      [index]: !prevCheckedItems[index],
    }));
  };

  return (
    <>
      <div className="bg-gray-100 min-h-screen">
        <Explorenav />
        <div className="ml-80 mr-10 mt-6 justify-center items-center">
          <div className="relative shadow-sm shadow-slate-600 bg-white rounded-lg w-full h-40 flex justify-center items-center">
            <img
              src={notifyImage}
              className="absolute top-2 right-2 w-auto h-7 m-2"
              alt="bell icon"
            />
            <img src={heroImage} className="w-62 h-auto" alt="hero" />
          </div>

          <div
            className={`flex ${
              isWorkStatusCreated
                ? "justify-center space-x-10"
                : "justify-center"
            } mt-10 w-full`}
          >
            <button
              onClick={handleGenerateAgreement}
              className={`${
                isAgreementGenerated
                  ? "bg-blue-500 hover:bg-blue-600"
                  : "bg-[#1AB27B] hover:bg-[#128C60]"
              } text-white font-semibold text-xl py-4 px-4 rounded-full ${
                isWorkStatusCreated ? "w-full" : "w-full"
              } flex justify-center items-center relative`}
            >
              {isAgreementGenerated && (
                <span className="absolute left-4 flex items-center">
                  <img
                    src={agreeImage}
                    alt="Success Icon"
                    className="h-12 w-auto"
                  />
                </span>
              )}
              <span
                className={`flex-1 ${
                  isAgreementGenerated ? "ml-auto" : ""
                } text-center`}
              >
                {isAgreementGenerated
                  ? "Agreement Generated"
                  : "Generate Agreement"}
              </span>
              {isAgreementGenerated && (
                <span className="bg-white text-blue-500 font-bold text-sm px-2 py-1 rounded-lg absolute right-4">
                  View
                </span>
              )}
            </button>

            {isWorkStatusCreated && (
              <button
                onClick={handleCreateWorkStatus}
                className="bg-[#1AB27B] hover:bg-[#128C60] text-white font-semibold text-xl py-2 px-4 rounded-full w-full"
              >
                Create Work Status
              </button>
            )}
          </div>

          {isWorkStatusDivVisible && (
            <div className="h-auto w-auto bg-white shadow-sm shadow-gray-400 mt-10 p-4 rounded">
              <h2 className="text-2xl text-center mb-2 font-semibold">
                Work Status
              </h2>
              <hr className="border-t-2 border-gray-300 mb-4" />
              <div className="space-y-4">
                {Array.from({ length: 5 }).map((_, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <input
                      type="checkbox"
                      id={`item-${index}`}
                      checked={checkedItems[index] || false}
                      onChange={() => handleCheckboxChange(index)}
                      className="transform scale-150 mr-2"
                    />
                    <div
                      className={`h-24 w-full shadow-sm shadow-gray-400 rounded flex items-center pl-4 ${
                        checkedItems[index] ? "bg-green-200" : "bg-white"
                      }`}
                    >
                      <span className="text-2xl font-semibold mr-2">
                        {index + 1}
                      </span>
                      <div className="h-20 w-full rounded flex flex-col justify-between m-5 py-2">
                        <span className="text-2xl font-semibold">
                          {line1Texts[index]}
                        </span>
                        <span className="text-lg">{line2Texts[index]}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default OngoingCollab;
