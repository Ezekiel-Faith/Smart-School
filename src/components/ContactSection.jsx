import { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import bgImage from '../assets/image/gown.png'; // Ensure this path is correct
import AnimateOnScroll from './AnimateOnScroll'; // Adjust path as necessary

export default function ContactSection() {
  useEffect(() => {
    // This part ensures Leaflet map initializes correctly without issues on re-renders
    const existingMap = L.DomUtil.get('map');
    if (existingMap && existingMap._leaflet_id) {
      existingMap._leaflet_id = null;
    }
    const map = L.map('map').setView([6.5244, 3.3792], 11); // Coordinates for Lagos, Nigeria
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors',
    }).addTo(map);

    // Optional: Add a marker for your school's location if you have one
    // L.marker([6.5244, 3.3792]).addTo(map)
    //   .bindPopup('Smart School Location')
    //   .openPopup();
  }, []); // Empty dependency array means this runs once on mount

  const inputClass =
    'w-full p-5 bg-white/40 rounded-md placeholder-white text-white shadow-[0_7px_1px_rgba(128,90,213,3)] focus:outline-none focus:ring-2 focus:ring-purple-500';

  return (
    <section className='mt-20'>
      <div className='grid grid-cols-1 lg:grid-cols-2 min-h-[520px] gap-6'>
        {/* Map Section - Wrapped with AnimateOnScroll */}
        <AnimateOnScroll
          className='h-full rounded-xl overflow-hidden shadow-md'
          animationClasses='opacity-0 scale-95' // Map scales in and fades
          inViewClasses='opacity-100 scale-100'
          transition='transition-all duration-700 ease-out'
        >
          <div id='map' className='w-full h-full' />
        </AnimateOnScroll>

        {/* Form Section - Wrapped with AnimateOnScroll */}
        <AnimateOnScroll
          className='relative p-8 flex items-center rounded-xl'
          delay='delay-200' // Staggered delay after the map
          animationClasses='opacity-0 translate-y-10' // Form slides up and fades
          inViewClasses='opacity-100 translate-y-0'
          transition='transition-all duration-700 ease-out'
        >
          <div
            className='absolute inset-0 bg-cover bg-center z-0'
            style={{ backgroundImage: `url(${bgImage})`, opacity: 0.95 }}
          />
          <form className='relative z-10 w-full space-y-5 max-w-md mx-auto'>
            <input type='text' placeholder='Your Name' className={inputClass} />
            <input
              type='email'
              placeholder='Your E-mail'
              className={inputClass}
            />
            <input type='text' placeholder='Subject' className={inputClass} />
            <textarea
              placeholder='Message'
              className={`${inputClass} h-32 resize-none`}
            />
            <button
              type='submit'
              className='w-full py-3 bg-purple-700 text-white rounded-md level-btn'
            >
              Send Message
            </button>
          </form>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
