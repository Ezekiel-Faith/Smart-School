import React, { useState } from "react";

export default function LeftDiv() {
  const [formData, setFormData] = useState({ username: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="p-8 flex-1 flex flex-col justify-center bg-purple-200 
    rounded-l-2xl ">
      <h2 className="text-2xl md:text-4xl lg:text-2xl font-semibold 
      text-gray-800 mb-2 text-center mt-2 lg:mt-0">Login</h2>
      <p className="text-sm md:text-2xl lg:text-sm text-gray-500 
      mb-6 text-center">Enter your login details</p>

      <form onSubmit={handleSubmit} className="space-y-3 md:space-y-10 
      lg:space-y-2 px-3 md:px-6 lg:px-10 md:text-2xl lg:text-sm ">
        {/* Username */}
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-500 rounded-lg 
          focus:ring-2 focus:ring-purple-400 outline-none md:h-20 lg:h-10"
        />

        {/* Password */}
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-500 rounded-lg 
          focus:ring-2 focus:ring-purple-400 outline-none md:h-20 lg:h-10"
        />

        {/* Forgot Password - aligned left */}
        <div className="text-left">
          <button
            type="button"
            className="text-sm md:text-2xl lg:text-sm py-2 text-gray-400
             hover:text-purple-600 hover:underline "
          >
            Forgot password?
          </button>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-[#8a2be2] to-[#6a0dad]
           text-white py-3 rounded-lg font-semibold hover:opacity-90 
           transition md:h-20 lg:h-10"
        >
          Login
        </button>
      </form>
    </div>
  );
}
