import React, { useState } from 'react';
import axios from 'axios';
import Navbar from '../components/navbar';
import registerbg from "../assets/registerbg.png";

export default function Register() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  console.log(formData)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async () => {
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    try {
      await axios.post('http://localhost:8000/api/auth/signup', {
        username: formData.username,
        email: formData.email,
        password: formData.password
      },
      {
        headers: {
          "Content-Type": "application/json"
        },
      });
      alert('Registration successful!');
    } catch (error) {
      console.error('Registration error:', error);
      alert('Error registering user.');
    }
  };

  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: `url(${registerbg})` }}>
        <div className="bg-opacity-60 bg-gray-800 w-full min-h-screen flex flex-col items-center justify-center p-10">
          <h2 className="text-white text-3xl font-serif text-center mb-6">
            Unlock the growth of your business with Ekya – where potential meets opportunity.
          </h2>
          <h3 className="text-white text-4xl font-serif text-center mb-8">Register</h3>
          <div className="w-full flex justify-center">
            <form className="space-y-6 w-full max-w-md">
              <div>
                <label className="block text-xl text-white mb-2">Username</label>
                <input type="text" name="username" placeholder="Username *" className="py-3 px-4 rounded-lg text-black border border-gray-300 w-full"
                  value={formData.username} onChange={handleChange} />
              </div>
              <div>
                <label className="block text-xl text-white mb-2">Email Id</label>
                <input type="email" name="email" placeholder="Email Id *" className="py-3 px-4 rounded-lg text-black border border-gray-300 w-full"
                  value={formData.email} onChange={handleChange} />
              </div>
              <div>
                <label className="block text-xl text-white mb-2">Password</label>
                <input type="password" name="password" placeholder="Password *" className="py-3 px-4 rounded-lg text-black border border-gray-300 w-full"
                  value={formData.password} onChange={handleChange} />
              </div>
              <div>
                <label className="block text-xl text-white mb-2">Confirm Password</label>
                <input type="password" name="confirmPassword" placeholder="Confirm Password *" className="py-3 px-4 rounded-lg text-black border border-gray-300 w-full"
                  value={formData.confirmPassword} onChange={handleChange} />
              </div>
              <div className="flex justify-center mt-6">
                <button type="button" onClick={handleRegister} className="bg-[#33B687] text-white text-xl font-semibold rounded-lg px-10 py-3 hover:bg-[#39cc96]">
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
