import React, { useEffect, useState } from "react";
import { PiGraduationCap } from "react-icons/pi";
import { Calendar } from "../components/ui/calendar";
import { Timer } from "lucide-react";
import StudyResource from "@/components/util/StudyResource";

const Dashboard = () => {
  const indicators = [
    { type: "performance", grade: 11 },
    { type: "assignment", grade: 16 },
    { type: "assignment", grade: 10 },
    { type: "performance", grade: 20 },
  ];

  const assignments = [
    { subject: "Mathematics", dueDate: "Mon Sep 21 2025", status: "pending" },
    { subject: "English Language", dueDate: "Wed Sep 24 2025", status: "completed" },
    { subject: "Biology", dueDate: "Mon Sep 21 2025", status: "pending" },
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
      const today = new Date(date.getFullYear(), date.getMonth(), date.getDate());

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
    <div className="min-h-screen p-4 md:p-6 lg:p-10">
      <div className="flex flex-col xl:flex-row w-full gap-6">
       
        <div className="hidden lg:block w-64 border rounded-xl"></div>

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
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Section (Stats + Performance) */}
            <div className="lg:col-span-2 flex flex-col">
              {/* Stats cards */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
                {[
                  { title: "subject enrolled", value: "12", sub: "enrolled" },
                  { title: "Assignment", value: "2", sub: "enrolled" },
                  { title: "Assignment", value: "English", sub: "10:00AM" },
                ].map((box, index) => (
                  <div
                    key={index}
                    className="h-36 sm:h-40 rounded-lg bg-[#eaeaea] flex justify-center items-center flex-col p-3"
                  >
                    <p className="capitalize bg-gradient-to-r from-[#451f78] to-black bg-clip-text text-transparent text-sm sm:text-base">
                      {box.title}
                    </p>
                    <p className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-[#451f78] to-black bg-clip-text text-transparent">
                      {box.value}
                    </p>
                    <p className="bg-gradient-to-r from-[#451f78] to-black bg-clip-text text-transparent text-xs sm:text-sm">
                      {box.sub}
                    </p>
                    <PiGraduationCap className="text-xl sm:text-2xl bg-gradient-to-r from-[#8c55d3] to-black bg-clip-text" />
                  </div>
                ))}
              </div>

              {/* Performance indicators */}
              <div>
                <p className="text-lg md:text-xl lg:text-2xl capitalize mb-3 bg-gradient-to-r from-[#35185c] to-black bg-clip-text text-transparent font-bold">
                  performance indicator
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {indicators.map((indicator, index) => (
                    <div
                      key={index}
                      className="border-2 border-[#FFDD55] rounded-lg p-3"
                    >
                      <div className="w-[170px] h-8 flex justify-center items-center bg-[#F7E0FF] px-2 rounded-lg mb-2">
                        <p className="uppercase text-xs">
                          {"</>"} {indicator.type}
                        </p>
                      </div>
                      <p className="text-lg sm:text-xl font-bold mb-2 text-[#9B59F0]">
                        {indicator.grade}/20
                      </p>
                      <div className="w-full h-6 rounded-[20px] bg-[#d7d7d7] relative">
                        <div
                          className={`h-full ${
                            indicator.type === "performance"
                              ? "bg-[#FFDD55]"
                              : "bg-[#009519]"
                          } rounded-[20px]`}
                          style={{ width: `${handlePercentage(indicator)}%` }}
                        ></div>
                        <p className="text-xs absolute right-3 top-1">
                          {handlePercentage(indicator)}%
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Section (Calendar + Assignments) */}
            <div className="flex flex-col items-center">
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
              <div className="mt-5 w-[290px] max-w-sm rounded-lg shadow-[0_0_15px_rgba(0,0,0,0.2)] shadow-amber-200 px-4 py-3">
                <p className="text-lg font-medium mb-3">Assignments</p>
                {assignments.map((assignment, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center mb-3"
                  >
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
                      className={`w-20 h-6 text-xs rounded-3xl ${
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
          <div className="w-full mt-6">
            <p className="text-lg md:text-xl lg:text-2xl font-medium capitalize bg-gradient-to-r from-[#451f78] to-black bg-clip-text text-transparent">
              study resources
            </p>
            <div className="w-full mt-3">
              <StudyResource
                youtubeId="jZuSSWXhQbc"
                grade= '9'
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
