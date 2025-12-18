import React from "react";

const GradeTable = ({ grades = [] }) => {
  const hasGrades = grades.length > 0;

  return (
    <div className="mt-4 bg-purple-100 py-4">
      {/* ===================== */}
      {/* MOBILE VIEW – CARDS */}
      {/* ===================== */}
      <div className="md:hidden space-y-4 px-4">
        {(hasGrades
          ? grades
          : [
              { subject: "Mathematics" },
              { subject: "English Language" },
              { subject: "Physics" },
              { subject: "Chemistry" },
              { subject: "Biology" },
            ]
        ).map((grade, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-sm border border-purple-200 p-4"
          >
            <h3 className="text-lg font-semibold text-purple-700 mb-3">
              {grade.subject}
            </h3>

            <div className="grid grid-cols-2 gap-y-2 text-sm">
              <span className="text-gray-500">Teacher</span>
              <span>{grade.teacher ?? "-"}</span>

              <span className="text-gray-500">Exam</span>
              <span>{grade.exam ?? "-"}</span>

              <span className="text-gray-500">CA</span>
              <span>{grade.ca ?? "-"}</span>

              <span className="text-gray-500">Test</span>
              <span>{grade.test ?? "-"}</span>

              <span className="font-semibold text-gray-600">Total</span>
              <span className="font-semibold">{grade.total ?? "-"}</span>

              <span className="font-semibold text-gray-600">Grade</span>
              <span className="font-semibold">{grade.grade ?? "-"}</span>
            </div>
          </div>
        ))}
      </div>

      {/* ===================== */}
      {/* DESKTOP VIEW – TABLE */}
      {/* ===================== */}
      <div className="hidden md:block overflow-x-auto">
        <table className="min-w-[90%] m-auto py-5">
          <thead className="bg-gradient-to-r from-purple-600 to-purple-700">
            <tr>
              {[
                "Subject",
                "Teacher",
                "Exam Score",
                "CA Score",
                "Test Score",
                "Total",
                "Grade",
              ].map((head) => (
                <th
                  key={head}
                  className="px-4 py-2 text-left text-xs font-semibold text-white uppercase tracking-wider"
                >
                  {head}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {(hasGrades
              ? grades
              : [
                  { subject: "Mathematics" },
                  { subject: "English Language" },
                  { subject: "Physics" },
                  { subject: "Chemistry" },
                  { subject: "Biology" },
                ]
            ).map((grade, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-4 py-2 text-sm font-medium text-gray-900">
                  {grade.subject}
                </td>
                <td className="px-4 py-2 text-sm text-gray-700">
                  {grade.teacher ?? "-"}
                </td>
                <td className="px-4 py-2 text-sm text-gray-700">
                  {grade.exam ?? "-"}
                </td>
                <td className="px-4 py-2 text-sm text-gray-700">
                  {grade.ca ?? "-"}
                </td>
                <td className="px-4 py-2 text-sm text-gray-700">
                  {grade.test ?? "-"}
                </td>
                <td className="px-4 py-2 text-sm font-semibold text-gray-900">
                  {grade.total ?? "-"}
                </td>
                <td className="px-4 py-2 text-sm font-semibold text-gray-900">
                  {grade.grade ?? "-"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GradeTable;
