import Banner from '@/components/Banner';
import { AboutFAQ } from '@/components/AboutFAQ';
import AboutHero from '@/components/AboutHero';

export default function About() {
  return (
    <div className='mx-30'>
      <Banner />
      <AboutHero />
      <AboutFAQ />
    </div>
  );
}
