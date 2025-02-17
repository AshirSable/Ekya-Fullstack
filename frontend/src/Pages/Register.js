import React from 'react';
import Navbar from '../components/navbar';
import registerbg from "../assets/registerbg.png";

export default function Register() {
  return (
    <div>
      <Navbar />
      <div 
        className="min-h-screen bg-cover bg-center flex items-center justify-center" 
        style={{ backgroundImage: `url(${registerbg})` }}
      >
        <div className="bg-opacity-60 bg-gray-800 w-full min-h-screen flex flex-col items-center justify-center p-10">
          <h2 className="text-white text-3xl font-serif text-center mb-6">
            Unlock the growth of your business with Ekya – where potential meets opportunity.
          </h2>
          <h3 className="text-white text-4xl font-serif text-center mb-8">Register</h3>
          
          <div className="w-full flex justify-center ml-32">
            <form className="space-y-6 w-full max-w-4xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { id: "fullName", label: "Full Name", type: "text", placeholder: "Full Name *" },
                  { id: "username", label: "Username", type: "text", placeholder: "Username *" },
                  { id: "email", label: "Email Id", type: "email", placeholder: "Email Id *" },
                  { id: "dob", label: "Date Of Birth", type: "date", placeholder: "Date Of Birth" },
                  { id: "companyName", label: "Company Name", type: "text", placeholder: "Company Name *" },
                  { id: "business", label: "Nature Of Business", type: "text", placeholder: "Nature Of Business *" },
                  { id: "designation", label: "Designation", type: "text", placeholder: "Designation *" },
                  { id: "city", label: "City", type: "text", placeholder: "City *" },
                ].map(({ id, label, type, placeholder }) => (
                  <div className="flex flex-col items-center md:items-start" key={id}>
                    <label className="block text-xl text-white mb-2 w-full max-w-[300px]" htmlFor={id}>
                      {label}
                    </label>
                    <input 
                      type={type} 
                      id={id} 
                      placeholder={placeholder} 
                      className="py-3 px-4 rounded-lg text-black border border-gray-300 w-full max-w-[300px]" 
                    />
                  </div>
                ))}
              </div>
              
              <div className="flex justify-center mt-6 mr-36">
                <button className="bg-[#33B687] text-white text-xl font-semibold rounded-lg px-10 py-3 hover:bg-[#39cc96]">
                  Register
                </button>
              </div>
              
              <div className="flex justify-center mt-4 mr-36">
                <span className="text-white text-sm">Or</span>
              </div>
              
              <div className="flex justify-center space-x-4 mt-4 mr-36">
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
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
