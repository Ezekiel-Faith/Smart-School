import React, { useState, useEffect } from 'react';  // <-- Added useEffect import

const SliderButton = () => {
  const [activeIndex, setActiveIndex] = useState(0); // Track active button

  // Auto change active button every 7 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % 3); // Cycle through 0,1,2
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* Slider Indicator Buttons */}
      <div className='w-full bg-white h-12 md:18 flex justify-center items-center gap-2 p-4'>
        {[0, 1, 2].map((index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`relative rounded-4xl h-2 w-10 md:w-20 xl:w-35 overflow-hidden
              ${activeIndex === index ? 'bg-gray-600' : 'bg-gray-400'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default SliderButton;
