import React, { useState } from "react";
import Dropdown from "@/components/DropDown";
import GradeTable from "@/components/GradeTable";
import { sessionData, termData, gradeData } from "@/lib/data.js";

const Grade = () => {
  const [selectedSession, setSelectedSession] = useState(null);
  const [selectedTerm, setSelectedTerm] = useState(null);
  const [showResults, setShowResults] = useState(false);

  // get student class from the sessionData object
  const studentClass = selectedSession ? sessionData[selectedSession] : null;

  // get term result from termData object
  const termResult = selectedTerm ? termData[selectedTerm] : null;

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
    <section className="w-[1000px] m-auto">
      <div className="space-y-3.5 ">
        <h1 className="px-5 text-2xl font-medium">Check Grades</h1>
        <section className="p-5 flex gap-6 justify-between">
          {/* SESSION DROPDOWN  */}
          <Dropdown
            label="Select Session"
            options={Object.keys(sessionData)}
            onSelect={setSelectedSession}
          />

          {/* TERM DROPDOWN */}
          <Dropdown
            label="Select Term"
            options={Object.keys(termData)}
            onSelect={setSelectedTerm}
          />

          <button
            className="bg-purple-700 text-white px-5 py-2 rounded-xl hover:bg-purple-800 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
            onClick={handleCheckResults}
            disabled={!selectedSession || !selectedTerm}
          >
            Check Results
          </button>
        </section>

        {/* Display selected term info */}
        {selectedTerm && showResults && (
          <div className="px-5 mb-2">
            <h2 className="text-lg font-semibold text-gray-800">
              {termData[selectedTerm]} - {selectedSession}
            </h2>
          </div>
        )}

        {/* GRADE TABLE */}
        <div className="px-5">
          <GradeTable grades={currentGrades} />
        </div>
      </div>
    </section>
  );
};

export default Grade;
