import React, { useState } from "react";
import Dropdown from "@/components/DropDown";
import GradeTable from "@/components/GradeTable";
import { sessionData, termData, gradeData } from "@/lib/data.js";
import Bottom from "@/components/Bottom";

const Grade = () => {
  const [selectedSession, setSelectedSession] = useState(null);
  const [selectedTerm, setSelectedTerm] = useState(null);
  const [showResults, setShowResults] = useState(false);

  // Get grades for selected session and term
  const currentGrades =
    showResults && selectedSession && selectedTerm
      ? gradeData[selectedSession]?.[selectedTerm] || []
      : [];

  const handleCheckResults = () => {
    if (selectedSession && selectedTerm) {
      setShowResults(true);
    }
  };

  return (
    <section className="max-w-[1000px] mx-auto w-full px-2 sm:px-0">
      <div className="space-y-4">
        <h1 className="px-5 text-2xl font-medium">Check Grades</h1>

        {/* ===================== */}
        {/* DROPDOWNS + BUTTON */}
        {/* ===================== */}
        <section className="p-5 flex flex-col sm:flex-row items-stretch sm:items-end gap-3 sm:gap-4 max-w-full overflow-visible">
          {/* SESSION DROPDOWN */}
          <div className="w-full sm:w-48 flex-shrink-0">
            <p className="text-xs font-bold text-purple-900 mb-1 ml-1 sm:block hidden">
              Session
            </p>
            <Dropdown
              label="Select Session"
              options={Object.keys(sessionData)}
              value={selectedSession}
              onSelect={(value) => {
                setSelectedSession(value);
                setShowResults(false);
              }}
            />
          </div>

          {/* TERM DROPDOWN */}
          <div className="w-full sm:w-48 flex-shrink-0">
            <p className="text-xs font-bold text-purple-900 mb-1 ml-1 sm:block hidden">
              Term
            </p>
            <Dropdown
              label="Select Term"
              options={Object.keys(termData)}
              value={selectedTerm}
              onSelect={(value) => {
                setSelectedTerm(value);
                setShowResults(false);
              }}
            />
          </div>

          {/* CHECK RESULTS BUTTON */}
          <button
            className="w-full sm:w-auto h-[44px] bg-purple-700 text-white px-6 rounded-xl whitespace-nowrap hover:bg-purple-800 transition-colors disabled:bg-gray-400 font-bold"
            onClick={handleCheckResults}
            disabled={!selectedSession || !selectedTerm}
          >
            Check Results
          </button>
        </section>

        {/* ===================== */}
        {/* TERM INFO */}
        {/* ===================== */}
        {selectedTerm && showResults && (
          <div className="px-5">
            <h2 className="text-lg font-semibold text-gray-800">
              {termData[selectedTerm]} – {selectedSession}
            </h2>
          </div>
        )}

        {/* ===================== */}
        {/* GRADE TABLE */}
        {/* ===================== */}
        <div className="px-5">
          <GradeTable grades={currentGrades} />
        </div>
      </div>

      <Bottom />
    </section>
  );
};

export default Grade;
