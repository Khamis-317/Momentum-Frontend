import { useState, useEffect } from "react";
import Logo from "../assets/images/Logo.png";
import { useNavigate, useLocation } from "react-router-dom";

export default function OutsideHeader() {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState("");

  // Set active tab based on current route
  useEffect(() => {
    if (location.pathname === "/login") {
      setActiveTab("login");
    } else if (location.pathname === "/signup") {
      setActiveTab("signup");
    } else {
      setActiveTab("");
    }
  }, [location]);

  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleSignupClick = () => {
    navigate("/signup");
  };

  return (
    <header className="top-0 left-0 w-full bg-white bg-opacity-95 backdrop-blur-sm z-50 transition-all duration-300 py-3 border-b border-transparent">
      <div className="flex justify-between items-center max-w-[1800px] mx-auto px-5">
        <div
          className="flex items-center gap-3 cursor-pointer transition-transform duration-200 hover:scale-103"
          onClick={() => navigate("/")}
        >
          <img
            src={Logo}
            alt="Company Logo"
            className="w-[70px] h-[70px] object-contain transition-all duration-300"
          />
        </div>

        <nav className="flex items-center gap-4">
          <button
            onClick={handleLoginClick}
            className={`relative flex items-center gap-2 px-5 py-2 rounded-lg font-semibold text-sm cursor-pointer transition-all duration-300 overflow-hidden
              ${
                activeTab === "login"
                  ? "ring-2 ring-blue-400 ring-opacity-30"
                  : ""
              }
              bg-blue-500 text-white border-none hover:bg-blue-600 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-300
            `}
          >
            <span className="hidden sm:inline">Login</span>
            <span className="sm:hidden">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                />
              </svg>
            </span>
          </button>

          <button
            onClick={handleSignupClick}
            className={`relative flex items-center gap-2 px-5 py-2 rounded-lg font-semibold text-sm cursor-pointer transition-all duration-300 overflow-hidden
              ${
                activeTab === "signup"
                  ? "ring-2 ring-blue-400 ring-opacity-30"
                  : ""
              }
              bg-transparent text-gray-900 border border-blue-500 hover:bg-blue-500 hover:text-white hover:-translate-y-0.5 hover:shadow-md hover:shadow-blue-200
            `}
          >
            <span className="hidden sm:inline">Sign up</span>
            <span className="sm:hidden">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                />
              </svg>
            </span>
          </button>
        </nav>
      </div>
    </header>
  );
}
