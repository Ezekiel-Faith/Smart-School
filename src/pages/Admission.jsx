import '../styles/global.css';
import '../index.css';
import Hero from '@/components/hero';
import Study from '@/components/study';
import DownloadNews from '@/components/News';

export default function Admission(){

  return(
    <>
    <div className='admission-container w-[1440px] flex flex-col justify-center md:w-auto md:m-10'>    
    <Hero />
    <Study />
    <DownloadNews />
    </div>
    </>
  );
}