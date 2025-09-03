import React, { useEffect, useState } from "react";
import { Eye, EyeOff, Mail, Lock, User, Map, Loader2 } from "lucide-react";

export default function SignupForm() {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    country: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all?fields=name,cca2")
      .then((res) => res.json())
      .then((data) => {
        const countryNames = data
          .map((country) => country.name.common)
          .sort((a, b) => a.localeCompare(b));
        setCountries(countryNames);

        if (countryNames.length > 0) {
          setFormData((prev) => ({ ...prev, country: countryNames[0] }));
        }
      })
      .catch((err) => console.error("Error fetching countries:", err));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.username.trim()) {
      newErrors.username = "Username is required";
    } else if (formData.username.length < 3) {
      newErrors.username = "Username must be at least 3 characters";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.country) {
      newErrors.country = "Please select a country";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("Signup data:", formData);
      alert(`Signup successful! Welcome, ${formData.name}!`);
    } catch (error) {
      console.error("Signup error:", error);
      setErrors({ submit: "Failed to sign up. Please try again." });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="bg-white rounded-2xl w-full max-w-3xl p-10 transition-all duration-300">
        <div className="text-center mb-10">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            Create Your Account
          </h1>
          <p className="text-gray-500 text-sm">
            Join our community to learn, connect, and grow with us.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1 flex flex-col gap-2">
              <label
                htmlFor="name"
                className="text-gray-600 font-semibold text-sm"
              >
                Full Name
              </label>
              <div className="relative">
                <User
                  size={18}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                />
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className={`w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                    errors.name ? "border-red-500 ring-2 ring-red-200" : ""
                  } ${isLoading ? "opacity-70 cursor-not-allowed" : ""}`}
                  disabled={isLoading}
                />
              </div>
              {errors.name && (
                <span className="text-red-500 text-xs mt-1">{errors.name}</span>
              )}
            </div>

            <div className="flex-1 flex flex-col gap-2">
              <label
                htmlFor="username"
                className="text-gray-600 font-semibold text-sm"
              >
                Username
              </label>
              <div className="relative">
                <User
                  size={18}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                />
                <input
                  id="username"
                  name="username"
                  type="text"
                  value={formData.username}
                  onChange={handleChange}
                  placeholder="Choose a username"
                  className={`w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                    errors.username ? "border-red-500 ring-2 ring-red-200" : ""
                  } ${isLoading ? "opacity-70 cursor-not-allowed" : ""}`}
                  disabled={isLoading}
                />
              </div>
              {errors.username && (
                <span className="text-red-500 text-xs mt-1">
                  {errors.username}
                </span>
              )}
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1 flex flex-col gap-2">
              <label
                htmlFor="email"
                className="text-gray-600 font-semibold text-sm"
              >
                Email
              </label>
              <div className="relative">
                <Mail
                  size={18}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                />
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className={`w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                    errors.email ? "border-red-500 ring-2 ring-red-200" : ""
                  } ${isLoading ? "opacity-70 cursor-not-allowed" : ""}`}
                  disabled={isLoading}
                />
              </div>
              {errors.email && (
                <span className="text-red-500 text-xs mt-1">
                  {errors.email}
                </span>
              )}
            </div>

            <div className="flex-1 flex flex-col gap-2">
              <label
                htmlFor="country"
                className="text-gray-600 font-semibold text-sm"
              >
                Country
              </label>
              <div className="relative">
                <Map
                  size={18}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                />
                <select
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className={`w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                    errors.country ? "border-red-500 ring-2 ring-red-200" : ""
                  } ${isLoading ? "opacity-70 cursor-not-allowed" : ""}`}
                  disabled={isLoading}
                >
                  {countries.map((country) => (
                    <option key={country} value={country}>
                      {country}
                    </option>
                  ))}
                </select>
              </div>
              {errors.country && (
                <span className="text-red-500 text-xs mt-1">
                  {errors.country}
                </span>
              )}
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1 flex flex-col gap-2">
              <label
                htmlFor="password"
                className="text-gray-600 font-semibold text-sm"
              >
                Password
              </label>
              <div className="relative">
                <Lock
                  size={18}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                />
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Create a password"
                  className={`w-full pl-10 pr-12 py-3 border border-gray-300 rounded-xl bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                    errors.password ? "border-red-500 ring-2 ring-red-200" : ""
                  } ${isLoading ? "opacity-70 cursor-not-allowed" : ""}`}
                  disabled={isLoading}
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  onClick={() => setShowPassword(!showPassword)}
                  disabled={isLoading}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              {errors.password && (
                <span className="text-red-500 text-xs mt-1">
                  {errors.password}
                </span>
              )}
            </div>

            <div className="flex-1 flex flex-col gap-2">
              <label
                htmlFor="confirmPassword"
                className="text-gray-600 font-semibold text-sm"
              >
                Confirm Password
              </label>
              <div className="relative">
                <Lock
                  size={18}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                />
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm your password"
                  className={`w-full pl-10 pr-12 py-3 border border-gray-300 rounded-xl bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                    errors.confirmPassword
                      ? "border-red-500 ring-2 ring-red-200"
                      : ""
                  } ${isLoading ? "opacity-70 cursor-not-allowed" : ""}`}
                  disabled={isLoading}
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  disabled={isLoading}
                >
                  {showConfirmPassword ? (
                    <EyeOff size={18} />
                  ) : (
                    <Eye size={18} />
                  )}
                </button>
              </div>
              {errors.confirmPassword && (
                <span className="text-red-500 text-xs mt-1">
                  {errors.confirmPassword}
                </span>
              )}
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transform hover:-translate-y-0.5 transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none flex items-center justify-center gap-2"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <Loader2 size={18} className="animate-spin" />
                Creating Account...
              </>
            ) : (
              "Sign Up"
            )}
          </button>

          {errors.submit && (
            <div className="text-red-500 text-sm text-center mt-2">
              {errors.submit}
            </div>
          )}

          <button
            type="button"
            className="w-full py-3 bg-white text-gray-700 rounded-xl font-semibold border border-blue-500 hover:bg-gray-50 transform hover:-translate-y-0.5 transition-all duration-300 shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-opacity-50 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none"
            disabled={isLoading}
          >
            Sign Up as Mentor
          </button>

          <div className="text-center text-gray-500 text-sm">
            Already have an account?{" "}
            <a
              href="/login"
              className="text-blue-500 font-semibold hover:text-blue-700 transition-colors duration-200"
            >
              Log in
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
