import React, { useState } from 'react';
import { questions } from '../data/questions';
import QuestionSelect from '../components/QuestionSelect';
import CodePane from '../components/CodePane';
import OutputPane from '../components/OutputPane';
import SplitView from '../components/SplitView';
import { files as fileLoader } from '../fileLoader';

export default function Home() {
  const [selectedId, setSelectedId] = useState(questions[0].id);
  const selected = questions.find(q => q.id === selectedId);

  let filesWithContent = [];
  if (selected?.files) {
    filesWithContent = selected.files.map(f => ({
      ...f,
      content: fileLoader[f.file] || 'File not found or not loaded.'
    }));
  }

  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <QuestionSelect value={selectedId} onChange={setSelectedId} />
      <div style={{ flex: 1, minHeight: 0 }}>
        {selected?.files &&
          <SplitView
            left={<CodePane files={filesWithContent} link={selected.link} />}
            right={<OutputPane screenshots={selected.screenshots} />}
          />}
      </div>
    </div>
  );
}
