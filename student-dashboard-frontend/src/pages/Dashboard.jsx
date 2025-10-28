import React, { useEffect, useState } from "react";
import { PiGraduationCap } from "react-icons/pi";
import { Calendar } from "../components/ui/calendar";
import StudyResource from "@/components/util/StudyResource";
import { FaClipboard } from "react-icons/fa";
import { Timer } from "lucide-react";
import BoxCard from "@/components/BoxCard";
import PerformanceBox from "@/components/PerformanceBox";
// import Assignment from "./Assignment";

const Dashboard = () => {
  const indicators = [
    { type: "performance", grade: 11 },
    { type: "assignment", grade: 16 },
    { type: "assignment", grade: 10 },
    { type: "performance", grade: 20 },
  ];

  const boxes = [
    {
      title: "subject enrolled",
      value: "12",
      sub: "enrolled",
      icon: <PiGraduationCap className="text-xl sm:text-2xl text-[#8c55d3]" />,
    },
    {
      title: "Assignment",
      value: "2",
      sub: "enrolled",
      icon: <FaClipboard className="text-xl sm:text-2xl text-[#8c55d3]" />,
    },
    {
      title: "Assignment",
      value: "English",
      sub: "10:00AM",
      icon: <FaClipboard className="text-xl sm:text-2xl text-[#8c55d3]" />,
    },
  ];

  const assignments = [
    { subject: "Mathematics", dueDate: "Mon Sep 21 2025", status: "pending" },
    {
      subject: "English Language",
      dueDate: "Wed Sep 24 2025",
      status: "completed",
    },
    {
      subject: "Biology",
      dueDate: "Mon Sep 21 2025",
      status: "pending",
      icon: (
        <FaClipboard className="text-xl sm:text-2xl bg-gradient-to-r from-[#8c55d3] to-black bg-clip-text" />
      ),
    },
  ];

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const handlePercentage = (item) => Math.floor((item.grade / 20) * 100);

  const [calendarDate, setCalendarDate] = useState(new Date());
  const [display, setDisplay] = useState("");

  useEffect(() => {
    const confirmDate = () => {
      const date = new Date();
      const today = new Date(
        date.getFullYear(),
        date.getMonth(),
        date.getDate()
      );

      if (calendarDate.getTime() === today.getTime()) {
        setDisplay("today");
      } else if (calendarDate.getTime() > today.getTime()) {
        setDisplay("past deadline");
      } else if (calendarDate.getTime() < today.getTime()) {
        setDisplay("upcoming");
      }
    };
    confirmDate();
  }, [calendarDate]);

  return (
    <div className="min-h-screen p-5">
      <div className="flex flex-col xl:flex-row w-full gap-6">
        <div className="hidden lg:block w-90 border rounded-xl"></div>

        <div className="flex-1 flex flex-col">
          <div>
            <p className="capitalize font-bold text-xl md:text-2xl lg:text-3xl bg-gradient-to-r from-[#451f78] to-black bg-clip-text text-transparent">
              welcome back, wisdom!
            </p>
            <p className="bg-gradient-to-r from-[#451f78] to-black bg-clip-text text-transparent mb-5 text-sm md:text-base">
              Monday, July 28
            </p>
          </div>

          {/* Main grid: Stats + Performance + Calendar */}
          <div className="grid grid-cols-1 lg:grid-cols-3 md:max-w-[95%]">
            {/* Left Section (Stats + Performance) */}
            <div className="lg:col-span-2 flex flex-col">
              {/* Stats cards */}
              <div className="flex gap-6 flex-wrap -3 mb-6 ">
                {boxes.map((box, index) => (
                  <BoxCard box={box} key={index} />
                ))}
              </div>

              {/* /////////////////////////////////////////////////////// */}
              {/* Performance indicators */}
              <div>
                <p className="text-lg md:text-xl lg:text-2xl capitalize mb-3 bg-gradient-to-r from-[#35185c] to-black bg-clip-text text-transparent font-bold">
                  performance indicator
                </p>
                <div className="w-full">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:max-w-[620px] ">
                    {indicators.map((indicator, index) => (
                      <PerformanceBox
                        indicator={indicator}
                        handlePercentage={handlePercentage}
                        key={index}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* ///////////////////////////////////////////////////////////////// */}

            {/* Right Section (Calendar + Assignments) */}
            <div className="flex flex-col items-center  ">
              <Calendar
                mode="single"
                selected={calendarDate}
                onSelect={setCalendarDate}
                classNames={{
                  day_selected:
                    " bg-gradient-to-r from-[#8c55d3] to-black text-white hover:from-pink-600 hover:to-purple-600 focus:from-pink-600 focus:to-purple-600",
                  day_today: "border border-pink-400 font-bold ",
                }}
              />

              {/* Assignments list */}
              <div className="mt-5 w-[290px] max-w-sm rounded-lg shadow-[0_0_15px_rgba(0,0,0,0.2)] shadow-amber-200 p-6">
                <p className="text-lg font-medium mb-3">Assignments</p>
                {assignments.map((assignment, index) => (
                  <div className="flex justify-between items-center mb-3">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-3 h-3 rounded-full ${
                          assignment.status === "completed"
                            ? "bg-lime-400"
                            : "bg-red-500"
                        }`}
                      ></div>
                      <div>
                        <p className="text-sm">{assignment.subject}</p>
                        <div className="flex gap-2 items-center">
                          <Timer className="w-3 h-3 text-purple-500" />
                          <p className="text-xs">
                            {formatDate(assignment.dueDate)}
                          </p>
                        </div>
                      </div>
                    </div>
                    <button
                      className={`w-18 h-6 text-[10px] rounded-3xl ${
                        calendarDate.getTime() <
                          new Date(assignment.dueDate).getTime() &&
                        assignment.status === "pending"
                          ? "bg-[#FFDD55] text-black"
                          : calendarDate.getTime() <
                              new Date(assignment.dueDate).getTime() &&
                            assignment.status === "completed"
                          ? "bg-lime-400 text-white"
                          : calendarDate.getTime() >=
                              new Date(assignment.dueDate).getTime() &&
                            assignment.status === "completed"
                          ? "bg-lime-400 text-white"
                          : "bg-red-500 text-white"
                      }`}
                    >
                      {calendarDate.getTime() >=
                        new Date(assignment.dueDate).getTime() &&
                      assignment.status !== "completed"
                        ? "due"
                        : assignment.status}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Study Resources */}
          <div className="w-full">
            <p className="text-lg md:text-xl lg:text-2xl font-medium capitalize bg-gradient-to-r from-[#451f78] to-black bg-clip-text text-transparent">
              study resources
            </p>
            <div className="w-full mt-3">
              <StudyResource
                youtubeId="jZuSSWXhQbc"
                grade="9"
                subject="mathematics"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
