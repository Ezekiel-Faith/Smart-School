import React, { useRef } from 'react';
import { Button } from './ui/button';

export default function SubjectButton({
  icon: Icon,
  label,
  href,
  onClick,
  className = '',
}) {
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
        className={`quiz-subject-btn ${className}`}
        onClick={(e) => {
          e.preventDefault();
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
