import React from 'react';
import { Progress } from '@/components/ui/progress';

export default function QuizProgress({ progress = 0 }) {
  return (
    <div className='mt-4 mb-6'>
      <div className='flex items-center justify-between space-x-4'>
        <div className='w-full'>
          <Progress
            value={Math.floor(progress)}
            className='h-3 bg-[var(--color-lavender-light)]'
          />
        </div>
        <div className='ml-4 text-sm font-medium'>{Math.floor(progress)}%</div>
      </div>
    </div>
  );
}
