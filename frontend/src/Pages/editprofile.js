import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Explorenav from "../components/loginnav";
import { jwtDecode } from "jwt-decode";


export default function EditProfile() {
  const navigate = useNavigate();
  const userId = jwtDecode(localStorage.getItem("token"))?.id;
  const [formData, setFormData] = useState({
    userId,
    businessName: "",
    businessLogo: null,
    businessTitle: "",
    businessDescription: "",
    businessCoreValues: "",
    businessImage: "",
    aboutTitle: "",
    servicesDescription: "",
    servicesHeroImage: "",
    businessDomain: "",
    preferredCollaborationSectors: [],
    collaborationInterests: [],
    milestones: [],
  });

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/profile/${userId}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => {
        console.log(res)
        setFormData({ ...res.data, milestones: res.data.milestones || [], collaborationInterests: res.data.collaborationInterests || [] })
      })
      .catch((error) => console.error("Error fetching profile:", error));
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    console.log(e.target)
    console.log(e.target.name)
    const updatedForm = { ...formData, [e.target.name]: e.target.files[0] }
    setFormData(updatedForm);
    console.log(updatedForm)
  };

  const handleMilestoneChange = (index, field, value) => {
    const newMilestones = [...formData.milestones];
    newMilestones[index][field] = value;
    setFormData({ ...formData, milestones: newMilestones });
  };

  const addMilestone = () => {
    setFormData({
      ...formData,
      milestones: [...formData.milestones, { text: "", image: null }],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    Object.keys(formData).forEach((key) => {
      if (key === "milestones") {
        formData.milestones.forEach((milestone, index) => {
          formDataToSend.append(`milestones[${index}][text]`, milestone.text);
          if (milestone.image) {
            formDataToSend.append(`milestones[${index}][image]`, milestone.image);
          }
        });
      } else {
        formDataToSend.append(key, formData[key]);
      }
    });

    axios
      .put(`http://localhost:8000/api/profile/${userId}`, formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,

          "Content-Type": "multipart/form-data"
        },
      })
      .then(() => navigate("/profile"))
      .catch((error) => console.error("Error updating profile:", error));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex py-10">
      <div className="w-[20%] fixed h-full">
        <Explorenav />
      </div>
      <div>

      </div>
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center mb-6">Customize Your Business’s Profile</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="border-b pb-4">
            <h2 className="text-lg font-semibold text-center">Business Details</h2>
            <input type="text" name="businessName" value={formData.businessName} onChange={handleChange} placeholder="Business Name" className="border p-2 w-full rounded" />
            <input type="file" name="businessLogo" onChange={handleFileChange} className="w-full" />
          </div>

          <div className="border-b pb-4">
            <h2 className="text-lg font-semibold text-center">About Your Business</h2>
            <input type="text" name="aboutTitle" value={formData.aboutTitle} onChange={handleChange} placeholder="Title" className="border p-2 w-full rounded" />
            <textarea name="businessDescription" value={formData.businessDescription} onChange={handleChange} placeholder="Business Description" className="border p-2 w-full rounded"></textarea>
            <input type="text" name="businessCoreValues" value={formData.businessCoreValues} onChange={handleChange} placeholder="Business Core Values" className="border p-2 w-full rounded" />
            <input type="file" name="businessImage" onChange={handleFileChange} className="w-full" />
          </div>

          <div className="border-b pb-4">
            <h2 className="text-lg font-semibold text-center">Our Services</h2>
            <input type="text" name="servicesTitle" value={formData.servicesTitle} onChange={handleChange} placeholder="About Title" className="border p-2 w-full rounded" />
            <textarea name="servicesDescription" value={formData.servicesDescription} onChange={handleChange} placeholder="Services Description" className="border p-2 w-full rounded"></textarea>
            <input type="file" name="servicesHeroImage" onChange={handleFileChange} className="w-full" />
          </div>

          <div className="border-b pb-4">
            <h2 className="text-lg font-semibold text-center">Collaboration Interests</h2>
            <select name="businessDomain" value={formData.businessDomain} onChange={handleChange} className="border p-2 w-full rounded">
              <option value="">Select a domain</option>
              <option value="Consultancy">Consultancy</option>
              <option value="Healthcare">Healthcare</option>
            </select>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-center">Milestones and Achievements</h2>
            {formData.milestones.map((milestone, index) => (
              <div key={index} className="flex items-center space-x-2">
                <input type="text" value={milestone.text} onChange={(e) => handleMilestoneChange(index, "text", e.target.value)} placeholder="Write an achievement" className="border p-2 w-full rounded" />
                <input type="file" onChange={(e) => handleMilestoneChange(index, "image", e.target.files[0])} className="w-full" />
              </div>
            ))}
            <button type="button" onClick={addMilestone} className="bg-green-500 text-white px-4 py-2 rounded w-full">Add</button>
          </div>

          <div className="flex justify-between">
            <button type="button" className="border px-4 py-2 rounded text-gray-600">Later</button>
            <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
}
