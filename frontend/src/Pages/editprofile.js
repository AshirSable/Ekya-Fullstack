import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Explorenav from "../components/loginnav";
import { jwtDecode } from 'jwt-decode'

export default function EditProfile() {
  const navigate = useNavigate();
  const userId = jwtDecode(localStorage.getItem("token"))?.id; // Ensure userId exists

  const [formData, setFormData] = useState({
    businessTitle: "",
    businessDescription: "",
    businessCoreValues: "",
    collaborationInterests: [],
    milestones: [],
  });

  // Fetch user profile data
  useEffect(() => {
    if (userId) {
      axios
        .get(`http://localhost:8000/api/profile/${userId}`)
        .then((response) => {
          if (response.data) {
            setFormData({
              ...response.data,
              collaborationInterests: response.data.collaborationInterests || [],
              milestones: response.data.milestones || [],
            });
          }
        })
        .catch((error) => console.error("Error fetching profile:", error));
    }
  }, [userId]);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle file uploads (optional)
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    console.log("Selected file:", file); // Handle file uploads as needed
  };

  // Handle adding values to array fields (collaborationInterests, milestones)
  const handleArrayChange = (name, value) => {
    if (value && !formData[name].includes(value)) {
      setFormData((prevData) => ({
        ...prevData,
        [name]: [...prevData[name], value],
      }));
    }
  };

  // Remove item from array fields
  const handleRemoveItem = (name, index) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: prevData[name].filter((_, i) => i !== index),
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(userId)
    try {
      const response = await axios.put(
        `http://localhost:8000/api/profile/${userId}`, {
        businessTitle: formData.businessTitle,
        businessDescription: formData.businessDescription,
        businessCoreValues: formData.businessCoreValues,
        collaborationInterests: formData.collaborationInterests,
        milestones: formData.milestones
      },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`, // Ensure token is sent
          },

        }
      );

      if (response.status === 200) {
        alert("Profile updated successfully!");
        navigate("/profile"); // Redirect after updating
      }
    } catch (error) {
      console.error("Error updating profile:", error);
      alert("Error updating profile. Please try again.");
    }
  };

  return (
    <div>
      <div className="w-[20%] fixed h-full">
        <Explorenav />
      </div>
      <div className="min-h-screen flex items-center justify-center bg-gray-100 pt-8 pb-10">
        <div className="w-[90%] max-w-3xl bg-white shadow-lg rounded-lg p-6">
          <div className="flex justify-between items-center border-b pb-3 mb-4">
            <h2 className="text-2xl font-bold">Customize Your Business’s Profile</h2>
            <button onClick={() => navigate(-1)} className="text-red-500 text-xl">&times;</button>
          </div>

          {/* Business Details */}
          <div className="mb-6">
            <h3 className="text-green-600 font-bold">BUSINESS DETAILS</h3>
            <input
              type="text"
              name="businessTitle"
              value={formData.businessTitle}
              onChange={handleChange}
              placeholder="Enter title here"
              className="w-full border p-2 rounded mt-2"
            />
            <div className="mt-2">
              <input type="file" onChange={handleFileChange} className="w-full border p-2 rounded" />
            </div>
          </div>

          {/* About Your Business */}
          <div className="mb-6">
            <h3 className="text-green-600 font-bold">ABOUT YOUR BUSINESS</h3>
            <textarea
              name="businessDescription"
              value={formData.businessDescription}
              onChange={handleChange}
              placeholder="Write a short description about your business"
              className="w-full border p-2 rounded mt-2"
            ></textarea>
            <textarea
              name="businessCoreValues"
              value={formData.businessCoreValues}
              onChange={handleChange}
              placeholder="Write core values here"
              className="w-full border p-2 rounded mt-2"
            ></textarea>
          </div>

          {/* Collaboration Interests */}
          <div className="mb-6">
            <h3 className="text-green-600 font-bold">COLLABORATION INTERESTS</h3>
            <select
              onChange={(e) => handleArrayChange("collaborationInterests", e.target.value)}
              className="w-full border p-2 rounded mt-2"
            >
              <option>Select a domain</option>
              {["Consultancy", "Healthcare", "Packaging", "Banking", "Automation", "Software Testing"].map((sector) => (
                <option key={sector} value={sector}>
                  {sector}
                </option>
              ))}
            </select>
            <div className="mt-2 flex flex-wrap gap-2">
              {formData.collaborationInterests.map((interest, index) => (
                <span key={index} className="bg-gray-200 p-2 rounded-lg text-sm flex items-center">
                  {interest}
                  <button onClick={() => handleRemoveItem("collaborationInterests", index)} className="ml-2 text-red-500">
                    &times;
                  </button>
                </span>
              ))}
            </div>
          </div>

          {/* Milestones & Achievements */}
          <div className="mb-6">
            <h3 className="text-green-600 font-bold">MILESTONES AND ACHIEVEMENTS</h3>
            <input
              type="text"
              placeholder="Write an achievement"
              className="w-full border p-2 rounded mt-2"
              onKeyDown={(e) => {
                if (e.key === "Enter" && e.target.value) {
                  handleArrayChange("milestones", e.target.value);
                  e.target.value = "";
                }
              }}
            />
            <div className="mt-2 flex flex-wrap gap-2">
              {formData.milestones.map((milestone, index) => (
                <span key={index} className="bg-gray-200 p-2 rounded-lg text-sm flex items-center">
                  {milestone}
                  <button onClick={() => handleRemoveItem("milestones", index)} className="ml-2 text-red-500">
                    &times;
                  </button>
                </span>
              ))}
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-between mt-4">
            <button onClick={() => navigate(-1)} className="border px-4 py-2 rounded">
              LATER
            </button>
            <button onClick={handleSubmit} className="bg-green-500 text-white px-6 py-2 rounded">
              UPDATE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
