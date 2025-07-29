import { useParams } from 'react-router-dom';
import '../styles/global.css';
import Banner from '@/components/Banner';
import Study from '@/components/Study';
import DownloadNews from '@/components/News';

export default function Admission() {
  const { pageTitle } = useParams();

  const formattedTitle = pageTitle
    ? pageTitle
        .replace(/-/g, ' ')
        .split(' ')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
    : 'Admission';

  return (
    <>
      <div className='container'>
        <Banner title={formattedTitle} />
        <Study />
        <DownloadNews />
      </div>
    </>
  );
}
