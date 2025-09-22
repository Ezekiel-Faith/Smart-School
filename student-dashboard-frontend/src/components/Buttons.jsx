import React from 'react';
import { Button } from './ui/button';

export default function Buttons({ icon: Icon, label, href, onClick }) {
  return (
    <Button asChild className={`quiz-begin-study-btn`}>
      <a
        href={href}
        onClick={(e) => {
          e.preventDefault();
          onClick?.();
        }}
        className='flex items-center gap-2 '
      >
        <span className='quiz-btn-label'>{label}</span>
        {Icon && <Icon className='w-5 h-5' />}
      </a>
    </Button>
  );
}
