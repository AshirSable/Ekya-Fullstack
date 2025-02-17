import React from 'react'
import Navbar from '../components/navbar'
import loginbg from "../assets/loginbg.png"
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <div>
      <Navbar/>
      <div 
        className="min-h-screen bg-cover bg-center flex items-center justify-center" 
        style={{ backgroundImage: `url(${loginbg})` }}
      >
           <div className="bg-opacity-60 bg-gray-600 w-full min-h-screen flex flex-col items-center justify-center p-10">
          <h2 className="text-white text-3xl font-serif text-center mb-6">
            "Welcome! Your Ekya account is your key to business transformation."
          </h2>
          <h3 className="text-white text-4xl font-serif text-center mb-8">Login</h3>
          <div className="justify-center space-y-5">
            <div>
              <label className="block text-xl text-white mb-2" htmlFor="fullName">Email Id</label>
              <input type="text" id="fullName" placeholder="Email Id *" className="py-3 px-4 rounded-lg text-black border border-gray-300 w-full max-w-[300px] mx-auto" />
            </div>
            <div>
              <label className="block text-xl text-white mb-2" htmlFor="fullName">Password</label>
              <input type="text" id="fullName" placeholder="Password *" className="py-3 px-4 rounded-lg text-black border border-gray-300 w-full max-w-[300px] mx-auto" />
            </div>
          </div>
          <div className="flex justify-center mt-6">
              <Link to ="/profile">
                <button className="bg-[#33B687] text-white text-xl font-semibold rounded-lg px-10 py-3 hover:bg-[#39cc96]">
                  Login
                </button>
              </Link>
              </div>
              
              <div className="flex justify-center mt-4">
                <span className="text-white text-sm">Or</span>
              </div>
              
              <div className="flex justify-center space-x-4 mt-4">
                <button className="flex items-center bg-white text-black text-sm font-medium rounded-lg px-4 py-2 shadow-md hover:bg-gray-200">
                  <img src="https://img.icons8.com/color/24/000000/google-logo.png" alt="Google" className="mr-2" /> 
                  Sign Up with Google
                </button>
                <button className="flex items-center bg-white text-black text-sm font-medium rounded-lg px-4 py-2 shadow-md hover:bg-gray-200">
                  <img src="https://img.icons8.com/color/24/000000/facebook.png" alt="Facebook" className="mr-2" /> 
                  Sign Up with Facebook
                </button>
                <button className="flex items-center bg-white text-black text-sm font-medium rounded-lg px-4 py-2 shadow-md hover:bg-gray-200">
                  <img src="https://img.icons8.com/ios-filled/24/000000/phone.png" alt="Phone" className="mr-2" /> 
                  Sign Up with Number
                </button>
              </div>
          </div>
      </div>
    </div>
  )
}
