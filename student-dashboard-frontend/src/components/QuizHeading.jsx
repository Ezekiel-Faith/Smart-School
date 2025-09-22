import React from 'react';

export default function QuizHeading() {
  return (
    <>
      <div className='quiz-heading-container'>
        <div className='quiz-heading-title'>
          <span className='quiz-heading-text quiz-purple-blend-text'>
            Hi Wisdom,
          </span>{' '}
          <span className='quiz-heading-text'>Quiz it Out!</span>
        </div>

        <p className='quiz-heading-paragraph'>
          Pick a course that you want to quiz out
        </p>
      </div>
    </>
  );
}
