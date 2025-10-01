import React, { useState, useMemo } from 'react';
import { quiz } from '@/constants/quizQuestions';
import QuestionCard from './quiz-questions/QuestionCard';
import QuizProgress from './quiz-questions/QuizProgress';
import NavigationButtons from './quiz-questions/NavigationButtons';
import QuizSidePanel from './quiz-questions/QuizSidePanel';
import Buttons from '@/components/util/Buttons';
import { ChevronLeft } from 'lucide-react';

export default function QuizQuestions({ subjectKey, subjectLabel, onBack }) {
  const questions = quiz[subjectKey] || [];
  const total = questions.length;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [committedAnswers, setCommittedAnswers] = useState({});

  const answeredCount = useMemo(
    () => Object.keys(committedAnswers).length,
    [committedAnswers]
  );
  const progressAnswered = Math.floor((answeredCount / total) * 100);

  const current = questions[currentIndex];

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((i) => i - 1);
      setSelectedOption(
        committedAnswers[questions[currentIndex - 1].id] ?? null
      );
    }
  };

  const handleNext = () => {
    if (!selectedOption) return;

    setCommittedAnswers((prev) => ({
      ...prev,
      [current.id]: selectedOption,
    }));

    if (currentIndex < total - 1) {
      setCurrentIndex((i) => i + 1);
      setSelectedOption(
        committedAnswers[questions[currentIndex + 1]?.id] ?? null
      );
    } else {
      const msg = document.getElementById('quiz-message');
      if (msg) {
        msg.innerText = 'Quiz complete! Submitting your answers...';
        msg.classList.remove('hidden');
        setTimeout(() => msg.classList.add('hidden'), 3000);
      }
      console.log('Final submitted answers:', committedAnswers);
    }
  };

  return (
    <div className='quiz-background'>
      <div
        id='quiz-message'
        className='hidden fixed top-4 right-4 bg-green-500 text-white p-4 rounded-lg shadow-xl z-50 transition-opacity duration-300'
      />

      <div className='quiz-question-container'>
        <div className='lg:col-span-2'>
          <div className='mb-6 '>
            <div>
              <span className='quiz-question-title quiz-purple-blend-text'>
                Smart
              </span>
              <span className='quiz-question-title'>Quiz</span>
              <h2 className='quiz-question-subject'>{subjectLabel}</h2>
              <QuizProgress progress={progressAnswered} />
            </div>
          </div>

          {/* Reusable Back Button */}
          <Buttons
            icon={ChevronLeft}
            // label='Back'
            onClick={onBack} // trigger callback to TakeQuiz
            className='question-navigation-btn'
          />

          <QuestionCard
            index={currentIndex}
            question={current.question}
            options={current.options}
            selectedOption={selectedOption}
            onSelect={setSelectedOption}
          />

          <NavigationButtons
            onPrev={handlePrev}
            onNext={handleNext}
            disablePrev={currentIndex === 0}
            disableNext={!selectedOption}
          />
        </div>

        <div className='lg:col-span-1'>
          <QuizSidePanel
            questions={questions}
            currentIndex={currentIndex}
            selectedAnswers={committedAnswers}
            answeredCount={answeredCount}
          />
        </div>
      </div>
    </div>
  );
}
