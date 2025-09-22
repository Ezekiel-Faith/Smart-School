import React, { useRef } from 'react';
import { Button } from './ui/button';

export default function SubjectButton({ icon: Icon, label, href, onClick }) {
  // return (
  //   <Button asChild className={` quiz-btn `}>
  //     <a href={href} className='flex items-center gap-2 '>
  //       {Icon && <Icon className='w-5 h-5' />}
  //       <span className='text-[17px] '>{label}</span>
  //     </a>
  //   </Button>
  // );

  const btnRef = useRef(null);

  function handleMouseEnter(e) {
    const btn = btnRef.current;
    const rect = btn.getBoundingClientRect();
    const fromLeft = e.clientX - rect.left < rect.width / 2;

    btn.style.setProperty('--origin', fromLeft ? 'left' : 'right');
    btn.classList.add('hover-in');
    btn.classList.remove('hover-out');
  }

  function handleMouseLeave(e) {
    const btn = btnRef.current;
    const rect = btn.getBoundingClientRect();
    const toLeft = e.clientX - rect.left < rect.width / 2;

    btn.style.setProperty('--origin', toLeft ? 'left' : 'right');
    btn.classList.add('hover-out');
    btn.classList.remove('hover-in');
  }

  return (
    <Button asChild>
      <a
        href={href}
        ref={btnRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className='quiz-subject-btn'
        onClick={(e) => {
          e.preventDefault(); // stop navigation if you want modal first
          onClick?.();
        }}
        style={{ '--origin': 'left' }}
      >
        {Icon && <Icon className='quiz-btn-icn' />}
        <span className='quiz-btn-label'>{label}</span>
      </a>
    </Button>
  );
}
