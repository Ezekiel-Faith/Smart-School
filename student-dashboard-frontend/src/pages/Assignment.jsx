// pages/Assignment.jsx
import React, { useState } from "react";
import TopPart from "@/components/myComponents/TopPart";
import AssignmentPage from "@/components/myComponents/AssignmentPage";
import initialAssignments from "@/components/util/js/AssignmentMock"; // ✅ import

export default function Assignment() {
  const [assignments, setAssignments] = useState(initialAssignments);

  // parent updater: mark assignment completed by id
  const handleAssignmentCompleted = (assignmentId) => {
    setAssignments((prev) =>
      prev.map((a) =>
        a.id === assignmentId ? { ...a, status: "completed" } : a
      )
    );
  };

  const pendingCount = assignments.filter((a) => a.status === "pending").length;
  const completedCount = assignments.filter(
    (a) => a.status === "completed"
  ).length;

  return (
    <section className="md:m-5 m-4">
      <TopPart pendingCount={pendingCount} completedCount={completedCount} />
      <AssignmentPage
        assignments={assignments}
        onAssignmentCompleted={handleAssignmentCompleted}
      />
    </section>
  );
}
