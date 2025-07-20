
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
    <div>
     <ImageSlider/>
     <SliderButton/>
     <MarqueeSection/>
     <WhySmartSchool/>
     <div className='mx-5 md:mx-15 xl:mx-35'>
       <Mission/>
       <Vission/>
       <Principal/>
     </div>
     <Testimonials/>
    </div>
    </>
  )
}

export default Home