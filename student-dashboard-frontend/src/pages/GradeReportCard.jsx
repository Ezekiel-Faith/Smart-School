import React, { useState } from "react";

const GradeReportCard = () => {
  // Initial state with only subjects listed
  const initialSubjects = [
    {
      id: 1,
      subject: "Mathematics",
      teacher: "",
      exam: "",
      ca: "",
      total: "",
      grade: "",
    },
    {
      id: 2,
      subject: "English Language",
      teacher: "",
      exam: "",
      ca: "",
      total: "",
      grade: "",
    },
    {
      id: 3,
      subject: "Physics",
      teacher: "",
      exam: "",
      ca: "",
      total: "",
      grade: "",
    },
    {
      id: 4,
      subject: "Chemistry",
      teacher: "",
      exam: "",
      ca: "",
      total: "",
      grade: "",
    },
    {
      id: 5,
      subject: "Biology",
      teacher: "",
      exam: "",
      ca: "",
      total: "",
      grade: "",
    },
    {
      id: 6,
      subject: "History",
      teacher: "",
      exam: "",
      ca: "",
      total: "",
      grade: "",
    },
    {
      id: 7,
      subject: "Geography",
      teacher: "",
      exam: "",
      ca: "",
      total: "",
      grade: "",
    },
    {
      id: 8,
      subject: "Computer Science",
      teacher: "",
      exam: "",
      ca: "",
      total: "",
      grade: "",
    },
  ];

  const [subjects, setSubjects] = useState(initialSubjects);
  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({
    teacher: "",
    exam: "",
    ca: "",
  });

  // Calculate grade based on total score
  const calculateGrade = (total) => {
    if (total >= 90) return "A+";
    if (total >= 80) return "A";
    if (total >= 70) return "B";
    if (total >= 60) return "C";
    if (total >= 50) return "D";
    return "F";
  };

  // Handle edit button click
  const handleEditClick = (subject) => {
    setEditingId(subject.id);
    setEditForm({
      teacher: subject.teacher,
      exam: subject.exam,
      ca: subject.ca,
    });
  };

  // Handle save button click
  const handleSaveClick = (id) => {
    const examScore = parseFloat(editForm.exam) || 0;
    const caScore = parseFloat(editForm.ca) || 0;
    const totalScore = examScore + caScore;
    const grade = calculateGrade(totalScore);

    setSubjects(
      subjects.map((subject) => {
        if (subject.id === id) {
          return {
            ...subject,
            teacher: editForm.teacher,
            exam: editForm.exam,
            ca: editForm.ca,
            total: totalScore,
            grade: grade,
          };
        }
        return subject;
      })
    );

    setEditingId(null);
  };

  // Handle cancel edit
  const handleCancelClick = () => {
    setEditingId(null);
  };

  // Handle input change in edit form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditForm({
      ...editForm,
      [name]: value,
    });
  };

  // Reset all fields
  const handleResetAll = () => {
    setSubjects(initialSubjects);
    setEditingId(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-xl p-6 mb-8 border border-blue-100">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">
                Student Report Card
              </h1>
              <p className="text-gray-600">Term 3 - Academic Year 2023/2024</p>
              <div className="flex items-center mt-2">
                <div className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                  Student: John Doe
                </div>
                <div className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full ml-3">
                  Class: 10th Grade
                </div>
              </div>
            </div>
            <button
              onClick={handleResetAll}
              className="mt-4 md:mt-0 px-6 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white font-medium rounded-lg shadow-md hover:from-red-600 hover:to-red-700 transition-all duration-300 transform hover:-translate-y-1"
            >
              Reset All Grades
            </button>
          </div>
        </div>

        {/* Instructions */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6">
          <div className="flex items-center">
            <div className="bg-blue-100 p-2 rounded-lg mr-3">
              <i className="fas fa-info-circle text-blue-600"></i>
            </div>
            <p className="text-blue-800">
              <span className="font-semibold">Instructions:</span> Click the
              "Edit" button next to any subject to enter teacher name, exam
              score, and CA (Continuous Assessment) score. The total and grade
              will be calculated automatically.
            </p>
          </div>
        </div>

        {/* Grade Table */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gradient-to-r from-blue-600 to-blue-700">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-4 text-left text-xs font-semibold text-white uppercase tracking-wider"
                  >
                    Subject
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-4 text-left text-xs font-semibold text-white uppercase tracking-wider"
                  >
                    Teacher
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-4 text-left text-xs font-semibold text-white uppercase tracking-wider"
                  >
                    Exam Score
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-4 text-left text-xs font-semibold text-white uppercase tracking-wider"
                  >
                    CA Score
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-4 text-left text-xs font-semibold text-white uppercase tracking-wider"
                  >
                    Total
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-4 text-left text-xs font-semibold text-white uppercase tracking-wider"
                  >
                    Grade
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-4 text-left text-xs font-semibold text-white uppercase tracking-wider"
                  >
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {subjects.map((subject) => (
                  <tr
                    key={subject.id}
                    className="hover:bg-gray-50 transition-colors duration-200"
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center">
                          <span className="text-blue-700 font-bold">
                            {subject.subject.charAt(0)}
                          </span>
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            {subject.subject}
                          </div>
                        </div>
                      </div>
                    </td>

                    {/* Teacher Column */}
                    <td className="px-6 py-4 whitespace-nowrap">
                      {editingId === subject.id ? (
                        <input
                          type="text"
                          name="teacher"
                          value={editForm.teacher}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="Teacher name"
                        />
                      ) : (
                        <div className="text-sm text-gray-900">
                          {subject.teacher || (
                            <span className="text-gray-400 italic">
                              Not assigned
                            </span>
                          )}
                        </div>
                      )}
                    </td>

                    {/* Exam Score Column */}
                    <td className="px-6 py-4 whitespace-nowrap">
                      {editingId === subject.id ? (
                        <input
                          type="number"
                          name="exam"
                          min="0"
                          max="100"
                          value={editForm.exam}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="0-100"
                        />
                      ) : (
                        <div className="text-sm text-gray-900">
                          {subject.exam || (
                            <span className="text-gray-400 italic">
                              No score
                            </span>
                          )}
                        </div>
                      )}
                    </td>

                    {/* CA Score Column */}
                    <td className="px-6 py-4 whitespace-nowrap">
                      {editingId === subject.id ? (
                        <input
                          type="number"
                          name="ca"
                          min="0"
                          max="100"
                          value={editForm.ca}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="0-100"
                        />
                      ) : (
                        <div className="text-sm text-gray-900">
                          {subject.ca || (
                            <span className="text-gray-400 italic">
                              No score
                            </span>
                          )}
                        </div>
                      )}
                    </td>

                    {/* Total Column */}
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div
                        className={`text-sm font-medium ${
                          subject.total >= 70
                            ? "text-green-600"
                            : subject.total >= 50
                            ? "text-yellow-600"
                            : subject.total > 0
                            ? "text-red-600"
                            : "text-gray-400"
                        }`}
                      >
                        {subject.total || (
                          <span className="italic">Not calculated</span>
                        )}
                        {subject.total && <span>/100</span>}
                      </div>
                    </td>

                    {/* Grade Column */}
                    <td className="px-6 py-4 whitespace-nowrap">
                      {subject.grade ? (
                        <div
                          className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                            subject.grade === "A+"
                              ? "bg-green-100 text-green-800"
                              : subject.grade === "A"
                              ? "bg-green-50 text-green-700"
                              : subject.grade === "B"
                              ? "bg-blue-100 text-blue-800"
                              : subject.grade === "C"
                              ? "bg-yellow-100 text-yellow-800"
                              : subject.grade === "D"
                              ? "bg-orange-100 text-orange-800"
                              : "bg-red-100 text-red-800"
                          }`}
                        >
                          {subject.grade}
                        </div>
                      ) : (
                        <span className="text-gray-400 italic">No grade</span>
                      )}
                    </td>

                    {/* Actions Column */}
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      {editingId === subject.id ? (
                        <div className="flex space-x-2">
                          <button
                            onClick={() => handleSaveClick(subject.id)}
                            className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors duration-200"
                          >
                            Save
                          </button>
                          <button
                            onClick={handleCancelClick}
                            className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors duration-200"
                          >
                            Cancel
                          </button>
                        </div>
                      ) : (
                        <button
                          onClick={() => handleEditClick(subject)}
                          className="px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-md hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-sm hover:shadow"
                        >
                          Edit
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Legend */}
        <div className="mt-8 bg-white rounded-xl shadow-md p-6 border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Grade Legend
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-3">
            <div className="flex items-center">
              <div className="w-4 h-4 bg-green-100 border border-green-300 rounded mr-2"></div>
              <span className="text-sm">A+ (90-100)</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 bg-green-50 border border-green-200 rounded mr-2"></div>
              <span className="text-sm">A (80-89)</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 bg-blue-100 border border-blue-300 rounded mr-2"></div>
              <span className="text-sm">B (70-79)</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 bg-yellow-100 border border-yellow-300 rounded mr-2"></div>
              <span className="text-sm">C (60-69)</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 bg-orange-100 border border-orange-300 rounded mr-2"></div>
              <span className="text-sm">D (50-59)</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 bg-red-100 border border-red-300 rounded mr-2"></div>
              <span className="text-sm">F (0-49)</span>
            </div>
          </div>
        </div>

        {/* Footer note */}
        <div className="mt-8 text-center text-gray-500 text-sm">
          <p>
            Report card generated on {new Date().toLocaleDateString()}. All
            scores are out of 100.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GradeReportCard;
