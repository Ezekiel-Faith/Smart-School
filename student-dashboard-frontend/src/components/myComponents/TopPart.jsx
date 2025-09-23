import React from "react";

const TopPart = ({ pendingCount, completedCount }) => {
  return (
    <section
      className="bg-(--color-purple) rounded-3xl text-white tracking-tight mb-5 
      px-3 py-3 sm:px-5 sm:py-4 
      md:flex md:items-center md:justify-between md:gap-4 lg:justify-between lg:max-w-[1072px] lg:mx-auto"
    >
      {/* Left side - Title & Subtitle */}
      <div className="flex flex-col justify-between text-left lg:flex-1 space-y-1 sm:space-y-2">
        <h1 className="text-xl sm:text-2xl md:text-[25px] lg:text-[23.529px] font-black lg:font-normal lg:leading-[28.235px] tracking-tight">
          Finish Up Your Assignment
        </h1>
        <p className="text-sm sm:text-base md:text-[19px] lg:text-[15.059px] leading-snug">
          Stay focused, you're doing great
        </p>
      </div>

      {/* Right side - Stats */}
      <div className="flex flex-col mt-3 md:mt-0 text-sm sm:text-base lg:text-[15.059px]">
        <span className="font-medium lg:font-normal">
          <span className="font-extrabold mr-1">{pendingCount}</span>
          Pending Assignment
        </span>
        <span className="font-medium lg:font-normal">
          <span className="font-extrabold mr-1">{completedCount}</span>
          Completed Assignment
        </span>
      </div>
    </section>
  );
};

export default TopPart;
