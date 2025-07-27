import ImageSlider from '@/components/imageSlider';
import MarqueeSection from '@/components/MarqueeSection';
import Mission from '@/components/Mission';
import Principal from '@/components/Principal';
import SliderButton from '@/components/sliderButton';
import Testimonials from '@/components/Testimonials';
import Vission from '@/components/Vission';
import WhySmartSchool from '@/components/whySmartSchool';
import React from 'react';

const Home = () => {
  return (
    <>
      <ImageSlider />
      <SliderButton />
      <MarqueeSection />

      <div className='container'>
        <WhySmartSchool />
        <Mission />
        <Vission />
        <Principal />
      </div>

      <Testimonials />
    </>
  );
};

export default Home;
