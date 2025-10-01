import React from 'react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

export default function QuestionCard({
  question,
  options,
  selectedOption,
  onSelect,
  index,
}) {
  return (
    <Card className='question-card-container'>
      <CardHeader>
        <div className='question-card-question'>
          Question {index + 1}: {question}
        </div>
      </CardHeader>

      <CardContent className='grid gap-3'>
        {Object.entries(options).map(([key, value]) => {
          const isSelected = selectedOption === key;
          return (
            <button
              key={key}
              onClick={() => onSelect(key)}
              className={`question-option-btn ${
                isSelected
                  ? 'question-option-btn-selected'
                  : 'question-option-btn-default'
              }`}
            >
              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center ${
                  isSelected ? 'bg-white/20' : 'bg-white'
                }`}
              >
                {isSelected ? (
                  <CheckCircle size={16} />
                ) : (
                  <span className='question-option'>{key.toUpperCase()}</span>
                )}
              </div>
              <div className='question-option'>{value}</div>
            </button>
          );
        })}
      </CardContent>
    </Card>
  );
}
