import React from 'react';
import underline from '../Asset/title_shape-underline.jpg';
import why1 from '../Asset/why-img-1.jpg';
import why2 from '../Asset/why-img-1.jpg';
import why3 from '../Asset/why-img-2.jpg';
import why4 from '../Asset/why-img-3.jpg';
import why5 from '../Asset/why-img-4.jpg';
import why6 from '../Asset/why-img-5.jpg';

const WhySmartSchool = () => {
  return (
    <div>
      {/* Why Smart School Section */}
      <section>
        <h1 className='text-purple-500 text-4xl text-center font-bold mt-3 font-space-grotesk'>WHY SMART SCHOOL?</h1>
        <img
          src={underline}
          alt='underline image'
          className='w-120 h-auto mx-auto flex justify-center items-center mt-2'
        />
        <div className='grid grid-cols-3 gap-28 py-20 px-65'>
          <div className='grid place-items-center text-center'>
            <img src={why1} alt='why-img-1' className="mb-5" />
            <h2 className='font-space-grotesk font-bold text-2xl mb-5'>Nursery School's curriculum</h2>
            <p className='font-space-grotesk'>Lorem ipsum dolor sit, amet consectetur. sed nulla morbi ellefend placerat convallis</p>
          </div>
          <div className='grid place-items-center text-center'>
            <img src={why2} alt='why-img-2' className="mb-5" />
            <h2 className='font-space-grotesk font-bold text-2xl mb-5'>Primary School's curriculum</h2>
            <p>Lorem ipsum dolor sit, amet consectetur. sed nulla morbi ellefend placerat convallis</p>
          </div>
          <div className='grid place-items-center text-center'>
            <img src={why3} alt='why-img-3' className="mb-5" />
            <h2 className='font-space-grotesk font-bold text-2xl mb-5'>Secondary School's curriculum</h2>
            <p>Lorem ipsum dolor sit, amet consectetur. sed nulla morbi ellefend placerat convallis</p>
          </div>
          <div className='grid place-items-center text-center'>
            <img src={why4} alt='why-img-4' className="mb-5" />
            <h2 className='font-space-grotesk font-bold text-2xl mb-5'>Modern Facilities</h2>
            <p>We provide a safe, tech-enhanced, environment with</p>
          </div>
          <div className='grid place-items-center text-center'>
            <img src={why5} alt='why-img-5' className="mb-5" />
            <h2 className='font-space-grotesk font-bold text-2xl mb-5'>Small Class Size</h2>
            <p>Ensuring personalised attention and better student</p>
          </div>
          <div className='grid place-items-center text-center'>
            <img src={why6} alt='why-img-6' className="mb-5" />
            <h2 className='font-space-grotesk font-bold text-2xl mb-5'>Parental Involvement</h2>
            <p>We foster strong partnership with parents for support</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhySmartSchool;
