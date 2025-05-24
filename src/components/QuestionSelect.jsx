import React, { useState } from 'react';
import Select from 'react-dropdown-select';
import { categoriesQuestions } from '../data/categoriesQuestions';

const categoryOptions = Object.keys(categoriesQuestions).map(cat => ({
  value: cat,
  label: cat.charAt(0).toUpperCase() + cat.slice(1)
}));

export default function QuestionSelect({ value, onChange }) {
  const [selectedCategory, setSelectedCategory] = useState(categoryOptions[0].value);

  const questionOptions = categoriesQuestions[selectedCategory] || [];
  const selectedQuestion = questionOptions.find(q => q.id === value);

  return (
    <div style={{ margin: '1rem 0', display: 'flex', justifyContent: 'center', width: '100%', gap: '1rem' }}>
      {/* Category Dropdown */}
      <Select
        options={categoryOptions}
        values={categoryOptions.filter(opt => opt.value === selectedCategory)}
        onChange={vals => {
          const newCategory = vals[0]?.value;
          setSelectedCategory(newCategory);
          // Optionally reset question selection on category change
          if (categoriesQuestions[newCategory]?.[0]) {
            onChange(categoriesQuestions[newCategory][0].id);
          } else {
            onChange(undefined);
          }
        }}
        placeholder="Select category..."
        style={{ width: 200 }}
      />

      <Select
        options={questionOptions.map(q => ({ value: q.id, label: q.label }))}
        values={selectedQuestion ? [{ value: selectedQuestion.id, label: selectedQuestion.label }] : []}
        onChange={vals => onChange(vals[0]?.value)}
        placeholder="Select a question..."
        style={{ width: 300 }}
      />
    </div>
  );
}
