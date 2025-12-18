import React from "react";

const Bottom = () => {
  return (
    <div className="space-y-6.5">
      <h1 className="text-purple-700 underline underline-offset-1 text-center mt-3">
        View Grade Graph
      </h1>

      <button className="block mx-auto underline underline-offset-1 bg-gradient-to-r from-purple-800 via-purple-600 to-purple-400 lg:w-[400px] px-4 py-2 text-[20px] rounded-2xl text-white text-center">
        Download Results
      </button>
    </div>
  );
};

export default Bottom;
