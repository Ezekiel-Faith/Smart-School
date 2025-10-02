// src/components/Header.jsx
import React, { useState } from "react";
import { FiSearch, FiBell } from "react-icons/fi";
import bellImage from "../../Asset/bellImage.png";
import pictureImage from "../../Asset/pictureImage.png";

export default function Header1({ user }) {
  const [searchText, setSearchText] = useState("");

  const defaultUser = {
    name: "Abel Wisdom",
    image: pictureImage,
  };

  const activeUser = user || defaultUser;

  // handle search
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchText.trim() !== "") {
      console.log("Searching for:", searchText); // fake search
      setSearchText(""); // clear input
    }
  };

  return (
    <header className="flex items-center justify-between w-full px-4 py-2 min-h-[30px] 
    sm:space-x-1 md:space-x-3 lg:space-x-7">
      {/* Search Input */}
      <form
        onSubmit={handleSearch}
        className="flex flex-1 md:flex-grow justify-center max-w-full md:max-w-[400px] 
        lg:max-w-[700px] ml-0 md:ml-30 lg:ml-50"
      >
        <div className="relative w-full">
          <FiSearch
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer"
            size={20}
            onClick={handleSearch} // click icon to trigger search
          />
          <input
            type="text"
            placeholder="Search your course...."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="w-full pl-12 pr-6 py-4 rounded-[30px] border-2 border-purple-400/80 bg-white shadow-md 
            text-base placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-purple-200/50 
            focus:border-purple-400 transition duration-150 ease-in-out h-10 md:h-12 lg:h-10"
          />
        </div>
      </form>

      {/* Right Section */}
      <div className="flex items-center space-x-4 ml-2 md:ml-0 mr-0 md:mr-15">
        {/* Bell → hidden on mobile */}
        <button
          className="hidden md:flex p-3 h-12 w-12 lg:h-10 lg:w-10 items-center justify-center 
          rounded-full border-2 border-purple-400 
         bg-white shadow-md hover:bg-purple-50 transition duration-150 ease-in-out"
        >
          <img src={bellImage} className="h-6 w-6 lg:h-5 lg:w-5 text-purple-700" />
        </button>

        {/* Divider → hidden on mobile */}
        <div className="hidden md:block h-13 w-0.5 lg:h-11 bg-purple-400"></div>

        {/* Profile (image always visible) */}
        <div className="flex items-center space-x-2">
          <div className="w-12 h-12 md:w-14 md:h-14 rounded-full p-0.5 bg-purple-300 flex 
          items-center justify-center">
            <img
              src={activeUser.image}
              alt={activeUser.name}
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          {/* Username → hidden on mobile */}
          <span className="hidden md:inline text-purple-800 text-lg">
            {activeUser.name}
          </span>
        </div>
      </div>
    </header>
  );
}
