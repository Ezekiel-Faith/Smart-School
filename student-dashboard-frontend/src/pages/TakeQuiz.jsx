// import Buttons from '@/components/Buttons';
// import QuizHeading from '@/components/QuizHeading';
// import SubjectButton from '@/components/SubjectButton';
// import LoadingModal from '@/components/util/LoadingModal';
// import { BookOpen, ChevronRight } from 'lucide-react';
// import React from 'react';

// export default function TakeQuiz() {
//   return (
//     // styling will change for the notification heder and side panel
//     <div className='quiz-background'>
//       <div className='quiz-container'>
//         {/* Heading and Subheading */}
//         <QuizHeading />

//         {/* Course Buttons */}
//         <div className='quiz-subject-btn-container'>
// <SubjectButton icon={BookOpen} label='Mathematics' href='/math' />

// <SubjectButton
//   icon={BookOpen}
//   label='English Language'
//   href='/english'
// />

// <SubjectButton icon={BookOpen} label='Physics' href='/physics' />

// <SubjectButton icon={BookOpen} label='Chemistry' href='/chemistry' />

// <SubjectButton
//   icon={BookOpen}
//   label='Further Mathematics'
//   href='/furtherMaths'
// />

// <SubjectButton icon={BookOpen} label='Biology' href='/biology' />

// <SubjectButton
//   icon={BookOpen}
//   label='Computer Science'
//   href='/computerScience'
// />

// <SubjectButton
//   icon={BookOpen}
//   label='Civic Education'
//   href='/civic'
// />

// <SubjectButton
//   icon={BookOpen}
//   label='Agricultural Science'
//   href='/agricScience'
// />

// <SubjectButton
//   icon={BookOpen}
//   label='Animal Husbandry'
//   href='/animal'
// />

// <SubjectButton
//   icon={BookOpen}
//   label='Food And Nutrition'
//   href='/foodAndNut'
// />

// <SubjectButton icon={BookOpen} label='Economics' href='/economics' />
//         </div>

//         <div className='quiz-begin-study-btn-container'>
//           <Buttons icon={ChevronRight} label='Begin Study' href='#' />
//         </div>

//         <LoadingModal />
//       </div>
//     </div>
//   );
// }

import Buttons from '@/components/Buttons';
import QuizHeading from '@/components/QuizHeading';
import SubjectButton from '@/components/SubjectButton';
import LoadingModal from '@/components/util/LoadingModal';
import { BookOpen, ChevronRight } from 'lucide-react';
import React, { useState } from 'react';

export default function TakeQuiz() {
  const [loading, setLoading] = useState(false);

  function handleOpen() {
    setLoading(true);
  }

  function handleClose() {
    setLoading(false);
  }

  return (
    <div className='quiz-background'>
      <div className='quiz-container'>
        <QuizHeading />

        <div className='quiz-subject-btn-container'>
          <SubjectButton
            icon={BookOpen}
            label='Mathematics'
            href='/math'
            onClick={handleOpen}
          />

          <SubjectButton
            icon={BookOpen}
            label='English Language'
            href='/english'
            onClick={handleOpen}
          />

          <SubjectButton
            icon={BookOpen}
            label='Physics'
            href='/physics'
            onClick={handleOpen}
          />

          <SubjectButton
            icon={BookOpen}
            label='Chemistry'
            href='/chemistry'
            onClick={handleOpen}
          />

          <SubjectButton
            icon={BookOpen}
            label='Further Mathematics'
            href='/furtherMaths'
            onClick={handleOpen}
          />

          <SubjectButton
            icon={BookOpen}
            label='Biology'
            href='/biology'
            onClick={handleOpen}
          />

          <SubjectButton
            icon={BookOpen}
            label='Computer Science'
            href='/computerScience'
            onClick={handleOpen}
          />

          <SubjectButton
            icon={BookOpen}
            label='Civic Education'
            href='/civic'
            onClick={handleOpen}
          />

          <SubjectButton
            icon={BookOpen}
            label='Agricultural Science'
            href='/agricScience'
            onClick={handleOpen}
          />

          <SubjectButton
            icon={BookOpen}
            label='Animal Husbandry'
            href='/animal'
            onClick={handleOpen}
          />

          <SubjectButton
            icon={BookOpen}
            label='Food And Nutrition'
            href='/foodAndNut'
            onClick={handleOpen}
          />

          <SubjectButton
            icon={BookOpen}
            label='Economics'
            href='/economics'
            onClick={handleOpen}
          />
        </div>

        <div className='quiz-begin-study-btn-container'>
          <Buttons
            icon={ChevronRight}
            label='Begin Study'
            href='#'
            onClick={handleOpen}
          />
        </div>

        <LoadingModal open={loading} onClose={handleClose} />
      </div>
    </div>
  );
}
