import React from "react";
import TopPart from "@/components/myComponents/TopPart";
import AssignmentPage from "@/components/myComponents/AssignmentPage";

const assignments = [
  { id: 1, title: "Math Homework", status: "pending" },
  { id: 2, title: "English Essay", status: "completed" },
  { id: 3, title: "Science Project", status: "pending" },
  { id: 4, title: "History Notes", status: "completed" },
  { id: 5, title: "Computer Assignment", status: "pending" },
  { id: 6, title: "Biology Report", status: "completed" },
  { id: 7, title: "Chemistry Lab", status: "pending" },
  { id: 8, title: "Geography Assignment", status: "completed" },
  { id: 9, title: "Government Assignment", status: "completed" },
  { id: 10, title: "Social Assignment", status: "pending" },
  { id: 11, title: "Christian Studies Assignment", status: "completed" },
  { id: 12, title: "Geology Assignment", status: "pending" },
  { id: 13, title: "Accounting Assignment", status: "completed" },
  { id: 14, title: "Commercial Assignment", status: "pending" },
];

export default function Assignment() {
  const pendingCount = assignments.filter((a) => a.status === "pending").length;
  const completedCount = assignments.filter(
    (a) => a.status === "completed"
  ).length;

  return (
    <section className="md:m-5 m-4">
      {/* ✅ Dynamic counts */}
      <TopPart pendingCount={pendingCount} completedCount={completedCount} />

      {/* ✅ Pass assignments to AssignmentPage */}
      <AssignmentPage assignments={assignments} />
    </section>
  );
}
