import React, { useState } from 'react';

const CollaborationForm = ({ setShowForm, handleTitleUpdate }) => {
  const [title, setTitle] = useState('');
  const [revenueShared, setRevenueShared] = useState('');
  const [timePeriod, setTimePeriod] = useState('');

  const handleClose = () => {
    setShowForm(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleTitleUpdate(title, revenueShared, timePeriod);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-xl">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Create a New Collaboration</h2>
        <button onClick={handleClose} className="text-gray-500 text-xl font-bold">×</button>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Project Title</label>
          <input
            type="text"
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Enter title here"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        {/* Other form fields remain unchanged */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Project Description</label>
          <textarea
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Project description should be within 30 words"
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Roles & Responsibilities</label>
          <input
            type="text"
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Eg: Data Analyst for data visualization"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Skills & Tools Required</label>
          <input
            type="text"
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Eg: Problem Solving, Data Storytelling"
          />
        </div>
        <div className="flex space-x-4 mb-4">
          <div className="w-1/2">
            <label className="block text-gray-700 font-semibold mb-2">Revenue Sharing (%)</label>
            <input
              type="text"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Revenue Sharing must be negotiable"
              value={revenueShared}
              onChange={(e) => setRevenueShared(e.target.value)}
            />
          </div>
          <div className="w-1/2">
            <label className="block text-gray-700 font-semibold mb-2">Time Period</label>
            <input
              type="text"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter time required for collab"
              value={timePeriod}
              onChange={(e) => setTimePeriod(e.target.value)}
            />
          </div>
        </div>
        <div className="flex justify-end space-x-4">
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-md"
          >
            UPDATE
          </button>
        </div>
      </form>
    </div>
  );
};

export default CollaborationForm;
