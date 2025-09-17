import React from "react";

const TopPart = ({ pendingCount, completedCount }) => {
  return (
    <section className="bg-(--color-purple) lg:pt-[9.412px] pt-1.5 lg:pb-[18.8px] pb-2.5 lg:px-[18.8px] px-2.5 rounded-3xl text-white tracking-tight space-y-3 mb-5 md:flex md:items-center md:gap-3.5 lg:justify-between lg:max-w-[1072px] lg:mx-auto">
      <div className="flex flex-col justify-between px-2 text-left lg:flex-1">
        <h1 className="text-2xl md:text-[25px] lg:text-[23.529px] lg:font-normal lg:leading-[28.235px] font-black md:tracking-tighter md:mb-2">
          Finish Up Your Assignment
        </h1>
        <p className="text-[14px] md:text-[19px] lg:text-[15.059px] leading-[18.071px]">
          Stay focused you're doing great
        </p>
      </div>

      <div className="flex flex-col justify-between px-1 text-left ">
        <span className="font-bold pr-0.5 lg:text-[15.059px] lead-[120%] lg:font-normal lg:lowercase">
          <span className="font-extrabold ml-1">{pendingCount}</span> Pending
          Assignment |{" "}
          <span className="font-extrabold ml-1">{completedCount}</span>{" "}
          Completed Assignment
        </span>
      </div>
    </section>
  );
};

export default TopPart;
