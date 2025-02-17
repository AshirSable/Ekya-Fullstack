import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/navbar';
import loginbg from "../assets/loginbg.png";

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:8000/api/auth/signin', {
        username: email,  // Assuming backend expects "username" (use email here)
        password
      });

      localStorage.setItem('token', response.data.accessToken); // Store JWT
      alert('Login successful!');
      navigate('/profile'); // Redirect to profile page
    } catch (error) {
      console.error('Login error:', error);
      alert('Invalid email or password!');
    }
  };

  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: `url(${loginbg})` }}>
        <div className="bg-opacity-60 bg-gray-600 w-full min-h-screen flex flex-col items-center justify-center p-10">
          <h2 className="text-white text-3xl font-serif text-center mb-6">
            "Welcome! Your Ekya account is your key to business transformation."
          </h2>
          <h3 className="text-white text-4xl font-serif text-center mb-8">Login</h3>
          <div className="justify-center space-y-5">
            <div>
              <label className="block text-xl text-white mb-2">Email Id</label>
              <input type="text" placeholder="Email Id *" className="py-3 px-4 rounded-lg text-black border border-gray-300 w-full max-w-[300px] mx-auto"
                value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
              <label className="block text-xl text-white mb-2">Password</label>
              <input type="password" placeholder="Password *" className="py-3 px-4 rounded-lg text-black border border-gray-300 w-full max-w-[300px] mx-auto"
                value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
          </div>
          <div className="flex justify-center mt-6">
            <button onClick={handleLogin} className="bg-[#33B687] text-white text-xl font-semibold rounded-lg px-10 py-3 hover:bg-[#39cc96]">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
