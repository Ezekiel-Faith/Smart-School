import React from 'react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, Circle } from 'lucide-react';

export default function QuizSidePanel({
  questions,
  currentIndex,
  selectedAnswers,
  answeredCount,
}) {
  return (
    <div className='space-y-4'>
      <Card className='questions-answered-card'>
        <CardHeader className='text-center'>
          <div className='text-lg font-bold'>Questions Answered</div>
          <div className='text-4xl font-bold mt-2'>
            {answeredCount}/{questions.length}
          </div>
        </CardHeader>
      </Card>

      <Card className='rounded-xl p-4'>
        <CardContent className='p-0'>
          <div className='grid gap-3'>
            {questions.map((q, i) => {
              const isAnswered = !!selectedAnswers[q.id];
              const isCurrent = i === currentIndex;
              return (
                <Button
                  key={q.id}
                  className={`justify-start items-center flex gap-3 p-3 text-sm ${
                    isCurrent
                      ? 'bg-white text-purple-800 border-2 border-purple-300'
                      : 'bg-white/0 text-purple-700 border border-purple-200'
                  } `}
                >
                  <span className='w-6 h-6 flex items-center justify-center'>
                    {isAnswered ? (
                      <CheckCircle size={16} className='text-green-400' />
                    ) : (
                      <Circle size={16} className='text-purple-300' />
                    )}
                  </span>
                  <span>Question {i + 1}</span>
                </Button>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
