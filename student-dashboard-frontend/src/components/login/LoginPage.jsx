// src/components/LoginPage.jsx
import React from "react";
import BackgroundImage from "../../Asset/LoginBackGroundImage.png";
import RightDiv from "./rightDiv";
import LeftDiv from "./leftDiv";

export default function LoginPage() {
  return (
    <div className="relative flex items-center justify-center min-h-screen">
      <img
        src={BackgroundImage}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Updated container */}
      <div className="relative bg-white/[0.87] shadow-lg 
       max-w-[300px] md:max-w-[700px] flex overflow-hidden  backdrop-blur-sm ">
        {/* LeftDiv always visible */}
        <LeftDiv />

        {/* RightDiv hidden on small screens, visible on md+ */}
        <div className="hidden  lg:flex flex-1">
          <RightDiv />
        </div>
      </div>
    </div>
  );
}
