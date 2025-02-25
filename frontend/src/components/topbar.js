import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";

export default function TopBar() {
  const [isOpen, setIsOpen] = useState(false);
//   const location = useLocation();
//   const activeTab = location.pathname;

  const domains = [
    "Finance",
    "Technology",
    "Consultancy",
    "Graphic Designing",
    "Painting",
    "Transport",
    "Manufacturing",
    "Retail",
    "Healthcare",
    "Education",
    "Real Estate",
    "E-commerce",
  ];

  return (
    <div className="flex items-center justify-between px-4 py-2 rounded-xl bg-white shadow border mb-4">
      {/* Sidebar Toggle Button with Dropdown */}
      <div
        className="relative"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        <button className="p-2 rounded-full bg-white border hover:bg-gray-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {/* Dropdown Menu */}
        {isOpen && (
          <div className="absolute left-0 mt-2 w-48 bg-white border shadow-lg rounded-lg z-10">
            <ul className="py-2">
              {domains.map((domain, index) => (
                <li
                  key={index}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                >
                  {domain}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Search Bar - Closer to Dropdown */}
      <div className="flex items-center bg-white p-2 rounded-full border w-2/5 ml-3">
        <FaSearch className="text-gray-400 mr-2" />
        <input
          type="text"
          placeholder="Search..."
          className="outline-none w-full text-sm"
        />
      </div>

      {/* Notification Icon */}
      <Link
        to="/notifications"
        className="relative p-2 rounded-full bg-white border hover:bg-gray-100 transition duration-200"
      >
        <IoMdNotificationsOutline className="text-gray-600 text-xl" />
        {/* Notification Badge (optional) */}
        <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold w-4 h-4 flex items-center justify-center rounded-full -mt-1 -mr-1">
          3
        </span>
      </Link>
    </div>
  );
}
