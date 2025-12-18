// FilterBar.jsx
import React, { useState, useEffect, useRef } from "react";

const FilterBar = ({ filter, setFilter }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const tabs = [
    { key: "all", label: "All Assignments" },
    { key: "pending", label: "Pending" },
    { key: "completed", label: "Completed" },
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    const handleEsc = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEsc);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEsc);
    };
  }, []);

  return (
    <div className="w-full mb-6">
      {/* Desktop / Tablet View */}
      <div className="hidden  md:flex text-center lg:gap-4 gap-2.5 lg:px-[111px] md:px-[90px] lg:py-[14px] md:py-[12px] rounded-[11.3px] justify-between items-center lg:max-w-[1072px] bg-white text-(--color-darkgray) text-[14px] md:text-[18px] lg:text-[20px]">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setFilter(tab.key)}
            className={`px-4 py-2 rounded-lg cursor-pointer ${
              filter === tab.key
                ? "underline underline-offset-8 decoration-4 decoration-(--color-purple)"
                : ""
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Mobile View */}
      <div
        ref={dropdownRef}
        className="md:hidden text-center max-w-[400px] mx-auto relative"
      >
        {/* Dropdown Button */}
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="w-full px-4 py-2 bg-white border border-(--color-purple) rounded-[11.3px] text-(--color-darkgray) text-[14px] flex justify-between items-center cursor-pointer transition duration-300 ease-in-out"
        >
          <span
            className={`transition-colors ${
              filter === "all"
                ? "text-(--color-darkgray)"
                : "text-(--color-purple)"
            }`}
          >
            {tabs.find((tab) => tab.key === filter)?.label}
          </span>

          {/* Arrow Icon */}
          <svg
            className={`w-5 h-5 text-(--color-purple) transition-transform duration-300 ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>

        {/* Dropdown Options */}
        {isOpen && (
          <div className="absolute z-10 mt-2 w-full bg-white border border-(--color-purple) text-(--color-purple) rounded-[11.3px] shadow-lg animate-fadeIn">
            {tabs.map((tab) => (
              <div
                key={tab.key}
                onClick={() => {
                  setFilter(tab.key);
                  setIsOpen(false);
                }}
                className={`px-4 py-2 text-left cursor-pointer transition duration-200 hover:bg-(--color-purple) hover:text-white ${
                  filter === tab.key ? "bg-(--color-purple) text-white" : ""
                }`}
              >
                {tab.label}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FilterBar;
