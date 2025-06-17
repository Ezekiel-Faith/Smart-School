import { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import bgImage from '../assets/image/gown.png';

export default function ContactSection() {
  useEffect(() => {
    const existingMap = L.DomUtil.get('map');
    if (existingMap && existingMap._leaflet_id) {
      existingMap._leaflet_id = null;
    }
    const map = L.map('map').setView([6.5244, 3.3792], 11);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors',
    }).addTo(map);
  }, []);

  const inputClass =
    'w-full p-3 bg-white/60 rounded-md placeholder-purple-500 text-purple-900 shadow-[0_7px_1px_rgba(128,90,213,3)] focus:outline-none focus:ring-2 focus:ring-purple-500';

  return (
    <section className='mt-20'>
      <div className='grid grid-cols-1 lg:grid-cols-2 min-h-[520px] gap-6'>
        {/* Map */}
        <div className='h-full rounded-xl overflow-hidden shadow-md'>
          <div id='map' className='w-full h-full' />
        </div>

        {/* Form */}
        <div className='relative p-8 flex items-center rounded-xl'>
          <div
            className='absolute inset-0 bg-cover bg-center rounded-xl z-0'
            style={{ backgroundImage: `url(${bgImage})`, opacity: 0.3 }}
          />
          <form className='relative z-10 w-full space-y-5 max-w-md mx-auto'>
            <h2 className='text-5xl font-bold text-purple-700 text-center'>
              Get in Touch
            </h2>
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
              className='w-full py-3 bg-purple-700 text-white rounded-md hover:bg-purple-800 transition shadow-md'
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
