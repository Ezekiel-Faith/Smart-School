// src/components/rightDiv.jsx
import React from "react";
import LoginImage from "../../Asset/Layer.png";
import "../../index.css";

export default function RightDiv() {
  return (
    <div className="flex-1 flex w-[385px] h-[555px] flex-col items-start p-4 backdrop-blur-lg bg-white/70 shadow-lg">
      <h2 className="text-3xl font-bold text-gray-800 mt-8">Welcome to</h2>
      <p className="text-2xl font-semibold text-gray-600 ">Student portal</p>

      <img
        src={LoginImage}
        alt="Login Illustration"
        className="w-full h-auto px-4 slow-bounce "
      />
    </div>
  );
}
