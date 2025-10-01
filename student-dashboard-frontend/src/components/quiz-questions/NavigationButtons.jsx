import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Buttons from '../util/Buttons';

export default function NavigationButtons({
  onPrev,
  onNext,
  disablePrev,
  disableNext,
}) {
  return (
    <div className='question-navigation-container'>
      <Buttons
        icon={ChevronLeft}
        // label='Previous'
        onClick={onPrev}
        disabled={disablePrev}
        className='question-navigation-btn'
      />
      <Buttons
        icon={ChevronRight}
        // label='Next'
        onClick={onNext}
        disabled={disableNext}
        className='question-navigation-btn'
      />
    </div>
  );
}
