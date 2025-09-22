import React, { useEffect, useState } from 'react';
import { Progress } from '../ui/progress';

export default function LoadingModal({ open, onClose }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!open) return; // reset only when open

    setProgress(0);

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 10;
      });
    }, 200);

    return () => clearInterval(interval);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    function handleKeyDown(e) {
      if (e.key === 'Escape') {
        onClose?.();
      }
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className='fixed inset-0 bg-[#4e4b4b]/50 bg-opacity-70 flex items-center justify-center z-50'
      onClick={onClose} // backdrop click
    >
      <div
        className='w-[30%] h-[30px] text-center'
        onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
      >
        <Progress
          value={progress}
          className='h-full w-full rounded-full bg-gray-200'
        />
      </div>
    </div>
  );
}
