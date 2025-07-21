
import ImageSlider from '@/Component/imageSlider'
import MarqueeSection from '@/Component/MarqueeSection'
import Mission from '@/Component/Mission'
import Principal from '@/Component/Principal'
import SliderButton from '@/Component/sliderButton'
import Testimonials from '@/Component/Testimonials'
import Vission from '@/Component/Vission'
import WhySmartSchool from '@/Component/whySmartSchool'
import React from 'react'

const Home = () => {
  return (
    <>
     <ImageSlider/>
     <SliderButton/>
     <MarqueeSection/>

     <div className='about-container'>
      
     <WhySmartSchool/>
     <Mission/>
      <Vission/>
      <Principal/>
      </div>

     <Testimonials/>
    </>
  )
}

export default Home