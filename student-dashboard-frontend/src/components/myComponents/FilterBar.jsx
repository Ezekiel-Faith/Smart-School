// FilterBar.jsx
import React from "react";

const FilterBar = ({ filter, setFilter }) => {
  const tabs = [
    { key: "all", label: "All Assignments" },
    { key: "pending", label: "Pending" },
    { key: "completed", label: "Completed" },
  ];

  return (
    <div className="text-center flex lg:gap-4 gap-2.5 lg:px-[111px] md:px-[90px] lg:py-[14px] md:py-[12px] rounded-[11.3px] mb-6 w-full justify-between items-center lg:max-w-[1072px] bg-white text-(--color-darkgray) text-[14px] md:text-[18px] lg:text-[20px]">
      {tabs.map((tab) => (
        <button
          key={tab.key}
          onClick={() => setFilter(tab.key)} // ✅ use consistent keys
          className={`px-4 py-2 rounded-lg ${
            filter === tab.key
              ? "underline underline-offset-8 decoration-4 decoration-(--color-purple)"
              : ""
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default FilterBar;
