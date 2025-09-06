import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Bell,
  MessageSquare,
  ChevronDown,
  LogOut,
  User,
  Home,
  Users,
  MessageCircle,
  Bot,
} from "lucide-react";
import Logo from "../assets/images/Logo.png";

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeNav, setActiveNav] = useState("");
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const user = {
    name: "Alex Johnson",
    email: "alex.johnson@example.com",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  };

  useEffect(() => {
    const path = location.pathname;
    if (path === "/") setActiveNav("home");
    else if (path === "/mentors") setActiveNav("mentors");
    else if (path === "/communities") setActiveNav("communities");
    else if (path === "/chatbot") setActiveNav("chatbot");
    else setActiveNav("");
  }, [location]);

  const handleNavigation = (path) => {
    navigate(path);
    setIsProfileOpen(false);
  };

  const handleLogout = () => {
    console.log("User logged out");
    navigate("/login");
    setIsProfileOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full border-b-gray-200 bg-white bg-opacity-95 backdrop-blur-sm z-50 transition-all duration-300 py-3 border-b border-transparent
      }`}
    >
      <div className="flex justify-between items-center max-w-[1800px] mx-auto px-5">
        {/* Logo Section */}
        <div
          className="flex items-center gap-3 cursor-pointer transition-transform duration-200 hover:scale-103"
          onClick={() => handleNavigation("/")}
        >
          <img
            src={Logo}
            alt="Company Logo"
            className={`w-[70px] h-[70px] object-contain transition-all duration-300 
            }`}
          />
        </div>

        {/* Navigation Menu */}
        <nav className="hidden md:flex items-center gap-1">
          <button
            onClick={() => handleNavigation("/")}
            className={`flex items-center gap-2 px-4 py-2 border-none bg-transparent text-gray-600 font-medium text-sm rounded-lg cursor-pointer transition-all duration-200 ${
              activeNav === "home"
                ? "text-blue-500 bg-blue-50 font-semibold"
                : "hover:text-blue-500 hover:bg-blue-50"
            }`}
          >
            <Home size={18} />
            <span>Home</span>
          </button>
          <button
            onClick={() => handleNavigation("/mentors")}
            className={`flex items-center gap-2 px-4 py-2 border-none bg-transparent text-gray-600 font-medium text-sm rounded-lg cursor-pointer transition-all duration-200 ${
              activeNav === "mentors"
                ? "text-blue-500 bg-blue-50 font-semibold"
                : "hover:text-blue-500 hover:bg-blue-50"
            }`}
          >
            <Users size={18} />
            <span>Mentors</span>
          </button>
          <button
            onClick={() => handleNavigation("/communities")}
            className={`flex items-center gap-2 px-4 py-2 border-none bg-transparent text-gray-600 font-medium text-sm rounded-lg cursor-pointer transition-all duration-200 ${
              activeNav === "communities"
                ? "text-blue-500 bg-blue-50 font-semibold"
                : "hover:text-blue-500 hover:bg-blue-50"
            }`}
          >
            <MessageCircle size={18} />
            <span>Communities</span>
          </button>
          <button
            onClick={() => handleNavigation("/chatbot")}
            className={`flex items-center gap-2 px-4 py-2 border-none bg-transparent text-gray-600 font-medium text-sm rounded-lg cursor-pointer transition-all duration-200 ${
              activeNav === "chatbot"
                ? "text-blue-500 bg-blue-50 font-semibold"
                : "hover:text-blue-500 hover:bg-blue-50"
            }`}
          >
            <Bot size={18} />
            <span>Chatbot</span>
          </button>
        </nav>

        {/* Right Section with Icons */}
        <div className="flex items-center gap-4">
          {/* Notifications */}
          <button className="relative w-10 h-10 flex items-center justify-center rounded-full border-none bg-transparent text-gray-500 cursor-pointer transition-all duration-200 hover:bg-gray-100 hover:text-blue-500">
            <Bell size={20} />
          </button>

          {/* Messages */}
          <button className="relative w-10 h-10 flex items-center justify-center rounded-full border-none bg-transparent text-gray-500 cursor-pointer transition-all duration-200 hover:bg-gray-100 hover:text-blue-500">
            <MessageSquare size={20} />
          </button>

          {/* Profile Dropdown */}
          <div className="relative">
            <button
              className="flex items-center gap-2 px-3 py-1 border-none bg-transparent rounded-full cursor-pointer transition-all duration-200 hover:bg-gray-100"
              onClick={() => setIsProfileOpen(!isProfileOpen)}
            >
              <img
                src={user.avatar}
                alt="Profile"
                className="w-8 h-8 rounded-full object-cover"
              />
              <span className="hidden md:inline text-sm font-medium text-gray-800">
                {user.name}
              </span>
              <ChevronDown
                size={16}
                className={`transition-transform duration-200 ${
                  isProfileOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {isProfileOpen && (
              <div className="absolute right-0 top-full mt-2 w-72 bg-white rounded-xl shadow-lg border border-gray-200 py-4 z-50 animate-fade-in">
                <div className="flex items-center gap-3 px-5 pb-3">
                  <img
                    src={user.avatar}
                    alt="Profile"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="flex flex-col">
                    <div className="font-semibold text-gray-800 text-sm">
                      {user.name}
                    </div>
                    <div className="text-gray-500 text-xs">{user.email}</div>
                  </div>
                </div>

                <div className="border-t border-gray-200 my-2"></div>

                <button className="flex items-center gap-3 w-full px-5 py-2 border-none bg-transparent text-gray-600 text-sm text-left cursor-pointer transition-all duration-200 hover:bg-gray-50 hover:text-blue-500">
                  <User size={16} />
                  <span>Edit Profile</span>
                </button>

                <div className="border-t border-gray-200 my-2"></div>

                <button
                  className="flex items-center gap-3 w-full px-5 py-2 border-none bg-transparent text-gray-600 text-sm text-left cursor-pointer transition-all duration-200 hover:bg-gray-50 hover:text-blue-500"
                  onClick={handleLogout}
                >
                  <LogOut size={16} />
                  <span>Logout</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
