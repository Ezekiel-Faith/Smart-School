import React, { useEffect } from 'react';
import { Progress } from '../ui/progress';

export default function LoadingModal({ open, onClose, progress = 0 }) {
  // Close on Escape key
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
      className='loading-modal-container'
      onClick={onClose} // backdrop click closes modal
    >
      <div
        className='w-[80%] lg:w-[30%] h-[30px] text-center'
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
