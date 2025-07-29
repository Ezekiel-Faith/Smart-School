import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import bgImage from '../assets/image/gown.png';
import AnimateOnScroll from './AnimateOnScroll';

export default function ContactSection() {
  const mapInstanceRef = useRef(null);

  useEffect(() => {
    const mapElement = document.getElementById('map');
    if (!mapElement) {
      return;
    }

    if (mapInstanceRef.current) {
      mapInstanceRef.current.remove();
      mapInstanceRef.current = null;
    }
    if (mapElement._leaflet_id) {
      L.map(mapElement).remove();
    }

    const map = L.map('map').setView([6.5244, 3.3792], 11);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors',
    }).addTo(map);

    L.marker([6.5568768, 3.3292288])
      .addTo(map)
      .bindPopup('School Location')
      .openPopup();

    // Store the map instance in the ref
    mapInstanceRef.current = map;

    // Clean up map on component unmount
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  const inputClass =
    'w-full p-2 md:p-5 bg-white/40 md:text-2xl lg:text-[20px] rounded-md placeholder-black shadow-[0_7px_1px_rgba(128,90,213,3)] focus:outline-none focus:ring-2 focus:ring-purple-500';

  return (
    <div className='contact-section-container'>
      {/* Map Section */}
      <AnimateOnScroll
        className='contact-section-map-container'
        animationClasses='opacity-0 scale-95'
        inViewClasses='opacity-100 scale-100'
        transition='transition-all duration-700 ease-out'
      >
        <div id='map' className='contact-section-map' />
      </AnimateOnScroll>

      {/* Form Section */}
      <AnimateOnScroll
        className='contact-section-form-container'
        delay='delay-200'
        animationClasses='opacity-0 translate-y-10'
        inViewClasses='opacity-100 translate-y-0'
        transition='transition-all duration-700 ease-out'
      >
        <div
          className='absolute inset-0 bg-cover bg-center z-0'
          style={{ backgroundImage: `url(${bgImage})`, opacity: 0.95 }}
        />
        <form className='contact-section-form'>
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
            className='w-full py-3 text-white rounded-md md:text-2xl lg:text-xl level-btn'
          >
            Send Message
          </button>
        </form>
      </AnimateOnScroll>
    </div>
  );
}
