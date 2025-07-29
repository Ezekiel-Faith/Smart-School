import React, { useEffect, useState } from 'react';

const MarqueeSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const text = "Apply Now! We are now accepting applications for the New Academic Session. Don't miss this prime opportunity to give your child the foundation for a brilliant future. Our school offers a holistic learning environment, state-of-the-art facilities, and a curriculum that builds not just academic excellence but also strong moral character.";

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* Marquee Section */}
      <section className='bg-purple-950 w-full h-8 md:h-10 xl:h-12 mb-5 xl:20 overflow-hidden'>
        <div
          className='whitespace-nowrap flex'
          style={{
            animation: 'marquee 30s linear infinite'
          }}
        >
          <p className='text-white text-2xl  md:mt-1 xl:mt-2 font-space-grotesk'>
            {text}
          </p>
        </div>

        {/* Marquee Keyframe Styling */}
        <style>
          {`
            @keyframes marquee {
              100% { transform: translateX(100%); }
              100% { transform: translateX(-100%); }
            }
          `}
        </style>
      </section>
    </div>
  );
};

export default MarqueeSection;