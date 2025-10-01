import Buttons from '@/components/util/Buttons';
import QuizHeading from '@/components/QuizHeading';
import QuizQuestions from '@/components/QuizQuestions';
import SubjectButton from '@/components/SubjectButton';
import LoadingModal from '@/components/util/LoadingModal';
import { subjects } from '@/constants/quizSubjects';
import { ChevronRight } from 'lucide-react';
import React, { useEffect, useState } from 'react';

export default function TakeQuiz() {
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [quizStarted, setQuizStarted] = useState(false);

  // handle selecting a subject
  const handleSubjectSelect = (subject) => {
    setSelectedSubject(subject);
    setQuizStarted(false); // reset quizStarted when a new subject is selected
  };

  // handle clicking "Begin Study"
  const handleBeginStudy = () => {
    if (!selectedSubject) return;
    setLoading(true);
    setProgress(0);
  };

  // loading progress
  useEffect(() => {
    if (!loading) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setLoading(false);
          setQuizStarted(true);
          return 100;
        }
        return prev + 10;
      });
    }, 200);

    return () => clearInterval(interval);
  }, [loading]);

  // handle back button from quiz
  const handleBack = () => {
    setQuizStarted(false); // reset quizStarted
    setSelectedSubject(null); // go back to selection
    setProgress(0); // reset loading
  };

  // render QuizQuestions only if quiz has started and a subject is selected
  if (!loading && quizStarted && selectedSubject) {
    return (
      <QuizQuestions
        subjectKey={selectedSubject.key}
        subjectLabel={selectedSubject.label}
        onBack={handleBack}
      />
    );
  }

  return (
    <div className='quiz-background'>
      <div className='quiz-container'>
        <QuizHeading />

        {/* Subject buttons */}
        <div className='quiz-subject-btn-container'>
          {subjects.map((subject) => (
            <SubjectButton
              key={subject.key}
              icon={subject.icon}
              label={subject.label}
              href={subject.href}
              onClick={() => handleSubjectSelect(subject)} // store whole subject
              className={selectedSubject?.key === subject.key ? 'selected' : ''}
            />
          ))}
        </div>

        {/* Begin Study button */}
        <div className='quiz-begin-study-btn-container'>
          <Buttons
            icon={ChevronRight}
            label='Begin Study'
            href='#'
            onClick={handleBeginStudy}
            disabled={!selectedSubject}
            className={`quiz-begin-study-btn ${
              !selectedSubject
                ? 'cursor-not-allowed pointer-events-none opacity-50'
                : ''
            }`}
          />
        </div>

        {/* Loading modal */}
        <LoadingModal
          open={loading}
          progress={progress}
          onClose={() => setLoading(false)}
        />
      </div>
    </div>
  );
}
