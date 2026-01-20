import React, { useEffect, useState } from "react";
import { PiGraduationCap } from "react-icons/pi";
import { Calendar } from "../components/ui/calendar";
import StudyResource from "@/components/util/StudyResource";
import { Timer } from "lucide-react";
import BoxCard from "@/components/BoxCard";
import PerformanceBox from "@/components/PerformanceBox";
import { GiOpenBook } from "react-icons/gi";

const Dashboard = () => {
  const indicators = [
    { type: "performance", grade: 11 },
    { type: "assignment", grade: 16 },
    { type: "assignment", grade: 10 },
    { type: "performance", grade: 20 },
    { type: "assignment", grade: 16 },
    { type: "assignment", grade: 16 },
    { type: "assignment", grade: 16 },
    { type: "assignment", grade: 16 },
  ];

  const Videos = [
    { video: "JucSVDuV0mg", grade: "9", subject: "mathematics" },
    { video: "-6PYKm_UCNo", grade: "9", subject: "English" },
    { video: "JucSVDuV0mg", grade: "9", subject: "mathematics" },
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
      icon: <GiOpenBook className="text-xl sm:text-2xl text-[#8c55d3]" />,
    },
    {
      title: "Assignment",
      value: "English",
      sub: "10:00AM",
      icon: <Timer className="text-xl sm:text-2xl text-[#8c55d3]" />,
    },
  ];

  const assignments = [
    { subject: "Mathematics", dueDate: "Mon Sep 21 2025", status: "pending" },
    {
      subject: "English Language",
      dueDate: "Wed Sep 24 2025",
      status: "completed",
    },
    { subject: "Biology", dueDate: "Mon Sep 21 2025", status: "pending" },
  ];

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return `${String(date.getDate()).padStart(2, "0")}/${String(date.getMonth() + 1).padStart(2, "0")}/${date.getFullYear()}`;
  };

  const handlePercentage = (item) => Math.floor((item.grade / 20) * 100);

  const [calendarDate, setCalendarDate] = useState(new Date());
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="min-h-screen p-5 flex gap-6">
      <div className="hidden lg:block w-[250px] border rounded-xl"></div>
      {/* {Container} */}
      <div className="flex-1 flex flex-col w-full">
        {/* Header Text */}
        <div>
          <p className="capitalize font-bold text-xl md:text-2xl lg:text-3xl bg-gradient-to-r from-[#451f78] to-black bg-clip-text text-transparent">
            welcome back, wisdom!
          </p>
          <p className="bg-gradient-to-r from-[#451f78] to-black bg-clip-text text-transparent mb-5 text-sm md:text-base">
            Monday, July 28
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 ">
          <div className="lg:col-span-2 flex flex-col w-full ">
            <div className="flex flex-wrap gap-6 mb-6">
              {boxes.map((box, index) => (
                <BoxCard box={box} key={index} />
              ))}
            </div>

            {/* performance indicator */}
            <div className="w-[90%]">
              <p className="text-lg md:text-xl lg:text-2xl capitalize mb-3 bg-gradient-to-r from-[#35185c] to-black bg-clip-text text-transparent font-bold">
                performance indicator
              </p>
              <div
                className="
    grid
    grid-cols-1
    sm:grid-cols-2
    gap-x-6
    gap-y-6
    place-items-center
    sm:place-items-stretch
  "
              >
                {indicators
                  .slice(0, showMore ? indicators.length : 4)
                  .map((indicator, index) => (
                    <PerformanceBox
                      key={index}
                      indicator={indicator}
                      handlePercentage={handlePercentage}
                    />
                  ))}
              </div>

              <button
                className="underline mt-3"
                onClick={() => setShowMore(!showMore)}
              >
                {showMore ? "Show less" : "Show more"}
              </button>
            </div>

            <div className="w-full mt-6">
              <p className="text-lg md:text-xl lg:text-2xl font-medium capitalize bg-gradient-to-r from-[#451f78] to-black bg-clip-text text-transparent">
                study resources
              </p>
              <div className="w-full flex gap-3 mt-3 overflow-x-scroll lg:overflow-x-hidden">
                {Videos.map((item, index) => (
                  <StudyResource
                    video={item.video}
                    grade={item.grade}
                    subject={item.subject}
                    key={index}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row  md:items-start lg:flex-col gap-6 p-3">
            <Calendar
              mode="single"
              selected={calendarDate}
              onSelect={setCalendarDate}
              classNames={{
                day_selected:
                  "bg-gradient-to-r from-[#8c55d3] to-black text-white",
                day_today: "border border-pink-400 font-bold",
              }}
            />

            <div className="w-full h-[260px] lg:w-[300px] rounded-lg shadow-[0_0_15px_rgba(0,0,0,0.2)] px-6 py-4">
              <p className="text-lg font-medium mb-3">Assignments</p>
              {assignments.map((assignment, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center mb-4"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-3 h-3 rounded-full ${assignment.status === "completed" ? "bg-lime-400" : "bg-red-500"}`}
                    ></div>
                    <div>
                      <p className="text-sm">{assignment.subject}</p>
                      <div className="flex items-center gap-2">
                        <Timer className="w-3 h-3 text-purple-500" />
                        <p className="text-xs">
                          {formatDate(assignment.dueDate)}
                        </p>
                      </div>
                    </div>
                  </div>
                  <button
                    className={`w-18 h-6 text-[10px] rounded-3xl ${assignment.status === "completed" ? "bg-lime-400 text-white" : "bg-red-500 text-white"}`}
                  >
                    {assignment.status}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
