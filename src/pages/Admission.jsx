import '../styles/global.css';
import '../index.css';
import rec from '../assets/Rectangle.png';

export default function Admission(){

  return(
    <>
    <div className='admission-container w-[1440px] flex flex-col justify-center md:w-auto md:m-10'>    
    <section className='mb-20 md:w-auto'>
      <div className='relative hero-bg p-30 md:w-auto md:m-10'>
        <h1 className='hero-txt font-project text-[49px] normal-case font-[700] leading-[58.8px]'>Admissions</h1>
      </div>
      <div className='flex flex-col items-center justify-center p-4 m-7'>
        <h1 className='Admission-txt txt'>Admission is On Now</h1>
        <p className='txt session-txt'>2025/2026 Session</p>
      </div>
    </section>

    <section className='mb-20 md:w-auto md:m-10'>
      <div className='font-project flex flex-col items-start'>
        <h1 className='text-[39px] normal-case font-[700] leading-[46.8px] text-black mb-4'>Study With Us</h1>
        <p className='font-project text-[20px] normal-case font-[400] leading-[24px] text-black '>
          At our school, we believe every child is born with unique potential, natural curiosity, and the ability to make a difference. Our motto—Discover. Learn. Shine.—captures our commitment to nurturing each student’s journey from their first steps in education to the moment they step confidently into the world. We encourage students to discover their interests, strengths, and passions through exploration and guided learning. We create opportunities for them to learn—not just in the classroom, but through experience, collaboration, and creativity. And most importantly, we empower them to shine by building confidence, character, and resilience, so they can make meaningful contributions to their communities and the world beyond school.
        </p>
        <button className='apply-btn bg-black text-white self-center rounded-[8px] mt-5 cursor-pointer hover:transform transition-all duration-300 hover:scale-90 '>Apply</button>
      </div>
    </section>

    <section>
      <div className='form-container p-30 flex flex-col items-center justify-center gap-3 md:w-auto md:m-10 md:p-20'>
        <h1 className='text-center text-white font-[600] text-[31px] normal-case leading-[37.2px] font-project '>Application Forms</h1>
        <button className='text-center download-btn text-white font-project cursor-pointer hover:transform hover:scale-105 transition-all duration-300 ease-in-out'>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
  <path d="M8 12.075C7.86667 12.075 7.74167 12.0543 7.625 12.013C7.50833 11.9717 7.4 11.9007 7.3 11.8L3.7 8.2C3.5 8 3.404 7.76667 3.412 7.5C3.42 7.23334 3.516 7 3.7 6.8C3.9 6.6 4.13767 6.496 4.413 6.488C4.68833 6.48 4.92567 6.57567 5.125 6.775L7 8.65V1.5C7 1.21667 7.096 0.979337 7.288 0.788004C7.48 0.59667 7.71733 0.50067 8 0.500003C8.28267 0.499337 8.52033 0.595337 8.713 0.788004C8.90567 0.98067 9.00133 1.218 9 1.5V8.65L10.875 6.775C11.075 6.575 11.3127 6.479 11.588 6.487C11.8633 6.495 12.1007 6.59934 12.3 6.8C12.4833 7 12.5793 7.23334 12.588 7.5C12.5967 7.76667 12.5007 8 12.3 8.2L8.7 11.8C8.6 11.9 8.49167 11.971 8.375 12.013C8.25833 12.055 8.13333 12.0757 8 12.075ZM2 16.5C1.45 16.5 0.979333 16.3043 0.588 15.913C0.196666 15.5217 0.000666667 15.0507 0 14.5V12.5C0 12.2167 0.0960001 11.9793 0.288 11.788C0.48 11.5967 0.717333 11.5007 1 11.5C1.28267 11.4993 1.52033 11.5953 1.713 11.788C1.90567 11.9807 2.00133 12.218 2 12.5V14.5H14V12.5C14 12.2167 14.096 11.9793 14.288 11.788C14.48 11.5967 14.7173 11.5007 15 11.5C15.2827 11.4993 15.5203 11.5953 15.713 11.788C15.9057 11.9807 16.0013 12.218 16 12.5V14.5C16 15.05 15.8043 15.521 15.413 15.913C15.0217 16.305 14.5507 16.5007 14 16.5H2Z" fill="#F1F1F1"/>
</svg>
  Download Student Application
        </button>
      </div>

      <div className='relative subscribe-container w-[1440px] flex flex-row items-center py-50 px-10 mt-20 justify-between md:w-auto md:m-10 '>
        <div className='subscribe-header '>
          <h1 className='self-stretch text-[25px] text-white normal-case font-[500] leading-[30px] font-project mb-2'>Subscribe to Our Newsletter</h1>
          <p className='text-[16px] normal-case font-[400] font-project self-stretch text-white leading-[19.2px] w-[70%]'>Get the latest updates on school activities, academic calendars, learning resources, tech tips, and student achievements—delivered straight to your inbox.</p>
        </div>
        <div className='z-10'>
          <form className='subscribe-form z-10'>
            <input type="email" placeholder='Enter your email' className='email-input z-10' required />
            <button type='submit' className='submit-btn z-10 text-white'>Subscribe</button>
          </form>
        </div>
        <img src={rec} alt="" srcset="" className='rec absolute z-0 -top-[10px] right-0 w-full '/>
      </div>
    </section>
    </div>
    </>
  );
}