import AboutBanner from '@/components/AboutBanner';
import { AboutFAQ } from '@/components/AboutFAQ';
import AboutHero from '@/components/AboutHero';

export default function About() {
  return (
    <div className='mx-30'>
      <AboutBanner />
      <AboutHero />
      <AboutFAQ />
    </div>
  );
}
