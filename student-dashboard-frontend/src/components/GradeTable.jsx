import React from "react";

const GradeTable = ({ grades = [] }) => {
  // Simple grade mapping without colors
  const getSimpleGrade = (total) => {
    if (total >= 90) return "A";
    if (total >= 80) return "B";
    if (total >= 70) return "C";
    if (total >= 60) return "D";
    if (total >= 50) return "E";
    return "F";
  };

  // If no grades passed, show empty table with hyphens
  if (grades.length === 0) {
    return (
      <div className="overflow-x-auto w-auto mt-4 bg-purple-100 py-4">
        <table className="min-w-[90%] m-auto py-5">
          <thead className="bg-gradient-to-r from-purple-600 to-purple-700">
            <tr>
              <th className="px-4 py-2 text-left text-xs font-semibold text-white uppercase tracking-wider">
                Subject
              </th>
              <th className="px-4 py-2 text-left text-xs font-semibold text-white uppercase tracking-wider">
                Teacher
              </th>
              <th className="px-4 py-2 text-left text-xs font-semibold text-white uppercase tracking-wider">
                Exam Score
              </th>
              <th className="px-4 py-2 text-left text-xs font-semibold text-white uppercase tracking-wider">
                CA Score
              </th>
              <th className="px-4 py-2 text-left text-xs font-semibold text-white uppercase tracking-wider">
                Test Score
              </th>
              <th className="px-4 py-2 text-left text-xs font-semibold text-white uppercase tracking-wider">
                Total
              </th>
              <th className="px-4 py-2 text-left text-xs font-semibold text-white uppercase tracking-wider">
                Grade
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-gray-50">
              <td className="px-4 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
                Mathematics
              </td>
              <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">
                -
              </td>
              <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">
                -
              </td>
              <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">
                -
              </td>
              <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">
                -
              </td>
              <td className="px-4 py-2 whitespace-nowrap text-sm font-semibold text-gray-900">
                -
              </td>
              <td className="px-4 py-2 whitespace-nowrap text-sm font-semibold text-gray-900">
                -
              </td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="px-4 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
                English Language
              </td>
              <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">
                -
              </td>
              <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">
                -
              </td>
              <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">
                -
              </td>
              <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">
                -
              </td>
              <td className="px-4 py-2 whitespace-nowrap text-sm font-semibold text-gray-900">
                -
              </td>
              <td className="px-4 py-2 whitespace-nowrap text-sm font-semibold text-gray-900">
                -
              </td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="px-4 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
                Physics
              </td>
              <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">
                -
              </td>
              <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">
                -
              </td>
              <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">
                -
              </td>
              <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">
                -
              </td>
              <td className="px-4 py-2 whitespace-nowrap text-sm font-semibold text-gray-900">
                -
              </td>
              <td className="px-4 py-2 whitespace-nowrap text-sm font-semibold text-gray-900">
                -
              </td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="px-4 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
                Chemistry
              </td>
              <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">
                -
              </td>
              <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">
                -
              </td>
              <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">
                -
              </td>
              <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">
                -
              </td>
              <td className="px-4 py-2 whitespace-nowrap text-sm font-semibold text-gray-900">
                -
              </td>
              <td className="px-4 py-2 whitespace-nowrap text-sm font-semibold text-gray-900">
                -
              </td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="px-4 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
                Biology
              </td>
              <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">
                -
              </td>
              <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">
                -
              </td>
              <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">
                -
              </td>
              <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">
                -
              </td>
              <td className="px-4 py-2 whitespace-nowrap text-sm font-semibold text-gray-900">
                -
              </td>
              <td className="px-4 py-2 whitespace-nowrap text-sm font-semibold text-gray-900">
                -
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto w-auto mt-4 bg-purple-100 py-4">
      <table className="min-w-[90%] m-auto py-5">
        <thead className="bg-gradient-to-r from-purple-600 to-purple-700">
          <tr>
            <th className="px-4 py-2 text-left text-xs font-semibold text-white uppercase tracking-wider">
              Subject
            </th>
            <th className="px-4 py-2 text-left text-xs font-semibold text-white uppercase tracking-wider">
              Teacher
            </th>
            <th className="px-4 py-2 text-left text-xs font-semibold text-white uppercase tracking-wider">
              Exam Score
            </th>
            <th className="px-4 py-2 text-left text-xs font-semibold text-white uppercase tracking-wider">
              CA Score
            </th>
            <th className="px-4 py-2 text-left text-xs font-semibold text-white uppercase tracking-wider">
              Test Score
            </th>
            <th className="px-4 py-2 text-left text-xs font-semibold text-white uppercase tracking-wider">
              Total
            </th>
            <th className="px-4 py-2 text-left text-xs font-semibold text-white uppercase tracking-wider">
              Grade
            </th>
          </tr>
        </thead>
        <tbody>
          {grades.map((grade, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="px-4 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
                {grade.subject}
              </td>
              <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">
                {grade.teacher}
              </td>
              <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">
                {grade.exam}
              </td>
              <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">
                {grade.ca}
              </td>
              <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">
                {grade.test}
              </td>
              <td className="px-4 py-2 whitespace-nowrap text-sm font-semibold text-gray-900">
                {grade.total}
              </td>
              <td className="px-4 py-2 whitespace-nowrap text-sm font-semibold text-gray-900">
                {grade.grade}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GradeTable;
