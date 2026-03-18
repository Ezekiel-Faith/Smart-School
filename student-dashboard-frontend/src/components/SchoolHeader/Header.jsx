import React, { useState } from 'react';
import { FiSearch, FiBell } from 'react-icons/fi';
import bellImage from '../../Asset/bellImage.png';
import pictureImage from '../../Asset/pictureImage.png';

export default function Header({ user }) {
  const [searchText, setSearchText] = useState('');

  const defaultUser = {
    name: 'Abel Wisdom',
    image: pictureImage,
  };

  const activeUser = user || defaultUser;

  // handle search
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchText.trim() !== '') {
      console.log('Searching for:', searchText); // fake search
      setSearchText(''); // clear input
    }
  };

  return (
    <div className='bg-white/95 sticky top-0 z-40'>

      <div className='w-[90%] lg:w-[75%] mx-auto py-2 md:pr-20 lg:pr-0'>
      <header className='flex items-center gap-x-5 lg:justify-between'>
        {/* Search Input */}
        <form
          onSubmit={handleSearch}
          // className='flex flex-1 md:flex-grow justify-center max-w-full md:max-w-[400px] lg:max-w-[700px] ml-0 md:ml-30 lg:ml-50 '
          className='hidden md:flex flex-1 justify-center max-w-full md:max-w-[300px] lg:max-w-[700px]'
        >
          <div className='relative w-full'>
            <FiSearch
              className='absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer'
              size={20}
              onClick={handleSearch}
            />
            <input
              type='text'
              placeholder='Search your course....'
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              className='w-full pl-12 pr-6 py-4 rounded-[30px] border-2 border-purple-400/80 bg-white shadow-md 
        text-base placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-purple-200/50 
        focus:border-purple-400 transition duration-150 ease-in-out h-10 md:h-12 lg:h-10'
            />
          </div>
        </form>
        {/* Right Section */}
        <div className='flex items-center space-x-4 md:mr-2'>
          {/* Bell → hidden on mobile */}
          <button
            className='hidden ml-0 md:flex p-3 h-12 w-12 lg:h-14 lg:w-14 items-center justify-center 
      rounded-full border-2 border-purple-400 cursor-pointer
     bg-white shadow-md hover:bg-purple-50 transition duration-150 ease-in-out'
          >
            <img src={bellImage} className='w-auto lg:w-auto' />
          </button>

          {/* Profile (image always visible) */}
          <div className='flex items-center space-x-2'>
            <div
              className='w-12 h-12 md:w-14 md:h-14 rounded-full p-0.5 bg-purple-300 flex 
      items-center justify-center'
            >
              <img
                src={activeUser.image}
                alt={activeUser.name}
                className='w-full h-full object-cover rounded-full'
              />
            </div>

            {/* Username → hidden on mobile */}
            <span className='hidden md:inline text-purple-800 text-lg'>
              {activeUser.name}
            </span>
          </div>
        </div>
      </header>
    </div>
    </div>
    
  );
}
