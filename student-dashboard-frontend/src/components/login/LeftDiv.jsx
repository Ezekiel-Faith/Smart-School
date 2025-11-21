import React, { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import "../../index.css";

export default function LeftDiv() {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [errors, setErrors] = useState({ username: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);

  const validateForm = () => {
    let newErrors = { username: "", password: "" };
    let isValid = true;

    // Username/Email validation
    if (!formData.username && !formData.password) {
      newErrors.username = "required";
      newErrors.password = "required";
      isValid = false;
    } else if (!formData.username) {
      newErrors.username = "required";
      isValid = false;
    } else if (
      !/^[A-Za-z]+$/.test(formData.username) && // plain name
      !/\S+@\S+\.\S+/.test(formData.username) // or email
    ) {
      newErrors.username = "Enter a valid username or email address";
      isValid = false;
    }

    // Password validation
    if (!formData.password && formData.username) {
      newErrors.password = "required";
      isValid = false;
    } else if (
      formData.password &&
      !/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/.test(
        formData.password
      )
    ) {
      newErrors.password =
        "Password must contain letters, numbers, and a symbol";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // clear error while typing
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("Form submitted :", formData);

      // reset inputs + errors back to default
      setFormData({ username: "", password: "" });
      setErrors({ username: "", password: "" });
      setShowPassword(false);
    }
  };

  return (
    <div
      className="
        p-8 md:p-3 flex-1 flex flex-col justify-center
        w-[385px] h-[555px]
        leftdiv 
      "
    >
      <h2 className="text-2xl md:text-4xl lg:text-2xl font-semibold text-black mb-2 text-center mt-2 lg:mt-0">
        Login
      </h2>
      <p className="text-sm md:text-2xl lg:text-sm text-black mb-6 text-center">
        Enter your login details
      </p>

      <form
        onSubmit={handleSubmit}
        className="space-y-3 md:space-y-10 lg:space-y-2 px-3 md:px-6 lg:px-10 md:text-2xl lg:text-sm"
      >
        {/* Username */}
        <div className="">
          {errors.username && (
            <p className="text-red-500 text-xs mb-1">{errors.username}</p>
          )}
          <input
            type="text"
            name="username"
            placeholder="Username or Email"
            value={formData.username}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-lg md:h-20 text-purple-700 lg:h-10 
              focus:ring-2 focus:ring-purple-400 outline-none
              ${
                formData.username
                  ? "backdrop-blur-md bg-white/60"
                  : "bg-transparent"
              }
              ${errors.username ? "border-red-500" : "border-purple-500"}`}
          />
        </div>

        {/* Password (error above, input+eye inside own relative box so eye doesn't move) */}
        <div>
          {errors.password && (
            <p className="text-red-500 text-xs mb-1">{errors.password}</p>
          )}
          <div className="relative w-full">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-lg md:h-20 lg:h-10 text-purple-700 pr-10 
                focus:ring-2 focus:ring-purple-400 outline-none
                ${formData.password ? "bg-white" : "bg-transparent"}
                ${errors.password ? "border-red-500" : "border-purple-500"}`}
            />
            {formData.password && (
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center 
                text-purple-500 hover:text-purple-600"
              >
                {showPassword ? <FiEye size={12} /> : <FiEyeOff size={12} />}
              </button>
            )}
          </div>
        </div>

        {/* Forgot + Signup */}
        <div className="flex flex-2 space-x-5 md:space-x-15 text-left">
          <button
            type="button"
            className="text-sm md:text-2xl lg:text-sm py-2 cursor-pointer text-black
             hover:text-purple-600 hover:underline "
          >
            Forgot password?
          </button>
          <button
            type="button"
            className="text-sm md:text-2xl lg:text-sm py-2 cursor-pointer text-black
             hover:text-purple-600 hover:underline "
          >
            Sign up
          </button>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-[#8a2be2] to-[#6a0dad]
           text-white py-3 rounded-lg cursor-pointer font-semibold hover:opacity-90 
           transition md:h-20 lg:h-10"
        >
          Login
        </button>
      </form>
    </div>
  );
}
