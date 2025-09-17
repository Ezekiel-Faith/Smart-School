// components/myComponents/UploadModal.jsx
import React, { useEffect, useRef, useState } from "react";
import { Progress } from "@/components/ui/progress";
import pdf from "../../assets/Frame.svg";
import upload from "../../assets/Frame2.svg";

const UploadModal = ({ assignment, onClose, onUploadComplete }) => {
  const [progress, setProgress] = useState(40); // starting at 40%
  const intervalRef = useRef(null);

  useEffect(() => {
    // start interval once
    intervalRef.current = setInterval(() => {
      setProgress((prev) => {
        const next = Math.min(100, prev + 5);
        return next;
      });
    }, 500);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, []);

  // clear interval when it reaches 100
  useEffect(() => {
    if (progress >= 100 && intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, [progress]);

  const handleDone = () => {
    if (progress < 100) return; // safety
    // call parent updater (pass id)
    if (typeof onUploadComplete === "function") {
      try {
        onUploadComplete(assignment?.id);
      } catch (err) {
        // keep UX predictable — still try to close
        // eslint-disable-next-line no-console
        console.error("onUploadComplete threw:", err);
      }
    }
    // close modal
    if (typeof onClose === "function") {
      onClose();
    }
  };

  return (
    <section className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-white text-gray-700 w-full max-w-[600px] rounded-2xl shadow-xl p-6 flex flex-col gap-6">
        <h1 className="text-xl font-semibold text-center text-gray-900">
          File Upload
        </h1>

        <div className="flex flex-col items-center justify-center py-10 px-6 border-2 border-dashed border-gray-300 rounded-xl cursor-pointer hover:border-purple-500 transition">
          <img src={upload} alt="upload" className="mb-4 w-16 h-16" />
          <h1 className="text-gray-600">
            Drag and Drop or{" "}
            <span className="text-(--color-purple) font-semibold cursor-pointer hover:underline">
              browse
            </span>{" "}
            your file
          </h1>
        </div>

        <div className="flex items-center gap-3 w-full border border-gray-200 rounded-lg p-4 shadow-sm">
          <img src={pdf} alt="pdf" className="w-8 h-8" />
          <div className="flex flex-col w-full">
            <h1 className="text-sm font-medium text-gray-900">
              {assignment?.title || "file"}.pdf
            </h1>

            <div className="flex items-center gap-2 mt-2">
              <Progress value={progress} className="flex-1 h-2" />
              <span className="text-sm font-medium text-gray-500">
                {progress}%
              </span>
            </div>

            <aside className="flex items-center justify-between text-sm text-gray-500 mt-2">
              <p>1.2 MB of 3.5 MB</p>
              <p className="ml-auto text-(--color-purple) font-medium">
                {progress < 100 ? "Uploading..." : "Upload complete"}
              </p>
            </aside>
          </div>
        </div>

        <button
          onClick={handleDone}
          disabled={progress < 100}
          className={`font-semibold rounded-full py-2.5 px-6 transition ${
            progress < 100
              ? "opacity-50 cursor-not-allowed"
              : "bg-(--color-purple) hover:bg-purple-700 text-white"
          }`}
        >
          Done
        </button>
      </div>
    </section>
  );
};

export default UploadModal;
