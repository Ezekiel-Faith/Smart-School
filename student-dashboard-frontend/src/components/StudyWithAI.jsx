import React from "react";
import { ArrowRight } from "lucide-react";
import Image1 from "../components/Asset/Frame1.png";
import Image2 from "../components/Asset/Frame2.png";

export default function StudyWithAI() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-pink-200 via-white to-purple-300 
      flex flex-col items-center px-4 py-4">

      {/* Logo */}
      <div className="w-full max-w-6xl">
        <h1 className="text-2xl lg:text-xl m-5 lg:m-9 font-semibold text-purple-700">
          Smart AI
        </h1>
      </div>

      {/* Greeting */}
      <div className="text-center mt-5 md:mt-12">
        <h2 className="text-purple-600 text-2xl md:text-3xl lg:text-xl font-bold">
          Hi Wisdom,
        </h2>

        <h3 className="text-xl md:text-2xl lg:text-xl font-extrabold">
          What would you like to know
        </h3>

        <p className="text-gray-600 text-sm md:text-xl lg:text-sm">
          Use one of our common searched prompts as a guide
        </p>
      </div>

      {/* Cards Section */}
      <div className="mt-7 md:mt-25 lg:mt-18 
        grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">

        {/* Card 1 */}
        <div className="border border-purple-300 bg-white/40 backdrop-blur-lg 
          p-3 rounded-xl shadow-sm cursor-pointer transition 
          hover:shadow-lg hover:scale-105 duration-300 ease-in-out
          w-74 h-35 md:w-80 md:h-50 lg:w-40 lg:h-27 
          flex flex-col items-center md:items-start justify-center md:justify-start">

          <img 
            src={Image2}
            alt="History Icon"
            className="w-7 h-10 md:w-10 md:h-10 lg:w-4 lg:h-4 
              my-3 md:my-7 lg:my-3"
          />

          <p className="text-xl text-center md:text-start px-5 md:px-0 
            md:text-2xl lg:text-sm text-gray-700">
            Balancing of basic chemical equations
          </p>
        </div>

        {/* Card 2 */}
        <div className="border border-purple-300 bg-white/40 backdrop-blur-lg 
          p-3 rounded-xl shadow-sm cursor-pointer transition 
          hover:shadow-lg hover:scale-105 duration-300 ease-in-out
          w-74 h-35 md:w-80 md:h-50 lg:w-40 lg:h-27 
          flex flex-col items-center md:items-start justify-center md:justify-start">

          <img 
            src={Image1} 
            alt="Chemical Icon"
            className="w-7 h-10 md:w-10 md:h-10 lg:w-4 lg:h-4 
              my-3 md:my-7 lg:my-3"
          />

          <p className="text-xl lg:text-sm text-gray-700">
            History of Nigeria
          </p>
        </div>

        {/* Card 3 */}
        <div className="border border-purple-300 bg-white/40 backdrop-blur-lg 
          p-3 rounded-xl shadow-sm cursor-pointer transition 
          hover:shadow-lg hover:scale-105 duration-300 ease-in-out
          w-74 h-35 md:w-80 md:h-50 lg:w-40 lg:h-27 
          flex flex-col items-center md:items-start justify-center md:justify-start">

          <img 
            src={Image1}
            alt="Chemical Icon"
            className="w-7 h-10 md:w-10 md:h-10 lg:w-4 lg:h-4 
              my-3 md:my-7 lg:my-3"
          />

          <p className="text-xl lg:text-sm text-gray-700">
            History of Nigeria
          </p>
        </div>

      </div>

      {/* Input Search Area */}
      <div className="mt-9 md:mt-25 lg:mt-9 w-[85%] md:w-full md:max-w-2xl lg:max-w-xl">
        <div className="flex items-center bg-white/50 backdrop-blur-lg 
          border border-purple-300 rounded-full overflow-hidden shadow-sm 
          sm:h-12 md:h-15 lg:h-10">

          <input
            type="text"
            placeholder="Ask Smart Anything"
            className="w-full px-14 py-3 bg-transparent outline-none text-gray-700"
          />

          <button className="bg-purple-500 hover:bg-purple-600 text-white 
            px-7 md:px-9 lg:px-7 py-2 md:py-6 lg:py-2 rounded-full 
            flex items-center gap-4 transition mr-2 
            h-10 md:h-13 lg:h-8">

            <ArrowRight size={20} />
          </button>
        </div>
      </div>

    </div>
  );
}
