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
      <ImageSlider />
      <SliderButton />
      <MarqueeSection/>
    <div className='mx-30'>
      <WhySmartSchool/>
<<<<<<< HEAD
      <div className='md:mx-30'>
        <Mission/>
        <Vission/>
        <Principal/>
      </div>
      <Testimonials/>
=======
      <Mission/>
      <Vission/>
      <Principal/>
>>>>>>> 706b05ec4c94850c6a78c18f6d984fb3ca64f278
    </div>
    <Testimonials/>
    </div>
    </>
  )
}

export default Home