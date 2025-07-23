import '../styles/global.css';
import '../index.css';
import Hero from '@/components/hero';
import Study from '@/components/study';
import DownloadNews from '@/components/News';

export default function Admission() {
  return (
    <>
      <div className='container'>
        <Hero />
        <Study />
        <DownloadNews />
      </div>
    </>
  );
}
