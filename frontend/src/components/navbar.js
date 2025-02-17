import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-[#2B2A2A] p-5">
      <div className="text-white text-4xl font-serif ml-[3%]">Ekya</div>
      <ul className="flex flex-grow justify-center space-x-16">
        <li><a href="/" className="text-white text-xl hover:text-[#33B687]">Home</a></li>
        <li><a href="About" className="text-white text-xl hover:text-[#33B687]">About</a></li>
        <li><a href="Services" className="text-white text-xl hover:text-[#33B687]">Services</a></li>
        <li><a href="Pricing" className="text-white text-xl hover:text-[#33B687]">Pricing</a></li>
        <li><a href="Contact" className="text-white text-xl hover:text-[#33B687]">Contact</a></li>
      </ul>
      <div className="flex space-x-4 mr-[3%]"> 
        <Link to="/Register">
          <button className="bg-[#33B687] text-xl text-white rounded-lg px-4 py-2 hover:bg-[#39cc96]">Register</button>
        </Link>
        <Link to="/Login">
          <button className="bg-[#33B687] text-xl text-white rounded-lg px-6 py-2 hover:bg-[#39cc96]">Login</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;